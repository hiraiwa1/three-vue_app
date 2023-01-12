(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function To(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function Ao(n){if(Re(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ft(i)?_u(i):Ao(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ft(n))return n;if(nt(n))return n}}const pu=/;(?![^(]*\))/g,mu=/:([^]+)/,gu=/\/\*.*?\*\//gs;function _u(n){const e={};return n.replace(gu,"").split(pu).forEach(t=>{if(t){const i=t.split(mu);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Co(n){let e="";if(ft(n))e=n;else if(Re(n))for(let t=0;t<n.length;t++){const i=Co(n[t]);i&&(e+=i+" ")}else if(nt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const xu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vu=To(xu);function ql(n){return!!n||n===""}const Ze={},bi=[],Yt=()=>{},Mu=()=>!1,yu=/^on[^a-z]/,Qr=n=>yu.test(n),Lo=n=>n.startsWith("onUpdate:"),gt=Object.assign,Po=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},bu=Object.prototype.hasOwnProperty,Ge=(n,e)=>bu.call(n,e),Re=Array.isArray,Ki=n=>es(n)==="[object Map]",Su=n=>es(n)==="[object Set]",Ue=n=>typeof n=="function",ft=n=>typeof n=="string",Do=n=>typeof n=="symbol",nt=n=>n!==null&&typeof n=="object",Xl=n=>nt(n)&&Ue(n.then)&&Ue(n.catch),wu=Object.prototype.toString,es=n=>wu.call(n),Eu=n=>es(n).slice(8,-1),Tu=n=>es(n)==="[object Object]",Ro=n=>ft(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,kr=To(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ts=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Au=/-(\w)/g,Ai=ts(n=>n.replace(Au,(e,t)=>t?t.toUpperCase():"")),Cu=/\B([A-Z])/g,Fi=ts(n=>n.replace(Cu,"-$1").toLowerCase()),jl=ts(n=>n.charAt(0).toUpperCase()+n.slice(1)),ms=ts(n=>n?`on${jl(n)}`:""),er=(n,e)=>!Object.is(n,e),gs=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Yr=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Yl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let sa;const Lu=()=>sa||(sa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Zt;class Pu{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Zt,!e&&Zt&&(this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Zt;try{return Zt=this,e()}finally{Zt=t}}}on(){Zt=this}off(){Zt=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Du(n,e=Zt){e&&e.active&&e.effects.push(n)}const Io=n=>{const e=new Set(n);return e.w=0,e.n=0,e},$l=n=>(n.w&Ln)>0,Zl=n=>(n.n&Ln)>0,Ru=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Ln},Iu=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];$l(r)&&!Zl(r)?r.delete(n):e[t++]=r,r.w&=~Ln,r.n&=~Ln}e.length=t}},ro=new WeakMap;let Yi=0,Ln=1;const so=30;let Ht;const Zn=Symbol(""),oo=Symbol("");class Fo{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Du(this,i)}run(){if(!this.active)return this.fn();let e=Ht,t=En;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ht,Ht=this,En=!0,Ln=1<<++Yi,Yi<=so?Ru(this):oa(this),this.fn()}finally{Yi<=so&&Iu(this),Ln=1<<--Yi,Ht=this.parent,En=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ht===this?this.deferStop=!0:this.active&&(oa(this),this.onStop&&this.onStop(),this.active=!1)}}function oa(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let En=!0;const Kl=[];function Ni(){Kl.push(En),En=!1}function Ui(){const n=Kl.pop();En=n===void 0?!0:n}function It(n,e,t){if(En&&Ht){let i=ro.get(n);i||ro.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Io()),Jl(r)}}function Jl(n,e){let t=!1;Yi<=so?Zl(n)||(n.n|=Ln,t=!$l(n)):t=!n.has(Ht),t&&(n.add(Ht),Ht.deps.push(n))}function _n(n,e,t,i,r,s){const a=ro.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Re(n)){const l=Yl(i);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Re(n)?Ro(t)&&o.push(a.get("length")):(o.push(a.get(Zn)),Ki(n)&&o.push(a.get(oo)));break;case"delete":Re(n)||(o.push(a.get(Zn)),Ki(n)&&o.push(a.get(oo)));break;case"set":Ki(n)&&o.push(a.get(Zn));break}if(o.length===1)o[0]&&ao(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);ao(Io(l))}}function ao(n,e){const t=Re(n)?n:[...n];for(const i of t)i.computed&&aa(i);for(const i of t)i.computed||aa(i)}function aa(n,e){(n!==Ht||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Fu=To("__proto__,__v_isRef,__isVue"),Ql=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Do)),Nu=No(),Uu=No(!1,!0),Ou=No(!0),la=zu();function zu(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=He(this);for(let s=0,a=this.length;s<a;s++)It(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(He)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Ni();const i=He(this)[e].apply(this,t);return Ui(),i}}),n}function No(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?ef:rc:e?ic:nc).get(i))return i;const a=Re(i);if(!n&&a&&Ge(la,r))return Reflect.get(la,r,s);const o=Reflect.get(i,r,s);return(Do(r)?Ql.has(r):Fu(r))||(n||It(i,"get",r),e)?o:mt(o)?a&&Ro(r)?o:o.value:nt(o)?n?sc(o):zo(o):o}}const Bu=ec(),Gu=ec(!0);function ec(n=!1){return function(t,i,r,s){let a=t[i];if(Ci(a)&&mt(a)&&!mt(r))return!1;if(!n&&(!$r(r)&&!Ci(r)&&(a=He(a),r=He(r)),!Re(t)&&mt(a)&&!mt(r)))return a.value=r,!0;const o=Re(t)&&Ro(i)?Number(i)<t.length:Ge(t,i),l=Reflect.set(t,i,r,s);return t===He(s)&&(o?er(r,a)&&_n(t,"set",i,r):_n(t,"add",i,r)),l}}function Vu(n,e){const t=Ge(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&_n(n,"delete",e,void 0),i}function ku(n,e){const t=Reflect.has(n,e);return(!Do(e)||!Ql.has(e))&&It(n,"has",e),t}function Hu(n){return It(n,"iterate",Re(n)?"length":Zn),Reflect.ownKeys(n)}const tc={get:Nu,set:Bu,deleteProperty:Vu,has:ku,ownKeys:Hu},Wu={get:Ou,set(n,e){return!0},deleteProperty(n,e){return!0}},qu=gt({},tc,{get:Uu,set:Gu}),Uo=n=>n,ns=n=>Reflect.getPrototypeOf(n);function mr(n,e,t=!1,i=!1){n=n.__v_raw;const r=He(n),s=He(e);t||(e!==s&&It(r,"get",e),It(r,"get",s));const{has:a}=ns(r),o=i?Uo:t?Go:tr;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function gr(n,e=!1){const t=this.__v_raw,i=He(t),r=He(n);return e||(n!==r&&It(i,"has",n),It(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function _r(n,e=!1){return n=n.__v_raw,!e&&It(He(n),"iterate",Zn),Reflect.get(n,"size",n)}function ca(n){n=He(n);const e=He(this);return ns(e).has.call(e,n)||(e.add(n),_n(e,"add",n,n)),this}function ua(n,e){e=He(e);const t=He(this),{has:i,get:r}=ns(t);let s=i.call(t,n);s||(n=He(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?er(e,a)&&_n(t,"set",n,e):_n(t,"add",n,e),this}function fa(n){const e=He(this),{has:t,get:i}=ns(e);let r=t.call(e,n);r||(n=He(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&_n(e,"delete",n,void 0),s}function ha(){const n=He(this),e=n.size!==0,t=n.clear();return e&&_n(n,"clear",void 0,void 0),t}function xr(n,e){return function(i,r){const s=this,a=s.__v_raw,o=He(a),l=e?Uo:n?Go:tr;return!n&&It(o,"iterate",Zn),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function vr(n,e,t){return function(...i){const r=this.__v_raw,s=He(r),a=Ki(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Uo:e?Go:tr;return!e&&It(s,"iterate",l?oo:Zn),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function vn(n){return function(...e){return n==="delete"?!1:this}}function Xu(){const n={get(s){return mr(this,s)},get size(){return _r(this)},has:gr,add:ca,set:ua,delete:fa,clear:ha,forEach:xr(!1,!1)},e={get(s){return mr(this,s,!1,!0)},get size(){return _r(this)},has:gr,add:ca,set:ua,delete:fa,clear:ha,forEach:xr(!1,!0)},t={get(s){return mr(this,s,!0)},get size(){return _r(this,!0)},has(s){return gr.call(this,s,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:xr(!0,!1)},i={get(s){return mr(this,s,!0,!0)},get size(){return _r(this,!0)},has(s){return gr.call(this,s,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:xr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=vr(s,!1,!1),t[s]=vr(s,!0,!1),e[s]=vr(s,!1,!0),i[s]=vr(s,!0,!0)}),[n,t,e,i]}const[ju,Yu,$u,Zu]=Xu();function Oo(n,e){const t=e?n?Zu:$u:n?Yu:ju;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ge(t,r)&&r in i?t:i,r,s)}const Ku={get:Oo(!1,!1)},Ju={get:Oo(!1,!0)},Qu={get:Oo(!0,!1)},nc=new WeakMap,ic=new WeakMap,rc=new WeakMap,ef=new WeakMap;function tf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nf(n){return n.__v_skip||!Object.isExtensible(n)?0:tf(Eu(n))}function zo(n){return Ci(n)?n:Bo(n,!1,tc,Ku,nc)}function rf(n){return Bo(n,!1,qu,Ju,ic)}function sc(n){return Bo(n,!0,Wu,Qu,rc)}function Bo(n,e,t,i,r){if(!nt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=nf(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Si(n){return Ci(n)?Si(n.__v_raw):!!(n&&n.__v_isReactive)}function Ci(n){return!!(n&&n.__v_isReadonly)}function $r(n){return!!(n&&n.__v_isShallow)}function oc(n){return Si(n)||Ci(n)}function He(n){const e=n&&n.__v_raw;return e?He(e):n}function ac(n){return Yr(n,"__v_skip",!0),n}const tr=n=>nt(n)?zo(n):n,Go=n=>nt(n)?sc(n):n;function lc(n){En&&Ht&&(n=He(n),Jl(n.dep||(n.dep=Io())))}function cc(n,e){n=He(n),n.dep&&ao(n.dep)}function mt(n){return!!(n&&n.__v_isRef===!0)}function sf(n){return of(n,!1)}function of(n,e){return mt(n)?n:new af(n,e)}class af{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:He(e),this._value=t?e:tr(e)}get value(){return lc(this),this._value}set value(e){const t=this.__v_isShallow||$r(e)||Ci(e);e=t?e:He(e),er(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:tr(e),cc(this))}}function lf(n){return mt(n)?n.value:n}const cf={get:(n,e,t)=>lf(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return mt(r)&&!mt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function uc(n){return Si(n)?n:new Proxy(n,cf)}var fc;class uf{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[fc]=!1,this._dirty=!0,this.effect=new Fo(e,()=>{this._dirty||(this._dirty=!0,cc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=He(this);return lc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}fc="__v_isReadonly";function ff(n,e,t=!1){let i,r;const s=Ue(n);return s?(i=n,r=Yt):(i=n.get,r=n.set),new uf(i,r,s||!r,t)}function Tn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){is(s,e,t)}return r}function zt(n,e,t,i){if(Ue(n)){const s=Tn(n,e,t,i);return s&&Xl(s)&&s.catch(a=>{is(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(zt(n[s],e,t,i));return r}function is(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Tn(l,null,10,[n,a,o]);return}}hf(n,t,r,i)}function hf(n,e,t,i=!0){console.error(n)}let nr=!1,lo=!1;const pt=[];let tn=0;const wi=[];let hn=null,Wn=0;const hc=Promise.resolve();let Vo=null;function df(n){const e=Vo||hc;return n?e.then(this?n.bind(this):n):e}function pf(n){let e=tn+1,t=pt.length;for(;e<t;){const i=e+t>>>1;ir(pt[i])<n?e=i+1:t=i}return e}function ko(n){(!pt.length||!pt.includes(n,nr&&n.allowRecurse?tn+1:tn))&&(n.id==null?pt.push(n):pt.splice(pf(n.id),0,n),dc())}function dc(){!nr&&!lo&&(lo=!0,Vo=hc.then(mc))}function mf(n){const e=pt.indexOf(n);e>tn&&pt.splice(e,1)}function gf(n){Re(n)?wi.push(...n):(!hn||!hn.includes(n,n.allowRecurse?Wn+1:Wn))&&wi.push(n),dc()}function da(n,e=nr?tn+1:0){for(;e<pt.length;e++){const t=pt[e];t&&t.pre&&(pt.splice(e,1),e--,t())}}function pc(n){if(wi.length){const e=[...new Set(wi)];if(wi.length=0,hn){hn.push(...e);return}for(hn=e,hn.sort((t,i)=>ir(t)-ir(i)),Wn=0;Wn<hn.length;Wn++)hn[Wn]();hn=null,Wn=0}}const ir=n=>n.id==null?1/0:n.id,_f=(n,e)=>{const t=ir(n)-ir(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function mc(n){lo=!1,nr=!0,pt.sort(_f);const e=Yt;try{for(tn=0;tn<pt.length;tn++){const t=pt[tn];t&&t.active!==!1&&Tn(t,null,14)}}finally{tn=0,pt.length=0,pc(),nr=!1,Vo=null,(pt.length||wi.length)&&mc()}}function xf(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ze;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=i[u]||Ze;h&&(r=t.map(m=>ft(m)?m.trim():m)),f&&(r=t.map(Yl))}let o,l=i[o=ms(e)]||i[o=ms(Ai(e))];!l&&s&&(l=i[o=ms(Fi(e))]),l&&zt(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,zt(c,n,6,r)}}function gc(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ue(n)){const l=c=>{const u=gc(c,e,!0);u&&(o=!0,gt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(nt(n)&&i.set(n,null),null):(Re(s)?s.forEach(l=>a[l]=null):gt(a,s),nt(n)&&i.set(n,a),a)}function rs(n,e){return!n||!Qr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ge(n,e[0].toLowerCase()+e.slice(1))||Ge(n,Fi(e))||Ge(n,e))}let Xt=null,_c=null;function Zr(n){const e=Xt;return Xt=n,_c=n&&n.type.__scopeId||null,e}function vf(n,e=Xt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&ba(-1);const s=Zr(e);let a;try{a=n(...r)}finally{Zr(s),i._d&&ba(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function _s(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:v,inheritAttrs:p}=n;let d,x;const T=Zr(n);try{if(t.shapeFlag&4){const E=r||i;d=Qt(u.call(E,E,f,s,m,h,v)),x=l}else{const E=e;d=Qt(E.length>1?E(s,{attrs:l,slots:o,emit:c}):E(s,null)),x=e.props?l:Mf(l)}}catch(E){Qi.length=0,is(E,n,1),d=An(mn)}let y=d;if(x&&p!==!1){const E=Object.keys(x),{shapeFlag:S}=y;E.length&&S&7&&(a&&E.some(Lo)&&(x=yf(x,a)),y=Pn(y,x))}return t.dirs&&(y=Pn(y),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),d=y,Zr(T),d}const Mf=n=>{let e;for(const t in n)(t==="class"||t==="style"||Qr(t))&&((e||(e={}))[t]=n[t]);return e},yf=(n,e)=>{const t={};for(const i in n)(!Lo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function bf(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?pa(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!rs(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?pa(i,a,c):!0:!!a;return!1}function pa(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!rs(t,s))return!0}return!1}function Sf({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const wf=n=>n.__isSuspense;function Ef(n,e){e&&e.pendingBranch?Re(n)?e.effects.push(...n):e.effects.push(n):gf(n)}function Tf(n,e){if(ut){let t=ut.provides;const i=ut.parent&&ut.parent.provides;i===t&&(t=ut.provides=Object.create(i)),t[n]=e}}function Hr(n,e,t=!1){const i=ut||Xt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ue(e)?e.call(i.proxy):e}}const Mr={};function xs(n,e,t){return xc(n,e,t)}function xc(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=Ze){const o=ut;let l,c=!1,u=!1;if(mt(n)?(l=()=>n.value,c=$r(n)):Si(n)?(l=()=>n,i=!0):Re(n)?(u=!0,c=n.some(y=>Si(y)||$r(y)),l=()=>n.map(y=>{if(mt(y))return y.value;if(Si(y))return Mi(y);if(Ue(y))return Tn(y,o,2)})):Ue(n)?e?l=()=>Tn(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return f&&f(),zt(n,o,3,[h])}:l=Yt,e&&i){const y=l;l=()=>Mi(y())}let f,h=y=>{f=x.onStop=()=>{Tn(y,o,4)}},m;if(sr)if(h=Yt,e?t&&zt(e,o,3,[l(),u?[]:void 0,h]):l(),r==="sync"){const y=Sh();m=y.__watcherHandles||(y.__watcherHandles=[])}else return Yt;let v=u?new Array(n.length).fill(Mr):Mr;const p=()=>{if(x.active)if(e){const y=x.run();(i||c||(u?y.some((E,S)=>er(E,v[S])):er(y,v)))&&(f&&f(),zt(e,o,3,[y,v===Mr?void 0:u&&v[0]===Mr?[]:v,h]),v=y)}else x.run()};p.allowRecurse=!!e;let d;r==="sync"?d=p:r==="post"?d=()=>bt(p,o&&o.suspense):(p.pre=!0,o&&(p.id=o.uid),d=()=>ko(p));const x=new Fo(l,d);e?t?p():v=x.run():r==="post"?bt(x.run.bind(x),o&&o.suspense):x.run();const T=()=>{x.stop(),o&&o.scope&&Po(o.scope.effects,x)};return m&&m.push(T),T}function Af(n,e,t){const i=this.proxy,r=ft(n)?n.includes(".")?vc(i,n):()=>i[n]:n.bind(i,i);let s;Ue(e)?s=e:(s=e.handler,t=e);const a=ut;Li(this);const o=xc(r,s.bind(i),t);return a?Li(a):Kn(),o}function vc(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Mi(n,e){if(!nt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),mt(n))Mi(n.value,e);else if(Re(n))for(let t=0;t<n.length;t++)Mi(n[t],e);else if(Su(n)||Ki(n))n.forEach(t=>{Mi(t,e)});else if(Tu(n))for(const t in n)Mi(n[t],e);return n}function Cf(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ho(()=>{n.isMounted=!0}),Sc(()=>{n.isUnmounting=!0}),n}const Nt=[Function,Array],Lf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Nt,onEnter:Nt,onAfterEnter:Nt,onEnterCancelled:Nt,onBeforeLeave:Nt,onLeave:Nt,onAfterLeave:Nt,onLeaveCancelled:Nt,onBeforeAppear:Nt,onAppear:Nt,onAfterAppear:Nt,onAppearCancelled:Nt},setup(n,{slots:e}){const t=mh(),i=Cf();let r;return()=>{const s=e.default&&yc(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const p of s)if(p.type!==mn){a=p;break}}const o=He(n),{mode:l}=o;if(i.isLeaving)return vs(a);const c=ma(a);if(!c)return vs(a);const u=co(c,o,i,t);uo(c,u);const f=t.subTree,h=f&&ma(f);let m=!1;const{getTransitionKey:v}=c.type;if(v){const p=v();r===void 0?r=p:p!==r&&(r=p,m=!0)}if(h&&h.type!==mn&&(!qn(c,h)||m)){const p=co(h,o,i,t);if(uo(h,p),l==="out-in")return i.isLeaving=!0,p.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&t.update()},vs(a);l==="in-out"&&c.type!==mn&&(p.delayLeave=(d,x,T)=>{const y=Mc(i,h);y[String(h.key)]=h,d._leaveCb=()=>{x(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=T})}return a}}},Pf=Lf;function Mc(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function co(n,e,t,i){const{appear:r,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:p,onAppear:d,onAfterAppear:x,onAppearCancelled:T}=e,y=String(n.key),E=Mc(t,n),S=(_,C)=>{_&&zt(_,i,9,C)},P=(_,C)=>{const R=C[1];S(_,C),Re(_)?_.every(Y=>Y.length<=1)&&R():_.length<=1&&R()},N={mode:s,persisted:a,beforeEnter(_){let C=o;if(!t.isMounted)if(r)C=p||o;else return;_._leaveCb&&_._leaveCb(!0);const R=E[y];R&&qn(n,R)&&R.el._leaveCb&&R.el._leaveCb(),S(C,[_])},enter(_){let C=l,R=c,Y=u;if(!t.isMounted)if(r)C=d||l,R=x||c,Y=T||u;else return;let de=!1;const U=_._enterCb=F=>{de||(de=!0,F?S(Y,[_]):S(R,[_]),N.delayedLeave&&N.delayedLeave(),_._enterCb=void 0)};C?P(C,[_,U]):U()},leave(_,C){const R=String(n.key);if(_._enterCb&&_._enterCb(!0),t.isUnmounting)return C();S(f,[_]);let Y=!1;const de=_._leaveCb=U=>{Y||(Y=!0,C(),U?S(v,[_]):S(m,[_]),_._leaveCb=void 0,E[R]===n&&delete E[R])};E[R]=n,h?P(h,[_,de]):de()},clone(_){return co(_,e,t,i)}};return N}function vs(n){if(ss(n))return n=Pn(n),n.children=null,n}function ma(n){return ss(n)?n.children?n.children[0]:void 0:n}function uo(n,e){n.shapeFlag&6&&n.component?uo(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function yc(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===Jt?(a.patchFlag&128&&r++,i=i.concat(yc(a.children,e,o))):(e||a.type!==mn)&&i.push(o!=null?Pn(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}const Wr=n=>!!n.type.__asyncLoader,ss=n=>n.type.__isKeepAlive;function Df(n,e){bc(n,"a",e)}function Rf(n,e){bc(n,"da",e)}function bc(n,e,t=ut){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(os(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ss(r.parent.vnode)&&If(i,e,t,r),r=r.parent}}function If(n,e,t,i){const r=os(e,n,i,!0);wc(()=>{Po(i[e],r)},t)}function os(n,e,t=ut,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Ni(),Li(t);const o=zt(e,t,n,a);return Kn(),Ui(),o});return i?r.unshift(s):r.push(s),s}}const xn=n=>(e,t=ut)=>(!sr||n==="sp")&&os(n,(...i)=>e(...i),t),Ff=xn("bm"),Ho=xn("m"),Nf=xn("bu"),Uf=xn("u"),Sc=xn("bum"),wc=xn("um"),Of=xn("sp"),zf=xn("rtg"),Bf=xn("rtc");function Gf(n,e=ut){os("ec",n,e)}function Un(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Ni(),zt(l,t,8,[n.el,o,n,e]),Ui())}}const Vf=Symbol(),fo=n=>n?Oc(n)?jo(n)||n.proxy:fo(n.parent):null,Ji=gt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>fo(n.parent),$root:n=>fo(n.root),$emit:n=>n.emit,$options:n=>Wo(n),$forceUpdate:n=>n.f||(n.f=()=>ko(n.update)),$nextTick:n=>n.n||(n.n=df.bind(n.proxy)),$watch:n=>Af.bind(n)}),Ms=(n,e)=>n!==Ze&&!n.__isScriptSetup&&Ge(n,e),kf={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ms(i,e))return a[e]=1,i[e];if(r!==Ze&&Ge(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&Ge(c,e))return a[e]=3,s[e];if(t!==Ze&&Ge(t,e))return a[e]=4,t[e];ho&&(a[e]=0)}}const u=Ji[e];let f,h;if(u)return e==="$attrs"&&It(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==Ze&&Ge(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,Ge(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ms(r,e)?(r[e]=t,!0):i!==Ze&&Ge(i,e)?(i[e]=t,!0):Ge(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==Ze&&Ge(n,a)||Ms(e,a)||(o=s[0])&&Ge(o,a)||Ge(i,a)||Ge(Ji,a)||Ge(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ge(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let ho=!0;function Hf(n){const e=Wo(n),t=n.proxy,i=n.ctx;ho=!1,e.beforeCreate&&ga(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:v,activated:p,deactivated:d,beforeDestroy:x,beforeUnmount:T,destroyed:y,unmounted:E,render:S,renderTracked:P,renderTriggered:N,errorCaptured:_,serverPrefetch:C,expose:R,inheritAttrs:Y,components:de,directives:U,filters:F}=e;if(c&&Wf(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const te in a){const G=a[te];Ue(G)&&(i[te]=G.bind(t))}if(r){const te=r.call(t,t);nt(te)&&(n.data=zo(te))}if(ho=!0,s)for(const te in s){const G=s[te],ue=Ue(G)?G.bind(t,t):Ue(G.get)?G.get.bind(t,t):Yt,oe=!Ue(G)&&Ue(G.set)?G.set.bind(t):Yt,k=yh({get:ue,set:oe});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>k.value,set:H=>k.value=H})}if(o)for(const te in o)Ec(o[te],i,t,te);if(l){const te=Ue(l)?l.call(t):l;Reflect.ownKeys(te).forEach(G=>{Tf(G,te[G])})}u&&ga(u,n,"c");function ie(te,G){Re(G)?G.forEach(ue=>te(ue.bind(t))):G&&te(G.bind(t))}if(ie(Ff,f),ie(Ho,h),ie(Nf,m),ie(Uf,v),ie(Df,p),ie(Rf,d),ie(Gf,_),ie(Bf,P),ie(zf,N),ie(Sc,T),ie(wc,E),ie(Of,C),Re(R))if(R.length){const te=n.exposed||(n.exposed={});R.forEach(G=>{Object.defineProperty(te,G,{get:()=>t[G],set:ue=>t[G]=ue})})}else n.exposed||(n.exposed={});S&&n.render===Yt&&(n.render=S),Y!=null&&(n.inheritAttrs=Y),de&&(n.components=de),U&&(n.directives=U)}function Wf(n,e,t=Yt,i=!1){Re(n)&&(n=po(n));for(const r in n){const s=n[r];let a;nt(s)?"default"in s?a=Hr(s.from||r,s.default,!0):a=Hr(s.from||r):a=Hr(s),mt(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function ga(n,e,t){zt(Re(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ec(n,e,t,i){const r=i.includes(".")?vc(t,i):()=>t[i];if(ft(n)){const s=e[n];Ue(s)&&xs(r,s)}else if(Ue(n))xs(r,n.bind(t));else if(nt(n))if(Re(n))n.forEach(s=>Ec(s,e,t,i));else{const s=Ue(n.handler)?n.handler.bind(t):e[n.handler];Ue(s)&&xs(r,s,n)}}function Wo(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Kr(l,c,a,!0)),Kr(l,e,a)),nt(e)&&s.set(e,l),l}function Kr(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Kr(n,s,t,!0),r&&r.forEach(a=>Kr(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=qf[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const qf={data:_a,props:Vn,emits:Vn,methods:Vn,computed:Vn,beforeCreate:vt,created:vt,beforeMount:vt,mounted:vt,beforeUpdate:vt,updated:vt,beforeDestroy:vt,beforeUnmount:vt,destroyed:vt,unmounted:vt,activated:vt,deactivated:vt,errorCaptured:vt,serverPrefetch:vt,components:Vn,directives:Vn,watch:jf,provide:_a,inject:Xf};function _a(n,e){return e?n?function(){return gt(Ue(n)?n.call(this,this):n,Ue(e)?e.call(this,this):e)}:e:n}function Xf(n,e){return Vn(po(n),po(e))}function po(n){if(Re(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function vt(n,e){return n?[...new Set([].concat(n,e))]:e}function Vn(n,e){return n?gt(gt(Object.create(null),n),e):e}function jf(n,e){if(!n)return e;if(!e)return n;const t=gt(Object.create(null),n);for(const i in e)t[i]=vt(n[i],e[i]);return t}function Yf(n,e,t,i=!1){const r={},s={};Yr(s,ls,1),n.propsDefaults=Object.create(null),Tc(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:rf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function $f(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=He(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(rs(n.emitsOptions,h))continue;const m=e[h];if(l)if(Ge(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const v=Ai(h);r[v]=mo(l,o,v,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Tc(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Ge(e,f)&&((u=Fi(f))===f||!Ge(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=mo(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Ge(e,f))&&(delete s[f],c=!0)}c&&_n(n,"set","$attrs")}function Tc(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(kr(l))continue;const c=e[l];let u;r&&Ge(r,u=Ai(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:rs(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=He(t),c=o||Ze;for(let u=0;u<s.length;u++){const f=s[u];t[f]=mo(r,l,f,c[f],n,!Ge(c,f))}}return a}function mo(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Ge(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&Ue(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Li(r),i=c[t]=l.call(null,e),Kn())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Fi(t))&&(i=!0))}return i}function Ac(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ue(n)){const u=f=>{l=!0;const[h,m]=Ac(f,e,!0);gt(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return nt(n)&&i.set(n,bi),bi;if(Re(s))for(let u=0;u<s.length;u++){const f=Ai(s[u]);xa(f)&&(a[f]=Ze)}else if(s)for(const u in s){const f=Ai(u);if(xa(f)){const h=s[u],m=a[f]=Re(h)||Ue(h)?{type:h}:Object.assign({},h);if(m){const v=ya(Boolean,m.type),p=ya(String,m.type);m[0]=v>-1,m[1]=p<0||v<p,(v>-1||Ge(m,"default"))&&o.push(f)}}}const c=[a,o];return nt(n)&&i.set(n,c),c}function xa(n){return n[0]!=="$"}function va(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function Ma(n,e){return va(n)===va(e)}function ya(n,e){return Re(e)?e.findIndex(t=>Ma(t,n)):Ue(e)&&Ma(e,n)?0:-1}const Cc=n=>n[0]==="_"||n==="$stable",qo=n=>Re(n)?n.map(Qt):[Qt(n)],Zf=(n,e,t)=>{if(e._n)return e;const i=vf((...r)=>qo(e(...r)),t);return i._c=!1,i},Lc=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Cc(r))continue;const s=n[r];if(Ue(s))e[r]=Zf(r,s,i);else if(s!=null){const a=qo(s);e[r]=()=>a}}},Pc=(n,e)=>{const t=qo(e);n.slots.default=()=>t},Kf=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=He(e),Yr(e,"_",t)):Lc(e,n.slots={})}else n.slots={},e&&Pc(n,e);Yr(n.slots,ls,1)},Jf=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Ze;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(gt(r,e),!t&&o===1&&delete r._):(s=!e.$stable,Lc(e,r)),a=e}else e&&(Pc(n,e),a={default:1});if(s)for(const o in r)!Cc(o)&&!(o in a)&&delete r[o]};function Dc(){return{app:null,config:{isNativeTag:Mu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qf=0;function eh(n,e){return function(i,r=null){Ue(i)||(i=Object.assign({},i)),r!=null&&!nt(r)&&(r=null);const s=Dc(),a=new Set;let o=!1;const l=s.app={_uid:Qf++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:wh,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Ue(c.install)?(a.add(c),c.install(l,...u)):Ue(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=An(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),o=!0,l._container=c,c.__vue_app__=l,jo(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function go(n,e,t,i,r=!1){if(Re(n)){n.forEach((h,m)=>go(h,e&&(Re(e)?e[m]:e),t,i,r));return}if(Wr(i)&&!r)return;const s=i.shapeFlag&4?jo(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Ze?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(ft(c)?(u[c]=null,Ge(f,c)&&(f[c]=null)):mt(c)&&(c.value=null)),Ue(l))Tn(l,o,12,[a,u]);else{const h=ft(l),m=mt(l);if(h||m){const v=()=>{if(n.f){const p=h?Ge(f,l)?f[l]:u[l]:l.value;r?Re(p)&&Po(p,s):Re(p)?p.includes(s)||p.push(s):h?(u[l]=[s],Ge(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,Ge(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(v.id=-1,bt(v,t)):v()}}}const bt=Ef;function th(n){return nh(n)}function nh(n,e){const t=Lu();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Yt,insertStaticContent:v}=n,p=(w,A,B,Z=null,$=null,re=null,le=!1,Q=null,he=!!A.dynamicChildren)=>{if(w===A)return;w&&!qn(w,A)&&(Z=Ie(w),H(w,$,re,!0),w=null),A.patchFlag===-2&&(he=!1,A.dynamicChildren=null);const{type:ne,ref:M,shapeFlag:g}=A;switch(ne){case as:d(w,A,B,Z);break;case mn:x(w,A,B,Z);break;case ys:w==null&&T(A,B,Z,le);break;case Jt:de(w,A,B,Z,$,re,le,Q,he);break;default:g&1?S(w,A,B,Z,$,re,le,Q,he):g&6?U(w,A,B,Z,$,re,le,Q,he):(g&64||g&128)&&ne.process(w,A,B,Z,$,re,le,Q,he,Te)}M!=null&&$&&go(M,w&&w.ref,re,A||w,!A)},d=(w,A,B,Z)=>{if(w==null)i(A.el=o(A.children),B,Z);else{const $=A.el=w.el;A.children!==w.children&&c($,A.children)}},x=(w,A,B,Z)=>{w==null?i(A.el=l(A.children||""),B,Z):A.el=w.el},T=(w,A,B,Z)=>{[w.el,w.anchor]=v(w.children,A,B,Z,w.el,w.anchor)},y=({el:w,anchor:A},B,Z)=>{let $;for(;w&&w!==A;)$=h(w),i(w,B,Z),w=$;i(A,B,Z)},E=({el:w,anchor:A})=>{let B;for(;w&&w!==A;)B=h(w),r(w),w=B;r(A)},S=(w,A,B,Z,$,re,le,Q,he)=>{le=le||A.type==="svg",w==null?P(A,B,Z,$,re,le,Q,he):C(w,A,$,re,le,Q,he)},P=(w,A,B,Z,$,re,le,Q)=>{let he,ne;const{type:M,props:g,shapeFlag:D,transition:V,dirs:K}=w;if(he=w.el=a(w.type,re,g&&g.is,g),D&8?u(he,w.children):D&16&&_(w.children,he,null,Z,$,re&&M!=="foreignObject",le,Q),K&&Un(w,null,Z,"created"),g){for(const ge in g)ge!=="value"&&!kr(ge)&&s(he,ge,null,g[ge],re,w.children,Z,$,W);"value"in g&&s(he,"value",null,g.value),(ne=g.onVnodeBeforeMount)&&$t(ne,Z,w)}N(he,w,w.scopeId,le,Z),K&&Un(w,null,Z,"beforeMount");const se=(!$||$&&!$.pendingBranch)&&V&&!V.persisted;se&&V.beforeEnter(he),i(he,A,B),((ne=g&&g.onVnodeMounted)||se||K)&&bt(()=>{ne&&$t(ne,Z,w),se&&V.enter(he),K&&Un(w,null,Z,"mounted")},$)},N=(w,A,B,Z,$)=>{if(B&&m(w,B),Z)for(let re=0;re<Z.length;re++)m(w,Z[re]);if($){let re=$.subTree;if(A===re){const le=$.vnode;N(w,le,le.scopeId,le.slotScopeIds,$.parent)}}},_=(w,A,B,Z,$,re,le,Q,he=0)=>{for(let ne=he;ne<w.length;ne++){const M=w[ne]=Q?wn(w[ne]):Qt(w[ne]);p(null,M,A,B,Z,$,re,le,Q)}},C=(w,A,B,Z,$,re,le)=>{const Q=A.el=w.el;let{patchFlag:he,dynamicChildren:ne,dirs:M}=A;he|=w.patchFlag&16;const g=w.props||Ze,D=A.props||Ze;let V;B&&On(B,!1),(V=D.onVnodeBeforeUpdate)&&$t(V,B,A,w),M&&Un(A,w,B,"beforeUpdate"),B&&On(B,!0);const K=$&&A.type!=="foreignObject";if(ne?R(w.dynamicChildren,ne,Q,B,Z,K,re):le||G(w,A,Q,null,B,Z,K,re,!1),he>0){if(he&16)Y(Q,A,g,D,B,Z,$);else if(he&2&&g.class!==D.class&&s(Q,"class",null,D.class,$),he&4&&s(Q,"style",g.style,D.style,$),he&8){const se=A.dynamicProps;for(let ge=0;ge<se.length;ge++){const fe=se[ge],q=g[fe],Se=D[fe];(Se!==q||fe==="value")&&s(Q,fe,q,Se,$,w.children,B,Z,W)}}he&1&&w.children!==A.children&&u(Q,A.children)}else!le&&ne==null&&Y(Q,A,g,D,B,Z,$);((V=D.onVnodeUpdated)||M)&&bt(()=>{V&&$t(V,B,A,w),M&&Un(A,w,B,"updated")},Z)},R=(w,A,B,Z,$,re,le)=>{for(let Q=0;Q<A.length;Q++){const he=w[Q],ne=A[Q],M=he.el&&(he.type===Jt||!qn(he,ne)||he.shapeFlag&70)?f(he.el):B;p(he,ne,M,null,Z,$,re,le,!0)}},Y=(w,A,B,Z,$,re,le)=>{if(B!==Z){if(B!==Ze)for(const Q in B)!kr(Q)&&!(Q in Z)&&s(w,Q,B[Q],null,le,A.children,$,re,W);for(const Q in Z){if(kr(Q))continue;const he=Z[Q],ne=B[Q];he!==ne&&Q!=="value"&&s(w,Q,ne,he,le,A.children,$,re,W)}"value"in Z&&s(w,"value",B.value,Z.value)}},de=(w,A,B,Z,$,re,le,Q,he)=>{const ne=A.el=w?w.el:o(""),M=A.anchor=w?w.anchor:o("");let{patchFlag:g,dynamicChildren:D,slotScopeIds:V}=A;V&&(Q=Q?Q.concat(V):V),w==null?(i(ne,B,Z),i(M,B,Z),_(A.children,B,M,$,re,le,Q,he)):g>0&&g&64&&D&&w.dynamicChildren?(R(w.dynamicChildren,D,B,$,re,le,Q),(A.key!=null||$&&A===$.subTree)&&Rc(w,A,!0)):G(w,A,B,M,$,re,le,Q,he)},U=(w,A,B,Z,$,re,le,Q,he)=>{A.slotScopeIds=Q,w==null?A.shapeFlag&512?$.ctx.activate(A,B,Z,le,he):F(A,B,Z,$,re,le,he):ee(w,A,he)},F=(w,A,B,Z,$,re,le)=>{const Q=w.component=ph(w,Z,$);if(ss(w)&&(Q.ctx.renderer=Te),gh(Q),Q.asyncDep){if($&&$.registerDep(Q,ie),!w.el){const he=Q.subTree=An(mn);x(null,he,A,B)}return}ie(Q,w,A,B,$,re,le)},ee=(w,A,B)=>{const Z=A.component=w.component;if(bf(w,A,B))if(Z.asyncDep&&!Z.asyncResolved){te(Z,A,B);return}else Z.next=A,mf(Z.update),Z.update();else A.el=w.el,Z.vnode=A},ie=(w,A,B,Z,$,re,le)=>{const Q=()=>{if(w.isMounted){let{next:M,bu:g,u:D,parent:V,vnode:K}=w,se=M,ge;On(w,!1),M?(M.el=K.el,te(w,M,le)):M=K,g&&gs(g),(ge=M.props&&M.props.onVnodeBeforeUpdate)&&$t(ge,V,M,K),On(w,!0);const fe=_s(w),q=w.subTree;w.subTree=fe,p(q,fe,f(q.el),Ie(q),w,$,re),M.el=fe.el,se===null&&Sf(w,fe.el),D&&bt(D,$),(ge=M.props&&M.props.onVnodeUpdated)&&bt(()=>$t(ge,V,M,K),$)}else{let M;const{el:g,props:D}=A,{bm:V,m:K,parent:se}=w,ge=Wr(A);if(On(w,!1),V&&gs(V),!ge&&(M=D&&D.onVnodeBeforeMount)&&$t(M,se,A),On(w,!0),g&&Ve){const fe=()=>{w.subTree=_s(w),Ve(g,w.subTree,w,$,null)};ge?A.type.__asyncLoader().then(()=>!w.isUnmounted&&fe()):fe()}else{const fe=w.subTree=_s(w);p(null,fe,B,Z,w,$,re),A.el=fe.el}if(K&&bt(K,$),!ge&&(M=D&&D.onVnodeMounted)){const fe=A;bt(()=>$t(M,se,fe),$)}(A.shapeFlag&256||se&&Wr(se.vnode)&&se.vnode.shapeFlag&256)&&w.a&&bt(w.a,$),w.isMounted=!0,A=B=Z=null}},he=w.effect=new Fo(Q,()=>ko(ne),w.scope),ne=w.update=()=>he.run();ne.id=w.uid,On(w,!0),ne()},te=(w,A,B)=>{A.component=w;const Z=w.vnode.props;w.vnode=A,w.next=null,$f(w,A.props,Z,B),Jf(w,A.children,B),Ni(),da(),Ui()},G=(w,A,B,Z,$,re,le,Q,he=!1)=>{const ne=w&&w.children,M=w?w.shapeFlag:0,g=A.children,{patchFlag:D,shapeFlag:V}=A;if(D>0){if(D&128){oe(ne,g,B,Z,$,re,le,Q,he);return}else if(D&256){ue(ne,g,B,Z,$,re,le,Q,he);return}}V&8?(M&16&&W(ne,$,re),g!==ne&&u(B,g)):M&16?V&16?oe(ne,g,B,Z,$,re,le,Q,he):W(ne,$,re,!0):(M&8&&u(B,""),V&16&&_(g,B,Z,$,re,le,Q,he))},ue=(w,A,B,Z,$,re,le,Q,he)=>{w=w||bi,A=A||bi;const ne=w.length,M=A.length,g=Math.min(ne,M);let D;for(D=0;D<g;D++){const V=A[D]=he?wn(A[D]):Qt(A[D]);p(w[D],V,B,null,$,re,le,Q,he)}ne>M?W(w,$,re,!0,!1,g):_(A,B,Z,$,re,le,Q,he,g)},oe=(w,A,B,Z,$,re,le,Q,he)=>{let ne=0;const M=A.length;let g=w.length-1,D=M-1;for(;ne<=g&&ne<=D;){const V=w[ne],K=A[ne]=he?wn(A[ne]):Qt(A[ne]);if(qn(V,K))p(V,K,B,null,$,re,le,Q,he);else break;ne++}for(;ne<=g&&ne<=D;){const V=w[g],K=A[D]=he?wn(A[D]):Qt(A[D]);if(qn(V,K))p(V,K,B,null,$,re,le,Q,he);else break;g--,D--}if(ne>g){if(ne<=D){const V=D+1,K=V<M?A[V].el:Z;for(;ne<=D;)p(null,A[ne]=he?wn(A[ne]):Qt(A[ne]),B,K,$,re,le,Q,he),ne++}}else if(ne>D)for(;ne<=g;)H(w[ne],$,re,!0),ne++;else{const V=ne,K=ne,se=new Map;for(ne=K;ne<=D;ne++){const xe=A[ne]=he?wn(A[ne]):Qt(A[ne]);xe.key!=null&&se.set(xe.key,ne)}let ge,fe=0;const q=D-K+1;let Se=!1,Ce=0;const ye=new Array(q);for(ne=0;ne<q;ne++)ye[ne]=0;for(ne=V;ne<=g;ne++){const xe=w[ne];if(fe>=q){H(xe,$,re,!0);continue}let Le;if(xe.key!=null)Le=se.get(xe.key);else for(ge=K;ge<=D;ge++)if(ye[ge-K]===0&&qn(xe,A[ge])){Le=ge;break}Le===void 0?H(xe,$,re,!0):(ye[Le-K]=ne+1,Le>=Ce?Ce=Le:Se=!0,p(xe,A[Le],B,null,$,re,le,Q,he),fe++)}const Ee=Se?ih(ye):bi;for(ge=Ee.length-1,ne=q-1;ne>=0;ne--){const xe=K+ne,Le=A[xe],Xe=xe+1<M?A[xe+1].el:Z;ye[ne]===0?p(null,Le,B,Xe,$,re,le,Q,he):Se&&(ge<0||ne!==Ee[ge]?k(Le,B,Xe,2):ge--)}}},k=(w,A,B,Z,$=null)=>{const{el:re,type:le,transition:Q,children:he,shapeFlag:ne}=w;if(ne&6){k(w.component.subTree,A,B,Z);return}if(ne&128){w.suspense.move(A,B,Z);return}if(ne&64){le.move(w,A,B,Te);return}if(le===Jt){i(re,A,B);for(let g=0;g<he.length;g++)k(he[g],A,B,Z);i(w.anchor,A,B);return}if(le===ys){y(w,A,B);return}if(Z!==2&&ne&1&&Q)if(Z===0)Q.beforeEnter(re),i(re,A,B),bt(()=>Q.enter(re),$);else{const{leave:g,delayLeave:D,afterLeave:V}=Q,K=()=>i(re,A,B),se=()=>{g(re,()=>{K(),V&&V()})};D?D(re,K,se):se()}else i(re,A,B)},H=(w,A,B,Z=!1,$=!1)=>{const{type:re,props:le,ref:Q,children:he,dynamicChildren:ne,shapeFlag:M,patchFlag:g,dirs:D}=w;if(Q!=null&&go(Q,null,B,w,!0),M&256){A.ctx.deactivate(w);return}const V=M&1&&D,K=!Wr(w);let se;if(K&&(se=le&&le.onVnodeBeforeUnmount)&&$t(se,A,w),M&6)_e(w.component,B,Z);else{if(M&128){w.suspense.unmount(B,Z);return}V&&Un(w,null,A,"beforeUnmount"),M&64?w.type.remove(w,A,B,$,Te,Z):ne&&(re!==Jt||g>0&&g&64)?W(ne,A,B,!1,!0):(re===Jt&&g&384||!$&&M&16)&&W(he,A,B),Z&&ae(w)}(K&&(se=le&&le.onVnodeUnmounted)||V)&&bt(()=>{se&&$t(se,A,w),V&&Un(w,null,A,"unmounted")},B)},ae=w=>{const{type:A,el:B,anchor:Z,transition:$}=w;if(A===Jt){pe(B,Z);return}if(A===ys){E(w);return}const re=()=>{r(B),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(w.shapeFlag&1&&$&&!$.persisted){const{leave:le,delayLeave:Q}=$,he=()=>le(B,re);Q?Q(w.el,re,he):he()}else re()},pe=(w,A)=>{let B;for(;w!==A;)B=h(w),r(w),w=B;r(A)},_e=(w,A,B)=>{const{bum:Z,scope:$,update:re,subTree:le,um:Q}=w;Z&&gs(Z),$.stop(),re&&(re.active=!1,H(le,w,A,B)),Q&&bt(Q,A),bt(()=>{w.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},W=(w,A,B,Z=!1,$=!1,re=0)=>{for(let le=re;le<w.length;le++)H(w[le],A,B,Z,$)},Ie=w=>w.shapeFlag&6?Ie(w.component.subTree):w.shapeFlag&128?w.suspense.next():h(w.anchor||w.el),be=(w,A,B)=>{w==null?A._vnode&&H(A._vnode,null,null,!0):p(A._vnode||null,w,A,null,null,null,B),da(),pc(),A._vnode=w},Te={p,um:H,m:k,r:ae,mt:F,mc:_,pc:G,pbc:R,n:Ie,o:n};let Me,Ve;return e&&([Me,Ve]=e(Te)),{render:be,hydrate:Me,createApp:eh(be,Me)}}function On({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Rc(n,e,t=!1){const i=n.children,r=e.children;if(Re(i)&&Re(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=wn(r[s]),o.el=a.el),t||Rc(a,o)),o.type===as&&(o.el=a.el)}}function ih(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const rh=n=>n.__isTeleport,Jt=Symbol(void 0),as=Symbol(void 0),mn=Symbol(void 0),ys=Symbol(void 0),Qi=[];let jt=null;function Ic(n=!1){Qi.push(jt=n?null:[])}function sh(){Qi.pop(),jt=Qi[Qi.length-1]||null}let rr=1;function ba(n){rr+=n}function oh(n){return n.dynamicChildren=rr>0?jt||bi:null,sh(),rr>0&&jt&&jt.push(n),n}function Fc(n,e,t,i,r,s){return oh(Uc(n,e,t,i,r,s,!0))}function ah(n){return n?n.__v_isVNode===!0:!1}function qn(n,e){return n.type===e.type&&n.key===e.key}const ls="__vInternal",Nc=({key:n})=>n??null,qr=({ref:n,ref_key:e,ref_for:t})=>n!=null?ft(n)||mt(n)||Ue(n)?{i:Xt,r:n,k:e,f:!!t}:n:null;function Uc(n,e=null,t=null,i=0,r=null,s=n===Jt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Nc(e),ref:e&&qr(e),scopeId:_c,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Xt};return o?(Xo(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ft(t)?8:16),rr>0&&!a&&jt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&jt.push(l),l}const An=lh;function lh(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Vf)&&(n=mn),ah(n)){const o=Pn(n,e,!0);return t&&Xo(o,t),rr>0&&!s&&jt&&(o.shapeFlag&6?jt[jt.indexOf(n)]=o:jt.push(o)),o.patchFlag|=-2,o}if(Mh(n)&&(n=n.__vccOpts),e){e=ch(e);let{class:o,style:l}=e;o&&!ft(o)&&(e.class=Co(o)),nt(l)&&(oc(l)&&!Re(l)&&(l=gt({},l)),e.style=Ao(l))}const a=ft(n)?1:wf(n)?128:rh(n)?64:nt(n)?4:Ue(n)?2:0;return Uc(n,e,t,i,r,a,s,!0)}function ch(n){return n?oc(n)||ls in n?gt({},n):n:null}function Pn(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?fh(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Nc(o),ref:e&&e.ref?t&&r?Re(r)?r.concat(qr(e)):[r,qr(e)]:qr(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Jt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Pn(n.ssContent),ssFallback:n.ssFallback&&Pn(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx}}function uh(n=" ",e=0){return An(as,null,n,e)}function Qt(n){return n==null||typeof n=="boolean"?An(mn):Re(n)?An(Jt,null,n.slice()):typeof n=="object"?wn(n):An(as,null,String(n))}function wn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Pn(n)}function Xo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Re(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Xo(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(ls in e)?e._ctx=Xt:r===3&&Xt&&(Xt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ue(e)?(e={default:e,_ctx:Xt},t=32):(e=String(e),i&64?(t=16,e=[uh(e)]):t=8);n.children=e,n.shapeFlag|=t}function fh(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Co([e.class,i.class]));else if(r==="style")e.style=Ao([e.style,i.style]);else if(Qr(r)){const s=e[r],a=i[r];a&&s!==a&&!(Re(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function $t(n,e,t,i=null){zt(n,e,7,[t,i])}const hh=Dc();let dh=0;function ph(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||hh,s={uid:dh++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ac(i,r),emitsOptions:gc(i,r),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:i.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=xf.bind(null,s),n.ce&&n.ce(s),s}let ut=null;const mh=()=>ut||Xt,Li=n=>{ut=n,n.scope.on()},Kn=()=>{ut&&ut.scope.off(),ut=null};function Oc(n){return n.vnode.shapeFlag&4}let sr=!1;function gh(n,e=!1){sr=e;const{props:t,children:i}=n.vnode,r=Oc(n);Yf(n,t,r,e),Kf(n,i);const s=r?_h(n,e):void 0;return sr=!1,s}function _h(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=ac(new Proxy(n.ctx,kf));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?vh(n):null;Li(n),Ni();const s=Tn(i,n,0,[n.props,r]);if(Ui(),Kn(),Xl(s)){if(s.then(Kn,Kn),e)return s.then(a=>{Sa(n,a,e)}).catch(a=>{is(a,n,0)});n.asyncDep=s}else Sa(n,s,e)}else zc(n,e)}function Sa(n,e,t){Ue(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:nt(e)&&(n.setupState=uc(e)),zc(n,t)}let wa;function zc(n,e,t){const i=n.type;if(!n.render){if(!e&&wa&&!i.render){const r=i.template||Wo(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=gt(gt({isCustomElement:s,delimiters:o},a),l);i.render=wa(r,c)}}n.render=i.render||Yt}Li(n),Ni(),Hf(n),Ui(),Kn()}function xh(n){return new Proxy(n.attrs,{get(e,t){return It(n,"get","$attrs"),e[t]}})}function vh(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=xh(n))},slots:n.slots,emit:n.emit,expose:e}}function jo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(uc(ac(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ji)return Ji[t](n)},has(e,t){return t in e||t in Ji}}))}function Mh(n){return Ue(n)&&"__vccOpts"in n}const yh=(n,e)=>ff(n,e,sr),bh=Symbol(""),Sh=()=>Hr(bh),wh="3.2.45",Eh="http://www.w3.org/2000/svg",Xn=typeof document<"u"?document:null,Ea=Xn&&Xn.createElement("template"),Th={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Xn.createElementNS(Eh,n):Xn.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Xn.createTextNode(n),createComment:n=>Xn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Xn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ea.innerHTML=i?`<svg>${n}</svg>`:n;const o=Ea.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Ah(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Ch(n,e,t){const i=n.style,r=ft(t);if(t&&!r){for(const s in t)_o(i,s,t[s]);if(e&&!ft(e))for(const s in e)t[s]==null&&_o(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const Ta=/\s*!important$/;function _o(n,e,t){if(Re(t))t.forEach(i=>_o(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Lh(n,e);Ta.test(t)?n.setProperty(Fi(i),t.replace(Ta,""),"important"):n[i]=t}}const Aa=["Webkit","Moz","ms"],bs={};function Lh(n,e){const t=bs[e];if(t)return t;let i=Ai(e);if(i!=="filter"&&i in n)return bs[e]=i;i=jl(i);for(let r=0;r<Aa.length;r++){const s=Aa[r]+i;if(s in n)return bs[e]=s}return e}const Ca="http://www.w3.org/1999/xlink";function Ph(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Ca,e.slice(6,e.length)):n.setAttributeNS(Ca,e,t);else{const s=vu(e);t==null||s&&!ql(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Dh(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t??"";return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t??"";(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=ql(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}function Rh(n,e,t,i){n.addEventListener(e,t,i)}function Ih(n,e,t,i){n.removeEventListener(e,t,i)}function Fh(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Nh(e);if(i){const c=s[e]=zh(i,r);Rh(n,o,c,l)}else a&&(Ih(n,o,a,l),s[e]=void 0)}}const La=/(?:Once|Passive|Capture)$/;function Nh(n){let e;if(La.test(n)){e={};let i;for(;i=n.match(La);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Fi(n.slice(2)),e]}let Ss=0;const Uh=Promise.resolve(),Oh=()=>Ss||(Uh.then(()=>Ss=0),Ss=Date.now());function zh(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;zt(Bh(i,t.value),e,5,[i])};return t.value=n,t.attached=Oh(),t}function Bh(n,e){if(Re(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Pa=/^on[a-z]/,Gh=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?Ah(n,i,r):e==="style"?Ch(n,t,i):Qr(e)?Lo(e)||Fh(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vh(n,e,i,r))?Dh(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ph(n,e,i,r))};function Vh(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Pa.test(e)&&Ue(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Pa.test(e)&&ft(t)?!1:e in n}const kh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Pf.props;const Hh=gt({patchProp:Gh},Th);let Da;function Wh(){return Da||(Da=th(Hh))}const qh=(...n)=>{const e=Wh().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Xh(i);if(!r)return;const s=e._component;!Ue(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Xh(n){return ft(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yo="148",jh=0,Ra=1,Yh=2,Bc=1,$h=2,$i=3,ei=0,Bt=1,$o=2,yr=3,Cn=0,Ei=1,Ia=2,Fa=3,Na=4,Zh=5,vi=100,Kh=101,Jh=102,Ua=103,Oa=104,Qh=200,ed=201,td=202,nd=203,Gc=204,Vc=205,id=206,rd=207,sd=208,od=209,ad=210,ld=0,cd=1,ud=2,xo=3,fd=4,hd=5,dd=6,pd=7,Zo=0,md=1,gd=2,gn=0,_d=1,xd=2,vd=3,Md=4,yd=5,kc=300,Pi=301,Di=302,vo=303,Mo=304,cs=306,yo=1e3,Wt=1001,bo=1002,yt=1003,za=1004,ws=1005,Ot=1006,bd=1007,or=1008,ti=1009,Sd=1010,wd=1011,Hc=1012,Ed=1013,Yn=1014,$n=1015,ar=1016,Td=1017,Ad=1018,Ti=1020,Cd=1021,Ld=1022,qt=1023,Pd=1024,Dd=1025,Jn=1026,Ri=1027,Rd=1028,Id=1029,Fd=1030,Nd=1031,Ud=1033,Es=33776,Ts=33777,As=33778,Cs=33779,Ba=35840,Ga=35841,Va=35842,ka=35843,Od=36196,Ha=37492,Wa=37496,qa=37808,Xa=37809,ja=37810,Ya=37811,$a=37812,Za=37813,Ka=37814,Ja=37815,Qa=37816,el=37817,tl=37818,nl=37819,il=37820,rl=37821,sl=36492,ni=3e3,Ye=3001,zd=3200,Bd=3201,Wc=0,Gd=1,Kt="srgb",lr="srgb-linear",Ls=7680,Vd=519,ol=35044,al="300 es",So=1035;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ps=Math.PI/180,ll=180/Math.PI;function cr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[i&255]+dt[i>>8&255]+dt[i>>16&255]+dt[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function kd(n,e){return(n%e+e)%e}function Ds(n,e,t){return(1-t)*n+t*e}function cl(n){return(n&n-1)===0&&n!==0}function wo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function br(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],v=i[8],p=r[0],d=r[3],x=r[6],T=r[1],y=r[4],E=r[7],S=r[2],P=r[5],N=r[8];return s[0]=a*p+o*T+l*S,s[3]=a*d+o*y+l*P,s[6]=a*x+o*E+l*N,s[1]=c*p+u*T+f*S,s[4]=c*d+u*y+f*P,s[7]=c*x+u*E+f*N,s[2]=h*p+m*T+v*S,s[5]=h*d+m*y+v*P,s[8]=h*x+m*E+v*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,v=t*f+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return e[0]=f*p,e[1]=(r*c-u*i)*p,e[2]=(o*i-r*a)*p,e[3]=h*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-o*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(a*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Rs.makeScale(e,t)),this}rotate(e){return this.premultiply(Rs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rs=new Dt;function qc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Jr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Is={[Kt]:{[lr]:Qn},[lr]:{[Kt]:Xr}},xt={legacyMode:!0,get workingColorSpace(){return lr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Is[e]&&Is[e][t]!==void 0){const i=Is[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},Xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},it={r:0,g:0,b:0},Gt={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Fs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function wr(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=kd(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Fs(a,s,e+1/3),this.g=Fs(a,s,e),this.b=Fs(a,s,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,t=Kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,xt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,xt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,xt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,xt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Kt){const i=Xc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return xt.fromWorkingColorSpace(wr(this,it),e),Lt(it.r*255,0,255)<<16^Lt(it.g*255,0,255)<<8^Lt(it.b*255,0,255)<<0}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(wr(this,it),t);const i=it.r,r=it.g,s=it.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(wr(this,it),t),e.r=it.r,e.g=it.g,e.b=it.b,e}getStyle(e=Kt){return xt.fromWorkingColorSpace(wr(this,it),e),e!==Kt?`color(${e} ${it.r} ${it.g} ${it.b})`:`rgb(${it.r*255|0},${it.g*255|0},${it.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Gt),Gt.h+=e,Gt.s+=t,Gt.l+=i,this.setHSL(Gt.h,Gt.s,Gt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gt),e.getHSL(Sr);const i=Ds(Gt.h,Sr.h,t),r=Ds(Gt.s,Sr.s,t),s=Ds(Gt.l,Sr.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}je.NAMES=Xc;let si;class jc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{si===void 0&&(si=Jr("canvas")),si.width=e.width,si.height=e.height;const i=si.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Qn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qn(t[i]/255)*255):t[i]=Qn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Yc{constructor(e=null){this.isSource=!0,this.uuid=cr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ns(r[a].image)):s.push(Ns(r[a]))}else s=Ns(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ns(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hd=0;class Rt extends Oi{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,i=Wt,r=Wt,s=Ot,a=or,o=qt,l=ti,c=Rt.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=cr(),this.name="",this.source=new Yc(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yo:e.x=e.x-Math.floor(e.x);break;case Wt:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yo:e.y=e.y-Math.floor(e.y);break;case Wt:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=kc;Rt.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,i=0,r=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],v=l[9],p=l[2],d=l[6],x=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(v-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(v+d)<.1&&Math.abs(c+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,E=(m+1)/2,S=(x+1)/2,P=(u+h)/4,N=(f+p)/4,_=(v+d)/4;return y>E&&y>S?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=P/i,s=N/i):E>S?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=P/r,s=_/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=N/s,r=_/s),this.set(i,r,s,t),this}let T=Math.sqrt((d-v)*(d-v)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(d-v)/T,this.y=(f-p)/T,this.z=(h-u)/T,this.w=Math.acos((c+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ii extends Oi{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Rt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ot,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $c extends Rt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wd extends Rt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ur{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],v=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=p;return}if(f!==p||l!==h||c!==m||u!==v){let d=1-o;const x=l*h+c*m+u*v+f*p,T=x>=0?1:-1,y=1-x*x;if(y>Number.EPSILON){const S=Math.sqrt(y),P=Math.atan2(S,x*T);d=Math.sin(d*P)/S,o=Math.sin(o*P)/S}const E=o*T;if(l=l*d+h*E,c=c*d+m*E,u=u*d+v*E,f=f*d+p*E,d===1-o){const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+u*f+l*m-c*h,e[t+1]=l*v+u*h+c*f-o*m,e[t+2]=c*v+u*m+o*h-l*f,e[t+3]=u*v-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"YXZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"ZXY":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"ZYX":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"YZX":this._x=h*u*f+c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f-h*m*v;break;case"XZY":this._x=h*u*f-c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ul.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ul.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Us.copy(this).projectOnVector(e),this.sub(Us)}reflect(e){return this.sub(Us.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Us=new O,ul=new ur;class fr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)zn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(zn)}else i.boundingBox===null&&i.computeBoundingBox(),Os.copy(i.boundingBox),Os.applyMatrix4(e.matrixWorld),this.union(Os);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),Er.subVectors(this.max,Gi),oi.subVectors(e.a,Gi),ai.subVectors(e.b,Gi),li.subVectors(e.c,Gi),Mn.subVectors(ai,oi),yn.subVectors(li,ai),Bn.subVectors(oi,li);let t=[0,-Mn.z,Mn.y,0,-yn.z,yn.y,0,-Bn.z,Bn.y,Mn.z,0,-Mn.x,yn.z,0,-yn.x,Bn.z,0,-Bn.x,-Mn.y,Mn.x,0,-yn.y,yn.x,0,-Bn.y,Bn.x,0];return!zs(t,oi,ai,li,Er)||(t=[1,0,0,0,1,0,0,0,1],!zs(t,oi,ai,li,Er))?!1:(Tr.crossVectors(Mn,yn),t=[Tr.x,Tr.y,Tr.z],zs(t,oi,ai,li,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return zn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const an=[new O,new O,new O,new O,new O,new O,new O,new O],zn=new O,Os=new fr,oi=new O,ai=new O,li=new O,Mn=new O,yn=new O,Bn=new O,Gi=new O,Er=new O,Tr=new O,Gn=new O;function zs(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Gn.fromArray(n,s);const o=r.x*Math.abs(Gn.x)+r.y*Math.abs(Gn.y)+r.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),u=i.dot(Gn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const qd=new fr,Vi=new O,Bs=new O;class Ko{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):qd.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vi.subVectors(e,this.center);const t=Vi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Vi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vi.copy(e.center).add(Bs)),this.expandByPoint(Vi.copy(e.center).sub(Bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new O,Gs=new O,Ar=new O,bn=new O,Vs=new O,Cr=new O,ks=new O;class Xd{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.direction).multiplyScalar(t).add(this.origin),ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Gs.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(Gs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ar),o=bn.dot(this.direction),l=-bn.dot(Ar),c=bn.lengthSq(),u=Math.abs(1-a*a);let f,h,m,v;if(u>0)if(f=a*l-o,h=a*o-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const p=1/u;f*=p,h*=p,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Ar).multiplyScalar(h).add(Gs),m}intersectSphere(e,t){ln.subVectors(e.center,this.origin);const i=ln.dot(this.direction),r=ln.dot(ln)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,i,r,s){Vs.subVectors(t,e),Cr.subVectors(i,e),ks.crossVectors(Vs,Cr);let a=this.direction.dot(ks),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bn.subVectors(this.origin,e);const l=o*this.direction.dot(Cr.crossVectors(bn,Cr));if(l<0)return null;const c=o*this.direction.dot(Vs.cross(bn));if(c<0||l+c>a)return null;const u=-o*bn.dot(ks);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,f,h,m,v,p,d){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=r,x[1]=s,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=u,x[10]=f,x[14]=h,x[3]=m,x[7]=v,x[11]=p,x[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ci.setFromMatrixColumn(e,0).length(),s=1/ci.setFromMatrixColumn(e,1).length(),a=1/ci.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,v=o*u,p=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+v*c,t[5]=h-p*c,t[9]=-o*l,t[2]=p-h*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,v=c*u,p=c*f;t[0]=h+p*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-v,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,v=c*u,p=c*f;t[0]=h-p*o,t[4]=-a*f,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,v=o*u,p=o*f;t[0]=l*u,t[4]=v*c-m,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,v=o*l,p=o*c;t[0]=l*u,t[4]=p-h*f,t[8]=v*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+v,t[10]=h-p*f}else if(e.order==="XZY"){const h=a*l,m=a*c,v=o*l,p=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=a*u,t[9]=m*f-v,t[2]=v*f-m,t[6]=o*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jd,e,Yd)}lookAt(e,t,i){const r=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),Sn.crossVectors(i,At),Sn.lengthSq()===0&&(Math.abs(i.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),Sn.crossVectors(i,At)),Sn.normalize(),Lr.crossVectors(At,Sn),r[0]=Sn.x,r[4]=Lr.x,r[8]=At.x,r[1]=Sn.y,r[5]=Lr.y,r[9]=At.y,r[2]=Sn.z,r[6]=Lr.z,r[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],v=i[2],p=i[6],d=i[10],x=i[14],T=i[3],y=i[7],E=i[11],S=i[15],P=r[0],N=r[4],_=r[8],C=r[12],R=r[1],Y=r[5],de=r[9],U=r[13],F=r[2],ee=r[6],ie=r[10],te=r[14],G=r[3],ue=r[7],oe=r[11],k=r[15];return s[0]=a*P+o*R+l*F+c*G,s[4]=a*N+o*Y+l*ee+c*ue,s[8]=a*_+o*de+l*ie+c*oe,s[12]=a*C+o*U+l*te+c*k,s[1]=u*P+f*R+h*F+m*G,s[5]=u*N+f*Y+h*ee+m*ue,s[9]=u*_+f*de+h*ie+m*oe,s[13]=u*C+f*U+h*te+m*k,s[2]=v*P+p*R+d*F+x*G,s[6]=v*N+p*Y+d*ee+x*ue,s[10]=v*_+p*de+d*ie+x*oe,s[14]=v*C+p*U+d*te+x*k,s[3]=T*P+y*R+E*F+S*G,s[7]=T*N+y*Y+E*ee+S*ue,s[11]=T*_+y*de+E*ie+S*oe,s[15]=T*C+y*U+E*te+S*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],v=e[3],p=e[7],d=e[11],x=e[15];return v*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+p*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+d*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+x*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],v=e[12],p=e[13],d=e[14],x=e[15],T=f*d*c-p*h*c+p*l*m-o*d*m-f*l*x+o*h*x,y=v*h*c-u*d*c-v*l*m+a*d*m+u*l*x-a*h*x,E=u*p*c-v*f*c+v*o*m-a*p*m-u*o*x+a*f*x,S=v*f*l-u*p*l-v*o*h+a*p*h+u*o*d-a*f*d,P=t*T+i*y+r*E+s*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/P;return e[0]=T*N,e[1]=(p*h*s-f*d*s-p*r*m+i*d*m+f*r*x-i*h*x)*N,e[2]=(o*d*s-p*l*s+p*r*c-i*d*c-o*r*x+i*l*x)*N,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*N,e[4]=y*N,e[5]=(u*d*s-v*h*s+v*r*m-t*d*m-u*r*x+t*h*x)*N,e[6]=(v*l*s-a*d*s-v*r*c+t*d*c+a*r*x-t*l*x)*N,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*N,e[8]=E*N,e[9]=(v*f*s-u*p*s-v*i*m+t*p*m+u*i*x-t*f*x)*N,e[10]=(a*p*s-v*o*s+v*i*c-t*p*c-a*i*x+t*o*x)*N,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*N,e[12]=S*N,e[13]=(u*p*r-v*f*r+v*i*h-t*p*h-u*i*d+t*f*d)*N,e[14]=(v*o*r-a*p*r-v*i*l+t*p*l+a*i*d-t*o*d)*N,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*N,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,v=s*f,p=a*u,d=a*f,x=o*f,T=l*c,y=l*u,E=l*f,S=i.x,P=i.y,N=i.z;return r[0]=(1-(p+x))*S,r[1]=(m+E)*S,r[2]=(v-y)*S,r[3]=0,r[4]=(m-E)*P,r[5]=(1-(h+x))*P,r[6]=(d+T)*P,r[7]=0,r[8]=(v+y)*N,r[9]=(d-T)*N,r[10]=(1-(h+p))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ci.set(r[0],r[1],r[2]).length();const a=ci.set(r[4],r[5],r[6]).length(),o=ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vt.copy(this);const c=1/s,u=1/a,f=1/o;return Vt.elements[0]*=c,Vt.elements[1]*=c,Vt.elements[2]*=c,Vt.elements[4]*=u,Vt.elements[5]*=u,Vt.elements[6]*=u,Vt.elements[8]*=f,Vt.elements[9]*=f,Vt.elements[10]*=f,t.setFromRotationMatrix(Vt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),f=(t+e)*l,h=(i+r)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ci=new O,Vt=new tt,jd=new O(0,0,0),Yd=new O(1,1,1),Sn=new O,Lr=new O,At=new O,fl=new tt,hl=new ur;class hr{constructor(e=0,t=0,i=0,r=hr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hl.setFromEuler(this),this.setFromQuaternion(hl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}hr.DefaultOrder="XYZ";hr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Zc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $d=0;const dl=new O,ui=new ur,cn=new tt,Pr=new O,ki=new O,Zd=new O,Kd=new ur,pl=new O(1,0,0),ml=new O(0,1,0),gl=new O(0,0,1),Jd={type:"added"},_l={type:"removed"};class St extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DefaultUp.clone();const e=new O,t=new hr,i=new ur,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new Dt}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=St.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=St.DefaultMatrixWorldAutoUpdate,this.layers=new Zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(pl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return dl.copy(e).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pr.copy(e):Pr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(ki,Pr,this.up):cn.lookAt(Pr,ki,this.up),this.quaternion.setFromRotationMatrix(cn),r&&(cn.extractRotation(r.matrixWorld),ui.setFromRotationMatrix(cn),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_l)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(_l)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,e,Zd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,Kd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}St.DefaultUp=new O(0,1,0);St.DefaultMatrixAutoUpdate=!0;St.DefaultMatrixWorldAutoUpdate=!0;const kt=new O,un=new O,Hs=new O,fn=new O,fi=new O,hi=new O,xl=new O,Ws=new O,qs=new O,Xs=new O;class dn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),kt.subVectors(e,t),r.cross(kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){kt.subVectors(r,t),un.subVectors(i,t),Hs.subVectors(e,t);const a=kt.dot(kt),o=kt.dot(un),l=kt.dot(Hs),c=un.dot(un),u=un.dot(Hs),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,v=(a*u-o*l)*h;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,fn),fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,fn),l.set(0,0),l.addScaledVector(s,fn.x),l.addScaledVector(a,fn.y),l.addScaledVector(o,fn.z),l}static isFrontFacing(e,t,i,r){return kt.subVectors(i,t),un.subVectors(e,t),kt.cross(un).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kt.subVectors(this.c,this.b),un.subVectors(this.a,this.b),kt.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return dn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;fi.subVectors(r,i),hi.subVectors(s,i),Ws.subVectors(e,i);const l=fi.dot(Ws),c=hi.dot(Ws);if(l<=0&&c<=0)return t.copy(i);qs.subVectors(e,r);const u=fi.dot(qs),f=hi.dot(qs);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(fi,a);Xs.subVectors(e,s);const m=fi.dot(Xs),v=hi.dot(Xs);if(v>=0&&m<=v)return t.copy(s);const p=m*c-l*v;if(p<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(hi,o);const d=u*v-m*f;if(d<=0&&f-u>=0&&m-v>=0)return xl.subVectors(s,r),o=(f-u)/(f-u+(m-v)),t.copy(r).addScaledVector(xl,o);const x=1/(d+p+h);return a=p*x,o=h*x,t.copy(i).addScaledVector(fi,a).addScaledVector(hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Qd=0;class dr extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=Ei,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Gc,this.blendDst=Vc,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(i.blending=this.blending),this.side!==ei&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kc extends dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const et=new O,Dr=new qe;class nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ol,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyMatrix3(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=br(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=br(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=br(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ol&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Jc extends nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qc extends nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class rn extends nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ep=0;const Ut=new tt,js=new St,di=new O,Ct=new fr,Hi=new fr,ct=new O;class Dn extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qc(e)?Qc:Jc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Dt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,i){return Ut.makeTranslation(e,t,i),this.applyMatrix4(Ut),this}scale(e,t,i){return Ut.makeScale(e,t,i),this.applyMatrix4(Ut),this}lookAt(e){return js.lookAt(e),js.updateMatrix(),this.applyMatrix4(js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new rn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ct.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ko);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Hi.setFromBufferAttribute(o),this.morphTargetsRelative?(ct.addVectors(Ct.min,Hi.min),Ct.expandByPoint(ct),ct.addVectors(Ct.max,Hi.max),Ct.expandByPoint(ct)):(Ct.expandByPoint(Hi.min),Ct.expandByPoint(Hi.max))}Ct.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ct));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ct.fromBufferAttribute(o,c),l&&(di.fromBufferAttribute(e,c),ct.add(di)),r=Math.max(r,i.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<o;R++)c[R]=new O,u[R]=new O;const f=new O,h=new O,m=new O,v=new qe,p=new qe,d=new qe,x=new O,T=new O;function y(R,Y,de){f.fromArray(r,R*3),h.fromArray(r,Y*3),m.fromArray(r,de*3),v.fromArray(a,R*2),p.fromArray(a,Y*2),d.fromArray(a,de*2),h.sub(f),m.sub(f),p.sub(v),d.sub(v);const U=1/(p.x*d.y-d.x*p.y);isFinite(U)&&(x.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(U),T.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(U),c[R].add(x),c[Y].add(x),c[de].add(x),u[R].add(T),u[Y].add(T),u[de].add(T))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let R=0,Y=E.length;R<Y;++R){const de=E[R],U=de.start,F=de.count;for(let ee=U,ie=U+F;ee<ie;ee+=3)y(i[ee+0],i[ee+1],i[ee+2])}const S=new O,P=new O,N=new O,_=new O;function C(R){N.fromArray(s,R*3),_.copy(N);const Y=c[R];S.copy(Y),S.sub(N.multiplyScalar(N.dot(Y))).normalize(),P.crossVectors(_,Y);const U=P.dot(u[R])<0?-1:1;l[R*4]=S.x,l[R*4+1]=S.y,l[R*4+2]=S.z,l[R*4+3]=U}for(let R=0,Y=E.length;R<Y;++R){const de=E[R],U=de.start,F=de.count;for(let ee=U,ie=U+F;ee<ie;ee+=3)C(i[ee+0]),C(i[ee+1]),C(i[ee+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,d),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,v=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let x=0;x<u;x++)h[v++]=c[m++]}return new nn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const vl=new tt,pi=new Xd,Ys=new Ko,Wi=new O,qi=new O,Xi=new O,$s=new O,Rr=new O,Ir=new qe,Fr=new qe,Nr=new qe,Zs=new O,Ur=new O;class pn extends St{constructor(e=new Dn,t=new Kc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Rr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&($s.fromBufferAttribute(f,e),a?Rr.addScaledVector($s,u):Rr.addScaledVector($s.sub(t),u))}t.add(Rr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Ys.copy(i.boundingSphere),Ys.applyMatrix4(s),e.ray.intersectsSphere(Ys)===!1)||(vl.copy(s).invert(),pi.copy(e.ray).applyMatrix4(vl),i.boundingBox!==null&&pi.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,f=i.groups,h=i.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,v=f.length;m<v;m++){const p=f[m],d=r[p.materialIndex],x=Math.max(p.start,h.start),T=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let y=x,E=T;y<E;y+=3){const S=o.getX(y),P=o.getX(y+1),N=o.getX(y+2);a=Or(this,d,e,pi,c,u,S,P,N),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let p=m,d=v;p<d;p+=3){const x=o.getX(p),T=o.getX(p+1),y=o.getX(p+2);a=Or(this,r,e,pi,c,u,x,T,y),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,v=f.length;m<v;m++){const p=f[m],d=r[p.materialIndex],x=Math.max(p.start,h.start),T=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let y=x,E=T;y<E;y+=3){const S=y,P=y+1,N=y+2;a=Or(this,d,e,pi,c,u,S,P,N),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let p=m,d=v;p<d;p+=3){const x=p,T=p+1,y=p+2;a=Or(this,r,e,pi,c,u,x,T,y),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function tp(n,e,t,i,r,s,a,o){let l;if(e.side===Bt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ei,o),l===null)return null;Ur.copy(o),Ur.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ur);return c<t.near||c>t.far?null:{distance:c,point:Ur.clone(),object:n}}function Or(n,e,t,i,r,s,a,o,l){n.getVertexPosition(a,Wi),n.getVertexPosition(o,qi),n.getVertexPosition(l,Xi);const c=tp(n,e,t,i,Wi,qi,Xi,Zs);if(c){r&&(Ir.fromBufferAttribute(r,a),Fr.fromBufferAttribute(r,o),Nr.fromBufferAttribute(r,l),c.uv=dn.getUV(Zs,Wi,qi,Xi,Ir,Fr,Nr,new qe)),s&&(Ir.fromBufferAttribute(s,a),Fr.fromBufferAttribute(s,o),Nr.fromBufferAttribute(s,l),c.uv2=dn.getUV(Zs,Wi,qi,Xi,Ir,Fr,Nr,new qe));const u={a,b:o,c:l,normal:new O,materialIndex:0};dn.getNormal(Wi,qi,Xi,u.normal),c.face=u}return c}class pr extends Dn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(f,2));function v(p,d,x,T,y,E,S,P,N,_,C){const R=E/N,Y=S/_,de=E/2,U=S/2,F=P/2,ee=N+1,ie=_+1;let te=0,G=0;const ue=new O;for(let oe=0;oe<ie;oe++){const k=oe*Y-U;for(let H=0;H<ee;H++){const ae=H*R-de;ue[p]=ae*T,ue[d]=k*y,ue[x]=F,c.push(ue.x,ue.y,ue.z),ue[p]=0,ue[d]=0,ue[x]=P>0?1:-1,u.push(ue.x,ue.y,ue.z),f.push(H/N),f.push(1-oe/_),te+=1}}for(let oe=0;oe<_;oe++)for(let k=0;k<N;k++){const H=h+k+ee*oe,ae=h+k+ee*(oe+1),pe=h+(k+1)+ee*(oe+1),_e=h+(k+1)+ee*oe;l.push(H,ae,_e),l.push(ae,pe,_e),G+=6}o.addGroup(m,G,C),m+=G,h+=te}}static fromJSON(e){return new pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Mt(n){const e={};for(let t=0;t<n.length;t++){const i=Ii(n[t]);for(const r in i)e[r]=i[r]}return e}function np(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function eu(n){return n.getRenderTarget()===null&&n.outputEncoding===Ye?Kt:lr}const ip={clone:Ii,merge:Mt};var rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rp,this.fragmentShader=sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=np(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class tu extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pt extends tu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ll*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ll*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ps*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mi=-90,gi=1;class op extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Pt(mi,gi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Pt(mi,gi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Pt(mi,gi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Pt(mi,gi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Pt(mi,gi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Pt(mi,gi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=gn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class nu extends Rt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Pi,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ap extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new nu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new pr(5,5,5),s=new ri({name:"CubemapFromEquirect",uniforms:Ii(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:Cn});s.uniforms.tEquirect.value=t;const a=new pn(r,s),o=t.minFilter;return t.minFilter===or&&(t.minFilter=Ot),new op(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Ks=new O,lp=new O,cp=new Dt;class kn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ks.subVectors(i,t).cross(lp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Ks),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||cp.getNormalMatrix(e),r=this.coplanarPoint(Ks).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new Ko,zr=new O;class Jo{constructor(e=new kn,t=new kn,i=new kn,r=new kn,s=new kn,a=new kn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],v=i[10],p=i[11],d=i[12],x=i[13],T=i[14],y=i[15];return t[0].setComponents(o-r,f-l,p-h,y-d).normalize(),t[1].setComponents(o+r,f+l,p+h,y+d).normalize(),t[2].setComponents(o+s,f+c,p+m,y+x).normalize(),t[3].setComponents(o-s,f-c,p-m,y-x).normalize(),t[4].setComponents(o-a,f-u,p-v,y-T).normalize(),t[5].setComponents(o+a,f+u,p+v,y+T).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(zr.x=r.normal.x>0?e.max.x:e.min.x,zr.y=r.normal.y>0?e.max.y:e.min.y,zr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function iu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function up(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let v;if(f instanceof Float32Array)v=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(f instanceof Int16Array)v=5122;else if(f instanceof Uint32Array)v=5125;else if(f instanceof Int32Array)v=5124;else if(f instanceof Int8Array)v=5120;else if(f instanceof Uint8Array)v=5121;else if(f instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Qo extends Dn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],v=[],p=[],d=[];for(let x=0;x<u;x++){const T=x*h-a;for(let y=0;y<c;y++){const E=y*f-s;v.push(E,-T,0),p.push(0,0,1),d.push(y/o),d.push(1-x/l)}}for(let x=0;x<l;x++)for(let T=0;T<o;T++){const y=T+c*x,E=T+c*(x+1),S=T+1+c*(x+1),P=T+1+c*x;m.push(y,E,P),m.push(E,S,P)}this.setIndex(m),this.setAttribute("position",new rn(v,3)),this.setAttribute("normal",new rn(p,3)),this.setAttribute("uv",new rn(d,2))}static fromJSON(e){return new Qo(e.width,e.height,e.widthSegments,e.heightSegments)}}var fp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p="vec3 transformed = vec3( position );",xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Mp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Dp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Op="gl_FragColor = linearToOutputTexel( gl_FragColor );",zp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$p=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,em=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,om=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,am=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,um=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,bm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Em=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wm=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,qm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$m=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,tg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ng=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ig=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,rg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,sg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,og=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ag=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ug=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,_g=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Vg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,De={alphamap_fragment:fp,alphamap_pars_fragment:hp,alphatest_fragment:dp,alphatest_pars_fragment:pp,aomap_fragment:mp,aomap_pars_fragment:gp,begin_vertex:_p,beginnormal_vertex:xp,bsdfs:vp,iridescence_fragment:Mp,bumpmap_pars_fragment:yp,clipping_planes_fragment:bp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Ep,color_fragment:Tp,color_pars_fragment:Ap,color_pars_vertex:Cp,color_vertex:Lp,common:Pp,cube_uv_reflection_fragment:Dp,defaultnormal_vertex:Rp,displacementmap_pars_vertex:Ip,displacementmap_vertex:Fp,emissivemap_fragment:Np,emissivemap_pars_fragment:Up,encodings_fragment:Op,encodings_pars_fragment:zp,envmap_fragment:Bp,envmap_common_pars_fragment:Gp,envmap_pars_fragment:Vp,envmap_pars_vertex:kp,envmap_physical_pars_fragment:em,envmap_vertex:Hp,fog_vertex:Wp,fog_pars_vertex:qp,fog_fragment:Xp,fog_pars_fragment:jp,gradientmap_pars_fragment:Yp,lightmap_fragment:$p,lightmap_pars_fragment:Zp,lights_lambert_fragment:Kp,lights_lambert_pars_fragment:Jp,lights_pars_begin:Qp,lights_toon_fragment:tm,lights_toon_pars_fragment:nm,lights_phong_fragment:im,lights_phong_pars_fragment:rm,lights_physical_fragment:sm,lights_physical_pars_fragment:om,lights_fragment_begin:am,lights_fragment_maps:lm,lights_fragment_end:cm,logdepthbuf_fragment:um,logdepthbuf_pars_fragment:fm,logdepthbuf_pars_vertex:hm,logdepthbuf_vertex:dm,map_fragment:pm,map_pars_fragment:mm,map_particle_fragment:gm,map_particle_pars_fragment:_m,metalnessmap_fragment:xm,metalnessmap_pars_fragment:vm,morphcolor_vertex:Mm,morphnormal_vertex:ym,morphtarget_pars_vertex:bm,morphtarget_vertex:Sm,normal_fragment_begin:wm,normal_fragment_maps:Em,normal_pars_fragment:Tm,normal_pars_vertex:Am,normal_vertex:Cm,normalmap_pars_fragment:Lm,clearcoat_normal_fragment_begin:Pm,clearcoat_normal_fragment_maps:Dm,clearcoat_pars_fragment:Rm,iridescence_pars_fragment:Im,output_fragment:Fm,packing:Nm,premultiplied_alpha_fragment:Um,project_vertex:Om,dithering_fragment:zm,dithering_pars_fragment:Bm,roughnessmap_fragment:Gm,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:km,shadowmap_pars_vertex:Hm,shadowmap_vertex:Wm,shadowmask_pars_fragment:qm,skinbase_vertex:Xm,skinning_pars_vertex:jm,skinning_vertex:Ym,skinnormal_vertex:$m,specularmap_fragment:Zm,specularmap_pars_fragment:Km,tonemapping_fragment:Jm,tonemapping_pars_fragment:Qm,transmission_fragment:eg,transmission_pars_fragment:tg,uv_pars_fragment:ng,uv_pars_vertex:ig,uv_vertex:rg,uv2_pars_fragment:sg,uv2_pars_vertex:og,uv2_vertex:ag,worldpos_vertex:lg,background_vert:cg,background_frag:ug,backgroundCube_vert:fg,backgroundCube_frag:hg,cube_vert:dg,cube_frag:pg,depth_vert:mg,depth_frag:gg,distanceRGBA_vert:_g,distanceRGBA_frag:xg,equirect_vert:vg,equirect_frag:Mg,linedashed_vert:yg,linedashed_frag:bg,meshbasic_vert:Sg,meshbasic_frag:wg,meshlambert_vert:Eg,meshlambert_frag:Tg,meshmatcap_vert:Ag,meshmatcap_frag:Cg,meshnormal_vert:Lg,meshnormal_frag:Pg,meshphong_vert:Dg,meshphong_frag:Rg,meshphysical_vert:Ig,meshphysical_frag:Fg,meshtoon_vert:Ng,meshtoon_frag:Ug,points_vert:Og,points_frag:zg,shadow_vert:Bg,shadow_frag:Gg,sprite_vert:Vg,sprite_frag:kg},me={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Dt},uv2Transform:{value:new Dt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}}},en={basic:{uniforms:Mt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Mt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new je(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Mt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Mt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Mt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new je(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Mt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Mt([me.points,me.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Mt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Mt([me.common,me.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Mt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Mt([me.sprite,me.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Mt([me.common,me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Mt([me.lights,me.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};en.physical={uniforms:Mt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new qe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Br={r:0,b:0,g:0};function Hg(n,e,t,i,r,s,a){const o=new je(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function v(d,x){let T=!1,y=x.isScene===!0?x.background:null;y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y));const E=n.xr,S=E.getSession&&E.getSession();S&&S.environmentBlendMode==="additive"&&(y=null),y===null?p(o,l):y&&y.isColor&&(p(y,1),T=!0),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===cs)?(u===void 0&&(u=new pn(new pr(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Ii(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,N,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=y.encoding!==Ye,(f!==y||h!==y.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,m=n.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new pn(new Qo(2,2),new ri({name:"BackgroundMaterial",uniforms:Ii(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=y.encoding!==Ye,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,m=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function p(d,x){d.getRGB(Br,eu(n)),i.buffers.color.setClear(Br.r,Br.g,Br.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(d,x=1){o.set(d),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,p(o,l)},render:v}}function Wg(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=d(null);let c=l,u=!1;function f(F,ee,ie,te,G){let ue=!1;if(a){const oe=p(te,ie,ee);c!==oe&&(c=oe,m(c.object)),ue=x(F,te,ie,G),ue&&T(F,te,ie,G)}else{const oe=ee.wireframe===!0;(c.geometry!==te.id||c.program!==ie.id||c.wireframe!==oe)&&(c.geometry=te.id,c.program=ie.id,c.wireframe=oe,ue=!0)}G!==null&&t.update(G,34963),(ue||u)&&(u=!1,_(F,ee,ie,te),G!==null&&n.bindBuffer(34963,t.get(G).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(F){return i.isWebGL2?n.bindVertexArray(F):s.bindVertexArrayOES(F)}function v(F){return i.isWebGL2?n.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function p(F,ee,ie){const te=ie.wireframe===!0;let G=o[F.id];G===void 0&&(G={},o[F.id]=G);let ue=G[ee.id];ue===void 0&&(ue={},G[ee.id]=ue);let oe=ue[te];return oe===void 0&&(oe=d(h()),ue[te]=oe),oe}function d(F){const ee=[],ie=[],te=[];for(let G=0;G<r;G++)ee[G]=0,ie[G]=0,te[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:ie,attributeDivisors:te,object:F,attributes:{},index:null}}function x(F,ee,ie,te){const G=c.attributes,ue=ee.attributes;let oe=0;const k=ie.getAttributes();for(const H in k)if(k[H].location>=0){const pe=G[H];let _e=ue[H];if(_e===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(_e=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(_e=F.instanceColor)),pe===void 0||pe.attribute!==_e||_e&&pe.data!==_e.data)return!0;oe++}return c.attributesNum!==oe||c.index!==te}function T(F,ee,ie,te){const G={},ue=ee.attributes;let oe=0;const k=ie.getAttributes();for(const H in k)if(k[H].location>=0){let pe=ue[H];pe===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(pe=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(pe=F.instanceColor));const _e={};_e.attribute=pe,pe&&pe.data&&(_e.data=pe.data),G[H]=_e,oe++}c.attributes=G,c.attributesNum=oe,c.index=te}function y(){const F=c.newAttributes;for(let ee=0,ie=F.length;ee<ie;ee++)F[ee]=0}function E(F){S(F,0)}function S(F,ee){const ie=c.newAttributes,te=c.enabledAttributes,G=c.attributeDivisors;ie[F]=1,te[F]===0&&(n.enableVertexAttribArray(F),te[F]=1),G[F]!==ee&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,ee),G[F]=ee)}function P(){const F=c.newAttributes,ee=c.enabledAttributes;for(let ie=0,te=ee.length;ie<te;ie++)ee[ie]!==F[ie]&&(n.disableVertexAttribArray(ie),ee[ie]=0)}function N(F,ee,ie,te,G,ue){i.isWebGL2===!0&&(ie===5124||ie===5125)?n.vertexAttribIPointer(F,ee,ie,G,ue):n.vertexAttribPointer(F,ee,ie,te,G,ue)}function _(F,ee,ie,te){if(i.isWebGL2===!1&&(F.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const G=te.attributes,ue=ie.getAttributes(),oe=ee.defaultAttributeValues;for(const k in ue){const H=ue[k];if(H.location>=0){let ae=G[k];if(ae===void 0&&(k==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),k==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor)),ae!==void 0){const pe=ae.normalized,_e=ae.itemSize,W=t.get(ae);if(W===void 0)continue;const Ie=W.buffer,be=W.type,Te=W.bytesPerElement;if(ae.isInterleavedBufferAttribute){const Me=ae.data,Ve=Me.stride,w=ae.offset;if(Me.isInstancedInterleavedBuffer){for(let A=0;A<H.locationSize;A++)S(H.location+A,Me.meshPerAttribute);F.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let A=0;A<H.locationSize;A++)E(H.location+A);n.bindBuffer(34962,Ie);for(let A=0;A<H.locationSize;A++)N(H.location+A,_e/H.locationSize,be,pe,Ve*Te,(w+_e/H.locationSize*A)*Te)}else{if(ae.isInstancedBufferAttribute){for(let Me=0;Me<H.locationSize;Me++)S(H.location+Me,ae.meshPerAttribute);F.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Me=0;Me<H.locationSize;Me++)E(H.location+Me);n.bindBuffer(34962,Ie);for(let Me=0;Me<H.locationSize;Me++)N(H.location+Me,_e/H.locationSize,be,pe,_e*Te,_e/H.locationSize*Me*Te)}}else if(oe!==void 0){const pe=oe[k];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(H.location,pe);break;case 3:n.vertexAttrib3fv(H.location,pe);break;case 4:n.vertexAttrib4fv(H.location,pe);break;default:n.vertexAttrib1fv(H.location,pe)}}}}P()}function C(){de();for(const F in o){const ee=o[F];for(const ie in ee){const te=ee[ie];for(const G in te)v(te[G].object),delete te[G];delete ee[ie]}delete o[F]}}function R(F){if(o[F.id]===void 0)return;const ee=o[F.id];for(const ie in ee){const te=ee[ie];for(const G in te)v(te[G].object),delete te[G];delete ee[ie]}delete o[F.id]}function Y(F){for(const ee in o){const ie=o[ee];if(ie[F.id]===void 0)continue;const te=ie[F.id];for(const G in te)v(te[G].object),delete te[G];delete ie[F.id]}}function de(){U(),u=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:de,resetDefaultState:U,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:Y,initAttributes:y,enableAttribute:E,disableUnusedAttributes:P}}function qg(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function Xg(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(N){if(N==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),v=n.getParameter(34076),p=n.getParameter(34921),d=n.getParameter(36347),x=n.getParameter(36348),T=n.getParameter(36349),y=h>0,E=a||e.has("OES_texture_float"),S=y&&E,P=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:T,vertexTextures:y,floatFragmentTextures:E,floatVertexTextures:S,maxSamples:P}}function jg(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new kn,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const v=f.length!==0||h||i!==0||r;return r=h,t=u(f,m,0),i=f.length,v},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const v=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,x=n.get(f);if(!r||v===null||v.length===0||s&&!d)s?u(null):c();else{const T=s?0:i,y=T*4;let E=x.clippingState||null;l.value=E,E=u(v,h,y,m);for(let S=0;S!==y;++S)E[S]=t[S];x.clippingState=E,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,v){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,v!==!0||d===null){const x=m+p*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(d===null||d.length<x)&&(d=new Float32Array(x));for(let y=0,E=m;y!==p;++y,E+=4)a.copy(f[y]).applyMatrix4(T,o),a.normal.toArray(d,E),d[E+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function Yg(n){let e=new WeakMap;function t(a,o){return o===vo?a.mapping=Pi:o===Mo&&(a.mapping=Di),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===vo||o===Mo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ap(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class $g extends tu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yi=4,Ml=[.125,.215,.35,.446,.526,.582],jn=20,Js=new $g,yl=new je;let Qs=null;const Hn=(1+Math.sqrt(5))/2,xi=1/Hn,bl=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Hn,xi),new O(0,Hn,-xi),new O(xi,0,Hn),new O(-xi,0,Hn),new O(Hn,xi,0),new O(-Hn,xi,0)];class Sl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Qs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=El(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qs),e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qs=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:ar,format:qt,encoding:ni,depthBuffer:!1},r=wl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zg(s)),this._blurMaterial=Kg(s,e,t)}return r}_compileMaterial(e){const t=new pn(this._lodPlanes[0],e);this._renderer.compile(t,Js)}_sceneToCubeUV(e,t,i,r){const o=new Pt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(yl),u.toneMapping=gn,u.autoClear=!1;const m=new Kc({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),v=new pn(new pr,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(yl),p=!0);for(let x=0;x<6;x++){const T=x%3;T===0?(o.up.set(0,l[x],0),o.lookAt(c[x],0,0)):T===1?(o.up.set(0,0,l[x]),o.lookAt(0,c[x],0)):(o.up.set(0,l[x],0),o.lookAt(0,0,c[x]));const y=this._cubeSize;Gr(r,T*y,x>2?y:0,y,y),u.setRenderTarget(r),p&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Pi||e.mapping===Di;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=El());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new pn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Gr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Js)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bl[(r-1)%bl.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new pn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*jn-1),p=s/v,d=isFinite(s)?1+Math.floor(u*p):jn;d>jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${jn}`);const x=[];let T=0;for(let N=0;N<jn;++N){const _=N/p,C=Math.exp(-_*_/2);x.push(C),N===0?T+=C:N<d&&(T+=2*C)}for(let N=0;N<x.length;N++)x[N]=x[N]/T;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=x,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=v,h.mipInt.value=y-i;const E=this._sizeLods[r],S=3*E*(r>y-yi?r-y+yi:0),P=4*(this._cubeSize-E);Gr(t,S,P,3*E,2*E),l.setRenderTarget(t),l.render(f,Js)}}function Zg(n){const e=[],t=[],i=[];let r=n;const s=n-yi+1+Ml.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-yi?l=Ml[a-n+yi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,p=3,d=2,x=1,T=new Float32Array(p*v*m),y=new Float32Array(d*v*m),E=new Float32Array(x*v*m);for(let P=0;P<m;P++){const N=P%3*2/3-1,_=P>2?0:-1,C=[N,_,0,N+2/3,_,0,N+2/3,_+1,0,N,_,0,N+2/3,_+1,0,N,_+1,0];T.set(C,p*v*P),y.set(h,d*v*P);const R=[P,P,P,P,P,P];E.set(R,x*v*P)}const S=new Dn;S.setAttribute("position",new nn(T,p)),S.setAttribute("uv",new nn(y,d)),S.setAttribute("faceIndex",new nn(E,x)),e.push(S),r>yi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function wl(n,e,t){const i=new ii(n,e,t);return i.texture.mapping=cs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Kg(n,e,t){const i=new Float32Array(jn),r=new O(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function El(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Tl(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function ea(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===vo||l===Mo,u=l===Pi||l===Di;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Sl(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Sl(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Qg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function e_(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],34962);const m=f.morphAttributes;for(const v in m){const p=m[v];for(let d=0,x=p.length;d<x;d++)e.update(p[d],34962)}}function c(f){const h=[],m=f.index,v=f.attributes.position;let p=0;if(m!==null){const T=m.array;p=m.version;for(let y=0,E=T.length;y<E;y+=3){const S=T[y+0],P=T[y+1],N=T[y+2];h.push(S,P,P,N,N,S)}}else{const T=v.array;p=v.version;for(let y=0,E=T.length/3-1;y<E;y+=3){const S=y+0,P=y+1,N=y+2;h.push(S,P,P,N,N,S)}}const d=new(qc(h)?Qc:Jc)(h,1);d.version=p;const x=s.get(f);x&&e.remove(x),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function t_(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,o,h*l),t.update(m,s,1)}function f(h,m,v){if(v===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,h*l,v),t.update(m,s,v)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function n_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function i_(n,e){return n[0]-e[0]}function r_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function s_(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new Ke,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let x=s.get(u);if(x===void 0||x.count!==d){let ie=function(){F.dispose(),s.delete(u),u.removeEventListener("dispose",ie)};var v=ie;x!==void 0&&x.texture.dispose();const E=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,N=u.morphAttributes.position||[],_=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let R=0;E===!0&&(R=1),S===!0&&(R=2),P===!0&&(R=3);let Y=u.attributes.position.count*R,de=1;Y>e.maxTextureSize&&(de=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const U=new Float32Array(Y*de*4*d),F=new $c(U,Y,de,d);F.type=$n,F.needsUpdate=!0;const ee=R*4;for(let te=0;te<d;te++){const G=N[te],ue=_[te],oe=C[te],k=Y*de*4*te;for(let H=0;H<G.count;H++){const ae=H*ee;E===!0&&(a.fromBufferAttribute(G,H),U[k+ae+0]=a.x,U[k+ae+1]=a.y,U[k+ae+2]=a.z,U[k+ae+3]=0),S===!0&&(a.fromBufferAttribute(ue,H),U[k+ae+4]=a.x,U[k+ae+5]=a.y,U[k+ae+6]=a.z,U[k+ae+7]=0),P===!0&&(a.fromBufferAttribute(oe,H),U[k+ae+8]=a.x,U[k+ae+9]=a.y,U[k+ae+10]=a.z,U[k+ae+11]=oe.itemSize===4?a.w:1)}}x={count:d,texture:F,size:new qe(Y,de)},s.set(u,x),u.addEventListener("dispose",ie)}let T=0;for(let E=0;E<m.length;E++)T+=m[E];const y=u.morphTargetsRelative?1:1-T;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{const p=m===void 0?0:m.length;let d=i[u.id];if(d===void 0||d.length!==p){d=[];for(let S=0;S<p;S++)d[S]=[S,0];i[u.id]=d}for(let S=0;S<p;S++){const P=d[S];P[0]=S,P[1]=m[S]}d.sort(r_);for(let S=0;S<8;S++)S<p&&d[S][1]?(o[S][0]=d[S][0],o[S][1]=d[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(i_);const x=u.morphAttributes.position,T=u.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const P=o[S],N=P[0],_=P[1];N!==Number.MAX_SAFE_INTEGER&&_?(x&&u.getAttribute("morphTarget"+S)!==x[N]&&u.setAttribute("morphTarget"+S,x[N]),T&&u.getAttribute("morphNormal"+S)!==T[N]&&u.setAttribute("morphNormal"+S,T[N]),r[S]=_,y+=_):(x&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),T&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const E=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function o_(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const ru=new Rt,su=new $c,ou=new Wd,au=new nu,Al=[],Cl=[],Ll=new Float32Array(16),Pl=new Float32Array(9),Dl=new Float32Array(4);function zi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Al[r];if(s===void 0&&(s=new Float32Array(r),Al[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function st(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function us(n,e){let t=Cl[e];t===void 0&&(t=new Int32Array(e),Cl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function a_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function l_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;n.uniform2fv(this.addr,e),st(t,e)}}function c_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rt(t,e))return;n.uniform3fv(this.addr,e),st(t,e)}}function u_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;n.uniform4fv(this.addr,e),st(t,e)}}function f_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),st(t,e)}else{if(rt(t,i))return;Dl.set(i),n.uniformMatrix2fv(this.addr,!1,Dl),st(t,i)}}function h_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),st(t,e)}else{if(rt(t,i))return;Pl.set(i),n.uniformMatrix3fv(this.addr,!1,Pl),st(t,i)}}function d_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),st(t,e)}else{if(rt(t,i))return;Ll.set(i),n.uniformMatrix4fv(this.addr,!1,Ll),st(t,i)}}function p_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function m_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;n.uniform2iv(this.addr,e),st(t,e)}}function g_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;n.uniform3iv(this.addr,e),st(t,e)}}function __(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;n.uniform4iv(this.addr,e),st(t,e)}}function x_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function v_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;n.uniform2uiv(this.addr,e),st(t,e)}}function M_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;n.uniform3uiv(this.addr,e),st(t,e)}}function y_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;n.uniform4uiv(this.addr,e),st(t,e)}}function b_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||ru,r)}function S_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ou,r)}function w_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||au,r)}function E_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||su,r)}function T_(n){switch(n){case 5126:return a_;case 35664:return l_;case 35665:return c_;case 35666:return u_;case 35674:return f_;case 35675:return h_;case 35676:return d_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return __;case 5125:return x_;case 36294:return v_;case 36295:return M_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return S_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return E_}}function A_(n,e){n.uniform1fv(this.addr,e)}function C_(n,e){const t=zi(e,this.size,2);n.uniform2fv(this.addr,t)}function L_(n,e){const t=zi(e,this.size,3);n.uniform3fv(this.addr,t)}function P_(n,e){const t=zi(e,this.size,4);n.uniform4fv(this.addr,t)}function D_(n,e){const t=zi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function R_(n,e){const t=zi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function I_(n,e){const t=zi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function F_(n,e){n.uniform1iv(this.addr,e)}function N_(n,e){n.uniform2iv(this.addr,e)}function U_(n,e){n.uniform3iv(this.addr,e)}function O_(n,e){n.uniform4iv(this.addr,e)}function z_(n,e){n.uniform1uiv(this.addr,e)}function B_(n,e){n.uniform2uiv(this.addr,e)}function G_(n,e){n.uniform3uiv(this.addr,e)}function V_(n,e){n.uniform4uiv(this.addr,e)}function k_(n,e,t){const i=this.cache,r=e.length,s=us(t,r);rt(i,s)||(n.uniform1iv(this.addr,s),st(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ru,s[a])}function H_(n,e,t){const i=this.cache,r=e.length,s=us(t,r);rt(i,s)||(n.uniform1iv(this.addr,s),st(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ou,s[a])}function W_(n,e,t){const i=this.cache,r=e.length,s=us(t,r);rt(i,s)||(n.uniform1iv(this.addr,s),st(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||au,s[a])}function q_(n,e,t){const i=this.cache,r=e.length,s=us(t,r);rt(i,s)||(n.uniform1iv(this.addr,s),st(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||su,s[a])}function X_(n){switch(n){case 5126:return A_;case 35664:return C_;case 35665:return L_;case 35666:return P_;case 35674:return D_;case 35675:return R_;case 35676:return I_;case 5124:case 35670:return F_;case 35667:case 35671:return N_;case 35668:case 35672:return U_;case 35669:case 35673:return O_;case 5125:return z_;case 36294:return B_;case 36295:return G_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return q_}}class j_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=T_(t.type)}}class Y_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=X_(t.type)}}class $_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const eo=/(\w+)(\])?(\[|\.)?/g;function Rl(n,e){n.seq.push(e),n.map[e.id]=e}function Z_(n,e,t){const i=n.name,r=i.length;for(eo.lastIndex=0;;){const s=eo.exec(i),a=eo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Rl(t,c===void 0?new j_(o,n,e):new Y_(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new $_(o),Rl(t,f)),t=f}}}class jr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Z_(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Il(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let K_=0;function J_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Q_(n){switch(n){case ni:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Fl(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+J_(n.getShaderSource(e),a)}else return r}function ex(n,e){const t=Q_(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function tx(n,e){let t;switch(e){case _d:t="Linear";break;case xd:t="Reinhard";break;case vd:t="OptimizedCineon";break;case Md:t="ACESFilmic";break;case yd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nx(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zi).join(`
`)}function ix(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rx(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Zi(n){return n!==""}function Nl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ul(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(n){return n.replace(sx,ox)}function ox(n,e){const t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Eo(t)}const ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ol(n){return n.replace(ax,lx)}function lx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zl(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$h?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function ux(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Pi:case Di:e="ENVMAP_TYPE_CUBE";break;case cs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Di:e="ENVMAP_MODE_REFRACTION";break}return e}function hx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zo:e="ENVMAP_BLENDING_MULTIPLY";break;case md:e="ENVMAP_BLENDING_MIX";break;case gd:e="ENVMAP_BLENDING_ADD";break}return e}function dx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function px(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=cx(t),c=ux(t),u=fx(t),f=hx(t),h=dx(t),m=t.isWebGL2?"":nx(t),v=ix(s),p=r.createProgram();let d,x,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[v].filter(Zi).join(`
`),d.length>0&&(d+=`
`),x=[m,v].filter(Zi).join(`
`),x.length>0&&(x+=`
`)):(d=[zl(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),x=[m,zl(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?De.tonemapping_pars_fragment:"",t.toneMapping!==gn?tx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,ex("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),a=Eo(a),a=Nl(a,t),a=Ul(a,t),o=Eo(o),o=Nl(o,t),o=Ul(o,t),a=Ol(a),o=Ol(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["#define varying in",t.glslVersion===al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=T+d+a,E=T+x+o,S=Il(r,35633,y),P=Il(r,35632,E);if(r.attachShader(p,S),r.attachShader(p,P),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(p).trim(),R=r.getShaderInfoLog(S).trim(),Y=r.getShaderInfoLog(P).trim();let de=!0,U=!0;if(r.getProgramParameter(p,35714)===!1){de=!1;const F=Fl(r,S,"vertex"),ee=Fl(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+F+`
`+ee)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(R===""||Y==="")&&(U=!1);U&&(this.diagnostics={runnable:de,programLog:C,vertexShader:{log:R,prefix:d},fragmentShader:{log:Y,prefix:x}})}r.deleteShader(S),r.deleteShader(P);let N;this.getUniforms=function(){return N===void 0&&(N=new jr(r,p)),N};let _;return this.getAttributes=function(){return _===void 0&&(_=rx(r,p)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=K_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=P,this}let mx=0;class gx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _x(e),t.set(e,i)),i}}class _x{constructor(e){this.id=mx++,this.code=e,this.usedTimes=0}}function xx(n,e,t,i,r,s,a){const o=new Zc,l=new gx,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_,C,R,Y,de){const U=Y.fog,F=de.geometry,ee=_.isMeshStandardMaterial?Y.environment:null,ie=(_.isMeshStandardMaterial?t:e).get(_.envMap||ee),te=ie&&ie.mapping===cs?ie.image.height:null,G=v[_.type];_.precision!==null&&(m=r.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const ue=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,oe=ue!==void 0?ue.length:0;let k=0;F.morphAttributes.position!==void 0&&(k=1),F.morphAttributes.normal!==void 0&&(k=2),F.morphAttributes.color!==void 0&&(k=3);let H,ae,pe,_e;if(G){const Ve=en[G];H=Ve.vertexShader,ae=Ve.fragmentShader}else H=_.vertexShader,ae=_.fragmentShader,l.update(_),pe=l.getVertexShaderID(_),_e=l.getFragmentShaderID(_);const W=n.getRenderTarget(),Ie=_.alphaTest>0,be=_.clearcoat>0,Te=_.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:_.type,vertexShader:H,fragmentShader:ae,defines:_.defines,customVertexShaderID:pe,customFragmentShaderID:_e,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:de.isInstancedMesh===!0,instancingColor:de.isInstancedMesh===!0&&de.instanceColor!==null,supportsVertexTextures:h,outputEncoding:W===null?n.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:ni,map:!!_.map,matcap:!!_.matcap,envMap:!!ie,envMapMode:ie&&ie.mapping,envMapCubeUVHeight:te,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Gd,tangentSpaceNormalMap:_.normalMapType===Wc,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===Ye,clearcoat:be,clearcoatMap:be&&!!_.clearcoatMap,clearcoatRoughnessMap:be&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:be&&!!_.clearcoatNormalMap,iridescence:Te,iridescenceMap:Te&&!!_.iridescenceMap,iridescenceThicknessMap:Te&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===Ei,alphaMap:!!_.alphaMap,alphaTest:Ie,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!F.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!U,useFog:_.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:f,skinning:de.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:k,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:_.toneMapped?n.toneMapping:gn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===$o,flipSided:_.side===Bt,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function d(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)C.push(R),C.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(x(C,_),T(C,_),C.push(n.outputEncoding)),C.push(_.customProgramCacheKey),C.join()}function x(_,C){_.push(C.precision),_.push(C.outputEncoding),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.combine),_.push(C.vertexUvs),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function T(_,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.map&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.lightMap&&o.enable(7),C.aoMap&&o.enable(8),C.emissiveMap&&o.enable(9),C.bumpMap&&o.enable(10),C.normalMap&&o.enable(11),C.objectSpaceNormalMap&&o.enable(12),C.tangentSpaceNormalMap&&o.enable(13),C.clearcoat&&o.enable(14),C.clearcoatMap&&o.enable(15),C.clearcoatRoughnessMap&&o.enable(16),C.clearcoatNormalMap&&o.enable(17),C.iridescence&&o.enable(18),C.iridescenceMap&&o.enable(19),C.iridescenceThicknessMap&&o.enable(20),C.displacementMap&&o.enable(21),C.specularMap&&o.enable(22),C.roughnessMap&&o.enable(23),C.metalnessMap&&o.enable(24),C.gradientMap&&o.enable(25),C.alphaMap&&o.enable(26),C.alphaTest&&o.enable(27),C.vertexColors&&o.enable(28),C.vertexAlphas&&o.enable(29),C.vertexUvs&&o.enable(30),C.vertexTangents&&o.enable(31),C.uvsVertexOnly&&o.enable(32),_.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.physicallyCorrectLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.specularIntensityMap&&o.enable(15),C.specularColorMap&&o.enable(16),C.transmission&&o.enable(17),C.transmissionMap&&o.enable(18),C.thicknessMap&&o.enable(19),C.sheen&&o.enable(20),C.sheenColorMap&&o.enable(21),C.sheenRoughnessMap&&o.enable(22),C.decodeVideoTexture&&o.enable(23),C.opaque&&o.enable(24),_.push(o.mask)}function y(_){const C=v[_.type];let R;if(C){const Y=en[C];R=ip.clone(Y.uniforms)}else R=_.uniforms;return R}function E(_,C){let R;for(let Y=0,de=c.length;Y<de;Y++){const U=c[Y];if(U.cacheKey===C){R=U,++R.usedTimes;break}}return R===void 0&&(R=new px(n,C,_,s),c.push(R)),R}function S(_){if(--_.usedTimes===0){const C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),_.destroy()}}function P(_){l.remove(_)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:E,releaseProgram:S,releaseShaderCache:P,programs:c,dispose:N}}function vx(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Mx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Bl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,v,p,d){let x=n[e];return x===void 0?(x={id:f.id,object:f,geometry:h,material:m,groupOrder:v,renderOrder:f.renderOrder,z:p,group:d},n[e]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=m,x.groupOrder=v,x.renderOrder=f.renderOrder,x.z=p,x.group=d),e++,x}function o(f,h,m,v,p,d){const x=a(f,h,m,v,p,d);m.transmission>0?i.push(x):m.transparent===!0?r.push(x):t.push(x)}function l(f,h,m,v,p,d){const x=a(f,h,m,v,p,d);m.transmission>0?i.unshift(x):m.transparent===!0?r.unshift(x):t.unshift(x)}function c(f,h){t.length>1&&t.sort(f||Mx),i.length>1&&i.sort(h||Bl),r.length>1&&r.sort(h||Bl)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function yx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Gl,n.set(i,[a])):r>=s.length?(a=new Gl,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function bx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new je};break;case"SpotLight":t={position:new O,direction:new O,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function Sx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let wx=0;function Ex(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Tx(n,e){const t=new bx,i=Sx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new O);const s=new O,a=new tt,o=new tt;function l(u,f){let h=0,m=0,v=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let p=0,d=0,x=0,T=0,y=0,E=0,S=0,P=0,N=0,_=0;u.sort(Ex);const C=f!==!0?Math.PI:1;for(let Y=0,de=u.length;Y<de;Y++){const U=u[Y],F=U.color,ee=U.intensity,ie=U.distance,te=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=F.r*ee*C,m+=F.g*ee*C,v+=F.b*ee*C;else if(U.isLightProbe)for(let G=0;G<9;G++)r.probe[G].addScaledVector(U.sh.coefficients[G],ee);else if(U.isDirectionalLight){const G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity*C),U.castShadow){const ue=U.shadow,oe=i.get(U);oe.shadowBias=ue.bias,oe.shadowNormalBias=ue.normalBias,oe.shadowRadius=ue.radius,oe.shadowMapSize=ue.mapSize,r.directionalShadow[p]=oe,r.directionalShadowMap[p]=te,r.directionalShadowMatrix[p]=U.shadow.matrix,E++}r.directional[p]=G,p++}else if(U.isSpotLight){const G=t.get(U);G.position.setFromMatrixPosition(U.matrixWorld),G.color.copy(F).multiplyScalar(ee*C),G.distance=ie,G.coneCos=Math.cos(U.angle),G.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),G.decay=U.decay,r.spot[x]=G;const ue=U.shadow;if(U.map&&(r.spotLightMap[N]=U.map,N++,ue.updateMatrices(U),U.castShadow&&_++),r.spotLightMatrix[x]=ue.matrix,U.castShadow){const oe=i.get(U);oe.shadowBias=ue.bias,oe.shadowNormalBias=ue.normalBias,oe.shadowRadius=ue.radius,oe.shadowMapSize=ue.mapSize,r.spotShadow[x]=oe,r.spotShadowMap[x]=te,P++}x++}else if(U.isRectAreaLight){const G=t.get(U);G.color.copy(F).multiplyScalar(ee),G.halfWidth.set(U.width*.5,0,0),G.halfHeight.set(0,U.height*.5,0),r.rectArea[T]=G,T++}else if(U.isPointLight){const G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity*C),G.distance=U.distance,G.decay=U.decay,U.castShadow){const ue=U.shadow,oe=i.get(U);oe.shadowBias=ue.bias,oe.shadowNormalBias=ue.normalBias,oe.shadowRadius=ue.radius,oe.shadowMapSize=ue.mapSize,oe.shadowCameraNear=ue.camera.near,oe.shadowCameraFar=ue.camera.far,r.pointShadow[d]=oe,r.pointShadowMap[d]=te,r.pointShadowMatrix[d]=U.shadow.matrix,S++}r.point[d]=G,d++}else if(U.isHemisphereLight){const G=t.get(U);G.skyColor.copy(U.color).multiplyScalar(ee*C),G.groundColor.copy(U.groundColor).multiplyScalar(ee*C),r.hemi[y]=G,y++}}T>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=v;const R=r.hash;(R.directionalLength!==p||R.pointLength!==d||R.spotLength!==x||R.rectAreaLength!==T||R.hemiLength!==y||R.numDirectionalShadows!==E||R.numPointShadows!==S||R.numSpotShadows!==P||R.numSpotMaps!==N)&&(r.directional.length=p,r.spot.length=x,r.rectArea.length=T,r.point.length=d,r.hemi.length=y,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=P+N-_,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=_,R.directionalLength=p,R.pointLength=d,R.spotLength=x,R.rectAreaLength=T,R.hemiLength=y,R.numDirectionalShadows=E,R.numPointShadows=S,R.numSpotShadows=P,R.numSpotMaps=N,r.version=wx++)}function c(u,f){let h=0,m=0,v=0,p=0,d=0;const x=f.matrixWorldInverse;for(let T=0,y=u.length;T<y;T++){const E=u[T];if(E.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),h++}else if(E.isSpotLight){const S=r.spot[v];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),v++}else if(E.isRectAreaLight){const S=r.rectArea[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(x),o.identity(),a.copy(E.matrixWorld),a.premultiply(x),o.extractRotation(a),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),p++}else if(E.isPointLight){const S=r.point[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(x),m++}else if(E.isHemisphereLight){const S=r.hemi[d];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(x),d++}}}return{setup:l,setupView:c,state:r}}function Vl(n,e){const t=new Tx(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ax(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Vl(n,e),t.set(s,[l])):a>=o.length?(l=new Vl(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Cx extends dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lx extends dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Rx(n,e,t){let i=new Jo;const r=new qe,s=new qe,a=new Ke,o=new Cx({depthPacking:Bd}),l=new Lx,c={},u=t.maxTextureSize,f={0:Bt,1:ei,2:$o},h=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:Px,fragmentShader:Dx}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new Dn;v.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new pn(v,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc,this.render=function(E,S,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;const N=n.getRenderTarget(),_=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),R=n.state;R.setBlending(Cn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let Y=0,de=E.length;Y<de;Y++){const U=E[Y],F=U.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const ee=F.getFrameExtents();if(r.multiply(ee),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,F.mapSize.y=s.y)),F.map===null){const te=this.type!==$i?{minFilter:yt,magFilter:yt}:{};F.map=new ii(r.x,r.y,te),F.map.texture.name=U.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const ie=F.getViewportCount();for(let te=0;te<ie;te++){const G=F.getViewport(te);a.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),R.viewport(a),F.updateMatrices(U,te),i=F.getFrustum(),y(S,P,F.camera,U,this.type)}F.isPointLightShadow!==!0&&this.type===$i&&x(F,P),F.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(N,_,C)};function x(E,S){const P=e.update(p);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ii(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(S,null,P,h,p,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(S,null,P,m,p,null)}function T(E,S,P,N,_,C){let R=null;const Y=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(Y!==void 0)R=Y;else if(R=P.isPointLight===!0?l:o,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const de=R.uuid,U=S.uuid;let F=c[de];F===void 0&&(F={},c[de]=F);let ee=F[U];ee===void 0&&(ee=R.clone(),F[U]=ee),R=ee}return R.visible=S.visible,R.wireframe=S.wireframe,C===$i?R.side=S.shadowSide!==null?S.shadowSide:S.side:R.side=S.shadowSide!==null?S.shadowSide:f[S.side],R.alphaMap=S.alphaMap,R.alphaTest=S.alphaTest,R.map=S.map,R.clipShadows=S.clipShadows,R.clippingPlanes=S.clippingPlanes,R.clipIntersection=S.clipIntersection,R.displacementMap=S.displacementMap,R.displacementScale=S.displacementScale,R.displacementBias=S.displacementBias,R.wireframeLinewidth=S.wireframeLinewidth,R.linewidth=S.linewidth,P.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(P.matrixWorld),R.nearDistance=N,R.farDistance=_),R}function y(E,S,P,N,_){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===$i)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const Y=e.update(E),de=E.material;if(Array.isArray(de)){const U=Y.groups;for(let F=0,ee=U.length;F<ee;F++){const ie=U[F],te=de[ie.materialIndex];if(te&&te.visible){const G=T(E,te,N,P.near,P.far,_);n.renderBufferDirect(P,null,Y,G,E,ie)}}}else if(de.visible){const U=T(E,de,N,P.near,P.far,_);n.renderBufferDirect(P,null,Y,U,E,null)}}const R=E.children;for(let Y=0,de=R.length;Y<de;Y++)y(R[Y],S,P,N,_)}}function Ix(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const X=new Ke;let ce=null;const ve=new Ke(0,0,0,0);return{setMask:function(we){ce!==we&&!L&&(n.colorMask(we,we,we,we),ce=we)},setLocked:function(we){L=we},setClear:function(we,We,at,ht,Rn){Rn===!0&&(we*=ht,We*=ht,at*=ht),X.set(we,We,at,ht),ve.equals(X)===!1&&(n.clearColor(we,We,at,ht),ve.copy(X))},reset:function(){L=!1,ce=null,ve.set(-1,0,0,0)}}}function s(){let L=!1,X=null,ce=null,ve=null;return{setTest:function(we){we?Ie(2929):be(2929)},setMask:function(we){X!==we&&!L&&(n.depthMask(we),X=we)},setFunc:function(we){if(ce!==we){switch(we){case ld:n.depthFunc(512);break;case cd:n.depthFunc(519);break;case ud:n.depthFunc(513);break;case xo:n.depthFunc(515);break;case fd:n.depthFunc(514);break;case hd:n.depthFunc(518);break;case dd:n.depthFunc(516);break;case pd:n.depthFunc(517);break;default:n.depthFunc(515)}ce=we}},setLocked:function(we){L=we},setClear:function(we){ve!==we&&(n.clearDepth(we),ve=we)},reset:function(){L=!1,X=null,ce=null,ve=null}}}function a(){let L=!1,X=null,ce=null,ve=null,we=null,We=null,at=null,ht=null,Rn=null;return{setTest:function($e){L||($e?Ie(2960):be(2960))},setMask:function($e){X!==$e&&!L&&(n.stencilMask($e),X=$e)},setFunc:function($e,sn,Ft){(ce!==$e||ve!==sn||we!==Ft)&&(n.stencilFunc($e,sn,Ft),ce=$e,ve=sn,we=Ft)},setOp:function($e,sn,Ft){(We!==$e||at!==sn||ht!==Ft)&&(n.stencilOp($e,sn,Ft),We=$e,at=sn,ht=Ft)},setLocked:function($e){L=$e},setClear:function($e){Rn!==$e&&(n.clearStencil($e),Rn=$e)},reset:function(){L=!1,X=null,ce=null,ve=null,we=null,We=null,at=null,ht=null,Rn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},v=new WeakMap,p=[],d=null,x=!1,T=null,y=null,E=null,S=null,P=null,N=null,_=null,C=!1,R=null,Y=null,de=null,U=null,F=null;const ee=n.getParameter(35661);let ie=!1,te=0;const G=n.getParameter(7938);G.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(G)[1]),ie=te>=1):G.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),ie=te>=2);let ue=null,oe={};const k=n.getParameter(3088),H=n.getParameter(2978),ae=new Ke().fromArray(k),pe=new Ke().fromArray(H);function _e(L,X,ce){const ve=new Uint8Array(4),we=n.createTexture();n.bindTexture(L,we),n.texParameteri(L,10241,9728),n.texParameteri(L,10240,9728);for(let We=0;We<ce;We++)n.texImage2D(X+We,0,6408,1,1,0,6408,5121,ve);return we}const W={};W[3553]=_e(3553,3553,1),W[34067]=_e(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(2929),l.setFunc(xo),$(!1),re(Ra),Ie(2884),B(Cn);function Ie(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function be(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Te(L,X){return m[L]!==X?(n.bindFramebuffer(L,X),m[L]=X,i&&(L===36009&&(m[36160]=X),L===36160&&(m[36009]=X)),!0):!1}function Me(L,X){let ce=p,ve=!1;if(L)if(ce=v.get(X),ce===void 0&&(ce=[],v.set(X,ce)),L.isWebGLMultipleRenderTargets){const we=L.texture;if(ce.length!==we.length||ce[0]!==36064){for(let We=0,at=we.length;We<at;We++)ce[We]=36064+We;ce.length=we.length,ve=!0}}else ce[0]!==36064&&(ce[0]=36064,ve=!0);else ce[0]!==1029&&(ce[0]=1029,ve=!0);ve&&(t.isWebGL2?n.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function Ve(L){return d!==L?(n.useProgram(L),d=L,!0):!1}const w={[vi]:32774,[Kh]:32778,[Jh]:32779};if(i)w[Ua]=32775,w[Oa]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(w[Ua]=L.MIN_EXT,w[Oa]=L.MAX_EXT)}const A={[Qh]:0,[ed]:1,[td]:768,[Gc]:770,[ad]:776,[sd]:774,[id]:772,[nd]:769,[Vc]:771,[od]:775,[rd]:773};function B(L,X,ce,ve,we,We,at,ht){if(L===Cn){x===!0&&(be(3042),x=!1);return}if(x===!1&&(Ie(3042),x=!0),L!==Zh){if(L!==T||ht!==C){if((y!==vi||P!==vi)&&(n.blendEquation(32774),y=vi,P=vi),ht)switch(L){case Ei:n.blendFuncSeparate(1,771,1,771);break;case Ia:n.blendFunc(1,1);break;case Fa:n.blendFuncSeparate(0,769,0,1);break;case Na:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ei:n.blendFuncSeparate(770,771,1,771);break;case Ia:n.blendFunc(770,1);break;case Fa:n.blendFuncSeparate(0,769,0,1);break;case Na:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,S=null,N=null,_=null,T=L,C=ht}return}we=we||X,We=We||ce,at=at||ve,(X!==y||we!==P)&&(n.blendEquationSeparate(w[X],w[we]),y=X,P=we),(ce!==E||ve!==S||We!==N||at!==_)&&(n.blendFuncSeparate(A[ce],A[ve],A[We],A[at]),E=ce,S=ve,N=We,_=at),T=L,C=!1}function Z(L,X){L.side===$o?be(2884):Ie(2884);let ce=L.side===Bt;X&&(ce=!ce),$(ce),L.blending===Ei&&L.transparent===!1?B(Cn):B(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const ve=L.stencilWrite;c.setTest(ve),ve&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Q(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ie(32926):be(32926)}function $(L){R!==L&&(L?n.frontFace(2304):n.frontFace(2305),R=L)}function re(L){L!==jh?(Ie(2884),L!==Y&&(L===Ra?n.cullFace(1029):L===Yh?n.cullFace(1028):n.cullFace(1032))):be(2884),Y=L}function le(L){L!==de&&(ie&&n.lineWidth(L),de=L)}function Q(L,X,ce){L?(Ie(32823),(U!==X||F!==ce)&&(n.polygonOffset(X,ce),U=X,F=ce)):be(32823)}function he(L){L?Ie(3089):be(3089)}function ne(L){L===void 0&&(L=33984+ee-1),ue!==L&&(n.activeTexture(L),ue=L)}function M(L,X,ce){ce===void 0&&(ue===null?ce=33984+ee-1:ce=ue);let ve=oe[ce];ve===void 0&&(ve={type:void 0,texture:void 0},oe[ce]=ve),(ve.type!==L||ve.texture!==X)&&(ue!==ce&&(n.activeTexture(ce),ue=ce),n.bindTexture(L,X||W[L]),ve.type=L,ve.texture=X)}function g(){const L=oe[ue];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function D(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(L){ae.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ae.copy(L))}function xe(L){pe.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),pe.copy(L))}function Le(L,X){let ce=f.get(X);ce===void 0&&(ce=new WeakMap,f.set(X,ce));let ve=ce.get(L);ve===void 0&&(ve=n.getUniformBlockIndex(X,L.name),ce.set(L,ve))}function Xe(L,X){const ve=f.get(X).get(L);u.get(X)!==ve&&(n.uniformBlockBinding(X,ve,L.__bindingPointIndex),u.set(X,ve))}function ot(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ue=null,oe={},m={},v=new WeakMap,p=[],d=null,x=!1,T=null,y=null,E=null,S=null,P=null,N=null,_=null,C=!1,R=null,Y=null,de=null,U=null,F=null,ae.set(0,0,n.canvas.width,n.canvas.height),pe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ie,disable:be,bindFramebuffer:Te,drawBuffers:Me,useProgram:Ve,setBlending:B,setMaterial:Z,setFlipSided:$,setCullFace:re,setLineWidth:le,setPolygonOffset:Q,setScissorTest:he,activeTexture:ne,bindTexture:M,unbindTexture:g,compressedTexImage2D:D,compressedTexImage3D:V,texImage2D:Ce,texImage3D:ye,updateUBOMapping:Le,uniformBlockBinding:Xe,texStorage2D:q,texStorage3D:Se,texSubImage2D:K,texSubImage3D:se,compressedTexSubImage2D:ge,compressedTexSubImage3D:fe,scissor:Ee,viewport:xe,reset:ot}}function Fx(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let p;const d=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(M,g){return x?new OffscreenCanvas(M,g):Jr("canvas")}function y(M,g,D,V){let K=1;if((M.width>V||M.height>V)&&(K=V/Math.max(M.width,M.height)),K<1||g===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const se=g?wo:Math.floor,ge=se(K*M.width),fe=se(K*M.height);p===void 0&&(p=T(ge,fe));const q=D?T(ge,fe):p;return q.width=ge,q.height=fe,q.getContext("2d").drawImage(M,0,0,ge,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ge+"x"+fe+")."),q}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function E(M){return cl(M.width)&&cl(M.height)}function S(M){return o?!1:M.wrapS!==Wt||M.wrapT!==Wt||M.minFilter!==yt&&M.minFilter!==Ot}function P(M,g){return M.generateMipmaps&&g&&M.minFilter!==yt&&M.minFilter!==Ot}function N(M){n.generateMipmap(M)}function _(M,g,D,V,K=!1){if(o===!1)return g;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let se=g;return g===6403&&(D===5126&&(se=33326),D===5131&&(se=33325),D===5121&&(se=33321)),g===33319&&(D===5126&&(se=33328),D===5131&&(se=33327),D===5121&&(se=33323)),g===6408&&(D===5126&&(se=34836),D===5131&&(se=34842),D===5121&&(se=V===Ye&&K===!1?35907:32856),D===32819&&(se=32854),D===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function C(M,g,D){return P(M,D)===!0||M.isFramebufferTexture&&M.minFilter!==yt&&M.minFilter!==Ot?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function R(M){return M===yt||M===za||M===ws?9728:9729}function Y(M){const g=M.target;g.removeEventListener("dispose",Y),U(g),g.isVideoTexture&&v.delete(g)}function de(M){const g=M.target;g.removeEventListener("dispose",de),ee(g)}function U(M){const g=i.get(M);if(g.__webglInit===void 0)return;const D=M.source,V=d.get(D);if(V){const K=V[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&F(M),Object.keys(V).length===0&&d.delete(D)}i.remove(M)}function F(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const D=M.source,V=d.get(D);delete V[g.__cacheKey],a.memory.textures--}function ee(M){const g=M.texture,D=i.get(M),V=i.get(g);if(V.__webglTexture!==void 0&&(n.deleteTexture(V.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)n.deleteFramebuffer(D.__webglFramebuffer[K]),D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[K]);else{if(n.deleteFramebuffer(D.__webglFramebuffer),D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let K=0;K<D.__webglColorRenderbuffer.length;K++)D.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[K]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let K=0,se=g.length;K<se;K++){const ge=i.get(g[K]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),a.memory.textures--),i.remove(g[K])}i.remove(g),i.remove(M)}let ie=0;function te(){ie=0}function G(){const M=ie;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),ie+=1,M}function ue(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.encoding),g.join()}function oe(M,g){const D=i.get(M);if(M.isVideoTexture&&he(M),M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){const V=M.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(D,M,g);return}}t.bindTexture(3553,D.__webglTexture,33984+g)}function k(M,g){const D=i.get(M);if(M.version>0&&D.__version!==M.version){be(D,M,g);return}t.bindTexture(35866,D.__webglTexture,33984+g)}function H(M,g){const D=i.get(M);if(M.version>0&&D.__version!==M.version){be(D,M,g);return}t.bindTexture(32879,D.__webglTexture,33984+g)}function ae(M,g){const D=i.get(M);if(M.version>0&&D.__version!==M.version){Te(D,M,g);return}t.bindTexture(34067,D.__webglTexture,33984+g)}const pe={[yo]:10497,[Wt]:33071,[bo]:33648},_e={[yt]:9728,[za]:9984,[ws]:9986,[Ot]:9729,[bd]:9985,[or]:9987};function W(M,g,D){if(D?(n.texParameteri(M,10242,pe[g.wrapS]),n.texParameteri(M,10243,pe[g.wrapT]),(M===32879||M===35866)&&n.texParameteri(M,32882,pe[g.wrapR]),n.texParameteri(M,10240,_e[g.magFilter]),n.texParameteri(M,10241,_e[g.minFilter])):(n.texParameteri(M,10242,33071),n.texParameteri(M,10243,33071),(M===32879||M===35866)&&n.texParameteri(M,32882,33071),(g.wrapS!==Wt||g.wrapT!==Wt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,10240,R(g.magFilter)),n.texParameteri(M,10241,R(g.minFilter)),g.minFilter!==yt&&g.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===yt||g.minFilter!==ws&&g.minFilter!==or||g.type===$n&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===ar&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(M,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function Ie(M,g){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",Y));const V=g.source;let K=d.get(V);K===void 0&&(K={},d.set(V,K));const se=ue(g);if(se!==M.__cacheKey){K[se]===void 0&&(K[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),K[se].usedTimes++;const ge=K[M.__cacheKey];ge!==void 0&&(K[M.__cacheKey].usedTimes--,ge.usedTimes===0&&F(g)),M.__cacheKey=se,M.__webglTexture=K[se].texture}return D}function be(M,g,D){let V=3553;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=35866),g.isData3DTexture&&(V=32879);const K=Ie(M,g),se=g.source;t.bindTexture(V,M.__webglTexture,33984+D);const ge=i.get(se);if(se.version!==ge.__version||K===!0){t.activeTexture(33984+D),n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const fe=S(g)&&E(g.image)===!1;let q=y(g.image,fe,!1,u);q=ne(g,q);const Se=E(q)||o,Ce=s.convert(g.format,g.encoding);let ye=s.convert(g.type),Ee=_(g.internalFormat,Ce,ye,g.encoding,g.isVideoTexture);W(V,g,Se);let xe;const Le=g.mipmaps,Xe=o&&g.isVideoTexture!==!0,ot=ge.__version===void 0||K===!0,L=C(g,q,Se);if(g.isDepthTexture)Ee=6402,o?g.type===$n?Ee=36012:g.type===Yn?Ee=33190:g.type===Ti?Ee=35056:Ee=33189:g.type===$n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Jn&&Ee===6402&&g.type!==Hc&&g.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Yn,ye=s.convert(g.type)),g.format===Ri&&Ee===6402&&(Ee=34041,g.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Ti,ye=s.convert(g.type))),ot&&(Xe?t.texStorage2D(3553,1,Ee,q.width,q.height):t.texImage2D(3553,0,Ee,q.width,q.height,0,Ce,ye,null));else if(g.isDataTexture)if(Le.length>0&&Se){Xe&&ot&&t.texStorage2D(3553,L,Ee,Le[0].width,Le[0].height);for(let X=0,ce=Le.length;X<ce;X++)xe=Le[X],Xe?t.texSubImage2D(3553,X,0,0,xe.width,xe.height,Ce,ye,xe.data):t.texImage2D(3553,X,Ee,xe.width,xe.height,0,Ce,ye,xe.data);g.generateMipmaps=!1}else Xe?(ot&&t.texStorage2D(3553,L,Ee,q.width,q.height),t.texSubImage2D(3553,0,0,0,q.width,q.height,Ce,ye,q.data)):t.texImage2D(3553,0,Ee,q.width,q.height,0,Ce,ye,q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Xe&&ot&&t.texStorage3D(35866,L,Ee,Le[0].width,Le[0].height,q.depth);for(let X=0,ce=Le.length;X<ce;X++)xe=Le[X],g.format!==qt?Ce!==null?Xe?t.compressedTexSubImage3D(35866,X,0,0,0,xe.width,xe.height,q.depth,Ce,xe.data,0,0):t.compressedTexImage3D(35866,X,Ee,xe.width,xe.height,q.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage3D(35866,X,0,0,0,xe.width,xe.height,q.depth,Ce,ye,xe.data):t.texImage3D(35866,X,Ee,xe.width,xe.height,q.depth,0,Ce,ye,xe.data)}else{Xe&&ot&&t.texStorage2D(3553,L,Ee,Le[0].width,Le[0].height);for(let X=0,ce=Le.length;X<ce;X++)xe=Le[X],g.format!==qt?Ce!==null?Xe?t.compressedTexSubImage2D(3553,X,0,0,xe.width,xe.height,Ce,xe.data):t.compressedTexImage2D(3553,X,Ee,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(3553,X,0,0,xe.width,xe.height,Ce,ye,xe.data):t.texImage2D(3553,X,Ee,xe.width,xe.height,0,Ce,ye,xe.data)}else if(g.isDataArrayTexture)Xe?(ot&&t.texStorage3D(35866,L,Ee,q.width,q.height,q.depth),t.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,Ce,ye,q.data)):t.texImage3D(35866,0,Ee,q.width,q.height,q.depth,0,Ce,ye,q.data);else if(g.isData3DTexture)Xe?(ot&&t.texStorage3D(32879,L,Ee,q.width,q.height,q.depth),t.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,Ce,ye,q.data)):t.texImage3D(32879,0,Ee,q.width,q.height,q.depth,0,Ce,ye,q.data);else if(g.isFramebufferTexture){if(ot)if(Xe)t.texStorage2D(3553,L,Ee,q.width,q.height);else{let X=q.width,ce=q.height;for(let ve=0;ve<L;ve++)t.texImage2D(3553,ve,Ee,X,ce,0,Ce,ye,null),X>>=1,ce>>=1}}else if(Le.length>0&&Se){Xe&&ot&&t.texStorage2D(3553,L,Ee,Le[0].width,Le[0].height);for(let X=0,ce=Le.length;X<ce;X++)xe=Le[X],Xe?t.texSubImage2D(3553,X,0,0,Ce,ye,xe):t.texImage2D(3553,X,Ee,Ce,ye,xe);g.generateMipmaps=!1}else Xe?(ot&&t.texStorage2D(3553,L,Ee,q.width,q.height),t.texSubImage2D(3553,0,0,0,Ce,ye,q)):t.texImage2D(3553,0,Ee,Ce,ye,q);P(g,Se)&&N(V),ge.__version=se.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Te(M,g,D){if(g.image.length!==6)return;const V=Ie(M,g),K=g.source;t.bindTexture(34067,M.__webglTexture,33984+D);const se=i.get(K);if(K.version!==se.__version||V===!0){t.activeTexture(33984+D),n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const ge=g.isCompressedTexture||g.image[0].isCompressedTexture,fe=g.image[0]&&g.image[0].isDataTexture,q=[];for(let X=0;X<6;X++)!ge&&!fe?q[X]=y(g.image[X],!1,!0,c):q[X]=fe?g.image[X].image:g.image[X],q[X]=ne(g,q[X]);const Se=q[0],Ce=E(Se)||o,ye=s.convert(g.format,g.encoding),Ee=s.convert(g.type),xe=_(g.internalFormat,ye,Ee,g.encoding),Le=o&&g.isVideoTexture!==!0,Xe=se.__version===void 0||V===!0;let ot=C(g,Se,Ce);W(34067,g,Ce);let L;if(ge){Le&&Xe&&t.texStorage2D(34067,ot,xe,Se.width,Se.height);for(let X=0;X<6;X++){L=q[X].mipmaps;for(let ce=0;ce<L.length;ce++){const ve=L[ce];g.format!==qt?ye!==null?Le?t.compressedTexSubImage2D(34069+X,ce,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(34069+X,ce,xe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+X,ce,0,0,ve.width,ve.height,ye,Ee,ve.data):t.texImage2D(34069+X,ce,xe,ve.width,ve.height,0,ye,Ee,ve.data)}}}else{L=g.mipmaps,Le&&Xe&&(L.length>0&&ot++,t.texStorage2D(34067,ot,xe,q[0].width,q[0].height));for(let X=0;X<6;X++)if(fe){Le?t.texSubImage2D(34069+X,0,0,0,q[X].width,q[X].height,ye,Ee,q[X].data):t.texImage2D(34069+X,0,xe,q[X].width,q[X].height,0,ye,Ee,q[X].data);for(let ce=0;ce<L.length;ce++){const we=L[ce].image[X].image;Le?t.texSubImage2D(34069+X,ce+1,0,0,we.width,we.height,ye,Ee,we.data):t.texImage2D(34069+X,ce+1,xe,we.width,we.height,0,ye,Ee,we.data)}}else{Le?t.texSubImage2D(34069+X,0,0,0,ye,Ee,q[X]):t.texImage2D(34069+X,0,xe,ye,Ee,q[X]);for(let ce=0;ce<L.length;ce++){const ve=L[ce];Le?t.texSubImage2D(34069+X,ce+1,0,0,ye,Ee,ve.image[X]):t.texImage2D(34069+X,ce+1,xe,ye,Ee,ve.image[X])}}}P(g,Ce)&&N(34067),se.__version=K.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Me(M,g,D,V,K){const se=s.convert(D.format,D.encoding),ge=s.convert(D.type),fe=_(D.internalFormat,se,ge,D.encoding);i.get(g).__hasExternalTextures||(K===32879||K===35866?t.texImage3D(K,0,fe,g.width,g.height,g.depth,0,se,ge,null):t.texImage2D(K,0,fe,g.width,g.height,0,se,ge,null)),t.bindFramebuffer(36160,M),Q(g)?h.framebufferTexture2DMultisampleEXT(36160,V,K,i.get(D).__webglTexture,0,le(g)):(K===3553||K>=34069&&K<=34074)&&n.framebufferTexture2D(36160,V,K,i.get(D).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ve(M,g,D){if(n.bindRenderbuffer(36161,M),g.depthBuffer&&!g.stencilBuffer){let V=33189;if(D||Q(g)){const K=g.depthTexture;K&&K.isDepthTexture&&(K.type===$n?V=36012:K.type===Yn&&(V=33190));const se=le(g);Q(g)?h.renderbufferStorageMultisampleEXT(36161,se,V,g.width,g.height):n.renderbufferStorageMultisample(36161,se,V,g.width,g.height)}else n.renderbufferStorage(36161,V,g.width,g.height);n.framebufferRenderbuffer(36160,36096,36161,M)}else if(g.depthBuffer&&g.stencilBuffer){const V=le(g);D&&Q(g)===!1?n.renderbufferStorageMultisample(36161,V,35056,g.width,g.height):Q(g)?h.renderbufferStorageMultisampleEXT(36161,V,35056,g.width,g.height):n.renderbufferStorage(36161,34041,g.width,g.height),n.framebufferRenderbuffer(36160,33306,36161,M)}else{const V=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let K=0;K<V.length;K++){const se=V[K],ge=s.convert(se.format,se.encoding),fe=s.convert(se.type),q=_(se.internalFormat,ge,fe,se.encoding),Se=le(g);D&&Q(g)===!1?n.renderbufferStorageMultisample(36161,Se,q,g.width,g.height):Q(g)?h.renderbufferStorageMultisampleEXT(36161,Se,q,g.width,g.height):n.renderbufferStorage(36161,q,g.width,g.height)}}n.bindRenderbuffer(36161,null)}function w(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),oe(g.depthTexture,0);const V=i.get(g.depthTexture).__webglTexture,K=le(g);if(g.depthTexture.format===Jn)Q(g)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,V,0,K):n.framebufferTexture2D(36160,36096,3553,V,0);else if(g.depthTexture.format===Ri)Q(g)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,V,0,K):n.framebufferTexture2D(36160,33306,3553,V,0);else throw new Error("Unknown depthTexture format")}function A(M){const g=i.get(M),D=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");w(g.__webglFramebuffer,M)}else if(D){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(36160,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]=n.createRenderbuffer(),Ve(g.__webglDepthbuffer[V],M,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),Ve(g.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function B(M,g,D){const V=i.get(M);g!==void 0&&Me(V.__webglFramebuffer,M,M.texture,36064,3553),D!==void 0&&A(M)}function Z(M){const g=M.texture,D=i.get(M),V=i.get(g);M.addEventListener("dispose",de),M.isWebGLMultipleRenderTargets!==!0&&(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=g.version,a.memory.textures++);const K=M.isWebGLCubeRenderTarget===!0,se=M.isWebGLMultipleRenderTargets===!0,ge=E(M)||o;if(K){D.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)D.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(D.__webglFramebuffer=n.createFramebuffer(),se)if(r.drawBuffers){const fe=M.texture;for(let q=0,Se=fe.length;q<Se;q++){const Ce=i.get(fe[q]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&Q(M)===!1){const fe=se?g:[g];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer);for(let q=0;q<fe.length;q++){const Se=fe[q];D.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(36161,D.__webglColorRenderbuffer[q]);const Ce=s.convert(Se.format,Se.encoding),ye=s.convert(Se.type),Ee=_(Se.internalFormat,Ce,ye,Se.encoding,M.isXRRenderTarget===!0),xe=le(M);n.renderbufferStorageMultisample(36161,xe,Ee,M.width,M.height),n.framebufferRenderbuffer(36160,36064+q,36161,D.__webglColorRenderbuffer[q])}n.bindRenderbuffer(36161,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Ve(D.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}}if(K){t.bindTexture(34067,V.__webglTexture),W(34067,g,ge);for(let fe=0;fe<6;fe++)Me(D.__webglFramebuffer[fe],M,g,36064,34069+fe);P(g,ge)&&N(34067),t.unbindTexture()}else if(se){const fe=M.texture;for(let q=0,Se=fe.length;q<Se;q++){const Ce=fe[q],ye=i.get(Ce);t.bindTexture(3553,ye.__webglTexture),W(3553,Ce,ge),Me(D.__webglFramebuffer,M,Ce,36064+q,3553),P(Ce,ge)&&N(3553)}t.unbindTexture()}else{let fe=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?fe=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,V.__webglTexture),W(fe,g,ge),Me(D.__webglFramebuffer,M,g,36064,fe),P(g,ge)&&N(fe),t.unbindTexture()}M.depthBuffer&&A(M)}function $(M){const g=E(M)||o,D=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let V=0,K=D.length;V<K;V++){const se=D[V];if(P(se,g)){const ge=M.isWebGLCubeRenderTarget?34067:3553,fe=i.get(se).__webglTexture;t.bindTexture(ge,fe),N(ge),t.unbindTexture()}}}function re(M){if(o&&M.samples>0&&Q(M)===!1){const g=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],D=M.width,V=M.height;let K=16384;const se=[],ge=M.stencilBuffer?33306:36096,fe=i.get(M),q=M.isWebGLMultipleRenderTargets===!0;if(q)for(let Se=0;Se<g.length;Se++)t.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Se,36161,null),t.bindFramebuffer(36160,fe.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Se,3553,null,0);t.bindFramebuffer(36008,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,fe.__webglFramebuffer);for(let Se=0;Se<g.length;Se++){se.push(36064+Se),M.depthBuffer&&se.push(ge);const Ce=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Ce===!1&&(M.depthBuffer&&(K|=256),M.stencilBuffer&&(K|=1024)),q&&n.framebufferRenderbuffer(36008,36064,36161,fe.__webglColorRenderbuffer[Se]),Ce===!0&&(n.invalidateFramebuffer(36008,[ge]),n.invalidateFramebuffer(36009,[ge])),q){const ye=i.get(g[Se]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,ye,0)}n.blitFramebuffer(0,0,D,V,0,0,D,V,K,9728),m&&n.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),q)for(let Se=0;Se<g.length;Se++){t.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Se,36161,fe.__webglColorRenderbuffer[Se]);const Ce=i.get(g[Se]).__webglTexture;t.bindFramebuffer(36160,fe.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Se,3553,Ce,0)}t.bindFramebuffer(36009,fe.__webglMultisampledFramebuffer)}}function le(M){return Math.min(f,M.samples)}function Q(M){const g=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function he(M){const g=a.render.frame;v.get(M)!==g&&(v.set(M,g),M.update())}function ne(M,g){const D=M.encoding,V=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===So||D!==ni&&(D===Ye?o===!1?e.has("EXT_sRGB")===!0&&V===qt?(M.format=So,M.minFilter=Ot,M.generateMipmaps=!1):g=jc.sRGBToLinear(g):(V!==qt||K!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",D)),g}this.allocateTextureUnit=G,this.resetTextureUnits=te,this.setTexture2D=oe,this.setTexture2DArray=k,this.setTexture3D=H,this.setTextureCube=ae,this.rebindTextures=B,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=A,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Q}function Nx(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===ti)return 5121;if(s===Td)return 32819;if(s===Ad)return 32820;if(s===Sd)return 5120;if(s===wd)return 5122;if(s===Hc)return 5123;if(s===Ed)return 5124;if(s===Yn)return 5125;if(s===$n)return 5126;if(s===ar)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Cd)return 6406;if(s===qt)return 6408;if(s===Pd)return 6409;if(s===Dd)return 6410;if(s===Jn)return 6402;if(s===Ri)return 34041;if(s===Ld)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===So)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Rd)return 6403;if(s===Id)return 36244;if(s===Fd)return 33319;if(s===Nd)return 33320;if(s===Ud)return 36249;if(s===Es||s===Ts||s===As||s===Cs)if(a===Ye)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Es)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ts)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===As)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Es)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ts)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===As)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ba||s===Ga||s===Va||s===ka)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ba)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ga)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Va)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ka)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Od)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ha||s===Wa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ha)return a===Ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Wa)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===qa||s===Xa||s===ja||s===Ya||s===$a||s===Za||s===Ka||s===Ja||s===Qa||s===el||s===tl||s===nl||s===il||s===rl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===qa)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xa)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ja)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ya)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$a)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Za)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ka)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ja)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Qa)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===el)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===tl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===il)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===sl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===sl)return a===Ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Ti?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Ux extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vr extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ox={type:"move"};class to{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,i),x=this._getHandJoint(c,p);d!==null&&(x.matrix.fromArray(d.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=d.radius),x.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ox)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Vr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class zx extends Rt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Jn,u!==Jn&&u!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Jn&&(i=Yn),i===void 0&&u===Ri&&(i=Ti),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:yt,this.minFilter=l!==void 0?l:yt,this.flipY=!1,this.generateMipmaps=!1}}class Bx extends Oi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const v=t.getContextAttributes();let p=null,d=null;const x=[],T=[],y=new Set,E=new Map,S=new Pt;S.layers.enable(1),S.viewport=new Ke;const P=new Pt;P.layers.enable(2),P.viewport=new Ke;const N=[S,P],_=new Ux;_.layers.enable(1),_.layers.enable(2);let C=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let H=x[k];return H===void 0&&(H=new to,x[k]=H),H.getTargetRaySpace()},this.getControllerGrip=function(k){let H=x[k];return H===void 0&&(H=new to,x[k]=H),H.getGripSpace()},this.getHand=function(k){let H=x[k];return H===void 0&&(H=new to,x[k]=H),H.getHandSpace()};function Y(k){const H=T.indexOf(k.inputSource);if(H===-1)return;const ae=x[H];ae!==void 0&&ae.dispatchEvent({type:k.type,data:k.inputSource})}function de(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",de),r.removeEventListener("inputsourceschange",U);for(let k=0;k<x.length;k++){const H=T[k];H!==null&&(T[k]=null,x[k].disconnect(H))}C=null,R=null,e.setRenderTarget(p),h=null,f=null,u=null,r=null,d=null,oe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",de),r.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,H),r.updateRenderState({baseLayer:h}),d=new ii(h.framebufferWidth,h.framebufferHeight,{format:qt,type:ti,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let H=null,ae=null,pe=null;v.depth&&(pe=v.stencil?35056:33190,H=v.stencil?Ri:Jn,ae=v.stencil?Ti:Yn);const _e={colorFormat:32856,depthFormat:pe,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(_e),r.updateRenderState({layers:[f]}),d=new ii(f.textureWidth,f.textureHeight,{format:qt,type:ti,depthTexture:new zx(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const W=e.properties.get(d);W.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),oe.setContext(r),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function U(k){for(let H=0;H<k.removed.length;H++){const ae=k.removed[H],pe=T.indexOf(ae);pe>=0&&(T[pe]=null,x[pe].disconnect(ae))}for(let H=0;H<k.added.length;H++){const ae=k.added[H];let pe=T.indexOf(ae);if(pe===-1){for(let W=0;W<x.length;W++)if(W>=T.length){T.push(ae),pe=W;break}else if(T[W]===null){T[W]=ae,pe=W;break}if(pe===-1)break}const _e=x[pe];_e&&_e.connect(ae)}}const F=new O,ee=new O;function ie(k,H,ae){F.setFromMatrixPosition(H.matrixWorld),ee.setFromMatrixPosition(ae.matrixWorld);const pe=F.distanceTo(ee),_e=H.projectionMatrix.elements,W=ae.projectionMatrix.elements,Ie=_e[14]/(_e[10]-1),be=_e[14]/(_e[10]+1),Te=(_e[9]+1)/_e[5],Me=(_e[9]-1)/_e[5],Ve=(_e[8]-1)/_e[0],w=(W[8]+1)/W[0],A=Ie*Ve,B=Ie*w,Z=pe/(-Ve+w),$=Z*-Ve;H.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX($),k.translateZ(Z),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const re=Ie+Z,le=be+Z,Q=A-$,he=B+(pe-$),ne=Te*be/le*re,M=Me*be/le*re;k.projectionMatrix.makePerspective(Q,he,ne,M,re,le)}function te(k,H){H===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(H.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;_.near=P.near=S.near=k.near,_.far=P.far=S.far=k.far,(C!==_.near||R!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,R=_.far);const H=k.parent,ae=_.cameras;te(_,H);for(let _e=0;_e<ae.length;_e++)te(ae[_e],H);_.matrixWorld.decompose(_.position,_.quaternion,_.scale),k.matrix.copy(_.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const pe=k.children;for(let _e=0,W=pe.length;_e<W;_e++)pe[_e].updateMatrixWorld(!0);ae.length===2?ie(_,S,P):_.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return _},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(k){f!==null&&(f.fixedFoveation=k),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=k)},this.getPlanes=function(){return y};let G=null;function ue(k,H){if(c=H.getViewerPose(l||a),m=H,c!==null){const ae=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let pe=!1;ae.length!==_.cameras.length&&(_.cameras.length=0,pe=!0);for(let _e=0;_e<ae.length;_e++){const W=ae[_e];let Ie=null;if(h!==null)Ie=h.getViewport(W);else{const Te=u.getViewSubImage(f,W);Ie=Te.viewport,_e===0&&(e.setRenderTargetTextures(d,Te.colorTexture,f.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(d))}let be=N[_e];be===void 0&&(be=new Pt,be.layers.enable(_e),be.viewport=new Ke,N[_e]=be),be.matrix.fromArray(W.transform.matrix),be.projectionMatrix.fromArray(W.projectionMatrix),be.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),_e===0&&_.matrix.copy(be.matrix),pe===!0&&_.cameras.push(be)}}for(let ae=0;ae<x.length;ae++){const pe=T[ae],_e=x[ae];pe!==null&&_e!==void 0&&_e.update(pe,H,l||a)}if(G&&G(k,H),H.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:H.detectedPlanes});let ae=null;for(const pe of y)H.detectedPlanes.has(pe)||(ae===null&&(ae=[]),ae.push(pe));if(ae!==null)for(const pe of ae)y.delete(pe),E.delete(pe),i.dispatchEvent({type:"planeremoved",data:pe});for(const pe of H.detectedPlanes)if(!y.has(pe))y.add(pe),E.set(pe,H.lastChangedTime),i.dispatchEvent({type:"planeadded",data:pe});else{const _e=E.get(pe);pe.lastChangedTime>_e&&(E.set(pe,pe.lastChangedTime),i.dispatchEvent({type:"planechanged",data:pe}))}}m=null}const oe=new iu;oe.setAnimationLoop(ue),this.setAnimationLoop=function(k){G=k},this.dispose=function(){}}}function Gx(n,e){function t(p,d){d.color.getRGB(p.fogColor.value,eu(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,x,T,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,y)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),v(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,x,T):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Bt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Bt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const E=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*E}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let T;d.map?T=d.map:d.specularMap?T=d.specularMap:d.displacementMap?T=d.displacementMap:d.normalMap?T=d.normalMap:d.bumpMap?T=d.bumpMap:d.roughnessMap?T=d.roughnessMap:d.metalnessMap?T=d.metalnessMap:d.alphaMap?T=d.alphaMap:d.emissiveMap?T=d.emissiveMap:d.clearcoatMap?T=d.clearcoatMap:d.clearcoatNormalMap?T=d.clearcoatNormalMap:d.clearcoatRoughnessMap?T=d.clearcoatRoughnessMap:d.iridescenceMap?T=d.iridescenceMap:d.iridescenceThicknessMap?T=d.iridescenceThicknessMap:d.specularIntensityMap?T=d.specularIntensityMap:d.specularColorMap?T=d.specularColorMap:d.transmissionMap?T=d.transmissionMap:d.thicknessMap?T=d.thicknessMap:d.sheenColorMap?T=d.sheenColorMap:d.sheenRoughnessMap&&(T=d.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix));let y;d.aoMap?y=d.aoMap:d.lightMap&&(y=d.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,x,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*x,p.scale.value=T*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let y;d.map?y=d.map:d.alphaMap&&(y=d.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let x;d.map?x=d.map:d.alphaMap&&(x=d.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,x){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Bt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Vx(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(35375):0;function l(T,y){const E=y.program;i.uniformBlockBinding(T,E)}function c(T,y){let E=r[T.id];E===void 0&&(v(T),E=u(T),r[T.id]=E,T.addEventListener("dispose",d));const S=y.program;i.updateUBOMapping(T,S);const P=e.render.frame;s[T.id]!==P&&(h(T),s[T.id]=P)}function u(T){const y=f();T.__bindingPointIndex=y;const E=n.createBuffer(),S=T.__size,P=T.usage;return n.bindBuffer(35345,E),n.bufferData(35345,S,P),n.bindBuffer(35345,null),n.bindBufferBase(35345,y,E),E}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const y=r[T.id],E=T.uniforms,S=T.__cache;n.bindBuffer(35345,y);for(let P=0,N=E.length;P<N;P++){const _=E[P];if(m(_,P,S)===!0){const C=_.__offset,R=Array.isArray(_.value)?_.value:[_.value];let Y=0;for(let de=0;de<R.length;de++){const U=R[de],F=p(U);typeof U=="number"?(_.__data[0]=U,n.bufferSubData(35345,C+Y,_.__data)):U.isMatrix3?(_.__data[0]=U.elements[0],_.__data[1]=U.elements[1],_.__data[2]=U.elements[2],_.__data[3]=U.elements[0],_.__data[4]=U.elements[3],_.__data[5]=U.elements[4],_.__data[6]=U.elements[5],_.__data[7]=U.elements[0],_.__data[8]=U.elements[6],_.__data[9]=U.elements[7],_.__data[10]=U.elements[8],_.__data[11]=U.elements[0]):(U.toArray(_.__data,Y),Y+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,C,_.__data)}}n.bindBuffer(35345,null)}function m(T,y,E){const S=T.value;if(E[y]===void 0){if(typeof S=="number")E[y]=S;else{const P=Array.isArray(S)?S:[S],N=[];for(let _=0;_<P.length;_++)N.push(P[_].clone());E[y]=N}return!0}else if(typeof S=="number"){if(E[y]!==S)return E[y]=S,!0}else{const P=Array.isArray(E[y])?E[y]:[E[y]],N=Array.isArray(S)?S:[S];for(let _=0;_<P.length;_++){const C=P[_];if(C.equals(N[_])===!1)return C.copy(N[_]),!0}}return!1}function v(T){const y=T.uniforms;let E=0;const S=16;let P=0;for(let N=0,_=y.length;N<_;N++){const C=y[N],R={boundary:0,storage:0},Y=Array.isArray(C.value)?C.value:[C.value];for(let de=0,U=Y.length;de<U;de++){const F=Y[de],ee=p(F);R.boundary+=ee.boundary,R.storage+=ee.storage}if(C.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=E,N>0){P=E%S;const de=S-P;P!==0&&de-R.boundary<0&&(E+=S-P,C.__offset=E)}E+=R.storage}return P=E%S,P>0&&(E+=S-P),T.__size=E,T.__cache={},this}function p(T){const y={boundary:0,storage:0};return typeof T=="number"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function d(T){const y=T.target;y.removeEventListener("dispose",d);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function x(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:x}}function kx(){const n=Jr("canvas");return n.style.display="block",n}function lu(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:kx(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ni,this.physicallyCorrectLights=!1,this.toneMapping=gn,this.toneMappingExposure=1;const p=this;let d=!1,x=0,T=0,y=null,E=-1,S=null;const P=new Ke,N=new Ke;let _=null,C=e.width,R=e.height,Y=1,de=null,U=null;const F=new Ke(0,0,C,R),ee=new Ke(0,0,C,R);let ie=!1;const te=new Jo;let G=!1,ue=!1,oe=null;const k=new tt,H=new qe,ae=new O,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return y===null?Y:1}let W=t;function Ie(b,z){for(let j=0;j<b.length;j++){const I=b[j],J=e.getContext(I,z);if(J!==null)return J}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yo}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",Le,!1),W===null){const z=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&z.shift(),W=Ie(z,b),W===null)throw Ie(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let be,Te,Me,Ve,w,A,B,Z,$,re,le,Q,he,ne,M,g,D,V,K,se,ge,fe,q,Se;function Ce(){be=new Qg(W),Te=new Xg(W,be,n),be.init(Te),fe=new Nx(W,be,Te),Me=new Ix(W,be,Te),Ve=new n_,w=new vx,A=new Fx(W,be,Me,w,Te,fe,Ve),B=new Yg(p),Z=new Jg(p),$=new up(W,Te),q=new Wg(W,be,$,Te),re=new e_(W,$,Ve,q),le=new o_(W,re,$,Ve),K=new s_(W,Te,A),g=new jg(w),Q=new xx(p,B,Z,be,Te,q,g),he=new Gx(p,w),ne=new yx,M=new Ax(be,Te),V=new Hg(p,B,Z,Me,le,u,a),D=new Rx(p,le,Te),Se=new Vx(W,Ve,Te,Me),se=new qg(W,be,Ve,Te),ge=new t_(W,be,Ve,Te),Ve.programs=Q.programs,p.capabilities=Te,p.extensions=be,p.properties=w,p.renderLists=ne,p.shadowMap=D,p.state=Me,p.info=Ve}Ce();const ye=new Bx(p,W);this.xr=ye,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const b=be.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=be.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(C,R,!1))},this.getSize=function(b){return b.set(C,R)},this.setSize=function(b,z,j){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=b,R=z,e.width=Math.floor(b*Y),e.height=Math.floor(z*Y),j!==!1&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(C*Y,R*Y).floor()},this.setDrawingBufferSize=function(b,z,j){C=b,R=z,Y=j,e.width=Math.floor(b*j),e.height=Math.floor(z*j),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(F)},this.setViewport=function(b,z,j,I){b.isVector4?F.set(b.x,b.y,b.z,b.w):F.set(b,z,j,I),Me.viewport(P.copy(F).multiplyScalar(Y).floor())},this.getScissor=function(b){return b.copy(ee)},this.setScissor=function(b,z,j,I){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,z,j,I),Me.scissor(N.copy(ee).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(b){Me.setScissorTest(ie=b)},this.setOpaqueSort=function(b){de=b},this.setTransparentSort=function(b){U=b},this.getClearColor=function(b){return b.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(b=!0,z=!0,j=!0){let I=0;b&&(I|=16384),z&&(I|=256),j&&(I|=1024),W.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Le,!1),ne.dispose(),M.dispose(),w.dispose(),B.dispose(),Z.dispose(),le.dispose(),q.dispose(),Se.dispose(),Q.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",ve),ye.removeEventListener("sessionend",we),oe&&(oe.dispose(),oe=null),We.stop()};function Ee(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const b=Ve.autoReset,z=D.enabled,j=D.autoUpdate,I=D.needsUpdate,J=D.type;Ce(),Ve.autoReset=b,D.enabled=z,D.autoUpdate=j,D.needsUpdate=I,D.type=J}function Le(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Xe(b){const z=b.target;z.removeEventListener("dispose",Xe),ot(z)}function ot(b){L(b),w.remove(b)}function L(b){const z=w.get(b).programs;z!==void 0&&(z.forEach(function(j){Q.releaseProgram(j)}),b.isShaderMaterial&&Q.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,j,I,J,Ae){z===null&&(z=pe);const Pe=J.isMesh&&J.matrixWorld.determinant()<0,Fe=uu(b,z,j,I,J);Me.setMaterial(I,Pe);let Ne=j.index,ke=1;I.wireframe===!0&&(Ne=re.getWireframeAttribute(j),ke=2);const Oe=j.drawRange,ze=j.attributes.position;let Je=Oe.start*ke,wt=(Oe.start+Oe.count)*ke;Ae!==null&&(Je=Math.max(Je,Ae.start*ke),wt=Math.min(wt,(Ae.start+Ae.count)*ke)),Ne!==null?(Je=Math.max(Je,0),wt=Math.min(wt,Ne.count)):ze!=null&&(Je=Math.max(Je,0),wt=Math.min(wt,ze.count));const on=wt-Je;if(on<0||on===1/0)return;q.setup(J,I,Fe,j,Ne);let In,Qe=se;if(Ne!==null&&(In=$.get(Ne),Qe=ge,Qe.setIndex(In)),J.isMesh)I.wireframe===!0?(Me.setLineWidth(I.wireframeLinewidth*_e()),Qe.setMode(1)):Qe.setMode(4);else if(J.isLine){let Be=I.linewidth;Be===void 0&&(Be=1),Me.setLineWidth(Be*_e()),J.isLineSegments?Qe.setMode(1):J.isLineLoop?Qe.setMode(2):Qe.setMode(3)}else J.isPoints?Qe.setMode(0):J.isSprite&&Qe.setMode(4);if(J.isInstancedMesh)Qe.renderInstances(Je,on,J.count);else if(j.isInstancedBufferGeometry){const Be=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,fs=Math.min(j.instanceCount,Be);Qe.renderInstances(Je,on,fs)}else Qe.render(Je,on)},this.compile=function(b,z){function j(I,J,Ae){I.transparent===!0&&I.side===yr?(I.side=Bt,I.needsUpdate=!0,Ft(I,J,Ae),I.side=ei,I.needsUpdate=!0,Ft(I,J,Ae),I.side=yr):Ft(I,J,Ae)}h=M.get(b),h.init(),v.push(h),b.traverseVisible(function(I){I.isLight&&I.layers.test(z.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights(p.physicallyCorrectLights),b.traverse(function(I){const J=I.material;if(J)if(Array.isArray(J))for(let Ae=0;Ae<J.length;Ae++){const Pe=J[Ae];j(Pe,b,I)}else j(J,b,I)}),v.pop(),h=null};let X=null;function ce(b){X&&X(b)}function ve(){We.stop()}function we(){We.start()}const We=new iu;We.setAnimationLoop(ce),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(b){X=b,ye.setAnimationLoop(b),b===null?We.stop():We.start()},ye.addEventListener("sessionstart",ve),ye.addEventListener("sessionend",we),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(z),z=ye.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,z,y),h=M.get(b,v.length),h.init(),v.push(h),k.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),te.setFromProjectionMatrix(k),ue=this.localClippingEnabled,G=g.init(this.clippingPlanes,ue,z),f=ne.get(b,m.length),f.init(),m.push(f),at(b,z,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(de,U),G===!0&&g.beginShadows();const j=h.state.shadowsArray;if(D.render(j,b,z),G===!0&&g.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(f,b),h.setupLights(p.physicallyCorrectLights),z.isArrayCamera){const I=z.cameras;for(let J=0,Ae=I.length;J<Ae;J++){const Pe=I[J];ht(f,b,Pe,Pe.viewport)}}else ht(f,b,z);y!==null&&(A.updateMultisampleRenderTarget(y),A.updateRenderTargetMipmap(y)),b.isScene===!0&&b.onAfterRender(p,b,z),q.resetDefaultState(),E=-1,S=null,v.pop(),v.length>0?h=v[v.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function at(b,z,j,I){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)h.pushLight(b),b.castShadow&&h.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||te.intersectsSprite(b)){I&&ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(k);const Pe=le.update(b),Fe=b.material;Fe.visible&&f.push(b,Pe,Fe,j,ae.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Ve.render.frame&&(b.skeleton.update(),b.skeleton.frame=Ve.render.frame),!b.frustumCulled||te.intersectsObject(b))){I&&ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(k);const Pe=le.update(b),Fe=b.material;if(Array.isArray(Fe)){const Ne=Pe.groups;for(let ke=0,Oe=Ne.length;ke<Oe;ke++){const ze=Ne[ke],Je=Fe[ze.materialIndex];Je&&Je.visible&&f.push(b,Pe,Je,j,ae.z,ze)}}else Fe.visible&&f.push(b,Pe,Fe,j,ae.z,null)}}const Ae=b.children;for(let Pe=0,Fe=Ae.length;Pe<Fe;Pe++)at(Ae[Pe],z,j,I)}function ht(b,z,j,I){const J=b.opaque,Ae=b.transmissive,Pe=b.transparent;h.setupLightsView(j),Ae.length>0&&Rn(J,z,j),I&&Me.viewport(P.copy(I)),J.length>0&&$e(J,z,j),Ae.length>0&&$e(Ae,z,j),Pe.length>0&&$e(Pe,z,j),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Rn(b,z,j){const I=Te.isWebGL2;oe===null&&(oe=new ii(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?ar:ti,minFilter:or,samples:I&&s===!0?4:0})),p.getDrawingBufferSize(H),I?oe.setSize(H.x,H.y):oe.setSize(wo(H.x),wo(H.y));const J=p.getRenderTarget();p.setRenderTarget(oe),p.clear();const Ae=p.toneMapping;p.toneMapping=gn,$e(b,z,j),p.toneMapping=Ae,A.updateMultisampleRenderTarget(oe),A.updateRenderTargetMipmap(oe),p.setRenderTarget(J)}function $e(b,z,j){const I=z.isScene===!0?z.overrideMaterial:null;for(let J=0,Ae=b.length;J<Ae;J++){const Pe=b[J],Fe=Pe.object,Ne=Pe.geometry,ke=I===null?Pe.material:I,Oe=Pe.group;Fe.layers.test(j.layers)&&sn(Fe,z,j,Ne,ke,Oe)}}function sn(b,z,j,I,J,Ae){b.onBeforeRender(p,z,j,I,J,Ae),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),J.onBeforeRender(p,z,j,I,b,Ae),J.transparent===!0&&J.side===yr?(J.side=Bt,J.needsUpdate=!0,p.renderBufferDirect(j,z,I,J,b,Ae),J.side=ei,J.needsUpdate=!0,p.renderBufferDirect(j,z,I,J,b,Ae),J.side=yr):p.renderBufferDirect(j,z,I,J,b,Ae),b.onAfterRender(p,z,j,I,J,Ae)}function Ft(b,z,j){z.isScene!==!0&&(z=pe);const I=w.get(b),J=h.state.lights,Ae=h.state.shadowsArray,Pe=J.state.version,Fe=Q.getParameters(b,J.state,Ae,z,j),Ne=Q.getProgramCacheKey(Fe);let ke=I.programs;I.environment=b.isMeshStandardMaterial?z.environment:null,I.fog=z.fog,I.envMap=(b.isMeshStandardMaterial?Z:B).get(b.envMap||I.environment),ke===void 0&&(b.addEventListener("dispose",Xe),ke=new Map,I.programs=ke);let Oe=ke.get(Ne);if(Oe!==void 0){if(I.currentProgram===Oe&&I.lightsStateVersion===Pe)return na(b,Fe),Oe}else Fe.uniforms=Q.getUniforms(b),b.onBuild(j,Fe,p),b.onBeforeCompile(Fe,p),Oe=Q.acquireProgram(Fe,Ne),ke.set(Ne,Oe),I.uniforms=Fe.uniforms;const ze=I.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ze.clippingPlanes=g.uniform),na(b,Fe),I.needsLights=hu(b),I.lightsStateVersion=Pe,I.needsLights&&(ze.ambientLightColor.value=J.state.ambient,ze.lightProbe.value=J.state.probe,ze.directionalLights.value=J.state.directional,ze.directionalLightShadows.value=J.state.directionalShadow,ze.spotLights.value=J.state.spot,ze.spotLightShadows.value=J.state.spotShadow,ze.rectAreaLights.value=J.state.rectArea,ze.ltc_1.value=J.state.rectAreaLTC1,ze.ltc_2.value=J.state.rectAreaLTC2,ze.pointLights.value=J.state.point,ze.pointLightShadows.value=J.state.pointShadow,ze.hemisphereLights.value=J.state.hemi,ze.directionalShadowMap.value=J.state.directionalShadowMap,ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ze.spotShadowMap.value=J.state.spotShadowMap,ze.spotLightMatrix.value=J.state.spotLightMatrix,ze.spotLightMap.value=J.state.spotLightMap,ze.pointShadowMap.value=J.state.pointShadowMap,ze.pointShadowMatrix.value=J.state.pointShadowMatrix);const Je=Oe.getUniforms(),wt=jr.seqWithValue(Je.seq,ze);return I.currentProgram=Oe,I.uniformsList=wt,Oe}function na(b,z){const j=w.get(b);j.outputEncoding=z.outputEncoding,j.instancing=z.instancing,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function uu(b,z,j,I,J){z.isScene!==!0&&(z=pe),A.resetTextureUnits();const Ae=z.fog,Pe=I.isMeshStandardMaterial?z.environment:null,Fe=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:ni,Ne=(I.isMeshStandardMaterial?Z:B).get(I.envMap||Pe),ke=I.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Oe=!!I.normalMap&&!!j.attributes.tangent,ze=!!j.morphAttributes.position,Je=!!j.morphAttributes.normal,wt=!!j.morphAttributes.color,on=I.toneMapped?p.toneMapping:gn,In=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Qe=In!==void 0?In.length:0,Be=w.get(I),fs=h.state.lights;if(G===!0&&(ue===!0||b!==S)){const Et=b===S&&I.id===E;g.setState(I,b,Et)}let lt=!1;I.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==fs.state.version||Be.outputEncoding!==Fe||J.isInstancedMesh&&Be.instancing===!1||!J.isInstancedMesh&&Be.instancing===!0||J.isSkinnedMesh&&Be.skinning===!1||!J.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==Ne||I.fog===!0&&Be.fog!==Ae||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==g.numPlanes||Be.numIntersection!==g.numIntersection)||Be.vertexAlphas!==ke||Be.vertexTangents!==Oe||Be.morphTargets!==ze||Be.morphNormals!==Je||Be.morphColors!==wt||Be.toneMapping!==on||Te.isWebGL2===!0&&Be.morphTargetsCount!==Qe)&&(lt=!0):(lt=!0,Be.__version=I.version);let Fn=Be.currentProgram;lt===!0&&(Fn=Ft(I,z,J));let ia=!1,Bi=!1,hs=!1;const _t=Fn.getUniforms(),Nn=Be.uniforms;if(Me.useProgram(Fn.program)&&(ia=!0,Bi=!0,hs=!0),I.id!==E&&(E=I.id,Bi=!0),ia||S!==b){if(_t.setValue(W,"projectionMatrix",b.projectionMatrix),Te.logarithmicDepthBuffer&&_t.setValue(W,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),S!==b&&(S=b,Bi=!0,hs=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Et=_t.map.cameraPosition;Et!==void 0&&Et.setValue(W,ae.setFromMatrixPosition(b.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&_t.setValue(W,"isOrthographic",b.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||J.isSkinnedMesh)&&_t.setValue(W,"viewMatrix",b.matrixWorldInverse)}if(J.isSkinnedMesh){_t.setOptional(W,J,"bindMatrix"),_t.setOptional(W,J,"bindMatrixInverse");const Et=J.skeleton;Et&&(Te.floatVertexTextures?(Et.boneTexture===null&&Et.computeBoneTexture(),_t.setValue(W,"boneTexture",Et.boneTexture,A),_t.setValue(W,"boneTextureSize",Et.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ds=j.morphAttributes;if((ds.position!==void 0||ds.normal!==void 0||ds.color!==void 0&&Te.isWebGL2===!0)&&K.update(J,j,I,Fn),(Bi||Be.receiveShadow!==J.receiveShadow)&&(Be.receiveShadow=J.receiveShadow,_t.setValue(W,"receiveShadow",J.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Nn.envMap.value=Ne,Nn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Bi&&(_t.setValue(W,"toneMappingExposure",p.toneMappingExposure),Be.needsLights&&fu(Nn,hs),Ae&&I.fog===!0&&he.refreshFogUniforms(Nn,Ae),he.refreshMaterialUniforms(Nn,I,Y,R,oe),jr.upload(W,Be.uniformsList,Nn,A)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(jr.upload(W,Be.uniformsList,Nn,A),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&_t.setValue(W,"center",J.center),_t.setValue(W,"modelViewMatrix",J.modelViewMatrix),_t.setValue(W,"normalMatrix",J.normalMatrix),_t.setValue(W,"modelMatrix",J.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Et=I.uniformsGroups;for(let ps=0,du=Et.length;ps<du;ps++)if(Te.isWebGL2){const ra=Et[ps];Se.update(ra,Fn),Se.bind(ra,Fn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fn}function fu(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function hu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(b,z,j){w.get(b.texture).__webglTexture=z,w.get(b.depthTexture).__webglTexture=j;const I=w.get(b);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=j===void 0,I.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,z){const j=w.get(b);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,j=0){y=b,x=z,T=j;let I=!0,J=null,Ae=!1,Pe=!1;if(b){const Ne=w.get(b);Ne.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(36160,null),I=!1):Ne.__webglFramebuffer===void 0?A.setupRenderTarget(b):Ne.__hasExternalTextures&&A.rebindTextures(b,w.get(b.texture).__webglTexture,w.get(b.depthTexture).__webglTexture);const ke=b.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Pe=!0);const Oe=w.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(J=Oe[z],Ae=!0):Te.isWebGL2&&b.samples>0&&A.useMultisampledRTT(b)===!1?J=w.get(b).__webglMultisampledFramebuffer:J=Oe,P.copy(b.viewport),N.copy(b.scissor),_=b.scissorTest}else P.copy(F).multiplyScalar(Y).floor(),N.copy(ee).multiplyScalar(Y).floor(),_=ie;if(Me.bindFramebuffer(36160,J)&&Te.drawBuffers&&I&&Me.drawBuffers(b,J),Me.viewport(P),Me.scissor(N),Me.setScissorTest(_),Ae){const Ne=w.get(b.texture);W.framebufferTexture2D(36160,36064,34069+z,Ne.__webglTexture,j)}else if(Pe){const Ne=w.get(b.texture),ke=z||0;W.framebufferTextureLayer(36160,36064,Ne.__webglTexture,j||0,ke)}E=-1},this.readRenderTargetPixels=function(b,z,j,I,J,Ae,Pe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=w.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){Me.bindFramebuffer(36160,Fe);try{const Ne=b.texture,ke=Ne.format,Oe=Ne.type;if(ke!==qt&&fe.convert(ke)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Oe===ar&&(be.has("EXT_color_buffer_half_float")||Te.isWebGL2&&be.has("EXT_color_buffer_float"));if(Oe!==ti&&fe.convert(Oe)!==W.getParameter(35738)&&!(Oe===$n&&(Te.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-I&&j>=0&&j<=b.height-J&&W.readPixels(z,j,I,J,fe.convert(ke),fe.convert(Oe),Ae)}finally{const Ne=y!==null?w.get(y).__webglFramebuffer:null;Me.bindFramebuffer(36160,Ne)}}},this.copyFramebufferToTexture=function(b,z,j=0){const I=Math.pow(2,-j),J=Math.floor(z.image.width*I),Ae=Math.floor(z.image.height*I);A.setTexture2D(z,0),W.copyTexSubImage2D(3553,j,0,0,b.x,b.y,J,Ae),Me.unbindTexture()},this.copyTextureToTexture=function(b,z,j,I=0){const J=z.image.width,Ae=z.image.height,Pe=fe.convert(j.format),Fe=fe.convert(j.type);A.setTexture2D(j,0),W.pixelStorei(37440,j.flipY),W.pixelStorei(37441,j.premultiplyAlpha),W.pixelStorei(3317,j.unpackAlignment),z.isDataTexture?W.texSubImage2D(3553,I,b.x,b.y,J,Ae,Pe,Fe,z.image.data):z.isCompressedTexture?W.compressedTexSubImage2D(3553,I,b.x,b.y,z.mipmaps[0].width,z.mipmaps[0].height,Pe,z.mipmaps[0].data):W.texSubImage2D(3553,I,b.x,b.y,Pe,Fe,z.image),I===0&&j.generateMipmaps&&W.generateMipmap(3553),Me.unbindTexture()},this.copyTextureToTexture3D=function(b,z,j,I,J=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=b.max.x-b.min.x+1,Pe=b.max.y-b.min.y+1,Fe=b.max.z-b.min.z+1,Ne=fe.convert(I.format),ke=fe.convert(I.type);let Oe;if(I.isData3DTexture)A.setTexture3D(I,0),Oe=32879;else if(I.isDataArrayTexture)A.setTexture2DArray(I,0),Oe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,I.flipY),W.pixelStorei(37441,I.premultiplyAlpha),W.pixelStorei(3317,I.unpackAlignment);const ze=W.getParameter(3314),Je=W.getParameter(32878),wt=W.getParameter(3316),on=W.getParameter(3315),In=W.getParameter(32877),Qe=j.isCompressedTexture?j.mipmaps[0]:j.image;W.pixelStorei(3314,Qe.width),W.pixelStorei(32878,Qe.height),W.pixelStorei(3316,b.min.x),W.pixelStorei(3315,b.min.y),W.pixelStorei(32877,b.min.z),j.isDataTexture||j.isData3DTexture?W.texSubImage3D(Oe,J,z.x,z.y,z.z,Ae,Pe,Fe,Ne,ke,Qe.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Oe,J,z.x,z.y,z.z,Ae,Pe,Fe,Ne,Qe.data)):W.texSubImage3D(Oe,J,z.x,z.y,z.z,Ae,Pe,Fe,Ne,ke,Qe),W.pixelStorei(3314,ze),W.pixelStorei(32878,Je),W.pixelStorei(3316,wt),W.pixelStorei(3315,on),W.pixelStorei(32877,In),J===0&&I.generateMipmaps&&W.generateMipmap(Oe),Me.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),Me.unbindTexture()},this.resetState=function(){x=0,T=0,y=null,Me.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Hx extends lu{}Hx.prototype.isWebGL1Renderer=!0;class Wx extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ta extends Dn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new O,h=new O,m=[],v=[],p=[],d=[];for(let x=0;x<=i;x++){const T=[],y=x/i;let E=0;x==0&&a==0?E=.5/t:x==i&&l==Math.PI&&(E=-.5/t);for(let S=0;S<=t;S++){const P=S/t;f.x=-e*Math.cos(r+P*s)*Math.sin(a+y*o),f.y=e*Math.cos(a+y*o),f.z=e*Math.sin(r+P*s)*Math.sin(a+y*o),v.push(f.x,f.y,f.z),h.copy(f).normalize(),p.push(h.x,h.y,h.z),d.push(P+E,1-y),T.push(c++)}u.push(T)}for(let x=0;x<i;x++)for(let T=0;T<t;T++){const y=u[x][T+1],E=u[x][T],S=u[x+1][T],P=u[x+1][T+1];(x!==0||a>0)&&m.push(y,E,P),(x!==i-1||l<Math.PI)&&m.push(E,S,P)}this.setIndex(m),this.setAttribute("position",new rn(v,3)),this.setAttribute("normal",new rn(p,3)),this.setAttribute("uv",new rn(d,2))}static fromJSON(e){return new ta(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qx extends dr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wc,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xx extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const no=new tt,kl=new O,Hl=new O;class jx{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jo,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;kl.setFromMatrixPosition(e.matrixWorld),t.position.copy(kl),Hl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hl),t.updateMatrixWorld(),no.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(no),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(no)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wl=new tt,ji=new O,io=new O;class Yx extends jx{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ji.setFromMatrixPosition(e.matrixWorld),i.position.copy(ji),io.copy(i.position),io.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(io),i.updateMatrixWorld(),r.makeTranslation(-ji.x,-ji.y,-ji.z),Wl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl)}}class $x extends Xx{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Yx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yo);const cu=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Zx={__name:"Three",setup(n){const e=sf(),t=new Wx,i=new Pt,r=new lu({alpha:!0}),s=new $x;let a;const o=()=>{if(e.value instanceof HTMLElement){const{clientWidth:m,clientHeight:v}=e.value;s.color.setHex(16777215),s.position.set(10,10,0),t.add(s),a=f(),t.add(a),i.aspect=m/v,i.updateProjectionMatrix(),i.position.set(10,10,0),i.lookAt(0,0,0),r.setSize(m,v),r.setPixelRatio(m/v),e.value.appendChild(r.domElement),r.render(t,i)}},l=[];l.push({start:0,end:30,function(){a.rotation.x+=.01,a.rotation.y+=.01}}),l.push({start:31,end:45,function(){a.scale.x-=.01,a.scale.y-=.01,a.scale.z-=.01,a.position.z+=.1}}),l.push({start:46,end:60,function(){a.scale.x+=.01,a.scale.y+=.01,a.scale.z+=.01,a.position.y-=.1}}),l.push({start:61,end:75,function(){a.rotation.y+=.001,a.rotation.z+=.015,a.position.y+=.1,a.position.z-=.1}}),l.push({start:76,end:100,function(){a.rotation.y+=.001,a.rotation.z+=.015}});let c=0;document.body.onscroll=()=>{c=document.documentElement.scrollTop/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100};const u=()=>{window.requestAnimationFrame(u),h(),r.render(t,i)};Ho(()=>{o(),u()});const f=()=>{const m=new ta(3),v=new qx({color:6333814});return new pn(m,v)};function h(){l.forEach(m=>{c>=m.start&&c<m.end&&m.function()})}return(m,v)=>(Ic(),Fc("div",{ref_key:"container",ref:e,class:"fullcanvas"},null,512))}},Kx=cu(Zx,[["__scopeId","data-v-deb7f707"]]);const Jx={__name:"App",setup(n){return(e,t)=>(Ic(),Fc("div",null,[An(Kx)]))}},Qx=cu(Jx,[["__scopeId","data-v-62268dc6"]]);qh(Qx).mount("#app");
