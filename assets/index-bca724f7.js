var z=Object.defineProperty;var J=(e,t,n)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var j=(e,t,n)=>(J(e,typeof t!="symbol"?t+"":t,n),n),E=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var f=(e,t,n)=>(E(e,t,"read from private field"),n?n.call(e):t.get(e)),d=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)};var p=(e,t,n)=>(E(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var b,H,v,S,y;const u=class u{static has(t){return f(this,y).has(t)}static register(...t){t.forEach(f(this,v))}constructor(){}};b=new WeakSet,H=function({for:t,use:n}){const c=n??t,r=f(this,S).get(t);if(typeof c=="function")try{return new c(...r)}catch{return c(...r)}return c},v=new WeakMap,S=new WeakMap,y=new WeakMap,d(u,b),j(u,"inject",t=>{try{return f(u,y).get(t)}catch{throw`Provider ${t.toString()} não registrado`}}),d(u,v,t=>{var n;f(u,S).set(t.for,(t.add??[]).map(u.inject)),f(u,y).set(t.for,p(n=u,b,H).call(n,t))}),d(u,S,new Map),d(u,y,new Map);let m=u;const X=(e,t)=>{const n=document.createElementNS("http://www.w3.org/2000/svg",e);for(const[c,r]of Object.entries(t??{}))n.setAttribute(c,r.toLocaleString());return n},A=(e,t={})=>{const n=document.createElement(e);for(const c in t){const r=c==="datalist"?"list":c;r==="list"?n.setAttribute(r,t[r].toString()):n[r]=t[r]}return n},q=(e,t)=>e==="svg"?X(e,t):A(e,t);var T,L;let o=(T=class{static fragment(){return A("template").content}static factory(t,n={},...c){const r=Object.entries(n??{}).reduce((a,[i,l])=>{let P=i;i.startsWith("on:")&&(console.log(i),P=i.replace(":",""),console.log(P));const V={[P]:l};return{...a,...V}},n);let s;if(typeof t=="string")s=q(t,r);else{for(const a in r)m.has(a)&&(r[a]=m.inject(a));s=t(r)}return s.append(...c.flatMap(f(this,L))),s}},L=new WeakMap,d(T,L,t=>typeof t=="string"?new Text(t):t),T);function G(e){globalThis.TSX=e}G(o);function $(e){let t=e;return[r=>t=r,()=>t]}class K extends Text{constructor(t){super(t.toLocaleString())}get value(){return isNaN(+this.nodeValue)?this.nodeValue:+this.nodeValue}update(t){this.nodeValue=t.toLocaleString()}}function O(e){const t=document.createElement("section");return t.role="region",t.ariaLive="polite",Object.assign(t,{render:c=>{t.replaceChildren(TSX.factory(e,c))}})}function Q(e){return new K(e)}var h,g;class U{constructor(){d(this,h)}async get(t,{responseType:n,...c}={}){return fetch(t,{...c,method:"GET"}).then(r=>r[n??"json"]())}async post(t,{responseType:n,data:c,...r}){const s=JSON.stringify(c),a=p(this,h,g).call(this,r),i={...r,headers:a,body:s,method:"POST"};return fetch(t,i).then(l=>l[n]())}async put(t,{responseType:n,data:c,...r}){const s=JSON.stringify(c),a=p(this,h,g).call(this,r),i={...r,headers:a,body:s,method:"PUT"};return fetch(t,i).then(l=>l[n]())}async patch(t,{responseType:n,data:c,...r}){const s=JSON.stringify(c),a=p(this,h,g).call(this,r),i={...r,headers:a,body:s,method:"PATCH"};return fetch(t,i).then(l=>l[n]())}async delete(t,{responseType:n,data:c,...r}){const s=JSON.stringify(c),a=p(this,h,g).call(this,r),i={...r,headers:a,body:s,method:"DELETE"};return fetch(t,i).then(l=>l[n]())}}h=new WeakSet,g=function(t){const n=new Headers;n.append("Content-Type","application/json");for(const[c,r]of Object.entries(t.headers??{}))n.set(c,r);return n};class w{}function W(){const e=O(t=>o.factory("h1",null,t.title));return console.log(e),setTimeout(()=>e.render({title:"Título"}),1e3),o.factory(o.fragment,null,e)}function N(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function C(e){return e.toLowerCase()}function Y(e){return t=>Object.values(t).filter(n=>typeof n=="string").map(C).map(N).some(n=>{const c=C(N(e));return n.indexOf(c)>-1})}const k=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),R=e=>t=>n=>{t(n[e])};class Z{constructor(t,n,c={}){this.text=t,this.href=n,this.props=c}}function I({path:e,title:t}){return new Z(t,[...e].join(""))}function D(){const e=Q(""),t=n=>{e.update(n.value)};return o.factory(o.fragment,null,o.factory("h2",null,"Home"),o.factory("input",{name:"yourname",placeholder:"Qual seu nome?","on:input":R("target")(t)}),o.factory("h3",null,"Seu nome é: ",e))}class B{}class F{}class _{constructor(t){this.http=t}getStates(){return this.http.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")}}class tt{constructor(t){this.http=t}getProducts(){return this.http.get("https://dummyjson.com/products")}}m.register({for:w,use:U},{for:B,use:_,add:[w]},{for:F,use:tt,add:[w]});function M(e){return m.inject(e)}function et({products:e}){return o.factory("table",null,o.factory("tbody",null,e.map(t=>o.factory("tr",null,o.factory("td",null,t.id),o.factory("td",null,t.title),o.factory("td",null,k.format(t.price))))))}const x={limit:10,skip:0,total:0,products:[]};function nt(){const e=M(F),[t,n]=$(x),c=O(et);e.getProducts().then(t).then(c.render);const r=s=>{const a=n().products.filter(Y(s.value));c.render({...x,products:a})};return o.factory(o.fragment,null,o.factory("h2",null,"Produtos"),o.factory("input",{type:"search",placeholder:"Busque por um item","on:input":R("target")(r)}),c)}function rt(e){return o.factory("datalist",{id:e.id},e.options.map(t=>o.factory("option",{value:t.text},t.value)))}const ot=e=>e.map(t=>({text:t.nome,value:`${t.id}`}));function ct(){const e=M(B),t="stateList",n=O(rt);return n.render({id:"stateList",options:[]}),e.getStates().then(ot).then(c=>n.render({options:c,id:"stateList"})),o.factory("form",null,o.factory("label",null,"Estado"),o.factory("input",{type:"search",list:t,name:"state"}),n)}function st(e){return o.factory("footer",null,o.factory("p",null,e.year," © ",e.company))}function at(e){return o.factory("header",null,o.factory("a",{href:"/"},o.factory("h1",null,e.title)))}function it(e,t){return e.find(n=>n.path===t)}function ut(e){const t=document.createElement("main");t.role="contentinfo";function n(r){return it(e.routes,r)??e.routes.shift()}function c(r){const s=n(r);if(s){for(;t.firstChild;)t.removeChild(t.firstChild);typeof s.page=="function"?t.appendChild(s.page()):t.appendChild(s.page),document.title=s.title}}return navigation.onnavigate=r=>{r.canIntercept&&(r.hashChange||r.downloadRequest||r.intercept({async handler(){c(r.destination.url.replace(location.origin,""))}}))},c(location.pathname),o.factory(o.fragment,null,t)}function lt(e){return o.factory("nav",null,o.factory("ul",null,e.links.map(t=>o.factory("li",null,o.factory("a",{href:t.href,...t.props},t.text)))))}function ft(e){const t=new Date().getFullYear(),n=e.routes.map(I);return o.factory(o.fragment,null,o.factory(at,{title:"patterns"}),o.factory(lt,{links:n}),o.factory(ut,{routes:e.routes}),o.factory(st,{company:"tsxssr",year:t}))}function dt(){const e=[{path:"/",title:"Página inicial",page:()=>o.factory(D,null)},{path:"/states",title:"States",page:()=>o.factory(ct,null)},{path:"/blog",title:"Blog",page:()=>o.factory(W,{http:!0})},{path:"/produtos",title:"Produtos",page:()=>o.factory(nt,null)}];return o.factory(ft,{routes:e})}appRoot.append(dt());