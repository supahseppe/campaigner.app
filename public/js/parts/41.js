(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"6+6M":function(t,e,a){"use strict";var n=a("Zc98"),r={name:"Pagination",components:{},props:{links:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},i=a("KHd+"),l=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-full max-w-percent-90 mx-auto"},[a("div",{staticClass:"w-full border-t border-gray-200 px-4 flex items-center justify-between sm:px-0"},[t._l(t.links,(function(e,n){return["Previous"===e.label?a("div",{key:n,staticClass:"w-0 flex-1 flex"},[e.url?a("inertia-link",{staticClass:"-mt-px border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150",attrs:{href:e.url}},[a("svg",{staticClass:"mr-3 h-5 w-5 text-gray-400",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z","clip-rule":"evenodd"}})]),t._v("\n                    "+t._s(e.label)+"\n                ")]):a("div",{staticClass:"-mt-px border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150"},[a("svg",{staticClass:"mr-3 h-5 w-5 text-gray-400",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z","clip-rule":"evenodd"}})]),t._v("\n                    "+t._s(e.label)+"\n                ")])],1):t._e(),t._v(" "),"Previous"!==e.label&&"Next"!==e.label?a("div",{key:n,staticClass:"hidden md:flex"},[a("inertia-link",{staticClass:"-mt-px border-t-2 border-transparent pt-4 px-4 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150",class:{"border-indigo-500 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700 transition ease-in-out duration-150":e.active},attrs:{href:e.url}},[t._v("\n                    "+t._s(e.label)+"\n                ")])],1):t._e(),t._v(" "),"Next"===e.label?a("div",{key:n,staticClass:"w-0 flex-1 flex justify-end"},[e.url?a("inertia-link",{staticClass:"-mt-px border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150",attrs:{href:e.url}},[t._v("\n                    "+t._s(e.label)+"\n                    "),a("svg",{staticClass:"ml-3 h-5 w-5 text-gray-400",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]):a("div",{staticClass:"-mt-px border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150"},[t._v("\n                    "+t._s(e.label)+"\n                    "),a("svg",{staticClass:"ml-3 h-5 w-5 text-gray-400",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])],1):t._e()]}))],2)])}),[],!1,null,null,null).exports,s=a("a3pg"),o={name:"BrowseLayout",components:{Container:a("8oW1").a,SectionHeader:n.a,Pagination:l,Btn:s.a},props:{model:{type:String,default:"Model"},plural:{type:String,default:null},title:{type:String,default:null},pagination:{type:Array,default:function(){return[]}}},computed:{models:function(){return this.plural?this.plural:this.model+"s"}},methods:{capitalize:function(t){var e=t[0]||t.charAt(0);return e?e.toUpperCase()+t.slice(1):""}}},u=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section-header",{scopedSlots:t._u([{key:"aside",fn:function(){return[t._t("header-buttons",[a("btn",{attrs:{href:t.route(t.models+".create")}},[t._v("\n                    Create new "+t._s(t.capitalize(t.model))+"\n                ")])]),t._v(" "),t._t("extra-header-buttons")]},proxy:!0}],null,!0)},[t.title?a("h1",[t._v(t._s(t.title))]):a("h1",[t._v("Your "+t._s(t.capitalize(t.models)))])]),t._v(" "),a("container",[t._t("default")],2),t._v(" "),a("div",{staticClass:"flex flex-col justify-center h-20"},[t.pagination.length>3?a("pagination",{attrs:{links:t.pagination}}):t._e()],1)],1)}),[],!1,null,"e2c4094c",null);e.a=u.exports},"8oW1":function(t,e,a){"use strict";var n={components:{},data:function(){return{}},computed:{},methods:{}},r=a("KHd+"),i=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"pt-2 pb-6 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 md:py-6"},[this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},"9vvT":function(t,e,a){"use strict";a.r(e);var n=a("vk7+"),r=a("6+6M"),i=a("S1Fv"),l=a("f/2o"),s={name:"Browse",components:{BrowseLayout:r.a,Panel:i.a},props:{pager:{type:Object,default:function(){}}},data:function(){return{pageTitle:"Browsing Tasks",description:"Viewing all tasks associated with the current user"}},computed:{tasks:function(){return this.pager.data},syncedPageTitle:Object(l.c)("pageTitle")},watch:{},created:function(){},mounted:function(){this.syncedPageTitle=this.pageTitle},methods:{},layout:n.a,metaInfo:function(){return{title:this.pageTitle,meta:[{name:"description",content:this.pageDescription}]}}},o=a("KHd+"),u=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("browse-layout",{attrs:{model:"task",pagination:t.pager.links}},t._l(t.tasks,(function(e){return a("panel",{key:e.id,staticClass:"w-full h-full"},[a("inertia-link",{attrs:{href:t.route("tasks.show",e.slug)}},[t._v("\n                "+t._s(e.name)+"\n            ")])],1)})),1)],1)}),[],!1,null,null,null);e.default=u.exports}}]);