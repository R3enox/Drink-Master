import{k as a,l as i,j as e,b as n,B as m}from"./index-7cc9e19c.js";import{D as c}from"./DrinkImageComponent-8b957946.js";import{P as l}from"./PageTitle-b155a283.js";import{D as p}from"./DrinksList-e99889b1.js";const j=()=>{const{data:t,error:s,isFetching:o}=a(),[r]=i();return e.jsx("section",{className:"pb-[80px] mb:pb-[140]",children:e.jsxs("div",{className:"container mx-auto ",children:[o&&e.jsx(n,{}),s&&m.error("Oops, something went wrong!!"),e.jsx(l,{title:"Favorites"}),t&&t.length>0?e.jsx(p,{data:t,onDelete:r}):e.jsx(c,{description:"You haven't added any favorite cocktails yet"})]})})};export{j as default};
