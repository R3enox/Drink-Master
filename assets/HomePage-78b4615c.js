import{r as v,e as K,u as U,j as u,a as V,b as ie,g as se,c as ae,L as oe}from"./index-91455332.js";import{B as te}from"./ButtonThemeChange-708095a0.js";import{s as ce,a as le,D as ue}from"./drinksSelector-9a90e1f5.js";import{H as pe,g as de}from"./paginationLimits-a54512ff.js";const X="/frontend-drink-master/assets/mobile-hero-img-e307f486.png",fe="/frontend-drink-master/assets/mobile-hero-img@2x-f9eefe96.png",me="/frontend-drink-master/assets/mobile-hero-img-8a14741b.webp",xe="/frontend-drink-master/assets/mobile-hero-img@2x-4ae0316d.webp",Y="/frontend-drink-master/assets/tablet-hero-img-70fe4d43.webp",Z="/frontend-drink-master/assets/tablet-hero-img@2x-b24e1f1d.webp";function q(t,n,i,r){return new(i||(i=Promise))(function(e,o){function a(p){try{d(r.next(p))}catch(s){o(s)}}function c(p){try{d(r.throw(p))}catch(s){o(s)}}function d(p){var s;p.done?e(p.value):(s=p.value,s instanceof i?s:new i(function(f){f(s)})).then(a,c)}d((r=r.apply(t,n||[])).next())})}function N(t,n){var i,r,e,o,a={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(d){return function(p){return function(s){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,r&&(e=2&s[0]?r.return:s[0]?r.throw||((e=r.return)&&e.call(r),0):r.next)&&!(e=e.call(r,s[1])).done)return e;switch(r=0,e&&(s=[2&s[0],e.value]),s[0]){case 0:case 1:e=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(e=a.trys,!((e=e.length>0&&e[e.length-1])||s[0]!==6&&s[0]!==2)){a=0;continue}if(s[0]===3&&(!e||s[1]>e[0]&&s[1]<e[3])){a.label=s[1];break}if(s[0]===6&&a.label<e[1]){a.label=e[1],e=s;break}if(e&&a.label<e[2]){a.label=e[2],a.ops.push(s);break}e[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(t,a)}catch(f){s=[6,f],r=0}finally{i=e=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([d,p])}}}function W(t){var n=typeof Symbol=="function"&&Symbol.iterator,i=n&&t[n],r=0;if(i)return i.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function w(t,n){var i=typeof Symbol=="function"&&t[Symbol.iterator];if(!i)return t;var r,e,o=i.call(t),a=[];try{for(;(n===void 0||n-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(c){e={error:c}}finally{try{r&&!r.done&&(i=o.return)&&i.call(o)}finally{if(e)throw e.error}}return a}function j(t,n,i){if(i||arguments.length===2)for(var r,e=0,o=n.length;e<o;e++)!r&&e in n||(r||(r=Array.prototype.slice.call(n,0,e)),r[e]=n[e]);return t.concat(r||Array.prototype.slice.call(n))}function ee(t,n,i,r,e){for(var o=[],a=5;a<arguments.length;a++)o[a-5]=arguments[a];return q(this,void 0,void 0,function(){var c,d,p,s,f,x;return N(this,function(m){switch(m.label){case 0:m.trys.push([0,12,13,14]),c=W(o),d=c.next(),m.label=1;case 1:if(d.done)return[3,11];switch(p=d.value,typeof p){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,he(t,n,p,i,r,e)];case 3:return m.sent(),[3,10];case 4:return[4,re(p)];case 5:return m.sent(),[3,10];case 6:return[4,p.apply(void 0,j([t,n,i,r,e],w(o),!1))];case 7:return m.sent(),[3,10];case 8:return[4,p];case 9:m.sent(),m.label=10;case 10:return d=c.next(),[3,1];case 11:return[3,14];case 12:return s=m.sent(),f={error:s},[3,14];case 13:try{d&&!d.done&&(x=c.return)&&x.call(c)}finally{if(f)throw f.error}return[7];case 14:return[2]}})})}function he(t,n,i,r,e,o){return q(this,void 0,void 0,function(){var a,c;return N(this,function(d){switch(d.label){case 0:return a=t.textContent||"",c=function(p,s){var f=w(s).slice(0);return j(j([],w(p),!1),[NaN],!1).findIndex(function(x,m){return f[m]!==x})}(a,i),[4,be(t,j(j([],w(ye(a,n,c)),!1),w(ge(i,n,c)),!1),r,e,o)];case 1:return d.sent(),[2]}})})}function re(t){return q(this,void 0,void 0,function(){return N(this,function(n){switch(n.label){case 0:return[4,new Promise(function(i){return setTimeout(i,t)})];case 1:return n.sent(),[2]}})})}function be(t,n,i,r,e){return q(this,void 0,void 0,function(){var o,a,c,d,p,s,f,x,m,R,G,T,A;return N(this,function(k){switch(k.label){case 0:if(o=n,e){for(a=0,c=1;c<n.length;c++)if(d=w([n[c-1],n[c]],2),p=d[0],(s=d[1]).length>p.length||s===""){a=c;break}o=n.slice(a,n.length)}k.label=1;case 1:k.trys.push([1,6,7,8]),f=W(function($){var I,E,S,_,H,O,C;return N(this,function(g){switch(g.label){case 0:I=function(D){return N(this,function(L){switch(L.label){case 0:return[4,{op:function(F){return requestAnimationFrame(function(){return F.textContent=D})},opCode:function(F){var B=F.textContent||"";return D===""||B.length>D.length?"DELETE":"WRITING"}}];case 1:return L.sent(),[2]}})},g.label=1;case 1:g.trys.push([1,6,7,8]),E=W($),S=E.next(),g.label=2;case 2:return S.done?[3,5]:(_=S.value,[5,I(_)]);case 3:g.sent(),g.label=4;case 4:return S=E.next(),[3,2];case 5:return[3,8];case 6:return H=g.sent(),O={error:H},[3,8];case 7:try{S&&!S.done&&(C=E.return)&&C.call(E)}finally{if(O)throw O.error}return[7];case 8:return[2]}})}(o)),x=f.next(),k.label=2;case 2:return x.done?[3,5]:(m=x.value,R=m.opCode(t)==="WRITING"?i+i*(Math.random()-.5):r+r*(Math.random()-.5),m.op(t),[4,re(R)]);case 3:k.sent(),k.label=4;case 4:return x=f.next(),[3,2];case 5:return[3,8];case 6:return G=k.sent(),T={error:G},[3,8];case 7:try{x&&!x.done&&(A=f.return)&&A.call(f)}finally{if(T)throw T.error}return[7];case 8:return[2]}})})}function ge(t,n,i){var r,e;return i===void 0&&(i=0),N(this,function(o){switch(o.label){case 0:r=n(t),e=r.length,o.label=1;case 1:return i<e?[4,r.slice(0,++i).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}})}function ye(t,n,i){var r,e;return i===void 0&&(i=0),N(this,function(o){switch(o.label){case 0:r=n(t),e=r.length,o.label=1;case 1:return e>i?[4,r.slice(0,--e).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}})}var ve="index-module_type__E-SaG";(function(t,n){n===void 0&&(n={});var i=n.insertAt;if(t&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",i==="top"&&r.firstChild?r.insertBefore(e,r.firstChild):r.appendChild(e),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var we=v.memo(v.forwardRef(function(t,n){var i=t.sequence,r=t.repeat,e=t.className,o=t.speed,a=o===void 0?40:o,c=t.deletionSpeed,d=t.omitDeletionAnimation,p=d!==void 0&&d,s=t.preRenderFirstString,f=s!==void 0&&s,x=t.wrapper,m=x===void 0?"span":x,R=t.splitter,G=R===void 0?function(l){return j([],w(l),!1)}:R,T=t.cursor,A=T===void 0||T,k=t.style,$=function(l,h){var y={};for(var b in l)Object.prototype.hasOwnProperty.call(l,b)&&h.indexOf(b)<0&&(y[b]=l[b]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function"){var P=0;for(b=Object.getOwnPropertySymbols(l);P<b.length;P++)h.indexOf(b[P])<0&&Object.prototype.propertyIsEnumerable.call(l,b[P])&&(y[b[P]]=l[b[P]])}return y}(t,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),I=$["aria-label"],E=$["aria-hidden"],S=$.role;c||(c=a);var _=new Array(2).fill(40);[a,c].forEach(function(l,h){switch(typeof l){case"number":_[h]=Math.abs(l-100);break;case"object":var y=l.type,b=l.value;if(typeof b!="number")break;y==="keyStrokeDelayInMs"&&(_[h]=b)}});var H,O,C,g,D,L,F=_[0],B=_[1],M=function(l,h){h===void 0&&(h=null);var y=v.useRef(h);return v.useEffect(function(){l&&(typeof l=="function"?l(y.current):l.current=y.current)},[l]),y}(n),z=ve;H=e?"".concat(A?z+" ":"").concat(e):A?z:"",O=v.useRef(function(){var l,h=i;r===1/0?l=ee:typeof r=="number"&&(h=Array(1+r).fill(i).flat());var y=l?j(j([],w(h),!1),[l],!1):j([],w(h),!1);return ee.apply(void 0,j([M.current,G,F,B,p],w(y),!1)),function(){M.current}}),C=v.useRef(),g=v.useRef(!1),D=v.useRef(!1),L=w(v.useState(0),2)[1],g.current&&(D.current=!0),v.useEffect(function(){return g.current||(C.current=O.current(),g.current=!0),L(function(l){return l+1}),function(){D.current&&C.current&&C.current()}},[]);var ne=m,J=f?i.find(function(l){return typeof l=="string"})||"":null;return K.createElement(ne,{"aria-hidden":E,"aria-label":I,role:S,style:k,className:H,children:I?K.createElement("span",{"aria-hidden":"true",ref:M,children:J}):J,ref:I?void 0:M})}),function(t,n){return!0});const Q="custom-type-animation-cursor",je=()=>{const{t}=U();return u.jsx(we,{sequence:[t("TypingText"),2e3,n=>n.classList.remove(Q),6e3,n=>n.classList.add(Q),""],speed:10,style:{whiteSpace:"pre-line"},repeat:1/0,cursor:!1,className:`${Q}`})},ke=()=>{const{t}=U();return u.jsxs("section",{className:"container flex-wrap m-auto pt-[80px] pb-[56px] md:pt-[120px] md:pb-[61px] lg:pt-[128px] lg:flex lg:pb-[80px] lg:gap-x-[130px]",children:[u.jsxs("div",{className:"mb-[47px] md:mb-[54px]",children:[u.jsx("div",{className:`font-semibold text-[32px] leading-[1.19] h-[114px]
        md:text-[56px] md:leading-[1.07] md:h-[120px] md:w-[641px] lg:text-[64px] lg:mt-[57px] lg:w-[715px] lg:h-[136px] `,children:u.jsx(je,{className:`font-semibold text-[32px] leading-[1.19]  
        md:text-[56px] md:w-[641px] md:h-[120px] md:leading-[1.07] lg:text-[64px] lg:mt-[57px] lg:w-[715px]`})}),u.jsx("p",{className:"text-[14px] leading-[1.43] mt-[16px] mb-[32px] md:text-[18px] md:leading-[1.33] md:mt-[28px] md:w-[619px] lg:mb-[40px] lg:w-[500px]",children:t("Hero.text")}),u.jsx(te,{title:t("title.AddDrink"),to:"/add"})]}),u.jsxs("picture",{className:"flex justify-center items-center",children:[u.jsx("source",{media:"(min-width: 768px)",type:"image/webp",srcSet:`${Y} 1x, ${Z} 2x`}),u.jsx("source",{media:"(min-width: 768px)",type:"image/png",srcSet:`${Y} 1x, ${Z} 2x`}),u.jsx("source",{media:"(min-width: 375px)",type:"image/webp",srcSet:`${me} 1x, ${xe} 2x`}),u.jsx("source",{media:"(min-width: 375px)",type:"image/webp",srcSet:`${X} 1x, ${fe} 2x`}),u.jsx("img",{srcSet:X,alt:"Cocktail"})]})]})},Se=["Ordinary Drink","Cocktail","Shake","Other/Unknown"],Ne=()=>{const{t}=U(),n=V(ce),i=V(le),r=ie();v.useEffect(()=>{r(se(pe[de()]))},[r]);const{categories:e}=ae(),o=e&&Se.filter(a=>e.includes(a));return u.jsxs("div",{className:"container m-auto conflex flex-col gap-[60px] pb-[80px] md:gap-[80px] pt-[56px] md:pt-[61px] md:pb-[140px] lg:pt-[80px]",children:[i&&u.jsx(oe,{isStatic:!0}),n.length>0&&!i&&u.jsx("ul",{className:"flex flex-col gap-[40px] mb-[60px] md:gap-[80px] md:mb-[80px]",children:o.map(a=>u.jsxs("li",{children:[u.jsx("p",{className:"font-semibold text-[28px] md:text-[40px] leading-[1.14] md:leading-[1.1] pb-[24px] md:pb-[40px]",children:t(`categories.${a}`)}),u.jsx("ul",{className:"flex flex-wrap flex-row md:gap-[20px] overflow-hidden h-[392px] md:h-[398px] lg:h-[438px]",children:n.filter(c=>a===c.category).map(c=>u.jsx(ue,{drink:c},c._id))})]},a))}),u.jsx("div",{className:"flex justify-center ",children:u.jsx(te,{title:t("link.PreviewDrinks.LinkDarkTheme"),to:"/drinks"})})]})},Te=()=>u.jsx(u.Fragment,{children:u.jsxs("div",{className:"bg-no-repeat lg:dark:bg-home-set-desktop bg-top-right ",children:[u.jsx(ke,{}),u.jsx(Ne,{})]})});export{Te as default};
