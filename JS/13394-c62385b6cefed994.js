
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4ef0ccf4-9953-527c-87ea-10b159a468af")}catch(e){}}();
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13394,38413],{855438:function(e,t,n){"use strict";n.d(t,{U:function(){return s}});var r=n(469528),o=n(235126),a=n(925985);function i(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function s(e,t){let n,{elementType:i="button",isDisabled:s,onPress:u,onPressStart:c,onPressEnd:l,onPressChange:f,preventFocusOnPress:p,allowFocusWhenDisabled:d,onClick:h,href:m,target:v,rel:g,type:y="button"}=e;n="button"===i?{type:y,disabled:s}:{role:"button",tabIndex:s?void 0:0,href:"a"===i&&s?void 0:m,target:"a"===i?v:void 0,type:"input"===i?y:void 0,disabled:"input"===i?s:void 0,"aria-disabled":s&&"input"!==i?s:void 0,rel:"a"===i?g:void 0};let{pressProps:b,isPressed:x}=(0,a.r7)({onPressStart:c,onPressEnd:l,onPressChange:f,onPress:u,isDisabled:s,preventFocusOnPress:p,ref:t}),{focusableProps:E}=(0,o.kc)(e,t);d&&(E.tabIndex=s?-1:E.tabIndex);let w=(0,r.dG)(E,b,(0,r.zL)(e,{labelable:!0}));return{isPressed:x,buttonProps:(0,r.dG)(n,w,{"aria-haspopup":e["aria-haspopup"],"aria-expanded":e["aria-expanded"],"aria-controls":e["aria-controls"],"aria-pressed":e["aria-pressed"],onClick:e=>{h&&(h(e),console.warn("onClick is deprecated, please use onPress"))}})}}function u(e,t,n){let{isSelected:o}=t,{isPressed:a,buttonProps:i}=s({...e,onPress:(0,r.tS)(t.toggle,e.onPress)},n);return{isPressed:a,buttonProps:(0,r.dG)(i,{"aria-pressed":o})}}i({},"useButton",()=>s),i({},"useToggleButton",()=>u)},172274:function(e,t,n){"use strict";function r(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:function(){return r}})},768929:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(172274);function o(e){(0,r.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}},433385:function(e,t,n){!function(){var t={452:function(e){"use strict";e.exports=n(970969)}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}},i=!0;try{t[e](a,a.exports,o),i=!1}finally{i&&delete r[e]}return a.exports}o.ab="//";var a={};!function(){var e,t=(e=o(452))&&"object"==typeof e&&"default"in e?e.default:e,n=/https?|ftp|gopher|file/;function r(e){"string"==typeof e&&(e=g(e));var r,o,a,i,s,u,c,l,f,p=(o=(r=e).auth,a=r.hostname,i=r.protocol||"",s=r.pathname||"",u=r.hash||"",c=r.query||"",l=!1,o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",r.host?l=o+r.host:a&&(l=o+(~a.indexOf(":")?"["+a+"]":a),r.port&&(l+=":"+r.port)),c&&"object"==typeof c&&(c=t.encode(c)),f=r.search||c&&"?"+c||"",i&&":"!==i.substr(-1)&&(i+=":"),r.slashes||(!i||n.test(i))&&!1!==l?(l="//"+(l||""),s&&"/"!==s[0]&&(s="/"+s)):l||(l=""),u&&"#"!==u[0]&&(u="#"+u),f&&"?"!==f[0]&&(f="?"+f),{protocol:i,host:l,pathname:s=s.replace(/[?#]/g,encodeURIComponent),search:f=f.replace("#","%23"),hash:u});return""+p.protocol+p.host+p.pathname+p.search+p.hash}var i="http://",s=i+"w.w",u=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,c=/https?|ftp|gopher|file/;function l(e,t){var n="string"==typeof e?g(e):e;e="object"==typeof e?r(e):e;var o=g(t),a="";n.protocol&&!n.slashes&&(a=n.protocol,e=e.replace(n.protocol,""),a+="/"===t[0]||"/"===e[0]?"/":""),a&&o.protocol&&(a="",o.slashes||(a=o.protocol,t=t.replace(o.protocol,"")));var l=e.match(u);l&&!o.protocol&&(e=e.substr((a=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(a=a.slice(0,-1)));var f=new URL(e,s+"/"),p=new URL(t,f).toString().replace(s,""),d=o.protocol||n.protocol;return d+=n.slashes||o.slashes?"//":"",!a&&d?p=p.replace(i,d):a&&(p=p.replace(i,"")),c.test(p)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==p.slice(-1)||(p=p.slice(0,-1)),a&&(p=a+("/"===p[0]?p.substr(1):p)),p}function f(){}f.prototype.parse=g,f.prototype.format=r,f.prototype.resolve=l,f.prototype.resolveObject=l;var p=/^https?|ftp|gopher|file/,d=/^(.*?)([#?].*)/,h=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function g(e,n,o){if(void 0===n&&(n=!1),void 0===o&&(o=!1),e&&"object"==typeof e&&e instanceof f)return e;var a=(e=e.trim()).match(d);e=a?a[1].replace(/\\/g,"/")+a[2]:e.replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var i=!/(^javascript)/.test(e)&&e.match(h),u=m.test(e),c="";i&&(p.test(i[1])||(c=i[1].toLowerCase(),e=""+i[2]+i[3]),i[2]||(u=!1,p.test(i[1])?(c=i[1],e=""+i[3]):e="//"+i[3]),3!==i[2].length&&1!==i[2].length||(c=i[1],e="/"+i[3]));var l,g=(a?a[1]:e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),y=g&&g[1],b=new f,x="",E="";try{l=new URL(e)}catch(t){x=t,c||o||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(E="/",e=e.substr(1));try{l=new URL(e,s)}catch(e){return b.protocol=c,b.href=c,b}}b.slashes=u&&!E,b.host="w.w"===l.host?"":l.host,b.hostname="w.w"===l.hostname?"":l.hostname.replace(/(\[|\])/g,""),b.protocol=x?c||null:l.protocol,b.search=l.search.replace(/\\/g,"%5C"),b.hash=l.hash.replace(/\\/g,"%5C");var w=e.split("#");!b.search&&~w[0].indexOf("?")&&(b.search="?"),b.hash||""!==w[1]||(b.hash="#"),b.query=n?t.decode(l.search.substr(1)):b.search.substr(1),b.pathname=E+(i?l.pathname.replace(/['^|`]/g,function(e){return"%"+e.charCodeAt().toString(16).toUpperCase()}).replace(/((?:%[0-9A-F]{2})+)/g,function(e,t){try{return decodeURIComponent(t).split("").map(function(e){var t=e.charCodeAt();return t>256||/^[a-z0-9]$/i.test(e)?e:"%"+t.toString(16).toUpperCase()}).join("")}catch(e){return t}}):l.pathname),"about:"===b.protocol&&"blank"===b.pathname&&(b.protocol="",b.pathname=""),x&&"/"!==e[0]&&(b.pathname=b.pathname.substr(1)),c&&!p.test(c)&&"/"!==e.slice(-1)&&"/"===b.pathname&&(b.pathname=""),b.path=b.pathname+b.search,b.auth=[l.username,l.password].map(decodeURIComponent).filter(Boolean).join(":"),b.port=l.port,y&&!b.host.endsWith(y)&&(b.host+=y,b.port=y.slice(1)),b.href=E?""+b.pathname+b.search+b.hash:r(b);var C=/^(file)/.test(b.href)?["host","hostname"]:[];return Object.keys(b).forEach(function(e){~C.indexOf(e)||(b[e]=b[e]||null)}),b}a.parse=g,a.format=r,a.resolve=l,a.resolveObject=function(e,t){return g(l(e,t))},a.Url=f}(),e.exports=a}()},970969:function(e){!function(){"use strict";var t={815:function(e){e.exports=function(e,n,r,o){n=n||"&",r=r||"=";var a={};if("string"!=typeof e||0===e.length)return a;var i=/\+/g;e=e.split(n);var s=1e3;o&&"number"==typeof o.maxKeys&&(s=o.maxKeys);var u=e.length;s>0&&u>s&&(u=s);for(var c=0;c<u;++c){var l,f,p,d,h=e[c].replace(i,"%20"),m=h.indexOf(r);(m>=0?(l=h.substr(0,m),f=h.substr(m+1)):(l=h,f=""),p=decodeURIComponent(l),d=decodeURIComponent(f),Object.prototype.hasOwnProperty.call(a,p))?t(a[p])?a[p].push(d):a[p]=[a[p],d]:a[p]=d}return a};var t=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},577:function(e){var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,a,i,s){return(a=a||"&",i=i||"=",null===e&&(e=void 0),"object"==typeof e)?r(o(e),function(o){var s=encodeURIComponent(t(o))+i;return n(e[o])?r(e[o],function(e){return s+encodeURIComponent(t(e))}).join(a):s+encodeURIComponent(t(e[o]))}).join(a):s?encodeURIComponent(t(s))+i+encodeURIComponent(t(e)):""};var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function r(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var o=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}},i=!0;try{t[e](a,a.exports,r),i=!1}finally{i&&delete n[e]}return a.exports}r.ab="//";var o={};o.decode=o.parse=r(815),o.encode=o.stringify=r(577),e.exports=o}()},488530:function(e,t,n){"use strict";function r(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function o(e){return e&&e.sensitive?"":"i"}n.d(t,{Bo:function(){return function e(t,n,a){var i;return t instanceof RegExp?function(e,t){if(!t)return e;for(var n=/\((?:\?<(.*?)>)?(?!\?)/g,r=0,o=n.exec(e.source);o;)t.push({name:o[1]||r++,prefix:"",suffix:"",modifier:"",pattern:""}),o=n.exec(e.source);return e}(t,n):Array.isArray(t)?(i=t.map(function(t){return e(t,n,a).source}),new RegExp("(?:".concat(i.join("|"),")"),o(a))):function(e,t,n){void 0===n&&(n={});for(var a=n.strict,i=void 0!==a&&a,s=n.start,u=n.end,c=n.encode,l=void 0===c?function(e){return e}:c,f=n.delimiter,p=n.endsWith,d="[".concat(r(void 0===p?"":p),"]|$"),h="[".concat(r(void 0===f?"/#?":f),"]"),m=void 0===s||s?"^":"",v=0;v<e.length;v++){var g=e[v];if("string"==typeof g)m+=r(l(g));else{var y=r(l(g.prefix)),b=r(l(g.suffix));if(g.pattern){if(t&&t.push(g),y||b){if("+"===g.modifier||"*"===g.modifier){var x="*"===g.modifier?"?":"";m+="(?:".concat(y,"((?:").concat(g.pattern,")(?:").concat(b).concat(y,"(?:").concat(g.pattern,"))*)").concat(b,")").concat(x)}else m+="(?:".concat(y,"(").concat(g.pattern,")").concat(b,")").concat(g.modifier)}else"+"===g.modifier||"*"===g.modifier?m+="((?:".concat(g.pattern,")").concat(g.modifier,")"):m+="(".concat(g.pattern,")").concat(g.modifier)}else m+="(?:".concat(y).concat(b,")").concat(g.modifier)}}if(void 0===u||u)i||(m+="".concat(h,"?")),m+=n.endsWith?"(?=".concat(d,")"):"$";else{var E=e[e.length-1],w="string"==typeof E?h.indexOf(E[E.length-1])>-1:void 0===E;i||(m+="(?:".concat(h,"(?=").concat(d,"))?")),w||(m+="(?=".concat(h,"|").concat(d,")"))}return new RegExp(m,o(n))}(function(e,t){void 0===t&&(t={});for(var n=function(e){for(var t=[],n=0;n<e.length;){var r=e[n];if("*"===r||"+"===r||"?"===r){t.push({type:"MODIFIER",index:n,value:e[n++]});continue}if("\\"===r){t.push({type:"ESCAPED_CHAR",index:n++,value:e[n++]});continue}if("{"===r){t.push({type:"OPEN",index:n,value:e[n++]});continue}if("}"===r){t.push({type:"CLOSE",index:n,value:e[n++]});continue}if(":"===r){for(var o="",a=n+1;a<e.length;){var i=e.charCodeAt(a);if(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||95===i){o+=e[a++];continue}break}if(!o)throw TypeError("Missing parameter name at ".concat(n));t.push({type:"NAME",index:n,value:o}),n=a;continue}if("("===r){var s=1,u="",a=n+1;if("?"===e[a])throw TypeError('Pattern cannot start with "?" at '.concat(a));for(;a<e.length;){if("\\"===e[a]){u+=e[a++]+e[a++];continue}if(")"===e[a]){if(0==--s){a++;break}}else if("("===e[a]&&(s++,"?"!==e[a+1]))throw TypeError("Capturing groups are not allowed at ".concat(a));u+=e[a++]}if(s)throw TypeError("Unbalanced pattern at ".concat(n));if(!u)throw TypeError("Missing pattern at ".concat(n));t.push({type:"PATTERN",index:n,value:u}),n=a;continue}t.push({type:"CHAR",index:n,value:e[n++]})}return t.push({type:"END",index:n,value:""}),t}(e),o=t.prefixes,a=void 0===o?"./":o,i="[^".concat(r(t.delimiter||"/#?"),"]+?"),s=[],u=0,c=0,l="",f=function(e){if(c<n.length&&n[c].type===e)return n[c++].value},p=function(e){var t=f(e);if(void 0!==t)return t;var r=n[c],o=r.type,a=r.index;throw TypeError("Unexpected ".concat(o," at ").concat(a,", expected ").concat(e))},d=function(){for(var e,t="";e=f("CHAR")||f("ESCAPED_CHAR");)t+=e;return t};c<n.length;){var h=f("CHAR"),m=f("NAME"),v=f("PATTERN");if(m||v){var g=h||"";-1===a.indexOf(g)&&(l+=g,g=""),l&&(s.push(l),l=""),s.push({name:m||u++,prefix:g,suffix:"",pattern:v||i,modifier:f("MODIFIER")||""});continue}var y=h||f("ESCAPED_CHAR");if(y){l+=y;continue}if(l&&(s.push(l),l=""),f("OPEN")){var g=d(),b=f("NAME")||"",x=f("PATTERN")||"",E=d();p("CLOSE"),s.push({name:b||(x?u++:""),pattern:b&&!x?i:x,prefix:g,suffix:E,modifier:f("MODIFIER")||""});continue}p("END")}return s}(t,a),n,a)}}})},635092:function(e,t,n){"use strict";n.d(t,{t:function(){return a}});var r=n(23870),o=n(608454);function a(e){let[t,n]=(0,r.useState)(void 0);return(0,o.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,o;if(!Array.isArray(t)||!t.length)return;let a=t[0];if("borderBoxSize"in a){let e=a.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,o=t.blockSize}else r=e.offsetWidth,o=e.offsetHeight;n({width:r,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}},241673:function(e,t,n){"use strict";n.d(t,{M:function(){return v}});var r=n(23870),o=n(246985),a=n(701580),i=n(649754),s=n(750229);class u extends r.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c({children:e,isPresent:t}){let n=(0,r.useId)(),o=(0,r.useRef)(null),a=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)(()=>{let{width:e,height:r,top:i,left:s}=a.current;if(t||!o.current||!e||!r)return;o.current.dataset.motionPopId=n;let u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${i}px !important;
            left: ${s}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),r.createElement(u,{isPresent:t,childRef:o,sizeRef:a},r.cloneElement(e,{ref:o}))}let l=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:a,presenceAffectsLayout:u,mode:l})=>{let p=(0,s.h)(f),d=(0,r.useId)(),h=(0,r.useMemo)(()=>({id:d,initial:t,isPresent:n,custom:a,onExitComplete:e=>{for(let t of(p.set(e,!0),p.values()))if(!t)return;o&&o()},register:e=>(p.set(e,!1),()=>p.delete(e))}),u?void 0:[n]);return(0,r.useMemo)(()=>{p.forEach((e,t)=>p.set(t,!1))},[n]),r.useEffect(()=>{n||p.size||!o||o()},[n]),"popLayout"===l&&(e=r.createElement(c,{isPresent:n},e)),r.createElement(i.O.Provider,{value:h},e)};function f(){return new Map}var p=n(723675),d=n(190640),h=n(247219);let m=e=>e.key||"",v=({children:e,custom:t,initial:n=!0,onExitComplete:i,exitBeforeEnter:s,presenceAffectsLayout:u=!0,mode:c="sync"})=>{var f;(0,h.k)(!s,"Replace exitBeforeEnter with mode='wait'");let v=(0,r.useContext)(p.p).forceRender||(0,o.N)()[0],g=(0,a.t)(),y=function(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}(e),b=y,x=(0,r.useRef)(new Map).current,E=(0,r.useRef)(b),w=(0,r.useRef)(new Map).current,C=(0,r.useRef)(!0);if((0,d.L)(()=>{C.current=!1,function(e,t){e.forEach(e=>{let n=m(e);t.set(n,e)})}(y,w),E.current=b}),f=()=>{C.current=!0,w.clear(),x.clear()},(0,r.useEffect)(()=>()=>f(),[]),C.current)return r.createElement(r.Fragment,null,b.map(e=>r.createElement(l,{key:m(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:u,mode:c},e)));b=[...b];let P=E.current.map(m),A=y.map(m),R=P.length;for(let e=0;e<R;e++){let t=P[e];-1!==A.indexOf(t)||x.has(t)||x.set(t,void 0)}return"wait"===c&&x.size&&(b=[]),x.forEach((e,n)=>{if(-1!==A.indexOf(n))return;let o=w.get(n);if(!o)return;let a=P.indexOf(n),s=e;s||(s=r.createElement(l,{key:m(o),isPresent:!1,onExitComplete:()=>{w.delete(n),x.delete(n);let e=E.current.findIndex(e=>e.key===n);if(E.current.splice(e,1),!x.size){if(E.current=y,!1===g.current)return;v(),i&&i()}},custom:t,presenceAffectsLayout:u,mode:c},o),x.set(n,s)),b.splice(a,0,s)}),b=b.map(e=>{let t=e.key;return x.has(t)?e:r.createElement(l,{key:m(e),isPresent:!0,presenceAffectsLayout:u,mode:c},e)}),r.createElement(r.Fragment,null,x.size?b:b.map(e=>(0,r.cloneElement)(e)))}},723675:function(e,t,n){"use strict";n.d(t,{p:function(){return r}});let r=(0,n(23870).createContext)({})},740539:function(e,t,n){"use strict";n.d(t,{u:function(){return r}});let r=(0,n(23870).createContext)({strict:!1})},337097:function(e,t,n){"use strict";n.d(t,{_:function(){return r}});let r=(0,n(23870).createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"})},95954:function(e,t,n){"use strict";n.d(t,{v:function(){return r}});let r=(0,n(23870).createContext)({})},649754:function(e,t,n){"use strict";n.d(t,{O:function(){return r}});let r=(0,n(23870).createContext)(null)},31682:function(e,t,n){"use strict";n.d(t,{g:function(){return r}});let r=(0,n(23870).createContext)({})},409326:function(e,t,n){"use strict";n.d(t,{A:function(){return o}});let r={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},o={};for(let e in r)o[e]={isEnabled:t=>r[e].some(e=>!!t[e])}},426699:function(e,t,n){"use strict";n.d(t,{K:function(){return o}});var r=n(409326);function o(e){for(let t in e)r.A[t]={...r.A[t],...e[t]}}},190492:function(e,t,n){"use strict";n.d(t,{D:function(){return y}});var r=n(23870),o=n(337097),a=n(95954),i=n(649754),s=n(190640),u=n(740539),c=n(151890),l=n(627267),f=n(873560);function p(e){return Array.isArray(e)?e.join(" "):e}var d=n(426699),h=n(985582),m=n(723675),v=n(31682);let g=Symbol.for("motionComponentSymbol");function y(e){function t(t,n={}){return function({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:y,Component:b}){e&&(0,d.K)(e);let x=(0,r.forwardRef)(function(d,g){var x;let E;let w={...(0,r.useContext)(o._),...d,layoutId:function({layoutId:e}){let t=(0,r.useContext)(m.p).id;return t&&void 0!==e?t+"-"+e:e}(d)},{isStatic:C}=w,P=function(e){let{initial:t,animate:n}=function(e,t){if((0,f.G)(e)){let{initial:t,animate:n}=e;return{initial:!1===t||(0,l.$)(t)?t:void 0,animate:(0,l.$)(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,r.useContext)(a.v));return(0,r.useMemo)(()=>({initial:t,animate:n}),[p(t),p(n)])}(d),A=y(d,C);if(!C&&h.j){P.visualElement=function(e,t,n,c){let{visualElement:l}=(0,r.useContext)(a.v),f=(0,r.useContext)(u.u),p=(0,r.useContext)(i.O),d=(0,r.useContext)(o._).reducedMotion,h=(0,r.useRef)();c=c||f.renderer,!h.current&&c&&(h.current=c(e,{visualState:t,parent:l,props:n,presenceContext:p,blockInitialAnimation:!!p&&!1===p.initial,reducedMotionConfig:d}));let m=h.current;return(0,r.useInsertionEffect)(()=>{m&&m.update(n,p)}),(0,s.L)(()=>{m&&m.render()}),(0,r.useEffect)(()=>{m&&m.updateFeatures()}),(window.HandoffAppearAnimations?s.L:r.useEffect)(()=>{m&&m.animationState&&m.animationState.animateChanges()}),m}(b,A,w,t);let n=(0,r.useContext)(v.g),c=(0,r.useContext)(u.u).strict;P.visualElement&&(E=P.visualElement.loadFeatures(w,c,e,n))}return r.createElement(a.v.Provider,{value:P},E&&P.visualElement?r.createElement(E,{visualElement:P.visualElement,...w}):null,n(b,d,(x=P.visualElement,(0,r.useCallback)(e=>{e&&A.mount&&A.mount(e),x&&(e?x.mount(e):x.unmount()),g&&("function"==typeof g?g(e):(0,c.I)(g)&&(g.current=e))},[x])),A,C,P.visualElement))});return x[g]=b,x}(e(t,n))}if("undefined"==typeof Proxy)return t;let n=new Map;return new Proxy(t,{get:(e,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}},788222:function(e,t,n){"use strict";n.d(t,{w:function(){return R}});var r=n(516593),o=n(23870),a=n(745597),i=n(468951),s=n(838317);let u=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function c(e,t,n){for(let r in t)(0,i.i)(t[r])||(0,a.j)(r,n)||(e[r]=t[r])}var l=n(189759),f=n(158811);let p=()=>({...u(),attrs:{}});var d=n(886380),h=n(84460),m=n(67178),v=n(878010),g=n(649754),y=n(632262),b=n(750229),x=n(640511),E=n(95954),w=n(873560);let C=e=>(t,n)=>{let r=(0,o.useContext)(E.v),a=(0,o.useContext)(g.O),i=()=>(function({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,a){let i={latestValues:function(e,t,n,r){let o={},a=r(e,{});for(let e in a)o[e]=(0,x.b)(a[e]);let{initial:i,animate:s}=e,u=(0,w.G)(e),c=(0,w.M)(e);t&&c&&!u&&!1!==e.inherit&&(void 0===i&&(i=t.initial),void 0===s&&(s=t.animate));let l=!!n&&!1===n.initial,f=(l=l||!1===i)?s:i;return f&&"boolean"!=typeof f&&!(0,v.H)(f)&&(Array.isArray(f)?f:[f]).forEach(t=>{let n=(0,y.o)(e,t);if(!n)return;let{transitionEnd:r,transition:a,...i}=n;for(let e in i){let t=i[e];if(Array.isArray(t)){let e=l?t.length-1:0;t=t[e]}null!==t&&(o[e]=t)}for(let e in r)o[e]=r[e]}),o}(r,o,a,e),renderState:t()};return n&&(i.mount=e=>n(r,e,i)),i})(e,t,r,a);return n?i():(0,b.h)(i)},P={useVisualState:C({scrapeMotionValuesFromProps:m.U,createRenderState:p,onMount:(e,t,{renderState:n,latestValues:r})=>{try{n.dimensions="function"==typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(e){n.dimensions={x:0,y:0,width:0,height:0}}(0,f.i)(n,r,{enableHardwareAcceleration:!1},(0,d.a)(t.tagName),e.transformTemplate),(0,h.K)(t,n)}})},A={useVisualState:C({scrapeMotionValuesFromProps:n(201430).U,createRenderState:u})};function R(e,{forwardMotionProps:t=!1},n,a){return{...(0,r.q)(e)?P:A,preloadedFeatures:n,useRender:function(e=!1){return(t,n,a,{latestValues:h},m)=>{let v=((0,r.q)(t)?function(e,t,n,r){let a=(0,o.useMemo)(()=>{let n=p();return(0,f.i)(n,t,{enableHardwareAcceleration:!1},(0,d.a)(r),e.transformTemplate),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};c(t,e.style,e),a.style={...t,...a.style}}return a}:function(e,t,n){let r={},a=function(e,t,n){let r=e.style||{},a={};return c(a,r,e),Object.assign(a,function({transformTemplate:e},t,n){return(0,o.useMemo)(()=>{let r=u();return(0,s.r)(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}(e,t,n)),e.transformValues?e.transformValues(a):a}(e,t,n);return e.drag&&!1!==e.dragListener&&(r.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=!0===e.drag?"none":`pan-${"x"===e.drag?"y":"x"}`),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=a,r})(n,h,m,t),g={...(0,l.L)(n,"string"==typeof t,e),...v,ref:a},{children:y}=n,b=(0,o.useMemo)(()=>(0,i.i)(y)?y.get():y,[y]);return(0,o.createElement)(t,{...g,children:b})}}(t),createVisualElement:a,Component:e}}},189759:function(e,t,n){"use strict";n.d(t,{L:function(){return s},K:function(){return i}});let r=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function o(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||r.has(e)}let a=e=>!o(e);function i(e){e&&(a=t=>t.startsWith("on")?!o(t):e(t))}try{i(require("@emotion/is-prop-valid").default)}catch(e){}function s(e,t,n){let r={};for(let i in e)("values"!==i||"object"!=typeof e.values)&&(a(i)||!0===n&&o(i)||!t&&!o(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}},750229:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});var r=n(23870);function o(e){let t=(0,r.useRef)(null);return null===t.current&&(t.current=e()),t.current}},246985:function(e,t,n){"use strict";n.d(t,{N:function(){return i}});var r=n(133884),o=n(23870),a=n(701580);function i(){let e=(0,a.t)(),[t,n]=(0,o.useState)(0),i=(0,o.useCallback)(()=>{e.current&&n(t+1)},[t]);return[(0,o.useCallback)(()=>r.Wi.postRender(i),[i]),t]}},701580:function(e,t,n){"use strict";n.d(t,{t:function(){return a}});var r=n(23870),o=n(190640);function a(){let e=(0,r.useRef)(!1);return(0,o.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},190640:function(e,t,n){"use strict";n.d(t,{L:function(){return o}});var r=n(23870);let o=n(985582).j?r.useLayoutEffect:r.useEffect},640511:function(e,t,n){"use strict";n.d(t,{b:function(){return a}});var r=n(191316),o=n(468951);function a(e){let t=(0,o.i)(e)?e.get():e;return(0,r.p)(t)?t.toValue():t}},459766:function(e,t,n){"use strict";function r(e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}}n.d(t,{l:function(){return r}})}}]);
//# debugId=4ef0ccf4-9953-527c-87ea-10b159a468af
