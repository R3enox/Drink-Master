import{u as b,b as C,a as o,r as l,k as M,j as e,B as g,L as I,U as y,l as L}from"./index-9cc65927.js";import{u as E,P as N,D as S}from"./DrinkImageComponent-46974ae7.js";import{P as O}from"./PageTitle-14348f35.js";import{D as T,M as w}from"./ModalButtons-09493d88.js";import{F as A}from"./paginationLimits-a54512ff.js";import"./scrollToTop-9bd6e429.js";const B=t=>t.favorites.favorites,U=t=>t.favorites.isLoading,R=t=>t.favorites.error,_=t=>t.favorites.totalCount,V=()=>{const{t,i18n:q}=b(),{page:s,per_page:a,countPagesOfPagination:p,setPage:v}=E(A),r=C(),d=o(B),i=o(_),n=o(U),f=o(R);l.useEffect(()=>{r(M({page:s,per_page:a}))},[r,s,a]);const[m,u]=l.useState(!1),[k,x]=l.useState(null),F=()=>{u(!0)},c=()=>{u(!1)},D=async P=>{try{await r(L(P)),c()}catch(h){g.error(h.message)}},j=!n&&i===0;return e.jsx("div",{className:"dark:bg-favorites-set md:dark:bg-favorites-set-tablet lg:dark:bg-favorites-set-desktop bg-cover bg-no-repeat",children:e.jsx("section",{className:"pb-[80px] mb:pb-[140]",children:e.jsxs("div",{className:"container mx-auto ",children:[f&&g.error(t("toastError.Favorite")),e.jsx(O,{title:t("title.Favorite")}),n&&e.jsx(I,{isStatic:!0}),!n&&i>0&&e.jsxs(e.Fragment,{children:[e.jsx(T,{data:d,openMyDrinkModal:F,onChooseItem:x}),e.jsx(N,{totalCount:i,itemsPerPage:a,setPage:v,forcePage:s,initialPage:s,countPagesOfPagination:p})]}),j&&e.jsx(S,{description:t("DrinkImageComponent.Favorite")}),m&&e.jsx(y,{isOpen:m,closeFnc:c,content:"Are you sure you want to delete your drink?",children:e.jsx(w,{closeMyDrinkModal:c,handleDeleteClick:()=>D(k),drinkId:d})})]})})})};export{V as default};