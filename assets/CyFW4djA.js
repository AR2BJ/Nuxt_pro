import{_ as c,a as i}from"./CWJnn-Gz.js";import{_ as p}from"./xErmtcRA.js";import{q as u,s as _,o as m,c as y,a as e,b as l,d as n,w as b}from"./DfgitDte.js";const g={class:"max-w-screen-xl mx-auto"},h=e("div",{class:"mt-16 text-center"},[e("h1",{class:"text-4xl lg:text-5xl font-bold lg:tracking-tight"},"Sign up"),e("p",{class:"text-lg mt-4 text-slate-600"},"Sign up to our website")],-1),f={class:"grid gap-10 mx-auto max-w-md mt-16"},x={action:"https://api.web3forms.com/submit",method:"POST",id:"form",class:"needs-validation",novalidate:""},v=e("div",{class:"mb-5"},[e("input",{type:"text",placeholder:"Full Name",required:"",class:"w-full px-4 py-3 border-2 placeholder:text-gray-500 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100",name:"name"})],-1),w=e("div",{class:"mb-5"},[e("input",{id:"email_address",type:"email",placeholder:"Email Address",name:"email",required:"",class:"w-full px-4 py-3 border-2 placeholder:text-gray-500 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"})],-1),L={class:"mb-5 relative"},q=e("input",{id:"password",type:"password",placeholder:"Password",name:"Password",required:"",class:"w-full px-4 py-3 border-2 placeholder:text-gray-500 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"},null,-1),E={class:"eyeclose absolute right-5 top-1/2 -translate-y-1/2"},S={class:"eye hidden absolute right-5 top-1/2 -translate-y-1/2"},k={class:"mb-5 relative"},N=e("input",{class:"w-full px-4 py-3 border-2 placeholder:text-gray-500 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100",id:"re-password",type:"password",placeholder:"Confirm password",name:"Password",required:""},null,-1),A={class:"eyeclose absolute right-5 top-1/2 -translate-y-1/2"},P={class:"eye hidden absolute right-5 top-1/2 -translate-y-1/2"},B=e("button",{class:"rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-6 py-3 bg-black text-white hover:bg-slate-900 border-2 border-transparent",type:"submit"}," Sign up ",-1),C={class:"mt-7 text-center text-sm"},M=u({__name:"index",setup(V){return _(()=>{const s=document.querySelector("#password"),t=document.querySelector("#re-password"),o=document.querySelectorAll("div.eye"),a=document.querySelectorAll("div.eyeclose");a.forEach((r,d)=>{r.addEventListener("click",()=>{r.classList.add("hidden"),o[d].classList.remove("hidden"),d===0?s.type="text":t.type="text"})}),o.forEach((r,d)=>{r.addEventListener("click",()=>{r.classList.add("hidden"),a[d].classList.remove("hidden"),d===0?s.type="password":t.type="password"})}),t.addEventListener("input",()=>{t.value===s.value?s.classList.contains("border-rose-500")?(s.classList.replace("border-rose-500","border-teal-500"),t.classList.replace("border-rose-500","border-teal-500")):(s.classList.replace("border-gray-300","border-teal-500"),t.classList.replace("border-gray-300","border-teal-500")):s.classList.contains("border-gray-300")?(s.classList.replace("border-gray-300","border-rose-500"),t.classList.replace("border-gray-300","border-rose-500")):(s.classList.replace("border-teal-500","border-rose-500"),t.classList.replace("border-teal-500","border-rose-500"))})}),(s,t)=>{const o=c,a=i,r=p;return m(),y("div",g,[h,e("div",f,[e("div",null,[e("form",x,[v,w,e("div",L,[q,e("div",E,[l(o)]),e("div",S,[l(a)])]),e("div",k,[N,e("div",A,[l(o)]),e("div",P,[l(a)])]),B]),e("p",C,[n(" Already have an account? "),l(r,{class:"font-bold hover:text-slate-500 transition",to:"/login"},{default:b(()=>[n("Log in")]),_:1})])])])])}}});export{M as default};