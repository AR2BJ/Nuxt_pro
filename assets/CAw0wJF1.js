import{_ as i,a as l}from"./CWJnn-Gz.js";import{_ as m}from"./xErmtcRA.js";import{q as _,s as u,o as p,c as x,a as e,b as o,w as c,d as r}from"./DfgitDte.js";const h={class:"max-w-screen-xl mx-auto"},g=e("div",{class:"mt-16 text-center"},[e("h1",{class:"text-4xl lg:text-5xl font-bold lg:tracking-tight"},"Log in"),e("p",{class:"text-lg mt-4 text-slate-600"},"Log in to our website")],-1),y={class:"grid gap-10 mx-auto max-w-md mt-16"},b={action:"https://api.web3forms.com/submit",method:"POST",id:"form",class:"needs-validation",novalidate:""},f=e("div",{class:"mb-5"},[e("input",{id:"email_address",type:"email",placeholder:"Email Address",name:"email",required:"",class:"w-full px-4 py-3 border-2 placeholder:text-gray-500 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"})],-1),v={class:"mb-5 relative"},w=e("input",{id:"password",type:"password",placeholder:"Password",name:"Password",required:"",class:"w-full px-4 py-3 border-2 placeholder:text-gray-500 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"},null,-1),k={class:"eyeclose absolute right-5 top-1/2 -translate-y-1/2"},L={class:"eye hidden absolute right-5 top-1/2 -translate-y-1/2"},q={class:"mb-5 flex flex-row justify-between items-center"},E=e("div",{class:"flex flex-row justify-start items-center"},[e("input",{id:"check",type:"checkbox",name:"check",required:"",class:"border-2 outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 accent-black"}),e("label",{for:"check",class:"ml-2 text-sm"},"Remember me")],-1),S=e("button",{class:"rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-6 py-3 bg-black text-white hover:bg-slate-900 border-2 border-transparent",type:"submit"}," Log in ",-1),N={class:"mt-7 text-center text-sm"},C=_({__name:"index",setup(P){return u(()=>{const n=document.querySelector("#password"),s=document.querySelector("div.eye"),t=document.querySelector("div.eyeclose");t.addEventListener("click",()=>{t.classList.add("hidden"),s.classList.remove("hidden"),n.type="text"}),s.addEventListener("click",()=>{s.classList.add("hidden"),t.classList.remove("hidden"),n.type="password"})}),(n,s)=>{const t=i,d=l,a=m;return p(),x("div",h,[g,e("div",y,[e("div",null,[e("form",b,[f,e("div",v,[w,e("div",k,[o(t)]),e("div",L,[o(d)])]),e("div",q,[E,o(a,{class:"text-sm hover:text-slate-500 transition",to:"#"},{default:c(()=>[r("Forget Password ?")]),_:1})]),S]),e("p",N,[r(" Don't have an account? "),o(a,{class:"font-bold hover:text-slate-500 transition",to:"/signup"},{default:c(()=>[r("Sign up")]),_:1})])])])])}}});export{C as default};