import{u as h,j as e,b as $,a as x,t as L,r as k,B as b,k as _,v as B,w as P,x as E,c as R,y as T,L as A}from"./index-bb72cdbd.js";import{s as U}from"./scrollToTop-9bd6e429.js";import{B as y}from"./ButtonThemeChange-935db1aa.js";const H=({drinkIdStorage:t})=>t.currentCocktails,K=({drinkIdStorage:t})=>t.isLoading,G=t=>!t||!t.ingredients?[]:t.ingredients.map(({ingredientId:s,measure:i})=>({ingredientId:s,measure:i})),M=({ingredients:t})=>{const{t:s}=h();return e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"mb-[42px] font-medium text-[16px] leading-[1.25] text-hover-border-color-search dark:text-grey-text-color md:mb-[24px] md:font-medium md:text-[16px] md:leading-[1.25]",children:s("title2.DrinkIngredientsList")}),e.jsx("div",{className:"grid grid-cols-2 gap-[20px] md:grid-cols-3 md:lg:grid-cols-5  md:gap-[22px]",children:t&&t.map(({_id:i,title:r,ingredientThumb:n,measure:d,"thumb-medium":a,"thumb-small":l})=>e.jsxs("div",{className:" scale-100 ease-in-out duration-300  hover:scale-[1.035] hover:contrast-[0.9] md:mb-[22px]",children:[e.jsx("div",{className:"mb-[8px] p-[25px] relative rounded-lg flex-col flex items-center bg-primary-text-button-color dark:bg-ingredients-card-bg md:p-[22px] ",children:e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:n}),e.jsx("source",{media:"(min-width: 768px)",srcSet:a}),e.jsx("img",{src:l,alt:"",className:" md:w-[157px] md:h-[157px] lg:w-[157px] lg:h-[157px] "})]})}),e.jsxs("div",{className:" flex justify-between items-center md:mt-[14px] ",children:[e.jsx("p",{className:"font-medium leading-[1.29px] text-[14px] md:text-lg md:leading-6 lg:font-medium lg:text-base lg:leading-[1.33333] ",children:s(`ingredients.${r}`)}),e.jsx("p",{className:"mt-[8px] mb-[8px] text-hover-border-color-search dark:text-grey-text-color font-medium leading-[1.29px] text-[14px] md:font-medium md:text-base md:leading-[1.25] lg:text-base",children:d||"to your taste"})]})]},i))})]})},N="/frontend-drink-master/assets/mobile-drinkId-img-faefa015.jpg",O="/frontend-drink-master/assets/mobile-drinkId-img@2x-ba9f167d.jpg",q="/frontend-drink-master/assets/tablet-drinkId-img-6e4eca7c.jpg",z="/frontend-drink-master/assets/tablet-drinkId-img@2x-5dd293a7.jpg",J="/frontend-drink-master/assets/desktop-drinkId-img-ad46bd33.jpg",Q="/frontend-drink-master/assets/desktop-drinkId-img@2x-8f5bf42b.jpg",V="/frontend-drink-master/assets/mobile-drinkId-img-53839e74.webp",W="/frontend-drink-master/assets/mobile-drinkId-img@2x-8c4fc873.webp",X="/frontend-drink-master/assets/tablet-drinkId-img-4bcb3387.webp",Y="/frontend-drink-master/assets/tablet-drinkId-img@2x-1f8e2ef0.webp",Z="/frontend-drink-master/assets/desktop-drinkId-img-69bbd559.webp",ee="/frontend-drink-master/assets/desktop-drinkId-img@2x-df06faec.webp",te=({description:t})=>{const{t:s,i18n:i}=h(),r=i.language;return e.jsxs("div",{className:"lg:relative mt-[80px] lg:mt-[100px]  lg:flex  lg:pt-[60px] lg:gap-[60px]",children:[e.jsx("h2",{className:"font-semibold leading-[1.1] text-[40px] hidden lg:block lg:-top-[40px] absolute",children:s("title2.RecipePreparation")}),e.jsxs("div",{className:"lg:order-last",children:[e.jsx("h2",{className:"font-semibold w-[335px] text-[28px] leading-[1.14] mb-[40px] md:text-2xl md:leading-[1.1] lg:hidden",children:s("title2.RecipePreparation")}),e.jsx("p",{className:"mb-[40px] text-[14px] leading-[1.29] md:text-[16px] md:leading-[1.37] lg:w-[594px] ",children:r==="uk"?t&&t.instructionsUK:t&&t.instructions})]}),e.jsxs("picture",{className:"flex justify-center items-center",children:[e.jsx("source",{media:"(min-width: 1440px)",type:"image/webp",srcSet:`${Z} 1x, ${ee} 2x`}),e.jsx("source",{media:"(min-width: 1440px)",type:"image/jpg",srcSet:`${J} 1x, ${Q} 2x`}),e.jsx("source",{media:"(min-width: 768px)",type:"image/webp",srcSet:`${X} 1x, ${Y} 2x`}),e.jsx("source",{media:"(min-width: 768px)",type:"image/jpg",srcSet:`${q} 1x, ${z} 2x`}),e.jsx("source",{media:"(min-width: 375px)",type:"image/webp",srcSet:`${V} 1x, ${W} 2x`}),e.jsx("source",{media:"(min-width: 375px)",type:"image/jpg",srcSet:`${N} 1x, ${O} 2x`}),e.jsx("img",{className:"rounded-xl w-[335px] md:w-[704px] lg:w-[631px] lg:mt-[0px]",srcSet:N,alt:"Cocktail"})]})]})},se=({cocktail:t})=>{const{t:s,i18n:i}=h(),r=i.language,n=$(),d=x(L),[a,l]=k.useState(!0),{_id:o,drink:m,category:c,alcoholic:p,description:g,descriptionUK:D,drinkThumb:F,favorite:u}=t,f=u==null?void 0:u.includes(d.id),[S,j]=k.useState(f),I=a?f:S,w=async v=>{try{I?(await n(_(v)),j(!1)):(await n(B(v)),j(!0))}catch(C){b.error(C.message)}finally{l(!1)}};return e.jsxs("div",{className:" lg:flex justify-between",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"mb-[8px] font-semibold text-[32px] leading-[1.19] text-gray-100 md:font-semibold md:text-[57px] md:leading-[1.07] lg:text-[64px] lg:leading-[1.06]",children:m}),e.jsxs("p",{className:"text-[12px] leading-[1.17] text-grey-text-color mb-[20px] md:text-[16px] md:leading-[1.25]",children:[s(`categories.${c}`),"/",s(`cocktailDiscr.${p}`)]}),e.jsx("p",{className:"text-[14px] leading-[1.29] mb-[40px] text-gray-100 md:text-[16px] md:leading-[1.37] md:max-w-[593px]",children:r==="uk"?D:g}),e.jsx("div",{className:"pt-10 pb-20",children:I?e.jsx(y,{descr:s("button.toggleFavorite.ButtonComponentDel"),btnFunction:()=>{w(o),b(`${s("toastError.DrinkPageHeroDel")}`)},id:o}):e.jsx(y,{descr:s("button.toggleFavorite.ButtonComponentAdd"),btnFunction:()=>{w(o),b.success(`${s("toastError.DrinkPageHeroAdd")}`,{icon:!1})},id:o})})]}),e.jsx("div",{children:e.jsx("img",{className:"max-h-[400px] mb-[18px] w-[335px] rounded-xl  md:mb-[80px] md:w-[704px] md:object-cover lg:w-[400px] lg:mb-[100px] ",src:F,alt:"poster cocktail"})})]})},de=()=>{const t=x(H),s=x(K),i=x(P),r=$(),{drinkId:n}=E(),{ingredients:d}=R(),a=G(t),o=(d&&d.filter(m=>a.find(({ingredientId:c})=>c===m._id))).map(m=>{const c=a.find(g=>g.ingredientId===m._id),p=c?c.measure:"Unknown";return{...m,measure:p}});return k.useEffect(()=>{r(T(n)),U()},[n,r]),e.jsxs("section",{className:"py-[80px] md:py-[140px] lg:pt-[132px]",children:[s&&e.jsx(A,{isStatic:!0}),i&&e.jsx("h1",{children:i}),t&&e.jsxs("div",{className:"container mx-auto ",children:[e.jsx(se,{cocktail:t}),e.jsx(M,{ingredients:o}),e.jsx(te,{description:t})]})]})};export{de as default};