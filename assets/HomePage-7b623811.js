import{r as w,e as z,j as u,L as Z,u as re,a as ne,b as ie}from"./index-1a609c2a.js";import{D as se}from"./DrinkCardPreview-6c7e5095.js";import{H as ae,g as oe}from"./paginationLimits-aa4d1835.js";const J="/frontend-drink-master/assets/mobile-hero-img-e307f486.png",ce="/frontend-drink-master/assets/mobile-hero-img@2x-f9eefe96.png",le="/frontend-drink-master/assets/mobile-hero-img-8a14741b.webp",ue="/frontend-drink-master/assets/mobile-hero-img@2x-4ae0316d.webp",K="/frontend-drink-master/assets/tablet-hero-img-70fe4d43.webp",V="/frontend-drink-master/assets/tablet-hero-img@2x-b24e1f1d.webp";function F(t,s,n,r){return new(n||(n=Promise))(function(e,a){function o(d){try{p(r.next(d))}catch(i){a(i)}}function c(d){try{p(r.throw(d))}catch(i){a(i)}}function p(d){var i;d.done?e(d.value):(i=d.value,i instanceof n?i:new n(function(f){f(i)})).then(o,c)}p((r=r.apply(t,s||[])).next())})}function S(t,s){var n,r,e,a,o={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(p){return function(d){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(e=2&i[0]?r.return:i[0]?r.throw||((e=r.return)&&e.call(r),0):r.next)&&!(e=e.call(r,i[1])).done)return e;switch(r=0,e&&(i=[2&i[0],e.value]),i[0]){case 0:case 1:e=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(e=o.trys,!((e=e.length>0&&e[e.length-1])||i[0]!==6&&i[0]!==2)){o=0;continue}if(i[0]===3&&(!e||i[1]>e[0]&&i[1]<e[3])){o.label=i[1];break}if(i[0]===6&&o.label<e[1]){o.label=e[1],e=i;break}if(e&&o.label<e[2]){o.label=e[2],o.ops.push(i);break}e[2]&&o.ops.pop(),o.trys.pop();continue}i=s.call(t,o)}catch(f){i=[6,f],r=0}finally{n=e=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([p,d])}}}function U(t){var s=typeof Symbol=="function"&&Symbol.iterator,n=s&&t[s],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(t,s){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r,e,a=n.call(t),o=[];try{for(;(s===void 0||s-- >0)&&!(r=a.next()).done;)o.push(r.value)}catch(c){e={error:c}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}return o}function j(t,s,n){if(n||arguments.length===2)for(var r,e=0,a=s.length;e<a;e++)!r&&e in s||(r||(r=Array.prototype.slice.call(s,0,e)),r[e]=s[e]);return t.concat(r||Array.prototype.slice.call(s))}function X(t,s,n,r,e){for(var a=[],o=5;o<arguments.length;o++)a[o-5]=arguments[o];return F(this,void 0,void 0,function(){var c,p,d,i,f,x;return S(this,function(m){switch(m.label){case 0:m.trys.push([0,12,13,14]),c=U(a),p=c.next(),m.label=1;case 1:if(p.done)return[3,11];switch(d=p.value,typeof d){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,de(t,s,d,n,r,e)];case 3:return m.sent(),[3,10];case 4:return[4,ee(d)];case 5:return m.sent(),[3,10];case 6:return[4,d.apply(void 0,j([t,s,n,r,e],v(a),!1))];case 7:return m.sent(),[3,10];case 8:return[4,d];case 9:m.sent(),m.label=10;case 10:return p=c.next(),[3,1];case 11:return[3,14];case 12:return i=m.sent(),f={error:i},[3,14];case 13:try{p&&!p.done&&(x=c.return)&&x.call(c)}finally{if(f)throw f.error}return[7];case 14:return[2]}})})}function de(t,s,n,r,e,a){return F(this,void 0,void 0,function(){var o,c;return S(this,function(p){switch(p.label){case 0:return o=t.textContent||"",c=function(d,i){var f=v(i).slice(0);return j(j([],v(d),!1),[NaN],!1).findIndex(function(x,m){return f[m]!==x})}(o,n),[4,pe(t,j(j([],v(me(o,s,c)),!1),v(fe(n,s,c)),!1),r,e,a)];case 1:return p.sent(),[2]}})})}function ee(t){return F(this,void 0,void 0,function(){return S(this,function(s){switch(s.label){case 0:return[4,new Promise(function(n){return setTimeout(n,t)})];case 1:return s.sent(),[2]}})})}function pe(t,s,n,r,e){return F(this,void 0,void 0,function(){var a,o,c,p,d,i,f,x,m,R,G,D,A;return S(this,function(k){switch(k.label){case 0:if(a=s,e){for(o=0,c=1;c<s.length;c++)if(p=v([s[c-1],s[c]],2),d=p[0],(i=p[1]).length>d.length||i===""){o=c;break}a=s.slice(o,s.length)}k.label=1;case 1:k.trys.push([1,6,7,8]),f=U(function($){var I,N,_,T,H,O,E;return S(this,function(b){switch(b.label){case 0:I=function(C){return S(this,function(L){switch(L.label){case 0:return[4,{op:function(M){return requestAnimationFrame(function(){return M.textContent=C})},opCode:function(M){var Q=M.textContent||"";return C===""||Q.length>C.length?"DELETE":"WRITING"}}];case 1:return L.sent(),[2]}})},b.label=1;case 1:b.trys.push([1,6,7,8]),N=U($),_=N.next(),b.label=2;case 2:return _.done?[3,5]:(T=_.value,[5,I(T)]);case 3:b.sent(),b.label=4;case 4:return _=N.next(),[3,2];case 5:return[3,8];case 6:return H=b.sent(),O={error:H},[3,8];case 7:try{_&&!_.done&&(E=N.return)&&E.call(N)}finally{if(O)throw O.error}return[7];case 8:return[2]}})}(a)),x=f.next(),k.label=2;case 2:return x.done?[3,5]:(m=x.value,R=m.opCode(t)==="WRITING"?n+n*(Math.random()-.5):r+r*(Math.random()-.5),m.op(t),[4,ee(R)]);case 3:k.sent(),k.label=4;case 4:return x=f.next(),[3,2];case 5:return[3,8];case 6:return G=k.sent(),D={error:G},[3,8];case 7:try{x&&!x.done&&(A=f.return)&&A.call(f)}finally{if(D)throw D.error}return[7];case 8:return[2]}})})}function fe(t,s,n){var r,e;return n===void 0&&(n=0),S(this,function(a){switch(a.label){case 0:r=s(t),e=r.length,a.label=1;case 1:return n<e?[4,r.slice(0,++n).join("")]:[3,3];case 2:return a.sent(),[3,1];case 3:return[2]}})}function me(t,s,n){var r,e;return n===void 0&&(n=0),S(this,function(a){switch(a.label){case 0:r=s(t),e=r.length,a.label=1;case 1:return e>n?[4,r.slice(0,--e).join("")]:[3,3];case 2:return a.sent(),[3,1];case 3:return[2]}})}var xe="index-module_type__E-SaG";(function(t,s){s===void 0&&(s={});var n=s.insertAt;if(t&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",n==="top"&&r.firstChild?r.insertBefore(e,r.firstChild):r.appendChild(e),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var he=w.memo(w.forwardRef(function(t,s){var n=t.sequence,r=t.repeat,e=t.className,a=t.speed,o=a===void 0?40:a,c=t.deletionSpeed,p=t.omitDeletionAnimation,d=p!==void 0&&p,i=t.preRenderFirstString,f=i!==void 0&&i,x=t.wrapper,m=x===void 0?"span":x,R=t.splitter,G=R===void 0?function(l){return j([],v(l),!1)}:R,D=t.cursor,A=D===void 0||D,k=t.style,$=function(l,h){var y={};for(var g in l)Object.prototype.hasOwnProperty.call(l,g)&&h.indexOf(g)<0&&(y[g]=l[g]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function"){var P=0;for(g=Object.getOwnPropertySymbols(l);P<g.length;P++)h.indexOf(g[P])<0&&Object.prototype.propertyIsEnumerable.call(l,g[P])&&(y[g[P]]=l[g[P]])}return y}(t,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),I=$["aria-label"],N=$["aria-hidden"],_=$.role;c||(c=o);var T=new Array(2).fill(40);[o,c].forEach(function(l,h){switch(typeof l){case"number":T[h]=Math.abs(l-100);break;case"object":var y=l.type,g=l.value;if(typeof g!="number")break;y==="keyStrokeDelayInMs"&&(T[h]=g)}});var H,O,E,b,C,L,M=T[0],Q=T[1],q=function(l,h){h===void 0&&(h=null);var y=w.useRef(h);return w.useEffect(function(){l&&(typeof l=="function"?l(y.current):l.current=y.current)},[l]),y}(s),W=xe;H=e?"".concat(A?W+" ":"").concat(e):A?W:"",O=w.useRef(function(){var l,h=n;r===1/0?l=X:typeof r=="number"&&(h=Array(1+r).fill(n).flat());var y=l?j(j([],v(h),!1),[l],!1):j([],v(h),!1);return X.apply(void 0,j([q.current,G,M,Q,d],v(y),!1)),function(){q.current}}),E=w.useRef(),b=w.useRef(!1),C=w.useRef(!1),L=v(w.useState(0),2)[1],b.current&&(C.current=!0),w.useEffect(function(){return b.current||(E.current=O.current(),b.current=!0),L(function(l){return l+1}),function(){C.current&&E.current&&E.current()}},[]);var te=m,Y=f?n.find(function(l){return typeof l=="string"})||"":null;return z.createElement(te,{"aria-hidden":N,"aria-label":I,role:_,style:k,className:H,children:I?z.createElement("span",{"aria-hidden":"true",ref:q,children:Y}):Y,ref:I?void 0:q})}),function(t,s){return!0});const B="custom-type-animation-cursor",ge=()=>u.jsx(he,{sequence:["Craft Your Perfect Drink with Drink Master",2e3,t=>t.classList.remove(B),6e3,t=>t.classList.add(B),""],speed:10,style:{whiteSpace:"pre-line"},repeat:1/0,cursor:!1,className:`${B}`});const be=()=>u.jsxs("section",{className:"container flex-wrap m-auto pt-[80px] pb-[56px] md:pt-[120px] md:pb-[61px] lg:pt-[128px] lg:flex lg:pb-[80px] lg:gap-x-[130px]",children:[u.jsxs("div",{className:"mb-[47px] md:mb-[54px]",children:[u.jsx("div",{className:`font-semibold text-[32px] leading-[1.19] h-[114px]
        md:text-[56px] md:leading-[1.07] md:h-[120px] md:w-[641px] lg:text-[64px] lg:mt-[57px] lg:w-[715px] lg:h-[136px] `,children:u.jsx(ge,{className:`font-semibold text-[32px] leading-[1.19]  
        md:text-[56px] md:w-[641px] md:h-[120px] md:leading-[1.07] lg:text-[64px] lg:mt-[57px] lg:w-[715px]`})}),u.jsx("p",{className:"text-[14px] leading-[1.43] mt-[16px] mb-[32px] md:text-[18px] md:leading-[1.33] md:mt-[28px] md:w-[619px] lg:mb-[40px] lg:w-[500px]",children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world's finest beverages."}),u.jsx(Z,{to:"/add",children:"Add drink"})]}),u.jsxs("picture",{className:"flex justify-center items-center",children:[u.jsx("source",{media:"(min-width: 768px)",type:"image/webp",srcSet:`${K} 1x, ${V} 2x`}),u.jsx("source",{media:"(min-width: 768px)",type:"image/png",srcSet:`${K} 1x, ${V} 2x`}),u.jsx("source",{media:"(min-width: 375px)",type:"image/webp",srcSet:`${le} 1x, ${ue} 2x`}),u.jsx("source",{media:"(min-width: 375px)",type:"image/webp",srcSet:`${J} 1x, ${ce} 2x`}),u.jsx("img",{srcSet:J,alt:"Cocktail"})]})]}),ye=["Ordinary Drink","Cocktail","Shake","Other/Unknown"],ve=()=>{const{data:t,isLoading:s}=re(ae[oe()]),{categories:n}=ne(),r=n&&ye.filter(e=>n.includes(e));return s?u.jsx(ie,{isStatic:!0}):t&&u.jsxs("div",{className:"container m-auto conflex flex-col gap-[60px] pb-[80px] md:gap-[80px] pt-[56px] md:pt-[61px] md:pb-[140px] lg:pt-[80px]",children:[u.jsx("ul",{className:"flex flex-col gap-[40px] mb-[60px] md:gap-[80px] md:mb-[80px]",children:r.map(e=>u.jsxs("li",{children:[u.jsx("p",{className:"font-semibold text-[28px] md:text-[40px] leading-[1.14] md:leading-[1.1] pb-[24px] md:pb-[40px]",children:e}),u.jsx("ul",{className:"flex flex-wrap flex-row md:gap-[20px] overflow-hidden h-[392px] md:h-[398px] lg:h-[438px]",children:t.filter(a=>e===a.category).map(a=>u.jsx(se,{drink:a},a._id))})]},e))}),u.jsx("div",{className:"flex justify-center ",children:u.jsx(Z,{to:"/drinks",children:"Other drinks"})})]})},_e=()=>u.jsxs("div",{className:`bg-home-set
    md:bg-home-set-tablet lg:bg-home-set-desktop bg-contain bg-no-repeat`,children:[u.jsx(be,{}),u.jsx(ve,{})]});export{_e as default};
