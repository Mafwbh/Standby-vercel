"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a3cff2c2-83d0-55f6-a70d-ad6337d8519a")}catch(e){}}();
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69984,20181,93468],{393468:function(e,t,n){n.d(t,{v:function(){return x}});/*!
* tabbable 6.0.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var r=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=r.join(","),a="undefined"==typeof Element,i=a?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,u=!a&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},c=function(e,t,n){var r=Array.prototype.slice.apply(e.querySelectorAll(o));return t&&i.call(e,o)&&r.unshift(e),r=r.filter(n)},s=function e(t,n,r){for(var a=[],u=Array.from(t);u.length;){var c=u.shift();if("SLOT"===c.tagName){var s=c.assignedElements(),l=e(s.length?s:c.children,!0,r);r.flatten?a.push.apply(a,l):a.push({scopeParent:c,candidates:l})}else{i.call(c,o)&&r.filter(c)&&(n||!t.includes(c))&&a.push(c);var f=c.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(c),d=!r.shadowRootFilter||r.shadowRootFilter(c);if(f&&d){var p=e(!0===f?c.children:f.children,!0,r);r.flatten?a.push.apply(a,p):a.push({scopeParent:c,candidates:p})}else u.unshift.apply(u,c.children)}}return a},l=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},f=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},d=function(e){return"INPUT"===e.tagName},p=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]},b=function(e){if(!e.name)return!0;var t,n=e.form||u(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=p(t,e.form);return!o||o===e},v=function(e){for(var t,n,r=u(e).host,o=!!(null!==(t=r)&&void 0!==t&&t.ownerDocument.contains(r)||e.ownerDocument.contains(e));!o&&r;)o=!!(null!==(n=r=u(r).host)&&void 0!==n&&n.ownerDocument.contains(r));return o},h=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},m=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=i.call(e,"details>summary:first-of-type")?e.parentElement:e;if(i.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return h(e)}else{if("function"==typeof r){for(var a=e;e;){var c=e.parentElement,s=u(e);if(c&&!c.shadowRoot&&!0===r(c))return h(e);e=e.assignedSlot?e.assignedSlot:c||s===e.ownerDocument?c:s.host}e=a}if(v(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},y=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!i.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1},g=function(e,t){return!(t.disabled||d(t)&&"hidden"===t.type||m(t,e)||"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some(function(e){return"SUMMARY"===e.tagName})||y(t))},w=function(e,t){var n;return!(d(n=t)&&"radio"===n.type&&!b(n)||0>l(t))&&!!g(e,t)},E=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!isNaN(t)||t>=0},S=function e(t){var n=[],r=[];return t.forEach(function(t,o){var a=!!t.scopeParent,i=a?t.scopeParent:t,u=l(i,a),c=a?e(t.candidates):i;0===u?a?n.push.apply(n,c):n.push(i):r.push({documentOrder:o,tabIndex:u,item:t,isScope:a,content:c})}),r.sort(f).reduce(function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e},[]).concat(n)},N=function(e,t){if(t=t||{},!e)throw Error("No node provided");return!1!==i.call(e,o)&&w(t,e)},O=r.concat("iframe").join(","),k=function(e,t){if(t=t||{},!e)throw Error("No node provided");return!1!==i.call(e,O)&&g(t,e)};/*!
* focus-trap 7.1.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var I=[],T=function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var r=e.indexOf(t);-1===r||e.splice(r,1),e.push(t)},R=function(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()},C=function(e){return setTimeout(e,0)},A=function(e,t){var n=-1;return e.every(function(e,r){return!t(e)||(n=r,!1)}),n},P=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return"function"==typeof e?e.apply(void 0,n):e},G=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},x=function(e,t){var n,r=(null==t?void 0:t.document)||document,o=(null==t?void 0:t.trapStack)||I,a=F({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),i={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},u=function(e,t,n){return e&&void 0!==e[t]?e[t]:a[n||t]},l=function(e){return i.containerGroups.findIndex(function(t){var n=t.container,r=t.tabbableNodes;return n.contains(e)||r.find(function(t){return t===e})})},f=function(e){var t=a[e];if("function"==typeof t){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];t=t.apply(void 0,o)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t;throw Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var u=t;if("string"==typeof t&&!(u=r.querySelector(t)))throw Error("`".concat(e,"` as selector refers to no known node"));return u},d=function(){var e=f("initialFocus");if(!1===e)return!1;if(void 0===e){if(l(r.activeElement)>=0)e=r.activeElement;else{var t=i.tabbableGroups[0];e=t&&t.firstTabbableNode||f("fallbackFocus")}}if(!e)throw Error("Your focus-trap needs to have at least one focusable element");return e},p=function(){if(i.containerGroups=i.containers.map(function(e){var t,n,r,o,i=(t=e,S((n=(n=a.tabbableOptions)||{}).getShadowRoot?s([t],n.includeContainer,{filter:w.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:E}):c(t,n.includeContainer,w.bind(null,n)))),u=(r=e,(o=(o=a.tabbableOptions)||{}).getShadowRoot?s([r],o.includeContainer,{filter:g.bind(null,o),flatten:!0,getShadowRoot:o.getShadowRoot}):c(r,o.includeContainer,g.bind(null,o)));return{container:e,tabbableNodes:i,focusableNodes:u,firstTabbableNode:i.length>0?i[0]:null,lastTabbableNode:i.length>0?i[i.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=u.findIndex(function(t){return t===e});return n<0?void 0:t?u.slice(n+1).find(function(e){return N(e,a.tabbableOptions)}):u.slice(0,n).reverse().find(function(e){return N(e,a.tabbableOptions)})}}}),i.tabbableGroups=i.containerGroups.filter(function(e){return e.tabbableNodes.length>0}),i.tabbableGroups.length<=0&&!f("fallbackFocus"))throw Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},b=function e(t){if(!1!==t&&t!==r.activeElement){if(!t||!t.focus){e(d());return}t.focus({preventScroll:!!a.preventScroll}),i.mostRecentlyFocusedNode=t,t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select&&t.select()}},v=function(e){var t=f("setReturnFocus",e);return t||!1!==t&&e},h=function(e){var t=G(e);if(!(l(t)>=0)){if(P(a.clickOutsideDeactivates,e)){n.deactivate({returnFocus:a.returnFocusOnDeactivate&&!k(t,a.tabbableOptions)});return}P(a.allowOutsideClick,e)||e.preventDefault()}},m=function(e){var t=G(e),n=l(t)>=0;n||t instanceof Document?n&&(i.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),b(i.mostRecentlyFocusedNode||d()))},y=function(e){var t=G(e);p();var n=null;if(i.tabbableGroups.length>0){var r=l(t),o=r>=0?i.containerGroups[r]:void 0;if(r<0)n=e.shiftKey?i.tabbableGroups[i.tabbableGroups.length-1].lastTabbableNode:i.tabbableGroups[0].firstTabbableNode;else if(e.shiftKey){var u=A(i.tabbableGroups,function(e){return t===e.firstTabbableNode});if(u<0&&(o.container===t||k(t,a.tabbableOptions)&&!N(t,a.tabbableOptions)&&!o.nextTabbableNode(t,!1))&&(u=r),u>=0){var c=0===u?i.tabbableGroups.length-1:u-1;n=i.tabbableGroups[c].lastTabbableNode}}else{var s=A(i.tabbableGroups,function(e){return t===e.lastTabbableNode});if(s<0&&(o.container===t||k(t,a.tabbableOptions)&&!N(t,a.tabbableOptions)&&!o.nextTabbableNode(t))&&(s=r),s>=0){var d=s===i.tabbableGroups.length-1?0:s+1;n=i.tabbableGroups[d].firstTabbableNode}}}else n=f("fallbackFocus");n&&(e.preventDefault(),b(n))},O=function(e){if(("Escape"===e.key||"Esc"===e.key||27===e.keyCode)&&!1!==P(a.escapeDeactivates,e)){e.preventDefault(),n.deactivate();return}if("Tab"===e.key||9===e.keyCode){y(e);return}},D=function(e){l(G(e))>=0||P(a.clickOutsideDeactivates,e)||P(a.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},x=function(){if(i.active)return T(o,n),i.delayInitialFocusTimer=a.delayInitialFocus?C(function(){b(d())}):b(d()),r.addEventListener("focusin",m,!0),r.addEventListener("mousedown",h,{capture:!0,passive:!1}),r.addEventListener("touchstart",h,{capture:!0,passive:!1}),r.addEventListener("click",D,{capture:!0,passive:!1}),r.addEventListener("keydown",O,{capture:!0,passive:!1}),n},L=function(){if(i.active)return r.removeEventListener("focusin",m,!0),r.removeEventListener("mousedown",h,!0),r.removeEventListener("touchstart",h,!0),r.removeEventListener("click",D,!0),r.removeEventListener("keydown",O,!0),n};return(n={get active(){return i.active},get paused(){return i.paused},activate:function(e){if(i.active)return this;var t=u(e,"onActivate"),n=u(e,"onPostActivate"),o=u(e,"checkCanFocusTrap");o||p(),i.active=!0,i.paused=!1,i.nodeFocusedBeforeActivation=r.activeElement,t&&t();var a=function(){o&&p(),x(),n&&n()};return o?o(i.containers.concat()).then(a,a):a(),this},deactivate:function(e){if(!i.active)return this;var t=F({onDeactivate:a.onDeactivate,onPostDeactivate:a.onPostDeactivate,checkCanReturnFocus:a.checkCanReturnFocus},e);clearTimeout(i.delayInitialFocusTimer),i.delayInitialFocusTimer=void 0,L(),i.active=!1,i.paused=!1,R(o,n);var r=u(t,"onDeactivate"),c=u(t,"onPostDeactivate"),s=u(t,"checkCanReturnFocus"),l=u(t,"returnFocus","returnFocusOnDeactivate");r&&r();var f=function(){C(function(){l&&b(v(i.nodeFocusedBeforeActivation)),c&&c()})};return l&&s?s(v(i.nodeFocusedBeforeActivation)).then(f,f):f(),this},pause:function(){return i.paused||!i.active||(i.paused=!0,L()),this},unpause:function(){return i.paused&&i.active&&(i.paused=!1,p(),x()),this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return i.containers=t.map(function(e){return"string"==typeof e?r.querySelector(e):e}),i.active&&p(),this}}).updateContainerElements(e),n}},429990:function(e,t,n){n.d(t,{I:function(){return o}});var r=n(247219);function o(e,t,n){var o;if("string"==typeof e){let a=document;t&&((0,r.k)(!!t.current,"Scope provided, but no element detected."),a=t.current),n?(null!==(o=n[e])&&void 0!==o||(n[e]=a.querySelectorAll(e)),e=n[e]):e=a.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}},321632:function(e,t,n){n.d(t,{Y:function(){return i}});var r=n(23870),o=n(429990);let a={any:0,all:1};function i(e,{root:t,margin:n,amount:i,once:u=!1}={}){let[c,s]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!e.current||u&&c)return;let r={root:t&&t.current||void 0,margin:n,amount:"some"===i?"any":i};return function(e,t,{root:n,margin:r,amount:i="any"}={}){let u=(0,o.I)(e),c=new WeakMap,s=new IntersectionObserver(e=>{e.forEach(e=>{let n=c.get(e.target);if(!!n!==e.isIntersecting){if(e.isIntersecting){let n=t(e);"function"==typeof n?c.set(e.target,n):s.unobserve(e.target)}else n&&(n(e),c.delete(e.target))}})},{root:n,rootMargin:r,threshold:"number"==typeof i?i:a[i]});return u.forEach(e=>s.observe(e)),()=>s.disconnect()}(e.current,()=>(s(!0),u?void 0:()=>s(!1)),r)},[t,e,n,u]),c}}}]);
//# debugId=a3cff2c2-83d0-55f6-a70d-ad6337d8519a
