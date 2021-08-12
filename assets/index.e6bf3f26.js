import{d as e,r as t,o as a,c as s,a as n,b as l,B as o,_ as r,e as u,f as i,g as d,M as c,h as p,i as m,j as f,k as _,p as h,l as v,m as g,n as b,q as y,s as k,w as L,F as w,t as E,L as A,u as S,v as O,x as T,y as j,z as x}from"./vendor.bb27132a.js";var z=e({name:"App"});let P;z.render=function(e,n,l,o,r,u){const i=t("router-view");return a(),s(i)};const C={},D=function(e,t){if(!t||0===t.length)return e();if(void 0===P){const e=document.createElement("link").relList;P=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/ganhuo-vue3/${e}`)in C)return;C[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":P,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))},I=[{path:"/",name:"Landing",component:()=>D((()=>import("./Landing.d92ede52.js")),["assets/Landing.d92ede52.js","assets/Landing.aa8de31c.css","assets/vendor.bb27132a.js","assets/vendor.fb47f75a.css"])},{path:"/ts",name:"TS",component:()=>D((()=>import("./TS.346491e0.js")),["assets/TS.346491e0.js","assets/vendor.bb27132a.js","assets/vendor.fb47f75a.css"])},{path:"/about",name:"About",component:()=>D((()=>import("./About.64f18c41.js")),["assets/About.64f18c41.js","assets/vendor.bb27132a.js","assets/vendor.fb47f75a.css"])}],$=n({history:l(),routes:I});h("data-v-199700d0");const B={class:"header"},H=[y("path",{d:"M66.488889 211.781818h891.022222c28.198788 0 50.980202-22.238384 50.980202-49.648485 0-27.397172-22.768485-49.648485-50.980202-49.648485H66.488889C38.341818 112.484848 15.508687 134.723232 15.508687 162.133333s22.833131 49.648485 50.980202 49.648485z m891.009293 248.242424H66.488889C38.277172 460.024242 15.508687 482.262626 15.508687 509.672727s22.768485 49.648485 50.980202 49.648485h891.022222c28.198788 0 50.980202-22.238384 50.980202-49.648485-0.012929-27.410101-22.923636-49.648485-50.993131-49.648485z m0 351.63798H66.488889c-28.134141 0-50.980202 22.238384-50.980202 49.648485s22.833131 49.648485 50.980202 49.648485h891.022222c28.198788 0 50.980202-22.238384 50.980202-49.648485-0.012929-27.397172-22.781414-49.648485-50.993131-49.648485z m0 0","p-id":"2073",fill:"#d4237a"},null,-1)],R=E(" 集中营 "),V=E(" 首页 "),q=E(" 妹纸 "),F=E("干货"),M=E("Option 1"),U=E("Option 2"),W=E(" 关于 "),G=y("p",null,"Some contents...",-1),J=y("p",null,"Some contents...",-1),K=y("p",null,"Some contents...",-1);v();var N=e({setup(e){const s=g(!1),n=e=>{console.log("visible",e)},l=()=>{s.value=!0};return g(["mail"]),(e,o)=>{const r=t("router-link"),u=p,i=m,_=f,h=c,v=d;return a(),b(w,null,[y("div",B,[y("div",{class:"more-icon"},[y("svg",{onClick:l,t:"1628776862772",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2072",width:"24",height:"24"},H)]),k(r,{class:"logo",to:{name:"Landing"},style:{"margin-right":"30px"}},{default:L((()=>[R])),_:1}),k(h,{mode:"horizontal",theme:"dark"},{default:L((()=>[k(u,{key:"mail"},{default:L((()=>[k(r,{to:{name:"Landing"}},{default:L((()=>[V])),_:1})])),_:1}),k(u,{key:"app"},{default:L((()=>[k(r,{to:{name:"TS"}},{default:L((()=>[q])),_:1})])),_:1}),k(_,null,{title:L((()=>[F])),default:L((()=>[k(i,null,{default:L((()=>[k(u,{key:"setting:1"},{default:L((()=>[M])),_:1}),k(u,{key:"setting:2"},{default:L((()=>[U])),_:1})])),_:1})])),_:1}),k(u,{key:"alipay"},{default:L((()=>[k(r,{to:{name:"About"}},{default:L((()=>[W])),_:1})])),_:1})])),_:1})]),k(v,{title:"Basic Drawer",placement:"left",closable:!1,visible:s.value,"onUpdate:visible":o[0]||(o[0]=e=>s.value=e),"after-visible-change":n},{default:L((()=>[G,J,K])),_:1},8,["visible"])],64)}}});N.__scopeId="data-v-199700d0";const Q=E(" Footer ");var X=e({setup:e=>(e,t)=>{const n=O,l=T,o=j,r=A;return a(),s(r,null,{default:L((()=>[k(n,null,{default:L((()=>[k(N)])),_:1}),k(l,{style:{"background-color":"#fff"}},{default:L((()=>[S(e.$slots,"default")])),_:3}),k(o,{style:{"border-top":"1px solid #efefef"}},{default:L((()=>[Q])),_:1})])),_:3})}});let Y=x(z);var Z;Y.use($),Y.component("AppLayout",X),(Z=Y).use(o),Z.use(r),Z.use(u),Z.use(i),Z.use(d),Z.use(c),Z.use(p),Z.use(m),Z.use(f),Z.use(_),Y.mount("#app");