function ik(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Od(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var YI={exports:{}},Vd={},JI={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ql=Symbol.for("react.element"),sk=Symbol.for("react.portal"),ok=Symbol.for("react.fragment"),ak=Symbol.for("react.strict_mode"),lk=Symbol.for("react.profiler"),uk=Symbol.for("react.provider"),ck=Symbol.for("react.context"),dk=Symbol.for("react.forward_ref"),hk=Symbol.for("react.suspense"),fk=Symbol.for("react.memo"),pk=Symbol.for("react.lazy"),yv=Symbol.iterator;function mk(t){return t===null||typeof t!="object"?null:(t=yv&&t[yv]||t["@@iterator"],typeof t=="function"?t:null)}var XI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ZI=Object.assign,eT={};function bo(t,e,n){this.props=t,this.context=e,this.refs=eT,this.updater=n||XI}bo.prototype.isReactComponent={};bo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function tT(){}tT.prototype=bo.prototype;function lg(t,e,n){this.props=t,this.context=e,this.refs=eT,this.updater=n||XI}var ug=lg.prototype=new tT;ug.constructor=lg;ZI(ug,bo.prototype);ug.isPureReactComponent=!0;var _v=Array.isArray,nT=Object.prototype.hasOwnProperty,cg={current:null},rT={key:!0,ref:!0,__self:!0,__source:!0};function iT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)nT.call(e,r)&&!rT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ql,type:t,key:s,ref:o,props:i,_owner:cg.current}}function gk(t,e){return{$$typeof:Ql,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dg(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ql}function yk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vv=/\/+/g;function sf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yk(""+t.key):e.toString(36)}function ac(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ql:case sk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+sf(o,0):r,_v(i)?(n="",t!=null&&(n=t.replace(vv,"$&/")+"/"),ac(i,e,n,"",function(u){return u})):i!=null&&(dg(i)&&(i=gk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",_v(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+sf(s,a);o+=ac(s,e,n,l,i)}else if(l=mk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+sf(s,a++),o+=ac(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function bu(t,e,n){if(t==null)return t;var r=[],i=0;return ac(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _k(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var At={current:null},lc={transition:null},vk={ReactCurrentDispatcher:At,ReactCurrentBatchConfig:lc,ReactCurrentOwner:cg};X.Children={map:bu,forEach:function(t,e,n){bu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return bu(t,function(){e++}),e},toArray:function(t){return bu(t,function(e){return e})||[]},only:function(t){if(!dg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=bo;X.Fragment=ok;X.Profiler=lk;X.PureComponent=lg;X.StrictMode=ak;X.Suspense=hk;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ZI({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=cg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)nT.call(e,l)&&!rT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ql,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t){return t={$$typeof:ck,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:uk,_context:t},t.Consumer=t};X.createElement=iT;X.createFactory=function(t){var e=iT.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:dk,render:t}};X.isValidElement=dg;X.lazy=function(t){return{$$typeof:pk,_payload:{_status:-1,_result:t},_init:_k}};X.memo=function(t,e){return{$$typeof:fk,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=lc.transition;lc.transition={};try{t()}finally{lc.transition=e}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(t,e){return At.current.useCallback(t,e)};X.useContext=function(t){return At.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return At.current.useDeferredValue(t)};X.useEffect=function(t,e){return At.current.useEffect(t,e)};X.useId=function(){return At.current.useId()};X.useImperativeHandle=function(t,e,n){return At.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return At.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return At.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return At.current.useMemo(t,e)};X.useReducer=function(t,e,n){return At.current.useReducer(t,e,n)};X.useRef=function(t){return At.current.useRef(t)};X.useState=function(t){return At.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return At.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return At.current.useTransition()};X.version="18.2.0";JI.exports=X;var S=JI.exports;const Bn=Od(S),wk=ik({__proto__:null,default:Bn},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ek=S,Ik=Symbol.for("react.element"),Tk=Symbol.for("react.fragment"),Sk=Object.prototype.hasOwnProperty,Ak=Ek.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rk={key:!0,ref:!0,__self:!0,__source:!0};function sT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Sk.call(e,r)&&!Rk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ik,type:t,key:s,ref:o,props:i,_owner:Ak.current}}Vd.Fragment=Tk;Vd.jsx=sT;Vd.jsxs=sT;YI.exports=Vd;var E=YI.exports,ap={},oT={exports:{}},Wt={},aT={exports:{}},lT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,G){var H=F.length;F.push(G);e:for(;0<H;){var xe=H-1>>>1,ze=F[xe];if(0<i(ze,G))F[xe]=G,F[H]=ze,H=xe;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var G=F[0],H=F.pop();if(H!==G){F[0]=H;e:for(var xe=0,ze=F.length,xu=ze>>>1;xe<xu;){var pi=2*(xe+1)-1,rf=F[pi],mi=pi+1,Nu=F[mi];if(0>i(rf,H))mi<ze&&0>i(Nu,rf)?(F[xe]=Nu,F[mi]=H,xe=mi):(F[xe]=rf,F[pi]=H,xe=pi);else if(mi<ze&&0>i(Nu,H))F[xe]=Nu,F[mi]=H,xe=mi;else break e}}return G}function i(F,G){var H=F.sortIndex-G.sortIndex;return H!==0?H:F.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,m=!1,y=!1,_=!1,v=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(F){for(var G=n(u);G!==null;){if(G.callback===null)r(u);else if(G.startTime<=F)r(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function I(F){if(_=!1,g(F),!y)if(n(l)!==null)y=!0,tf(P);else{var G=n(u);G!==null&&nf(I,G.startTime-F)}}function P(F,G){y=!1,_&&(_=!1,p(U),U=-1),m=!0;var H=h;try{for(g(G),d=n(l);d!==null&&(!(d.expirationTime>G)||F&&!sn());){var xe=d.callback;if(typeof xe=="function"){d.callback=null,h=d.priorityLevel;var ze=xe(d.expirationTime<=G);G=t.unstable_now(),typeof ze=="function"?d.callback=ze:d===n(l)&&r(l),g(G)}else r(l);d=n(l)}if(d!==null)var xu=!0;else{var pi=n(u);pi!==null&&nf(I,pi.startTime-G),xu=!1}return xu}finally{d=null,h=H,m=!1}}var k=!1,b=null,U=-1,ae=5,K=-1;function sn(){return!(t.unstable_now()-K<ae)}function Xo(){if(b!==null){var F=t.unstable_now();K=F;var G=!0;try{G=b(!0,F)}finally{G?Zo():(k=!1,b=null)}}else k=!1}var Zo;if(typeof f=="function")Zo=function(){f(Xo)};else if(typeof MessageChannel<"u"){var gv=new MessageChannel,rk=gv.port2;gv.port1.onmessage=Xo,Zo=function(){rk.postMessage(null)}}else Zo=function(){v(Xo,0)};function tf(F){b=F,k||(k=!0,Zo())}function nf(F,G){U=v(function(){F(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,tf(P))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(h){case 1:case 2:case 3:var G=3;break;default:G=h}var H=h;h=G;try{return F()}finally{h=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,G){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var H=h;h=F;try{return G()}finally{h=H}},t.unstable_scheduleCallback=function(F,G,H){var xe=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?xe+H:xe):H=xe,F){case 1:var ze=-1;break;case 2:ze=250;break;case 5:ze=1073741823;break;case 4:ze=1e4;break;default:ze=5e3}return ze=H+ze,F={id:c++,callback:G,priorityLevel:F,startTime:H,expirationTime:ze,sortIndex:-1},H>xe?(F.sortIndex=H,e(u,F),n(l)===null&&F===n(u)&&(_?(p(U),U=-1):_=!0,nf(I,H-xe))):(F.sortIndex=ze,e(l,F),y||m||(y=!0,tf(P))),F},t.unstable_shouldYield=sn,t.unstable_wrapCallback=function(F){var G=h;return function(){var H=h;h=G;try{return F.apply(this,arguments)}finally{h=H}}}})(lT);aT.exports=lT;var Pk=aT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uT=S,jt=Pk;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cT=new Set,Xa={};function as(t,e){oo(t,e),oo(t+"Capture",e)}function oo(t,e){for(Xa[t]=e,t=0;t<e.length;t++)cT.add(e[t])}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lp=Object.prototype.hasOwnProperty,Ck=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wv={},Ev={};function kk(t){return lp.call(Ev,t)?!0:lp.call(wv,t)?!1:Ck.test(t)?Ev[t]=!0:(wv[t]=!0,!1)}function xk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Nk(t,e,n,r){if(e===null||typeof e>"u"||xk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Rt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ot[t]=new Rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ot[e]=new Rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ot[t]=new Rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ot[t]=new Rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ot[t]=new Rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ot[t]=new Rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ot[t]=new Rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ot[t]=new Rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ot[t]=new Rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var hg=/[\-:]([a-z])/g;function fg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hg,fg);ot[e]=new Rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hg,fg);ot[e]=new Rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hg,fg);ot[e]=new Rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ot[t]=new Rt(t,1,!1,t.toLowerCase(),null,!1,!1)});ot.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ot[t]=new Rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function pg(t,e,n,r){var i=ot.hasOwnProperty(e)?ot[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Nk(e,n,i,r)&&(n=null),r||i===null?kk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var or=uT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Du=Symbol.for("react.element"),Ds=Symbol.for("react.portal"),Os=Symbol.for("react.fragment"),mg=Symbol.for("react.strict_mode"),up=Symbol.for("react.profiler"),dT=Symbol.for("react.provider"),hT=Symbol.for("react.context"),gg=Symbol.for("react.forward_ref"),cp=Symbol.for("react.suspense"),dp=Symbol.for("react.suspense_list"),yg=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),fT=Symbol.for("react.offscreen"),Iv=Symbol.iterator;function ea(t){return t===null||typeof t!="object"?null:(t=Iv&&t[Iv]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,of;function va(t){if(of===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);of=e&&e[1]||""}return`
`+of+t}var af=!1;function lf(t,e){if(!t||af)return"";af=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{af=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?va(t):""}function bk(t){switch(t.tag){case 5:return va(t.type);case 16:return va("Lazy");case 13:return va("Suspense");case 19:return va("SuspenseList");case 0:case 2:case 15:return t=lf(t.type,!1),t;case 11:return t=lf(t.type.render,!1),t;case 1:return t=lf(t.type,!0),t;default:return""}}function hp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Os:return"Fragment";case Ds:return"Portal";case up:return"Profiler";case mg:return"StrictMode";case cp:return"Suspense";case dp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hT:return(t.displayName||"Context")+".Consumer";case dT:return(t._context.displayName||"Context")+".Provider";case gg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yg:return e=t.displayName||null,e!==null?e:hp(t.type)||"Memo";case vr:e=t._payload,t=t._init;try{return hp(t(e))}catch{}}return null}function Dk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hp(e);case 8:return e===mg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ok(t){var e=pT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ou(t){t._valueTracker||(t._valueTracker=Ok(t))}function mT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=pT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Oc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fp(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gT(t,e){e=e.checked,e!=null&&pg(t,"checked",e,!1)}function pp(t,e){gT(t,e);var n=jr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mp(t,e.type,n):e.hasOwnProperty("defaultValue")&&mp(t,e.type,jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mp(t,e,n){(e!=="number"||Oc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wa=Array.isArray;function Ks(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+jr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function gp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Av(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(wa(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:jr(n)}}function yT(t,e){var n=jr(e.value),r=jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Rv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _T(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_T(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vu,vT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vu=Vu||document.createElement("div"),Vu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vk=["Webkit","ms","Moz","O"];Object.keys(Da).forEach(function(t){Vk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Da[e]=Da[t]})});function wT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Da.hasOwnProperty(t)&&Da[t]?(""+e).trim():e+"px"}function ET(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Lk=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _p(t,e){if(e){if(Lk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function vp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wp=null;function _g(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ep=null,Hs=null,Qs=null;function Pv(t){if(t=Xl(t)){if(typeof Ep!="function")throw Error(x(280));var e=t.stateNode;e&&(e=$d(e),Ep(t.stateNode,t.type,e))}}function IT(t){Hs?Qs?Qs.push(t):Qs=[t]:Hs=t}function TT(){if(Hs){var t=Hs,e=Qs;if(Qs=Hs=null,Pv(t),e)for(t=0;t<e.length;t++)Pv(e[t])}}function ST(t,e){return t(e)}function AT(){}var uf=!1;function RT(t,e,n){if(uf)return t(e,n);uf=!0;try{return ST(t,e,n)}finally{uf=!1,(Hs!==null||Qs!==null)&&(AT(),TT())}}function el(t,e){var n=t.stateNode;if(n===null)return null;var r=$d(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var Ip=!1;if(Xn)try{var ta={};Object.defineProperty(ta,"passive",{get:function(){Ip=!0}}),window.addEventListener("test",ta,ta),window.removeEventListener("test",ta,ta)}catch{Ip=!1}function Mk(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Oa=!1,Vc=null,Lc=!1,Tp=null,Fk={onError:function(t){Oa=!0,Vc=t}};function Uk(t,e,n,r,i,s,o,a,l){Oa=!1,Vc=null,Mk.apply(Fk,arguments)}function $k(t,e,n,r,i,s,o,a,l){if(Uk.apply(this,arguments),Oa){if(Oa){var u=Vc;Oa=!1,Vc=null}else throw Error(x(198));Lc||(Lc=!0,Tp=u)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function PT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cv(t){if(ls(t)!==t)throw Error(x(188))}function Bk(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Cv(i),t;if(s===r)return Cv(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function CT(t){return t=Bk(t),t!==null?kT(t):null}function kT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kT(t);if(e!==null)return e;t=t.sibling}return null}var xT=jt.unstable_scheduleCallback,kv=jt.unstable_cancelCallback,jk=jt.unstable_shouldYield,zk=jt.unstable_requestPaint,Ne=jt.unstable_now,qk=jt.unstable_getCurrentPriorityLevel,vg=jt.unstable_ImmediatePriority,NT=jt.unstable_UserBlockingPriority,Mc=jt.unstable_NormalPriority,Wk=jt.unstable_LowPriority,bT=jt.unstable_IdlePriority,Ld=null,xn=null;function Gk(t){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(Ld,t,void 0,(t.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:Qk,Kk=Math.log,Hk=Math.LN2;function Qk(t){return t>>>=0,t===0?32:31-(Kk(t)/Hk|0)|0}var Lu=64,Mu=4194304;function Ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ea(a):(s&=o,s!==0&&(r=Ea(s)))}else o=n&~i,o!==0?r=Ea(o):s!==0&&(r=Ea(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-cn(e),i=1<<n,r|=t[n],e&=~i;return r}function Yk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-cn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Yk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Sp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function DT(){var t=Lu;return Lu<<=1,!(Lu&4194240)&&(Lu=64),t}function cf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Yl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-cn(e),t[e]=n}function Xk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-cn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function wg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-cn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ie=0;function OT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var VT,Eg,LT,MT,FT,Ap=!1,Fu=[],Nr=null,br=null,Dr=null,tl=new Map,nl=new Map,Ir=[],Zk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xv(t,e){switch(t){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":tl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(e.pointerId)}}function na(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xl(e),e!==null&&Eg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ex(t,e,n,r,i){switch(e){case"focusin":return Nr=na(Nr,t,e,n,r,i),!0;case"dragenter":return br=na(br,t,e,n,r,i),!0;case"mouseover":return Dr=na(Dr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return tl.set(s,na(tl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,nl.set(s,na(nl.get(s)||null,t,e,n,r,i)),!0}return!1}function UT(t){var e=ki(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=PT(n),e!==null){t.blockedOn=e,FT(t.priority,function(){LT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);wp=r,n.target.dispatchEvent(r),wp=null}else return e=Xl(n),e!==null&&Eg(e),t.blockedOn=n,!1;e.shift()}return!0}function Nv(t,e,n){uc(t)&&n.delete(e)}function tx(){Ap=!1,Nr!==null&&uc(Nr)&&(Nr=null),br!==null&&uc(br)&&(br=null),Dr!==null&&uc(Dr)&&(Dr=null),tl.forEach(Nv),nl.forEach(Nv)}function ra(t,e){t.blockedOn===e&&(t.blockedOn=null,Ap||(Ap=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,tx)))}function rl(t){function e(i){return ra(i,t)}if(0<Fu.length){ra(Fu[0],t);for(var n=1;n<Fu.length;n++){var r=Fu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Nr!==null&&ra(Nr,t),br!==null&&ra(br,t),Dr!==null&&ra(Dr,t),tl.forEach(e),nl.forEach(e),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)UT(n),n.blockedOn===null&&Ir.shift()}var Ys=or.ReactCurrentBatchConfig,Uc=!0;function nx(t,e,n,r){var i=ie,s=Ys.transition;Ys.transition=null;try{ie=1,Ig(t,e,n,r)}finally{ie=i,Ys.transition=s}}function rx(t,e,n,r){var i=ie,s=Ys.transition;Ys.transition=null;try{ie=4,Ig(t,e,n,r)}finally{ie=i,Ys.transition=s}}function Ig(t,e,n,r){if(Uc){var i=Rp(t,e,n,r);if(i===null)wf(t,e,r,$c,n),xv(t,r);else if(ex(i,t,e,n,r))r.stopPropagation();else if(xv(t,r),e&4&&-1<Zk.indexOf(t)){for(;i!==null;){var s=Xl(i);if(s!==null&&VT(s),s=Rp(t,e,n,r),s===null&&wf(t,e,r,$c,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else wf(t,e,r,null,n)}}var $c=null;function Rp(t,e,n,r){if($c=null,t=_g(r),t=ki(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=PT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $c=t,null}function $T(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qk()){case vg:return 1;case NT:return 4;case Mc:case Wk:return 16;case bT:return 536870912;default:return 16}default:return 16}}var Rr=null,Tg=null,cc=null;function BT(){if(cc)return cc;var t,e=Tg,n=e.length,r,i="value"in Rr?Rr.value:Rr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return cc=i.slice(t,1<r?1-r:void 0)}function dc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Uu(){return!0}function bv(){return!1}function Gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Uu:bv,this.isPropagationStopped=bv,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uu)},persist:function(){},isPersistent:Uu}),e}var Do={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sg=Gt(Do),Jl=Ie({},Do,{view:0,detail:0}),ix=Gt(Jl),df,hf,ia,Md=Ie({},Jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ag,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ia&&(ia&&t.type==="mousemove"?(df=t.screenX-ia.screenX,hf=t.screenY-ia.screenY):hf=df=0,ia=t),df)},movementY:function(t){return"movementY"in t?t.movementY:hf}}),Dv=Gt(Md),sx=Ie({},Md,{dataTransfer:0}),ox=Gt(sx),ax=Ie({},Jl,{relatedTarget:0}),ff=Gt(ax),lx=Ie({},Do,{animationName:0,elapsedTime:0,pseudoElement:0}),ux=Gt(lx),cx=Ie({},Do,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dx=Gt(cx),hx=Ie({},Do,{data:0}),Ov=Gt(hx),fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},px={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=mx[t])?!!e[t]:!1}function Ag(){return gx}var yx=Ie({},Jl,{key:function(t){if(t.key){var e=fx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?px[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ag,charCode:function(t){return t.type==="keypress"?dc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_x=Gt(yx),vx=Ie({},Md,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vv=Gt(vx),wx=Ie({},Jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ag}),Ex=Gt(wx),Ix=Ie({},Do,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tx=Gt(Ix),Sx=Ie({},Md,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ax=Gt(Sx),Rx=[9,13,27,32],Rg=Xn&&"CompositionEvent"in window,Va=null;Xn&&"documentMode"in document&&(Va=document.documentMode);var Px=Xn&&"TextEvent"in window&&!Va,jT=Xn&&(!Rg||Va&&8<Va&&11>=Va),Lv=" ",Mv=!1;function zT(t,e){switch(t){case"keyup":return Rx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vs=!1;function Cx(t,e){switch(t){case"compositionend":return qT(e);case"keypress":return e.which!==32?null:(Mv=!0,Lv);case"textInput":return t=e.data,t===Lv&&Mv?null:t;default:return null}}function kx(t,e){if(Vs)return t==="compositionend"||!Rg&&zT(t,e)?(t=BT(),cc=Tg=Rr=null,Vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jT&&e.locale!=="ko"?null:e.data;default:return null}}var xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xx[t.type]:e==="textarea"}function WT(t,e,n,r){IT(r),e=Bc(e,"onChange"),0<e.length&&(n=new Sg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var La=null,il=null;function Nx(t){n0(t,0)}function Fd(t){var e=Fs(t);if(mT(e))return t}function bx(t,e){if(t==="change")return e}var GT=!1;if(Xn){var pf;if(Xn){var mf="oninput"in document;if(!mf){var Uv=document.createElement("div");Uv.setAttribute("oninput","return;"),mf=typeof Uv.oninput=="function"}pf=mf}else pf=!1;GT=pf&&(!document.documentMode||9<document.documentMode)}function $v(){La&&(La.detachEvent("onpropertychange",KT),il=La=null)}function KT(t){if(t.propertyName==="value"&&Fd(il)){var e=[];WT(e,il,t,_g(t)),RT(Nx,e)}}function Dx(t,e,n){t==="focusin"?($v(),La=e,il=n,La.attachEvent("onpropertychange",KT)):t==="focusout"&&$v()}function Ox(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fd(il)}function Vx(t,e){if(t==="click")return Fd(e)}function Lx(t,e){if(t==="input"||t==="change")return Fd(e)}function Mx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hn=typeof Object.is=="function"?Object.is:Mx;function sl(t,e){if(hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lp.call(e,i)||!hn(t[i],e[i]))return!1}return!0}function Bv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jv(t,e){var n=Bv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bv(n)}}function HT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?HT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function QT(){for(var t=window,e=Oc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Oc(t.document)}return e}function Pg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Fx(t){var e=QT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&HT(n.ownerDocument.documentElement,n)){if(r!==null&&Pg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=jv(n,s);var o=jv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ux=Xn&&"documentMode"in document&&11>=document.documentMode,Ls=null,Pp=null,Ma=null,Cp=!1;function zv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cp||Ls==null||Ls!==Oc(r)||(r=Ls,"selectionStart"in r&&Pg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ma&&sl(Ma,r)||(Ma=r,r=Bc(Pp,"onSelect"),0<r.length&&(e=new Sg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ls)))}function $u(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ms={animationend:$u("Animation","AnimationEnd"),animationiteration:$u("Animation","AnimationIteration"),animationstart:$u("Animation","AnimationStart"),transitionend:$u("Transition","TransitionEnd")},gf={},YT={};Xn&&(YT=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Ud(t){if(gf[t])return gf[t];if(!Ms[t])return t;var e=Ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in YT)return gf[t]=e[n];return t}var JT=Ud("animationend"),XT=Ud("animationiteration"),ZT=Ud("animationstart"),e0=Ud("transitionend"),t0=new Map,qv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ni(t,e){t0.set(t,e),as(e,[t])}for(var yf=0;yf<qv.length;yf++){var _f=qv[yf],$x=_f.toLowerCase(),Bx=_f[0].toUpperCase()+_f.slice(1);ni($x,"on"+Bx)}ni(JT,"onAnimationEnd");ni(XT,"onAnimationIteration");ni(ZT,"onAnimationStart");ni("dblclick","onDoubleClick");ni("focusin","onFocus");ni("focusout","onBlur");ni(e0,"onTransitionEnd");oo("onMouseEnter",["mouseout","mouseover"]);oo("onMouseLeave",["mouseout","mouseover"]);oo("onPointerEnter",["pointerout","pointerover"]);oo("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function Wv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,$k(r,e,void 0,t),t.currentTarget=null}function n0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Wv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Wv(i,a,u),s=l}}}if(Lc)throw t=Tp,Lc=!1,Tp=null,t}function ce(t,e){var n=e[Dp];n===void 0&&(n=e[Dp]=new Set);var r=t+"__bubble";n.has(r)||(r0(e,t,2,!1),n.add(r))}function vf(t,e,n){var r=0;e&&(r|=4),r0(n,t,r,e)}var Bu="_reactListening"+Math.random().toString(36).slice(2);function ol(t){if(!t[Bu]){t[Bu]=!0,cT.forEach(function(n){n!=="selectionchange"&&(jx.has(n)||vf(n,!1,t),vf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bu]||(e[Bu]=!0,vf("selectionchange",!1,e))}}function r0(t,e,n,r){switch($T(e)){case 1:var i=nx;break;case 4:i=rx;break;default:i=Ig}n=i.bind(null,e,n,t),i=void 0,!Ip||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function wf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ki(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}RT(function(){var u=s,c=_g(n),d=[];e:{var h=t0.get(t);if(h!==void 0){var m=Sg,y=t;switch(t){case"keypress":if(dc(n)===0)break e;case"keydown":case"keyup":m=_x;break;case"focusin":y="focus",m=ff;break;case"focusout":y="blur",m=ff;break;case"beforeblur":case"afterblur":m=ff;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Dv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ex;break;case JT:case XT:case ZT:m=ux;break;case e0:m=Tx;break;case"scroll":m=ix;break;case"wheel":m=Ax;break;case"copy":case"cut":case"paste":m=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Vv}var _=(e&4)!==0,v=!_&&t==="scroll",p=_?h!==null?h+"Capture":null:h;_=[];for(var f=u,g;f!==null;){g=f;var I=g.stateNode;if(g.tag===5&&I!==null&&(g=I,p!==null&&(I=el(f,p),I!=null&&_.push(al(f,I,g)))),v)break;f=f.return}0<_.length&&(h=new m(h,y,null,n,c),d.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==wp&&(y=n.relatedTarget||n.fromElement)&&(ki(y)||y[Zn]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?ki(y):null,y!==null&&(v=ls(y),y!==v||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(_=Dv,I="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=Vv,I="onPointerLeave",p="onPointerEnter",f="pointer"),v=m==null?h:Fs(m),g=y==null?h:Fs(y),h=new _(I,f+"leave",m,n,c),h.target=v,h.relatedTarget=g,I=null,ki(c)===u&&(_=new _(p,f+"enter",y,n,c),_.target=g,_.relatedTarget=v,I=_),v=I,m&&y)t:{for(_=m,p=y,f=0,g=_;g;g=vs(g))f++;for(g=0,I=p;I;I=vs(I))g++;for(;0<f-g;)_=vs(_),f--;for(;0<g-f;)p=vs(p),g--;for(;f--;){if(_===p||p!==null&&_===p.alternate)break t;_=vs(_),p=vs(p)}_=null}else _=null;m!==null&&Gv(d,h,m,_,!1),y!==null&&v!==null&&Gv(d,v,y,_,!0)}}e:{if(h=u?Fs(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var P=bx;else if(Fv(h))if(GT)P=Lx;else{P=Ox;var k=Dx}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=Vx);if(P&&(P=P(t,u))){WT(d,P,n,c);break e}k&&k(t,h,u),t==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&mp(h,"number",h.value)}switch(k=u?Fs(u):window,t){case"focusin":(Fv(k)||k.contentEditable==="true")&&(Ls=k,Pp=u,Ma=null);break;case"focusout":Ma=Pp=Ls=null;break;case"mousedown":Cp=!0;break;case"contextmenu":case"mouseup":case"dragend":Cp=!1,zv(d,n,c);break;case"selectionchange":if(Ux)break;case"keydown":case"keyup":zv(d,n,c)}var b;if(Rg)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else Vs?zT(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(jT&&n.locale!=="ko"&&(Vs||U!=="onCompositionStart"?U==="onCompositionEnd"&&Vs&&(b=BT()):(Rr=c,Tg="value"in Rr?Rr.value:Rr.textContent,Vs=!0)),k=Bc(u,U),0<k.length&&(U=new Ov(U,t,null,n,c),d.push({event:U,listeners:k}),b?U.data=b:(b=qT(n),b!==null&&(U.data=b)))),(b=Px?Cx(t,n):kx(t,n))&&(u=Bc(u,"onBeforeInput"),0<u.length&&(c=new Ov("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=b))}n0(d,e)})}function al(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=el(t,n),s!=null&&r.unshift(al(t,s,i)),s=el(t,e),s!=null&&r.push(al(t,s,i))),t=t.return}return r}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=el(n,s),l!=null&&o.unshift(al(n,l,a))):i||(l=el(n,s),l!=null&&o.push(al(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var zx=/\r\n?/g,qx=/\u0000|\uFFFD/g;function Kv(t){return(typeof t=="string"?t:""+t).replace(zx,`
`).replace(qx,"")}function ju(t,e,n){if(e=Kv(e),Kv(t)!==e&&n)throw Error(x(425))}function jc(){}var kp=null,xp=null;function Np(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bp=typeof setTimeout=="function"?setTimeout:void 0,Wx=typeof clearTimeout=="function"?clearTimeout:void 0,Hv=typeof Promise=="function"?Promise:void 0,Gx=typeof queueMicrotask=="function"?queueMicrotask:typeof Hv<"u"?function(t){return Hv.resolve(null).then(t).catch(Kx)}:bp;function Kx(t){setTimeout(function(){throw t})}function Ef(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),rl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);rl(e)}function Or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Oo=Math.random().toString(36).slice(2),_n="__reactFiber$"+Oo,ll="__reactProps$"+Oo,Zn="__reactContainer$"+Oo,Dp="__reactEvents$"+Oo,Hx="__reactListeners$"+Oo,Qx="__reactHandles$"+Oo;function ki(t){var e=t[_n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zn]||n[_n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qv(t);t!==null;){if(n=t[_n])return n;t=Qv(t)}return e}t=n,n=t.parentNode}return null}function Xl(t){return t=t[_n]||t[Zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function $d(t){return t[ll]||null}var Op=[],Us=-1;function ri(t){return{current:t}}function fe(t){0>Us||(t.current=Op[Us],Op[Us]=null,Us--)}function le(t,e){Us++,Op[Us]=t.current,t.current=e}var zr={},pt=ri(zr),Ot=ri(!1),zi=zr;function ao(t,e){var n=t.type.contextTypes;if(!n)return zr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Vt(t){return t=t.childContextTypes,t!=null}function zc(){fe(Ot),fe(pt)}function Yv(t,e,n){if(pt.current!==zr)throw Error(x(168));le(pt,e),le(Ot,n)}function i0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,Dk(t)||"Unknown",i));return Ie({},n,r)}function qc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zr,zi=pt.current,le(pt,t),le(Ot,Ot.current),!0}function Jv(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=i0(t,e,zi),r.__reactInternalMemoizedMergedChildContext=t,fe(Ot),fe(pt),le(pt,t)):fe(Ot),le(Ot,n)}var $n=null,Bd=!1,If=!1;function s0(t){$n===null?$n=[t]:$n.push(t)}function Yx(t){Bd=!0,s0(t)}function ii(){if(!If&&$n!==null){If=!0;var t=0,e=ie;try{var n=$n;for(ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}$n=null,Bd=!1}catch(i){throw $n!==null&&($n=$n.slice(t+1)),xT(vg,ii),i}finally{ie=e,If=!1}}return null}var $s=[],Bs=0,Wc=null,Gc=0,Kt=[],Ht=0,qi=null,jn=1,zn="";function _i(t,e){$s[Bs++]=Gc,$s[Bs++]=Wc,Wc=t,Gc=e}function o0(t,e,n){Kt[Ht++]=jn,Kt[Ht++]=zn,Kt[Ht++]=qi,qi=t;var r=jn;t=zn;var i=32-cn(r)-1;r&=~(1<<i),n+=1;var s=32-cn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jn=1<<32-cn(e)+i|n<<i|r,zn=s+t}else jn=1<<s|n<<i|r,zn=t}function Cg(t){t.return!==null&&(_i(t,1),o0(t,1,0))}function kg(t){for(;t===Wc;)Wc=$s[--Bs],$s[Bs]=null,Gc=$s[--Bs],$s[Bs]=null;for(;t===qi;)qi=Kt[--Ht],Kt[Ht]=null,zn=Kt[--Ht],Kt[Ht]=null,jn=Kt[--Ht],Kt[Ht]=null}var Bt=null,Ut=null,me=!1,un=null;function a0(t,e){var n=Yt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,Ut=Or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,Ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qi!==null?{id:jn,overflow:zn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Yt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,Ut=null,!0):!1;default:return!1}}function Vp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lp(t){if(me){var e=Ut;if(e){var n=e;if(!Xv(t,e)){if(Vp(t))throw Error(x(418));e=Or(n.nextSibling);var r=Bt;e&&Xv(t,e)?a0(r,n):(t.flags=t.flags&-4097|2,me=!1,Bt=t)}}else{if(Vp(t))throw Error(x(418));t.flags=t.flags&-4097|2,me=!1,Bt=t}}}function Zv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function zu(t){if(t!==Bt)return!1;if(!me)return Zv(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Np(t.type,t.memoizedProps)),e&&(e=Ut)){if(Vp(t))throw l0(),Error(x(418));for(;e;)a0(t,e),e=Or(e.nextSibling)}if(Zv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ut=Or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ut=null}}else Ut=Bt?Or(t.stateNode.nextSibling):null;return!0}function l0(){for(var t=Ut;t;)t=Or(t.nextSibling)}function lo(){Ut=Bt=null,me=!1}function xg(t){un===null?un=[t]:un.push(t)}var Jx=or.ReactCurrentBatchConfig;function an(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Kc=ri(null),Hc=null,js=null,Ng=null;function bg(){Ng=js=Hc=null}function Dg(t){var e=Kc.current;fe(Kc),t._currentValue=e}function Mp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Js(t,e){Hc=t,Ng=js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xt=!0),t.firstContext=null)}function tn(t){var e=t._currentValue;if(Ng!==t)if(t={context:t,memoizedValue:e,next:null},js===null){if(Hc===null)throw Error(x(308));js=t,Hc.dependencies={lanes:0,firstContext:t}}else js=js.next=t;return e}var xi=null;function Og(t){xi===null?xi=[t]:xi.push(t)}function u0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Og(e)):(n.next=i.next,i.next=n),e.interleaved=n,er(t,r)}function er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wr=!1;function Vg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function c0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Kn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,er(t,n)}return i=r.interleaved,i===null?(e.next=e,Og(r)):(e.next=i.next,i.next=e),r.interleaved=e,er(t,n)}function hc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wg(t,n)}}function ew(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qc(t,e,n,r){var i=t.updateQueue;wr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(h=e,m=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(m,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,h=typeof y=="function"?y.call(m,d,h):y,h==null)break e;d=Ie({},d,h);break e;case 2:wr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Gi|=o,t.lanes=o,t.memoizedState=d}}function tw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var d0=new uT.Component().refs;function Fp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jd={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),i=Mr(t),s=Kn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Vr(t,s,i),e!==null&&(dn(e,t,i,r),hc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),i=Mr(t),s=Kn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vr(t,s,i),e!==null&&(dn(e,t,i,r),hc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=Mr(t),i=Kn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Vr(t,i,r),e!==null&&(dn(e,t,r,n),hc(e,t,r))}};function nw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!sl(n,r)||!sl(i,s):!0}function h0(t,e,n){var r=!1,i=zr,s=e.contextType;return typeof s=="object"&&s!==null?s=tn(s):(i=Vt(e)?zi:pt.current,r=e.contextTypes,s=(r=r!=null)?ao(t,i):zr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function rw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&jd.enqueueReplaceState(e,e.state,null)}function Up(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=d0,Vg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=tn(s):(s=Vt(e)?zi:pt.current,i.context=ao(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Fp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&jd.enqueueReplaceState(i,i.state,null),Qc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function sa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===d0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function qu(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function iw(t){var e=t._init;return e(t._payload)}function f0(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Fr(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,I){return f===null||f.tag!==6?(f=kf(g,p.mode,I),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,I){var P=g.type;return P===Os?c(p,f,g.props.children,I,g.key):f!==null&&(f.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===vr&&iw(P)===f.type)?(I=i(f,g.props),I.ref=sa(p,f,g),I.return=p,I):(I=_c(g.type,g.key,g.props,null,p.mode,I),I.ref=sa(p,f,g),I.return=p,I)}function u(p,f,g,I){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=xf(g,p.mode,I),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,I,P){return f===null||f.tag!==7?(f=Fi(g,p.mode,I,P),f.return=p,f):(f=i(f,g),f.return=p,f)}function d(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=kf(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Du:return g=_c(f.type,f.key,f.props,null,p.mode,g),g.ref=sa(p,null,f),g.return=p,g;case Ds:return f=xf(f,p.mode,g),f.return=p,f;case vr:var I=f._init;return d(p,I(f._payload),g)}if(wa(f)||ea(f))return f=Fi(f,p.mode,g,null),f.return=p,f;qu(p,f)}return null}function h(p,f,g,I){var P=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:a(p,f,""+g,I);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Du:return g.key===P?l(p,f,g,I):null;case Ds:return g.key===P?u(p,f,g,I):null;case vr:return P=g._init,h(p,f,P(g._payload),I)}if(wa(g)||ea(g))return P!==null?null:c(p,f,g,I,null);qu(p,g)}return null}function m(p,f,g,I,P){if(typeof I=="string"&&I!==""||typeof I=="number")return p=p.get(g)||null,a(f,p,""+I,P);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Du:return p=p.get(I.key===null?g:I.key)||null,l(f,p,I,P);case Ds:return p=p.get(I.key===null?g:I.key)||null,u(f,p,I,P);case vr:var k=I._init;return m(p,f,g,k(I._payload),P)}if(wa(I)||ea(I))return p=p.get(g)||null,c(f,p,I,P,null);qu(f,I)}return null}function y(p,f,g,I){for(var P=null,k=null,b=f,U=f=0,ae=null;b!==null&&U<g.length;U++){b.index>U?(ae=b,b=null):ae=b.sibling;var K=h(p,b,g[U],I);if(K===null){b===null&&(b=ae);break}t&&b&&K.alternate===null&&e(p,b),f=s(K,f,U),k===null?P=K:k.sibling=K,k=K,b=ae}if(U===g.length)return n(p,b),me&&_i(p,U),P;if(b===null){for(;U<g.length;U++)b=d(p,g[U],I),b!==null&&(f=s(b,f,U),k===null?P=b:k.sibling=b,k=b);return me&&_i(p,U),P}for(b=r(p,b);U<g.length;U++)ae=m(b,p,U,g[U],I),ae!==null&&(t&&ae.alternate!==null&&b.delete(ae.key===null?U:ae.key),f=s(ae,f,U),k===null?P=ae:k.sibling=ae,k=ae);return t&&b.forEach(function(sn){return e(p,sn)}),me&&_i(p,U),P}function _(p,f,g,I){var P=ea(g);if(typeof P!="function")throw Error(x(150));if(g=P.call(g),g==null)throw Error(x(151));for(var k=P=null,b=f,U=f=0,ae=null,K=g.next();b!==null&&!K.done;U++,K=g.next()){b.index>U?(ae=b,b=null):ae=b.sibling;var sn=h(p,b,K.value,I);if(sn===null){b===null&&(b=ae);break}t&&b&&sn.alternate===null&&e(p,b),f=s(sn,f,U),k===null?P=sn:k.sibling=sn,k=sn,b=ae}if(K.done)return n(p,b),me&&_i(p,U),P;if(b===null){for(;!K.done;U++,K=g.next())K=d(p,K.value,I),K!==null&&(f=s(K,f,U),k===null?P=K:k.sibling=K,k=K);return me&&_i(p,U),P}for(b=r(p,b);!K.done;U++,K=g.next())K=m(b,p,U,K.value,I),K!==null&&(t&&K.alternate!==null&&b.delete(K.key===null?U:K.key),f=s(K,f,U),k===null?P=K:k.sibling=K,k=K);return t&&b.forEach(function(Xo){return e(p,Xo)}),me&&_i(p,U),P}function v(p,f,g,I){if(typeof g=="object"&&g!==null&&g.type===Os&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Du:e:{for(var P=g.key,k=f;k!==null;){if(k.key===P){if(P=g.type,P===Os){if(k.tag===7){n(p,k.sibling),f=i(k,g.props.children),f.return=p,p=f;break e}}else if(k.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===vr&&iw(P)===k.type){n(p,k.sibling),f=i(k,g.props),f.ref=sa(p,k,g),f.return=p,p=f;break e}n(p,k);break}else e(p,k);k=k.sibling}g.type===Os?(f=Fi(g.props.children,p.mode,I,g.key),f.return=p,p=f):(I=_c(g.type,g.key,g.props,null,p.mode,I),I.ref=sa(p,f,g),I.return=p,p=I)}return o(p);case Ds:e:{for(k=g.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=xf(g,p.mode,I),f.return=p,p=f}return o(p);case vr:return k=g._init,v(p,f,k(g._payload),I)}if(wa(g))return y(p,f,g,I);if(ea(g))return _(p,f,g,I);qu(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=kf(g,p.mode,I),f.return=p,p=f),o(p)):n(p,f)}return v}var uo=f0(!0),p0=f0(!1),Zl={},Nn=ri(Zl),ul=ri(Zl),cl=ri(Zl);function Ni(t){if(t===Zl)throw Error(x(174));return t}function Lg(t,e){switch(le(cl,e),le(ul,t),le(Nn,Zl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yp(e,t)}fe(Nn),le(Nn,e)}function co(){fe(Nn),fe(ul),fe(cl)}function m0(t){Ni(cl.current);var e=Ni(Nn.current),n=yp(e,t.type);e!==n&&(le(ul,t),le(Nn,n))}function Mg(t){ul.current===t&&(fe(Nn),fe(ul))}var ve=ri(0);function Yc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tf=[];function Fg(){for(var t=0;t<Tf.length;t++)Tf[t]._workInProgressVersionPrimary=null;Tf.length=0}var fc=or.ReactCurrentDispatcher,Sf=or.ReactCurrentBatchConfig,Wi=0,we=null,$e=null,We=null,Jc=!1,Fa=!1,dl=0,Xx=0;function lt(){throw Error(x(321))}function Ug(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hn(t[n],e[n]))return!1;return!0}function $g(t,e,n,r,i,s){if(Wi=s,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fc.current=t===null||t.memoizedState===null?nN:rN,t=n(r,i),Fa){s=0;do{if(Fa=!1,dl=0,25<=s)throw Error(x(301));s+=1,We=$e=null,e.updateQueue=null,fc.current=iN,t=n(r,i)}while(Fa)}if(fc.current=Xc,e=$e!==null&&$e.next!==null,Wi=0,We=$e=we=null,Jc=!1,e)throw Error(x(300));return t}function Bg(){var t=dl!==0;return dl=0,t}function yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?we.memoizedState=We=t:We=We.next=t,We}function nn(){if($e===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var e=We===null?we.memoizedState:We.next;if(e!==null)We=e,$e=t;else{if(t===null)throw Error(x(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},We===null?we.memoizedState=We=t:We=We.next=t}return We}function hl(t,e){return typeof e=="function"?e(t):e}function Af(t){var e=nn(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=$e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Wi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,we.lanes|=c,Gi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,hn(r,e.memoizedState)||(xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,we.lanes|=s,Gi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Rf(t){var e=nn(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);hn(s,e.memoizedState)||(xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function g0(){}function y0(t,e){var n=we,r=nn(),i=e(),s=!hn(r.memoizedState,i);if(s&&(r.memoizedState=i,xt=!0),r=r.queue,jg(w0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,fl(9,v0.bind(null,n,r,i,e),void 0,null),Ke===null)throw Error(x(349));Wi&30||_0(n,e,i)}return i}function _0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function v0(t,e,n,r){e.value=n,e.getSnapshot=r,E0(e)&&I0(t)}function w0(t,e,n){return n(function(){E0(e)&&I0(t)})}function E0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hn(t,n)}catch{return!0}}function I0(t){var e=er(t,1);e!==null&&dn(e,t,1,-1)}function sw(t){var e=yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hl,lastRenderedState:t},e.queue=t,t=t.dispatch=tN.bind(null,we,t),[e.memoizedState,t]}function fl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function T0(){return nn().memoizedState}function pc(t,e,n,r){var i=yn();we.flags|=t,i.memoizedState=fl(1|e,n,void 0,r===void 0?null:r)}function zd(t,e,n,r){var i=nn();r=r===void 0?null:r;var s=void 0;if($e!==null){var o=$e.memoizedState;if(s=o.destroy,r!==null&&Ug(r,o.deps)){i.memoizedState=fl(e,n,s,r);return}}we.flags|=t,i.memoizedState=fl(1|e,n,s,r)}function ow(t,e){return pc(8390656,8,t,e)}function jg(t,e){return zd(2048,8,t,e)}function S0(t,e){return zd(4,2,t,e)}function A0(t,e){return zd(4,4,t,e)}function R0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function P0(t,e,n){return n=n!=null?n.concat([t]):null,zd(4,4,R0.bind(null,e,t),n)}function zg(){}function C0(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ug(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function k0(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ug(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function x0(t,e,n){return Wi&21?(hn(n,e)||(n=DT(),we.lanes|=n,Gi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xt=!0),t.memoizedState=n)}function Zx(t,e){var n=ie;ie=n!==0&&4>n?n:4,t(!0);var r=Sf.transition;Sf.transition={};try{t(!1),e()}finally{ie=n,Sf.transition=r}}function N0(){return nn().memoizedState}function eN(t,e,n){var r=Mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},b0(t))D0(e,n);else if(n=u0(t,e,n,r),n!==null){var i=wt();dn(n,t,r,i),O0(n,e,r)}}function tN(t,e,n){var r=Mr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(b0(t))D0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,hn(a,o)){var l=e.interleaved;l===null?(i.next=i,Og(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=u0(t,e,i,r),n!==null&&(i=wt(),dn(n,t,r,i),O0(n,e,r))}}function b0(t){var e=t.alternate;return t===we||e!==null&&e===we}function D0(t,e){Fa=Jc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function O0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wg(t,n)}}var Xc={readContext:tn,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},nN={readContext:tn,useCallback:function(t,e){return yn().memoizedState=[t,e===void 0?null:e],t},useContext:tn,useEffect:ow,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pc(4194308,4,R0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pc(4194308,4,t,e)},useInsertionEffect:function(t,e){return pc(4,2,t,e)},useMemo:function(t,e){var n=yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=yn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=eN.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=yn();return t={current:t},e.memoizedState=t},useState:sw,useDebugValue:zg,useDeferredValue:function(t){return yn().memoizedState=t},useTransition:function(){var t=sw(!1),e=t[0];return t=Zx.bind(null,t[1]),yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,i=yn();if(me){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),Ke===null)throw Error(x(349));Wi&30||_0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ow(w0.bind(null,r,s,t),[t]),r.flags|=2048,fl(9,v0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=yn(),e=Ke.identifierPrefix;if(me){var n=zn,r=jn;n=(r&~(1<<32-cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=dl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Xx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rN={readContext:tn,useCallback:C0,useContext:tn,useEffect:jg,useImperativeHandle:P0,useInsertionEffect:S0,useLayoutEffect:A0,useMemo:k0,useReducer:Af,useRef:T0,useState:function(){return Af(hl)},useDebugValue:zg,useDeferredValue:function(t){var e=nn();return x0(e,$e.memoizedState,t)},useTransition:function(){var t=Af(hl)[0],e=nn().memoizedState;return[t,e]},useMutableSource:g0,useSyncExternalStore:y0,useId:N0,unstable_isNewReconciler:!1},iN={readContext:tn,useCallback:C0,useContext:tn,useEffect:jg,useImperativeHandle:P0,useInsertionEffect:S0,useLayoutEffect:A0,useMemo:k0,useReducer:Rf,useRef:T0,useState:function(){return Rf(hl)},useDebugValue:zg,useDeferredValue:function(t){var e=nn();return $e===null?e.memoizedState=t:x0(e,$e.memoizedState,t)},useTransition:function(){var t=Rf(hl)[0],e=nn().memoizedState;return[t,e]},useMutableSource:g0,useSyncExternalStore:y0,useId:N0,unstable_isNewReconciler:!1};function ho(t,e){try{var n="",r=e;do n+=bk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Pf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $p(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sN=typeof WeakMap=="function"?WeakMap:Map;function V0(t,e,n){n=Kn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ed||(ed=!0,Yp=r),$p(t,e)},n}function L0(t,e,n){n=Kn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){$p(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$p(t,e),typeof r!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function aw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new sN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=vN.bind(null,t,e,n),e.then(t,t))}function lw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function uw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Kn(-1,1),e.tag=2,Vr(n,e,1))),n.lanes|=1),t)}var oN=or.ReactCurrentOwner,xt=!1;function gt(t,e,n,r){e.child=t===null?p0(e,null,n,r):uo(e,t.child,n,r)}function cw(t,e,n,r,i){n=n.render;var s=e.ref;return Js(e,i),r=$g(t,e,n,r,s,i),n=Bg(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(me&&n&&Cg(e),e.flags|=1,gt(t,e,r,i),e.child)}function dw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Jg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,M0(t,e,s,r,i)):(t=_c(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:sl,n(o,r)&&t.ref===e.ref)return tr(t,e,i)}return e.flags|=1,t=Fr(s,r),t.ref=e.ref,t.return=e,e.child=t}function M0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(sl(s,r)&&t.ref===e.ref)if(xt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(xt=!0);else return e.lanes=t.lanes,tr(t,e,i)}return Bp(t,e,n,r,i)}function F0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(qs,Mt),Mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,le(qs,Mt),Mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,le(qs,Mt),Mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,le(qs,Mt),Mt|=r;return gt(t,e,i,n),e.child}function U0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bp(t,e,n,r,i){var s=Vt(n)?zi:pt.current;return s=ao(e,s),Js(e,i),n=$g(t,e,n,r,s,i),r=Bg(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(me&&r&&Cg(e),e.flags|=1,gt(t,e,n,i),e.child)}function hw(t,e,n,r,i){if(Vt(n)){var s=!0;qc(e)}else s=!1;if(Js(e,i),e.stateNode===null)mc(t,e),h0(e,n,r),Up(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=tn(u):(u=Vt(n)?zi:pt.current,u=ao(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&rw(e,o,r,u),wr=!1;var h=e.memoizedState;o.state=h,Qc(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Ot.current||wr?(typeof c=="function"&&(Fp(e,n,c,r),l=e.memoizedState),(a=wr||nw(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,c0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:an(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=tn(l):(l=Vt(n)?zi:pt.current,l=ao(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&rw(e,o,r,l),wr=!1,h=e.memoizedState,o.state=h,Qc(e,r,o,i);var y=e.memoizedState;a!==d||h!==y||Ot.current||wr?(typeof m=="function"&&(Fp(e,n,m,r),y=e.memoizedState),(u=wr||nw(e,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return jp(t,e,n,r,s,i)}function jp(t,e,n,r,i,s){U0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Jv(e,n,!1),tr(t,e,s);r=e.stateNode,oN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=uo(e,t.child,null,s),e.child=uo(e,null,a,s)):gt(t,e,a,s),e.memoizedState=r.state,i&&Jv(e,n,!0),e.child}function $0(t){var e=t.stateNode;e.pendingContext?Yv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yv(t,e.context,!1),Lg(t,e.containerInfo)}function fw(t,e,n,r,i){return lo(),xg(i),e.flags|=256,gt(t,e,n,r),e.child}var zp={dehydrated:null,treeContext:null,retryLane:0};function qp(t){return{baseLanes:t,cachePool:null,transitions:null}}function B0(t,e,n){var r=e.pendingProps,i=ve.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),le(ve,i&1),t===null)return Lp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gd(o,r,0,null),t=Fi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qp(n),e.memoizedState=zp,t):qg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return aN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Fr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Fr(a,s):(s=Fi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?qp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=zp,r}return s=t.child,t=s.sibling,r=Fr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function qg(t,e){return e=Gd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wu(t,e,n,r){return r!==null&&xg(r),uo(e,t.child,null,n),t=qg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function aN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Pf(Error(x(422))),Wu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Gd({mode:"visible",children:r.children},i,0,null),s=Fi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&uo(e,t.child,null,o),e.child.memoizedState=qp(o),e.memoizedState=zp,s);if(!(e.mode&1))return Wu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=Pf(s,r,void 0),Wu(t,e,o,r)}if(a=(o&t.childLanes)!==0,xt||a){if(r=Ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,er(t,i),dn(r,t,i,-1))}return Yg(),r=Pf(Error(x(421))),Wu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=wN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ut=Or(i.nextSibling),Bt=e,me=!0,un=null,t!==null&&(Kt[Ht++]=jn,Kt[Ht++]=zn,Kt[Ht++]=qi,jn=t.id,zn=t.overflow,qi=e),e=qg(e,r.children),e.flags|=4096,e)}function pw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Mp(t.return,e,n)}function Cf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function j0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(gt(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pw(t,n,e);else if(t.tag===19)pw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(le(ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Yc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Cf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Yc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Cf(e,!0,n,null,s);break;case"together":Cf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function mc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=Fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lN(t,e,n){switch(e.tag){case 3:$0(e),lo();break;case 5:m0(e);break;case 1:Vt(e.type)&&qc(e);break;case 4:Lg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;le(Kc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(le(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?B0(t,e,n):(le(ve,ve.current&1),t=tr(t,e,n),t!==null?t.sibling:null);le(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return j0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,F0(t,e,n)}return tr(t,e,n)}var z0,Wp,q0,W0;z0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wp=function(){};q0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ni(Nn.current);var s=null;switch(n){case"input":i=fp(t,i),r=fp(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=gp(t,i),r=gp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=jc)}_p(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ce("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};W0=function(t,e,n,r){n!==r&&(e.flags|=4)};function oa(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function uN(t,e,n){var r=e.pendingProps;switch(kg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(e),null;case 1:return Vt(e.type)&&zc(),ut(e),null;case 3:return r=e.stateNode,co(),fe(Ot),fe(pt),Fg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(zu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,un!==null&&(Zp(un),un=null))),Wp(t,e),ut(e),null;case 5:Mg(e);var i=Ni(cl.current);if(n=e.type,t!==null&&e.stateNode!=null)q0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return ut(e),null}if(t=Ni(Nn.current),zu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_n]=e,r[ll]=s,t=(e.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<Ia.length;i++)ce(Ia[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":Tv(r,s),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ce("invalid",r);break;case"textarea":Av(r,s),ce("invalid",r)}_p(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ju(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ju(r.textContent,a,t),i=["children",""+a]):Xa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":Ou(r),Sv(r,s,!0);break;case"textarea":Ou(r),Rv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=jc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_T(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_n]=e,t[ll]=r,z0(t,e,!1,!1),e.stateNode=t;e:{switch(o=vp(n,r),n){case"dialog":ce("cancel",t),ce("close",t),i=r;break;case"iframe":case"object":case"embed":ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ia.length;i++)ce(Ia[i],t);i=r;break;case"source":ce("error",t),i=r;break;case"img":case"image":case"link":ce("error",t),ce("load",t),i=r;break;case"details":ce("toggle",t),i=r;break;case"input":Tv(t,r),i=fp(t,r),ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),ce("invalid",t);break;case"textarea":Av(t,r),i=gp(t,r),ce("invalid",t);break;default:i=r}_p(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ET(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Za(t,l):typeof l=="number"&&Za(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ce("scroll",t):l!=null&&pg(t,s,l,o))}switch(n){case"input":Ou(t),Sv(t,r,!1);break;case"textarea":Ou(t),Rv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+jr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ks(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ks(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=jc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ut(e),null;case 6:if(t&&e.stateNode!=null)W0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Ni(cl.current),Ni(Nn.current),zu(e)){if(r=e.stateNode,n=e.memoizedProps,r[_n]=e,(s=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:ju(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ju(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_n]=e,e.stateNode=r}return ut(e),null;case 13:if(fe(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&Ut!==null&&e.mode&1&&!(e.flags&128))l0(),lo(),e.flags|=98560,s=!1;else if(s=zu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[_n]=e}else lo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ut(e),s=!1}else un!==null&&(Zp(un),un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?Be===0&&(Be=3):Yg())),e.updateQueue!==null&&(e.flags|=4),ut(e),null);case 4:return co(),Wp(t,e),t===null&&ol(e.stateNode.containerInfo),ut(e),null;case 10:return Dg(e.type._context),ut(e),null;case 17:return Vt(e.type)&&zc(),ut(e),null;case 19:if(fe(ve),s=e.memoizedState,s===null)return ut(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)oa(s,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yc(t),o!==null){for(e.flags|=128,oa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return le(ve,ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>fo&&(e.flags|=128,r=!0,oa(s,!1),e.lanes=4194304)}else{if(!r)if(t=Yc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return ut(e),null}else 2*Ne()-s.renderingStartTime>fo&&n!==1073741824&&(e.flags|=128,r=!0,oa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=ve.current,le(ve,r?n&1|2:n&1),e):(ut(e),null);case 22:case 23:return Qg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Mt&1073741824&&(ut(e),e.subtreeFlags&6&&(e.flags|=8192)):ut(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function cN(t,e){switch(kg(e),e.tag){case 1:return Vt(e.type)&&zc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return co(),fe(Ot),fe(pt),Fg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Mg(e),null;case 13:if(fe(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));lo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return fe(ve),null;case 4:return co(),null;case 10:return Dg(e.type._context),null;case 22:case 23:return Qg(),null;case 24:return null;default:return null}}var Gu=!1,dt=!1,dN=typeof WeakSet=="function"?WeakSet:Set,M=null;function zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function Gp(t,e,n){try{n()}catch(r){Te(t,e,r)}}var mw=!1;function hN(t,e){if(kp=Uc,t=QT(),Pg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(xp={focusedElem:t,selectionRange:n},Uc=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,v=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:an(e.type,_),v);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(I){Te(e,e.return,I)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return y=mw,mw=!1,y}function Ua(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Gp(e,n,s)}i=i.next}while(i!==r)}}function qd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Kp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function G0(t){var e=t.alternate;e!==null&&(t.alternate=null,G0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_n],delete e[ll],delete e[Dp],delete e[Hx],delete e[Qx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function K0(t){return t.tag===5||t.tag===3||t.tag===4}function gw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||K0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=jc));else if(r!==4&&(t=t.child,t!==null))for(Hp(t,e,n),t=t.sibling;t!==null;)Hp(t,e,n),t=t.sibling}function Qp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Qp(t,e,n),t=t.sibling;t!==null;)Qp(t,e,n),t=t.sibling}var Ze=null,ln=!1;function fr(t,e,n){for(n=n.child;n!==null;)H0(t,e,n),n=n.sibling}function H0(t,e,n){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(Ld,n)}catch{}switch(n.tag){case 5:dt||zs(n,e);case 6:var r=Ze,i=ln;Ze=null,fr(t,e,n),Ze=r,ln=i,Ze!==null&&(ln?(t=Ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(ln?(t=Ze,n=n.stateNode,t.nodeType===8?Ef(t.parentNode,n):t.nodeType===1&&Ef(t,n),rl(t)):Ef(Ze,n.stateNode));break;case 4:r=Ze,i=ln,Ze=n.stateNode.containerInfo,ln=!0,fr(t,e,n),Ze=r,ln=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Gp(n,e,o),i=i.next}while(i!==r)}fr(t,e,n);break;case 1:if(!dt&&(zs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Te(n,e,a)}fr(t,e,n);break;case 21:fr(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,fr(t,e,n),dt=r):fr(t,e,n);break;default:fr(t,e,n)}}function yw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dN),e.forEach(function(r){var i=EN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function on(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ze=a.stateNode,ln=!1;break e;case 3:Ze=a.stateNode.containerInfo,ln=!0;break e;case 4:Ze=a.stateNode.containerInfo,ln=!0;break e}a=a.return}if(Ze===null)throw Error(x(160));H0(s,o,i),Ze=null,ln=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Q0(e,t),e=e.sibling}function Q0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(on(e,t),gn(t),r&4){try{Ua(3,t,t.return),qd(3,t)}catch(_){Te(t,t.return,_)}try{Ua(5,t,t.return)}catch(_){Te(t,t.return,_)}}break;case 1:on(e,t),gn(t),r&512&&n!==null&&zs(n,n.return);break;case 5:if(on(e,t),gn(t),r&512&&n!==null&&zs(n,n.return),t.flags&32){var i=t.stateNode;try{Za(i,"")}catch(_){Te(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&gT(i,s),vp(a,o);var u=vp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?ET(i,d):c==="dangerouslySetInnerHTML"?vT(i,d):c==="children"?Za(i,d):pg(i,c,d,u)}switch(a){case"input":pp(i,s);break;case"textarea":yT(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ks(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ks(i,!!s.multiple,s.defaultValue,!0):Ks(i,!!s.multiple,s.multiple?[]:"",!1))}i[ll]=s}catch(_){Te(t,t.return,_)}}break;case 6:if(on(e,t),gn(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Te(t,t.return,_)}}break;case 3:if(on(e,t),gn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{rl(e.containerInfo)}catch(_){Te(t,t.return,_)}break;case 4:on(e,t),gn(t);break;case 13:on(e,t),gn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Kg=Ne())),r&4&&yw(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(u=dt)||c,on(e,t),dt=u):on(e,t),gn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(M=t,c=t.child;c!==null;){for(d=M=c;M!==null;){switch(h=M,m=h.child,h.tag){case 0:case 11:case 14:case 15:Ua(4,h,h.return);break;case 1:zs(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){Te(r,n,_)}}break;case 5:zs(h,h.return);break;case 22:if(h.memoizedState!==null){vw(d);continue}}m!==null?(m.return=h,M=m):vw(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=wT("display",o))}catch(_){Te(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Te(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:on(e,t),gn(t),r&4&&yw(t);break;case 21:break;default:on(e,t),gn(t)}}function gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(K0(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Za(i,""),r.flags&=-33);var s=gw(t);Qp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=gw(t);Hp(t,a,o);break;default:throw Error(x(161))}}catch(l){Te(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fN(t,e,n){M=t,Y0(t)}function Y0(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Gu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||dt;a=Gu;var u=dt;if(Gu=o,(dt=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?ww(i):l!==null?(l.return=o,M=l):ww(i);for(;s!==null;)M=s,Y0(s),s=s.sibling;M=i,Gu=a,dt=u}_w(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):_w(t)}}function _w(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dt||qd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:an(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&tw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&rl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}dt||e.flags&512&&Kp(e)}catch(h){Te(e,e.return,h)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function vw(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function ww(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qd(4,e)}catch(l){Te(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Te(e,i,l)}}var s=e.return;try{Kp(e)}catch(l){Te(e,s,l)}break;case 5:var o=e.return;try{Kp(e)}catch(l){Te(e,o,l)}}}catch(l){Te(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var pN=Math.ceil,Zc=or.ReactCurrentDispatcher,Wg=or.ReactCurrentOwner,Zt=or.ReactCurrentBatchConfig,te=0,Ke=null,Me=null,rt=0,Mt=0,qs=ri(0),Be=0,pl=null,Gi=0,Wd=0,Gg=0,$a=null,kt=null,Kg=0,fo=1/0,Un=null,ed=!1,Yp=null,Lr=null,Ku=!1,Pr=null,td=0,Ba=0,Jp=null,gc=-1,yc=0;function wt(){return te&6?Ne():gc!==-1?gc:gc=Ne()}function Mr(t){return t.mode&1?te&2&&rt!==0?rt&-rt:Jx.transition!==null?(yc===0&&(yc=DT()),yc):(t=ie,t!==0||(t=window.event,t=t===void 0?16:$T(t.type)),t):1}function dn(t,e,n,r){if(50<Ba)throw Ba=0,Jp=null,Error(x(185));Yl(t,n,r),(!(te&2)||t!==Ke)&&(t===Ke&&(!(te&2)&&(Wd|=n),Be===4&&Tr(t,rt)),Lt(t,r),n===1&&te===0&&!(e.mode&1)&&(fo=Ne()+500,Bd&&ii()))}function Lt(t,e){var n=t.callbackNode;Jk(t,e);var r=Fc(t,t===Ke?rt:0);if(r===0)n!==null&&kv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&kv(n),e===1)t.tag===0?Yx(Ew.bind(null,t)):s0(Ew.bind(null,t)),Gx(function(){!(te&6)&&ii()}),n=null;else{switch(OT(r)){case 1:n=vg;break;case 4:n=NT;break;case 16:n=Mc;break;case 536870912:n=bT;break;default:n=Mc}n=iS(n,J0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function J0(t,e){if(gc=-1,yc=0,te&6)throw Error(x(327));var n=t.callbackNode;if(Xs()&&t.callbackNode!==n)return null;var r=Fc(t,t===Ke?rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nd(t,r);else{e=r;var i=te;te|=2;var s=Z0();(Ke!==t||rt!==e)&&(Un=null,fo=Ne()+500,Mi(t,e));do try{yN();break}catch(a){X0(t,a)}while(!0);bg(),Zc.current=s,te=i,Me!==null?e=0:(Ke=null,rt=0,e=Be)}if(e!==0){if(e===2&&(i=Sp(t),i!==0&&(r=i,e=Xp(t,i))),e===1)throw n=pl,Mi(t,0),Tr(t,r),Lt(t,Ne()),n;if(e===6)Tr(t,r);else{if(i=t.current.alternate,!(r&30)&&!mN(i)&&(e=nd(t,r),e===2&&(s=Sp(t),s!==0&&(r=s,e=Xp(t,s))),e===1))throw n=pl,Mi(t,0),Tr(t,r),Lt(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:vi(t,kt,Un);break;case 3:if(Tr(t,r),(r&130023424)===r&&(e=Kg+500-Ne(),10<e)){if(Fc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=bp(vi.bind(null,t,kt,Un),e);break}vi(t,kt,Un);break;case 4:if(Tr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-cn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pN(r/1960))-r,10<r){t.timeoutHandle=bp(vi.bind(null,t,kt,Un),r);break}vi(t,kt,Un);break;case 5:vi(t,kt,Un);break;default:throw Error(x(329))}}}return Lt(t,Ne()),t.callbackNode===n?J0.bind(null,t):null}function Xp(t,e){var n=$a;return t.current.memoizedState.isDehydrated&&(Mi(t,e).flags|=256),t=nd(t,e),t!==2&&(e=kt,kt=n,e!==null&&Zp(e)),t}function Zp(t){kt===null?kt=t:kt.push.apply(kt,t)}function mN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!hn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Tr(t,e){for(e&=~Gg,e&=~Wd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-cn(e),r=1<<n;t[n]=-1,e&=~r}}function Ew(t){if(te&6)throw Error(x(327));Xs();var e=Fc(t,0);if(!(e&1))return Lt(t,Ne()),null;var n=nd(t,e);if(t.tag!==0&&n===2){var r=Sp(t);r!==0&&(e=r,n=Xp(t,r))}if(n===1)throw n=pl,Mi(t,0),Tr(t,e),Lt(t,Ne()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vi(t,kt,Un),Lt(t,Ne()),null}function Hg(t,e){var n=te;te|=1;try{return t(e)}finally{te=n,te===0&&(fo=Ne()+500,Bd&&ii())}}function Ki(t){Pr!==null&&Pr.tag===0&&!(te&6)&&Xs();var e=te;te|=1;var n=Zt.transition,r=ie;try{if(Zt.transition=null,ie=1,t)return t()}finally{ie=r,Zt.transition=n,te=e,!(te&6)&&ii()}}function Qg(){Mt=qs.current,fe(qs)}function Mi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Wx(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(kg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zc();break;case 3:co(),fe(Ot),fe(pt),Fg();break;case 5:Mg(r);break;case 4:co();break;case 13:fe(ve);break;case 19:fe(ve);break;case 10:Dg(r.type._context);break;case 22:case 23:Qg()}n=n.return}if(Ke=t,Me=t=Fr(t.current,null),rt=Mt=e,Be=0,pl=null,Gg=Wd=Gi=0,kt=$a=null,xi!==null){for(e=0;e<xi.length;e++)if(n=xi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xi=null}return t}function X0(t,e){do{var n=Me;try{if(bg(),fc.current=Xc,Jc){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Jc=!1}if(Wi=0,We=$e=we=null,Fa=!1,dl=0,Wg.current=null,n===null||n.return===null){Be=1,pl=e,Me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=lw(o);if(m!==null){m.flags&=-257,uw(m,o,a,s,e),m.mode&1&&aw(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){aw(s,u,e),Yg();break e}l=Error(x(426))}}else if(me&&a.mode&1){var v=lw(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),uw(v,o,a,s,e),xg(ho(l,a));break e}}s=l=ho(l,a),Be!==4&&(Be=2),$a===null?$a=[s]:$a.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=V0(s,l,e);ew(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Lr===null||!Lr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var I=L0(s,a,e);ew(s,I);break e}}s=s.return}while(s!==null)}tS(n)}catch(P){e=P,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function Z0(){var t=Zc.current;return Zc.current=Xc,t===null?Xc:t}function Yg(){(Be===0||Be===3||Be===2)&&(Be=4),Ke===null||!(Gi&268435455)&&!(Wd&268435455)||Tr(Ke,rt)}function nd(t,e){var n=te;te|=2;var r=Z0();(Ke!==t||rt!==e)&&(Un=null,Mi(t,e));do try{gN();break}catch(i){X0(t,i)}while(!0);if(bg(),te=n,Zc.current=r,Me!==null)throw Error(x(261));return Ke=null,rt=0,Be}function gN(){for(;Me!==null;)eS(Me)}function yN(){for(;Me!==null&&!jk();)eS(Me)}function eS(t){var e=rS(t.alternate,t,Mt);t.memoizedProps=t.pendingProps,e===null?tS(t):Me=e,Wg.current=null}function tS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=cN(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,Me=null;return}}else if(n=uN(n,e,Mt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);Be===0&&(Be=5)}function vi(t,e,n){var r=ie,i=Zt.transition;try{Zt.transition=null,ie=1,_N(t,e,n,r)}finally{Zt.transition=i,ie=r}return null}function _N(t,e,n,r){do Xs();while(Pr!==null);if(te&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Xk(t,s),t===Ke&&(Me=Ke=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ku||(Ku=!0,iS(Mc,function(){return Xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Zt.transition,Zt.transition=null;var o=ie;ie=1;var a=te;te|=4,Wg.current=null,hN(t,n),Q0(n,t),Fx(xp),Uc=!!kp,xp=kp=null,t.current=n,fN(n),zk(),te=a,ie=o,Zt.transition=s}else t.current=n;if(Ku&&(Ku=!1,Pr=t,td=i),s=t.pendingLanes,s===0&&(Lr=null),Gk(n.stateNode),Lt(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ed)throw ed=!1,t=Yp,Yp=null,t;return td&1&&t.tag!==0&&Xs(),s=t.pendingLanes,s&1?t===Jp?Ba++:(Ba=0,Jp=t):Ba=0,ii(),null}function Xs(){if(Pr!==null){var t=OT(td),e=Zt.transition,n=ie;try{if(Zt.transition=null,ie=16>t?16:t,Pr===null)var r=!1;else{if(t=Pr,Pr=null,td=0,te&6)throw Error(x(331));var i=te;for(te|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:Ua(8,c,s)}var d=c.child;if(d!==null)d.return=c,M=d;else for(;M!==null;){c=M;var h=c.sibling,m=c.return;if(G0(c),c===u){M=null;break}if(h!==null){h.return=m,M=h;break}M=m}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var v=_.sibling;_.sibling=null,_=v}while(_!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ua(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,M=p;break e}M=s.return}}var f=t.current;for(M=f;M!==null;){o=M;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,M=g;else e:for(o=f;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qd(9,a)}}catch(P){Te(a,a.return,P)}if(a===o){M=null;break e}var I=a.sibling;if(I!==null){I.return=a.return,M=I;break e}M=a.return}}if(te=i,ii(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(Ld,t)}catch{}r=!0}return r}finally{ie=n,Zt.transition=e}}return!1}function Iw(t,e,n){e=ho(n,e),e=V0(t,e,1),t=Vr(t,e,1),e=wt(),t!==null&&(Yl(t,1,e),Lt(t,e))}function Te(t,e,n){if(t.tag===3)Iw(t,t,n);else for(;e!==null;){if(e.tag===3){Iw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lr===null||!Lr.has(r))){t=ho(n,t),t=L0(e,t,1),e=Vr(e,t,1),t=wt(),e!==null&&(Yl(e,1,t),Lt(e,t));break}}e=e.return}}function vN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,Ke===t&&(rt&n)===n&&(Be===4||Be===3&&(rt&130023424)===rt&&500>Ne()-Kg?Mi(t,0):Gg|=n),Lt(t,e)}function nS(t,e){e===0&&(t.mode&1?(e=Mu,Mu<<=1,!(Mu&130023424)&&(Mu=4194304)):e=1);var n=wt();t=er(t,e),t!==null&&(Yl(t,e,n),Lt(t,n))}function wN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),nS(t,n)}function EN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),nS(t,n)}var rS;rS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ot.current)xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xt=!1,lN(t,e,n);xt=!!(t.flags&131072)}else xt=!1,me&&e.flags&1048576&&o0(e,Gc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;mc(t,e),t=e.pendingProps;var i=ao(e,pt.current);Js(e,n),i=$g(null,e,r,t,i,n);var s=Bg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vt(r)?(s=!0,qc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vg(e),i.updater=jd,e.stateNode=i,i._reactInternals=e,Up(e,r,t,n),e=jp(null,e,r,!0,s,n)):(e.tag=0,me&&s&&Cg(e),gt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(mc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=TN(r),t=an(r,t),i){case 0:e=Bp(null,e,r,t,n);break e;case 1:e=hw(null,e,r,t,n);break e;case 11:e=cw(null,e,r,t,n);break e;case 14:e=dw(null,e,r,an(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),Bp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),hw(t,e,r,i,n);case 3:e:{if($0(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,c0(t,e),Qc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ho(Error(x(423)),e),e=fw(t,e,r,n,i);break e}else if(r!==i){i=ho(Error(x(424)),e),e=fw(t,e,r,n,i);break e}else for(Ut=Or(e.stateNode.containerInfo.firstChild),Bt=e,me=!0,un=null,n=p0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(lo(),r===i){e=tr(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return m0(e),t===null&&Lp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Np(r,i)?o=null:s!==null&&Np(r,s)&&(e.flags|=32),U0(t,e),gt(t,e,o,n),e.child;case 6:return t===null&&Lp(e),null;case 13:return B0(t,e,n);case 4:return Lg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=uo(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),cw(t,e,r,i,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,le(Kc,r._currentValue),r._currentValue=o,s!==null)if(hn(s.value,o)){if(s.children===i.children&&!Ot.current){e=tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Kn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Mp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Mp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Js(e,n),i=tn(i),r=r(i),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,i=an(r,e.pendingProps),i=an(r.type,i),dw(t,e,r,i,n);case 15:return M0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),mc(t,e),e.tag=1,Vt(r)?(t=!0,qc(e)):t=!1,Js(e,n),h0(e,r,i),Up(e,r,i,n),jp(null,e,r,!0,t,n);case 19:return j0(t,e,n);case 22:return F0(t,e,n)}throw Error(x(156,e.tag))};function iS(t,e){return xT(t,e)}function IN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(t,e,n,r){return new IN(t,e,n,r)}function Jg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TN(t){if(typeof t=="function")return Jg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gg)return 11;if(t===yg)return 14}return 2}function Fr(t,e){var n=t.alternate;return n===null?(n=Yt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _c(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Jg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Os:return Fi(n.children,i,s,e);case mg:o=8,i|=8;break;case up:return t=Yt(12,n,e,i|2),t.elementType=up,t.lanes=s,t;case cp:return t=Yt(13,n,e,i),t.elementType=cp,t.lanes=s,t;case dp:return t=Yt(19,n,e,i),t.elementType=dp,t.lanes=s,t;case fT:return Gd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dT:o=10;break e;case hT:o=9;break e;case gg:o=11;break e;case yg:o=14;break e;case vr:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=Yt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Fi(t,e,n,r){return t=Yt(7,t,r,e),t.lanes=n,t}function Gd(t,e,n,r){return t=Yt(22,t,r,e),t.elementType=fT,t.lanes=n,t.stateNode={isHidden:!1},t}function kf(t,e,n){return t=Yt(6,t,null,e),t.lanes=n,t}function xf(t,e,n){return e=Yt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function SN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cf(0),this.expirationTimes=cf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xg(t,e,n,r,i,s,o,a,l){return t=new SN(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Yt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vg(s),t}function AN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ds,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function sS(t){if(!t)return zr;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Vt(n))return i0(t,n,e)}return e}function oS(t,e,n,r,i,s,o,a,l){return t=Xg(n,r,!0,t,i,s,o,a,l),t.context=sS(null),n=t.current,r=wt(),i=Mr(n),s=Kn(r,i),s.callback=e??null,Vr(n,s,i),t.current.lanes=i,Yl(t,i,r),Lt(t,r),t}function Kd(t,e,n,r){var i=e.current,s=wt(),o=Mr(i);return n=sS(n),e.context===null?e.context=n:e.pendingContext=n,e=Kn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Vr(i,e,o),t!==null&&(dn(t,i,o,s),hc(t,i,o)),o}function rd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zg(t,e){Tw(t,e),(t=t.alternate)&&Tw(t,e)}function RN(){return null}var aS=typeof reportError=="function"?reportError:function(t){console.error(t)};function ey(t){this._internalRoot=t}Hd.prototype.render=ey.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));Kd(t,e,null,null)};Hd.prototype.unmount=ey.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ki(function(){Kd(null,t,null,null)}),e[Zn]=null}};function Hd(t){this._internalRoot=t}Hd.prototype.unstable_scheduleHydration=function(t){if(t){var e=MT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ir.length&&e!==0&&e<Ir[n].priority;n++);Ir.splice(n,0,t),n===0&&UT(t)}};function ty(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sw(){}function PN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=rd(o);s.call(u)}}var o=oS(e,r,t,0,null,!1,!1,"",Sw);return t._reactRootContainer=o,t[Zn]=o.current,ol(t.nodeType===8?t.parentNode:t),Ki(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=rd(l);a.call(u)}}var l=Xg(t,0,!1,null,null,!1,!1,"",Sw);return t._reactRootContainer=l,t[Zn]=l.current,ol(t.nodeType===8?t.parentNode:t),Ki(function(){Kd(e,l,n,r)}),l}function Yd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=rd(o);a.call(l)}}Kd(e,o,t,i)}else o=PN(n,e,t,i,r);return rd(o)}VT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ea(e.pendingLanes);n!==0&&(wg(e,n|1),Lt(e,Ne()),!(te&6)&&(fo=Ne()+500,ii()))}break;case 13:Ki(function(){var r=er(t,1);if(r!==null){var i=wt();dn(r,t,1,i)}}),Zg(t,1)}};Eg=function(t){if(t.tag===13){var e=er(t,134217728);if(e!==null){var n=wt();dn(e,t,134217728,n)}Zg(t,134217728)}};LT=function(t){if(t.tag===13){var e=Mr(t),n=er(t,e);if(n!==null){var r=wt();dn(n,t,e,r)}Zg(t,e)}};MT=function(){return ie};FT=function(t,e){var n=ie;try{return ie=t,e()}finally{ie=n}};Ep=function(t,e,n){switch(e){case"input":if(pp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=$d(r);if(!i)throw Error(x(90));mT(r),pp(r,i)}}}break;case"textarea":yT(t,n);break;case"select":e=n.value,e!=null&&Ks(t,!!n.multiple,e,!1)}};ST=Hg;AT=Ki;var CN={usingClientEntryPoint:!1,Events:[Xl,Fs,$d,IT,TT,Hg]},aa={findFiberByHostInstance:ki,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},kN={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=CT(t),t===null?null:t.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||RN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hu.isDisabled&&Hu.supportsFiber)try{Ld=Hu.inject(kN),xn=Hu}catch{}}Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CN;Wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ty(e))throw Error(x(200));return AN(t,e,null,n)};Wt.createRoot=function(t,e){if(!ty(t))throw Error(x(299));var n=!1,r="",i=aS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Xg(t,1,!1,null,null,n,!1,r,i),t[Zn]=e.current,ol(t.nodeType===8?t.parentNode:t),new ey(e)};Wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=CT(e),t=t===null?null:t.stateNode,t};Wt.flushSync=function(t){return Ki(t)};Wt.hydrate=function(t,e,n){if(!Qd(e))throw Error(x(200));return Yd(null,t,e,!0,n)};Wt.hydrateRoot=function(t,e,n){if(!ty(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=aS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=oS(e,null,t,1,n??null,i,!1,s,o),t[Zn]=e.current,ol(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Hd(e)};Wt.render=function(t,e,n){if(!Qd(e))throw Error(x(200));return Yd(null,t,e,!1,n)};Wt.unmountComponentAtNode=function(t){if(!Qd(t))throw Error(x(40));return t._reactRootContainer?(Ki(function(){Yd(null,null,t,!1,function(){t._reactRootContainer=null,t[Zn]=null})}),!0):!1};Wt.unstable_batchedUpdates=Hg;Wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Qd(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return Yd(t,e,n,!1,r)};Wt.version="18.2.0-next-9e3b772b8-20220608";function lS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lS)}catch(t){console.error(t)}}lS(),oT.exports=Wt;var uS=oT.exports;const Ta=Od(uS);var Aw=uS;ap.createRoot=Aw.createRoot,ap.hydrateRoot=Aw.hydrateRoot;/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ml(){return ml=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ml.apply(this,arguments)}var Cr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Cr||(Cr={}));const Rw="popstate";function xN(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return em("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:id(i)}return bN(e,n,null,t)}function Fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ny(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function NN(){return Math.random().toString(36).substr(2,8)}function Pw(t,e){return{usr:t.state,key:t.key,idx:e}}function em(t,e,n,r){return n===void 0&&(n=null),ml({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Vo(e):e,{state:n,key:e&&e.key||r||NN()})}function id(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Vo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function bN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Cr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ml({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Cr.Pop;let v=c(),p=v==null?null:v-u;u=v,l&&l({action:a,location:_.location,delta:p})}function h(v,p){a=Cr.Push;let f=em(_.location,v,p);n&&n(f,v),u=c()+1;let g=Pw(f,u),I=_.createHref(f);try{o.pushState(g,"",I)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(I)}s&&l&&l({action:a,location:_.location,delta:1})}function m(v,p){a=Cr.Replace;let f=em(_.location,v,p);n&&n(f,v),u=c();let g=Pw(f,u),I=_.createHref(f);o.replaceState(g,"",I),s&&l&&l({action:a,location:_.location,delta:0})}function y(v){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof v=="string"?v:id(v);return Fe(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let _={get action(){return a},get location(){return t(i,o)},listen(v){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Rw,d),l=v,()=>{i.removeEventListener(Rw,d),l=null}},createHref(v){return e(i,v)},createURL:y,encodeLocation(v){let p=y(v);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:m,go(v){return o.go(v)}};return _}var Cw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Cw||(Cw={}));function DN(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Vo(e):e,i=ry(r.pathname||"/",n);if(i==null)return null;let s=cS(t);ON(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=zN(s[a],GN(i));return o}function cS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Fe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ur([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),cS(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:BN(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of dS(s.path))i(s,o,l)}),e}function dS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=dS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function ON(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:jN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const VN=/^:[\w-]+$/,LN=3,MN=2,FN=1,UN=10,$N=-2,kw=t=>t==="*";function BN(t,e){let n=t.split("/"),r=n.length;return n.some(kw)&&(r+=$N),e&&(r+=MN),n.filter(i=>!kw(i)).reduce((i,s)=>i+(VN.test(s)?LN:s===""?FN:UN),r)}function jN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function zN(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=qN({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Ur([i,c.pathname]),pathnameBase:JN(Ur([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Ur([i,c.pathnameBase]))}return s}function qN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=WN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:h,isOptional:m}=c;if(h==="*"){let _=a[d]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[d];return m&&!y?u[h]=void 0:u[h]=KN(y||"",h),u},{}),pathname:s,pathnameBase:o,pattern:t}}function WN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ny(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function GN(t){try{return decodeURI(t)}catch(e){return ny(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function KN(t,e){try{return decodeURIComponent(t)}catch(n){return ny(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ry(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function HN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Vo(t):t;return{pathname:n?n.startsWith("/")?n:QN(n,e):e,search:XN(r),hash:ZN(i)}}function QN(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Nf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function YN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function hS(t,e){let n=YN(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function fS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Vo(t):(i=ml({},t),Fe(!i.pathname||!i.pathname.includes("?"),Nf("?","pathname","search",i)),Fe(!i.pathname||!i.pathname.includes("#"),Nf("#","pathname","hash",i)),Fe(!i.search||!i.search.includes("#"),Nf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=HN(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Ur=t=>t.join("/").replace(/\/\/+/g,"/"),JN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),XN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ZN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function eb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const pS=["post","put","patch","delete"];new Set(pS);const tb=["get",...pS];new Set(tb);/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gl(){return gl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gl.apply(this,arguments)}const iy=S.createContext(null),nb=S.createContext(null),us=S.createContext(null),Jd=S.createContext(null),cs=S.createContext({outlet:null,matches:[],isDataRoute:!1}),mS=S.createContext(null);function rb(t,e){let{relative:n}=e===void 0?{}:e;eu()||Fe(!1);let{basename:r,navigator:i}=S.useContext(us),{hash:s,pathname:o,search:a}=yS(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ur([r,o])),i.createHref({pathname:l,search:a,hash:s})}function eu(){return S.useContext(Jd)!=null}function Xd(){return eu()||Fe(!1),S.useContext(Jd).location}function gS(t){S.useContext(us).static||S.useLayoutEffect(t)}function Zd(){let{isDataRoute:t}=S.useContext(cs);return t?gb():ib()}function ib(){eu()||Fe(!1);let t=S.useContext(iy),{basename:e,future:n,navigator:r}=S.useContext(us),{matches:i}=S.useContext(cs),{pathname:s}=Xd(),o=JSON.stringify(hS(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return gS(()=>{a.current=!0}),S.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=fS(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Ur([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}function yS(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=S.useContext(us),{matches:i}=S.useContext(cs),{pathname:s}=Xd(),o=JSON.stringify(hS(i,r.v7_relativeSplatPath));return S.useMemo(()=>fS(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function sb(t,e){return ob(t,e)}function ob(t,e,n,r){eu()||Fe(!1);let{navigator:i}=S.useContext(us),{matches:s}=S.useContext(cs),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Xd(),c;if(e){var d;let v=typeof e=="string"?Vo(e):e;l==="/"||(d=v.pathname)!=null&&d.startsWith(l)||Fe(!1),c=v}else c=u;let h=c.pathname||"/",m=l==="/"?h:h.slice(l.length)||"/",y=DN(t,{pathname:m}),_=db(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:Ur([l,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:Ur([l,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,r);return e&&_?S.createElement(Jd.Provider,{value:{location:gl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Cr.Pop}},_):_}function ab(){let t=mb(),e=eb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,null)}const lb=S.createElement(ab,null);class ub extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement(cs.Provider,{value:this.props.routeContext},S.createElement(mS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cb(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(iy);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(cs.Provider,{value:e},r)}function db(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||Fe(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:h,errors:m}=n,y=d.route.loader&&h[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,h)=>{let m,y=!1,_=null,v=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||lb,l&&(u<0&&h===0?(yb("route-fallback",!1),y=!0,v=null):u===h&&(y=!0,v=d.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,h+1)),f=()=>{let g;return m?g=_:y?g=v:d.route.Component?g=S.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=c,S.createElement(cb,{match:d,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?S.createElement(ub,{location:n.location,revalidation:n.revalidation,component:_,error:m,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var _S=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(_S||{}),sd=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(sd||{});function hb(t){let e=S.useContext(iy);return e||Fe(!1),e}function fb(t){let e=S.useContext(nb);return e||Fe(!1),e}function pb(t){let e=S.useContext(cs);return e||Fe(!1),e}function vS(t){let e=pb(),n=e.matches[e.matches.length-1];return n.route.id||Fe(!1),n.route.id}function mb(){var t;let e=S.useContext(mS),n=fb(sd.UseRouteError),r=vS(sd.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function gb(){let{router:t}=hb(_S.UseNavigateStable),e=vS(sd.UseNavigateStable),n=S.useRef(!1);return gS(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,gl({fromRouteId:e},s)))},[t,e])}const xw={};function yb(t,e,n){!e&&!xw[t]&&(xw[t]=!0)}function Ps(t){Fe(!1)}function _b(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Cr.Pop,navigator:s,static:o=!1,future:a}=t;eu()&&Fe(!1);let l=e.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:s,static:o,future:gl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Vo(r));let{pathname:c="/",search:d="",hash:h="",state:m=null,key:y="default"}=r,_=S.useMemo(()=>{let v=ry(c,l);return v==null?null:{location:{pathname:v,search:d,hash:h,state:m,key:y},navigationType:i}},[l,c,d,h,m,y,i]);return _==null?null:S.createElement(us.Provider,{value:u},S.createElement(Jd.Provider,{children:n,value:_}))}function vb(t){let{children:e,location:n}=t;return sb(tm(e),n)}new Promise(()=>{});function tm(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,tm(r.props.children,s));return}r.type!==Ps&&Fe(!1),!r.props.index||!r.props.children||Fe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=tm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nm(){return nm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nm.apply(this,arguments)}function wb(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Eb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Ib(t,e){return t.button===0&&(!e||e==="_self")&&!Eb(t)}const Tb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Sb="6";try{window.__reactRouterVersion=Sb}catch{}const Ab="startTransition",Nw=wk[Ab];function Rb(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=xN({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=S.useCallback(d=>{u&&Nw?Nw(()=>l(d)):l(d)},[l,u]);return S.useLayoutEffect(()=>o.listen(c),[o,c]),S.createElement(_b,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Pb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Cb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,po=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,h=wb(e,Tb),{basename:m}=S.useContext(us),y,_=!1;if(typeof u=="string"&&Cb.test(u)&&(y=u,Pb))try{let g=new URL(window.location.href),I=u.startsWith("//")?new URL(g.protocol+u):new URL(u),P=ry(I.pathname,m);I.origin===g.origin&&P!=null?u=P+I.search+I.hash:_=!0}catch{}let v=rb(u,{relative:i}),p=kb(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function f(g){r&&r(g),g.defaultPrevented||p(g)}return S.createElement("a",nm({},h,{href:y||v,onClick:_||s?r:f,ref:n,target:l}))});var bw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(bw||(bw={}));var Dw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dw||(Dw={}));function kb(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Zd(),u=Xd(),c=yS(t,{relative:o});return S.useCallback(d=>{if(Ib(d,n)){d.preventDefault();let h=r!==void 0?r:id(u)===id(c);l(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}var Ow={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ES={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(h=64)),r.push(n[c],n[d],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new Nb;const h=s<<2|a>>4;if(r.push(h),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Nb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bb=function(t){const e=wS(t);return ES.encodeByteArray(e,!0)},od=function(t){return bb(t).replace(/\./g,"")},IS=function(t){try{return ES.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ad(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Db(n)||(t[n]=ad(t[n],e[n]));return t}function Db(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=()=>Ob().__FIREBASE_DEFAULTS__,Lb=()=>{if(typeof process>"u"||typeof Ow>"u")return;const t=Ow.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Mb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&IS(t[1]);return e&&JSON.parse(e)},eh=()=>{try{return Vb()||Lb()||Mb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fb=t=>{var e,n;return(n=(e=eh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ub=t=>{const e=Fb(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},TS=()=>{var t;return(t=eh())===null||t===void 0?void 0:t.config},$b=t=>{var e;return(e=eh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[od(JSON.stringify(n)),od(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function sy(){var t;const e=(t=eh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qb(){return typeof self=="object"&&self.self===self}function SS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function oy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function AS(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function RS(){return!sy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yl(){try{return typeof indexedDB=="object"}catch{return!1}}function Wb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb="FirebaseError";class Et extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Gb,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ds.prototype.create)}}class ds{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Kb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Et(i,a,r)}}function Kb(t,e){return t.replace(Hb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Hb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Qb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _l(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Lw(s)&&Lw(o)){if(!_l(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Lw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ws(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Sa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function PS(t,e){const n=new Yb(t,e);return n.subscribe.bind(n)}class Yb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Jb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bf),i.error===void 0&&(i.error=bf),i.complete===void 0&&(i.complete=bf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){return t&&t._delegate?t._delegate:t}class On{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Bb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eD(e))try{this.getOrInitializeService({instanceIdentifier:wi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wi){return this.instances.has(e)}getOptions(e=wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wi){return this.component?this.component.multipleInstances?e:wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zb(t){return t===wi?void 0:t}function eD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Xb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=[];var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const CS={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},nD=Q.INFO,rD={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},iD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=rD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class th{constructor(e){this.name=e,this._logLevel=nD,this._logHandler=iD,this._userLogHandler=null,ay.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}function sD(t){ay.forEach(e=>{e.setLogLevel(t)})}function oD(t,e){for(const n of ay){let r=null;e&&e.level&&(r=CS[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:Q[s].toLowerCase(),message:a,args:o,type:i.name})}}}const aD=(t,e)=>e.some(n=>t instanceof n);let Mw,Fw;function lD(){return Mw||(Mw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uD(){return Fw||(Fw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kS=new WeakMap,rm=new WeakMap,xS=new WeakMap,Df=new WeakMap,ly=new WeakMap;function cD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n($r(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kS.set(n,t)}).catch(()=>{}),ly.set(e,t),e}function dD(t){if(rm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});rm.set(t,e)}let im={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hD(t){im=t(im)}function fD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Of(this),e,...n);return xS.set(r,e.sort?e.sort():[e]),$r(r)}:uD().includes(t)?function(...e){return t.apply(Of(this),e),$r(kS.get(this))}:function(...e){return $r(t.apply(Of(this),e))}}function pD(t){return typeof t=="function"?fD(t):(t instanceof IDBTransaction&&dD(t),aD(t,lD())?new Proxy(t,im):t)}function $r(t){if(t instanceof IDBRequest)return cD(t);if(Df.has(t))return Df.get(t);const e=pD(t);return e!==t&&(Df.set(t,e),ly.set(e,t)),e}const Of=t=>ly.get(t);function mD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=$r(o);return r&&o.addEventListener("upgradeneeded",l=>{r($r(o.result),l.oldVersion,l.newVersion,$r(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const gD=["get","getKey","getAll","getAllKeys","count"],yD=["put","add","delete","clear"],Vf=new Map;function Uw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vf.get(e))return Vf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=yD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||gD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Vf.set(e,s),s}hD(t=>({...t,get:(e,n,r)=>Uw(e,n)||t.get(e,n,r),has:(e,n)=>!!Uw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sm="@firebase/app",$w="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=new th("@firebase/app"),wD="@firebase/app-compat",ED="@firebase/analytics-compat",ID="@firebase/analytics",TD="@firebase/app-check-compat",SD="@firebase/app-check",AD="@firebase/auth",RD="@firebase/auth-compat",PD="@firebase/database",CD="@firebase/database-compat",kD="@firebase/functions",xD="@firebase/functions-compat",ND="@firebase/installations",bD="@firebase/installations-compat",DD="@firebase/messaging",OD="@firebase/messaging-compat",VD="@firebase/performance",LD="@firebase/performance-compat",MD="@firebase/remote-config",FD="@firebase/remote-config-compat",UD="@firebase/storage",$D="@firebase/storage-compat",BD="@firebase/firestore",jD="@firebase/firestore-compat",zD="firebase",qD="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="[DEFAULT]",WD={[sm]:"fire-core",[wD]:"fire-core-compat",[ID]:"fire-analytics",[ED]:"fire-analytics-compat",[SD]:"fire-app-check",[TD]:"fire-app-check-compat",[AD]:"fire-auth",[RD]:"fire-auth-compat",[PD]:"fire-rtdb",[CD]:"fire-rtdb-compat",[kD]:"fire-fn",[xD]:"fire-fn-compat",[ND]:"fire-iid",[bD]:"fire-iid-compat",[DD]:"fire-fcm",[OD]:"fire-fcm-compat",[VD]:"fire-perf",[LD]:"fire-perf-compat",[MD]:"fire-rc",[FD]:"fire-rc-compat",[UD]:"fire-gcs",[$D]:"fire-gcs-compat",[BD]:"fire-fst",[jD]:"fire-fst-compat","fire-js":"fire-js",[zD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new Map,vl=new Map;function ld(t,e){try{t.container.addComponent(e)}catch(n){Hi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function NS(t,e){t.container.addOrOverwriteComponent(e)}function Gr(t){const e=t.name;if(vl.has(e))return Hi.debug(`There were multiple attempts to register component ${e}.`),!1;vl.set(e,t);for(const n of Wr.values())ld(n,t);return!0}function uy(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function GD(t,e,n=qr){uy(t,e).clearInstance(n)}function KD(){vl.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Hn=new ds("app","Firebase",HD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QD=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=qD;function cy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Hn.create("bad-app-name",{appName:String(i)});if(n||(n=TS()),!n)throw Hn.create("no-options");const s=Wr.get(i);if(s){if(_l(n,s.options)&&_l(r,s.config))return s;throw Hn.create("duplicate-app",{appName:i})}const o=new tD(i);for(const l of vl.values())o.addComponent(l);const a=new QD(n,r,o);return Wr.set(i,a),a}function bS(t=qr){const e=Wr.get(t);if(!e&&t===qr&&TS())return cy();if(!e)throw Hn.create("no-app",{appName:t});return e}function YD(){return Array.from(Wr.values())}async function DS(t){const e=t.name;Wr.has(e)&&(Wr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function bn(t,e,n){var r;let i=(r=WD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hi.warn(a.join(" "));return}Gr(new On(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function OS(t,e){if(t!==null&&typeof t!="function")throw Hn.create("invalid-log-argument");oD(t,e)}function VS(t){sD(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD="firebase-heartbeat-database",XD=1,wl="firebase-heartbeat-store";let Lf=null;function LS(){return Lf||(Lf=mD(JD,XD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Hn.create("idb-open",{originalErrorMessage:t.message})})),Lf}async function ZD(t){try{const n=(await LS()).transaction(wl),r=await n.objectStore(wl).get(MS(t));return await n.done,r}catch(e){if(e instanceof Et)Hi.warn(e.message);else{const n=Hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hi.warn(n.message)}}}async function Bw(t,e){try{const r=(await LS()).transaction(wl,"readwrite");await r.objectStore(wl).put(e,MS(t)),await r.done}catch(n){if(n instanceof Et)Hi.warn(n.message);else{const r=Hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hi.warn(r.message)}}}function MS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO=1024,tO=30*24*60*60*1e3;class nO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=jw();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=tO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jw(),{heartbeatsToSend:r,unsentEntries:i}=rO(this._heartbeatsCache.heartbeats),s=od(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function jw(){return new Date().toISOString().substring(0,10)}function rO(t,e=eO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),zw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yl()?Wb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ZD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zw(t){return od(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sO(t){Gr(new On("platform-logger",e=>new _D(e),"PRIVATE")),Gr(new On("heartbeat",e=>new nO(e),"PRIVATE")),bn(sm,$w,t),bn(sm,$w,"esm2017"),bn("fire-js","")}sO("");const oO=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Et,SDK_VERSION:si,_DEFAULT_ENTRY_NAME:qr,_addComponent:ld,_addOrOverwriteComponent:NS,_apps:Wr,_clearComponents:KD,_components:vl,_getProvider:uy,_registerComponent:Gr,_removeServiceInstance:GD,deleteApp:DS,getApp:bS,getApps:YD,initializeApp:cy,onLog:OS,registerVersion:bn,setLogLevel:VS},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e,n){this._delegate=e,this.firebase=n,ld(e,new On("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),DS(this._delegate)))}_getService(e,n=qr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=qr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){ld(this._delegate,e)}_addOrOverwriteComponent(e){NS(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},qw=new ds("app-compat","Firebase",lO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:bn,setLogLevel:VS,onLog:OS,apps:null,SDK_VERSION:si,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:oO}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||qr,!Vw(e,u))throw qw.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const d=cy(u,c);if(Vw(e,d.name))return e[d.name];const h=new t(d,n);return e[d.name]=h,h}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,d=c.replace("-compat","");if(Gr(u)&&u.type==="PUBLIC"){const h=(m=i())=>{if(typeof m[d]!="function")throw qw.create("invalid-app-argument",{appName:c});return m[d]()};u.serviceProps!==void 0&&ad(h,u.serviceProps),n[d]=h,t.prototype[d]=function(...m){return this._getService.bind(this,c).apply(this,u.multipleInstances?m:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(){const t=uO(aO);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:FS,extendNamespace:e,createSubscribe:PS,ErrorFactory:ds,deepExtend:ad});function e(n){ad(t,n)}return t}const cO=FS();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=new th("@firebase/app-compat"),dO="@firebase/app-compat",hO="0.2.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(t){bn(dO,hO,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(qb()&&self.firebase!==void 0){Ww.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Ww.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const oi=cO;fO();var pO="firebase",mO="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oi.registerVersion(pO,mO,"app-compat");function dy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const la={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ws={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gO(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function US(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yO=gO,_O=US,$S=new ds("auth","Firebase",US());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=new th("@firebase/auth");function vO(t,...e){ud.logLevel<=Q.WARN&&ud.warn(`Auth (${si}): ${t}`,...e)}function vc(t,...e){ud.logLevel<=Q.ERROR&&ud.error(`Auth (${si}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,...e){throw hy(t,...e)}function it(t,...e){return hy(t,...e)}function BS(t,e,n){const r=Object.assign(Object.assign({},_O()),{[e]:n});return new ds("auth","Firebase",r).create(e,{appName:t.name})}function Mo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&at(t,"argument-error"),BS(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $S.create(t,...e)}function N(t,e,...n){if(!t)throw hy(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vc(e),new Error(e)}function fn(t,e){t||Sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fy(){return Gw()==="http:"||Gw()==="https:"}function Gw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fy()||SS()||"connection"in navigator)?navigator.onLine:!0}function EO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n){this.shortDelay=e,this.longDelay=n,fn(n>e,"Short delay should be less than long delay!"),this.isMobile=zb()||oy()}get(){return wO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t,e){fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=new tu(3e4,6e4);function Ce(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ke(t,e,n,r,i={}){return zS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Lo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),jS.fetch()(qS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function zS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},IO),e);try{const i=new AO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Aa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Aa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Aa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Aa(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw BS(t,c,u);at(t,c)}}catch(i){if(i instanceof Et)throw i;at(t,"network-request-failed",{message:String(i)})}}async function ar(t,e,n,r,i={}){const s=await ke(t,e,n,r,i);return"mfaPendingCredential"in s&&at(t,"multi-factor-auth-required",{_serverResponse:s}),s}function qS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?py(t.config,i):`${t.config.apiScheme}://${i}`}function SO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class AO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),TO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Aa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=it(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(t){return t!==void 0&&t.getResponse!==void 0}function Hw(t){return t!==void 0&&t.enterprise!==void 0}class RO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return SO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PO(t){return(await ke(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function CO(t,e){return ke(t,"GET","/v2/recaptchaConfig",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kO(t,e){return ke(t,"POST","/v1/accounts:delete",e)}async function xO(t,e){return ke(t,"POST","/v1/accounts:update",e)}async function NO(t,e){return ke(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bO(t,e=!1){const n=j(t),r=await n.getIdToken(e),i=nh(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ja(Mf(i.auth_time)),issuedAtTime:ja(Mf(i.iat)),expirationTime:ja(Mf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Mf(t){return Number(t)*1e3}function nh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vc("JWT malformed, contained fewer than 3 sections"),null;try{const i=IS(n);return i?JSON.parse(i):(vc("Failed to decode base64 JWT payload"),null)}catch(i){return vc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function DO(t){const e=nh(t);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Et&&OO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ja(this.lastLoginAt),this.creationTime=ja(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Il(t){var e;const n=t.auth,r=await t.getIdToken(),i=await nr(t,NO(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?FO(s.providerUserInfo):[],a=MO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new WS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function LO(t){const e=j(t);await Il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function FO(t){return t.map(e=>{var{providerId:n}=e,r=dy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UO(t,e){const n=await zS(t,{},async()=>{const r=Lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=qS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",jS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $O(t,e){return ke(t,"POST","/v2/accounts:revokeToken",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):DO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await UO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Tl;return r&&(N(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tl,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){N(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ui{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=dy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new WS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await nr(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bO(this,e)}reload(){return LO(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ui(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Il(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await nr(this,kO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:I,isAnonymous:P,providerData:k,stsTokenManager:b}=n;N(g&&b,e,"internal-error");const U=Tl.fromJSON(this.name,b);N(typeof g=="string",e,"internal-error"),pr(d,e.name),pr(h,e.name),N(typeof I=="boolean",e,"internal-error"),N(typeof P=="boolean",e,"internal-error"),pr(m,e.name),pr(y,e.name),pr(_,e.name),pr(v,e.name),pr(p,e.name),pr(f,e.name);const ae=new Ui({uid:g,auth:e,email:h,emailVerified:I,displayName:d,isAnonymous:P,photoURL:y,phoneNumber:m,tenantId:_,stsTokenManager:U,createdAt:p,lastLoginAt:f});return k&&Array.isArray(k)&&(ae.providerData=k.map(K=>Object.assign({},K))),v&&(ae._redirectEventId=v),ae}static async _fromIdTokenResponse(e,n,r=!1){const i=new Tl;i.updateFromServerResponse(n);const s=new Ui({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Il(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=new Map;function $t(t){fn(t instanceof Function,"Expected a class definition");let e=Qw.get(t);return e?(fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qw.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}GS.type="NONE";const mo=GS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t,e,n){return`firebase:${t}:${e}:${n}`}class Zs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=$i(this.userKey,i.apiKey,s),this.fullPersistenceKey=$i("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ui._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zs($t(mo),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||$t(mo);const o=$i(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Ui._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Zs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Zs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(QS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(KS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(YS(e))return"Blackberry";if(JS(e))return"Webos";if(my(e))return"Safari";if((e.includes("chrome/")||HS(e))&&!e.includes("edge/"))return"Chrome";if(nu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function KS(t=_e()){return/firefox\//i.test(t)}function my(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function HS(t=_e()){return/crios\//i.test(t)}function QS(t=_e()){return/iemobile/i.test(t)}function nu(t=_e()){return/android/i.test(t)}function YS(t=_e()){return/blackberry/i.test(t)}function JS(t=_e()){return/webos/i.test(t)}function Fo(t=_e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function BO(t=_e()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function jO(t=_e()){var e;return Fo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zO(){return AS()&&document.documentMode===10}function XS(t=_e()){return Fo(t)||nu(t)||JS(t)||YS(t)||/windows phone/i.test(t)||QS(t)}function qO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t,e=[]){let n;switch(t){case"Browser":n=Yw(_e());break;case"Worker":n=`${Yw(_e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${si}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GO(t,e={}){return ke(t,"GET","/v2/passwordPolicy",Ce(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO=6;class HO{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:KO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jw(this),this.idTokenSubscription=new Jw(this),this.beforeStateQueue=new WO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$S,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$t(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Zs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Il(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=EO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?j(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GO(this),n=new HO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ds("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $O(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$t(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Zs.create(this,[$t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ZS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ae(t){return j(t)}class Jw{constructor(e){this.auth=e,this.observer=null,this.addObserver=PS(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YO(t){ru=t}function gy(t){return ru.loadJS(t)}function JO(){return ru.recaptchaV2Script}function XO(){return ru.recaptchaEnterpriseScript}function ZO(){return ru.gapiScript}function eA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const eV="recaptcha-enterprise",tV="NO_RECAPTCHA";class nV{constructor(e){this.type=eV,this.auth=Ae(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{CO(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new RO(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Hw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(tV)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Hw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=XO();l.length!==0&&(l+=a),gy(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Xw(t,e,n,r=!1){const i=new nV(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Sl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Xw(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Xw(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function rV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($t);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function iV(t,e,n){const r=Ae(t);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=tA(e),{host:o,port:a}=sV(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||oV()}function tA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sV(t){const e=tA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Zw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Zw(o)}}}function Zw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oV(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA(t,e){return ke(t,"POST","/v1/accounts:resetPassword",Ce(t,e))}async function aV(t,e){return ke(t,"POST","/v1/accounts:update",e)}async function lV(t,e){return ke(t,"POST","/v1/accounts:signUp",e)}async function uV(t,e){return ke(t,"POST","/v1/accounts:update",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cV(t,e){return ar(t,"POST","/v1/accounts:signInWithPassword",Ce(t,e))}async function rh(t,e){return ke(t,"POST","/v1/accounts:sendOobCode",Ce(t,e))}async function dV(t,e){return rh(t,e)}async function hV(t,e){return rh(t,e)}async function fV(t,e){return rh(t,e)}async function pV(t,e){return rh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mV(t,e){return ar(t,"POST","/v1/accounts:signInWithEmailLink",Ce(t,e))}async function gV(t,e){return ar(t,"POST","/v1/accounts:signInWithEmailLink",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al extends Uo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Al(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Al(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sl(e,n,"signInWithPassword",cV);case"emailLink":return mV(e,{email:this._email,oobCode:this._password});default:at(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sl(e,r,"signUpPassword",lV);case"emailLink":return gV(e,{idToken:n,email:this._email,oobCode:this._password});default:at(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(t,e){return ar(t,"POST","/v1/accounts:signInWithIdp",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yV="http://localhost";class Vn extends Uo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):at("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=dy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Vn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qn(e,n)}buildRequest(){const e={requestUri:yV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Lo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _V(t,e){return ke(t,"POST","/v1/accounts:sendVerificationCode",Ce(t,e))}async function vV(t,e){return ar(t,"POST","/v1/accounts:signInWithPhoneNumber",Ce(t,e))}async function wV(t,e){const n=await ar(t,"POST","/v1/accounts:signInWithPhoneNumber",Ce(t,e));if(n.temporaryProof)throw Aa(t,"account-exists-with-different-credential",n);return n}const EV={USER_NOT_FOUND:"user-not-found"};async function IV(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return ar(t,"POST","/v1/accounts:signInWithPhoneNumber",Ce(t,n),EV)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends Uo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Bi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Bi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return vV(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return wV(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return IV(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Bi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TV(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function SV(t){const e=Ws(Sa(t)).link,n=e?Ws(Sa(e)).deep_link_id:null,r=Ws(Sa(t)).deep_link_id;return(r?Ws(Sa(r)).link:null)||r||n||e||t}class ih{constructor(e){var n,r,i,s,o,a;const l=Ws(Sa(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=TV((i=l.mode)!==null&&i!==void 0?i:null);N(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=SV(e);try{return new ih(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.providerId=ai.PROVIDER_ID}static credential(e,n){return Al._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ih.parseLink(n);return N(r,"argument-error"),Al._fromEmailAndCode(e,r.code,r.tenantId)}}ai.PROVIDER_ID="password";ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends lr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class eo extends $o{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return N("providerId"in n&&"signInMethod"in n,"argument-error"),Vn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return N(e.idToken||e.accessToken,"argument-error"),Vn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return eo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return eo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new eo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends $o{constructor(){super("facebook.com")}static credential(e){return Vn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";vn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends $o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vn._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com";wn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends $o{constructor(){super("github.com")}static credential(e){return Vn._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AV="http://localhost";class go extends Uo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Qn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new go(r,s)}static _create(e,n){return new go(e,n)}buildRequest(){return{requestUri:AV,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RV="saml.";class cd extends lr{constructor(e){N(e.startsWith(RV),"argument-error"),super(e)}static credentialFromResult(e){return cd.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return cd.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=go.fromJSON(e);return N(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return go._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends $o{constructor(){super("twitter.com")}static credential(e,n){return Vn._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return In.credential(n,r)}catch{return null}}}In.TWITTER_SIGN_IN_METHOD="twitter.com";In.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(t,e){return ar(t,"POST","/v1/accounts:signUp",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ui._fromIdTokenResponse(e,r,i),o=eE(r);return new rn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=eE(r);return new rn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function eE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PV(t){var e;const n=Ae(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new rn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await rA(n,{returnSecureToken:!0}),i=await rn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd extends Et{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,dd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new dd(e,n,r,i)}}function iA(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?dd._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CV(t,e){const n=j(t);await sh(!0,n,e);const{providerUserInfo:r}=await xO(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=sA(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function yy(t,e,n=!1){const r=await nr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rn._forOperation(t,"link",r)}async function sh(t,e,n){await Il(e);const r=sA(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";N(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await nr(t,iA(r,i,e,t),n);N(s.idToken,r,"internal-error");const o=nh(s.idToken);N(o,r,"internal-error");const{sub:a}=o;return N(t.uid===a,r,"user-mismatch"),rn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&at(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(t,e,n=!1){const r="signIn",i=await iA(t,r,e),s=await rn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function oh(t,e){return aA(Ae(t),e)}async function lA(t,e){const n=j(t);return await sh(!1,n,e.providerId),yy(n,e)}async function uA(t,e){return oA(j(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kV(t,e){return ar(t,"POST","/v1/accounts:signInWithCustomToken",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xV(t,e){const n=Ae(t),r=await kV(n,{token:e,returnSecureToken:!0}),i=await rn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?_y._fromServerResponse(e,n):"totpInfo"in n?vy._fromServerResponse(e,n):at(e,"internal-error")}}class _y extends iu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new _y(n)}}class vy extends iu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new vy(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t,e,n){var r;N(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),N(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(N(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(N(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wy(t){const e=Ae(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function NV(t,e,n){const r=Ae(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&ah(r,i,n),await Sl(r,i,"getOobCode",hV)}async function bV(t,e,n){await nA(j(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&wy(t),r})}async function DV(t,e){await uV(j(t),{oobCode:e})}async function cA(t,e){const n=j(t),r=await nA(n,{oobCode:e}),i=r.requestType;switch(N(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":N(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":N(r.mfaInfo,n,"internal-error");default:N(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=iu._fromServerResponse(Ae(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function OV(t,e){const{data:n}=await cA(j(t),e);return n.email}async function VV(t,e,n){const r=Ae(t),o=await Sl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&wy(t),l}),a=await rn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function LV(t,e,n){return oh(j(t),ai.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&wy(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MV(t,e,n){const r=Ae(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){N(a.handleCodeInApp,r,"argument-error"),a&&ah(r,o,a)}s(i,n),await Sl(r,i,"getOobCode",fV)}function FV(t,e){const n=ih.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function UV(t,e,n){const r=j(t),i=ai.credentialWithLink(e,n||El());return N(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),oh(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $V(t,e){return ke(t,"POST","/v1/accounts:createAuthUri",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BV(t,e){const n=fy()?El():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await $V(j(t),r);return i||[]}async function jV(t,e){const n=j(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&ah(n.auth,i,e);const{email:s}=await dV(n.auth,i);s!==t.email&&await t.reload()}async function zV(t,e,n){const r=j(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&ah(r.auth,s,n);const{email:o}=await pV(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qV(t,e){return ke(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WV(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=j(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await nr(r,qV(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function GV(t,e){return dA(j(t),e,null)}function KV(t,e){return dA(j(t),null,e)}async function dA(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await nr(t,aV(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HV(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=nh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new to(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new QV(s,i);case"github.com":return new YV(s,i);case"google.com":return new JV(s,i);case"twitter.com":return new XV(s,i,t.screenName||null);case"custom":case"anonymous":return new to(s,null);default:return new to(s,r,i)}}class to{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class hA extends to{constructor(e,n,r,i){super(e,n,r),this.username=i}}class QV extends to{constructor(e,n){super(e,"facebook.com",n)}}class YV extends hA{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class JV extends to{constructor(e,n){super(e,"google.com",n)}}class XV extends hA{constructor(e,n,r){super(e,"twitter.com",n,r)}}function ZV(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:HV(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new bi("enroll",e,n)}static _fromMfaPendingCredential(e){return new bi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return bi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return bi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ae(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>iu._fromServerResponse(r,a));N(i.mfaPendingCredential,r,"internal-error");const o=bi._fromMfaPendingCredential(i.mfaPendingCredential);return new Ey(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await rn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return N(n.user,r,"internal-error"),rn._forOperation(n.user,n.operationType,u);default:at(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function eL(t,e){var n;const r=j(t),i=e;return N(e.customData.operationType,r,"argument-error"),N((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Ey._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tL(t,e){return ke(t,"POST","/v2/accounts/mfaEnrollment:start",Ce(t,e))}function nL(t,e){return ke(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ce(t,e))}function rL(t,e){return ke(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ce(t,e))}class Iy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>iu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Iy(e)}async getSession(){return bi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await nr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await nr(this.user,rL(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Ff=new WeakMap;function iL(t){const e=j(t);return Ff.has(e)||Ff.set(e,Iy._fromUser(e)),Ff.get(e)}const hd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hd,"1"),this.storage.removeItem(hd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sL(){const t=_e();return my(t)||Fo(t)}const oL=1e3,aL=10;class pA extends fA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sL()&&qO(),this.fallbackToPolling=XS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},oL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pA.type="LOCAL";const Ty=pA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA extends fA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mA.type="SESSION";const Qi=mA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new lh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await lL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=su("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return window}function cL(t){Le().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(){return typeof Le().WorkerGlobalScope<"u"&&typeof Le().importScripts=="function"}async function dL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fL(){return Sy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA="firebaseLocalStorageDb",pL=1,fd="firebaseLocalStorage",yA="fbase_key";class ou{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uh(t,e){return t.transaction([fd],e?"readwrite":"readonly").objectStore(fd)}function mL(){const t=indexedDB.deleteDatabase(gA);return new ou(t).toPromise()}function om(){const t=indexedDB.open(gA,pL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fd,{keyPath:yA})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fd)?e(r):(r.close(),await mL(),e(await om()))})})}async function tE(t,e,n){const r=uh(t,!0).put({[yA]:e,value:n});return new ou(r).toPromise()}async function gL(t,e){const n=uh(t,!1).get(e),r=await new ou(n).toPromise();return r===void 0?null:r.value}function nE(t,e){const n=uh(t,!0).delete(e);return new ou(n).toPromise()}const yL=800,_L=3;class _A{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await om(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_L)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lh._getInstance(fL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dL(),!this.activeServiceWorker)return;this.sender=new uL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await om();return await tE(e,hd,"1"),await nE(e,hd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=uh(i,!1).getAll();return new ou(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_A.type="LOCAL";const Rl=_A;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vL(t,e){return ke(t,"POST","/v2/accounts/mfaSignIn:start",Ce(t,e))}function wL(t,e){return ke(t,"POST","/v2/accounts/mfaSignIn:finalize",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EL=500,IL=6e4,Qu=1e12;class TL{constructor(e){this.auth=e,this.counter=Qu,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new SL(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Qu;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Qu;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Qu;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class SL{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;N(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=AL(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},IL)},EL))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function AL(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=eA("rcb"),RL=new tu(3e4,6e4);class PL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Le().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return N(CL(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Kw(Le().grecaptcha)?Promise.resolve(Le().grecaptcha):new Promise((r,i)=>{const s=Le().setTimeout(()=>{i(it(e,"network-request-failed"))},RL.get());Le()[Uf]=()=>{Le().clearTimeout(s),delete Le()[Uf];const a=Le().grecaptcha;if(!a||!Kw(a)){i(it(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const d=l(u,c);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${JO()}?${Lo({onload:Uf,render:"explicit",hl:n})}`;gy(o).catch(()=>{clearTimeout(s),i(it(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Le().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function CL(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class kL{async load(e){return new TL(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="recaptcha",xL={theme:"light",type:"image"};let NL=class{constructor(e,n,r=Object.assign({},xL)){this.parameters=r,this.type=vA,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ae(e),this.isInvisible=this.parameters.size==="invisible",N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;N(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new kL:new PL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){N(!this.parameters.sitekey,this.auth,"argument-error"),N(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Le()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){N(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){N(fy()&&!Sy(),this.auth,"internal-error"),await bL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await PO(this.auth);N(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return N(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function bL(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Bi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function DL(t,e,n){const r=Ae(t),i=await ch(r,e,j(n));return new Ay(i,s=>oh(r,s))}async function OL(t,e,n){const r=j(t);await sh(!1,r,"phone");const i=await ch(r.auth,e,j(n));return new Ay(i,s=>lA(r,s))}async function VL(t,e,n){const r=j(t),i=await ch(r.auth,e,j(n));return new Ay(i,s=>uA(r,s))}async function ch(t,e,n){var r;const i=await n.verify();try{N(typeof i=="string",t,"argument-error"),N(n.type===vA,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return N(o.type==="enroll",t,"internal-error"),(await tL(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{N(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return N(a,t,"missing-multi-factor-info"),(await vL(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await _V(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function LL(t,e){await yy(j(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yi=class wc{constructor(e){this.providerId=wc.PROVIDER_ID,this.auth=Ae(e)}verifyPhoneNumber(e,n){return ch(this.auth,e,j(n))}static credential(e,n){return Bi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return wc.credentialFromTaggedObject(n)}static credentialFromError(e){return wc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Bi._fromTokenResponse(n,r):null}};Yi.PROVIDER_ID="phone";Yi.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t,e){return e?$t(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry extends Uo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ML(t){return aA(t.auth,new Ry(t),t.bypassAuthState)}function FL(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),oA(n,new Ry(t),t.bypassAuthState)}async function UL(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),yy(n,new Ry(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ML;case"linkViaPopup":case"linkViaRedirect":return UL;case"reauthViaPopup":case"reauthViaRedirect":return FL;default:at(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $L=new tu(2e3,1e4);async function BL(t,e,n){const r=Ae(t);Mo(t,e,lr);const i=hs(r,n);return new qn(r,"signInViaPopup",e,i).executeNotNull()}async function jL(t,e,n){const r=j(t);Mo(r.auth,e,lr);const i=hs(r.auth,n);return new qn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function zL(t,e,n){const r=j(t);Mo(r.auth,e,lr);const i=hs(r.auth,n);return new qn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class qn extends wA{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,qn.currentPopupAction&&qn.currentPopupAction.cancel(),qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const e=su();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$L.get())};e()}}qn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qL="pendingRedirect",za=new Map;class WL extends wA{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=za.get(this.auth._key());if(!e){try{const r=await GL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}za.set(this.auth._key(),e)}return this.bypassAuthState||za.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GL(t,e){const n=IA(e),r=EA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Py(t,e){return EA(t)._set(IA(e),"true")}function KL(){za.clear()}function Cy(t,e){za.set(t._key(),e)}function EA(t){return $t(t._redirectPersistence)}function IA(t){return $i(qL,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HL(t,e,n){return QL(t,e,n)}async function QL(t,e,n){const r=Ae(t);Mo(t,e,lr),await r._initializationPromise;const i=hs(r,n);return await Py(i,r),i._openRedirect(r,e,"signInViaRedirect")}function YL(t,e,n){return JL(t,e,n)}async function JL(t,e,n){const r=j(t);Mo(r.auth,e,lr),await r.auth._initializationPromise;const i=hs(r.auth,n);await Py(i,r.auth);const s=await TA(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function XL(t,e,n){return ZL(t,e,n)}async function ZL(t,e,n){const r=j(t);Mo(r.auth,e,lr),await r.auth._initializationPromise;const i=hs(r.auth,n);await sh(!1,r,e.providerId),await Py(i,r.auth);const s=await TA(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function eM(t,e){return await Ae(t)._initializationPromise,dh(t,e,!1)}async function dh(t,e,n=!1){const r=Ae(t),i=hs(r,e),o=await new WL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function TA(t){const e=su(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM=10*60*1e3;class SA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!AA(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(it(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tM&&this.cachedEventUids.clear(),this.cachedEventUids.has(rE(e))}saveEventToCache(e){this.cachedEventUids.add(rE(e)),this.lastProcessedEventTime=Date.now()}}function rE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function AA({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return AA(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RA(t,e={}){return ke(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iM=/^https?/;async function sM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RA(t);for(const n of e)try{if(oM(n))return}catch{}at(t,"unauthorized-domain")}function oM(t){const e=El(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iM.test(n))return!1;if(rM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aM=new tu(3e4,6e4);function iE(){const t=Le().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lM(t){return new Promise((e,n)=>{var r,i,s;function o(){iE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{iE(),n(it(t,"network-request-failed"))},timeout:aM.get()})}if(!((i=(r=Le().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Le().gapi)===null||s===void 0)&&s.load)o();else{const a=eA("iframefcb");return Le()[a]=()=>{gapi.load?o():n(it(t,"network-request-failed"))},gy(`${ZO()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ec=null,e})}let Ec=null;function uM(t){return Ec=Ec||lM(t),Ec}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM=new tu(5e3,15e3),dM="__/auth/iframe",hM="emulator/auth/iframe",fM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mM(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?py(e,hM):`https://${t.config.authDomain}/${dM}`,r={apiKey:e.apiKey,appName:t.name,v:si},i=pM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Lo(r).slice(1)}`}async function gM(t){const e=await uM(t),n=Le().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:mM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=it(t,"network-request-failed"),a=Le().setTimeout(()=>{s(o)},cM.get());function l(){Le().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_M=500,vM=600,wM="_blank",EM="http://localhost";class sE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IM(t,e,n,r=_M,i=vM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},yM),{width:r.toString(),height:i.toString(),top:s,left:o}),u=_e().toLowerCase();n&&(a=HS(u)?wM:n),KS(u)&&(e=e||EM,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[m,y])=>`${h}${m}=${y},`,"");if(jO(u)&&a!=="_self")return TM(e||"",a),new sE(null);const d=window.open(e||"",a,c);N(d,t,"popup-blocked");try{d.focus()}catch{}return new sE(d)}function TM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SM="__/auth/handler",AM="emulator/auth/handler",RM=encodeURIComponent("fac");async function am(t,e,n,r,i,s){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:si,eventId:i};if(e instanceof lr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Qb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof $o){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${RM}=${encodeURIComponent(l)}`:"";return`${PM(t)}?${Lo(a).slice(1)}${u}`}function PM({config:t}){return t.emulator?py(t,AM):`https://${t.authDomain}/${SM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f="webStorageSupport";class CM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qi,this._completeRedirectFn=dh,this._overrideRedirectResult=Cy}async _openPopup(e,n,r,i){var s;fn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await am(e,n,r,El(),i);return IM(e,o,su())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await am(e,n,r,El(),i);return cL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(fn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gM(e),r=new SA(e);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($f,{type:$f},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[$f];o!==void 0&&n(!!o),at(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return XS()||my()||Fo()}}const kM=CM;class xM{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Sn("unexpected MultiFactorSessionType")}}}class ky extends xM{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ky(e)}_finalizeEnroll(e,n,r){return nL(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return wL(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class PA{constructor(){}static assertion(e){return ky._fromCredential(e)}}PA.FACTOR_ID="phone";var oE="@firebase/auth",aE="1.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DM(t){Gr(new On("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ZS(t)},u=new QO(r,i,s,l);return rV(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gr(new On("auth-internal",e=>{const n=Ae(e.getProvider("auth").getImmediate());return(r=>new NM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(oE,aE,bM(t)),bn(oE,aE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OM=5*60;$b("authIdTokenMaxAge");function VM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}YO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=it("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",VM().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DM("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LM=2e3;async function MM(t,e,n){var r;const{BuildInfo:i}=Ji();fn(e.sessionId,"AuthEvent did not contain a session ID");const s=await jM(e.sessionId),o={};return Fo()?o.ibi=i.packageName:nu()?o.apn=i.packageName:at(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,am(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function FM(t){const{BuildInfo:e}=Ji(),n={};Fo()?n.iosBundleId=e.packageName:nu()?n.androidPackageName=e.packageName:at(t,"operation-not-supported-in-this-environment"),await RA(t,n)}function UM(t){const{cordova:e}=Ji();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,BO()?"_blank":"_system","location=yes"),n(i)})})}async function $M(t,e,n){const{cordova:r}=Ji();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var d;s();const h=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(it(t,"redirect-cancelled-by-user"))},LM))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),nu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function BM(t){var e,n,r,i,s,o,a,l,u,c;const d=Ji();N(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),N(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),N(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((l=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((c=(u=d==null?void 0:d.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function jM(t){const e=zM(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function zM(t){if(fn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM=20;class WM extends SA{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function GM(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:QM(),postBody:null,tenantId:t.tenantId,error:it(t,"no-auth-event")}}function KM(t,e){return lm()._set(um(t),e)}async function lE(t){const e=await lm()._get(um(t));return e&&await lm()._remove(um(t)),e}function HM(t,e){var n,r;const i=JM(e);if(i.includes("/__/auth/callback")){const s=Ic(i),o=s.firebaseError?YM(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?it(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function QM(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<qM;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function lm(){return $t(Ty)}function um(t){return $i("authEvent",t.config.apiKey,t.name)}function YM(t){try{return JSON.parse(t)}catch{return null}}function JM(t){const e=Ic(t),n=e.link?decodeURIComponent(e.link):void 0,r=Ic(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Ic(i).link||i||r||n||t}function Ic(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Ws(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM=500;class ZM{constructor(){this._redirectPersistence=Qi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=dh,this._overrideRedirectResult=Cy}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new WM(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){at(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){BM(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),KL(),await this._originValidation(e);const o=GM(e,r,i);await KM(e,o);const a=await MM(e,o,n),l=await UM(a);return $M(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FM(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Ji(),o=setTimeout(async()=>{await lE(e),n.onEvent(uE())},XM),a=async c=>{clearTimeout(o);const d=await lE(e);let h=null;d&&(c!=null&&c.url)&&(h=HM(d,c.url)),n.onEvent(h||uE())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;Ji().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(d){console.error(d)}}}}const eF=ZM;function uE(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:it("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tF(t,e){Ae(t)._logFramework(e)}var nF="@firebase/auth-compat",rF="0.5.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iF=1e3;function qa(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function sF(){return qa()==="http:"||qa()==="https:"}function CA(t=_e()){return!!((qa()==="file:"||qa()==="ionic:"||qa()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function oF(){return oy()||sy()}function aF(){return AS()&&(document==null?void 0:document.documentMode)===11}function lF(t=_e()){return/Edge\/\d+/.test(t)}function uF(t=_e()){return aF()||lF(t)}function kA(){try{const t=self.localStorage,e=su();if(t)return t.setItem(e,"1"),t.removeItem(e),uF()?yl():!0}catch{return xy()&&yl()}return!1}function xy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Bf(){return(sF()||SS()||CA())&&!oF()&&kA()&&!xy()}function xA(){return CA()&&typeof document<"u"}async function cF(){return xA()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},iF);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function dF(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft={LOCAL:"local",NONE:"none",SESSION:"session"},ua=N,NA="persistence";function hF(t,e){if(ua(Object.values(Ft).includes(e),t,"invalid-persistence-type"),oy()){ua(e!==Ft.SESSION,t,"unsupported-persistence-type");return}if(sy()){ua(e===Ft.NONE,t,"unsupported-persistence-type");return}if(xy()){ua(e===Ft.NONE||e===Ft.LOCAL&&yl(),t,"unsupported-persistence-type");return}ua(e===Ft.NONE||kA(),t,"unsupported-persistence-type")}async function cm(t){await t._initializationPromise;const e=bA(),n=$i(NA,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function fF(t,e){const n=bA();if(!n)return[];const r=$i(NA,t,e);switch(n.getItem(r)){case Ft.NONE:return[mo];case Ft.LOCAL:return[Rl,Qi];case Ft.SESSION:return[Qi];default:return[]}}function bA(){var t;try{return((t=dF())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pF=N;class kr{constructor(){this.browserResolver=$t(kM),this.cordovaResolver=$t(eF),this.underlyingResolver=null,this._redirectPersistence=Qi,this._completeRedirectFn=dh,this._overrideRedirectResult=Cy}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return xA()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return pF(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await cF();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(t){return t.unwrap()}function mF(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gF(t){return OA(t)}function yF(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new _F(t,eL(t,e))}else if(r){const i=OA(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function OA(t){const{_tokenResponse:e}=t instanceof Et?t.customData:t;if(!e)return null;if(!(t instanceof Et)&&"temporaryProof"in e&&"phoneNumber"in e)return Yi.credentialFromResult(t);const n=e.providerId;if(!n||n===la.PASSWORD)return null;let r;switch(n){case la.GOOGLE:r=wn;break;case la.FACEBOOK:r=vn;break;case la.GITHUB:r=En;break;case la.TWITTER:r=In;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?go._create(n,a):Vn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new eo(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Et?r.credentialFromError(t):r.credentialFromResult(t)}function Pt(t,e){return e.catch(n=>{throw n instanceof Et&&yF(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:gF(n),additionalUserInfo:ZV(n),user:hh.getOrCreate(i)}})}async function dm(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Pt(t,n.confirm(r))}}class _F{constructor(e,n){this.resolver=n,this.auth=mF(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Pt(DA(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hh=class Ra{constructor(e){this._delegate=e,this.multiFactor=iL(e)}static getOrCreate(e){return Ra.USER_MAP.has(e)||Ra.USER_MAP.set(e,new Ra(e)),Ra.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Pt(this.auth,lA(this._delegate,e))}async linkWithPhoneNumber(e,n){return dm(this.auth,OL(this._delegate,e,n))}async linkWithPopup(e){return Pt(this.auth,zL(this._delegate,e,kr))}async linkWithRedirect(e){return await cm(Ae(this.auth)),XL(this._delegate,e,kr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Pt(this.auth,uA(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return dm(this.auth,VL(this._delegate,e,n))}reauthenticateWithPopup(e){return Pt(this.auth,jL(this._delegate,e,kr))}async reauthenticateWithRedirect(e){return await cm(Ae(this.auth)),YL(this._delegate,e,kr)}sendEmailVerification(e){return jV(this._delegate,e)}async unlink(e){return await CV(this._delegate,e),this}updateEmail(e){return GV(this._delegate,e)}updatePassword(e){return KV(this._delegate,e)}updatePhoneNumber(e){return LL(this._delegate,e)}updateProfile(e){return WV(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return zV(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};hh.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=N;class hm{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ca(r,"invalid-api-key",{appName:e.name}),ca(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?kr:void 0;this._delegate=n.initialize({options:{persistence:vF(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(yO),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?hh.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){iV(this._delegate,e,n)}applyActionCode(e){return DV(this._delegate,e)}checkActionCode(e){return cA(this._delegate,e)}confirmPasswordReset(e,n){return bV(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Pt(this._delegate,VV(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return BV(this._delegate,e)}isSignInWithEmailLink(e){return FV(this._delegate,e)}async getRedirectResult(){ca(Bf(),this._delegate,"operation-not-supported-in-this-environment");const e=await eM(this._delegate,kr);return e?Pt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){tF(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=cE(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=cE(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return MV(this._delegate,e,n)}sendPasswordResetEmail(e,n){return NV(this._delegate,e,n||void 0)}async setPersistence(e){hF(this._delegate,e);let n;switch(e){case Ft.SESSION:n=Qi;break;case Ft.LOCAL:n=await $t(Rl)._isAvailable()?Rl:Ty;break;case Ft.NONE:n=mo;break;default:return at("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Pt(this._delegate,PV(this._delegate))}signInWithCredential(e){return Pt(this._delegate,oh(this._delegate,e))}signInWithCustomToken(e){return Pt(this._delegate,xV(this._delegate,e))}signInWithEmailAndPassword(e,n){return Pt(this._delegate,LV(this._delegate,e,n))}signInWithEmailLink(e,n){return Pt(this._delegate,UV(this._delegate,e,n))}signInWithPhoneNumber(e,n){return dm(this._delegate,DL(this._delegate,e,n))}async signInWithPopup(e){return ca(Bf(),this._delegate,"operation-not-supported-in-this-environment"),Pt(this._delegate,BL(this._delegate,e,kr))}async signInWithRedirect(e){return ca(Bf(),this._delegate,"operation-not-supported-in-this-environment"),await cm(this._delegate),HL(this._delegate,e,kr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return OV(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}hm.Persistence=Ft;function cE(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&hh.getOrCreate(o)),error:e,complete:n}}function vF(t,e){const n=fF(t,e);if(typeof self<"u"&&!n.includes(Rl)&&n.push(Rl),typeof window<"u")for(const r of[Ty,Qi])n.includes(r)||n.push(r);return n.includes(mo)||n.push(mo),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(){this.providerId="phone",this._delegate=new Yi(DA(oi.auth()))}static credential(e,n){return Yi.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Ny.PHONE_SIGN_IN_METHOD=Yi.PHONE_SIGN_IN_METHOD;Ny.PROVIDER_ID=Yi.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wF=N;class EF{constructor(e,n,r=oi.app()){var i;wF((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new NL(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IF="auth-compat";function TF(t){t.INTERNAL.registerComponent(new On(IF,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new hm(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ws.EMAIL_SIGNIN,PASSWORD_RESET:ws.PASSWORD_RESET,RECOVER_EMAIL:ws.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ws.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ws.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ws.VERIFY_EMAIL}},EmailAuthProvider:ai,FacebookAuthProvider:vn,GithubAuthProvider:En,GoogleAuthProvider:wn,OAuthProvider:eo,SAMLAuthProvider:cd,PhoneAuthProvider:Ny,PhoneMultiFactorGenerator:PA,RecaptchaVerifier:EF,TwitterAuthProvider:In,Auth:hm,AuthCredential:Uo,Error:Et}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(nF,rF)}TF(oi);var SF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,by=by||{},z=SF||self;function fh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function au(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function AF(t){return Object.prototype.hasOwnProperty.call(t,jf)&&t[jf]||(t[jf]=++RF)}var jf="closure_uid_"+(1e9*Math.random()>>>0),RF=0;function PF(t,e,n){return t.call.apply(t.bind,arguments)}function CF(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ht(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ht=PF:ht=CF,ht.apply(null,arguments)}function Yu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ye(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function li(){this.s=this.s,this.o=this.o}var kF=0;li.prototype.s=!1;li.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),kF!=0)&&AF(this)};li.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const VA=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Dy(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function dE(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(fh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var xF=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};z.addEventListener("test",n,e),z.removeEventListener("test",n,e)}catch{}return t}();function Pl(t){return/^[\s\xa0]*$/.test(t)}function ph(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function Tn(t){return ph().indexOf(t)!=-1}function Oy(t){return Oy[" "](t),t}Oy[" "]=function(){};function NF(t,e){var n=T2;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var bF=Tn("Opera"),yo=Tn("Trident")||Tn("MSIE"),LA=Tn("Edge"),fm=LA||yo,MA=Tn("Gecko")&&!(ph().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge"))&&!(Tn("Trident")||Tn("MSIE"))&&!Tn("Edge"),DF=ph().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge");function FA(){var t=z.document;return t?t.documentMode:void 0}var pm;e:{var zf="",qf=function(){var t=ph();if(MA)return/rv:([^\);]+)(\)|;)/.exec(t);if(LA)return/Edge\/([\d\.]+)/.exec(t);if(yo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(DF)return/WebKit\/(\S+)/.exec(t);if(bF)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(qf&&(zf=qf?qf[1]:""),yo){var Wf=FA();if(Wf!=null&&Wf>parseFloat(zf)){pm=String(Wf);break e}}pm=zf}var mm;if(z.document&&yo){var hE=FA();mm=hE||parseInt(pm,10)||void 0}else mm=void 0;var OF=mm;function Cl(t,e){if(ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(MA){e:{try{Oy(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:VF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Cl.$.h.call(this)}}Ye(Cl,ft);var VF={2:"touch",3:"pen",4:"mouse"};Cl.prototype.h=function(){Cl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var lu="closure_listenable_"+(1e6*Math.random()|0),LF=0;function MF(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++LF,this.fa=this.ia=!1}function mh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Vy(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function FF(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function UA(t){const e={};for(const n in t)e[n]=t[n];return e}const fE="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $A(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<fE.length;s++)n=fE[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function gh(t){this.src=t,this.g={},this.h=0}gh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=ym(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new MF(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function gm(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=VA(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(mh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ym(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Ly="closure_lm_"+(1e6*Math.random()|0),Gf={};function BA(t,e,n,r,i){if(r&&r.once)return zA(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)BA(t,e[s],n,r,i);return null}return n=Uy(n),t&&t[lu]?t.O(e,n,au(r)?!!r.capture:!!r,i):jA(t,e,n,!1,r,i)}function jA(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=au(i)?!!i.capture:!!i,a=Fy(t);if(a||(t[Ly]=a=new gh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=UF(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)xF||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(WA(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function UF(){function t(n){return e.call(t.src,t.listener,n)}const e=$F;return t}function zA(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)zA(t,e[s],n,r,i);return null}return n=Uy(n),t&&t[lu]?t.P(e,n,au(r)?!!r.capture:!!r,i):jA(t,e,n,!0,r,i)}function qA(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)qA(t,e[s],n,r,i);else r=au(r)?!!r.capture:!!r,n=Uy(n),t&&t[lu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ym(s,n,r,i),-1<n&&(mh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Fy(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ym(e,n,r,i)),(n=-1<t?e[t]:null)&&My(n))}function My(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[lu])gm(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(WA(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Fy(e))?(gm(n,t),n.h==0&&(n.src=null,e[Ly]=null)):mh(t)}}}function WA(t){return t in Gf?Gf[t]:Gf[t]="on"+t}function $F(t,e){if(t.fa)t=!0;else{e=new Cl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&My(t),t=n.call(r,e)}return t}function Fy(t){return t=t[Ly],t instanceof gh?t:null}var Kf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uy(t){return typeof t=="function"?t:(t[Kf]||(t[Kf]=function(e){return t.handleEvent(e)}),t[Kf])}function Qe(){li.call(this),this.i=new gh(this),this.S=this,this.J=null}Ye(Qe,li);Qe.prototype[lu]=!0;Qe.prototype.removeEventListener=function(t,e,n,r){qA(this,t,e,n,r)};function st(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ft(e,t);else if(e instanceof ft)e.target=e.target||t;else{var i=e;e=new ft(r,t),$A(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ju(o,r,!0,e)&&i}if(o=e.g=t,i=Ju(o,r,!0,e)&&i,i=Ju(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ju(o,r,!1,e)&&i}Qe.prototype.N=function(){if(Qe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)mh(n[r]);delete t.g[e],t.h--}}this.J=null};Qe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Qe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ju(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&gm(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var $y=z.JSON.stringify;class BF{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function jF(){var t=By;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class zF{constructor(){this.h=this.g=null}add(e,n){const r=GA.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var GA=new BF(()=>new qF,t=>t.reset());class qF{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function WF(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function GF(t){z.setTimeout(()=>{throw t},0)}let kl,xl=!1,By=new zF,KA=()=>{const t=z.Promise.resolve(void 0);kl=()=>{t.then(KF)}};var KF=()=>{for(var t;t=jF();){try{t.h.call(t.g)}catch(n){GF(n)}var e=GA;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xl=!1};function yh(t,e){Qe.call(this),this.h=t||1,this.g=e||z,this.j=ht(this.qb,this),this.l=Date.now()}Ye(yh,Qe);V=yh.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),st(this,"tick"),this.ga&&(jy(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function jy(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){yh.$.N.call(this),jy(this),delete this.g};function zy(t,e,n){if(typeof t=="function")n&&(t=ht(t,n));else if(t&&typeof t.handleEvent=="function")t=ht(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function HA(t){t.g=zy(()=>{t.g=null,t.i&&(t.i=!1,HA(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class HF extends li{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:HA(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nl(t){li.call(this),this.h=t,this.g={}}Ye(Nl,li);var pE=[];function QA(t,e,n,r){Array.isArray(n)||(n&&(pE[0]=n.toString()),n=pE);for(var i=0;i<n.length;i++){var s=BA(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function YA(t){Vy(t.g,function(e,n){this.g.hasOwnProperty(n)&&My(e)},t),t.g={}}Nl.prototype.N=function(){Nl.$.N.call(this),YA(this)};Nl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function _h(){this.g=!0}_h.prototype.Ea=function(){this.g=!1};function QF(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function YF(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Gs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+XF(t,n)+(r?" "+r:"")})}function JF(t,e){t.info(function(){return"TIMEOUT: "+e})}_h.prototype.info=function(){};function XF(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return $y(n)}catch{return e}}var fs={},mE=null;function vh(){return mE=mE||new Qe}fs.Ta="serverreachability";function JA(t){ft.call(this,fs.Ta,t)}Ye(JA,ft);function bl(t){const e=vh();st(e,new JA(e))}fs.STAT_EVENT="statevent";function XA(t,e){ft.call(this,fs.STAT_EVENT,t),this.stat=e}Ye(XA,ft);function vt(t){const e=vh();st(e,new XA(e,t))}fs.Ua="timingevent";function ZA(t,e){ft.call(this,fs.Ua,t),this.size=e}Ye(ZA,ft);function uu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var wh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},eR={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function qy(){}qy.prototype.h=null;function gE(t){return t.h||(t.h=t.i())}function tR(){}var cu={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Wy(){ft.call(this,"d")}Ye(Wy,ft);function Gy(){ft.call(this,"c")}Ye(Gy,ft);var _m;function Eh(){}Ye(Eh,qy);Eh.prototype.g=function(){return new XMLHttpRequest};Eh.prototype.i=function(){return{}};_m=new Eh;function du(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Nl(this),this.P=ZF,t=fm?125:void 0,this.V=new yh(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new nR}function nR(){this.i=null,this.g="",this.h=!1}var ZF=45e3,rR={},vm={};V=du.prototype;V.setTimeout=function(t){this.P=t};function wm(t,e,n){t.L=1,t.A=Th(rr(e)),t.u=n,t.S=!0,iR(t,null)}function iR(t,e){t.G=Date.now(),hu(t),t.B=rr(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),hR(n.i,"t",r),t.o=0,n=t.l.J,t.h=new nR,t.g=DR(t.l,n?e:null,!t.u),0<t.O&&(t.M=new HF(ht(t.Pa,t,t.g),t.O)),QA(t.U,t.g,"readystatechange",t.nb),e=t.I?UA(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),bl(),QF(t.j,t.v,t.B,t.m,t.W,t.u)}V.nb=function(t){t=t.target;const e=this.M;e&&An(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const c=An(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||fm||this.g&&(this.h.h||this.g.ja()||wE(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?bl(3):bl(2)),Ih(this);var n=this.g.da();this.ca=n;t:if(sR(this)){var r=wE(this.g);t="";var i=r.length,s=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Di(this),Wa(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,YF(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Pl(a)){var u=a;break t}}u=null}if(n=u)Gs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Em(this,n);else{this.i=!1,this.s=3,vt(12),Di(this),Wa(this);break e}}this.S?(oR(this,c,o),fm&&this.i&&c==3&&(QA(this.U,this.V,"tick",this.mb),this.V.start())):(Gs(this.j,this.m,o,null),Em(this,o)),c==4&&Di(this),this.i&&!this.J&&(c==4?kR(this.l,this):(this.i=!1,hu(this)))}else w2(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),Di(this),Wa(this)}}}catch{}finally{}};function sR(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function oR(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=e2(t,n),i==vm){e==4&&(t.s=4,vt(14),r=!1),Gs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==rR){t.s=4,vt(15),Gs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Gs(t.j,t.m,i,null),Em(t,i);sR(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,vt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xy(e),e.M=!0,vt(11))):(Gs(t.j,t.m,n,"[Invalid Chunked Response]"),Di(t),Wa(t))}V.mb=function(){if(this.g){var t=An(this.g),e=this.g.ja();this.o<e.length&&(Ih(this),oR(this,t,e),this.i&&t!=4&&hu(this))}};function e2(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?vm:(n=Number(e.substring(n,r)),isNaN(n)?rR:(r+=1,r+n>e.length?vm:(e=e.slice(r,r+n),t.o=r+n,e)))}V.cancel=function(){this.J=!0,Di(this)};function hu(t){t.Y=Date.now()+t.P,aR(t,t.P)}function aR(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=uu(ht(t.lb,t),e)}function Ih(t){t.C&&(z.clearTimeout(t.C),t.C=null)}V.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(JF(this.j,this.B),this.L!=2&&(bl(),vt(17)),Di(this),this.s=2,Wa(this)):aR(this,this.Y-t)};function Wa(t){t.l.H==0||t.J||kR(t.l,t)}function Di(t){Ih(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,jy(t.V),YA(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Em(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Im(n.i,t))){if(!t.K&&Im(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)gd(n),Ph(n);else break e;Jy(n),vt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=uu(ht(n.ib,n),6e3));if(1>=mR(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Oi(n,11)}else if((t.K||n.g==t)&&gd(n),!Pl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ky(s,s.h),s.h=null))}if(r.F){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,de(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=bR(r,r.J?r.pa:null,r.Y),o.K){gR(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Ih(a),hu(a)),r.g=o}else PR(r);0<n.j.length&&Ch(n)}else u[0]!="stop"&&u[0]!="close"||Oi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Oi(n,7):Yy(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}bl(4)}catch{}}function t2(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(fh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function n2(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(fh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function lR(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(fh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=n2(t),r=t2(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var uR=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function r2(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ji(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ji){this.h=t.h,pd(this,t.j),this.s=t.s,this.g=t.g,md(this,t.m),this.l=t.l;var e=t.i,n=new Dl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),yE(this,n),this.o=t.o}else t&&(e=String(t).match(uR))?(this.h=!1,pd(this,e[1]||"",!0),this.s=Pa(e[2]||""),this.g=Pa(e[3]||"",!0),md(this,e[4]),this.l=Pa(e[5]||"",!0),yE(this,e[6]||"",!0),this.o=Pa(e[7]||"")):(this.h=!1,this.i=new Dl(null,this.h))}ji.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ca(e,_E,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ca(e,_E,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ca(n,n.charAt(0)=="/"?o2:s2,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ca(n,l2)),t.join("")};function rr(t){return new ji(t)}function pd(t,e,n){t.j=n?Pa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function md(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function yE(t,e,n){e instanceof Dl?(t.i=e,u2(t.i,t.h)):(n||(e=Ca(e,a2)),t.i=new Dl(e,t.h))}function de(t,e,n){t.i.set(e,n)}function Th(t){return de(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Pa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ca(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,i2),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function i2(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var _E=/[#\/\?@]/g,s2=/[#\?:]/g,o2=/[#\?]/g,a2=/[#\?@]/g,l2=/#/g;function Dl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ui(t){t.g||(t.g=new Map,t.h=0,t.i&&r2(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=Dl.prototype;V.add=function(t,e){ui(this),this.i=null,t=Bo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function cR(t,e){ui(t),e=Bo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function dR(t,e){return ui(t),e=Bo(t,e),t.g.has(e)}V.forEach=function(t,e){ui(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};V.ta=function(){ui(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};V.Z=function(t){ui(this);let e=[];if(typeof t=="string")dR(this,t)&&(e=e.concat(this.g.get(Bo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return ui(this),this.i=null,t=Bo(this,t),dR(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function hR(t,e,n){cR(t,e),0<n.length&&(t.i=null,t.g.set(Bo(t,e),Dy(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Bo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function u2(t,e){e&&!t.j&&(ui(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(cR(this,r),hR(this,i,n))},t)),t.j=e}var c2=class{constructor(t,e){this.g=t,this.map=e}};function fR(t){this.l=t||d2,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var d2=10;function pR(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function mR(t){return t.h?1:t.g?t.g.size:0}function Im(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ky(t,e){t.g?t.g.add(e):t.h=e}function gR(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}fR.prototype.cancel=function(){if(this.i=yR(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function yR(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Dy(t.i)}var h2=class{stringify(t){return z.JSON.stringify(t,void 0)}parse(t){return z.JSON.parse(t,void 0)}};function f2(){this.g=new h2}function p2(t,e,n){const r=n||"";try{lR(t,function(i,s){let o=i;au(i)&&(o=$y(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function m2(t,e){const n=new _h;if(z.Image){const r=new Image;r.onload=Yu(Xu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Yu(Xu,n,r,"TestLoadImage: error",!1,e),r.onabort=Yu(Xu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Yu(Xu,n,r,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Xu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Sh(t){this.l=t.ec||null,this.j=t.ob||!1}Ye(Sh,qy);Sh.prototype.g=function(){return new Ah(this.l,this.j)};Sh.prototype.i=function(t){return function(){return t}}({});function Ah(t,e){Qe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Hy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ye(Ah,Qe);var Hy=0;V=Ah.prototype;V.open=function(t,e){if(this.readyState!=Hy)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ol(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fu(this)),this.readyState=Hy};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ol(this)),this.g&&(this.readyState=3,Ol(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_R(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function _R(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?fu(this):Ol(this),this.readyState==3&&_R(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,fu(this))};V.Ya=function(t){this.g&&(this.response=t,fu(this))};V.ka=function(){this.g&&fu(this)};function fu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ol(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ol(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ah.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var g2=z.JSON.parse;function Re(t){Qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=vR,this.L=this.M=!1}Ye(Re,Qe);var vR="",y2=/^https?$/i,_2=["POST","PUT"];V=Re.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():_m.g(),this.C=this.u?gE(this.u):gE(_m),this.g.onreadystatechange=ht(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){vE(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=z.FormData&&t instanceof z.FormData,!(0<=VA(_2,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{IR(this),0<this.B&&((this.L=v2(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ht(this.ua,this)):this.A=zy(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){vE(this,s)}};function v2(t){return yo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof by<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,st(this,"timeout"),this.abort(8))};function vE(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,wR(t),Rh(t)}function wR(t){t.F||(t.F=!0,st(t,"complete"),st(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,st(this,"complete"),st(this,"abort"),Rh(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rh(this,!0)),Re.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?ER(this):this.kb())};V.kb=function(){ER(this)};function ER(t){if(t.h&&typeof by<"u"&&(!t.C[1]||An(t)!=4||t.da()!=2)){if(t.v&&An(t)==4)zy(t.La,0,t);else if(st(t,"readystatechange"),An(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(uR)[1]||null;!i&&z.self&&z.self.location&&(i=z.self.location.protocol.slice(0,-1)),r=!y2.test(i?i.toLowerCase():"")}n=r}if(n)st(t,"complete"),st(t,"success");else{t.m=6;try{var s=2<An(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",wR(t)}}finally{Rh(t)}}}}function Rh(t,e){if(t.g){IR(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||st(t,"ready");try{n.onreadystatechange=r}catch{}}}function IR(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function An(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),g2(e)}};function wE(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case vR:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function w2(t){const e={};t=(t.g&&2<=An(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Pl(t[r]))continue;var n=WF(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}FF(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function TR(t){let e="";return Vy(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Qy(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=TR(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):de(t,e,n))}function da(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function SR(t){this.Ga=0,this.j=[],this.l=new _h,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=da("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=da("baseRetryDelayMs",5e3,t),this.hb=da("retryDelaySeedMs",1e4,t),this.eb=da("forwardChannelMaxRetries",2,t),this.xa=da("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new fR(t&&t.concurrentRequestLimit),this.Ja=new f2,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=SR.prototype;V.ra=8;V.H=1;function Yy(t){if(AR(t),t.H==3){var e=t.W++,n=rr(t.I);if(de(n,"SID",t.K),de(n,"RID",e),de(n,"TYPE","terminate"),pu(t,n),e=new du(t,t.l,e),e.L=2,e.A=Th(rr(n)),n=!1,z.navigator&&z.navigator.sendBeacon)try{n=z.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&z.Image&&(new Image().src=e.A,n=!0),n||(e.g=DR(e.l,null),e.g.ha(e.A)),e.G=Date.now(),hu(e)}NR(t)}function Ph(t){t.g&&(Xy(t),t.g.cancel(),t.g=null)}function AR(t){Ph(t),t.u&&(z.clearTimeout(t.u),t.u=null),gd(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function Ch(t){if(!pR(t.i)&&!t.m){t.m=!0;var e=t.Na;kl||KA(),xl||(kl(),xl=!0),By.add(e,t),t.C=0}}function E2(t,e){return mR(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=uu(ht(t.Na,t,e),xR(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new du(this,this.l,t);let s=this.s;if(this.U&&(s?(s=UA(s),$A(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=RR(this,i,e),n=rr(this.I),de(n,"RID",t),de(n,"CVER",22),this.F&&de(n,"X-HTTP-Session-Id",this.F),pu(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(TR(s)))+"&"+e:this.o&&Qy(n,this.o,s)),Ky(this.i,i),this.bb&&de(n,"TYPE","init"),this.P?(de(n,"$req",e),de(n,"SID","null"),i.aa=!0,wm(i,n,null)):wm(i,n,e),this.H=2}}else this.H==3&&(t?EE(this,t):this.j.length==0||pR(this.i)||EE(this))};function EE(t,e){var n;e?n=e.m:n=t.W++;const r=rr(t.I);de(r,"SID",t.K),de(r,"RID",n),de(r,"AID",t.V),pu(t,r),t.o&&t.s&&Qy(r,t.o,t.s),n=new du(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=RR(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ky(t.i,n),wm(n,r,e)}function pu(t,e){t.na&&Vy(t.na,function(n,r){de(e,r,n)}),t.h&&lR({},function(n,r){de(e,r,n)})}function RR(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ht(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{p2(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function PR(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;kl||KA(),xl||(kl(),xl=!0),By.add(e,t),t.A=0}}function Jy(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=uu(ht(t.Ma,t),xR(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,CR(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=uu(ht(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,vt(10),Ph(this),CR(this))};function Xy(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function CR(t){t.g=new du(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=rr(t.wa);de(e,"RID","rpc"),de(e,"SID",t.K),de(e,"AID",t.V),de(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&de(e,"TO",t.qa),de(e,"TYPE","xmlhttp"),pu(t,e),t.o&&t.s&&Qy(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Th(rr(e)),n.u=null,n.S=!0,iR(n,t)}V.ib=function(){this.v!=null&&(this.v=null,Ph(this),Jy(this),vt(19))};function gd(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function kR(t,e){var n=null;if(t.g==e){gd(t),Xy(t),t.g=null;var r=2}else if(Im(t.i,e))n=e.F,gR(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=vh(),st(r,new ZA(r,n)),Ch(t)}else PR(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&E2(t,e)||r==2&&Jy(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Oi(t,5);break;case 4:Oi(t,10);break;case 3:Oi(t,6);break;default:Oi(t,2)}}}function xR(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Oi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ht(t.pb,t);n||(n=new ji("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||pd(n,"https"),Th(n)),m2(n.toString(),r)}else vt(2);t.H=0,t.h&&t.h.za(e),NR(t),AR(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),vt(2)):(this.l.info("Failed to ping google.com"),vt(1))};function NR(t){if(t.H=0,t.ma=[],t.h){const e=yR(t.i);(e.length!=0||t.j.length!=0)&&(dE(t.ma,e),dE(t.ma,t.j),t.i.i.length=0,Dy(t.j),t.j.length=0),t.h.ya()}}function bR(t,e,n){var r=n instanceof ji?rr(n):new ji(n);if(r.g!="")e&&(r.g=e+"."+r.g),md(r,r.m);else{var i=z.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ji(null);r&&pd(s,r),e&&(s.g=e),i&&md(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&de(r,n,e),de(r,"VER",t.ra),pu(t,r),r}function DR(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Re(new Sh({ob:n})):new Re(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function OR(){}V=OR.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function yd(){if(yo&&!(10<=Number(OF)))throw Error("Environmental error: no available transport.")}yd.prototype.g=function(t,e){return new zt(t,e)};function zt(t,e){Qe.call(this),this.g=new SR(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Pl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Pl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new jo(this)}Ye(zt,Qe);zt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;vt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=bR(t,null,t.Y),Ch(t)};zt.prototype.close=function(){Yy(this.g)};zt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=$y(t),t=n);e.j.push(new c2(e.fb++,t)),e.H==3&&Ch(e)};zt.prototype.N=function(){this.g.h=null,delete this.j,Yy(this.g),delete this.g,zt.$.N.call(this)};function VR(t){Wy.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ye(VR,Wy);function LR(){Gy.call(this),this.status=1}Ye(LR,Gy);function jo(t){this.g=t}Ye(jo,OR);jo.prototype.Ba=function(){st(this.g,"a")};jo.prototype.Aa=function(t){st(this.g,new VR(t))};jo.prototype.za=function(t){st(this.g,new LR)};jo.prototype.ya=function(){st(this.g,"b")};function I2(){this.blockSize=-1}function pn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ye(pn,I2);pn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Hf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}pn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Hf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Hf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Hf(this,r),i=0;break}}this.h=i,this.i+=e};pn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function se(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var T2={};function Zy(t){return-128<=t&&128>t?NF(t,function(e){return new se([e|0],0>e?-1:0)}):new se([t|0],0>t?-1:0)}function Rn(t){if(isNaN(t)||!isFinite(t))return no;if(0>t)return tt(Rn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Tm;return new se(e,0)}function MR(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return tt(MR(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Rn(Math.pow(e,8)),r=no,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Rn(Math.pow(e,s)),r=r.R(s).add(Rn(o))):(r=r.R(n),r=r.add(Rn(o)))}return r}var Tm=4294967296,no=Zy(0),Sm=Zy(1),IE=Zy(16777216);V=se.prototype;V.ea=function(){if(Qt(this))return-tt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Tm+r)*e,e*=Tm}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Wn(this))return"0";if(Qt(this))return"-"+tt(this).toString(t);for(var e=Rn(Math.pow(t,6)),n=this,r="";;){var i=vd(n,e).g;n=_d(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Wn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Wn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Qt(t){return t.h==-1}V.X=function(t){return t=_d(this,t),Qt(t)?-1:Wn(t)?0:1};function tt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new se(n,~t.h).add(Sm)}V.abs=function(){return Qt(this)?tt(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new se(n,n[n.length-1]&-2147483648?-1:0)};function _d(t,e){return t.add(tt(e))}V.R=function(t){if(Wn(this)||Wn(t))return no;if(Qt(this))return Qt(t)?tt(this).R(tt(t)):tt(tt(this).R(t));if(Qt(t))return tt(this.R(tt(t)));if(0>this.X(IE)&&0>t.X(IE))return Rn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Zu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Zu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Zu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Zu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new se(n,0)};function Zu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ha(t,e){this.g=t,this.h=e}function vd(t,e){if(Wn(e))throw Error("division by zero");if(Wn(t))return new ha(no,no);if(Qt(t))return e=vd(tt(t),e),new ha(tt(e.g),tt(e.h));if(Qt(e))return e=vd(t,tt(e)),new ha(tt(e.g),e.h);if(30<t.g.length){if(Qt(t)||Qt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Sm,r=e;0>=r.X(t);)n=TE(n),r=TE(r);var i=Es(n,1),s=Es(r,1);for(r=Es(r,2),n=Es(n,2);!Wn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Es(r,1),n=Es(n,1)}return e=_d(t,i.R(e)),new ha(i,e)}for(i=no;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Rn(n),o=s.R(e);Qt(o)||0<o.X(t);)n-=r,s=Rn(n),o=s.R(e);Wn(s)&&(s=Sm),i=i.add(s),t=_d(t,o)}return new ha(i,t)}V.gb=function(t){return vd(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new se(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new se(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new se(n,this.h^t.h)};function TE(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new se(n,t.h)}function Es(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new se(i,t.h)}yd.prototype.createWebChannel=yd.prototype.g;zt.prototype.send=zt.prototype.u;zt.prototype.open=zt.prototype.m;zt.prototype.close=zt.prototype.close;wh.NO_ERROR=0;wh.TIMEOUT=8;wh.HTTP_ERROR=6;eR.COMPLETE="complete";tR.EventType=cu;cu.OPEN="a";cu.CLOSE="b";cu.ERROR="c";cu.MESSAGE="d";Qe.prototype.listen=Qe.prototype.O;Re.prototype.listenOnce=Re.prototype.P;Re.prototype.getLastError=Re.prototype.Sa;Re.prototype.getLastErrorCode=Re.prototype.Ia;Re.prototype.getStatus=Re.prototype.da;Re.prototype.getResponseJson=Re.prototype.Wa;Re.prototype.getResponseText=Re.prototype.ja;Re.prototype.send=Re.prototype.ha;Re.prototype.setWithCredentials=Re.prototype.Oa;pn.prototype.digest=pn.prototype.l;pn.prototype.reset=pn.prototype.reset;pn.prototype.update=pn.prototype.j;se.prototype.add=se.prototype.add;se.prototype.multiply=se.prototype.R;se.prototype.modulo=se.prototype.gb;se.prototype.compare=se.prototype.X;se.prototype.toNumber=se.prototype.ea;se.prototype.toString=se.prototype.toString;se.prototype.getBits=se.prototype.D;se.fromNumber=Rn;se.fromString=MR;var S2=function(){return new yd},A2=function(){return vh()},Qf=wh,R2=eR,P2=fs,SE={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ec=tR,C2=Re,k2=pn,ro=se;const AE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo="10.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new th("@firebase/firestore");function Cs(){return Kr.logLevel}function x2(t){Kr.setLogLevel(t)}function C(t,...e){if(Kr.logLevel<=Q.DEBUG){const n=e.map(e_);Kr.debug(`Firestore (${zo}): ${t}`,...n)}}function be(t,...e){if(Kr.logLevel<=Q.ERROR){const n=e.map(e_);Kr.error(`Firestore (${zo}): ${t}`,...n)}}function mn(t,...e){if(Kr.logLevel<=Q.WARN){const n=e.map(e_);Kr.warn(`Firestore (${zo}): ${t}`,...n)}}function e_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t="Unexpected state"){const e=`FIRESTORE (${zo}) INTERNAL ASSERTION FAILED: `+t;throw be(e),new Error(e)}function $(t,e){t||L()}function N2(t,e){t||L()}function O(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends Et{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class b2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class D2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class O2{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new He;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new He,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new He)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($(typeof r.accessToken=="string"),new FR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string"),new Ge(e)}}class V2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class L2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new V2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class M2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($(typeof n.token=="string"),this.R=n.token,new M2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=U2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function q(t,e){return t<e?-1:t>e?1:0}function _o(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function $R(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new R(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new R(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new pe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new pe(0,0))}static max(){return new B(new pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n,r){n===void 0?n=0:n>e.length&&L(),r===void 0?r=e.length-n:r>e.length-n&&L(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Vl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Y extends Vl{construct(e,n,r){return new Y(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new R(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Y(n)}static emptyPath(){return new Y([])}}const $2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends Vl{construct(e,n,r){return new ge(e,n,r)}static isValidIdentifier(e){return $2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new R(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new R(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new R(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new R(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(n)}static emptyPath(){return new ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.path=e}static fromPath(e){return new D(Y.fromString(e))}static fromName(e){return new D(Y.fromString(e).popFirst(5))}static empty(){return new D(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Y.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new D(new Y(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Am(t){return t.fields.find(e=>e.kind===2)}function Ei(t){return t.fields.filter(e=>e.kind!==2)}wd.UNKNOWN_ID=-1;class Tc{constructor(e,n){this.fieldPath=e,this.kind=n}}class Ll{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Ll(0,qt.min())}}function BR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new pe(n+1,0):new pe(n,r));return new qt(i,D.empty(),e)}function jR(t){return new qt(t.readTime,t.key,-1)}class qt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new qt(B.min(),D.empty(),-1)}static max(){return new qt(B.max(),D.empty(),-1)}}function t_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=D.comparator(t.documentKey,e.documentKey),n!==0?n:q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==zR)throw t;C("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(i=>i?w.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new w((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new w((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new He,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Ga(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=n_(r.target.error);this.V.reject(new Ga(e,i))}}static open(e,n,r,i){try{return new kh(n,e.transaction(i,r))}catch(s){throw new Ga(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(C("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new j2(n)}}class Jt{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Jt.S(_e())===12.2&&be("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return C("SimpleDb","Removing database:",e),Ti(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!yl())return!1;if(Jt.C())return!0;const e=_e(),n=Jt.S(e),r=0<n&&n<10,i=Jt.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Ga(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new R(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new R(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ga(e,o))},i.onupgradeneeded=s=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=kh.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),w.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(C("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class B2{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Ti(this.k.delete())}}class Ga extends R{constructor(e,n){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function di(t){return t.name==="IndexedDbTransactionError"}class j2{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(C("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ti(r)}add(e){return C("SimpleDb","ADD",this.store.name,e,e),Ti(this.store.add(e))}get(e){return Ti(this.store.get(e)).next(n=>(n===void 0&&(n=null),C("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return C("SimpleDb","DELETE",this.store.name,e),Ti(this.store.delete(e))}count(){return C("SimpleDb","COUNT",this.store.name),Ti(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new w((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new w((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){C("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new w((r,i)=>{n.onerror=s=>{const o=n_(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new w((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new B2(a),u=n(a.primaryKey,a.value,l);if(u instanceof w){const c=u.catch(d=>(l.done(),w.reject(d)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>w.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ti(t){return new w((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=n_(r.target.error);n(i)}})}let RE=!1;function n_(t){const e=Jt.S(_e());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new R("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return RE||(RE=!0,setTimeout(()=>{throw r},0)),r}}return t}class z2{constructor(e,n){this.asyncQueue=e,this.X=n,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){C("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{C("IndexBackfiller",`Documents written: ${await this.X.te()}`)}catch(n){di(n)?C("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await ci(n)}await this.ee(6e4)})}}class q2{constructor(e,n){this.localStore=e,this.persistence=n}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.ne(n,e))}ne(e,n){const r=new Set;let i=n,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return C("IndexBackfiller",`Processing collection: ${o}`),this.re(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}re(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ie(i,s)).next(a=>(C("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ie(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=jR(s);t_(o,r)>0&&(r=o)}),new qt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Nt._e=-1;function mu(t){return t==null}function Ml(t){return t===0&&1/t==-1/0}function WR(t){return typeof t=="number"&&Number.isInteger(t)&&!Ml(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=PE(e)),e=W2(t.get(n),e);return PE(e)}function W2(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function PE(t){return t+""}function Pn(t){const e=t.length;if($(e>=2),e===2)return $(t.charAt(0)===""&&t.charAt(1)===""),Y.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&L(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:L()}s=o+2}return new Y(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t,e){return[t,It(e)]}function GR(t,e,n){return[t,It(e),n]}const G2={},K2=["prefixPath","collectionGroup","readTime","documentId"],H2=["prefixPath","collectionGroup","documentId"],Q2=["collectionGroup","readTime","prefixPath","documentId"],Y2=["canonicalId","targetId"],J2=["targetId","path"],X2=["path","targetId"],Z2=["collectionId","parent"],eU=["indexId","uid"],tU=["uid","sequenceNumber"],nU=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],rU=["indexId","uid","orderedDocumentKey"],iU=["userId","collectionPath","documentId"],sU=["userId","collectionPath","largestBatchId"],oU=["userId","collectionGroup","largestBatchId"],KR=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],aU=[...KR,"documentOverlays"],HR=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],QR=HR,lU=[...QR,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm extends qR{constructor(e,n){super(),this.ae=e,this.currentSequenceNumber=n}}function Je(t,e){const n=O(t);return Jt.M(n.ae,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function YR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tc(this.root,e,this.comparator,!1)}getReverseIterator(){return new tc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tc(this.root,e,this.comparator,!0)}}class tc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??et.RED,this.left=i??et.EMPTY,this.right=s??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new et(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const e=this.left.check();if(e!==this.right.check())throw L();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(e,n,r,i,s){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xE(this.data.getIterator())}getIteratorFrom(e){return new xE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new oe(this.comparator);return n.data=e,n}}class xE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Is(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new bt([])}unionWith(e){let n=new oe(ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _o(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uU(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new JR("Invalid base64 string: "+s):s}}(e);return new je(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}je.EMPTY_BYTE_STRING=new je("");const cU=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hr(t){if($(!!t),typeof t=="string"){let e=0;const n=cU.exec(t);if($(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qr(t){return typeof t=="string"?je.fromBase64String(t):je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function r_(t){const e=t.mapValue.fields.__previous_value__;return xh(e)?r_(e):e}function Fl(t){const e=Hr(t.mapValue.fields.__local_write_time__.timestampValue);return new pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dU{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Yr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Yr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ac={nullValue:"NULL_VALUE"};function Xi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xh(t)?4:XR(t)?9007199254740991:10:L()}function Ln(t,e){if(t===e)return!0;const n=Xi(t);if(n!==Xi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fl(t).isEqual(Fl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Hr(i.timestampValue),a=Hr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Qr(i.bytesValue).isEqual(Qr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),a=Se(s.doubleValue);return o===a?Ml(o)===Ml(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return _o(t.arrayValue.values||[],e.arrayValue.values||[],Ln);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(kE(o)!==kE(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ln(o[l],a[l])))return!1;return!0}(t,e);default:return L()}}function Ul(t,e){return(t.values||[]).find(n=>Ln(n,e))!==void 0}function Jr(t,e){if(t===e)return 0;const n=Xi(t),r=Xi(e);if(n!==r)return q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return q(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Se(s.integerValue||s.doubleValue),l=Se(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return NE(t.timestampValue,e.timestampValue);case 4:return NE(Fl(t),Fl(e));case 5:return q(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Qr(s),l=Qr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=q(a[u],l[u]);if(c!==0)return c}return q(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=q(Se(s.latitude),Se(o.latitude));return a!==0?a:q(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Jr(a[u],l[u]);if(c)return c}return q(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===xr.mapValue&&o===xr.mapValue)return 0;if(s===xr.mapValue)return 1;if(o===xr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const h=q(l[d],c[d]);if(h!==0)return h;const m=Jr(a[l[d]],u[c[d]]);if(m!==0)return m}return q(l.length,c.length)}(t.mapValue,e.mapValue);default:throw L()}}function NE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return q(t,e);const n=Hr(t),r=Hr(e),i=q(n.seconds,r.seconds);return i!==0?i:q(n.nanos,r.nanos)}function vo(t){return Pm(t)}function Pm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return D.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Pm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Pm(n.fields[o])}`;return i+"}"}(t.mapValue):L()}function Zi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Cm(t){return!!t&&"integerValue"in t}function $l(t){return!!t&&"arrayValue"in t}function bE(t){return!!t&&"nullValue"in t}function DE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Rc(t){return!!t&&"mapValue"in t}function Ka(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ps(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ka(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ka(t.arrayValue.values[n]);return e}return Object.assign({},t)}function XR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function hU(t){return"nullValue"in t?Ac:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Zi(Yr.empty(),D.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:L()}function fU(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Zi(Yr.empty(),D.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?xr:L()}function OE(t,e){const n=Jr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function VE(t,e){const n=Jr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.value=e}static empty(){return new nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Rc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ka(n)}setAll(e){let n=ge.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ka(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Rc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Rc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ps(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new nt(Ka(this.value))}}function ZR(t){const e=[];return ps(t.fields,(n,r)=>{const i=new ge([n]);if(Rc(r)){const s=ZR(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new he(e,0,B.min(),B.min(),B.min(),nt.empty(),0)}static newFoundDocument(e,n,r,i){return new he(e,1,n,B.min(),r,i,0)}static newNoDocument(e,n){return new he(e,2,n,B.min(),B.min(),nt.empty(),0)}static newUnknownDocument(e,n){return new he(e,3,n,B.min(),B.min(),nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof he&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new he(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n){this.position=e,this.inclusive=n}}function LE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=D.comparator(D.fromName(o.referenceValue),n.key):r=Jr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ME(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n="asc"){this.field=e,this.dir=n}}function pU(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{}class J extends e1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new mU(e,n,r):n==="array-contains"?new _U(e,r):n==="in"?new o1(e,r):n==="not-in"?new vU(e,r):n==="array-contains-any"?new wU(e,r):new J(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gU(e,r):new yU(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Jr(n,this.value)):n!==null&&Xi(this.value)===Xi(n)&&this.matchesComparison(Jr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class re extends e1{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new re(e,n)}matches(e){return wo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function wo(t){return t.op==="and"}function km(t){return t.op==="or"}function i_(t){return t1(t)&&wo(t)}function t1(t){for(const e of t.filters)if(e instanceof re)return!1;return!0}function xm(t){if(t instanceof J)return t.field.canonicalString()+t.op.toString()+vo(t.value);if(i_(t))return t.filters.map(e=>xm(e)).join(",");{const e=t.filters.map(n=>xm(n)).join(",");return`${t.op}(${e})`}}function n1(t,e){return t instanceof J?function(r,i){return i instanceof J&&r.op===i.op&&r.field.isEqual(i.field)&&Ln(r.value,i.value)}(t,e):t instanceof re?function(r,i){return i instanceof re&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&n1(o,i.filters[a]),!0):!1}(t,e):void L()}function r1(t,e){const n=t.filters.concat(e);return re.create(n,t.op)}function i1(t){return t instanceof J?function(n){return`${n.field.canonicalString()} ${n.op} ${vo(n.value)}`}(t):t instanceof re?function(n){return n.op.toString()+" {"+n.getFilters().map(i1).join(" ,")+"}"}(t):"Filter"}class mU extends J{constructor(e,n,r){super(e,n,r),this.key=D.fromName(r.referenceValue)}matches(e){const n=D.comparator(e.key,this.key);return this.matchesComparison(n)}}class gU extends J{constructor(e,n){super(e,"in",n),this.keys=s1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yU extends J{constructor(e,n){super(e,"not-in",n),this.keys=s1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function s1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>D.fromName(r.referenceValue))}class _U extends J{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $l(n)&&Ul(n.arrayValue,this.value)}}class o1 extends J{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ul(this.value.arrayValue,n)}}class vU extends J{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ul(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ul(this.value.arrayValue,n)}}class wU extends J{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$l(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ul(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EU{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Nm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new EU(t,e,n,r,i,s,o)}function es(t){const e=O(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),mu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vo(r)).join(",")),e.ce=n}return e.ce}function gu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pU(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!n1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ME(t.startAt,e.startAt)&&ME(t.endAt,e.endAt)}function Ed(t){return D.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Id(t,e){return t.filters.filter(n=>n instanceof J&&n.field.isEqual(e))}function FE(t,e,n){let r=Ac,i=!0;for(const s of Id(t,e)){let o=Ac,a=!0;switch(s.op){case"<":case"<=":o=hU(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Ac}OE({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];OE({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function UE(t,e,n){let r=xr,i=!0;for(const s of Id(t,e)){let o=xr,a=!0;switch(s.op){case">=":case">":o=fU(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=xr}VE({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];VE({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function a1(t,e,n,r,i,s,o,a){return new ur(t,e,n,r,i,s,o,a)}function qo(t){return new ur(t)}function $E(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function s_(t){return t.collectionGroup!==null}function io(t){const e=O(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new oe(ge.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Bl(s,r))}),n.has(ge.keyField().canonicalString())||e.le.push(new Bl(ge.keyField(),r))}return e.le}function Tt(t){const e=O(t);return e.he||(e.he=IU(e,io(t))),e.he}function IU(t,e){if(t.limitType==="F")return Nm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Bl(i.field,s)});const n=t.endAt?new Xr(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xr(t.startAt.position,t.startAt.inclusive):null;return Nm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function bm(t,e){const n=t.filters.concat([e]);return new ur(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Td(t,e,n){return new ur(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yu(t,e){return gu(Tt(t),Tt(e))&&t.limitType===e.limitType}function l1(t){return`${es(Tt(t))}|lt:${t.limitType}`}function ks(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>i1(i)).join(", ")}]`),mu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>vo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>vo(i)).join(",")),`Target(${r})`}(Tt(t))}; limitType=${t.limitType})`}function _u(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):D.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of io(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=LE(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,io(r),i)||r.endAt&&!function(o,a,l){const u=LE(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,io(r),i))}(t,e)}function u1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function c1(t){return(e,n)=>{let r=!1;for(const i of io(t)){const s=TU(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function TU(t,e,n){const r=t.field.isKeyField()?D.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Jr(l,u):L()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return YR(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SU=new ue(D.comparator);function Dt(){return SU}const d1=new ue(D.comparator);function ka(...t){let e=d1;for(const n of t)e=e.insert(n.key,n);return e}function h1(t){let e=d1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Cn(){return Ha()}function f1(){return Ha()}function Ha(){return new hi(t=>t.toString(),(t,e)=>t.isEqual(e))}const AU=new ue(D.comparator),RU=new oe(D.comparator);function W(...t){let e=RU;for(const n of t)e=e.add(n);return e}const PU=new oe(q);function o_(){return PU}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ml(e)?"-0":e}}function m1(t){return{integerValue:""+t}}function g1(t,e){return WR(e)?m1(e):p1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(){this._=void 0}}function CU(t,e,n){return t instanceof Eo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&xh(s)&&(s=r_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ts?_1(t,e):t instanceof ns?v1(t,e):function(i,s){const o=y1(i,s),a=BE(o)+BE(i.Ie);return Cm(o)&&Cm(i.Ie)?m1(a):p1(i.serializer,a)}(t,e)}function kU(t,e,n){return t instanceof ts?_1(t,e):t instanceof ns?v1(t,e):n}function y1(t,e){return t instanceof Io?function(r){return Cm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Eo extends Nh{}class ts extends Nh{constructor(e){super(),this.elements=e}}function _1(t,e){const n=w1(e);for(const r of t.elements)n.some(i=>Ln(i,r))||n.push(r);return{arrayValue:{values:n}}}class ns extends Nh{constructor(e){super(),this.elements=e}}function v1(t,e){let n=w1(e);for(const r of t.elements)n=n.filter(i=>!Ln(i,r));return{arrayValue:{values:n}}}class Io extends Nh{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function BE(t){return Se(t.integerValue||t.doubleValue)}function w1(t){return $l(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n){this.field=e,this.transform=n}}function xU(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ts&&i instanceof ts||r instanceof ns&&i instanceof ns?_o(r.elements,i.elements,Ln):r instanceof Io&&i instanceof Io?Ln(r.Ie,i.Ie):r instanceof Eo&&i instanceof Eo}(t.transform,e.transform)}class NU{constructor(e,n){this.version=e,this.transformResults=n}}class ye{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ye}static exists(e){return new ye(void 0,e)}static updateTime(e){return new ye(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bh{}function E1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Go(t.key,ye.none()):new Wo(t.key,t.data,ye.none());{const n=t.data,r=nt.empty();let i=new oe(ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new cr(t.key,r,new bt(i.toArray()),ye.none())}}function bU(t,e,n){t instanceof Wo?function(i,s,o){const a=i.value.clone(),l=zE(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof cr?function(i,s,o){if(!Pc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=zE(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(I1(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Qa(t,e,n,r){return t instanceof Wo?function(s,o,a,l){if(!Pc(s.precondition,o))return a;const u=s.value.clone(),c=qE(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof cr?function(s,o,a,l){if(!Pc(s.precondition,o))return a;const u=qE(s.fieldTransforms,l,o),c=o.data;return c.setAll(I1(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return Pc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function DU(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=y1(r.transform,i||null);s!=null&&(n===null&&(n=nt.empty()),n.set(r.field,s))}return n||null}function jE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_o(r,i,(s,o)=>xU(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wo extends bh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class cr extends bh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function I1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zE(t,e,n){const r=new Map;$(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,kU(o,a,n[i]))}return r}function qE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,CU(s,o,e))}return r}class Go extends bh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class a_ extends bh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&bU(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=f1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=E1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&_o(this.mutations,e.mutations,(n,r)=>jE(n,r))&&_o(this.baseMutations,e.baseMutations,(n,r)=>jE(n,r))}}class u_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){$(e.mutations.length===r.length);let i=function(){return AU}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new u_(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OU{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,Z;function T1(t){switch(t){default:return L();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function S1(t){if(t===void 0)return be("GRPC error has no .code"),T.UNKNOWN;switch(t){case Ve.OK:return T.OK;case Ve.CANCELLED:return T.CANCELLED;case Ve.UNKNOWN:return T.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return T.INTERNAL;case Ve.UNAVAILABLE:return T.UNAVAILABLE;case Ve.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ve.NOT_FOUND:return T.NOT_FOUND;case Ve.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ve.ABORTED:return T.ABORTED;case Ve.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ve.DATA_LOSS:return T.DATA_LOSS;default:return L()}}(Z=Ve||(Ve={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VU=new ro([4294967295,4294967295],0);function WE(t){const e=A1().encode(t),n=new k2;return n.update(e),new Uint8Array(n.digest())}function GE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ro([n,r],0),new ro([i,s],0)]}class d_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xa(`Invalid padding: ${n}`);if(r<0)throw new xa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xa(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=ro.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(ro.fromNumber(r)));return i.compare(VU)===1&&(i=new ro([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=WE(e),[r,i]=GE(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new d_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=WE(e),[r,i]=GE(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Eu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new wu(B.min(),i,new ue(q),Dt(),W())}}class Eu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Eu(r,n,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class R1{constructor(e,n){this.targetId=e,this.fe=n}}class P1{constructor(e,n,r=je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class KE{constructor(){this.ge=0,this.pe=QE(),this.ye=je.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=W(),n=W(),r=W();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:L()}}),new Eu(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=QE()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,$(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class LU{constructor(e){this.Le=e,this.ke=new Map,this.qe=Dt(),this.Qe=HE(),this.Ke=new ue(q)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:L()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Ed(s))if(r===0){const o=new D(s.path);this.We(n,o,he.newNoDocument(o,B.min()))}else $(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Qr(r).toUint8Array()}catch(l){if(l instanceof JR)return mn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new d_(o,i,s)}catch(l){return mn(l instanceof xa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Ed(a.target)){const l=new D(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,he.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=W();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new wu(e,n,this.Ke,this.qe,r);return this.qe=Dt(),this.Qe=HE(),this.Ke=new ue(q),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new KE,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new oe(q),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||C("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new KE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function HE(){return new ue(D.comparator)}function QE(){return new ue(D.comparator)}const MU={asc:"ASCENDING",desc:"DESCENDING"},FU={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},UU={and:"AND",or:"OR"};class $U{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Dm(t,e){return t.useProto3Json||mu(e)?e:{value:e}}function To(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function C1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function BU(t,e){return To(t,e.toTimestamp())}function De(t){return $(!!t),B.fromTimestamp(function(n){const r=Hr(n);return new pe(r.seconds,r.nanos)}(t))}function h_(t,e){return Om(t,e).canonicalString()}function Om(t,e){const n=function(i){return new Y(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function k1(t){const e=Y.fromString(t);return $(U1(e)),e}function jl(t,e){return h_(t.databaseId,e.path)}function Dn(t,e){const n=k1(e);if(n.get(1)!==t.databaseId.projectId)throw new R(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new R(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new D(b1(n))}function x1(t,e){return h_(t.databaseId,e)}function N1(t){const e=k1(t);return e.length===4?Y.emptyPath():b1(e)}function Vm(t){return new Y(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function b1(t){return $(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function YE(t,e,n){return{name:jl(t,e),fields:n.value.mapValue.fields}}function D1(t,e,n){const r=Dn(t,e.name),i=De(e.updateTime),s=e.createTime?De(e.createTime):B.min(),o=new nt({mapValue:{fields:e.fields}}),a=he.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function jU(t,e){return"found"in e?function(r,i){$(!!i.found),i.found.name,i.found.updateTime;const s=Dn(r,i.found.name),o=De(i.found.updateTime),a=i.found.createTime?De(i.found.createTime):B.min(),l=new nt({mapValue:{fields:i.found.fields}});return he.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){$(!!i.missing),$(!!i.readTime);const s=Dn(r,i.missing),o=De(i.readTime);return he.newNoDocument(s,o)}(t,e):L()}function zU(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:L()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?($(c===void 0||typeof c=="string"),je.fromBase64String(c||"")):($(c===void 0||c instanceof Uint8Array),je.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?T.UNKNOWN:S1(u.code);return new R(c,u.message||"")}(o);n=new P1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Dn(t,r.document.name),s=De(r.document.updateTime),o=r.document.createTime?De(r.document.createTime):B.min(),a=new nt({mapValue:{fields:r.document.fields}}),l=he.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Cc(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Dn(t,r.document),s=r.readTime?De(r.readTime):B.min(),o=he.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Cc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Dn(t,r.document),s=r.removedTargetIds||[];n=new Cc([],s,i,null)}else{if(!("filter"in e))return L();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new OU(i,s),a=r.targetId;n=new R1(a,o)}}return n}function zl(t,e){let n;if(e instanceof Wo)n={update:YE(t,e.key,e.value)};else if(e instanceof Go)n={delete:jl(t,e.key)};else if(e instanceof cr)n={update:YE(t,e.key,e.data),updateMask:QU(e.fieldMask)};else{if(!(e instanceof a_))return L();n={verify:jl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Eo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ts)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ns)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Io)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw L()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:BU(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:L()}(t,e.precondition)),n}function Lm(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?ye.updateTime(De(s.updateTime)):s.exists!==void 0?ye.exists(s.exists):ye.none()}(e.currentDocument):ye.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)$(a.setToServerValue==="REQUEST_TIME"),l=new Eo;else if("appendMissingElements"in a){const c=a.appendMissingElements.values||[];l=new ts(c)}else if("removeAllFromArray"in a){const c=a.removeAllFromArray.values||[];l=new ns(c)}else"increment"in a?l=new Io(o,a.increment):L();const u=ge.fromServerFormat(a.fieldPath);return new vu(u,l)}(t,i)):[];if(e.update){e.update.name;const i=Dn(t,e.update.name),s=new nt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new bt(u.map(c=>ge.fromServerFormat(c)))}(e.updateMask);return new cr(i,s,o,n,r)}return new Wo(i,s,n,r)}if(e.delete){const i=Dn(t,e.delete);return new Go(i,n)}if(e.verify){const i=Dn(t,e.verify);return new a_(i,n)}return L()}function qU(t,e){return t&&t.length>0?($(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?De(i.updateTime):De(s);return o.isEqual(B.min())&&(o=De(s)),new NU(o,i.transformResults||[])}(n,e))):[]}function O1(t,e){return{documents:[x1(t,e.path)]}}function V1(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=x1(t,i);const s=function(u){if(u.length!==0)return F1(re.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:xs(h.field),direction:GU(h.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Dm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function L1(t){let e=N1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){$(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(d){const h=M1(d);return h instanceof re&&i_(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(h=>function(y){return new Bl(Ns(y.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(d){let h;return h=typeof d=="object"?d.value:d,mu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(d){const h=!!d.before,m=d.values||[];return new Xr(m,h)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const h=!d.before,m=d.values||[];return new Xr(m,h)}(n.endAt)),a1(e,i,o,s,a,"F",l,u)}function WU(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function M1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ns(n.unaryFilter.field);return J.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ns(n.unaryFilter.field);return J.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ns(n.unaryFilter.field);return J.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ns(n.unaryFilter.field);return J.create(o,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(t):t.fieldFilter!==void 0?function(n){return J.create(Ns(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return re.create(n.compositeFilter.filters.map(r=>M1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(n.compositeFilter.op))}(t):L()}function GU(t){return MU[t]}function KU(t){return FU[t]}function HU(t){return UU[t]}function xs(t){return{fieldPath:t.canonicalString()}}function Ns(t){return ge.fromServerFormat(t.fieldPath)}function F1(t){return t instanceof J?function(n){if(n.op==="=="){if(DE(n.value))return{unaryFilter:{field:xs(n.field),op:"IS_NAN"}};if(bE(n.value))return{unaryFilter:{field:xs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(DE(n.value))return{unaryFilter:{field:xs(n.field),op:"IS_NOT_NAN"}};if(bE(n.value))return{unaryFilter:{field:xs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xs(n.field),op:KU(n.op),value:n.value}}}(t):t instanceof re?function(n){const r=n.getFilters().map(i=>F1(i));return r.length===1?r[0]:{compositeFilter:{op:HU(n.op),filters:r}}}(t):L()}function QU(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function U1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,r,i,s=B.min(),o=B.min(),a=je.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e){this.ct=e}}function YU(t,e){let n;if(e.document)n=D1(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=D.fromSegments(e.noDocument.path),i=is(e.noDocument.readTime);n=he.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return L();{const r=D.fromSegments(e.unknownDocument.path),i=is(e.unknownDocument.version);n=he.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new pe(i[0],i[1]);return B.fromTimestamp(s)}(e.readTime)),n}function JE(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Sd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:jl(s,o.key),fields:o.data.value.mapValue.fields,updateTime:To(s,o.version.toTimestamp()),createTime:To(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:rs(e.version)};else{if(!e.isUnknownDocument())return L();r.unknownDocument={path:n.path.toArray(),version:rs(e.version)}}return r}function Sd(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function rs(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function is(t){const e=new pe(t.seconds,t.nanoseconds);return B.fromTimestamp(e)}function Si(t,e){const n=(e.baseMutations||[]).map(s=>Lm(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Lm(t.ct,s)),i=pe.fromMillis(e.localWriteTimeMs);return new l_(e.batchId,i,n,r)}function Na(t){const e=is(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?is(t.lastLimboFreeSnapshotVersion):B.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return $(s.documents.length===1),Tt(qo(N1(s.documents[0])))}(t.query):function(s){return Tt(L1(s))}(t.query),new Gn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,je.fromBase64String(t.resumeToken))}function B1(t,e){const n=rs(e.snapshotVersion),r=rs(e.lastLimboFreeSnapshotVersion);let i;i=Ed(e.target)?O1(t.ct,e.target):V1(t.ct,e.target).ut;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:es(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function f_(t){const e=L1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Td(e,e.limit,"L"):e}function Yf(t,e){return new c_(e.largestBatchId,Lm(t.ct,e.overlayMutation))}function XE(t,e){const n=e.path.lastSegment();return[t,It(e.path.popLast()),n]}function ZE(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:rs(r.readTime),documentKey:It(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JU{getBundleMetadata(e,n){return eI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:is(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return eI(e).put(function(i){return{bundleId:i.id,createTime:rs(De(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return tI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:f_(s.bundledQuery),readTime:is(s.readTime)}}(r)})}saveNamedQuery(e,n){return tI(e).put(function(i){return{name:i.name,readTime:rs(De(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function eI(t){return Je(t,"bundles")}function tI(t){return Je(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Dh(e,r)}getOverlay(e,n){return fa(e).get(XE(this.userId,n)).next(r=>r?Yf(this.serializer,r):null)}getOverlays(e,n){const r=Cn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new c_(n,o);i.push(this.ht(e,a))}),w.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(It(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(fa(e).H("collectionPathOverlayIndex",a))}),w.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Cn(),s=It(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return fa(e).W("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=Yf(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Cn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return fa(e).Y({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const d=Yf(this.serializer,u);s.size()<i||d.largestBatchId===o?(s.set(d.getKey(),d),o=d.largestBatchId):c.done()}).next(()=>s)}ht(e,n){return fa(e).put(function(i,s,o){const[a,l,u]=XE(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:zl(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function fa(t){return Je(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Se(e.integerValue));else if("doubleValue"in e){const r=Se(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),Ml(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(n,20),typeof r=="string"?n.At(r):(n.At(`${r.seconds||""}`),n.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(Qr(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?XR(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):L()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),D.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}Ai.bt=new Ai;function XU(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function nI(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=XU(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class ZU{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Bt(e){const n=this.Lt(e),r=nI(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Lt(e),r=nI(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class e${constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class t${constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class pa{constructor(){this.Gt=new ZU,this.zt=new e$(this.Gt),this.jt=new t$(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ri(this.indexId,this.documentKey,this.arrayValue,r)}}function mr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=rI(t.arrayValue,e.arrayValue),n!==0?n:(n=rI(t.directionalValue,e.directionalValue),n!==0?n:D.comparator(t.documentKey,e.documentKey)))}function rI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this.Yt=new oe((n,r)=>ge.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if($(e.collectionGroup===this.collectionId),this.en)return!1;const n=Am(e);if(n!==void 0&&!this.nn(n))return!1;const r=Ei(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.rn(a,l)||!this.sn(this.Zt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new oe(ge.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Tc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Tc(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Tc(r.field,r.dir==="asc"?0:1)));return new wd(wd.UNKNOWN_ID,this.collectionId,n,Ll.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t){var e,n;if($(t instanceof J||t instanceof re),t instanceof J){if(t instanceof o1){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>J.create(t.field,"==",s)))||[];return re.create(i,"or")}return t}const r=t.filters.map(i=>j1(i));return re.create(r,t.op)}function n$(t){if(t.getFilters().length===0)return[];const e=Um(j1(t));return $(z1(e)),Mm(e)||Fm(e)?[e]:e.getFilters()}function Mm(t){return t instanceof J}function Fm(t){return t instanceof re&&i_(t)}function z1(t){return Mm(t)||Fm(t)||function(n){if(n instanceof re&&km(n)){for(const r of n.getFilters())if(!Mm(r)&&!Fm(r))return!1;return!0}return!1}(t)}function Um(t){if($(t instanceof J||t instanceof re),t instanceof J)return t;if(t.filters.length===1)return Um(t.filters[0]);const e=t.filters.map(r=>Um(r));let n=re.create(e,t.op);return n=Ad(n),z1(n)?n:($(n instanceof re),$(wo(n)),$(n.filters.length>1),n.filters.reduce((r,i)=>p_(r,i)))}function p_(t,e){let n;return $(t instanceof J||t instanceof re),$(e instanceof J||e instanceof re),n=t instanceof J?e instanceof J?function(i,s){return re.create([i,s],"and")}(t,e):sI(t,e):e instanceof J?sI(e,t):function(i,s){if($(i.filters.length>0&&s.filters.length>0),wo(i)&&wo(s))return r1(i,s.getFilters());const o=km(i)?i:s,a=km(i)?s:i,l=o.filters.map(u=>p_(u,a));return re.create(l,"or")}(t,e),Ad(n)}function sI(t,e){if(wo(e))return r1(e,t.getFilters());{const n=e.filters.map(r=>p_(t,r));return re.create(n,"or")}}function Ad(t){if($(t instanceof J||t instanceof re),t instanceof J)return t;const e=t.getFilters();if(e.length===1)return Ad(e[0]);if(t1(t))return t;const n=e.map(i=>Ad(i)),r=[];return n.forEach(i=>{i instanceof J?r.push(i):i instanceof re&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:re.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r${constructor(){this._n=new m_}addToCollectionParentIndex(e,n){return this._n.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}deleteAllFieldIndexes(e){return w.resolve()}createTargetIndexes(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(qt.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(qt.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class m_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new oe(Y.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new oe(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=new Uint8Array(0);class i${constructor(e,n){this.databaseId=n,this.an=new m_,this.un=new hi(r=>es(r),(r,i)=>gu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:It(i)};return oI(e).put(s)}return w.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[$R(n),""],!1,!0);return oI(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Pn(o.parent))}return r})}addFieldIndex(e,n){const r=ma(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Ss(e);return s.next(a=>{o.put(ZE(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=ma(e),i=Ss(e),s=Ts(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=ma(e),r=Ts(e),i=Ss(e);return n.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(e,n){return w.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new iI(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Ts(e);let i=!0;const s=new Map;return w.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=W();const a=[];return w.forEach(s,(l,u)=>{C("IndexedDbIndexManager",`Using index ${function(g){return`id=${g.indexId}|cg=${g.collectionGroup}|f=${g.fields.map(I=>`${I.fieldPath}:${I.kind}`).join(",")}`}(l)} to execute ${es(n)}`);const c=function(g,I){const P=Am(I);if(P===void 0)return null;for(const k of Id(g,P.fieldPath))switch(k.op){case"array-contains-any":return k.value.arrayValue.values||[];case"array-contains":return[k.value]}return null}(u,l),d=function(g,I){const P=new Map;for(const k of Ei(I))for(const b of Id(g,k.fieldPath))switch(b.op){case"==":case"in":P.set(k.fieldPath.canonicalString(),b.value);break;case"not-in":case"!=":return P.set(k.fieldPath.canonicalString(),b.value),Array.from(P.values())}return null}(u,l),h=function(g,I){const P=[];let k=!0;for(const b of Ei(I)){const U=b.kind===0?FE(g,b.fieldPath,g.startAt):UE(g,b.fieldPath,g.startAt);P.push(U.value),k&&(k=U.inclusive)}return new Xr(P,k)}(u,l),m=function(g,I){const P=[];let k=!0;for(const b of Ei(I)){const U=b.kind===0?UE(g,b.fieldPath,g.endAt):FE(g,b.fieldPath,g.endAt);P.push(U.value),k&&(k=U.inclusive)}return new Xr(P,k)}(u,l),y=this.hn(l,u,h),_=this.hn(l,u,m),v=this.Pn(l,u,d),p=this.In(l.indexId,c,y,h.inclusive,_,m.inclusive,v);return w.forEach(p,f=>r.j(f,n.limit).next(g=>{g.forEach(I=>{const P=D.fromSegments(I.documentKey);o.has(P)||(o=o.add(P),a.push(P))})}))}).next(()=>a)}return w.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=n$(re.create(e.filters,"and")).map(r=>Nm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let d=0;d<l;++d){const h=n?this.Tn(n[d/u]):nc,m=this.En(e,h,r[d%u],i),y=this.dn(e,h,s[d%u],o),_=a.map(v=>this.En(e,h,v,!0));c.push(...this.createRange(m,y,_))}return c}En(e,n,r,i){const s=new Ri(e,D.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new Ri(e,D.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new iI(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return w.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new oe(ge.comparator),c=!1;for(const d of l.filters)for(const h of d.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?c=!0:u=u.add(h.field));for(const d of l.orderBy)d.field.isKeyField()||(u=u.add(d.field));return u.size+(c?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new pa;for(const i of Ei(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);Ai.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new pa;return Ai.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new pa;return Ai.bt.Pt(Zi(this.databaseId,n),r.Ht(function(s){const o=Ei(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new pa);let s=0;for(const o of Ei(e)){const a=r[s++];for(const l of i)if(this.Vn(n,o.fieldPath)&&$l(a))i=this.mn(i,o,a);else{const u=l.Ht(o.kind);Ai.bt.Pt(a,u)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new pa;l.seed(a.Wt()),Ai.bt.Pt(o,l.Ht(n.kind)),s.push(l)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof J&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=ma(e),i=Ss(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return w.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(c,d){const h=d?new Ll(d.sequenceNumber,new qt(is(d.readTime),new D(Pn(d.documentKey)),d.largestBatchId)):Ll.empty(),m=c.fields.map(([y,_])=>new Tc(ge.fromServerFormat(y),_));return new wd(c.indexId,c.collectionGroup,m,h)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:q(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=ma(e),s=Ss(e);return this.gn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>w.forEach(a,l=>s.put(ZE(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return w.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),w.forEach(a,l=>this.pn(e,i,l).next(u=>{const c=this.yn(s,l);return u.isEqual(c)?w.resolve():this.wn(e,s,l,u,c)}))))})}Sn(e,n,r,i){return Ts(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return Ts(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=Ts(e);let s=new oe(mr);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new Ri(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new oe(mr);const i=this.An(n,e);if(i==null)return r;const s=Am(n);if(s!=null){const o=e.data.field(s.fieldPath);if($l(o))for(const a of o.arrayValue.values||[])r=r.add(new Ri(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new Ri(n.indexId,e.key,nc,i));return r}wn(e,n,r,i,s){C("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,u,c,d,h){const m=l.getIterator(),y=u.getIterator();let _=Is(m),v=Is(y);for(;_||v;){let p=!1,f=!1;if(_&&v){const g=c(_,v);g<0?f=!0:g>0&&(p=!0)}else _!=null?f=!0:p=!0;p?(d(v),v=Is(y)):f?(h(_),_=Is(m)):(_=Is(m),v=Is(y))}}(i,s,mr,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),w.waitFor(o)}gn(e){let n=1;return Ss(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>mr(o,a)).filter((o,a,l)=>!a||mr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=mr(o,e),l=mr(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&l<0)i.push(o),i.push(o.Jt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,nc,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,nc,[]];s.push(IDBKeyRange.bound(a,l))}return s}Dn(e,n){return mr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(aI)}getMinOffset(e,n){return w.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||L())).next(aI)}}function oI(t){return Je(t,"collectionParents")}function Ts(t){return Je(t,"indexEntries")}function ma(t){return Je(t,"indexConfiguration")}function Ss(t){return Je(t,"indexState")}function aI(t){$(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;t_(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new qt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ct{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ct(e,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q1(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.Y({range:o},(c,d,h)=>(a++,h.delete()));s.push(l.next(()=>{$(a===1)}));const u=[];for(const c of n.mutations){const d=GR(e,c.key.path,n.batchId);s.push(i.delete(d)),u.push(c.key)}return w.waitFor(s).next(()=>u)}function Rd(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw L();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct.DEFAULT_COLLECTION_PERCENTILE=10,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ct.DEFAULT=new Ct(41943040,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ct.DISABLED=new Ct(-1,0,0);class Oh{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){$(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Oh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return gr(e).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=bs(e),o=gr(e);return o.add({}).next(a=>{$(typeof a=="number");const l=new l_(a,n,r,i),u=function(m,y,_){const v=_.baseMutations.map(f=>zl(m.ct,f)),p=_.mutations.map(f=>zl(m.ct,f));return{userId:y,batchId:_.batchId,localWriteTimeMs:_.localWriteTime.toMillis(),baseMutations:v,mutations:p}}(this.serializer,this.userId,l),c=[];let d=new oe((h,m)=>q(h.canonicalString(),m.canonicalString()));for(const h of i){const m=GR(this.userId,h.key.path,a);d=d.add(h.key.path.popLast()),c.push(o.put(u)),c.push(s.put(m,G2))}return d.forEach(h=>{c.push(this.indexManager.addToCollectionParentIndex(e,h))}),e.addOnCommittedListener(()=>{this.Cn[a]=l.keys()}),w.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return gr(e).get(n).next(r=>r?($(r.userId===this.userId),Si(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?w.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return gr(e).Y({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&($(a.batchId>=r),s=Si(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return gr(e).Y({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return gr(e).W("userMutationsIndex",n).next(r=>r.map(i=>Si(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Sc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return bs(e).Y({range:i},(o,a,l)=>{const[u,c,d]=o,h=Pn(c);if(u===this.userId&&n.path.isEqual(h))return gr(e).get(d).next(m=>{if(!m)throw L();$(m.userId===this.userId),s.push(Si(this.serializer,m))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new oe(q);const i=[];return n.forEach(s=>{const o=Sc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=bs(e).Y({range:a},(u,c,d)=>{const[h,m,y]=u,_=Pn(m);h===this.userId&&s.path.isEqual(_)?r=r.add(y):d.done()});i.push(l)}),w.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Sc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new oe(q);return bs(e).Y({range:o},(l,u,c)=>{const[d,h,m]=l,y=Pn(h);d===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(m)):c.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(gr(e).get(s).next(o=>{if(o===null)throw L();$(o.userId===this.userId),r.push(Si(this.serializer,o))}))}),w.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return q1(e.ae,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),w.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return w.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return bs(e).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Pn(s[1]);i.push(l)}else a.done()}).next(()=>{$(i.length===0)})})}containsKey(e,n){return W1(e,this.userId,n)}xn(e){return G1(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function W1(t,e,n){const r=Sc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return bs(t).Y({range:s,J:!0},(a,l,u)=>{const[c,d,h]=a;c===e&&d===i&&(o=!0),u.done()}).next(()=>o)}function gr(t){return Je(t,"mutations")}function bs(t){return Je(t,"documentMutations")}function G1(t){return Je(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ss(0)}static Bn(){return new ss(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s${constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Ln(e).next(n=>{const r=new ss(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Ln(e).next(n=>B.fromTimestamp(new pe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Ln(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Ln(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Ln(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>As(e).delete(n.targetId)).next(()=>this.Ln(e)).next(r=>($(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return As(e).Y((o,a)=>{const l=Na(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,n){return As(e).Y((r,i)=>{const s=Na(i);n(s)})}Ln(e){return uI(e).get("targetGlobalKey").next(n=>($(n!==null),n))}kn(e,n){return uI(e).put("targetGlobalKey",n)}qn(e,n){return As(e).put(B1(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Ln(e).next(n=>n.targetCount)}getTargetData(e,n){const r=es(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return As(e).Y({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=Na(a);gu(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Sr(e);return n.forEach(o=>{const a=It(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),w.waitFor(i)}removeMatchingKeys(e,n,r){const i=Sr(e);return w.forEach(n,s=>{const o=It(s.path);return w.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Sr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Sr(e);let s=W();return i.Y({range:r,J:!0},(o,a,l)=>{const u=Pn(o[1]),c=new D(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=It(n.path),i=IDBKeyRange.bound([r],[$R(r)],!1,!0);let s=0;return Sr(e).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}_t(e,n){return As(e).get(n).next(r=>r?Na(r):null)}}function As(t){return Je(t,"targets")}function uI(t){return Je(t,"targetGlobal")}function Sr(t){return Je(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI([t,e],[n,r]){const i=q(t,n);return i===0?q(e,r):i}class o${constructor(e){this.Kn=e,this.buffer=new oe(cI),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();cI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class a${constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){C("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){di(n)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await ci(n)}await this.zn(3e5)})}}class l${constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return w.resolve(Nt._e);const r=new o$(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(lI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),lI):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Cs()<=Q.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}function u$(t,e){return new l$(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c${constructor(e,n){this.db=e,this.garbageCollector=u$(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return rc(e,r)}removeReference(e,n,r){return rc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return rc(e,n)}er(e,n){return function(i,s){let o=!1;return G1(i).Z(a=>W1(i,a,s).next(l=>(l&&(o=!0),w.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const l=this.er(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,B.min()),Sr(e).delete(function(d){return[0,It(d.path)]}(o))))});i.push(l)}}).next(()=>w.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return rc(e,n)}Xn(e,n){const r=Sr(e);let i,s=Nt._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==Nt._e&&n(new D(Pn(i)),s),s=u,i=l):s=Nt._e}).next(()=>{s!==Nt._e&&n(new D(Pn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function rc(t,e){return Sr(t).put(function(r,i){return{targetId:0,path:It(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(){this.changes=new hi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,he.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d${constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return gi(e).put(r)}removeEntry(e,n,r){return gi(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Sd(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=he.newInvalidDocument(n);return gi(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(ga(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:he.newInvalidDocument(n)};return gi(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(ga(n))},(i,s)=>{r={document:this.nr(n,s),size:Rd(s)}}).next(()=>r)}getEntries(e,n){let r=Dt();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=Dt(),i=new ue(D.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,Rd(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return w.resolve();let i=new oe(fI);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(ga(i.first()),ga(i.last())),o=i.getIterator();let a=o.getNext();return gi(e).Y({index:"documentKeyIndex",range:s},(l,u,c)=>{const d=D.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&fI(a,d)<0;)r(a,null),a=o.getNext();a&&a.isEqual(d)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.U(ga(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Sd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return gi(e).W(IDBKeyRange.bound(a,l,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let c=Dt();for(const d of u){const h=this.nr(D.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);h.isFoundDocument()&&(_u(n,h)||i.has(h.key))&&(c=c.insert(h.key,h))}return c})}getAllFromCollectionGroup(e,n,r,i){let s=Dt();const o=hI(n,r),a=hI(n,qt.max());return gi(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const d=this.nr(D.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(d.key,d),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new h$(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return dI(e).get("remoteDocumentGlobalKey").next(n=>($(!!n),n))}tr(e,n){return dI(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=YU(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(B.min())))return r}return he.newInvalidDocument(e)}}function H1(t){return new d$(t)}class h$ extends K1{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new hi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new oe((s,o)=>q(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=JE(this.ar.serializer,o);i=i.add(s.path.popLast());const u=Rd(l);r+=u-a.size,n.push(this.ar.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=JE(this.ar.serializer,o.convertToNoDocument(B.min()));n.push(this.ar.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),w.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function dI(t){return Je(t,"remoteDocumentGlobal")}function gi(t){return Je(t,"remoteDocumentsV14")}function ga(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function hI(t,e){const n=e.documentKey.path.toArray();return[t,Sd(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function fI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=q(n[s],r[s]),i)return i;return i=q(n.length,r.length),i||(i=q(n[n.length-2],r[r.length-2]),i||q(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f${constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Qa(r.mutation,i,bt.empty(),pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,n,r=W()){const i=Cn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ka();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Cn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,W()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Dt();const o=Ha(),a=function(){return Ha()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof cr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Qa(c.mutation,u,c.mutation.getFieldMask(),pe.now())):o.set(u.key,bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new f$(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ha();let i=new ue((o,a)=>o-a),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||bt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||W()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=f1();c.forEach(h=>{if(!s.has(h)){const m=E1(n.get(h),r.get(h));m!==null&&d.set(h,m),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return D.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):s_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):w.resolve(Cn());let a=-1,l=s;return o.next(u=>w.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?w.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,W())).next(c=>({batchId:a,changes:h1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new D(n)).next(r=>{let i=ka();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ka();return this.indexManager.getCollectionParents(e,s).next(a=>w.forEach(a,l=>{const u=function(d,h){return new ur(h,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((d,h)=>{o=o.insert(d,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,he.newInvalidDocument(c)))});let a=ka();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Qa(c.mutation,u,bt.empty(),pe.now()),_u(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p${constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return w.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:De(i.createTime)}}(n)),w.resolve()}getNamedQuery(e,n){return w.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:f_(i.bundledQuery),readTime:De(i.readTime)}}(n)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m${constructor(){this.overlays=new ue(D.comparator),this.hr=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Cn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const i=Cn(),s=n.length+1,o=new D(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return w.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ue((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Cn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Cn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return w.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new c_(n,r));let s=this.hr.get(n);s===void 0&&(s=W(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(){this.Pr=new oe(qe.Ir),this.Tr=new oe(qe.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new qe(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new qe(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new D(new Y([])),r=new qe(n,e),i=new qe(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new D(new Y([])),r=new qe(n,e),i=new qe(n,e+1);let s=W();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new qe(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return D.comparator(e.key,n.key)||q(e.pr,n.pr)}static Er(e,n){return q(e.pr,n.pr)||D.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g${constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new oe(qe.Ir)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new l_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new qe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),i=new qe(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new oe(q);return n.forEach(i=>{const s=new qe(i,0),o=new qe(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),w.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;D.isDocumentKey(s)||(s=s.child(""));const o=new qe(new D(s),0);let a=new oe(q);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),w.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){$(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return w.forEach(n.mutations,i=>{const s=new qe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new qe(n,0),i=this.wr.firstAfterOrEqual(r);return w.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y${constructor(e){this.vr=e,this.docs=function(){return new ue(D.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():he.newInvalidDocument(n))}getEntries(e,n){let r=Dt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():he.newInvalidDocument(i))}),w.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Dt();const o=n.path,a=new D(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||t_(jR(c),r)<=0||(i.has(c.key)||_u(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return w.resolve(s)}getAllFromCollectionGroup(e,n,r,i){L()}Fr(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _$(this)}getSize(e){return w.resolve(this.size)}}class _$ extends K1{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v${constructor(e){this.persistence=e,this.Mr=new hi(n=>es(n),gu),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Or=0,this.Nr=new g_,this.targetCount=0,this.Br=ss.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),w.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new ss(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.qn(n),w.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Nt(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new v$(this),this.indexManager=new r$,this.remoteDocumentCache=function(i){return new y$(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new $1(n),this.$r=new p$(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new m$,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new g$(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){C("MemoryPersistence","Starting transaction:",e);const i=new w$(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return w.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class w$ extends qR{constructor(e){super(),this.currentSequenceNumber=e}}class Vh{constructor(e){this.persistence=e,this.zr=new g_,this.jr=null}static Hr(e){return new Vh(e)}get Jr(){if(this.jr)return this.jr;throw L()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),w.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Jr,r=>{const i=D.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,B.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return w.or([()=>w.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E${constructor(e){this.serializer=e}N(e,n,r,i){const s=new kh("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",CE,{unique:!0}),l.createObjectStore("documentMutations")}(e),pI(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=w.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),pI(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",c)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").W().next(c=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",CE,{unique:!0});const d=u.store("mutations"),h=c.map(m=>d.put(m));return w.waitFor(h)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:iU});u.createIndex("collectionPathOverlayIndex",sU,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",oU,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:K2});u.createIndex("documentKeyIndex",H2),u.createIndex("collectionGroupIndex",Q2)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:eU}).createIndex("sequenceNumberIndex",tU,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:nU}).createIndex("documentKeyIndex",rU,{unique:!1})}(e))),o}ei(e){let n=0;return e.store("remoteDocuments").Y((r,i)=>{n+=Rd(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>w.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>w.forEach(a,l=>{$(l.userId===s.userId);const u=Si(this.serializer,l);return q1(e,s.userId,u).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const l=new Y(o),u=function(d){return[0,It(d)]}(l);s.push(n.get(u).next(c=>c?w.resolve():(d=>n.put({targetId:0,path:It(d),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>w.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:Z2});const r=n.store("collectionParents"),i=new m_,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:It(l)})}};return n.store("remoteDocuments").Y({J:!0},(o,a)=>{const l=new Y(o);return s(l.popLast())}).next(()=>n.store("documentMutations").Y({J:!0},([o,a,l],u)=>{const c=Pn(a);return s(c.popLast())}))}ri(e){const n=e.store("targets");return n.Y((r,i)=>{const s=Na(i),o=B1(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(d){return d.document?new D(Y.fromString(d.document.name).popFirst(5)):d.noDocument?D.fromSegments(d.noDocument.path):d.unknownDocument?D.fromSegments(d.unknownDocument.path):L()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>w.waitFor(i))}si(e,n){const r=n.store("mutations"),i=H1(this.serializer),s=new Y1(Vh.Hr,this.serializer.ct);return r.W().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:W();Si(this.serializer,l).keys().forEach(d=>c=c.add(d)),a.set(l.userId,c)}),w.forEach(a,(l,u)=>{const c=new Ge(u),d=Dh.lt(this.serializer,c),h=s.getIndexManager(c),m=Oh.lt(c,this.serializer,h,s.referenceDelegate);return new Q1(i,m,d,h).recalculateAndSaveOverlaysForDocumentKeys(new Rm(n,Nt._e),l).next()})})}}function pI(t){t.createObjectStore("targetDocuments",{keyPath:J2}).createIndex("documentTargetsIndex",X2,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Y2,{unique:!0}),t.createObjectStore("targetGlobal")}const Jf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class y_{constructor(e,n,r,i,s,o,a,l,u,c,d=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=u,this.ai=c,this.ui=d,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=h=>Promise.resolve(),!y_.D())throw new R(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new c$(this,i),this.Ti=n+"main",this.serializer=new $1(l),this.Ei=new Jt(this.Ti,this.ui,new E$(this.serializer)),this.Qr=new s$(this.referenceDelegate,this.serializer),this.remoteDocumentCache=H1(this.serializer),this.$r=new JU,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,c===!1&&be("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new R(T.FAILED_PRECONDITION,Jf);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new Nt(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ic(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(di(e))return C("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return ya(e).get("owner").next(n=>w.resolve(this.Si(n)))}bi(e){return ic(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Je(n,"clientMetadata");return r.W().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return w.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?w.resolve(!0):ya(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new R(T.FAILED_PRECONDITION,Jf);return!1}}return!(!this.networkEnabled||!this.inForeground)||ic(e).W().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&C("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Rm(e,Nt._e);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Bi()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Li(){return this.runTransaction("getActiveClients","readonly",e=>ic(e).W().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return Oh.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new i$(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Dh.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){C("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===15?lU:l===14?QR:l===13?HR:l===12?aU:l===11?KR:void L()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new Rm(a,this.kr?this.kr.next():Nt._e),n==="readwrite-primary"?this.gi(o).next(l=>!!l||this.pi(o)).next(l=>{if(!l)throw be(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new R(T.FAILED_PRECONDITION,zR);return r(o)}).next(l=>this.wi(o).next(()=>l)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return ya(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new R(T.FAILED_PRECONDITION,Jf)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ya(e).put("owner",n)}static D(){return Jt.D()}yi(e){const n=ya(e);return n.get("owner").next(r=>this.Si(r)?(C("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):w.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(be(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;RS()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return C("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return be("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){be("Failed to set zombie client id.",e)}}Bi(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ya(t){return Je(t,"owner")}function ic(t){return Je(t,"clientMetadata")}function __(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=W(),i=W();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new v_(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I${constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return RS()?8:Jt.v(_e())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new I$;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Cs()<=Q.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",ks(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),w.resolve()):(Cs()<=Q.DEBUG&&C("QueryEngine","Query:",ks(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Cs()<=Q.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",ks(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tt(n))):w.resolve())}ji(e,n){if($E(n))return w.resolve(null);let r=Tt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Td(n,null,"F"),r=Tt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=W(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,Td(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return $E(n)||i.isEqual(B.min())?w.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?w.resolve(null):(Cs()<=Q.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ks(n)),this.es(e,o,n,BR(i,-1)).next(a=>a))})}Zi(e,n){let r=new oe(c1(e));return n.forEach((i,s)=>{_u(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Cs()<=Q.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",ks(n)),this.zi.getDocumentsMatchingQuery(e,n,qt.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T${constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ue(q),this.rs=new hi(s=>es(s),gu),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Q1(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function X1(t,e,n,r){return new T$(t,e,n,r)}async function Z1(t,e){const n=O(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=W();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function S$(t,e){const n=O(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const d=u.batch,h=d.keys();let m=w.resolve();return h.forEach(y=>{m=m.next(()=>c.getEntry(l,y)).next(_=>{const v=u.docVersions.get(y);$(v!==null),_.version.compareTo(v)<0&&(d.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=W();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function eP(t){const e=O(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function A$(t,e){const n=O(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,d)));let m=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?m=m.withResumeToken(je.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(d,m),function(_,v,p){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(h,m,c)&&a.push(n.Qr.updateTargetData(s,m))});let l=Dt(),u=W();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(tP(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(B.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(d=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return w.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function tP(t,e,n){let r=W(),i=W();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Dt();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):C("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function R$(t,e){const n=O(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function So(t,e){const n=O(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,w.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Gn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Ao(t,e,n){const r=O(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!di(o))throw o;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Pd(t,e,n){const r=O(t);let i=B.min(),s=W();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const d=O(l),h=d.rs.get(c);return h!==void 0?w.resolve(d.ns.get(h)):d.Qr.getTargetData(u,c)}(r,o,Tt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:B.min(),n?s:W())).next(a=>(iP(r,u1(e),a),{documents:a,hs:s})))}function nP(t,e){const n=O(t),r=O(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r._t(s,e).next(o=>o?o.target:null))}function rP(t,e){const n=O(t),r=n.ss.get(e)||B.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,BR(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(iP(n,e,i),i))}function iP(t,e,n){let r=t.ss.get(e)||B.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function P$(t,e,n,r){const i=O(t);let s=W(),o=Dt();for(const u of n){const c=e.Ps(u.metadata.name);u.document&&(s=s.add(c));const d=e.Is(u);d.setReadTime(e.Ts(u.metadata.readTime)),o=o.insert(c,d)}const a=i.os.newChangeBuffer({trackRemovals:!0}),l=await So(i,function(c){return Tt(qo(Y.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>tP(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.Qr.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Qr.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.cs,c.ls)).next(()=>c.cs)))}async function C$(t,e,n=W()){const r=await So(t,Tt(f_(e.bundledQuery))),i=O(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=De(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(je.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function mI(t,e){return`firestore_clients_${t}_${e}`}function gI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Xf(t,e){return`firestore_targets_${t}_${e}`}class Cd{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new R(i.error.code,i.error.message))),o?new Cd(e,n,i.state,s):(be("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ya{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new R(r.error.code,r.error.message))),s?new Ya(e,r.state,i):(be("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class kd{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=o_();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=WR(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new kd(e,s):(be("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class w_{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new w_(n.clientId,n.onlineState):(be("SharedClientState",`Failed to parse online state: ${e}`),null)}}class $m{constructor(){this.activeTargetIds=o_()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zf{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new ue(q),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=mI(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new $m),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Li();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(mI(this.persistenceKey,r));if(i){const s=kd.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Bs(e,"pending")}updateMutationState(e,n,r){this.Bs(e,n,r),this.Ls(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Xf(this.persistenceKey,e));if(r){const i=Ya.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Xf(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Ls(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return C("SharedClientState","READ",e,n),n}setItem(e,n){C("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){C("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if(C("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void be("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=Nt._e;if(s!=null)try{const a=JSON.parse(s);$(typeof a=="number"),o=a}catch(a){be("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Nt._e&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Bs(e,n,r){const i=new Cd(this.currentUser,e,n,r),s=gI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Ls(e){const n=gI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=Xf(this.persistenceKey,e),s=new Ya(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return kd.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Cd.Es(new Ge(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return Ya.Es(i,n)}xs(e){return w_.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);C("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=o_();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class sP{constructor(){this.no=new $m,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new $m,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k${io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc=null;function ep(){return sc===null?sc=function(){return 268435456+Math.round(2147483648*Math.random())}():sc++,"0x"+sc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N${constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="WebChannelConnection";class b$ extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=ep(),l=this.bo(n,r.toUriEncodedString());C("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(C("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw mn("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=x$[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=ep();return new Promise((o,a)=>{const l=new C2;l.setWithCredentials(!0),l.listenOnce(R2.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Qf.NO_ERROR:const c=l.getResponseJson();C(ct,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Qf.TIMEOUT:C(ct,`RPC '${e}' ${s} timed out`),a(new R(T.DEADLINE_EXCEEDED,"Request time out"));break;case Qf.HTTP_ERROR:const d=l.getStatus();if(C(ct,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const m=h==null?void 0:h.error;if(m&&m.status&&m.message){const y=function(v){const p=v.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(p)>=0?p:T.UNKNOWN}(m.status);a(new R(y,m.message))}else a(new R(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new R(T.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{C(ct,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);C(ct,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=ep(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=S2(),a=A2(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");C(ct,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let h=!1,m=!1;const y=new N$({lo:v=>{m?C(ct,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(h||(C(ct,`Opening RPC '${e}' stream ${i} transport.`),d.open(),h=!0),C(ct,`RPC '${e}' stream ${i} sending:`,v),d.send(v))},ho:()=>d.close()}),_=(v,p,f)=>{v.listen(p,g=>{try{f(g)}catch(I){setTimeout(()=>{throw I},0)}})};return _(d,ec.EventType.OPEN,()=>{m||C(ct,`RPC '${e}' stream ${i} transport opened.`)}),_(d,ec.EventType.CLOSE,()=>{m||(m=!0,C(ct,`RPC '${e}' stream ${i} transport closed`),y.Vo())}),_(d,ec.EventType.ERROR,v=>{m||(m=!0,mn(ct,`RPC '${e}' stream ${i} transport errored:`,v),y.Vo(new R(T.UNAVAILABLE,"The operation could not be completed")))}),_(d,ec.EventType.MESSAGE,v=>{var p;if(!m){const f=v.data[0];$(!!f);const g=f,I=g.error||((p=g[0])===null||p===void 0?void 0:p.error);if(I){C(ct,`RPC '${e}' stream ${i} received error:`,I);const P=I.status;let k=function(ae){const K=Ve[ae];if(K!==void 0)return S1(K)}(P),b=I.message;k===void 0&&(k=T.INTERNAL,b="Unknown error status: "+P+" with message "+I.message),m=!0,y.Vo(new R(k,b)),d.close()}else C(ct,`RPC '${e}' stream ${i} received:`,f),y.mo(f)}}),_(a,P2.STAT_EVENT,v=>{v.stat===SE.PROXY?C(ct,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===SE.NOPROXY&&C(ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ro()},0),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(){return typeof window<"u"?window:null}function kc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t){return new $U(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new E_(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(be(n.toString()),be("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new R(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class D$ extends aP{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=zU(this.serializer,e),r=function(s){if(!("targetChange"in s))return B.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?B.min():o.readTime?De(o.readTime):B.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Vm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Ed(l)?{documents:O1(s,l)}:{query:V1(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=C1(s,o.resumeToken);const u=Dm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(B.min())>0){a.readTime=To(s,o.snapshotVersion.toTimestamp());const u=Dm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=WU(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Vm(this.serializer),n.removeTarget=e,this.t_(n)}}class O$ extends aP{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if($(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=qU(e.writeResults,e.commitTime),r=De(e.commitTime);return this.listener.T_(r,n)}return $(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Vm(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zl(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V$ extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new R(T.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,Om(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new R(T.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Om(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new R(T.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class L${constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(be(n),this.g_=!1):C("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M${constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{fi(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=O(l);u.v_.add(4),await Ko(u),u.x_.set("Unknown"),u.v_.delete(4),await Tu(u)}(this))})}),this.x_=new L$(r,i)}}async function Tu(t){if(fi(t))for(const e of t.F_)await e(!0)}async function Ko(t){for(const e of t.F_)await e(!1)}function Lh(t,e){const n=O(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),S_(n)?T_(n):Qo(n).Jo()&&I_(n,e))}function ql(t,e){const n=O(t),r=Qo(n);n.C_.delete(e),r.Jo()&&lP(n,e),n.C_.size===0&&(r.Jo()?r.Xo():fi(n)&&n.x_.set("Unknown"))}function I_(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qo(t).c_(e)}function lP(t,e){t.O_.Oe(e),Qo(t).l_(e)}function T_(t){t.O_=new LU({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Qo(t).start(),t.x_.p_()}function S_(t){return fi(t)&&!Qo(t).Ho()&&t.C_.size>0}function fi(t){return O(t).v_.size===0}function uP(t){t.O_=void 0}async function F$(t){t.C_.forEach((e,n)=>{I_(t,e)})}async function U$(t,e){uP(t),S_(t)?(t.x_.S_(e),T_(t)):t.x_.set("Unknown")}async function $$(t,e,n){if(t.x_.set("Online"),e instanceof P1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xd(t,r)}else if(e instanceof Cc?t.O_.$e(e):e instanceof R1?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(B.min()))try{const r=await eP(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(je.EMPTY_BYTE_STRING,c.snapshotVersion)),lP(s,l);const d=new Gn(c.target,l,u,c.sequenceNumber);I_(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){C("RemoteStore","Failed to raise snapshot:",r),await xd(t,r)}}async function xd(t,e,n){if(!di(e))throw e;t.v_.add(1),await Ko(t),t.x_.set("Offline"),n||(n=()=>eP(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Tu(t)})}function cP(t,e){return e().catch(n=>xd(t,n,e))}async function Ho(t){const e=O(t),n=Zr(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;B$(e);)try{const i=await R$(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,j$(e,i)}catch(i){await xd(e,i)}dP(e)&&hP(e)}function B$(t){return fi(t)&&t.D_.length<10}function j$(t,e){t.D_.push(e);const n=Zr(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function dP(t){return fi(t)&&!Zr(t).Ho()&&t.D_.length>0}function hP(t){Zr(t).start()}async function z$(t){Zr(t).d_()}async function q$(t){const e=Zr(t);for(const n of t.D_)e.I_(n.mutations)}async function W$(t,e,n){const r=t.D_.shift(),i=u_.from(r,e,n);await cP(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ho(t)}async function G$(t,e){e&&Zr(t).P_&&await async function(r,i){if(function(o){return T1(o)&&o!==T.ABORTED}(i.code)){const s=r.D_.shift();Zr(r).Zo(),await cP(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ho(r)}}(t,e),dP(t)&&hP(t)}async function _I(t,e){const n=O(t);n.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const r=fi(n);n.v_.add(3),await Ko(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Tu(n)}async function Bm(t,e){const n=O(t);e?(n.v_.delete(2),await Tu(n)):e||(n.v_.add(2),await Ko(n),n.x_.set("Unknown"))}function Qo(t){return t.N_||(t.N_=function(n,r,i){const s=O(n);return s.R_(),new D$(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:F$.bind(null,t),To:U$.bind(null,t),u_:$$.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),S_(t)?T_(t):t.x_.set("Unknown")):(await t.N_.stop(),uP(t))})),t.N_}function Zr(t){return t.B_||(t.B_=function(n,r,i){const s=O(n);return s.R_(),new O$(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:z$.bind(null,t),To:G$.bind(null,t),E_:q$.bind(null,t),T_:W$.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await Ho(t)):(await t.B_.stop(),t.D_.length>0&&(C("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new He,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new A_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yo(t,e){if(be("AsyncQueue",`${e}: ${t}`),di(t))return new R(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.comparator=e?(n,r)=>e(n,r)||D.comparator(n.key,r.key):(n,r)=>D.comparator(n.key,r.key),this.keyedMap=ka(),this.sortedSet=new ue(this.comparator)}static emptySet(e){return new so(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof so)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new so;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(){this.L_=new ue(D.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):L():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ro{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ro(e,n,so.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K${constructor(){this.q_=void 0,this.Q_=[]}}class H${constructor(){this.queries=new hi(e=>l1(e),yu),this.onlineState="Unknown",this.K_=new Set}}async function R_(t,e){const n=O(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new K$),i)try{s.q_=await n.onListen(r)}catch(o){const a=Yo(o,`Initialization of query '${ks(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.Q_.push(e),e.U_(n.onlineState),s.q_&&e.W_(s.q_)&&C_(n)}async function P_(t,e){const n=O(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Q$(t,e){const n=O(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&C_(n)}function Y$(t,e,n){const r=O(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function C_(t){t.K_.forEach(e=>{e.next()})}class k_{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ro(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J${constructor(e,n){this.X_=e,this.byteLength=n}ea(){return"metadata"in this.X_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.serializer=e}Ps(e){return Dn(this.serializer,e)}Is(e){return e.metadata.exists?D1(this.serializer,e.document,!1):he.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return De(e)}}class X${constructor(e,n,r){this.ta=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=fP(e)}na(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.X_.namedQuery)this.queries.push(e.X_.namedQuery);else if(e.X_.documentMetadata){this.documents.push({metadata:e.X_.documentMetadata}),e.X_.documentMetadata.exists||++n;const r=Y.fromString(e.X_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.X_.document&&(this.documents[this.documents.length-1].document=e.X_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ra(e){const n=new Map,r=new wI(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||W()).add(s);n.set(o,a)}}return n}async complete(){const e=await P$(this.localStore,new wI(this.serializer),this.documents,this.ta.id),n=this.ra(this.documents);for(const r of this.queries)await C$(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ia:this.collectionGroups,sa:e}}}function fP(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e){this.key=e}}class mP{constructor(e){this.key=e}}class gP{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=W(),this.mutatedKeys=W(),this.ua=c1(e),this.ca=new so(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new vI,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),m=_u(this.query,d)?d:null,y=!!h&&this.mutatedKeys.has(h.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let v=!1;h&&m?h.data.isEqual(m.data)?y!==_&&(r.track({type:3,doc:m}),v=!0):this.Ia(h,m)||(r.track({type:2,doc:m}),v=!0,(l&&this.ua(m,l)>0||u&&this.ua(m,u)<0)&&(a=!0)):!h&&m?(r.track({type:0,doc:m}),v=!0):h&&!m&&(r.track({type:1,doc:h}),v=!0,(l||u)&&(a=!0)),v&&(m?(o=o.add(m),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const o=e.Pa.k_();o.sort((c,d)=>function(m,y){const _=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return _(m)-_(y)}(c.type,d.type)||this.ua(c.doc,d.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],l=this.aa.size===0&&this.current&&!i?1:0,u=l!==this._a;return this._a=l,o.length!==0||u?{snapshot:new Ro(this.query,e.ca,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new vI,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=W(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new mP(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new pP(r))}),n}Ra(e){this.oa=e.hs,this.aa=W();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Ro.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class Z${constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class e4{constructor(e){this.key=e,this.ma=!1}}class t4{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new hi(a=>l1(a),yu),this.pa=new Map,this.ya=new Set,this.wa=new ue(D.comparator),this.Sa=new Map,this.ba=new g_,this.Da={},this.Ca=new Map,this.va=ss.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function n4(t,e){const n=O_(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await So(n.localStore,Tt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await x_(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Lh(n.remoteStore,o)}return i}async function x_(t,e,n,r,i){t.Ma=(d,h,m)=>async function(_,v,p,f){let g=v.view.ha(p);g.Xi&&(g=await Pd(_.localStore,v.query,!1).then(({documents:b})=>v.view.ha(b,g)));const I=f&&f.targetChanges.get(v.targetId),P=f&&f.targetMismatches.get(v.targetId)!=null,k=v.view.applyChanges(g,_.isPrimaryClient,I,P);return jm(_,v.targetId,k.da),k.snapshot}(t,d,h,m);const s=await Pd(t.localStore,e,!0),o=new gP(e,s.hs),a=o.ha(s.documents),l=Eu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);jm(t,n,u.da);const c=new Z$(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function r4(t,e){const n=O(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!yu(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ao(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ql(n.remoteStore,r.targetId),Po(n,r.targetId)}).catch(ci)):(Po(n,r.targetId),await Ao(n.localStore,r.targetId,!0))}async function i4(t,e,n){const r=V_(t);try{const i=await function(o,a){const l=O(o),u=pe.now(),c=a.reduce((m,y)=>m.add(y.key),W());let d,h;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=Dt(),_=W();return l.os.getEntries(m,c).next(v=>{y=v,y.forEach((p,f)=>{f.isValidDocument()||(_=_.add(p))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,y)).next(v=>{d=v;const p=[];for(const f of a){const g=DU(f,d.get(f.key).overlayedDocument);g!=null&&p.push(new cr(f.key,g,ZR(g.value.mapValue),ye.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,p,a)}).next(v=>{h=v;const p=v.applyToLocalDocumentSet(d,_);return l.documentOverlayCache.saveOverlays(m,v.batchId,p)})}).then(()=>({batchId:h.batchId,changes:h1(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new ue(q)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await dr(r,i.changes),await Ho(r.remoteStore)}catch(i){const s=Yo(i,"Failed to persist write");n.reject(s)}}async function yP(t,e){const n=O(t);try{const r=await A$(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?$(o.ma):i.removedDocuments.size>0&&($(o.ma),o.ma=!1))}),await dr(n,r,e)}catch(r){await ci(r)}}function EI(t,e,n){const r=O(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=O(o);l.onlineState=a;let u=!1;l.queries.forEach((c,d)=>{for(const h of d.Q_)h.U_(a)&&(u=!0)}),u&&C_(l)}(r.eventManager,e),i.length&&r.fa.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function s4(t,e,n){const r=O(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new ue(D.comparator);o=o.insert(s,he.newNoDocument(s,B.min()));const a=W().add(s),l=new wu(B.min(),new Map,new ue(q),o,a);await yP(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),D_(r)}else await Ao(r.localStore,e,!1).then(()=>Po(r,e,n)).catch(ci)}async function o4(t,e){const n=O(t),r=e.batch.batchId;try{const i=await S$(n.localStore,e);b_(n,r,null),N_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await dr(n,i)}catch(i){await ci(i)}}async function a4(t,e,n){const r=O(t);try{const i=await function(o,a){const l=O(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>($(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);b_(r,e,n),N_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await dr(r,i)}catch(i){await ci(i)}}async function l4(t,e){const n=O(t);fi(n.remoteStore)||C("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=O(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Ca.get(r)||[];i.push(e),n.Ca.set(r,i)}catch(r){const i=Yo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function N_(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function b_(t,e,n){const r=O(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function Po(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||_P(t,r)})}function _P(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(ql(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),D_(t))}function jm(t,e,n){for(const r of n)r instanceof pP?(t.ba.addReference(r.key,e),u4(t,r)):r instanceof mP?(C("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||_P(t,r.key)):L()}function u4(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(C("SyncEngine","New document in limbo: "+n),t.ya.add(r),D_(t))}function D_(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new D(Y.fromString(e)),r=t.va.next();t.Sa.set(r,new e4(n)),t.wa=t.wa.insert(n,r),Lh(t.remoteStore,new Gn(Tt(qo(n.path)),r,"TargetPurposeLimboResolution",Nt._e))}}async function dr(t,e,n){const r=O(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=v_.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.u_(i),await async function(l,u){const c=O(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>w.forEach(u,h=>w.forEach(h.qi,m=>c.persistence.referenceDelegate.addReference(d,h.targetId,m)).next(()=>w.forEach(h.Qi,m=>c.persistence.referenceDelegate.removeReference(d,h.targetId,m)))))}catch(d){if(!di(d))throw d;C("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const h=d.targetId;if(!d.fromCache){const m=c.ns.get(h),y=m.snapshotVersion,_=m.withLastLimboFreeSnapshotVersion(y);c.ns=c.ns.insert(h,_)}}}(r.localStore,s))}async function c4(t,e){const n=O(t);if(!n.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const r=await Z1(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new R(T.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await dr(n,r.us)}}function d4(t,e){const n=O(t),r=n.Sa.get(e);if(r&&r.ma)return W().add(r.key);{let i=W();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}async function h4(t,e){const n=O(t),r=await Pd(n.localStore,e.query,!0),i=e.view.Ra(r);return n.isPrimaryClient&&jm(n,e.targetId,i.da),i}async function f4(t,e){const n=O(t);return rP(n.localStore,e).then(r=>dr(n,r))}async function p4(t,e,n,r){const i=O(t),s=await function(a,l){const u=O(a),c=O(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",d=>c.vn(d,l).next(h=>h?u.localDocuments.getDocuments(d,h):w.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Ho(i.remoteStore):n==="acknowledged"||n==="rejected"?(b_(i,e,r||null),N_(i,e),function(a,l){O(O(a).mutationQueue).Mn(l)}(i.localStore,e)):L(),await dr(i,s)):C("SyncEngine","Cannot apply mutation batch with id: "+e)}async function m4(t,e){const n=O(t);if(O_(n),V_(n),e===!0&&n.Fa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await II(n,r.toArray());n.Fa=!0,await Bm(n.remoteStore,!0);for(const s of i)Lh(n.remoteStore,s)}else if(e===!1&&n.Fa!==!1){const r=[];let i=Promise.resolve();n.pa.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Po(n,o),Ao(n.localStore,o,!0))),ql(n.remoteStore,o)}),await i,await II(n,r),function(o){const a=O(o);a.Sa.forEach((l,u)=>{ql(a.remoteStore,u)}),a.ba.mr(),a.Sa=new Map,a.wa=new ue(D.comparator)}(n),n.Fa=!1,await Bm(n.remoteStore,!1)}}async function II(t,e,n){const r=O(t),i=[],s=[];for(const o of e){let a;const l=r.pa.get(o);if(l&&l.length!==0){a=await So(r.localStore,Tt(l[0]));for(const u of l){const c=r.ga.get(u),d=await h4(r,c);d.snapshot&&s.push(d.snapshot)}}else{const u=await nP(r.localStore,o);a=await So(r.localStore,u),await x_(r,vP(u),o,!1,a.resumeToken)}i.push(a)}return r.fa.u_(s),i}function vP(t){return a1(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function g4(t){return function(n){return O(O(n).persistence).Li()}(O(t).localStore)}async function y4(t,e,n,r){const i=O(t);if(i.Fa)return void C("SyncEngine","Ignoring unexpected query state notification.");const s=i.pa.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await rP(i.localStore,u1(s[0])),a=wu.createSynthesizedRemoteEventForCurrentChange(e,n==="current",je.EMPTY_BYTE_STRING);await dr(i,o,a);break}case"rejected":await Ao(i.localStore,e,!0),Po(i,e,r);break;default:L()}}async function _4(t,e,n){const r=O_(t);if(r.Fa){for(const i of e){if(r.pa.has(i)){C("SyncEngine","Adding an already active target "+i);continue}const s=await nP(r.localStore,i),o=await So(r.localStore,s);await x_(r,vP(s),o.targetId,!1,o.resumeToken),Lh(r.remoteStore,o)}for(const i of n)r.pa.has(i)&&await Ao(r.localStore,i,!1).then(()=>{ql(r.remoteStore,i),Po(r,i)}).catch(ci)}}function O_(t){const e=O(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yP.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=d4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=s4.bind(null,e),e.fa.u_=Q$.bind(null,e.eventManager),e.fa.xa=Y$.bind(null,e.eventManager),e}function V_(t){const e=O(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=o4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=a4.bind(null,e),e}function v4(t,e,n){const r=O(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(m,y){const _=O(m),v=De(y.createTime);return _.persistence.runTransaction("hasNewerBundle","readonly",p=>_.$r.getBundleMetadata(p,y.id)).then(p=>!!p&&p.createTime.compareTo(v)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(m){return{taskState:"Success",documentsLoaded:m.totalDocuments,bytesLoaded:m.totalBytes,totalDocuments:m.totalDocuments,totalBytes:m.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(fP(l));const u=new X$(l,s.localStore,o.serializer);let c=await o.Oa();for(;c;){const h=await u.na(c);h&&a._updateProgress(h),c=await o.Oa()}const d=await u.complete();return await dr(s,d.sa,void 0),await function(m,y){const _=O(m);return _.persistence.runTransaction("Save bundle","readwrite",v=>_.$r.saveBundleMetadata(v,y))}(s.localStore,l),a._completeWith(d.progress),Promise.resolve(d.ia)}catch(l){return mn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class zm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Iu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return X1(this.persistence,new J1,e.initialUser,this.serializer)}createPersistence(e){return new Y1(Vh.Hr,this.serializer)}createSharedClientState(e){return new sP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wP extends zm{constructor(e,n,r){super(),this.Na=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Na.initialize(this,e),await V_(this.Na.syncEngine),await Ho(this.Na.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return X1(this.persistence,new J1,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new a$(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new q2(n,this.persistence);return new z2(e.asyncQueue,r)}createPersistence(e){const n=__(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ct.withCacheSize(this.cacheSizeBytes):Ct.DEFAULT;return new y_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,oP(),kc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new sP}}class w4 extends wP{constructor(e,n){super(e,n,!1),this.Na=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Na.syncEngine;this.sharedClientState instanceof Zf&&(this.sharedClientState.syncEngine={Zs:p4.bind(null,n),Xs:y4.bind(null,n),eo:_4.bind(null,n),Li:g4.bind(null,n),Ys:f4.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await m4(this.Na.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=oP();if(!Zf.D(n))throw new R(T.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=__(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Zf(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class L_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>EI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=c4.bind(null,this.syncEngine),await Bm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new H$}()}createDatastore(e){const n=Iu(e.databaseInfo.databaseId),r=function(s){return new b$(s)}(e.databaseInfo);return function(s,o,a,l){return new V$(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new M$(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>EI(this.syncEngine,n,0),function(){return yI.D()?new yI:new k$}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const d=new t4(i,s,o,a,l,u);return c&&(d.Fa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=O(r);C("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await Ko(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):be("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e,n){this.ka=e,this.serializer=n,this.metadata=new He,this.buffer=new Uint8Array,this.qa=function(){return new TextDecoder("utf-8")}(),this.Qa().then(r=>{r&&r.ea()?this.metadata.resolve(r.X_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.X_)}`))},r=>this.metadata.reject(r))}close(){return this.ka.cancel()}async getMetadata(){return this.metadata.promise}async Oa(){return await this.getMetadata(),this.Qa()}async Qa(){const e=await this.Ka();if(e===null)return null;const n=this.qa.decode(e),r=Number(n);isNaN(r)&&this.$a(`length string (${n}) is not valid number`);const i=await this.Ua(r);return new J$(JSON.parse(i),e.length+r)}Wa(){return this.buffer.findIndex(e=>e===123)}async Ka(){for(;this.Wa()<0&&!await this.Ga(););if(this.buffer.length===0)return null;const e=this.Wa();e<0&&this.$a("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ua(e){for(;this.buffer.length<e;)await this.Ga()&&this.$a("Reached the end of bundle when more is expected.");const n=this.qa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}$a(e){throw this.ka.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ga(){const e=await this.ka.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new R(T.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=O(i),a={documents:s.map(d=>jl(o.serializer,d))},l=await o.vo("BatchGetDocuments",o.serializer.databaseId,Y.emptyPath(),a,s.length),u=new Map;l.forEach(d=>{const h=jU(o.serializer,d);u.set(h.key.toString(),h)});const c=[];return s.forEach(d=>{const h=u.get(d.toString());$(!!h),c.push(h)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Go(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=D.fromPath(r);this.mutations.push(new a_(i,this.precondition(i)))}),await async function(r,i){const s=O(r),o={writes:i.map(a=>zl(s.serializer,a))};await s.So("Commit",s.serializer.databaseId,Y.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw L();n=B.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new R(T.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(B.min())?ye.exists(!1):ye.updateTime(n):ye.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(B.min()))throw new R(T.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ye.updateTime(n)}return ye.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.za=r.maxAttempts,this.jo=new E_(this.asyncQueue,"transaction_retry")}ja(){this.za-=1,this.Ha()}Ha(){this.jo.qo(async()=>{const e=new I4(this.datastore),n=this.Ja(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ya(i)}))}).catch(r=>{this.Ya(r)})})}Ja(e){try{const n=this.updateFunction(e);return!mu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Ya(e){this.za>0&&this.Za(e)?(this.za-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ha(),Promise.resolve()))):this.deferred.reject(e)}Za(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!T1(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ge.UNAUTHENTICATED,this.clientId=UR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{C("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(C("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new He;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Yo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xc(t,e){t.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Z1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await M_(t);C("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>_I(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>_I(e.remoteStore,i)),t._onlineComponents=e}function EP(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function M_(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await xc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!EP(n))throw n;mn("Error using user provided cache. Falling back to memory cache: "+n),await xc(t,new zm)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await xc(t,new zm);return t._offlineComponents}async function Fh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await qm(t,t._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await qm(t,new L_))),t._onlineComponents}function IP(t){return M_(t).then(e=>e.persistence)}function F_(t){return M_(t).then(e=>e.localStore)}function TP(t){return Fh(t).then(e=>e.remoteStore)}function U_(t){return Fh(t).then(e=>e.syncEngine)}function A4(t){return Fh(t).then(e=>e.datastore)}async function Co(t){const e=await Fh(t),n=e.eventManager;return n.onListen=n4.bind(null,e.syncEngine),n.onUnlisten=r4.bind(null,e.syncEngine),n}function R4(t){return t.asyncQueue.enqueue(async()=>{const e=await IP(t),n=await TP(t);return e.setNetworkEnabled(!0),function(i){const s=O(i);return s.v_.delete(0),Tu(s)}(n)})}function P4(t){return t.asyncQueue.enqueue(async()=>{const e=await IP(t),n=await TP(t);return e.setNetworkEnabled(!1),async function(i){const s=O(i);s.v_.add(0),await Ko(s),s.x_.set("Offline")}(n)})}function C4(t,e){const n=new He;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,c){const d=O(u);return d.persistence.runTransaction("read document","readonly",h=>d.localDocuments.getDocument(h,c))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new R(T.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=Yo(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await F_(t),e,n)),n.promise}function SP(t,e,n={}){const r=new He;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Mh({next:h=>{o.enqueueAndForget(()=>P_(s,d));const m=h.docs.has(a);!m&&h.fromCache?u.reject(new R(T.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&h.fromCache&&l&&l.source==="server"?u.reject(new R(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new k_(qo(a.path),c,{includeMetadataChanges:!0,Z_:!0});return R_(s,d)}(await Co(t),t.asyncQueue,e,n,r)),r.promise}function k4(t,e){const n=new He;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Pd(i,s,!0),l=new gP(s,a.hs),u=l.ha(a.documents),c=l.applyChanges(u,!1);o.resolve(c.snapshot)}catch(a){const l=Yo(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await F_(t),e,n)),n.promise}function AP(t,e,n={}){const r=new He;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Mh({next:h=>{o.enqueueAndForget(()=>P_(s,d)),h.fromCache&&l.source==="server"?u.reject(new R(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new k_(a,c,{includeMetadataChanges:!0,Z_:!0});return R_(s,d)}(await Co(t),t.asyncQueue,e,n,r)),r.promise}function x4(t,e){const n=new Mh(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){O(i).K_.add(s),s.next()}(await Co(t),n)),()=>{n.La(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){O(i).K_.delete(s)}(await Co(t),n))}}function N4(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?A1().encode(o):o,function(c,d){return new E4(c,d)}(function(c,d){if(c instanceof Uint8Array)return TI(c,d);if(c instanceof ArrayBuffer)return TI(new Uint8Array(c),d);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,Iu(e));t.asyncQueue.enqueueAndForget(async()=>{v4(await U_(t),i,r)})}function b4(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=O(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await F_(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(t,e,n){if(!n)throw new R(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function PP(t,e,n,r){if(e===!0&&r===!0)throw new R(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function AI(t){if(!D.isDocumentKey(t))throw new R(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function RI(t){if(D.isDocumentKey(t))throw new R(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Uh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":L()}function ne(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Uh(t);throw new R(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function CP(t,e){if(e<=0)throw new R(T.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new R(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=RP((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new R(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new R(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new R(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Su{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new PI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new PI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new b2;switch(r.type){case"firstParty":return new L2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new R(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=SI.get(n);r&&(C("ComponentProvider","Removing Datastore"),SI.delete(n),r.terminate())}(this),Promise.resolve()}}function kP(t,e,n,r={}){var i;const s=(t=ne(t,Su))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&mn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ge.MOCK_USER;else{a=jb(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new R(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ge(u)}t._authCredentials=new D2(new FR(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let St=class xP{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xP(this.firestore,e,this._query)}},Ee=class NP{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Br(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new NP(this.firestore,e,this._key)}},Br=class bP extends St{constructor(e,n,r){super(e,n,qo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ee(this.firestore,null,new D(e))}withConverter(e){return new bP(this.firestore,e,this._path)}};function B_(t,e,...n){if(t=j(t),$_("collection","path",e),t instanceof Su){const r=Y.fromString(e,...n);return RI(r),new Br(t,null,r)}{if(!(t instanceof Ee||t instanceof Br))throw new R(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Y.fromString(e,...n));return RI(r),new Br(t.firestore,null,r)}}function D4(t,e){if(t=ne(t,Su),$_("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new R(T.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new St(t,null,function(r){return new ur(Y.emptyPath(),r)}(e))}function ko(t,e,...n){if(t=j(t),arguments.length===1&&(e=UR.newId()),$_("doc","path",e),t instanceof Su){const r=Y.fromString(e,...n);return AI(r),new Ee(t,null,new D(r))}{if(!(t instanceof Ee||t instanceof Br))throw new R(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Y.fromString(e,...n));return AI(r),new Ee(t.firestore,t instanceof Br?t.converter:null,new D(r))}}function DP(t,e){return t=j(t),e=j(e),(t instanceof Ee||t instanceof Br)&&(e instanceof Ee||e instanceof Br)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function OP(t,e){return t=j(t),e=j(e),t instanceof St&&e instanceof St&&t.firestore===e.firestore&&yu(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O4{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new E_(this,"async_queue_retry"),this._u=()=>{const n=kc();n&&C("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=kc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=kc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new He;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!di(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw be("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const i=A_.createAndSchedule(this,e,n,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&L()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}function Wm(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class V4{constructor(){this._progressObserver={},this._taskCompletionResolver=new He,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L4=-1;let Pe=class extends Su{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new O4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||VP(this),this._firestoreClient.terminate()}};function M4(t,e){const n=typeof t=="object"?t:bS(),r=typeof t=="string"?t:e||"(default)",i=uy(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ub("firestore");s&&kP(i,...s)}return i}function Xe(t){return t._firestoreClient||VP(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function VP(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new dU(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,RP(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new S4(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function F4(t,e){MP(t=ne(t,Pe));const n=Xe(t);if(n._uninitializedComponentsProvider)throw new R(T.FAILED_PRECONDITION,"SDK cache is already specified.");mn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new L_;return LP(n,i,new wP(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function U4(t){MP(t=ne(t,Pe));const e=Xe(t);if(e._uninitializedComponentsProvider)throw new R(T.FAILED_PRECONDITION,"SDK cache is already specified.");mn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new L_;return LP(e,r,new w4(r,n.cacheSizeBytes))}function LP(t,e,n){const r=new He;return t.asyncQueue.enqueue(async()=>{try{await xc(t,n),await qm(t,e),r.resolve()}catch(i){const s=i;if(!EP(s))throw s;mn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function $4(t){if(t._initialized&&!t._terminated)throw new R(T.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new He;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Jt.D())return Promise.resolve();const i=r+"main";await Jt.delete(i)}(__(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function B4(t){return function(n){const r=new He;return n.asyncQueue.enqueueAndForget(async()=>l4(await U_(n),r)),r.promise}(Xe(t=ne(t,Pe)))}function j4(t){return R4(Xe(t=ne(t,Pe)))}function z4(t){return P4(Xe(t=ne(t,Pe)))}function q4(t,e){const n=Xe(t=ne(t,Pe)),r=new V4;return N4(n,t._databaseId,e,r),r}function W4(t,e){return b4(Xe(t=ne(t,Pe)),e).then(n=>n?new St(t,null,n.query):null)}function MP(t){if(t._initialized||t._terminated)throw new R(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mn(je.fromBase64String(e))}catch(n){throw new R(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mn(je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new R(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new R(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new R(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G4=/^__.*__$/;class K4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wo(e,this.data,n,this.fieldTransforms)}}class FP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new cr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function UP(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class Bh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new Bh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.mu(e),i}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return Nd(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(UP(this.du)&&G4.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class H4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Iu(e)}Su(e,n,r,i=!1){return new Bh({du:e,methodName:n,wu:r,path:ge.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gs(t){const e=t._freezeSettings(),n=Iu(t._databaseId);return new H4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jh(t,e,n,r,i,s={}){const o=t.Su(s.merge||s.mergeFields?2:0,e,n,i);H_("Data must be an object, but it was:",o,r);const a=jP(r,o);let l,u;if(s.merge)l=new bt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=Gm(e,d,n);if(!o.contains(h))throw new R(T.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);qP(c,h)||c.push(h)}l=new bt(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new K4(new nt(a),l,u)}class Au extends ms{_toFieldTransform(e){if(e.du!==2)throw e.du===1?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Au}}function $P(t,e,n){return new Bh({du:3,wu:e.settings.wu,methodName:t._methodName,Vu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class j_ extends ms{_toFieldTransform(e){return new vu(e.path,new Eo)}isEqual(e){return e instanceof j_}}class z_ extends ms{constructor(e,n){super(e),this.bu=n}_toFieldTransform(e){const n=$P(this,e,!0),r=this.bu.map(s=>ys(s,n)),i=new ts(r);return new vu(e.path,i)}isEqual(e){return e instanceof z_&&_l(this.bu,e.bu)}}class q_ extends ms{constructor(e,n){super(e),this.bu=n}_toFieldTransform(e){const n=$P(this,e,!0),r=this.bu.map(s=>ys(s,n)),i=new ns(r);return new vu(e.path,i)}isEqual(e){return e instanceof q_&&_l(this.bu,e.bu)}}class W_ extends ms{constructor(e,n){super(e),this.Du=n}_toFieldTransform(e){const n=new Io(e.serializer,g1(e.serializer,this.Du));return new vu(e.path,n)}isEqual(e){return e instanceof W_&&this.Du===e.Du}}function G_(t,e,n,r){const i=t.Su(1,e,n);H_("Data must be an object, but it was:",i,r);const s=[],o=nt.empty();ps(r,(l,u)=>{const c=Q_(e,l,n);u=j(u);const d=i.fu(c);if(u instanceof Au)s.push(c);else{const h=ys(u,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new bt(s);return new FP(o,a,i.fieldTransforms)}function K_(t,e,n,r,i,s){const o=t.Su(1,e,n),a=[Gm(e,r,n)],l=[i];if(s.length%2!=0)throw new R(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Gm(e,s[h])),l.push(s[h+1]);const u=[],c=nt.empty();for(let h=a.length-1;h>=0;--h)if(!qP(u,a[h])){const m=a[h];let y=l[h];y=j(y);const _=o.fu(m);if(y instanceof Au)u.push(m);else{const v=ys(y,_);v!=null&&(u.push(m),c.set(m,v))}}const d=new bt(u);return new FP(c,d,o.fieldTransforms)}function BP(t,e,n,r=!1){return ys(n,t.Su(r?4:3,e))}function ys(t,e){if(zP(t=j(t)))return H_("Unsupported field value:",e,t),jP(t,e);if(t instanceof ms)return function(r,i){if(!UP(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ys(a,i.gu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=j(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return g1(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pe.fromDate(r);return{timestampValue:To(i.serializer,s)}}if(r instanceof pe){const s=new pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:To(i.serializer,s)}}if(r instanceof $h)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Mn)return{bytesValue:C1(i.serializer,r._byteString)};if(r instanceof Ee){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:h_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${Uh(r)}`)}(t,e)}function jP(t,e){const n={};return YR(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(t,(r,i)=>{const s=ys(i,e.Ru(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function zP(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pe||t instanceof $h||t instanceof Mn||t instanceof Ee||t instanceof ms)}function H_(t,e,n){if(!zP(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Uh(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function Gm(t,e,n){if((e=j(e))instanceof ei)return e._internalPath;if(typeof e=="string")return Q_(t,e);throw Nd("Field path arguments must be of type string or ",t,!1,void 0,n)}const Q4=new RegExp("[~\\*/\\[\\]]");function Q_(t,e,n){if(e.search(Q4)>=0)throw Nd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ei(...e.split("."))._internalPath}catch{throw Nd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new R(T.INVALID_ARGUMENT,a+t+l)}function qP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ee(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Y4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Y4 extends Wl{data(){return super.data()}}function zh(t,e){return typeof e=="string"?Q_(t,e):e instanceof ei?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new R(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Y_{}class Ru extends Y_{}function yr(t,e,...n){let r=[];e instanceof Y_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof J_).length,a=s.filter(l=>l instanceof qh).length;if(o>1||o>0&&a>0)throw new R(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class qh extends Ru{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new qh(e,n,r)}_apply(e){const n=this._parse(e);return KP(e._query,n),new St(e.firestore,e.converter,bm(e._query,n))}_parse(e){const n=gs(e.firestore);return function(s,o,a,l,u,c,d){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new R(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){kI(d,c);const m=[];for(const y of d)m.push(CI(l,s,y));h={arrayValue:{values:m}}}else h=CI(l,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||kI(d,c),h=BP(a,o,d,c==="in"||c==="not-in");return J.create(u,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function J4(t,e,n){const r=e,i=zh("where",t);return qh._create(i,r,n)}class J_ extends Y_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new J_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:re.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)KP(o,l),o=bm(o,l)}(e._query,n),new St(e.firestore,e.converter,bm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class X_ extends Ru{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new X_(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new R(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new R(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Bl(s,o)}(e._query,this._field,this._direction);return new St(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ur(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function X4(t,e="asc"){const n=e,r=zh("orderBy",t);return X_._create(r,n)}class Wh extends Ru{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Wh(e,n,r)}_apply(e){return new St(e.firestore,e.converter,Td(e._query,this._limit,this._limitType))}}function Z4(t){return CP("limit",t),Wh._create("limit",t,"F")}function eB(t){return CP("limitToLast",t),Wh._create("limitToLast",t,"L")}class Gh extends Ru{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Gh(e,n,r)}_apply(e){const n=GP(e,this.type,this._docOrFields,this._inclusive);return new St(e.firestore,e.converter,function(i,s){return new ur(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function tB(...t){return Gh._create("startAt",t,!0)}function nB(...t){return Gh._create("startAfter",t,!1)}class Kh extends Ru{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Kh(e,n,r)}_apply(e){const n=GP(e,this.type,this._docOrFields,this._inclusive);return new St(e.firestore,e.converter,function(i,s){return new ur(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function rB(...t){return Kh._create("endBefore",t,!1)}function iB(...t){return Kh._create("endAt",t,!0)}function GP(t,e,n,r){if(n[0]=j(n[0]),n[0]instanceof Wl)return function(s,o,a,l,u){if(!l)throw new R(T.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const d of io(s))if(d.field.isKeyField())c.push(Zi(o,l.key));else{const h=l.data.field(d.field);if(xh(h))throw new R(T.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const m=d.field.canonicalString();throw new R(T.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${m}' (used as the orderBy) does not exist.`)}c.push(h)}return new Xr(c,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=gs(t.firestore);return function(o,a,l,u,c,d){const h=o.explicitOrderBy;if(c.length>h.length)throw new R(T.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const m=[];for(let y=0;y<c.length;y++){const _=c[y];if(h[y].field.isKeyField()){if(typeof _!="string")throw new R(T.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof _}`);if(!s_(o)&&_.indexOf("/")!==-1)throw new R(T.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${_}' contains a slash.`);const v=o.path.child(Y.fromString(_));if(!D.isDocumentKey(v))throw new R(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const p=new D(v);m.push(Zi(a,p))}else{const v=BP(l,u,_);m.push(v)}}return new Xr(m,d)}(t._query,t.firestore._databaseId,i,e,n,r)}}function CI(t,e,n){if(typeof(n=j(n))=="string"){if(n==="")throw new R(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!s_(e)&&n.indexOf("/")!==-1)throw new R(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Y.fromString(n));if(!D.isDocumentKey(r))throw new R(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Zi(t,new D(r))}if(n instanceof Ee)return Zi(t,n._key);throw new R(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Uh(n)}.`)}function kI(t,e){if(!Array.isArray(t)||t.length===0)throw new R(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function KP(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new R(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new R(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Z_{convertValue(e,n="none"){switch(Xi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw L()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ps(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new $h(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=r_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fl(e));default:return null}}convertTimestamp(e){const n=Hr(e);return new pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Y.fromString(e);$(U1(r));const i=new Yr(r.get(1),r.get(3)),s=new D(r.popFirst(5));return i.isEqual(n)||be(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class sB extends Z_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ee(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let ir=class extends Wl{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ja(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(zh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},Ja=class extends ir{data(e={}){return super.data(e)}},ti=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Vi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ja(this._firestore,this._userDataWriter,r.key,r,new Vi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new R(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ja(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Vi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ja(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Vi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:oB(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function oB(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}function HP(t,e){return t instanceof ir&&e instanceof ir?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof ti&&e instanceof ti&&t._firestore===e._firestore&&OP(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aB(t){t=ne(t,Ee);const e=ne(t.firestore,Pe);return SP(Xe(e),t._key).then(n=>tv(e,t,n))}class _s extends Z_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ee(this.firestore,null,n)}}function lB(t){t=ne(t,Ee);const e=ne(t.firestore,Pe),n=Xe(e),r=new _s(e);return C4(n,t._key).then(i=>new ir(e,r,t._key,i,new Vi(i!==null&&i.hasLocalMutations,!0),t.converter))}function uB(t){t=ne(t,Ee);const e=ne(t.firestore,Pe);return SP(Xe(e),t._key,{source:"server"}).then(n=>tv(e,t,n))}function cB(t){t=ne(t,St);const e=ne(t.firestore,Pe),n=Xe(e),r=new _s(e);return WP(t._query),AP(n,t._query).then(i=>new ti(e,r,t,i))}function dB(t){t=ne(t,St);const e=ne(t.firestore,Pe),n=Xe(e),r=new _s(e);return k4(n,t._query).then(i=>new ti(e,r,t,i))}function hB(t){t=ne(t,St);const e=ne(t.firestore,Pe),n=Xe(e),r=new _s(e);return AP(n,t._query,{source:"server"}).then(i=>new ti(e,r,t,i))}function xI(t,e,n){t=ne(t,Ee);const r=ne(t.firestore,Pe),i=Hh(t.converter,e,n);return Pu(r,[jh(gs(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ye.none())])}function Km(t,e,n,...r){t=ne(t,Ee);const i=ne(t.firestore,Pe),s=gs(i);let o;return o=typeof(e=j(e))=="string"||e instanceof ei?K_(s,"updateDoc",t._key,e,n,r):G_(s,"updateDoc",t._key,e),Pu(i,[o.toMutation(t._key,ye.exists(!0))])}function QP(t){return Pu(ne(t.firestore,Pe),[new Go(t._key,ye.none())])}function fB(t,e){const n=ne(t.firestore,Pe),r=ko(t),i=Hh(t.converter,e);return Pu(n,[jh(gs(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ye.exists(!1))]).then(()=>r)}function ev(t,...e){var n,r,i;t=j(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Wm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Wm(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof Ee)u=ne(t.firestore,Pe),c=qo(t._key.path),l={next:d=>{e[o]&&e[o](tv(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=ne(t,St);u=ne(d.firestore,Pe),c=d._query;const h=new _s(u);l={next:m=>{e[o]&&e[o](new ti(u,h,d,m))},error:e[o+1],complete:e[o+2]},WP(t._query)}return function(h,m,y,_){const v=new Mh(_),p=new k_(m,v,y);return h.asyncQueue.enqueueAndForget(async()=>R_(await Co(h),p)),()=>{v.La(),h.asyncQueue.enqueueAndForget(async()=>P_(await Co(h),p))}}(Xe(u),c,a,l)}function pB(t,e){return x4(Xe(t=ne(t,Pe)),Wm(e)?e:{next:e})}function Pu(t,e){return function(r,i){const s=new He;return r.asyncQueue.enqueueAndForget(async()=>i4(await U_(r),i,s)),s.promise}(Xe(t),e)}function tv(t,e,n){const r=n.docs.get(e._key),i=new _s(t);return new ir(t,i,e._key,r,new Vi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mB={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gB=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=gs(e)}set(e,n,r){this._verifyNotCommitted();const i=Ar(e,this._firestore),s=Hh(i.converter,n,r),o=jh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,ye.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Ar(e,this._firestore);let o;return o=typeof(n=j(n))=="string"||n instanceof ei?K_(this._dataReader,"WriteBatch.update",s._key,n,r,i):G_(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,ye.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Ar(e,this._firestore);return this._mutations=this._mutations.concat(new Go(n._key,ye.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new R(T.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Ar(t,e){if((t=j(t)).firestore!==e)throw new R(T.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yB=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=gs(n)}get(n){const r=Ar(n,this._firestore),i=new sB(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return L();const o=s[0];if(o.isFoundDocument())return new Wl(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Wl(this._firestore,i,r._key,null,r.converter);throw L()})}set(n,r,i){const s=Ar(n,this._firestore),o=Hh(s.converter,r,i),a=jh(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Ar(n,this._firestore);let a;return a=typeof(r=j(r))=="string"||r instanceof ei?K_(this._dataReader,"Transaction.update",o._key,r,i,s):G_(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Ar(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Ar(e,this._firestore),r=new _s(this._firestore);return super.get(e).then(i=>new ir(this._firestore,r,n._key,i._document,new Vi(!1,!1),n.converter))}};function _B(t,e,n){t=ne(t,Pe);const r=Object.assign(Object.assign({},mB),n);return function(s){if(s.maxAttempts<1)throw new R(T.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new He;return s.asyncQueue.enqueueAndForget(async()=>{const u=await A4(s);new T4(s.asyncQueue,u,a,o,l).ja()}),l.promise}(Xe(t),i=>e(new yB(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vB(){return new Au("deleteField")}function wB(){return new j_("serverTimestamp")}function EB(...t){return new z_("arrayUnion",t)}function IB(...t){return new q_("arrayRemove",t)}function TB(t){return new W_("increment",t)}(function(e,n=!0){(function(i){zo=i})(si),Gr(new On("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Pe(new O2(r.getProvider("auth-internal")),new F2(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new R(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yr(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),bn(AE,"4.4.2",e),bn(AE,"4.4.2","esm2017")})();const SB="@firebase/firestore-compat",AB="0.3.25";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new R("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(){if(typeof Uint8Array>"u")throw new R("unimplemented","Uint8Arrays are not available in this environment.")}function bI(){if(!uU())throw new R("unimplemented","Blobs are unavailable in Firestore in this environment.")}let YP=class Hm{constructor(e){this._delegate=e}static fromBase64String(e){return bI(),new Hm(Mn.fromBase64String(e))}static fromUint8Array(e){return NI(),new Hm(Mn.fromUint8Array(e))}toBase64(){return bI(),this._delegate.toBase64()}toUint8Array(){return NI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(t){return RB(t,["next","error","complete"])}function RB(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PB{enableIndexedDbPersistence(e,n){return F4(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return U4(e._delegate)}clearIndexedDbPersistence(e){return $4(e._delegate)}}class JP{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Yr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&mn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){kP(this._delegate,e,n,r)}enableNetwork(){return j4(this._delegate)}disableNetwork(){return z4(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,PP("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return B4(this._delegate)}onSnapshotsInSync(e){return pB(this._delegate,e)}get app(){if(!this._appCompat)throw new R("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new xo(this,B_(this._delegate,e))}catch(n){throw _t(n,"collection()","Firestore.collection()")}}doc(e){try{return new Xt(this,ko(this._delegate,e))}catch(n){throw _t(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new yt(this,D4(this._delegate,e))}catch(n){throw _t(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return _B(this._delegate,n=>e(new XP(this,n)))}batch(){return Xe(this._delegate),new ZP(new gB(this._delegate,e=>Pu(this._delegate,e)))}loadBundle(e){return q4(this._delegate,e)}namedQuery(e){return W4(this._delegate,e).then(n=>n?new yt(this,n):null)}}class Qh extends Z_{constructor(e){super(),this.firestore=e}convertBytes(e){return new YP(new Mn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Xt.forKey(n,this.firestore,null)}}function CB(t){x2(t)}class XP{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Qh(e)}get(e){const n=Li(e);return this._delegate.get(n).then(r=>new Gl(this._firestore,new ir(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Li(e);return r?(nv("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Li(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Li(e);return this._delegate.delete(n),this}}class ZP{constructor(e){this._delegate=e}set(e,n,r){const i=Li(e);return r?(nv("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Li(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Li(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class os{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Ja(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Kl(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=os.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new os(e,new Qh(e),n),i.set(n,s)),s}}os.INSTANCES=new WeakMap;class Xt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Qh(e)}static forPath(e,n,r){if(e.length%2!==0)throw new R("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Xt(n,new Ee(n._delegate,r,new D(e)))}static forKey(e,n,r){return new Xt(n,new Ee(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new xo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new xo(this.firestore,B_(this._delegate,e))}catch(n){throw _t(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=j(e),e instanceof Ee?DP(this._delegate,e):!1}set(e,n){n=nv("DocumentReference.set",n);try{return n?xI(this._delegate,e,n):xI(this._delegate,e)}catch(r){throw _t(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?Km(this._delegate,e):Km(this._delegate,e,n,...r)}catch(i){throw _t(i,"updateDoc()","DocumentReference.update()")}}delete(){return QP(this._delegate)}onSnapshot(...e){const n=eC(e),r=tC(e,i=>new Gl(this.firestore,new ir(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return ev(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=lB(this._delegate):(e==null?void 0:e.source)==="server"?n=uB(this._delegate):n=aB(this._delegate),n.then(r=>new Gl(this.firestore,new ir(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Xt(this.firestore,e?this._delegate.withConverter(os.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function _t(t,e,n){return t.message=t.message.replace(e,n),t}function eC(t){for(const e of t)if(typeof e=="object"&&!Qm(e))return e;return{}}function tC(t,e){var n,r;let i;return Qm(t[0])?i=t[0]:Qm(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Gl{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Xt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return HP(this._delegate,e._delegate)}}class Kl extends Gl{data(e){const n=this._delegate.data(e);return this._delegate._converter||N2(n!==void 0),n}}class yt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Qh(e)}where(e,n,r){try{return new yt(this.firestore,yr(this._delegate,J4(e,n,r)))}catch(i){throw _t(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new yt(this.firestore,yr(this._delegate,X4(e,n)))}catch(r){throw _t(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new yt(this.firestore,yr(this._delegate,Z4(e)))}catch(n){throw _t(n,"limit()","Query.limit()")}}limitToLast(e){try{return new yt(this.firestore,yr(this._delegate,eB(e)))}catch(n){throw _t(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new yt(this.firestore,yr(this._delegate,tB(...e)))}catch(n){throw _t(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new yt(this.firestore,yr(this._delegate,nB(...e)))}catch(n){throw _t(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new yt(this.firestore,yr(this._delegate,rB(...e)))}catch(n){throw _t(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new yt(this.firestore,yr(this._delegate,iB(...e)))}catch(n){throw _t(n,"endAt()","Query.endAt()")}}isEqual(e){return OP(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=dB(this._delegate):(e==null?void 0:e.source)==="server"?n=hB(this._delegate):n=cB(this._delegate),n.then(r=>new Ym(this.firestore,new ti(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=eC(e),r=tC(e,i=>new Ym(this.firestore,new ti(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return ev(this._delegate,n,r)}withConverter(e){return new yt(this.firestore,e?this._delegate.withConverter(os.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class kB{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Kl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Ym{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new yt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Kl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new kB(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Kl(this._firestore,r))})}isEqual(e){return HP(this._delegate,e._delegate)}}class xo extends yt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Xt(this.firestore,e):null}doc(e){try{return e===void 0?new Xt(this.firestore,ko(this._delegate)):new Xt(this.firestore,ko(this._delegate,e))}catch(n){throw _t(n,"doc()","CollectionReference.doc()")}}add(e){return fB(this._delegate,e).then(n=>new Xt(this.firestore,n))}isEqual(e){return DP(this._delegate,e._delegate)}withConverter(e){return new xo(this.firestore,e?this._delegate.withConverter(os.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Li(t){return ne(t,Ee)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(...e){this._delegate=new ei(...e)}static documentId(){return new rv(ge.keyField().canonicalString())}isEqual(e){return e=j(e),e instanceof ei?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this._delegate=e}static serverTimestamp(){const e=wB();return e._methodName="FieldValue.serverTimestamp",new Pi(e)}static delete(){const e=vB();return e._methodName="FieldValue.delete",new Pi(e)}static arrayUnion(...e){const n=EB(...e);return n._methodName="FieldValue.arrayUnion",new Pi(n)}static arrayRemove(...e){const n=IB(...e);return n._methodName="FieldValue.arrayRemove",new Pi(n)}static increment(e){const n=TB(e);return n._methodName="FieldValue.increment",new Pi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xB={Firestore:JP,GeoPoint:$h,Timestamp:pe,Blob:YP,Transaction:XP,WriteBatch:ZP,DocumentReference:Xt,DocumentSnapshot:Gl,Query:yt,QueryDocumentSnapshot:Kl,QuerySnapshot:Ym,CollectionReference:xo,FieldPath:rv,FieldValue:Pi,setLogLevel:CB,CACHE_SIZE_UNLIMITED:L4};function NB(t,e){t.INTERNAL.registerComponent(new On("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},xB)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bB(t){NB(t,(e,n)=>new JP(e,n,new PB)),t.registerVersion(SB,AB)}bB(oi);const DB={apiKey:"AIzaSyAAiZkyp0FryopIxv39Bo_zryXcNz6Kddk",authDomain:"alpaago-assignment-890cf.firebaseapp.com",projectId:"alpaago-assignment-890cf",storageBucket:"alpaago-assignment-890cf.appspot.com",messagingSenderId:"148147243105",appId:"1:148147243105:web:c2f4b31835170f8b960220"};oi.initializeApp(DB);const iv=oi.auth(),OB=oi.firestore(),nC="/alpaago-assignment/assets/login-img-mc1w6Pvu.png",VB=()=>{const[t,e]=S.useState(""),[n,r]=S.useState(""),[i,s]=S.useState(""),o=Zd(),a=async l=>{l.preventDefault();try{const c=(await iv.createUserWithEmailAndPassword(t,n)).user.uid,d=new Date;await OB.collection("users").doc(c).set({email:t,status:"active",addeddate:pe.fromDate(d)}),o("/home")}catch(u){s(u.message),alert(u.message)}};return E.jsx("div",{className:"container",children:E.jsxs("div",{className:"row justify-content-center mt-5",children:[E.jsxs("div",{className:"col-md-6",style:{backgroundColor:"#f8f9fa",padding:"20px",borderRadius:"10px"},children:[E.jsx("h2",{className:"mb-4",children:"Create Your Account"}),E.jsxs("form",{onSubmit:a,children:[E.jsxs("div",{className:"form-group",children:[E.jsx("label",{htmlFor:"email",children:"Email"}),E.jsx("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter email",value:t,onChange:l=>e(l.target.value)})]}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{htmlFor:"password",children:"Password"}),E.jsx("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter password",value:n,onChange:l=>r(l.target.value)})]}),E.jsx("button",{type:"submit",className:"btn btn-primary btn-block mt-3",children:"Submit"})]}),E.jsxs("p",{className:"mt-3 text-center",children:["Already have an account? ",E.jsx(po,{to:"/login",children:"Log In"})]})]}),E.jsx("div",{className:"col-md-6",children:E.jsx("img",{src:nC,alt:"Signup Image",className:"img-fluid"})})]})})};var rC={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(rC);var LB=rC.exports;const Oe=Od(LB);function Jm(){return Jm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jm.apply(this,arguments)}function iC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function DI(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function MB(t){var e=FB(t,"string");return typeof e=="symbol"?e:String(e)}function FB(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function UB(t,e,n){var r=S.useRef(t!==void 0),i=S.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,S.useCallback(function(u){for(var c=arguments.length,d=new Array(c>1?c-1:0),h=1;h<c;h++)d[h-1]=arguments[h];n&&n.apply(void 0,[u].concat(d)),o(u)},[n])]}function $B(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[DI(r)],a=s[r],l=iC(s,[DI(r),r].map(MB)),u=e[r],c=UB(a,o,t[u]),d=c[0],h=c[1];return Jm({},l,(i={},i[r]=d,i[u]=h,i))},t)}function Xm(t,e){return Xm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Xm(t,e)}function BB(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Xm(t,e)}const jB=["xxl","xl","lg","md","sm","xs"],zB="xs",sv=S.createContext({prefixes:{},breakpoints:jB,minBreakpoint:zB});function mt(t,e){const{prefixes:n}=S.useContext(sv);return t||n[e]||e}function qB(){const{breakpoints:t}=S.useContext(sv);return t}function WB(){const{minBreakpoint:t}=S.useContext(sv);return t}function GB(t){return t&&t.ownerDocument||document}function KB(t){var e=GB(t);return e&&e.defaultView||window}function HB(t,e){return KB(t).getComputedStyle(t,e)}var QB=/([A-Z])/g;function YB(t){return t.replace(QB,"-$1").toLowerCase()}var JB=/^ms-/;function oc(t){return YB(t).replace(JB,"-ms-")}var XB=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function ZB(t){return!!(t&&XB.test(t))}function sC(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(oc(e))||HB(t).getPropertyValue(oc(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(oc(i)):ZB(i)?r+=i+"("+s+") ":n+=oc(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var oC={exports:{}},ej="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",tj=ej,nj=tj;function aC(){}function lC(){}lC.resetWarningCache=aC;var rj=function(){function t(r,i,s,o,a,l){if(l!==nj){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:lC,resetWarningCache:aC};return n.PropTypes=n,n};oC.exports=rj();var ij=oC.exports;const Yn=Od(ij),OI={disabled:!1},uC=Bn.createContext(null);var sj=function(e){return e.scrollTop},ba="unmounted",Ii="exited",Er="entering",Ci="entered",Zm="exiting",hr=function(t){BB(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=Ii,s.appearStatus=Er):l=Ci:r.unmountOnExit||r.mountOnEnter?l=ba:l=Ii,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===ba?{status:Ii}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==Er&&o!==Ci&&(s=Er):(o===Er||o===Ci)&&(s=Zm)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===Er){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:Ta.findDOMNode(this);o&&sj(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Ii&&this.setState({status:ba})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[Ta.findDOMNode(this),a],u=l[0],c=l[1],d=this.getTimeouts(),h=a?d.appear:d.enter;if(!i&&!o||OI.disabled){this.safeSetState({status:Ci},function(){s.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:Er},function(){s.props.onEntering(u,c),s.onTransitionEnd(h,function(){s.safeSetState({status:Ci},function(){s.props.onEntered(u,c)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:Ta.findDOMNode(this);if(!s||OI.disabled){this.safeSetState({status:Ii},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Zm},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:Ii},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:Ta.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===ba)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=iC(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Bn.createElement(uC.Provider,{value:null},typeof o=="function"?o(i,a):Bn.cloneElement(Bn.Children.only(o),a))},e}(Bn.Component);hr.contextType=uC;hr.propTypes={};function Rs(){}hr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Rs,onEntering:Rs,onEntered:Rs,onExit:Rs,onExiting:Rs,onExited:Rs};hr.UNMOUNTED=ba;hr.EXITED=Ii;hr.ENTERING=Er;hr.ENTERED=Ci;hr.EXITING=Zm;const oj=hr,aj=!!(typeof window<"u"&&window.document&&window.document.createElement);var eg=!1,tg=!1;try{var tp={get passive(){return eg=!0},get once(){return tg=eg=!0}};aj&&(window.addEventListener("test",tp,tp),window.removeEventListener("test",tp,!0))}catch{}function lj(t,e,n,r){if(r&&typeof r!="boolean"&&!tg){var i=r.once,s=r.capture,o=n;!tg&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,eg?r:s)}t.addEventListener(e,n,r)}function uj(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function cC(t,e,n,r){return lj(t,e,n,r),function(){uj(t,e,n,r)}}function cj(t,e,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function dj(t){var e=sC(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function hj(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||cj(t,"transitionend",!0)},e+n),s=cC(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function fj(t,e,n,r){n==null&&(n=dj(t)||0);var i=hj(t,n,r),s=cC(t,"transitionend",e);return function(){i(),s()}}function VI(t,e){const n=sC(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function pj(t,e){const n=VI(t,"transitionDuration"),r=VI(t,"transitionDelay"),i=fj(t,s=>{s.target===t&&(i(),e(s))},n+r)}function mj(t){t.offsetHeight}const LI=t=>!t||typeof t=="function"?t:e=>{t.current=e};function gj(t,e){const n=LI(t),r=LI(e);return i=>{n&&n(i),r&&r(i)}}function yj(t,e){return S.useMemo(()=>gj(t,e),[t,e])}function _j(t){return t&&"setState"in t?Ta.findDOMNode(t):t??null}const vj=Bn.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...u},c)=>{const d=S.useRef(null),h=yj(d,l),m=k=>{h(_j(k))},y=k=>b=>{k&&d.current&&k(d.current,b)},_=S.useCallback(y(t),[t]),v=S.useCallback(y(e),[e]),p=S.useCallback(y(n),[n]),f=S.useCallback(y(r),[r]),g=S.useCallback(y(i),[i]),I=S.useCallback(y(s),[s]),P=S.useCallback(y(o),[o]);return E.jsx(oj,{ref:c,...u,onEnter:_,onEntered:p,onEntering:v,onExit:f,onExited:I,onExiting:g,addEndListener:P,nodeRef:d,children:typeof a=="function"?(k,b)=>a(k,{...b,ref:m}):Bn.cloneElement(a,{ref:m})})}),wj=vj;function Ej(t){const e=S.useRef(t);return S.useEffect(()=>{e.current=t},[t]),e}function dC(t){const e=Ej(t);return S.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const Ij=t=>S.forwardRef((e,n)=>E.jsx("div",{...e,ref:n,className:Oe(e.className,t)})),hC=Ij("h4");hC.displayName="DivStyledAsH4";const fC=S.forwardRef(({className:t,bsPrefix:e,as:n=hC,...r},i)=>(e=mt(e,"alert-heading"),E.jsx(n,{ref:i,className:Oe(t,e),...r})));fC.displayName="AlertHeading";const Tj=fC,Sj=["as","disabled"];function Aj(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Rj(t){return!t||t.trim()==="#"}function ov({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},u];const c=h=>{if((e||t==="a"&&Rj(n))&&h.preventDefault(),e){h.stopPropagation();return}o==null||o(h)},d=h=>{h.key===" "&&(h.preventDefault(),c(h))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:c,onKeyDown:d},u]}const Pj=S.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=Aj(t,Sj);const[s,{tagName:o}]=ov(Object.assign({tagName:n,disabled:r},i));return E.jsx(o,Object.assign({},i,s,{ref:e}))});Pj.displayName="Button";const Cj=["onKeyDown"];function kj(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function xj(t){return!t||t.trim()==="#"}const pC=S.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=kj(t,Cj);const[i]=ov(Object.assign({tagName:"a"},r)),s=dC(o=>{i.onKeyDown(o),n==null||n(o)});return xj(r.href)||r.role==="button"?E.jsx("a",Object.assign({ref:e},r,i,{onKeyDown:s})):E.jsx("a",Object.assign({ref:e},r,{onKeyDown:n}))});pC.displayName="Anchor";const Nj=pC,mC=S.forwardRef(({className:t,bsPrefix:e,as:n=Nj,...r},i)=>(e=mt(e,"alert-link"),E.jsx(n,{ref:i,className:Oe(t,e),...r})));mC.displayName="AlertLink";const bj=mC,Dj={[Er]:"show",[Ci]:"show"},gC=S.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:r,...i},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},a=S.useCallback((l,u)=>{mj(l),r==null||r(l,u)},[r]);return E.jsx(wj,{ref:s,addEndListener:pj,...o,onEnter:a,childRef:e.ref,children:(l,u)=>S.cloneElement(e,{...u,className:Oe("fade",t,e.props.className,Dj[l],n[l])})})});gC.displayName="Fade";const MI=gC,Oj={"aria-label":Yn.string,onClick:Yn.func,variant:Yn.oneOf(["white"])},av=S.forwardRef(({className:t,variant:e,"aria-label":n="Close",...r},i)=>E.jsx("button",{ref:i,type:"button",className:Oe("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...r}));av.displayName="CloseButton";av.propTypes=Oj;const Vj=av,yC=S.forwardRef((t,e)=>{const{bsPrefix:n,show:r=!0,closeLabel:i="Close alert",closeVariant:s,className:o,children:a,variant:l="primary",onClose:u,dismissible:c,transition:d=MI,...h}=$B(t,{show:"onClose"}),m=mt(n,"alert"),y=dC(p=>{u&&u(!1,p)}),_=d===!0?MI:d,v=E.jsxs("div",{role:"alert",..._?void 0:h,ref:e,className:Oe(o,m,l&&`${m}-${l}`,c&&`${m}-dismissible`),children:[c&&E.jsx(Vj,{onClick:y,"aria-label":i,variant:s}),a]});return _?E.jsx(_,{unmountOnExit:!0,...h,ref:void 0,in:r,children:v}):r?v:null});yC.displayName="Alert";const FI=Object.assign(yC,{Link:bj,Heading:Tj}),_C=S.forwardRef(({as:t,bsPrefix:e,variant:n="primary",size:r,active:i=!1,disabled:s=!1,className:o,...a},l)=>{const u=mt(e,"btn"),[c,{tagName:d}]=ov({tagName:t,disabled:s,...a}),h=d;return E.jsx(h,{...c,...a,ref:l,disabled:s,className:Oe(o,u,i&&"active",n&&`${u}-${n}`,r&&`${u}-${r}`,a.href&&s&&"disabled")})});_C.displayName="Button";const Lj=_C;function Mj(t,e){return S.Children.toArray(t).some(n=>S.isValidElement(n)&&n.type===e)}function Fj({as:t,bsPrefix:e,className:n,...r}){e=mt(e,"col");const i=qB(),s=WB(),o=[],a=[];return i.forEach(l=>{const u=r[l];delete r[l];let c,d,h;typeof u=="object"&&u!=null?{span:c,offset:d,order:h}=u:c=u;const m=l!==s?`-${l}`:"";c&&o.push(c===!0?`${e}${m}`:`${e}${m}-${c}`),h!=null&&a.push(`order${m}-${h}`),d!=null&&a.push(`offset${m}-${d}`)}),[{...r,className:Oe(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const vC=S.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=Fj(t);return E.jsx(i,{...r,ref:e,className:Oe(n,!o.length&&s)})});vC.displayName="Col";const Uj=vC,$j={type:Yn.string,tooltip:Yn.bool,as:Yn.elementType},lv=S.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:r=!1,...i},s)=>E.jsx(t,{...i,ref:s,className:Oe(e,`${n}-${r?"tooltip":"feedback"}`)}));lv.displayName="Feedback";lv.propTypes=$j;const wC=lv,Bj=S.createContext({}),sr=Bj,EC=S.forwardRef(({id:t,bsPrefix:e,className:n,type:r="checkbox",isValid:i=!1,isInvalid:s=!1,as:o="input",...a},l)=>{const{controlId:u}=S.useContext(sr);return e=mt(e,"form-check-input"),E.jsx(o,{...a,ref:l,type:r,id:t||u,className:Oe(n,e,i&&"is-valid",s&&"is-invalid")})});EC.displayName="FormCheckInput";const IC=EC,TC=S.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...r},i)=>{const{controlId:s}=S.useContext(sr);return t=mt(t,"form-check-label"),E.jsx("label",{...r,ref:i,htmlFor:n||s,className:Oe(e,t)})});TC.displayName="FormCheckLabel";const ng=TC,SC=S.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:r=!1,reverse:i=!1,disabled:s=!1,isValid:o=!1,isInvalid:a=!1,feedbackTooltip:l=!1,feedback:u,feedbackType:c,className:d,style:h,title:m="",type:y="checkbox",label:_,children:v,as:p="input",...f},g)=>{e=mt(e,"form-check"),n=mt(n,"form-switch");const{controlId:I}=S.useContext(sr),P=S.useMemo(()=>({controlId:t||I}),[I,t]),k=!v&&_!=null&&_!==!1||Mj(v,ng),b=E.jsx(IC,{...f,type:y==="switch"?"checkbox":y,ref:g,isValid:o,isInvalid:a,disabled:s,as:p});return E.jsx(sr.Provider,{value:P,children:E.jsx("div",{style:h,className:Oe(d,k&&e,r&&`${e}-inline`,i&&`${e}-reverse`,y==="switch"&&n),children:v||E.jsxs(E.Fragment,{children:[b,k&&E.jsx(ng,{title:m,children:_}),u&&E.jsx(wC,{type:c,tooltip:l,children:u})]})})})});SC.displayName="FormCheck";const bd=Object.assign(SC,{Input:IC,Label:ng}),AC=S.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:r,id:i,className:s,isValid:o=!1,isInvalid:a=!1,plaintext:l,readOnly:u,as:c="input",...d},h)=>{const{controlId:m}=S.useContext(sr);return t=mt(t,"form-control"),E.jsx(c,{...d,type:e,size:r,ref:h,readOnly:u,id:i||m,className:Oe(s,l?`${t}-plaintext`:t,n&&`${t}-${n}`,e==="color"&&`${t}-color`,o&&"is-valid",a&&"is-invalid")})});AC.displayName="FormControl";const jj=Object.assign(AC,{Feedback:wC}),RC=S.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=mt(e,"form-floating"),E.jsx(n,{ref:i,className:Oe(t,e),...r})));RC.displayName="FormFloating";const zj=RC,PC=S.forwardRef(({controlId:t,as:e="div",...n},r)=>{const i=S.useMemo(()=>({controlId:t}),[t]);return E.jsx(sr.Provider,{value:i,children:E.jsx(e,{...n,ref:r})})});PC.displayName="FormGroup";const CC=PC,kC=S.forwardRef(({as:t="label",bsPrefix:e,column:n=!1,visuallyHidden:r=!1,className:i,htmlFor:s,...o},a)=>{const{controlId:l}=S.useContext(sr);e=mt(e,"form-label");let u="col-form-label";typeof n=="string"&&(u=`${u} ${u}-${n}`);const c=Oe(i,e,r&&"visually-hidden",n&&u);return s=s||l,n?E.jsx(Uj,{ref:a,as:"label",className:c,htmlFor:s,...o}):E.jsx(t,{ref:a,className:c,htmlFor:s,...o})});kC.displayName="FormLabel";const qj=kC,xC=S.forwardRef(({bsPrefix:t,className:e,id:n,...r},i)=>{const{controlId:s}=S.useContext(sr);return t=mt(t,"form-range"),E.jsx("input",{...r,type:"range",ref:i,className:Oe(e,t),id:n||s})});xC.displayName="FormRange";const Wj=xC,NC=S.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:r,isValid:i=!1,isInvalid:s=!1,id:o,...a},l)=>{const{controlId:u}=S.useContext(sr);return t=mt(t,"form-select"),E.jsx("select",{...a,size:n,ref:l,className:Oe(r,t,e&&`${t}-${e}`,i&&"is-valid",s&&"is-invalid"),id:o||u})});NC.displayName="FormSelect";const Gj=NC,bC=S.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:r,...i},s)=>(t=mt(t,"form-text"),E.jsx(n,{...i,ref:s,className:Oe(e,t,r&&"text-muted")})));bC.displayName="FormText";const Kj=bC,DC=S.forwardRef((t,e)=>E.jsx(bd,{...t,ref:e,type:"switch"}));DC.displayName="Switch";const Hj=Object.assign(DC,{Input:bd.Input,Label:bd.Label}),OC=S.forwardRef(({bsPrefix:t,className:e,children:n,controlId:r,label:i,...s},o)=>(t=mt(t,"form-floating"),E.jsxs(CC,{ref:o,className:Oe(e,t),controlId:r,...s,children:[n,E.jsx("label",{htmlFor:r,children:i})]})));OC.displayName="FloatingLabel";const Qj=OC,Yj={_ref:Yn.any,validated:Yn.bool,as:Yn.elementType},uv=S.forwardRef(({className:t,validated:e,as:n="form",...r},i)=>E.jsx(n,{...r,ref:i,className:Oe(t,e&&"was-validated")}));uv.displayName="Form";uv.propTypes=Yj;const yi=Object.assign(uv,{Group:CC,Control:jj,Floating:zj,Check:bd,Switch:Hj,Label:qj,Text:Kj,Range:Wj,Select:Gj,FloatingLabel:Qj}),Jj=()=>{const[t,e]=S.useState(""),[n,r]=S.useState(""),[i,s]=S.useState(null),[o,a]=S.useState(!1),l=Zd(),u=async c=>{c.preventDefault();try{await iv.signInWithEmailAndPassword(t,n),a(!0),l("/home")}catch(d){s("Invalid Credentials"),console.error(d.message)}};return E.jsx("div",{className:"container",children:E.jsxs("div",{className:"row mt-5",children:[E.jsx("div",{className:"col-md-6",children:E.jsx("img",{src:nC,alt:"login",className:"img-fluid"})}),E.jsxs("div",{className:"col-md-6",style:{backgroundColor:"#f8f9fa",padding:"20px",borderRadius:"10px"},children:[i&&E.jsx(FI,{variant:"danger",children:i}),o&&E.jsx(FI,{variant:"success",children:"Login successful!"}),E.jsx("h2",{className:"mb-4",children:"Welcome!"}),E.jsxs(yi,{onSubmit:u,children:[E.jsxs(yi.Group,{controlId:"formBasicEmail",children:[E.jsx(yi.Label,{children:"Email address"}),E.jsx(yi.Control,{type:"email",placeholder:"Enter email",value:t,onChange:c=>e(c.target.value)})]}),E.jsxs(yi.Group,{controlId:"formBasicPassword",children:[E.jsx(yi.Label,{children:"Password"}),E.jsx(yi.Control,{type:"password",placeholder:"Password",value:n,onChange:c=>r(c.target.value)})]}),E.jsx(Lj,{variant:"primary",type:"submit",className:"btn-block mt-3",children:"Submit"})]}),E.jsxs("p",{className:"mt-3 text-center",children:["Don't have an account? ",E.jsx(po,{to:"/signup",children:"Sign Up"})]})]})]})})};function VC(t,e){return function(){return t.apply(e,arguments)}}const{toString:Xj}=Object.prototype,{getPrototypeOf:cv}=Object,Yh=(t=>e=>{const n=Xj.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Fn=t=>(t=t.toLowerCase(),e=>Yh(e)===t),Jh=t=>e=>typeof e===t,{isArray:Jo}=Array,Hl=Jh("undefined");function Zj(t){return t!==null&&!Hl(t)&&t.constructor!==null&&!Hl(t.constructor)&&en(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const LC=Fn("ArrayBuffer");function ez(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&LC(t.buffer),e}const tz=Jh("string"),en=Jh("function"),MC=Jh("number"),Xh=t=>t!==null&&typeof t=="object",nz=t=>t===!0||t===!1,Nc=t=>{if(Yh(t)!=="object")return!1;const e=cv(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},rz=Fn("Date"),iz=Fn("File"),sz=Fn("Blob"),oz=Fn("FileList"),az=t=>Xh(t)&&en(t.pipe),lz=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||en(t.append)&&((e=Yh(t))==="formdata"||e==="object"&&en(t.toString)&&t.toString()==="[object FormData]"))},uz=Fn("URLSearchParams"),cz=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Cu(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Jo(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function FC(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const UC=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,$C=t=>!Hl(t)&&t!==UC;function rg(){const{caseless:t}=$C(this)&&this||{},e={},n=(r,i)=>{const s=t&&FC(e,i)||i;Nc(e[s])&&Nc(r)?e[s]=rg(e[s],r):Nc(r)?e[s]=rg({},r):Jo(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Cu(arguments[r],n);return e}const dz=(t,e,n,{allOwnKeys:r}={})=>(Cu(e,(i,s)=>{n&&en(i)?t[s]=VC(i,n):t[s]=i},{allOwnKeys:r}),t),hz=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),fz=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},pz=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&cv(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},mz=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},gz=t=>{if(!t)return null;if(Jo(t))return t;let e=t.length;if(!MC(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},yz=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&cv(Uint8Array)),_z=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},vz=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},wz=Fn("HTMLFormElement"),Ez=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),UI=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Iz=Fn("RegExp"),BC=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Cu(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},Tz=t=>{BC(t,(e,n)=>{if(en(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(en(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Sz=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Jo(t)?r(t):r(String(t).split(e)),n},Az=()=>{},Rz=(t,e)=>(t=+t,Number.isFinite(t)?t:e),np="abcdefghijklmnopqrstuvwxyz",$I="0123456789",jC={DIGIT:$I,ALPHA:np,ALPHA_DIGIT:np+np.toUpperCase()+$I},Pz=(t=16,e=jC.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Cz(t){return!!(t&&en(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const kz=t=>{const e=new Array(10),n=(r,i)=>{if(Xh(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=Jo(r)?[]:{};return Cu(r,(o,a)=>{const l=n(o,i+1);!Hl(l)&&(s[a]=l)}),e[i]=void 0,s}}return r};return n(t,0)},xz=Fn("AsyncFunction"),Nz=t=>t&&(Xh(t)||en(t))&&en(t.then)&&en(t.catch),A={isArray:Jo,isArrayBuffer:LC,isBuffer:Zj,isFormData:lz,isArrayBufferView:ez,isString:tz,isNumber:MC,isBoolean:nz,isObject:Xh,isPlainObject:Nc,isUndefined:Hl,isDate:rz,isFile:iz,isBlob:sz,isRegExp:Iz,isFunction:en,isStream:az,isURLSearchParams:uz,isTypedArray:yz,isFileList:oz,forEach:Cu,merge:rg,extend:dz,trim:cz,stripBOM:hz,inherits:fz,toFlatObject:pz,kindOf:Yh,kindOfTest:Fn,endsWith:mz,toArray:gz,forEachEntry:_z,matchAll:vz,isHTMLForm:wz,hasOwnProperty:UI,hasOwnProp:UI,reduceDescriptors:BC,freezeMethods:Tz,toObjectSet:Sz,toCamelCase:Ez,noop:Az,toFiniteNumber:Rz,findKey:FC,global:UC,isContextDefined:$C,ALPHABET:jC,generateString:Pz,isSpecCompliantForm:Cz,toJSONObject:kz,isAsyncFn:xz,isThenable:Nz};function ee(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}A.inherits(ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:A.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const zC=ee.prototype,qC={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{qC[t]={value:t}});Object.defineProperties(ee,qC);Object.defineProperty(zC,"isAxiosError",{value:!0});ee.from=(t,e,n,r,i,s)=>{const o=Object.create(zC);return A.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),ee.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const bz=null;function ig(t){return A.isPlainObject(t)||A.isArray(t)}function WC(t){return A.endsWith(t,"[]")?t.slice(0,-2):t}function BI(t,e,n){return t?t.concat(e).map(function(i,s){return i=WC(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function Dz(t){return A.isArray(t)&&!t.some(ig)}const Oz=A.toFlatObject(A,{},null,function(e){return/^is[A-Z]/.test(e)});function Zh(t,e,n){if(!A.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=A.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,v){return!A.isUndefined(v[_])});const r=n.metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&A.isSpecCompliantForm(e);if(!A.isFunction(i))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(A.isDate(y))return y.toISOString();if(!l&&A.isBlob(y))throw new ee("Blob is not supported. Use a Buffer instead.");return A.isArrayBuffer(y)||A.isTypedArray(y)?l&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function c(y,_,v){let p=y;if(y&&!v&&typeof y=="object"){if(A.endsWith(_,"{}"))_=r?_:_.slice(0,-2),y=JSON.stringify(y);else if(A.isArray(y)&&Dz(y)||(A.isFileList(y)||A.endsWith(_,"[]"))&&(p=A.toArray(y)))return _=WC(_),p.forEach(function(g,I){!(A.isUndefined(g)||g===null)&&e.append(o===!0?BI([_],I,s):o===null?_:_+"[]",u(g))}),!1}return ig(y)?!0:(e.append(BI(v,_,s),u(y)),!1)}const d=[],h=Object.assign(Oz,{defaultVisitor:c,convertValue:u,isVisitable:ig});function m(y,_){if(!A.isUndefined(y)){if(d.indexOf(y)!==-1)throw Error("Circular reference detected in "+_.join("."));d.push(y),A.forEach(y,function(p,f){(!(A.isUndefined(p)||p===null)&&i.call(e,p,A.isString(f)?f.trim():f,_,h))===!0&&m(p,_?_.concat(f):[f])}),d.pop()}}if(!A.isObject(t))throw new TypeError("data must be an object");return m(t),e}function jI(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function dv(t,e){this._pairs=[],t&&Zh(t,this,e)}const GC=dv.prototype;GC.append=function(e,n){this._pairs.push([e,n])};GC.toString=function(e){const n=e?function(r){return e.call(this,r,jI)}:jI;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Vz(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function KC(t,e,n){if(!e)return t;const r=n&&n.encode||Vz,i=n&&n.serialize;let s;if(i?s=i(e,n):s=A.isURLSearchParams(e)?e.toString():new dv(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class zI{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){A.forEach(this.handlers,function(r){r!==null&&e(r)})}}const HC={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Lz=typeof URLSearchParams<"u"?URLSearchParams:dv,Mz=typeof FormData<"u"?FormData:null,Fz=typeof Blob<"u"?Blob:null,Uz={isBrowser:!0,classes:{URLSearchParams:Lz,FormData:Mz,Blob:Fz},protocols:["http","https","file","blob","url","data"]},QC=typeof window<"u"&&typeof document<"u",$z=(t=>QC&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),Bz=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",jz=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:QC,hasStandardBrowserEnv:$z,hasStandardBrowserWebWorkerEnv:Bz},Symbol.toStringTag,{value:"Module"})),kn={...jz,...Uz};function zz(t,e){return Zh(t,new kn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return kn.isNode&&A.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function qz(t){return A.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Wz(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function YC(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&A.isArray(i)?i.length:o,l?(A.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!A.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&A.isArray(i[o])&&(i[o]=Wz(i[o])),!a)}if(A.isFormData(t)&&A.isFunction(t.entries)){const n={};return A.forEachEntry(t,(r,i)=>{e(qz(r),i,n,0)}),n}return null}function Gz(t,e,n){if(A.isString(t))try{return(e||JSON.parse)(t),A.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const hv={transitional:HC,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=A.isObject(e);if(s&&A.isHTMLForm(e)&&(e=new FormData(e)),A.isFormData(e))return i?JSON.stringify(YC(e)):e;if(A.isArrayBuffer(e)||A.isBuffer(e)||A.isStream(e)||A.isFile(e)||A.isBlob(e))return e;if(A.isArrayBufferView(e))return e.buffer;if(A.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return zz(e,this.formSerializer).toString();if((a=A.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Zh(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),Gz(e)):e}],transformResponse:[function(e){const n=this.transitional||hv.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&A.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?ee.from(a,ee.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:kn.classes.FormData,Blob:kn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};A.forEach(["delete","get","head","post","put","patch"],t=>{hv.headers[t]={}});const fv=hv,Kz=A.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Hz=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&Kz[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},qI=Symbol("internals");function _a(t){return t&&String(t).trim().toLowerCase()}function bc(t){return t===!1||t==null?t:A.isArray(t)?t.map(bc):String(t)}function Qz(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Yz=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function rp(t,e,n,r,i){if(A.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!A.isString(e)){if(A.isString(r))return e.indexOf(r)!==-1;if(A.isRegExp(r))return r.test(e)}}function Jz(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Xz(t,e){const n=A.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class ef{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,l,u){const c=_a(l);if(!c)throw new Error("header name must be a non-empty string");const d=A.findKey(i,c);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||l]=bc(a))}const o=(a,l)=>A.forEach(a,(u,c)=>s(u,c,l));return A.isPlainObject(e)||e instanceof this.constructor?o(e,n):A.isString(e)&&(e=e.trim())&&!Yz(e)?o(Hz(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=_a(e),e){const r=A.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return Qz(i);if(A.isFunction(n))return n.call(this,i,r);if(A.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=_a(e),e){const r=A.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||rp(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=_a(o),o){const a=A.findKey(r,o);a&&(!n||rp(r,r[a],a,n))&&(delete r[a],i=!0)}}return A.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||rp(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return A.forEach(this,(i,s)=>{const o=A.findKey(r,s);if(o){n[o]=bc(i),delete n[s];return}const a=e?Jz(s):String(s).trim();a!==s&&delete n[s],n[a]=bc(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return A.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&A.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[qI]=this[qI]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=_a(o);r[a]||(Xz(i,o),r[a]=!0)}return A.isArray(e)?e.forEach(s):s(e),this}}ef.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);A.reduceDescriptors(ef.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});A.freezeMethods(ef);const Jn=ef;function ip(t,e){const n=this||fv,r=e||n,i=Jn.from(r.headers);let s=r.data;return A.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function JC(t){return!!(t&&t.__CANCEL__)}function ku(t,e,n){ee.call(this,t??"canceled",ee.ERR_CANCELED,e,n),this.name="CanceledError"}A.inherits(ku,ee,{__CANCEL__:!0});function Zz(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ee("Request failed with status code "+n.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const e3=kn.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];A.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),A.isString(r)&&o.push("path="+r),A.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function t3(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function n3(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function XC(t,e){return t&&!t3(e)?n3(t,e):e}const r3=kn.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=A.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function i3(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function s3(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),c=r[s];o||(o=u),n[i]=l,r[i]=u;let d=s,h=0;for(;d!==i;)h+=n[d++],d=d%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),u-o<e)return;const m=c&&u-c;return m?Math.round(h*1e3/m):void 0}}function WI(t,e){let n=0;const r=s3(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,l=r(a),u=s<=o;n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&u?(o-s)/l:void 0,event:i};c[e?"download":"upload"]=!0,t(c)}}const o3=typeof XMLHttpRequest<"u",a3=o3&&function(t){return new Promise(function(n,r){let i=t.data;const s=Jn.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,l;function u(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}let c;if(A.isFormData(i)){if(kn.hasStandardBrowserEnv||kn.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((c=s.getContentType())!==!1){const[_,...v]=c?c.split(";").map(p=>p.trim()).filter(Boolean):[];s.setContentType([_||"multipart/form-data",...v].join("; "))}}let d=new XMLHttpRequest;if(t.auth){const _=t.auth.username||"",v=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(_+":"+v))}const h=XC(t.baseURL,t.url);d.open(t.method.toUpperCase(),KC(h,t.params,t.paramsSerializer),!0),d.timeout=t.timeout;function m(){if(!d)return;const _=Jn.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),p={data:!o||o==="text"||o==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:_,config:t,request:d};Zz(function(g){n(g),u()},function(g){r(g),u()},p),d=null}if("onloadend"in d?d.onloadend=m:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(m)},d.onabort=function(){d&&(r(new ee("Request aborted",ee.ECONNABORTED,t,d)),d=null)},d.onerror=function(){r(new ee("Network Error",ee.ERR_NETWORK,t,d)),d=null},d.ontimeout=function(){let v=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const p=t.transitional||HC;t.timeoutErrorMessage&&(v=t.timeoutErrorMessage),r(new ee(v,p.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,t,d)),d=null},kn.hasStandardBrowserEnv&&(a&&A.isFunction(a)&&(a=a(t)),a||a!==!1&&r3(h))){const _=t.xsrfHeaderName&&t.xsrfCookieName&&e3.read(t.xsrfCookieName);_&&s.set(t.xsrfHeaderName,_)}i===void 0&&s.setContentType(null),"setRequestHeader"in d&&A.forEach(s.toJSON(),function(v,p){d.setRequestHeader(p,v)}),A.isUndefined(t.withCredentials)||(d.withCredentials=!!t.withCredentials),o&&o!=="json"&&(d.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&d.addEventListener("progress",WI(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",WI(t.onUploadProgress)),(t.cancelToken||t.signal)&&(l=_=>{d&&(r(!_||_.type?new ku(null,t,d):_),d.abort(),d=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l)));const y=i3(h);if(y&&kn.protocols.indexOf(y)===-1){r(new ee("Unsupported protocol "+y+":",ee.ERR_BAD_REQUEST,t));return}d.send(i||null)})},sg={http:bz,xhr:a3};A.forEach(sg,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const GI=t=>`- ${t}`,l3=t=>A.isFunction(t)||t===null||t===!1,ZC={getAdapter:t=>{t=A.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!l3(n)&&(r=sg[(o=String(n)).toLowerCase()],r===void 0))throw new ee(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(GI).join(`
`):" "+GI(s[0]):"as no adapter specified";throw new ee("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:sg};function sp(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ku(null,t)}function KI(t){return sp(t),t.headers=Jn.from(t.headers),t.data=ip.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),ZC.getAdapter(t.adapter||fv.adapter)(t).then(function(r){return sp(t),r.data=ip.call(t,t.transformResponse,r),r.headers=Jn.from(r.headers),r},function(r){return JC(r)||(sp(t),r&&r.response&&(r.response.data=ip.call(t,t.transformResponse,r.response),r.response.headers=Jn.from(r.response.headers))),Promise.reject(r)})}const HI=t=>t instanceof Jn?t.toJSON():t;function No(t,e){e=e||{};const n={};function r(u,c,d){return A.isPlainObject(u)&&A.isPlainObject(c)?A.merge.call({caseless:d},u,c):A.isPlainObject(c)?A.merge({},c):A.isArray(c)?c.slice():c}function i(u,c,d){if(A.isUndefined(c)){if(!A.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function s(u,c){if(!A.isUndefined(c))return r(void 0,c)}function o(u,c){if(A.isUndefined(c)){if(!A.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function a(u,c,d){if(d in e)return r(u,c);if(d in t)return r(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,c)=>i(HI(u),HI(c),!0)};return A.forEach(Object.keys(Object.assign({},t,e)),function(c){const d=l[c]||i,h=d(t[c],e[c],c);A.isUndefined(h)&&d!==a||(n[c]=h)}),n}const ek="1.6.7",pv={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{pv[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const QI={};pv.transitional=function(e,n,r){function i(s,o){return"[Axios v"+ek+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new ee(i(o," has been removed"+(n?" in "+n:"")),ee.ERR_DEPRECATED);return n&&!QI[o]&&(QI[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function u3(t,e,n){if(typeof t!="object")throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new ee("option "+s+" must be "+l,ee.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ee("Unknown option "+s,ee.ERR_BAD_OPTION)}}const og={assertOptions:u3,validators:pv},_r=og.validators;class Dd{constructor(e){this.defaults=e,this.interceptors={request:new zI,response:new zI}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=No(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&og.assertOptions(r,{silentJSONParsing:_r.transitional(_r.boolean),forcedJSONParsing:_r.transitional(_r.boolean),clarifyTimeoutError:_r.transitional(_r.boolean)},!1),i!=null&&(A.isFunction(i)?n.paramsSerializer={serialize:i}:og.assertOptions(i,{encode:_r.function,serialize:_r.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&A.merge(s.common,s[n.method]);s&&A.forEach(["delete","get","head","post","put","patch","common"],y=>{delete s[y]}),n.headers=Jn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(n)===!1||(l=l&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const u=[];this.interceptors.response.forEach(function(_){u.push(_.fulfilled,_.rejected)});let c,d=0,h;if(!l){const y=[KI.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,u),h=y.length,c=Promise.resolve(n);d<h;)c=c.then(y[d++],y[d++]);return c}h=a.length;let m=n;for(d=0;d<h;){const y=a[d++],_=a[d++];try{m=y(m)}catch(v){_.call(this,v);break}}try{c=KI.call(this,m)}catch(y){return Promise.reject(y)}for(d=0,h=u.length;d<h;)c=c.then(u[d++],u[d++]);return c}getUri(e){e=No(this.defaults,e);const n=XC(e.baseURL,e.url);return KC(n,e.params,e.paramsSerializer)}}A.forEach(["delete","get","head","options"],function(e){Dd.prototype[e]=function(n,r){return this.request(No(r||{},{method:e,url:n,data:(r||{}).data}))}});A.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(No(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Dd.prototype[e]=n(),Dd.prototype[e+"Form"]=n(!0)});const Dc=Dd;class mv{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new ku(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new mv(function(i){e=i}),cancel:e}}}const c3=mv;function d3(t){return function(n){return t.apply(null,n)}}function h3(t){return A.isObject(t)&&t.isAxiosError===!0}const ag={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ag).forEach(([t,e])=>{ag[e]=t});const f3=ag;function tk(t){const e=new Dc(t),n=VC(Dc.prototype.request,e);return A.extend(n,Dc.prototype,e,{allOwnKeys:!0}),A.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return tk(No(t,i))},n}const Ue=tk(fv);Ue.Axios=Dc;Ue.CanceledError=ku;Ue.CancelToken=c3;Ue.isCancel=JC;Ue.VERSION=ek;Ue.toFormData=Zh;Ue.AxiosError=ee;Ue.Cancel=Ue.CanceledError;Ue.all=function(e){return Promise.all(e)};Ue.spread=d3;Ue.isAxiosError=h3;Ue.mergeConfig=No;Ue.AxiosHeaders=Jn;Ue.formToJSON=t=>YC(A.isHTMLForm(t)?new FormData(t):t);Ue.getAdapter=ZC.getAdapter;Ue.HttpStatusCode=f3;Ue.default=Ue;function p3(){const[t,e]=S.useState(null),[n,r]=S.useState(""),i=Zd(),s=async()=>{try{await iv.signOut(),i("/login")}catch(u){console.error("Error signing out:",u.message)}},a="http://api.openweathermap.org/data/2.5/weather?appid=9650c42acd258b957e74e39edf4e3f3d&units=metric",l=async u=>{u.preventDefault();try{const c=await Ue.get(`${a}&q=${n}`);e(c.data)}catch{alert("City not found. Please try again.")}};return E.jsxs("div",{className:"container mt-5",children:[E.jsx("h1",{className:"text-primary mb-3",children:"Weather App"}),E.jsx("form",{onSubmit:l,children:E.jsxs("div",{className:"input-group mb-3",children:[E.jsx("input",{type:"text",className:"form-control",placeholder:"Enter city name",value:n,onChange:u=>r(u.target.value)}),E.jsx("button",{type:"submit",className:"btn btn-primary",children:"Search"})]})}),t&&E.jsx("div",{className:"card",children:E.jsxs("div",{className:"card-body",children:[E.jsx("h5",{className:"card-title",children:t.name}),E.jsxs("p",{className:"card-text",children:[E.jsx("strong",{children:"Temperature:"})," ",Math.round(t.main.temp),"°C"]}),E.jsxs("p",{className:"card-text",children:[E.jsx("strong",{children:"Feels like:"})," ",Math.round(t.main.feels_like),"°C"]}),E.jsxs("p",{className:"card-text",children:[E.jsx("strong",{children:"Humidity:"})," ",t.main.humidity,"%"]}),E.jsxs("p",{className:"card-text",children:[E.jsx("strong",{children:"Wind speed:"})," ",t.wind.speed," m/s"]})]})}),E.jsxs("div",{className:"mt-3",children:[E.jsx("button",{className:"btn btn-danger",style:{marginRight:10},onClick:s,children:"Sign Out"}),E.jsx(po,{to:"/users",className:"btn btn-primary",children:"Users Table"})]})]})}const nk=M4(),op=B_(nk,"users");function m3(){const[t,e]=S.useState([]),[n,r]=S.useState([]),[i,s]=S.useState(""),[o,a]=S.useState("email"),[l,u]=S.useState("asc");S.useEffect(()=>{const p=ev(op,f=>{const g=f.docs.map(I=>({id:I.id,...I.data()}));e(g),r(g)});return console.log("run"),()=>p()},[nk]);const c=async p=>{try{await QP(ko(op,p))}catch(f){console.error("Error deleting user: ",f)}},d=async(p,f)=>{try{await Km(ko(op,p),{status:f==="active"?"inactive":"active"})}catch{alert("Error updating status"),console.log("Error updating status")}},h=p=>{s(p.target.value),m(p.target.value)},m=p=>{const f=t.filter(g=>g.email.toLowerCase().includes(p.toLowerCase())||g.status.toLowerCase().includes(p.toLowerCase()));r(f)},y=p=>{const{value:f}=p.target;a(f),v(n,f,l)},_=p=>{const{value:f}=p.target;u(f),v(n,o,f)},v=(p,f,g)=>{const I=[...p].sort((P,k)=>P[f]<k[f]?g==="asc"?-1:1:P[f]>k[f]?g==="asc"?1:-1:0);r(I)};return E.jsxs("div",{className:"container mt-5",children:[E.jsx("input",{type:"text",value:i,onChange:h,placeholder:"Filter by username or status",className:"form-control mb-3"}),E.jsxs("div",{className:"d-flex mb-3",children:[E.jsxs("select",{value:o,onChange:y,className:"form-select me-2",children:[E.jsx("option",{value:"email",children:"Username"}),E.jsx("option",{value:"addeddate",children:"Added Date"}),E.jsx("option",{value:"status",children:"Status"})]}),E.jsxs("select",{value:l,onChange:_,className:"form-select",children:[E.jsx("option",{value:"asc",children:"Ascending"}),E.jsx("option",{value:"desc",children:"Descending"})]})]}),E.jsxs("table",{className:"table",children:[E.jsx("thead",{children:E.jsxs("tr",{children:[E.jsx("th",{children:"Username"}),E.jsx("th",{children:"Date Added"}),E.jsx("th",{children:"Status"}),E.jsx("th",{children:"Actions"})]})}),E.jsx("tbody",{children:n.map(p=>p.status==="active"?E.jsxs("tr",{children:[E.jsx("td",{children:p.email}),E.jsx("td",{children:p.addeddate?p.addeddate.toDate().toLocaleString():""}),E.jsx("td",{children:p.status}),E.jsxs("td",{children:[E.jsx("button",{onClick:()=>d(p.id,p.status),className:"btn btn-sm btn-primary me-2",children:p.status==="active"?"Deactivate":"Activate"}),E.jsx("button",{onClick:()=>c(p.id),className:"btn btn-sm btn-danger",children:"Delete"})]})]},p.id):null)})]}),E.jsx(po,{to:"/home",className:"btn btn-primary",children:"Home"})]})}const g3="/alpaago-assignment/assets/landing-page-img-t8CV9eyT.png",y3=()=>E.jsx("div",{className:"container mt-5",style:{backgroundColor:"#f8f9fa",padding:"20px",borderRadius:"10px"},children:E.jsxs("div",{className:"row",children:[E.jsx("div",{className:"col-md-6 d-flex align-items-center",children:E.jsxs("div",{className:"text-center",children:[E.jsx("h1",{className:"display-4 text-primary",children:"Welcome to Weather App"}),E.jsx("p",{className:"lead text-secondary",children:"Explore amazing features and content."}),E.jsxs("div",{className:"d-flex justify-content-center",children:[E.jsx(po,{to:"/signup",className:"btn btn-primary mx-2",children:"Sign Up"}),E.jsx(po,{to:"/login",className:"btn btn-secondary mx-2",children:"Login"})]})]})}),E.jsx("div",{className:"col-md-6",children:E.jsx("img",{src:g3,alt:"App",className:"img-fluid ",style:{borderRadius:"20px"}})})]})});function _3(){return E.jsx(Rb,{children:E.jsxs(vb,{children:[E.jsx(Ps,{path:"/",element:E.jsx(y3,{})}),E.jsx(Ps,{path:"/signup",element:E.jsx(VB,{})}),E.jsx(Ps,{path:"/login",element:E.jsx(Jj,{})}),E.jsx(Ps,{path:"/home",element:E.jsx(p3,{})}),E.jsx(Ps,{path:"/users",element:E.jsx(m3,{})})]})})}ap.createRoot(document.getElementById("root")).render(E.jsx(Bn.StrictMode,{children:E.jsx(_3,{})}));
