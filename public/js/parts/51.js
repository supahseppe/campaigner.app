(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"2mjb":function(t,e,n){"use strict";n.r(e);var i=n("vk7+"),o=n("SL1t"),s=n("f2QL"),a=n("E7jC"),l=n("xWf0"),r=n("f/2o"),c={name:"Edit",components:{TextInput:o.a,LoadingButton:s.a,TrashedMessage:a.a,Wysiwyg:l.a},props:{location:{type:Object,default:function(){}}},data:function(){return{pageTitle:"Editing ".concat(this.location.name),pageDescription:"Updating a location.",sending:!1,form:{title:this.location.name,description:this.location.description}}},computed:{syncedPageTitle:Object(r.c)("pageTitle")},watch:{},created:function(){},mounted:function(){this.syncedPageTitle=this.pageTitle},methods:{submit:function(){var t=this;this.sending=!0,this.$inertia.patch(this.route("locations.update",this.location.slug),this.form).then((function(){return t.sending=!1}))},destroy:function(){confirm("Are you sure you want to delete this location?")&&this.$inertia.delete(this.route("locations.destroy",this.location.slug))},restore:function(){confirm("Are you sure you want to restore this location?")&&this.$inertia.put(this.route("locations.restore",this.location.slug))}},layout:i.a,metaInfo:function(){return{title:this.pageTitle,meta:[{name:"description",content:this.pageDescription}]}}},u=n("KHd+"),d=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"h-screen container"},[t.location.deleted_at?n("trashed-message",{staticClass:"mb-6",on:{restore:t.restore}},[t._v("\n        This location has been deleted.\n    ")]):t._e(),t._v(" "),n("form",{staticClass:"w-full p-4 bg-white rounded md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("div",{staticClass:"flex flex-wrap mb-6"},[n("text-input",{staticClass:"w-full mb-6",attrs:{label:"Title",type:"text",errors:t.$page.errors.name,required:"",autofocus:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),n("div",{staticClass:"w-full mb-6"},[n("wysiwyg",{attrs:{label:"Description"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1),t._v(" "),n("div",{staticClass:"flex flex-wrap items-center justify-between"},[t.location.deleted_at?t._e():n("button",{staticClass:"text-red-600 hover:underline",attrs:{tabindex:"-1",type:"button"},on:{click:t.destroy}},[t._v("\n                Delete Location\n            ")]),t._v(" "),n("loading-button",{staticClass:"px-4 py-2 font-bold text-gray-100 bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline",attrs:{loading:t.sending,type:"submit"}},[t._v("\n                Submit\n            ")])],1)])],1)}),[],!1,null,null,null);e.default=d.exports}}]);