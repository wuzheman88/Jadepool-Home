(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{144:function(t,e,i){},155:function(t,e,i){"use strict";var a=i(144);i.n(a).a},167:function(t,e,i){"use strict";i.r(e);var a={props:{logo:{type:String,required:!1},sticky:{type:Boolean,required:!1}},data:function(){return{mobileNavActive:!1,isScrolled:!1}},computed:{navLinks:function(){return this.$site.themeConfig.nav}},methods:{toggleMobileNav:function(){this.mobileNavActive=!this.mobileNavActive},onScroll:function(){this.isScrolled=window.scrollY>0}}},l=(i(155),i(11)),s=Object(l.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.navLinks?i("v-toolbar",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{app:"",flat:!t.isScrolled,width:"100%",color:"blue darken-4"}},[i("v-toolbar-title",{staticClass:"white--text"},[t._v(t._s(t.$site.title))]),t._v(" "),i("v-spacer"),t._v(" "),i("v-btn",{staticClass:"white--text",attrs:{flat:""}},[i("label",{staticClass:"white--text mr-2"},[t._v("Demo")]),t._v(" "),i("v-icon",[t._v("fas fa-balance-scale")])],1),t._v(" "),i("v-btn",{staticClass:"white--text",attrs:{flat:""}},[i("label",{staticClass:"white--text mr-2"},[t._v("Contact")]),t._v(" "),i("v-icon",[t._v("fas fa-blender-phone")])],1)],1):t._e()},[],!1,null,"0d925ee7",null);e.default=s.exports}}]);