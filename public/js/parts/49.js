(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{PMDb:function(t,e,n){"use strict";n.r(e);var a=n("vk7+"),i=n("a3pg"),c=n("Zc98"),o=n("f/2o"),s={name:"Factions",components:{Btn:i.a,SectionHeader:c.a},props:{faction:{type:Object,default:function(){}}},data:function(){return{pageTitle:"Factions: ".concat(this.faction.name),pageDescription:"Viewing the ".concat(this.faction.name," factions.")}},computed:{syncedPageTitle:Object(o.c)("pageTitle")},watch:{},created:function(){},mounted:function(){this.syncedPageTitle=this.pageTitle},methods:{},layout:a.a,metaInfo:function(){return{title:this.pageTitle,meta:[{name:"description",content:this.pageDescription}]}}},r=n("KHd+"),p=Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"h-screen container"},[n("section-header",{staticClass:"px-4",scopedSlots:t._u([{key:"aside",fn:function(){return[n("btn",{attrs:{href:t.route("factions.edit",t.faction.slug)}},[t._v("\n                Edit\n            ")])]},proxy:!0}])},[n("h1",[t._v(t._s(t.faction.name))])]),t._v(" "),n("section",{staticClass:"p-4"},[n("p",[t._v(t._s(t.faction.id))])])],1)}),[],!1,null,null,null);e.default=p.exports}}]);