(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SectionHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SectionHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex_pathify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex-pathify */ "./node_modules/vuex-pathify/dist/vuex-pathify.esm.js");
//
//
//
//
//
//
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
  name: 'PageHeader',
  components: {},
  props: {},
  data: function data() {
    return {};
  },
  computed: {
    pageTitle: Object(vuex_pathify__WEBPACK_IMPORTED_MODULE_0__["sync"])('pageTitle')
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Character/Add.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/Character/Add.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! _Layouts/MainLayout */ "./resources/views/layouts/MainLayout.vue");
/* harmony import */ var _Components_inputs_TextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! _Components/inputs/TextInput */ "./resources/js/components/inputs/TextInput.vue");
/* harmony import */ var _Components_LoadingButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _Components/LoadingButton */ "./resources/js/components/LoadingButton.vue");
/* harmony import */ var _Components_inputs_Wysiwyg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _Components/inputs/Wysiwyg */ "./resources/js/components/inputs/Wysiwyg.vue");
/* harmony import */ var _Components_SectionHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _Components/SectionHeader */ "./resources/js/components/SectionHeader.vue");
/* harmony import */ var vuex_pathify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex-pathify */ "./node_modules/vuex-pathify/dist/vuex-pathify.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Create',
  components: {
    SectionHeader: _Components_SectionHeader__WEBPACK_IMPORTED_MODULE_4__["default"],
    Wysiwyg: _Components_inputs_Wysiwyg__WEBPACK_IMPORTED_MODULE_3__["default"],
    'text-input': _Components_inputs_TextInput__WEBPACK_IMPORTED_MODULE_1__["default"],
    'loading-button': _Components_LoadingButton__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    npc: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      pageTitle: 'Adding new character',
      pageDescription: 'Adding a new character',
      sending: false,
      form: {
        name: null,
        alias: null,
        high_concept: null,
        bio: null,
        active: true,
        npc: this.npc
      }
    };
  },
  computed: {
    syncedPageTitle: Object(vuex_pathify__WEBPACK_IMPORTED_MODULE_5__["sync"])('pageTitle')
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {
    this.syncedPageTitle = this.pageTitle;
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.sending = true;
      this.$inertia.post(this.route('characters.store'), this.form).then(function () {
        return _this.sending = false;
      });
    }
  },
  layout: _Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
  metaInfo: function metaInfo() {
    return {
      title: this.pageTitle,
      meta: [{
        name: 'description',
        content: this.pageDescription
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SectionHeader.vue?vue&type=template&id=5498b077&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SectionHeader.vue?vue&type=template&id=5498b077& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "py-6 mb-6 px-4 bg-white shadow md:flex md:items-center md:justify-between"
    },
    [
      _c("div", { staticClass: "flex-1 min-w-0" }, [
        _c(
          "h2",
          {
            staticClass:
              "text-2xl font-bold leading-7 sm:text-3xl sm:leading-9 sm:truncate"
          },
          [
            _vm._t("default", [
              _vm._v(
                "\n                " + _vm._s(_vm.pageTitle) + "\n            "
              )
            ])
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-4 flex md:mt-0 md:ml-4" },
        [_vm._t("aside")],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Character/Add.vue?vue&type=template&id=6ba2bc47&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/Character/Add.vue?vue&type=template&id=6ba2bc47& ***!
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
    "section",
    { staticClass: "h-screen container" },
    [
      _c("section-header", [_vm._v("\n        Creating Character\n    ")]),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass:
            "w-full p-4 bg-white rounded md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto",
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submit($event)
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "flex flex-wrap mb-6" },
            [
              _c("text-input", {
                staticClass: "w-full mb-6",
                attrs: {
                  label: "Name",
                  type: "text",
                  errors: _vm.$page.errors.name,
                  required: "",
                  autofocus: ""
                },
                model: {
                  value: _vm.form.name,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "name", $$v)
                  },
                  expression: "form.name"
                }
              }),
              _vm._v(" "),
              _c("text-input", {
                staticClass: "w-full mb-6",
                attrs: {
                  label: "Alias",
                  type: "text",
                  errors: _vm.$page.errors.alias,
                  required: "",
                  autofocus: ""
                },
                model: {
                  value: _vm.form.alias,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "alias", $$v)
                  },
                  expression: "form.alias"
                }
              }),
              _vm._v(" "),
              _c("text-input", {
                staticClass: "w-full mb-6",
                attrs: {
                  label: "High Concept",
                  type: "text",
                  errors: _vm.$page.errors.high_concept,
                  required: "",
                  autofocus: ""
                },
                model: {
                  value: _vm.form.high_concept,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "high_concept", $$v)
                  },
                  expression: "form.high_concept"
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "w-full mb-6" },
                [
                  _c("wysiwyg", {
                    attrs: { label: "Bio" },
                    model: {
                      value: _vm.form.bio,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "bio", $$v)
                      },
                      expression: "form.bio"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex flex-wrap items-center" },
            [
              _c(
                "loading-button",
                {
                  staticClass:
                    "px-4 py-2 font-bold text-gray-100 bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline",
                  attrs: { loading: _vm.sending, type: "submit" }
                },
                [_vm._v("\n                Submit\n            ")]
              )
            ],
            1
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

/***/ "./resources/js/components/SectionHeader.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/SectionHeader.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SectionHeader_vue_vue_type_template_id_5498b077___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionHeader.vue?vue&type=template&id=5498b077& */ "./resources/js/components/SectionHeader.vue?vue&type=template&id=5498b077&");
/* harmony import */ var _SectionHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/SectionHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SectionHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SectionHeader_vue_vue_type_template_id_5498b077___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SectionHeader_vue_vue_type_template_id_5498b077___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SectionHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SectionHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/SectionHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SectionHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SectionHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SectionHeader.vue?vue&type=template&id=5498b077&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/SectionHeader.vue?vue&type=template&id=5498b077& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionHeader_vue_vue_type_template_id_5498b077___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SectionHeader.vue?vue&type=template&id=5498b077& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SectionHeader.vue?vue&type=template&id=5498b077&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionHeader_vue_vue_type_template_id_5498b077___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionHeader_vue_vue_type_template_id_5498b077___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/views/pages/Character/Add.vue":
/*!*************************************************!*\
  !*** ./resources/views/pages/Character/Add.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_6ba2bc47___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=6ba2bc47& */ "./resources/views/pages/Character/Add.vue?vue&type=template&id=6ba2bc47&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/views/pages/Character/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_6ba2bc47___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_6ba2bc47___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/pages/Character/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/pages/Character/Add.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/views/pages/Character/Add.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Character/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/pages/Character/Add.vue?vue&type=template&id=6ba2bc47&":
/*!********************************************************************************!*\
  !*** ./resources/views/pages/Character/Add.vue?vue&type=template&id=6ba2bc47& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_6ba2bc47___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=6ba2bc47& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Character/Add.vue?vue&type=template&id=6ba2bc47&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_6ba2bc47___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_6ba2bc47___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);