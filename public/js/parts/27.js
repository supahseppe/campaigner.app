(window.webpackJsonp=window.webpackJsonp||[]).push([[27,52],{"6sHe":function(t,e,n){"use strict";n.r(e);var s=n("vk7+"),a=n("a3pg"),i=n("Zc98"),o=n("f/2o"),c={name:"Location",components:{Btn:a.a,SectionHeader:i.a},props:{location:{type:Object,default:function(){}}},data:function(){return{pageTitle:"Location: ".concat(this.location.name),pageDescription:"Viewing the ".concat(this.location.name," location.")}},computed:{syncedPageTitle:Object(o.c)("pageTitle")},watch:{},created:function(){},mounted:function(){this.syncedPageTitle=this.pageTitle},methods:{},layout:s.a,metaInfo:function(){return{title:this.pageTitle,meta:[{name:"description",content:this.pageDescription}]}}},l=n("KHd+"),r=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"h-screen container"},[n("section-header",{staticClass:"px-4",scopedSlots:t._u([{key:"aside",fn:function(){return[n("btn",{attrs:{href:t.route("locations.edit",t.location.slug)}},[t._v("\n                Edit\n            ")])]},proxy:!0}])},[n("h1",[t._v(t._s(t.location.name))])]),t._v(" "),n("section",{staticClass:"p-4"},[n("p",[t._v(t._s(t.location.id))])])],1)}),[],!1,null,null,null);e.default=r.exports},Zc98:function(t,e,n){"use strict";var s=n("f/2o"),a={name:"PageHeader",components:{},props:{},data:function(){return{}},computed:{pageTitle:Object(s.c)("pageTitle")},watch:{},created:function(){},mounted:function(){},methods:{}},i=n("KHd+"),o=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"py-6 mb-6 px-4 bg-white shadow md:flex md:items-center md:justify-between"},[e("div",{staticClass:"flex-1 min-w-0"},[e("h2",{staticClass:"text-2xl font-bold leading-7 sm:text-3xl sm:leading-9 sm:truncate"},[this._t("default",[this._v("\n                "+this._s(this.pageTitle)+"\n            ")])],2)]),this._v(" "),e("div",{staticClass:"mt-4 flex md:mt-0 md:ml-4"},[this._t("aside")],2)])}),[],!1,null,null,null);e.a=o.exports},a3pg:function(t,e,n){"use strict";var s={name:"Btn",components:{},props:{href:{type:String,default:""},color:{type:String,default:"indigo"},wide:{type:Boolean,default:!1}},data:function(){return{}},computed:{classes:function(){var t=["inline-flex","items-center","justify-center","px-4","py-2","border","border-transparent","text-sm","leading-5","font-medium","rounded-md","text-white","bg-".concat(this.color,"-600"),"hover:bg-".concat(this.color,"-500"),"focus:outline-none","focus:border-".concat(this.color,"-700"),"focus:shadow-outline-".concat(this.color),"active:bg-".concat(this.color,"-700"),"transition","ease-in-out","duration-150"];return this.wide&&t.push("w-full"),t}},watch:{},created:function(){},mounted:function(){},methods:{}},a=n("KHd+"),i=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.href?n("span",{staticClass:"inline-flex rounded-md shadow-sm"},[n("inertia-link",t._g({class:t.classes,attrs:{href:t.href}},t.$listeners),[t._t("default")],2)],1):n("span",{staticClass:"inline-flex rounded-md shadow-sm"},[n("button",t._g({class:t.classes,attrs:{type:"button"}},t.$listeners),[t._t("default")],2)])}),[],!1,null,null,null);e.a=i.exports}}]);