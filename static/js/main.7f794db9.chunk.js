(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports={container:"dropdown_container__yOokc",drop:"dropdown_drop__1qQ4M"}},12:function(e,t,n){e.exports={aboutSection:"AboutSection_aboutSection__2w6Kr"}},26:function(e,t,n){e.exports=n.p+"static/media/linkedinpfp.784df388.jpg"},28:function(e,t,n){e.exports={portfolioSection:"PortfolioSection_portfolioSection__2IVpk"}},29:function(e,t,n){e.exports={introduction:"Welcome_introduction__2MbkP"}},30:function(e,t,n){e.exports=n(67)},35:function(e,t,n){},5:function(e,t,n){e.exports={contactMeSection:"ContactMeSection_contactMeSection__3cj78",specForm:"ContactMeSection_specForm__2RTAT",contactTitle:"ContactMeSection_contactTitle__3TJp4",msgSuc:"ContactMeSection_msgSuc__1nlUZ"}},67:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(8),i=n.n(o),c=(n(35),n(2)),l=n(9),u=n.n(l),s=n(3),f=n(11),m=n.n(f),h=n(25);function p(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],o=t[1];function i(){o(!1)}p.handleClickOutside=function(){return o(!1)};var l="";n||(l=a.a.createElement("button",{type:"button",onClick:function(){o(!0)}},"\u2630"));var u="";return n&&(u=a.a.createElement("button",{type:"button",onClick:i},"X")),a.a.createElement("div",null,a.a.createElement("div",{className:m.a.container},l,u,n?a.a.createElement("div",{className:m.a.drop},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(s.a,{smooth:!0,to:"#about",onClick:i},"About")),a.a.createElement("li",null,a.a.createElement(s.a,{smooth:!0,to:"#portfolio",onClick:i},"Portfolio")),a.a.createElement("li",null,a.a.createElement(s.a,{smooth:!0,to:"#contact",onClick:i},"Contact me")))):null))}var d={handleClickOutside:function(){return p.handleClickOutside}},v=Object(h.a)(p,d);var y=function(){var e=Object(r.useState)("scrolling down"),t=Object(c.a)(e,2),n=t[0],o=t[1];return Object(r.useEffect)(function(){var e=window.pageYOffset,t=!1,r=function(){var n=window.pageYOffset;Math.abs(n-e)<80?t=!1:(o(n>e?"scrolling down":"scrolling up"),e=n>0?n:0,t=!1)},a=function(){t||(window.requestAnimationFrame(r),t=!0)};window.addEventListener("scroll",a);var i=document.getElementById("myDiv");return"scrolling up"===n?(i.style.position="fixed",i.style.display="block"):document.getElementById("myDiv").style.display="none",function(){return window.removeEventListener("scroll",a)}},[n]),a.a.createElement("header",{className:u.a.header,id:"myDiv"},a.a.createElement("div",{className:u.a.dropped},a.a.createElement("ul",null,a.a.createElement(v,null))),a.a.createElement("ul",{className:u.a.nav},a.a.createElement("li",null,a.a.createElement(s.a,{smooth:!0,to:"#about"},"About")),a.a.createElement("li",null,a.a.createElement(s.a,{smooth:!0,to:"#portfolio"},"Portfolio")),a.a.createElement("li",null,a.a.createElement(s.a,{smooth:!0,to:"#contact"},"Contact me"))))},g=n(12),E=n.n(g),w=n(26),b=n.n(w);var _=function(){return a.a.createElement("section",{className:E.a.aboutSection,id:"about"},a.a.createElement("header",null,"About"),a.a.createElement("div",null,"Me"),a.a.createElement("paragraph",{className:E.a.para},"I am an aspiring software engineer. I am a Junior Undergraduate attending Stony Brook University and will be graduating in May 2023. I am currently interested in web development, which is why I made this website myself. Feel free to explore and contact me!"),a.a.createElement("img",{src:b.a,alt:"pfp"}))},x=n(5),O=n.n(x),L=n(14),S=n(13),j=n(27),k=n.n(j);function N(){N=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(S){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new x(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=l;var s={};function f(){}function m(){}function h(){}var p={};c(p,a,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(O([])));v&&v!==t&&n.call(v,a)&&(p=v);var y=h.prototype=f.prototype=Object.create(p);function g(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;this._invoke=function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(f).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,c)})}c(l.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=h,c(y,"constructor",h),c(h,"constructor",m),m.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(E.prototype),c(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new E(l(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},g(y),c(y,i,"Generator"),c(y,a,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;_(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}var M=function(){var e="https://submit-form.com/".concat("us2LOldY"),t=Object(r.useState)({email:"",name:"",message:""}),n=Object(c.a)(t,2),o=n[0],i=n[1],l=Object(r.useState)({msg:""}),u=Object(c.a)(l,2),s=u[0],f=u[1],m=function(){var e=Object(S.a)(N().mark(function e(t){return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,h();case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),h=function(){var t=Object(S.a)(N().mark(function t(){var n;return N().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(L.a)({},o),t.prev=1,t.next=4,k.a.post(e,n);case 4:f({msg:"Thank you! I will be in touch with you shortly"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:case"end":return t.stop()}},t,null,[[1,7]])}));return function(){return t.apply(this,arguments)}}(),p=function(e){var t=e.target,n=t.id,r=t.value,a=Object(L.a)({},o);a[n]=r,i(a)};return a.a.createElement("div",null,a.a.createElement("h2",{className:O.a.msgSuc},s.msg),a.a.createElement("form",{type:"POST",onSubmit:m},a.a.createElement("label",{htmlFor:"Name"},"Name"),a.a.createElement("div",null,a.a.createElement("input",{type:"text",required:!0,id:"name",placeholder:"Input your name",value:o.name,onChange:p})),a.a.createElement("label",{htmlFor:"Email"},"Email"),a.a.createElement("div",null,a.a.createElement("input",{type:"text",required:!0,id:"email",placeholder:"Input your email",value:o.email,onChange:p})),a.a.createElement("label",{htmlFor:"Message"},"Message"),a.a.createElement("div",null,a.a.createElement("textarea",{type:"text",required:!0,id:"message",rows:5,placeholder:"message",value:o.message,onChange:p})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"Send Message"))))};var C=function(){return a.a.createElement("section",{className:O.a.contactMeSection},a.a.createElement("header",{id:O.a.contactTitle},"Contact me"),a.a.createElement("div",{className:O.a.form},a.a.createElement(M,null)))},I=n(28),F=n.n(I);var T=function(){return a.a.createElement("section",{className:F.a.portfolioSection,id:"portfolio"},a.a.createElement("header",null,"My Projects"),a.a.createElement("paragraph",null,"My current projects"))},P=n(29),A=n.n(P);var G=function(){return a.a.createElement("section",{className:A.a.introduction},a.a.createElement("paragraph",null,"Kevin Liu"))};var q=function(){return a.a.createElement("div",null,a.a.createElement(G,null),a.a.createElement(_,null),a.a.createElement(T,null),a.a.createElement(C,null))};var D=function(){return a.a.createElement("div",null,a.a.createElement(y,null),a.a.createElement(q,null))},Y=n(6);i.a.render(a.a.createElement(Y.a,null,a.a.createElement(D,null)),document.getElementById("root"))},9:function(e,t,n){e.exports={header:"MainNavigation_header__1qAHr",dropped:"MainNavigation_dropped__12zQF",nav:"MainNavigation_nav__1lDys",active:"MainNavigation_active__3lLCc"}}},[[30,2,1]]]);
//# sourceMappingURL=main.7f794db9.chunk.js.map