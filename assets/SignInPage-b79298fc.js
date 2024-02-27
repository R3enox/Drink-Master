import{u as g,a as f,Q as j,b as w,F as S,r as N,e as v,j as e,L as F,s as o,h as i,V as b}from"./index-c39f448a.js";const I=()=>{const{t:r}=g(),c=f(j),p=w(),m=S(),[a,t]=N.useState(!1),{register:l,handleSubmit:d,formState:{errors:s,dirtyFields:n},reset:u}=v({mode:"onChange"}),x=h=>{p(b(h)),m("/home"),u()};return c?e.jsx(F,{}):e.jsxs("form",{className:"flex flex-col w-[335px] md:w-[400px] lg:w-[400px]",onSubmit:d(x),children:[e.jsx("h1",{className:"form-title",children:r("title.SignInForm")}),e.jsxs("div",{className:"input-container",children:[e.jsxs("div",{className:"relative",children:[e.jsx("input",{className:`input-form ${(s==null?void 0:s.email)&&"error"} ${n.email&&!s.email&&"correct"}`,type:"email",placeholder:r("inputPlaceholder.SignInForm.email"),autoComplete:"off",...l("email",{required:`${r("inputPlaceholder.SignInForm.emailValid")}`,pattern:{value:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,message:`${r("inputPlaceholder.SignInForm.emailPatternError")}`}})}),(s==null?void 0:s.email)&&e.jsxs(e.Fragment,{children:[e.jsx("svg",{className:"absolute w-[20px] h-[20px] top-[18px] right-[18px] fill-error-color stroke-error-color",children:e.jsx("use",{href:o+"#icon-error"})}),e.jsx("p",{className:"errorMsg",children:s.email.message})]}),n.email&&!s.email&&e.jsxs(e.Fragment,{children:[e.jsx("svg",{className:"absolute w-[20px] h-[20px] top-[18px] right-[18px] fill-correct-color stroke-correct-color",children:e.jsx("use",{href:o+"#icon-done"})}),e.jsx("p",{className:"correctMsg",children:r("inputPlaceholder.SignInForm.emailPatternCorrect")})]})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{className:`input-form ${(s==null?void 0:s.password)&&"error"} ${n.password&&!s.password&&"correct"}`,type:a?"text":"password",placeholder:r("inputPlaceholder.SignInForm.password"),autoComplete:"off",...l("password",{required:`${r("inputPlaceholder.SignInForm.passwordValid")}`,minLength:{value:6,message:`${r("inputPlaceholder.SignInForm.passwordPatternErrorLength")}`},pattern:{value:"/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$/i",message:`${r("inputPlaceholder.SignInForm.passwordPatternError")}`}})}),a?e.jsx("svg",{onClick:()=>{t(!a)},className:"absolute w-[20px] h-[20px] top-[18px] right-[18px] fill-none stroke-primary-text-color cursor-pointer  rounded-full",children:e.jsx("use",{href:o+"#icon-eye"})}):e.jsx("svg",{onClick:()=>{t(!a)},className:"absolute w-[20px] h-[20px] top-[18px] right-[18px] fill-none stroke-primary-text-color cursor-pointer  rounded-full",children:e.jsx("use",{href:o+"#icon-eye-off"})}),(s==null?void 0:s.password)&&e.jsx("p",{className:"errorMsg",children:s.password.message}),n.password&&!s.password&&e.jsx("p",{className:"correctMsg",children:r("inputPlaceholder.SignInForm.passwordPatternCorrect")})]})]}),e.jsxs("div",{className:"btn-container",children:[e.jsxs("div",{className:"flex ",children:[e.jsx(i,{to:"https://drink-master-4fm6.onrender.com/api/auth/google",className:"relative btn-google sign-google",type:"submit",children:e.jsx("svg",{className:"w-[28px] h-[28px] fill-none stroke-primary-text-color cursor-pointer  rounded-full",children:e.jsx("use",{href:o+"#icon-google"})})}),e.jsx("button",{className:"btn-up sign-btn",type:"submit",children:r("button.SignInForm.SignIn")})]}),e.jsx(i,{className:"sign-link-btn",to:"/signup",children:r("link.SignInForm.SignUp")})]})]})},k=()=>e.jsx(I,{});export{k as default};
