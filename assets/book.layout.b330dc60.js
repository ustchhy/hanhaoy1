import{v,x as b,b as c,d as h,q as f,o as _,y as x,w as s,r as m,z as g,u as w,A as y,c as P,l as e,t as a,m as o}from"./vendor.01c5a9aa.js";import{u as S}from"./_default.page.client.ts.41ad7928.js";v();R();b();let C=!1;function R(){p(),z(p),k(()=>C)}function p(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function z(l){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&l()})}function k(l){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&l()})}function A(){const l=S();return{origin:c(()=>{var t;return((t=l.urlParsedServer)==null?void 0:t.origin)||l.urlParsed.origin}),pathname:c(()=>{var r;const t=((r=l.urlParsedServer)==null?void 0:r.pathname)||l.urlParsed.pathname;return t!=="/"&&t.endsWith("/")?t.slice(0,t.length-1):t}),search:c(()=>{var t;return((t=l.urlParsedServer)==null?void 0:t.search)||l.urlParsed.search}),hash:c(()=>l.urlParsed.hash)}}const i=h({props:{href:null,activeClass:null},setup(l){const{pathname:t}=A();return(r,d)=>{const u=f("a-router");return _(),x(u,{href:l.href,class:g({[l.activeClass||"text-blue-700"]:w(t)==l.href})},{default:s(()=>[m(r.$slots,"default")]),_:3},8,["href","class"])}}}),B={class:"absolute inset-0 grid grid-cols-[auto,1fr] grid-rows-[auto,1fr]"},N=o(" VPage "),V=e("hr",{class:"mt-4"},null,-1),j={class:"mt-6"},E={class:"space-y-4"},I=o(" Introduction "),q=o(" Installation "),U={class:"ml-4 mt-2 space-y-1"},W=o(" Requirements "),$=o(" Install "),D=o(" Run development server "),F=o(" Getting Started "),H={class:"ml-4 mt-2 space-y-1"},L=o(" Start from an example "),O=o(" Write a new page "),G=o(" Customize design "),M=o(" Publish website "),T=e("div",{class:"font-semibold"},"Advanced",-1),J={class:"ml-4 mt-2 space-y-1"},K=o(" Architecture "),Q=o(" Router "),X=o(" Organize a large website "),Y=o(" SEO "),Z=o(" Data fetching "),ee=e("a",{class:"h-6",href:"https://github.com/lem0nle/vpage",target:"_blank",rel:"noopener"},[e("svg",{class:"h-6 text-gray-400 fill-current","aria-hidden":"true",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})])],-1),te={class:"col-start-2 overflow-scroll"},se={class:"prose mx-auto p-6"},le=e("footer",{class:"h-16"},null,-1),ne=h({setup(l){const t=y(!0),r=()=>t.value=!t.value;return(d,u)=>{const n=f("a-router");return _(),P("article",B,[e("aside",{class:g(["row-span-2 overflow-scroll bg-gray-50 py-6",{"w-64 px-6 md:w-0 md:px-0":!t.value,"w-0 px-0 md:w-64 md:px-6":t.value}])},[a(n,{href:"/",class:"flex text-lg font-serif font-bold justify-center"},{default:s(()=>[N]),_:1}),V,e("nav",j,[e("ul",E,[e("li",null,[a(i,{class:"font-semibold",href:"/docs"},{default:s(()=>[I]),_:1})]),e("li",null,[a(i,{class:"font-semibold",href:"/docs/installation"},{default:s(()=>[q]),_:1}),e("ul",U,[e("li",null,[a(n,{href:"/docs/installation#requirements"},{default:s(()=>[W]),_:1})]),e("li",null,[a(n,{href:"/docs/installation#install"},{default:s(()=>[$]),_:1})]),e("li",null,[a(n,{href:"/docs/installation#run-development-server"},{default:s(()=>[D]),_:1})])])]),e("li",null,[a(i,{class:"font-semibold",href:"/docs/getting-started"},{default:s(()=>[F]),_:1}),e("ul",H,[e("li",null,[a(n,{href:"/docs/getting-started#start-from-an-example"},{default:s(()=>[L]),_:1})]),e("li",null,[a(n,{href:"/docs/getting-started#write-a-new-page"},{default:s(()=>[O]),_:1})]),e("li",null,[a(n,{href:"/docs/getting-started#customize-design"},{default:s(()=>[G]),_:1})]),e("li",null,[a(n,{href:"/docs/getting-started#publish-website"},{default:s(()=>[M]),_:1})])])]),e("li",null,[T,e("ul",J,[e("li",null,[a(i,{href:"/docs/advanced/architecture","active-class":"text-blue-700 font-medium"},{default:s(()=>[K]),_:1})]),e("li",null,[a(i,{href:"/docs/advanced/router","active-class":"text-blue-700 font-medium"},{default:s(()=>[Q]),_:1})]),e("li",null,[a(i,{href:"/docs/advanced/organize","active-class":"text-blue-700 font-medium"},{default:s(()=>[X]),_:1})]),e("li",null,[a(i,{href:"/docs/advanced/seo","active-class":"text-blue-700 font-medium"},{default:s(()=>[Y]),_:1})]),e("li",null,[a(i,{href:"/docs/advanced/data","active-class":"text-blue-700 font-medium"},{default:s(()=>[Z]),_:1})])])])])])],2),e("header",{class:"col-start-2 px-6 py-4 flex items-center justify-between"},[e("button",{class:"-ml-2.5 text-2xl font-medium text-gray-400 px-3 py-1 rounded hover:bg-gray-100 focus:outline-none",onClick:r}," \u2261 "),ee]),e("main",te,[e("article",se,[m(d.$slots,"default")]),le])])}}});export{ne as default};
