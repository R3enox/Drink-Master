import{h as P,i as s,r as c,k as b,j as t,B as m,b as y,l as M}from"./index-9bbf2b0f.js";import{u as C,P as I,D as L}from"./DrinkImageComponent-ec41b704.js";import{P as E}from"./PageTitle-0259bdf2.js";import{D as w,U as N,M as O}from"./ModalButtons-f316029c.js";import{F as S}from"./paginationLimits-a54512ff.js";import"./scrollToTop-9bd6e429.js";const A=e=>e.favorites.favorites,B=e=>e.favorites.isLoading,T=e=>e.favorites.error,U=e=>e.favorites.totalCount,H=()=>{const{page:e,per_page:o,countPagesOfPagination:p,setPage:u}=C(S),a=P(),l=s(A),r=s(U),i=s(B),v=s(T);c.useEffect(()=>{a(b({page:e,per_page:o}))},[a,e,o]);const[d,g]=c.useState(!1),[f,x]=c.useState(null),k=()=>{g(!0)},n=()=>{g(!1)},F=async j=>{try{await a(M(j)),n()}catch(D){m.error(D.message)}},h=!i&&r===0;return t.jsx("div",{className:"bg-favorites-set md:bg-favorites-set-tablet lg:bg-favorites-set-desktop bg-contain bg-no-repeat",children:t.jsx("section",{className:"pb-[80px] mb:pb-[140]",children:t.jsxs("div",{className:"container mx-auto ",children:[v&&m.error("Oops, something went wrong!!"),t.jsx(E,{title:"Favorites"}),i&&t.jsx(y,{isStatic:!0}),!i&&r>0&&t.jsxs(t.Fragment,{children:[t.jsx(w,{data:l,openMyDrinkModal:k,onChooseItem:x}),t.jsx(I,{totalCount:r,itemsPerPage:o,setPage:u,forcePage:e,initialPage:e,countPagesOfPagination:p})]}),h&&t.jsx(L,{description:"You haven't added any favorite cocktails yet"}),d&&t.jsx(N,{isOpen:d,closeFnc:n,content:"Are you sure you want to delete your drink?",children:t.jsx(O,{closeMyDrinkModal:n,handleDeleteClick:()=>F(f),drinkId:l})})]})})})};export{H as default};