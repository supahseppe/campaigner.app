(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Task/Edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/Task/Edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! _Layouts/MainLayout */ "./resources/views/layouts/MainLayout.vue");
/* harmony import */ var _Components_inputs_TextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! _Components/inputs/TextInput */ "./resources/js/components/inputs/TextInput.vue");
/* harmony import */ var _Components_LoadingButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _Components/LoadingButton */ "./resources/js/components/LoadingButton.vue");
/* harmony import */ var _Components_TrashedMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _Components/TrashedMessage */ "./resources/js/components/TrashedMessage.vue");
/* harmony import */ var _Components_inputs_Wysiwyg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _Components/inputs/Wysiwyg */ "./resources/js/components/inputs/Wysiwyg.vue");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Edit',
  components: {
    TextInput: _Components_inputs_TextInput__WEBPACK_IMPORTED_MODULE_1__["default"],
    LoadingButton: _Components_LoadingButton__WEBPACK_IMPORTED_MODULE_2__["default"],
    TrashedMessage: _Components_TrashedMessage__WEBPACK_IMPORTED_MODULE_3__["default"],
    Wysiwyg: _Components_inputs_Wysiwyg__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    task: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      pageTitle: "Editing ".concat(this.task.name),
      pageDescription: 'Updating a task.',
      sending: false,
      form: {
        name: this.task.name,
        description: this.task.description
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
      this.$inertia.patch(this.route('tasks.update', this.task.slug), this.form).then(function () {
        return _this.sending = false;
      });
    },
    destroy: function destroy() {
      if (confirm('Are you sure you want to delete this task?')) {
        this.$inertia["delete"](this.route('tasks.destroy', this.task.slug));
      }
    },
    restore: function restore() {
      if (confirm('Are you sure you want to restore this task?')) {
        this.$inertia.put(this.route('tasks.restore', this.task.slug));
      }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Task/Edit.vue?vue&type=template&id=346fdda0&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/Task/Edit.vue?vue&type=template&id=346fdda0& ***!
  \**********************************************************************************************************************************************************************************************************/
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
      _vm.task.deleted_at
        ? _c(
            "trashed-message",
            { staticClass: "mb-6", on: { restore: _vm.restore } },
            [_vm._v("\n        This task has been deleted.\n    ")]
          )
        : _vm._e(),
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
                  label: "Title",
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
              _c(
                "div",
                { staticClass: "w-full mb-6" },
                [
                  _c("wysiwyg", {
                    attrs: { label: "Description" },
                    model: {
                      value: _vm.form.description,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "description", $$v)
                      },
                      expression: "form.description"
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
            { staticClass: "flex flex-wrap items-center justify-between" },
            [
              !_vm.task.deleted_at
                ? _c(
                    "button",
                    {
                      staticClass: "text-red-600 hover:underline",
                      attrs: { tabindex: "-1", type: "button" },
                      on: { click: _vm.destroy }
                    },
                    [_vm._v("\n                Delete Task\n            ")]
                  )
                : _vm._e(),
              _vm._v(" "),
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

/***/ "./resources/views/pages/Task/Edit.vue":
/*!*********************************************!*\
  !*** ./resources/views/pages/Task/Edit.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_346fdda0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=346fdda0& */ "./resources/views/pages/Task/Edit.vue?vue&type=template&id=346fdda0&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/views/pages/Task/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_346fdda0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_346fdda0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/pages/Task/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/pages/Task/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/views/pages/Task/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Task/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/pages/Task/Edit.vue?vue&type=template&id=346fdda0&":
/*!****************************************************************************!*\
  !*** ./resources/views/pages/Task/Edit.vue?vue&type=template&id=346fdda0& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_346fdda0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=346fdda0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/Task/Edit.vue?vue&type=template&id=346fdda0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_346fdda0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_346fdda0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);