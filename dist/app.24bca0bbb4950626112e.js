!function(t){function e(e){for(var i,o,l=e[0],r=e[1],c=e[2],v=0,m=[];v<l.length;v++)o=l[v],n[o]&&m.push(n[o][0]),n[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);for(_&&_(e);m.length;)m.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,l=1;l<s.length;l++){var r=s[l];0!==n[r]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},n={0:0},a=[];function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue2-simplert/";var l=window.webpackJsonp=window.webpackJsonp||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var _=r;a.push([193,1]),s()}({1:function(t,e,s){},13:function(t,e,s){"use strict";var i=s(1);s.n(i).a},193:function(t,e,s){"use strict";s.r(e);var i=s(3),n=s(4),a={name:"Simplert",mixins:[s(7).a]},o=(s(11),s(2)),l=Object(o.a)(a,n.a,n.b,!1,null,null,null);l.options.__file="Simplert.vue";var r={components:{Simplert:l.exports},data:function(){return{}},methods:{open:function(t,e,s,i,n,a,o,l){var r={title:t,message:e,type:s};n&&(r.customCloseBtnText=n),a&&(r.customCloseBtnClass=a),o&&(r.customClass=o),l&&(r.customIconUrl=l),console.log("open simplert with obj : ",r),this.$refs.simplert.openSimplert(r)},openCustomHtml:function(){var t={title:"Custom HTML",message:'<span style="color:red;">I am HTML</span>',type:"info"};console.log("open simplert with obj : ",t),this.$refs.simplert.openSimplert(t)},onOpen:function(){alert("Hey, I am called when alert is opened")},onClose:function(){alert("Hey, I am Close Function")},onConfirm:function(){alert("Hey, You Confirmed")},openCustomFunction:function(){var t={title:"Custom Function",message:"Click close to trigger custom function",type:"info",onClose:this.onClose};console.log("open simplert with obj : ",t),this.$refs.simplert.openSimplert(t)},openWithOnOpen:function(){var t={title:"On Open Function",message:"There should be an alert before you see this",type:"info",onOpen:this.onOpen};console.log("open simplert with obj: ",t),this.$refs.simplert.openSimplert(t)},openWithConfirm:function(t,e,s,i,n){var a={title:t,message:e,type:"info",useConfirmBtn:!0};s&&(a.onConfirm=this.onConfirm),i&&(a.customConfirmBtnText=i),n&&(a.customConfirmBtnClass=n),console.log("open simplert with obj : ",a),this.$refs.simplert.openSimplert(a)},openDisabledOverlayClick:function(){var t={title:"Disable Overlay Click",message:"Now You can not close me by clicking overlay",type:"info",disableOverlayClick:!0};console.log("open simplert with obj : ",t),this.$refs.simplert.openSimplert(t)},openWithHiddenButton:function(){var t={title:"Hey, I am Title",message:"I am Message",type:"info",hideAllButton:!0};console.log("open simplert with obj : ",t),this.$refs.simplert.openSimplert(t)},openWithXbtn:function(){var t={title:"Hey, I am Title",message:"I am Message",type:"info",showXclose:!0};console.log("open simplert with obj : ",t),this.$refs.simplert.openSimplert(t)},openWithStyle:function(){var t={title:"Confirmation",message:"Do you want to procced ?",customClass:"custom-simplert",customIconUrl:"",customCloseBtnText:"No, Just Close",customCloseBtnClass:"no-procced-btn",onClose:this.onClose,useConfirmBtn:!0,customConfirmBtnText:"Yes, Procced Me",customConfirmBtnClass:"procced-btn",onConfirm:this.onConfirm};console.log("open simplert with obj : ",t),this.$refs.simplert.openSimplert(t)}}},c=(s(13),Object(o.a)(r,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid__row"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"grid__row content centered"},[s("h2",[t._v("Basic Examples")]),t._v(" "),s("div",{staticClass:"grid__row content__row"},[s("div",{staticClass:"grid__col-6"},[s("div",{staticClass:"example__title"},[t._v("Information Alert")]),t._v(" "),s("button",{staticClass:"button button--radius button--blue",on:{click:function(e){t.open("Information!","Hey, I am Opened...","info")}}},[t._v("\n              Click Me!\n        ")])]),t._v(" "),s("div",{staticClass:"grid__col-6"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("          "),s("code",{staticClass:"javascript"},[t._v("\n          let obj = {\n            title: 'Alert Title',\n            message: 'Alert Message',\n            type: 'info'\n          }\n          this.$refs.simplert.openSimplert(obj)\n          ")]),t._v("\n        ")])])]),t._v(" "),s("div",{staticClass:"grid__row content__row"},[s("div",{staticClass:"grid__col-6"},[s("div",{staticClass:"example__title"},[t._v("Success Alert")]),t._v(" "),s("button",{staticClass:"button button--radius button--green",on:{click:function(e){t.open("Success!","Hey, I am Opened...","success")}}},[t._v("\n              Click Me!\n        ")])]),t._v(" "),s("div",{staticClass:"grid__col-6"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("          "),s("code",{staticClass:"javascript"},[t._v("\n          let obj = {\n            title: 'Alert Title',\n            message: 'Alert Message',\n            type: 'success'\n          }\n          this.$refs.simplert.openSimplert(obj)\n          ")]),t._v("\n        ")])])]),t._v(" "),s("div",{staticClass:"grid__row content__row"},[s("div",{staticClass:"grid__col-6"},[s("div",{staticClass:"example__title"},[t._v("Error Alert")]),t._v(" "),s("button",{staticClass:"button button--radius button--red",on:{click:function(e){t.open("Error!","Hey, I am Opened...","error")}}},[t._v("\n              Click Me!\n        ")])]),t._v(" "),s("div",{staticClass:"grid__col-6"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("          "),s("code",{staticClass:"javascript"},[t._v("\n          let obj = {\n            title: 'Alert Title',\n            message: 'Alert Message',\n            type: 'error'\n          }\n          this.$refs.simplert.openSimplert(obj)\n          ")]),t._v("\n        ")])])]),t._v(" "),s("div",{staticClass:"grid__row content__row"},[s("div",{staticClass:"grid__col-6"},[s("div",{staticClass:"example__title"},[t._v("Warning Alert")]),t._v(" "),s("button",{staticClass:"button button--radius button--orange",on:{click:function(e){t.open("Warning!","Hey, I am Opened...","warning")}}},[t._v("\n              Click Me!\n        ")])]),t._v(" "),s("div",{staticClass:"grid__col-6"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("          "),s("code",{staticClass:"javascript"},[t._v("\n          let obj = {\n            title: 'Alert Title',\n            message: 'Alert Message',\n            type: 'warning'\n          }\n          this.$refs.simplert.openSimplert(obj)\n          ")]),t._v("\n        ")])])]),t._v(" "),s("h2",[t._v("More Advance Examples")]),t._v(" "),s("div",{staticClass:"grid__row content__row"},[s("div",{staticClass:"grid__col-6"},[s("div",{staticClass:"example__title"},[t._v("Alert Without Title")]),t._v(" "),s("button",{staticClass:"button button--radius button--blue",on:{click:function(e){t.open("","Hey, I am Opened, but I dont have title","")}}},[t._v("\n              Click Me!\n        ")])]),t._v(" "),s("div",{staticClass:"grid__col-6"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("          "),s("code",{staticClass:"javascript"},[t._v("\n          let obj = {\n            message: 'Alert Message',\n            type: 'info'\n          }\n          this.$refs.simplert.openSimplert(obj)\n          ")]),t._v("\n        ")])])]),t._v(" "),s("div",{staticClass:"grid__row content__row"},[s("div",{staticClass:"grid__col-6"},[s("div",{staticClass:"example__title"},[t._v("Alert With HTML")]),t._v(" "),s("button",{staticClass:"button button--radius button--orange",on:{click:t.openCustomHtml}},[t._v("\n              Click Me!\n        ")])]),t._v(" "),s("div",{staticClass:"grid__col-6"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("          "),s("code",{staticClass:"javascript"},[t._v("\n          let obj = {\n            title: 'Alert Title',\n            message: '<span style=\"color:red;\">I am HTML</span>',\n            type: 'info'\n          }\n          this.$refs.simplert.openSimplert(obj)\n          ")]),t._v("\n        ")])])]),t._v(" "),s("div",{staticClass:"grid__row content__row"},[s("div",{staticClass:"grid__col-6"},[s("div",{staticClass:"example__title"},[t._v("Alert With Custom Close Text")]),t._v(" "),s("button",{staticClass:"button button--radius button--green",on:{click:function(e){t.open("Custom Close Text","Hey, I am Opened...","","","Custom Close Text")}}},[t._v("\n              Click Me!\n        ")])]),t._v(" "),s("div",{staticClass:"grid__col-6"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("          "),s("code",{staticClass:"javascript"},[t._v("\n          let obj = {\n            title: 'Alert Title',\n            message: 'Alert Message',\n            type: 'info',\n            customCloseBtnText: 'I am Close Button'\n          }\n          this.$refs.simplert.openSimplert(obj)\n          ")]),t._v("\n        ")])])]),t._v(" "),s("div",{staticClass:"grid__row content__row"},[s("div",{staticClass:"grid__col-6"},[s("div",{staticClass:"example__title"},[t._v("Alert With Custom Close Class")]),t._v(" "),s("button",{staticClass:"button button--radius button--blue",on:{click:function(e){t.open("Custom Close Class","Hey, I am Opened...","","","","button button--radius button--red")}}},[t._v("\n              Click Me!\n        ")])]),t._v(" "),s("div",{staticClass:"grid__col-6"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("          "),s("code",{staticClass:"javascript"},[t._v("\n          let obj = {\n            title: 'Alert Title',\n            message: 'Alert Message',\n            type: 'info',\n            customCloseBtnClass: 'btn-warning'\n          }\n          this.$refs.simplert.openSimplert(obj)\n          ")]),t._v("\n        ")])])]),t._v(" "),s("div",{staticClass:"grid__row content__row"},[s("div",{staticClass:"grid__col-6"},[s("div",{staticClass:"example__title"},[t._v("Alert With Custom Close Function")]),t._v(" "),s("button",{staticClass:"button button--radius button--red",on:{click:t.openCustomFunction}},[t._v("\n              Click Me!\n        ")])]),t._v(" "),s("div",{staticClass:"grid__col-6"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("          "),s("code",{staticClass:"javascript"},[t._v("\n          let closeFn = function() {\n            alert(\"I am Closed\")\n          }\n          let obj = {\n            title: 'Alert Title',\n            message: 'Alert Message',\n            type: 'info',\n            onClose: closeFn\n          }\n          this.$refs.simplert.openSimplert(obj)\n          ")]),t._v("\n        ")])])]),t._v(" "),s("div",{staticClass:"grid__row content__row"},[s("div",{staticClass:"grid__col-6"},[s("div",{staticClass:"example__title"},[t._v("Alert With Custom Class")]),t._v(" "),s("button",{staticClass:"button button--radius button--red",on:{click:function(e){t.open("Custom Class","Hey, I am Opened...","","","","","custom-class")}}},[t._v("\n              Click Me!\n        ")])]),t._v(" "),s("div",{staticClass:"grid__col-6"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("          "),s("code",{staticClass:"javascript"},[t._v("\n          let obj = {\n            title: 'Alert Title',\n            message: 'Alert Message',\n            type: 'info',\n            customClass: 'popup-custom-class'\n          }\n          this.$refs.simplert.openSimplert(obj)\n          ")]),t._v("\n        ")])])]),t._v(" "),s("div",{staticClass:"grid__row content__row"},[s("div",{staticClass:"grid__col-6"},[s("div",{staticClass:"example__title"},[t._v("Alert With Custom Icon")]),t._v(" "),s("button",{staticClass:"button button--radius button--green",on:{click:function(e){t.open("Custom Icon","Hey, I am Opened...","","","","","","https://cdn2.iconfinder.com/data/icons/social-productivity-line-art-1/128/face-sad-512.png")}}},[t._v("\n              Click Me!\n        ")])]),t._v(" "),s("div",{staticClass:"grid__col-6"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("          "),s("code",{staticClass:"javascript"},[t._v("\n          let obj = {\n            title: 'Alert Title',\n            message: 'Alert Message',\n            type: 'info',\n            customIconUrl: 'https://cdn2.iconfinder.com/data/icons/social-productivity-line-art-1/128/face-sad-512.png'\n          }\n          this.$refs.simplert.openSimplert(obj)\n          ")]),t._v("\n        ")])])]),t._v(" "),s("div",{staticClass:"grid__row content__row"},[s("div",{staticClass:"grid__col-6"},[s("div",{staticClass:"example__title"},[t._v("Alert With Confirm Button")]),t._v(" "),s("button",{staticClass:"button button--radius button--red",on:{click:function(e){t.openWithConfirm("Confirm Button","Hey, I have Confirm Button Now",!1)}}},[t._v("\n              Click Me!\n        ")])]),t._v(" "),s("div",{staticClass:"grid__col-6"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("          "),s("code",{staticClass:"javascript"},[t._v("\n          let obj = {\n            title: 'Alert Title',\n            message: 'Alert Message',\n            type: 'info',\n            useConfirmBtn: true\n          }\n          this.$refs.simplert.openSimplert(obj)\n          ")]),t._v("\n        ")])])]),t._v(" "),s("div",{staticClass:"grid__row content__row"},[s("div",{staticClass:"grid__col-6"},[s("div",{staticClass:"example__title"},[t._v("Alert With Confirm Button Custom Text")]),t._v(" "),s("button",{staticClass:"button button--radius button--blue",on:{click:function(e){t.openWithConfirm("Confirm Button Custom Text","Hey, I am Opened...",!1,"Custom Text Confirm")}}},[t._v("\n              Click Me!\n        ")])]),t._v(" "),s("div",{staticClass:"grid__col-6"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("          "),s("code",{staticClass:"javascript"},[t._v("\n          let obj = {\n            title: 'Alert Title',\n            message: 'Alert Message',\n            type: 'info',\n            useConfirmBtn: true,\n            customConfirmBtnText: 'OK'\n          }\n          this.$refs.simplert.openSimplert(obj)\n          ")]),t._v("\n        ")])])]),t._v(" "),s("div",{staticClass:"grid__row content__row"},[s("div",{staticClass:"grid__col-6"},[s("div",{staticClass:"example__title"},[t._v("Alert With Confirm Function")]),t._v(" "),s("button",{staticClass:"button button--radius button--orange",on:{click:function(e){t.openWithConfirm("Confirm Function","Click Confirm to trigger function",!0)}}},[t._v("\n              Click Me!\n        ")])]),t._v(" "),s("div",{staticClass:"grid__col-6"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("          "),s("code",{staticClass:"javascript"},[t._v("\n          let confirmFn = function() {\n            alert(\"I am Confirmed\")\n          }\n          let obj = {\n            title: 'Alert Title',\n            message: 'Alert Message',\n            type: 'info',\n            useConfirmBtn: true,\n            onConfirm: confirmFn\n          }\n          this.$refs.simplert.openSimplert(obj)\n          ")]),t._v("\n        ")])])]),t._v(" "),s("div",{staticClass:"grid__row content__row"},[s("div",{staticClass:"grid__col-6"},[s("div",{staticClass:"example__title"},[t._v("Alert With Confirm Button Custom Class")]),t._v(" "),s("button",{staticClass:"button button--radius button--blue",on:{click:function(e){t.openWithConfirm("Confirm Button Custom Class","Hey, I am Opened...",!1,"","button button--radius button--red")}}},[t._v("\n              Click Me!\n        ")])]),t._v(" "),s("div",{staticClass:"grid__col-6"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("          "),s("code",{staticClass:"javascript"},[t._v("\n          let obj = {\n            title: 'Alert Title',\n            message: 'Alert Message',\n            type: 'info',\n            useConfirmBtn: true,\n            customConfirmBtnClass: 'btn-warning'\n          }\n          this.$refs.simplert.openSimplert(obj)\n          ")]),t._v("\n        ")])])]),t._v(" "),s("div",{staticClass:"grid__row content__row"},[s("div",{staticClass:"grid__col-6"},[s("div",{staticClass:"example__title"},[t._v("Alert With Disable Overlay Click")]),t._v(" "),s("button",{staticClass:"button button--radius button--green",on:{click:t.openDisabledOverlayClick}},[t._v("\n              Click Me!\n        ")])]),t._v(" "),s("div",{staticClass:"grid__col-6"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("          "),s("code",{staticClass:"javascript"},[t._v("\n          let obj = {\n            title: 'Alert Title',\n            message: 'Alert Message',\n            type: 'info',\n            disableOverlayClick: true\n          }\n          this.$refs.simplert.openSimplert(obj)\n          ")]),t._v("\n        ")])])]),t._v(" "),s("div",{staticClass:"grid__row content__row"},[s("div",{staticClass:"grid__col-6"},[s("div",{staticClass:"example__title"},[t._v("Alert With All Button Hidden")]),t._v(" "),s("button",{staticClass:"button button--radius button--orange",on:{click:t.openWithHiddenButton}},[t._v("\n              Click Me!\n        ")])]),t._v(" "),s("div",{staticClass:"grid__col-6"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("          "),s("code",{staticClass:"javascript"},[t._v("\n          let obj = {\n            title: 'Alert Title',\n            message: 'Alert Message',\n            type: 'info',\n            hideAllButton: true\n          }\n          this.$refs.simplert.openSimplert(obj)\n          ")]),t._v("\n        ")])])]),t._v(" "),s("div",{staticClass:"grid__row content__row"},[s("div",{staticClass:"grid__col-6"},[s("div",{staticClass:"example__title"},[t._v("Alert With Very Custom Style")]),t._v(" "),s("button",{staticClass:"button button--radius button--green",on:{click:t.openWithStyle}},[t._v("\n              Click Me!\n        ")])]),t._v(" "),s("div",{staticClass:"grid__col-6"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("          "),s("code",{staticClass:"javascript"},[t._v("\n          let obj = {\n            title: 'Confirmation',\n            message: 'Do you want to procced ?',\n            customClass: 'custom-simplert',\n            customIconUrl: '',\n            customCloseBtnText: 'No, Just Close',\n            customCloseBtnClass: 'no-procced-btn',\n            onClose: this.onClose,\n            useConfirmBtn: true,\n            customConfirmBtnText: 'Yes, Procced Me',\n            customConfirmBtnClass: 'procced-btn',\n            onConfirm: this.onConfirm\n          }\n          this.$refs.simplert.openSimplert(obj)\n          ")]),t._v("\n        ")])])]),t._v(" "),s("div",{staticClass:"grid__row content__row"},[s("div",{staticClass:"grid__col-6"},[s("div",{staticClass:"example__title"},[t._v("Alert with OnOpen Function")]),t._v(" "),s("button",{staticClass:"button button--radius button--blue",on:{click:t.openWithOnOpen}},[t._v("\n          Click Me!\n        ")])]),t._v(" "),s("div",{staticClass:"grid__col-6"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("          "),s("code",{staticClass:"javascript"},[t._v("\n          let openFn = function() {\n            alert(\"I am Confirmed\")\n          }\n          let obj = {\n            title: 'Alert Title',\n            message: 'Alert Message',\n            type: 'info',\n            onOpen: openFn\n          }\n          this.$refs.simplert.openSimplert(obj)\n          ")]),t._v("\n        ")])])]),t._v(" "),s("div",{staticClass:"grid__row content__row"},[s("div",{staticClass:"grid__col-6"},[s("div",{staticClass:"example__title"},[t._v("Alert with X close button")]),t._v(" "),s("button",{staticClass:"button button--radius button--blue",on:{click:t.openWithXbtn}},[t._v("\n          Click Me!\n        ")])]),t._v(" "),s("div",{staticClass:"grid__col-6"},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("          "),s("code",{staticClass:"javascript"},[t._v("\n          let obj = {\n            title: 'Alert Title',\n            message: 'Alert Message',\n            type: 'info',\n            showXclose: true\n          }\n          this.$refs.simplert.openSimplert(obj)\n          ")]),t._v("\n        ")])])])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("simplert",{ref:"simplert",attrs:{useRadius:!0,useIcon:!0}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fixed-top"},[e("a",{staticClass:"button button--radius button--green btn-top",attrs:{href:"https://vue2-simplert.gitbook.io/docs/",target:"_blank"}},[e("i",{staticClass:"fa fa-book",attrs:{"aria-hidden":"true"}}),this._v(" Docs\n    ")]),this._v(" "),e("a",{staticClass:"button button--radius button--blue btn-top",attrs:{href:"https://github.com/mazipan/vue2-simplert",target:"_blank"}},[e("i",{staticClass:"fa fa-download",attrs:{"aria-hidden":"true"}}),this._v(" Download\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header__title"},[e("img",{attrs:{src:"https://mazipan.github.io/vue2-simplert/images/vue2-simplert-logo.png",alt:"Vue2-Simplert",title:"Vue2-Simplert"}}),this._v(" "),e("h1",{staticClass:"header__subtitle"},[this._v("\n      Vue 2 Simple Alert Component (SweetAlert Inspired) By Irfan Maulana\n    ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid__row content centered"},[s("h2",[t._v("Download")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.npmjs.com/package/vue2-simplert"}},[s("img",{attrs:{src:"https://img.shields.io/badge/download-npmjs-red.svg?maxAge=3600",alt:"vue2simplert-npmjs"}})]),t._v(" "),s("br"),s("br"),t._v(" "),s("code",[t._v("npm install vue2-simplert@latest --save-dev")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://yarnpkg.com/en/package/vue2-simplert"}},[s("img",{attrs:{src:"https://img.shields.io/badge/download-yarn-blue.svg?maxAge=3600",alt:"vue2simplert-yarnpkg"}})]),t._v(" "),s("br"),s("br"),t._v(" "),s("code",[t._v("yarn add vue2-simplert@latest")])]),t._v(" "),s("p",[t._v("\n      Or download latest release "),s("a",{attrs:{href:"https://github.com/mazipan/vue2-simplert/releases"}},[t._v("here")])]),t._v(" "),s("p",[t._v("\n      Current Version\n      "),s("br"),s("br"),t._v(" "),s("a",{attrs:{href:"https://www.npmjs.com/package/vue2-simplert"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/vue2-simplert.svg",alt:"vue2simplert-version"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid__row content centered"},[e("h2",[this._v("Projects Using Vue2-Simplert")]),this._v(" "),e("ul",{staticClass:"users"},[e("li",[e("a",{attrs:{href:"https://www.blibli.com/?utm_source=mazipan-github-io&utm_medium=vue2-simplert",title:"Blibli.com"}},[e("img",{attrs:{src:"https://www.static-src.com/resources/images/logo-blibli.png"}})])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://www.blibli.com/travel?utm_source=mazipan-github-io&utm_medium=vue2-simplert",title:"Blibli.com Travel"}},[e("img",{attrs:{src:"https://www.static-src.com/travel/2.2.1/resources/hotel/images/thumbnail-blibli-travel.png"}})])]),this._v(" "),e("li",[e("a",{staticClass:"add-button",attrs:{href:"https://github.com/mazipan/vue2-simplert/issues/19",title:"Add your logo here"}},[e("i",{staticClass:"fa fa-plus-circle",attrs:{"aria-hidden":"true"}})])]),this._v(" "),e("li",[e("a",{staticClass:"add-button",attrs:{href:"https://github.com/mazipan/vue2-simplert/issues/14",title:"Share your experience"}},[e("i",{staticClass:"fa fa-comments",attrs:{"aria-hidden":"true"}})])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid__row content centered"},[s("h2",[t._v("Contribute")]),t._v(" "),s("p",[t._v("\n      Feel free to fork "),s("i",{staticClass:"fa fa-code-fork"}),t._v(" Vue2-Simplert on "),s("a",{attrs:{href:"https://github.com/mazipan/vue2-simplert",target:"_blank"}},[t._v("GitHub "),s("i",{staticClass:"fa fa-github"})]),t._v(" if you have any features "),s("i",{staticClass:"fa fa-cart-plus"}),t._v(" or bugs "),s("i",{staticClass:"fa fa-bug"}),t._v("!\n    ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid__row content centered"},[s("h2",[t._v("Contact Developer")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/mazipan"}},[s("img",{attrs:{src:"https://img.shields.io/badge/mazipan-Github-lightgrey.svg?maxAge=3600",alt:"Github"}})]),t._v(" "),s("a",{attrs:{href:"mailto:mazipanneh@gmail.com"}},[s("img",{attrs:{src:"https://img.shields.io/badge/mazipanneh-Email-yellow.svg?maxAge=3600",alt:"Email"}})]),t._v(" "),s("a",{attrs:{href:"https://mazipanneh.com/blog/"}},[s("img",{attrs:{src:"https://img.shields.io/badge/mazipanneh-Blog-brightgreen.svg?maxAge=3600",alt:"Blog"}})]),t._v(" "),s("a",{attrs:{href:"https://facebook.com/mazipanneh"}},[s("img",{attrs:{src:"https://img.shields.io/badge/mazipanneh-Facebook-blue.svg?maxAge=3600",alt:"Facebook"}})]),t._v(" "),s("br"),t._v(" "),s("a",{attrs:{href:"https://twitter.com/Maz_Ipan"}},[s("img",{attrs:{src:"https://img.shields.io/badge/Maz_Ipan-Twitter-55acee.svg?maxAge=3600",alt:"Twitter"}})]),t._v(" "),s("a",{attrs:{href:"https://id.linkedin.com/in/irfanmaulanamazipan"}},[s("img",{attrs:{src:"https://img.shields.io/badge/irfanmaulanamazipan-Linkedin-0077b5.svg?maxAge=3600",alt:"Linkedin"}})]),t._v(" "),s("a",{attrs:{href:"https://www.slideshare.net/IrfanMaulana21"}},[s("img",{attrs:{src:"https://img.shields.io/badge/IrfanMaulana21-Slideshare-0077b5.svg?maxAge=3600",alt:"Slideshare"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid__row content centered"},[e("p",[this._v("\n      Copyright © 2017 "),e("a",{attrs:{href:"https://mazipanneh.com/blog/"}},[this._v("Irfan Maulana")]),this._v(", All Rights Reserved.\n    ")])])}],!1,null,null,null));c.options.__file="App.vue";var _=c.exports,v=s(6),m=s.n(v);i.a.use(m.a),new i.a({el:"#app",components:{App:_},template:"<App/>"})}});