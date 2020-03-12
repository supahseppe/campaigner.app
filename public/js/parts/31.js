(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"KHd+":function(e,t,s){"use strict";function a(e,t,s,a,r,n,o,i){var l,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=s,d._compiled=!0),a&&(d.functional=!0),n&&(d._scopeId="data-v-"+n),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=l):r&&(l=i?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(d.functional){d._injectStyles=l;var u=d.render;d.render=function(e,t){return l.call(t),u(e,t)}}else{var c=d.beforeCreate;d.beforeCreate=c?[].concat(c,l):[l]}return{exports:e,options:d}}s.d(t,"a",(function(){return a}))},"Mx/I":function(e,t,s){"use strict";s.r(t);var a={metaInfo:{title:"Register"},components:{LoadingButton:s("f2QL").a},data:function(){return{sending:!1,form:{name:null,email:null,password:null,password_confirmation:null}}},methods:{submit:function(){var e=this;this.sending=!0,this.$inertia.post("/register",this.form).then((function(){return e.sending=!1}))}}},r=s("KHd+"),n=Object(r.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container mx-auto h-screen"},[s("div",{staticClass:"flex flex-wrap justify-center items-center h-full"},[s("div",{staticClass:"w-full max-w-sm"},[s("div",{staticClass:"flex flex-col break-words bg-white border border-2 rounded shadow-md"},[s("div",{staticClass:"px-6 py-3 mb-0 font-semibold text-gray-700 bg-gray-200"},[e._v("\n                    Register\n                ")]),e._v(" "),s("form",{staticClass:"w-full p-6",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[s("div",{staticClass:"flex flex-wrap mb-6"},[s("label",{staticClass:"block mb-2 text-sm font-bold text-gray-700",attrs:{for:"username"}},[e._v("\n                            Username:\n                        ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.username,expression:"form.username"}],staticClass:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",class:{"border-red-500":e.$page.errors.username},attrs:{id:"username",type:"text",name:"username",autofocus:""},domProps:{value:e.form.username},on:{input:function(t){t.target.composing||e.$set(e.form,"username",t.target.value)}}}),e._v(" "),e.$page.errors.username?s("p",{staticClass:"mt-4 text-xs italic text-red-500"},[e._v("\n                            "+e._s(e.$page.errors.username[0])+"\n                        ")]):e._e()]),e._v(" "),s("div",{staticClass:"flex flex-wrap mb-6"},[s("label",{staticClass:"block mb-2 text-sm font-bold text-gray-700",attrs:{for:"email"}},[e._v("\n                            E-Mail Address:\n                        ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",class:{"border-red-500":e.$page.errors.email},attrs:{id:"email",type:"email",name:"email",required:""},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),e.$page.errors.email?s("p",{staticClass:"mt-4 text-xs italic text-red-500"},[e._v("\n                            "+e._s(e.$page.errors.email[0])+"\n                        ")]):e._e()]),e._v(" "),s("div",{staticClass:"flex flex-wrap mb-6"},[s("label",{staticClass:"block mb-2 text-sm font-bold text-gray-700",attrs:{for:"password"}},[e._v("\n                            Password:\n                        ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",class:{"border-red-500":e.$page.errors.password},attrs:{id:"password",type:"password",name:"password",required:""},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),e._v(" "),e.$page.errors.password?s("p",{staticClass:"mt-4 text-xs italic text-red-500"},[e._v("\n                            "+e._s(e.$page.errors.password[0])+"\n                        ")]):e._e()]),e._v(" "),s("div",{staticClass:"flex flex-wrap mb-6"},[s("label",{staticClass:"block mb-2 text-sm font-bold text-gray-700",attrs:{for:"password-confirm"}},[e._v("\n                            Confirm Password:\n                        ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",attrs:{id:"password-confirm",type:"password",name:"password_confirmation",required:""},domProps:{value:e.form.password_confirmation},on:{input:function(t){t.target.composing||e.$set(e.form,"password_confirmation",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"flex flex-wrap"},[s("loading-button",{staticClass:"inline-block px-4 py-2 text-base font-bold leading-normal text-center text-gray-100 no-underline whitespace-no-wrap align-middle bg-blue-500 border rounded select-none hover:bg-blue-700",attrs:{loading:e.sending,type:"submit"}},[e._v("\n                            Register\n                        ")]),e._v(" "),s("p",{staticClass:"w-full mt-8 -mb-4 text-xs text-center text-gray-700"},[e._v("\n                            Already have an account?\n                            "),s("inertia-link",{staticClass:"text-blue-500 no-underline hover:text-blue-700",attrs:{href:"/login"}},[e._v("\n                                Login\n                            ")])],1)],1)])])])])])}),[],!1,null,null,null);t.default=n.exports},f2QL:function(e,t,s){"use strict";var a={name:"LoadingButton",props:{loading:Boolean}},r=s("KHd+"),n=Object(r.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"flex items-center",attrs:{disabled:this.loading}},[this.loading?t("div",{staticClass:"btn-spinner mr-2"}):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);t.a=n.exports}}]);