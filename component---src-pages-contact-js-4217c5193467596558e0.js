(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8oxB":function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,u=[],l=!1,f=-1;function m(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&p())}function p(){if(!l){var e=i(m);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new d(e,t)),1!==u.length||l||i(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"8ujH":function(e,t,n){n("pIFo"),n("V+eJ"),n("f3/d");var r=n("GTTd")("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var s,i,c=t.prefix||"__jp",u=t.name||c+o++,l=t.param||"callback",f=null!=t.timeout?t.timeout:6e4,m=encodeURIComponent,p=document.getElementsByTagName("script")[0]||document.head;f&&(i=setTimeout((function(){d(),n&&n(new Error("Timeout"))}),f));function d(){s.parentNode&&s.parentNode.removeChild(s),window[u]=a,i&&clearTimeout(i)}return window[u]=function(e){r("jsonp got",e),d(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+l+"="+m(u)).replace("?&","?"),r('jsonp req "%s"',e),(s=document.createElement("script")).src=e,p.parentNode.insertBefore(s,p),function(){window[u]&&d()}};var o=0;function a(){}},"Cuy+":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=(n("pIFo"),n("/SS/"),n("hHhE"),n("17x9"),n("8ujH")),s=n.n(a),i=n("L+h+"),c=n.n(i),u=(n("V+eJ"),function(e){var t=e.status,n=e.message,r=e.className,a=e.style,s=e.onSubmitted,i=void 0;return o.a.createElement("div",{className:r,style:a},"sending"===t&&o.a.createElement("div",{style:{color:"blue"}},"sending..."),"error"===t&&o.a.createElement("div",{style:{color:"red"},dangerouslySetInnerHTML:{__html:n}}),"success"===t&&o.a.createElement("div",{style:{color:"green"},dangerouslySetInnerHTML:{__html:n}}),o.a.createElement("input",{ref:function(e){return i=e},type:"email",placeholder:"Your email"}),o.a.createElement("button",{onClick:function(){return i&&i.value.indexOf("@")>-1&&s({EMAIL:i.value})}},"Submit"))});function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){return e.replace("/post?","/post-json?")},m=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=l(this,e.call.apply(e,[this].concat(a))),r.state={status:null,message:null},r.subscribe=function(e){var t=c()(e),n=f(r.props.url)+"&"+t;r.setState({status:"sending",message:null},(function(){return s()(n,{param:"c"},(function(e,t){e?r.setState({status:"error",message:e}):"success"!==t.result?r.setState({status:"error",message:t.msg}):r.setState({status:"success",message:t.msg})}))}))},l(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return this.props.render({subscribe:this.subscribe,status:this.state.status,message:this.state.message})},t}(o.a.Component);m.propTypes={},m.defaultProps={render:function(e){var t=e.subscribe,n=e.status,r=e.message;return o.a.createElement(u,{status:n,message:r,onSubmitted:function(e){return t(e)}})}};var p=m,d=n("Bl7J"),h=n("vrFN"),g=n("UAHM"),y=(n("91GP"),function(e){return o.a.createElement("svg",Object.assign({width:"33px",height:"33px",viewBox:"0 0 20 20"},e),o.a.createElement("path",{d:"M12.096 2.538a.767.767 0 01.762-.2 9.35 9.35 0 015.238 3.217v.077l.054.07c1.352 2.833 1.62 5.393 1.795 7.887l.053.786a.778.778 0 01-.223.597 9.218 9.218 0 01-5.962 2.72l-.12-.01a.777.777 0 01-.65-.765v-.775a13.445 13.445 0 01-6.163 0v.775a.777.777 0 01-.77.775l-.333-.032a9.222 9.222 0 01-5.552-2.727.778.778 0 01-.223-.597c.161-2.705.33-5.534 1.825-8.634l.054-.07v-.077A9.35 9.35 0 017.12 2.338a.776.776 0 01.37 1.504 7.84 7.84 0 00-4.352 2.627 19.378 19.378 0 00-1.61 7.604 7.686 7.686 0 003.851 1.953v-.395c-.945-.371-1.83-.88-2.626-1.512a.781.781 0 01-.124-1.093.77.77 0 011.086-.124 9.842 9.842 0 006.247 2.016 9.842 9.842 0 006.301-2.016.77.77 0 01.765-.115.78.78 0 01.198 1.332 10.367 10.367 0 01-2.642 1.512v.395a7.686 7.686 0 003.852-1.953 19.378 19.378 0 00-1.595-7.604 7.84 7.84 0 00-4.352-2.627.778.778 0 01-.392-1.304zM7.435 8.5a2.405 2.405 0 012.226 2.534 2.398 2.398 0 01-2.226 2.527A2.397 2.397 0 015.2 11.034 2.405 2.405 0 017.435 8.5zm5.053 0a2.405 2.405 0 012.234 2.534 2.397 2.397 0 01-2.234 2.527 2.398 2.398 0 01-2.226-2.527A2.405 2.405 0 0112.488 8.5zm-5.053 1.55c-.378 0-.693.457-.693.984 0 .528.323.977.693.977.37 0 .685-.45.685-.977 0-.534-.308-.984-.685-.984zm5.053 0c-.37 0-.686.457-.686.984 0 .528.316.977.686.977.377 0 .693-.442.693-.977 0-.534-.323-.984-.693-.984zM9.961 4.415c1.879-.049 3.742.35 5.439 1.163a.774.774 0 01.331 1.046.77.77 0 01-.686.419.767.767 0 01-.354-.093 10.383 10.383 0 00-4.73-.984 10.383 10.383 0 00-4.73.984.768.768 0 01-1.09-.918c.063-.196.2-.36.382-.454a11.854 11.854 0 015.438-1.163z",fill:"#1b1b1b",fillRule:"nonzero",stroke:"none",strokeWidth:1}))}),v=function(e){return o.a.createElement("svg",Object.assign({width:30,height:30,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-instagram"},e),o.a.createElement("rect",{x:2,y:2,width:20,height:20,rx:5,ry:5}),o.a.createElement("path",{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"}),o.a.createElement("path",{d:"M17.5 6.5L17.51 6.5"}))},b=function(e){return o.a.createElement("svg",Object.assign({width:30,height:30,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-twitter"},e),o.a.createElement("path",{d:"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"}))},w="https://site.us4.list-manage.com/subscribe/post?u=781944401c3bd73c2d0ecf0cc&amp;id=ccc9fd92c7",E=function(){return o.a.createElement(p,{url:w})};t.default=function(){return o.a.createElement(d.a,null,o.a.createElement(h.a,{title:"Contact"}),o.a.createElement(g.a,{introTitle:"Contact",introDescription:"There are a few ways you can keep in touch with us. You can follow any of our social medias listed below, sign up for e-mail updates, or send us an e-mail."}),o.a.createElement("div",{style:{margin:"20px auto 20px auto"},className:"contact-form"},o.a.createElement("div",{style:{textAlign:"center",fontSize:"20px",marginBottom:"12px"}},"Sign Up For E-mail Updates"),o.a.createElement(p,{url:w,render:function(e){var t=e.subscribe,n=e.status,r=e.message;return o.a.createElement("div",null,o.a.createElement(E,{onSubmitted:function(e){return t(e)}}),"sending"===n&&o.a.createElement("div",{style:{color:"blue"}},"sending..."),"error"===n&&o.a.createElement("div",{style:{color:"red"},dangerouslySetInnerHTML:{__html:r}}),"success"===n&&o.a.createElement("div",{style:{color:"green"}},"Subscribed !"))}})),o.a.createElement("div",{className:"social-medias",style:{display:"block",textAlign:"center"}},o.a.createElement("a",{href:"https://invite.gg/spart",target:"_blank",rel:"noopener noreferrer",className:"social-media"},o.a.createElement(y,null)),o.a.createElement("a",{href:"https://www.instagram.com/spart_xyz/",target:"_blank",rel:"noopener noreferrer",className:"social-media"},o.a.createElement(v,null)),o.a.createElement("a",{href:"https://twitter.com/Spart_xyz",target:"_blank",rel:"noopener noreferrer",className:"social-media"},o.a.createElement(b,null)),o.a.createElement("span",{style:{lineHeight:"34px",verticalAlign:"top",margin:"0 12px"}},"●"),o.a.createElement("a",{href:"mailto:contact@spart.xyz",style:{fontSize:"22px",verticalAlign:"top",lineHeight:"30px",color:"#1b1b1b"}},"contact@spart.xyz")),o.a.createElement("p",{style:{color:"#6A6A6A",textAlign:"center",fontSize:"15px",marginTop:"60px"}},"Spart is being developed by ",o.a.createElement("a",{style:{color:"#6A6A6A",fontSize:"15px"},href:"https://twitter.com/ProgrammingJoe",target:"_blank",rel:"noopener noreferrer"},"ProgrammingJoe")," and designed by ",o.a.createElement("a",{style:{color:"#6A6A6A",fontSize:"15px"},href:"https://twitter.com/spenceramarsh",target:"_blank",rel:"noopener noreferrer"},"Spencer")))}},GTTd:function(e,t,n){(function(r){function o(){var e;try{e=t.storage.debug}catch(n){}return!e&&void 0!==r&&"env"in r&&(e={}.DEBUG),e}n("pIFo"),n("Oyvg"),n("SRfc"),(t=e.exports=n("bRoh")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=o,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(o())}).call(this,n("8oxB"))},"L+h+":function(e,t,n){n("rE2o"),n("ioFf"),n("pIFo"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("LK8F"),n("bWfx"),n("HAE/"),"undefined"!=typeof self&&self,e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e,t,n){return"object"===(void 0===t?"undefined":a(t))?""+o(t,n+""+e+(n&&"]")+"["):n&&n.length?""+n+e+"]="+encodeURIComponent(t):e+"="+encodeURIComponent(t)}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).arrayPrefix||"";return(Array.isArray(e)?e.map((function(e,o){return r(""+o+n,e,t)})):Object.keys(e).filter((function(t){return void 0!==e[t]})).map((function(o){return e[o]&&Array.isArray(e[o])?function(e,t,n){return t.map((function(t){return r(e,t,n)})).join("&")}(""+o+n,e[o],t):r(o,e[o],t)}))).join("&").replace(/%20/g,"+")}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o}])},QXP7:function(e,t){var n=1e3,r=60*n,o=60*r,a=24*o,s=365.25*a;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var c,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return i*s;case"days":case"day":case"d":return i*a;case"hours":case"hour":case"hrs":case"hr":case"h":return i*o;case"minutes":case"minute":case"mins":case"min":case"m":return i*r;case"seconds":case"second":case"secs":case"sec":case"s":return i*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===u&&!1===isNaN(e))return t.long?i(c=e,a,"day")||i(c,o,"hour")||i(c,r,"minute")||i(c,n,"second")||c+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=o)return Math.round(e/o)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},UAHM:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=function(e){var t=e.introTitle,n=e.introDescription;return o.a.createElement("div",{className:"intro-block",style:{maxWidth:"600px",textAlign:"center"}},o.a.createElement("p",{className:"intro-title"},t),o.a.createElement("p",{className:"intro-description"},n))};a.defaultProps={introTitle:"",introDescription:""},t.a=a},bRoh:function(e,t,n){var r;function o(e){function n(){if(n.enabled){var e=n,o=+new Date,a=o-(r||o);e.diff=a,e.prev=r,e.curr=o,r=o;for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];s[0]=t.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;c++;var o=t.formatters[r];if("function"==typeof o){var a=s[c];n=o.call(e,a),s.splice(c,1),c--}return n})),t.formatArgs.call(e,s),(n.log||t.log||console.log.bind(console)).apply(e,s)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}n("Oyvg"),n("KKXr"),n("2Spj"),n("pIFo"),(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n("QXP7"),t.names=[],t.skips=[],t.formatters={}}}]);
//# sourceMappingURL=component---src-pages-contact-js-4217c5193467596558e0.js.map