!(function(e,t){var n,r;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{n=t("object"==typeof exports?require("vue"):e.Vue);for(r in n)("object"==typeof exports?exports:e)[r]=n[r]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=400)})({0:function(e,t){e.exports=function(e,t,n,r,o,i){var s,u,a,c,l,d=e=e||{},m=typeof e.default;return"object"!==m&&"function"!==m||(s=e,d=e.default),u="function"==typeof d?d.options:d,t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId=o),i?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=a):r&&(a=r),a&&(c=u.functional,l=c?u.render:u.beforeCreate,c?(u._injectStyles=a,u.render=function(e,t){return a.call(t),l(e,t)}):u.beforeCreate=l?[].concat(l,a):[a]),{esModule:s,exports:d,options:u}}},132:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,s,u;Object.defineProperty(t,"__esModule",{value:!0}),o=n(3),i=r(o),s=n(133),u=r(s),t.default=function(e){(0,i.default)(e),e.component(u.default.name,u.default)}},133:function(e,t,n){"use strict";function r(e){n(134)}var o,i,s,u,a,c,l,d,m,f,h,p;Object.defineProperty(t,"__esModule",{value:!0}),o=n(135),i=n.n(o),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-field",{staticClass:"md-autocomplete",class:e.fieldClasses,attrs:{"md-clearable":"","md-inline":e.isBoxLayout}},[n("md-menu",{attrs:{"md-direction":"bottom-start","md-dense":e.mdDense,"md-align-trigger":"","md-full-width":"","md-active":e.showMenu},on:{"update:mdActive":function(t){e.showMenu=t}}},[n("md-input",e._b({attrs:{id:e.mdInputId,name:e.mdInputName,maxlength:e.mdInputMaxlength,placeholder:e.mdInputPlaceholder},on:{focus:function(t){t.stopPropagation(),e.openOnFocus(t)},blur:e.hideOptions,input:e.onInput,click:function(t){t.stopPropagation(),t.preventDefault(),e.openOnFocus(t)}},model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}},"md-input",e.$attrs,!1)),e._v(" "),n("md-menu-content",{directives:[{name:"show",rawName:"v-show",value:e.hasScopedEmptySlot||e.hasFilteredItems,expression:"hasScopedEmptySlot || hasFilteredItems"}],class:e.contentClasses},[e.isPromisePending?n("div",{staticClass:"md-autocomplete-loading"},[n("md-progress-spinner",{attrs:{"md-diameter":40,"md-stroke":4,"md-mode":"indeterminate"}})],1):e._e(),e._v(" "),e.hasFilteredItems?n("div",{staticClass:"md-autocomplete-items"},e._l(e.getOptions(),(function(t,r){return n("md-menu-item",{key:r,on:{click:function(n){e.selectItem(t,n)}}},[e.$scopedSlots["md-autocomplete-item"]?e._t("md-autocomplete-item",null,{item:t,term:e.searchTerm}):[e._v(e._s(t))]],2)}))):e.hasScopedEmptySlot?n("md-menu-item",[n("div",{staticClass:"md-autocomplete-empty"},[e._t("md-autocomplete-empty",null,{term:e.searchTerm})],2)]):e._e()],1)],1),e._v(" "),e._t("default")],2)},u=[],a={render:s,staticRenderFns:u},c=a,l=n(0),d=!1,m=r,f=null,h=null,p=l(i.a,c,d,m,f,h),t.default=p.exports},134:function(e,t){},135:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){var s,u;try{s=t[o](i),u=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(u).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(u)}return r("next")})}}var i,s,u,a,c,l,d,m;Object.defineProperty(t,"__esModule",{value:!0}),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(136),a=r(u),c=n(137),l=r(c),d=n(8),m=r(d),t.default={name:"MdAutocomplete",props:{value:{type:null,required:!0},mdDense:Boolean,mdLayout:s({type:String,default:"floating"},(0,m.default)("md-layout",["floating","box"])),mdOpenOnFocus:{type:Boolean,default:!0},mdFuzzySearch:{type:Boolean,default:!0},mdOptions:{type:[Array,Promise],required:!0},mdInputName:String,mdInputId:String,mdInputMaxlength:[String,Number],mdInputPlaceholder:[String,Number]},data:function(){return{searchTerm:this.value,showMenu:!1,triggerPopover:!1,isPromisePending:!1,filteredAsyncOptions:[]}},computed:{isBoxLayout:function(){return"box"===this.mdLayout},fieldClasses:function(){if(this.isBoxLayout)return"md-autocomplete-box"},contentClasses:function(){if(this.isBoxLayout)return"md-autocomplete-box-content"},filteredStaticOptions:function(){if(this.isPromise(this.mdOptions))return!1;var e=this.mdOptions[0];if(this.mdOptions[0]&&this.searchTerm){if("string"==typeof e)return this.filterByString();if("object"===(void 0===e?"undefined":i(e)))return this.filterByObject()}return this.mdOptions},hasFilteredItems:function(){return this.filteredStaticOptions.length>0||this.filteredAsyncOptions.length>0},hasScopedEmptySlot:function(){return this.$scopedSlots["md-autocomplete-empty"]}},watch:{mdOptions:{deep:!0,immediate:!0,handler:(function(){function e(){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isPromise(this.mdOptions)){e.next=6;break}return this.isPromisePending=!0,e.next=4,this.mdOptions;case 4:this.filteredAsyncOptions=e.sent,this.isPromisePending=!1;case 6:case"end":return e.stop()}}),e,this)})));return e})()},value:function(e){this.searchTerm=e}},methods:{getOptions:function(){return this.isPromise(this.mdOptions)?this.filteredAsyncOptions:this.filteredStaticOptions},isPromise:function(e){return(0,l.default)(e)},matchText:function(e){var t=e.toLowerCase(),n=this.searchTerm.toLowerCase();return this.mdFuzzySearch?(0,a.default)(n,t):t.includes(n)},filterByString:function(){var e=this;return this.mdOptions.filter((function(t){return e.matchText(t)}))},filterByObject:function(){var e=this;return this.mdOptions.filter((function(t){var n,r=Object.values(t),o=r.length;for(n=0;n<=o;n++)if("string"==typeof r[n]&&e.matchText(r[n]))return!0}))},openOnFocus:function(){this.mdOpenOnFocus&&this.showOptions()},onInput:function(e){this.$emit("input",e),this.mdOpenOnFocus||this.showOptions(),"inputevent"!==this.searchTerm.constructor.name.toLowerCase()&&this.$emit("md-changed",this.searchTerm)},showOptions:(function(){function e(){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.showMenu){e.next=2;break}return e.abrupt("return",!1);case 2:return this.showMenu=!0,e.next=5,this.$nextTick();case 5:this.triggerPopover=!0,this.$emit("md-opened");case 7:case"end":return e.stop()}}),e,this)})));return e})(),hideOptions:(function(){function e(){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$nextTick();case 2:return this.showMenu=!1,e.next=5,this.$nextTick();case 5:this.triggerPopover=!1,this.$emit("md-closed");case 7:case"end":return e.stop()}}),e,this)})));return e})(),selectItem:function(e,t){var n=t.target.textContent.trim();this.searchTerm=n,this.$emit("input",e),this.$emit("md-selected",e),this.hideOptions()}}}},136:function(e,t,n){"use strict";function r(e,t){var n,r,o,i=t.length,s=e.length;if(s>i)return!1;if(s===i)return e===t;e:for(n=0,r=0;n<s;n++){for(o=e.charCodeAt(n);r<i;)if(t.charCodeAt(r++)===o)continue e;return!1}return!0}e.exports=r},137:function(e,t){function n(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}e.exports=n},2:function(t,n){t.exports=e},3:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,s,u,a;Object.defineProperty(t,"__esModule",{value:!0}),n(7),o=n(5),i=r(o),s=n(4),u=r(s),a=function(){var e=new i.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"YYYY-MM-DD",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return u.default.metaColors},set:function(e){u.default.metaColors=e}},theme:{get:function(){return u.default.theme},set:function(e){u.default.theme=e}},enabled:{get:function(){return u.default.enabled},set:function(e){u.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=a(),e.prototype.$material=e.material)}},4:function(e,t,n){"use strict";var r,o,i,s,u;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),i=null,s=null,u=null,t.default=new o.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,n=this.enabled;t&&(n?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var n=this.getThemeName,r=this.themeTarget;e=n(e),r.classList.remove(n(t)),r.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,n=this;return e?(t=e.mdTheme,(function e(r){if(r){var o=r.mdTheme,i=r.$parent;return o&&o!==t?o:e(i)}return n.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){i&&i.setAttribute("content",e)},setThemeColors:function(e){s&&s.setAttribute("content",e)},setMaskColors:function(e){u&&u.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,n="#fff";e&&(t=window.getComputedStyle(document.documentElement),n=t.getPropertyValue("--"+e+"-primary")),n&&(this.setMicrosoftColors(n),this.setThemeColors(n),this.setMaskColors(n))}},mounted:function(){var e=this;i=document.querySelector('[name="msapplication-TileColor"]'),s=document.querySelector('[name="theme-color"]'),u=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},400:function(e,t,n){e.exports=n(132)},5:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return o.default.util.defineReactive(t,"reactive",e),t.reactive},r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r)},7:function(e,t){},8:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default=function(e,t){return{validator:function(n){return!!t.includes(n)||(o.default.util.warn("The "+e+" prop is invalid. Given value: "+n+". Available options: "+t.join(", ")+".",void 0),!1)}}}}})}));