import{l as t,m as i,j as s}from"./index-a6090a39.js";import{D as o}from"./DrinksList-1a307ce4.js";import{P as n}from"./PageTitle-d65dd466.js";import{D as a}from"./DrinkImageComponent-7eb007e7.js";import"./Buttons-e59038b6.js";const y=()=>{const{data:e,error:m,isLoading:c,isFetching:l,isError:d}=t(),[r]=i();return s.jsx("section",{className:"pb-[80px]",children:s.jsxs("div",{className:"container mx-auto",children:[s.jsx(n,{title:"My drinks",className:"mb-[40] mb:mb-[60]"}),e&&e.length>0?s.jsx(o,{data:e,onDelete:r}):s.jsx(a,{description:"You don't have your own drinks yet"})]})})};export{y as default};