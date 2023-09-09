var V=Object.defineProperty;var z=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var j=(e,t,n)=>(z(e,typeof t!="symbol"?t+"":t,n),n),E=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var f=(e,t,n)=>(E(e,t,"read from private field"),n?n.call(e):t.get(e)),d=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)};var y=(e,t,n)=>(E(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var v,H,L,S,m;const u=class u{static has(t){return f(this,m).has(t)}static register(...t){t.forEach(f(this,L))}constructor(){}};v=new WeakSet,H=function({for:t,use:n}){const c=n??t,r=f(this,S).get(t);if(typeof c=="function")try{return new c(...r)}catch{return c(...r)}return c},L=new WeakMap,S=new WeakMap,m=new WeakMap,d(u,v),j(u,"inject",t=>{try{return f(u,m).get(t)}catch{throw`Provider ${t.toString()} não registrado`}}),d(u,L,t=>{var n;f(u,S).set(t.for,(t.add??[]).map(u.inject)),f(u,m).set(t.for,y(n=u,v,H).call(n,t))}),d(u,S,new Map),d(u,m,new Map);let p=u;const J=(e,t)=>{const n=document.createElementNS("http://www.w3.org/2000/svg",e);for(const[c,r]of Object.entries(t??{}))n.setAttribute(c,r.toLocaleString());return n},$=(e,t={})=>{const n=document.createElement(e);for(const c in t){const r=c==="datalist"?"list":c;r==="list"?n.setAttribute(r,t[r].toString()):n[r]=t[r]}return n},X=(e,t)=>e==="svg"?J(e,t):$(e,t);var O,w;let o=(O=class{static fragment(){return $("template").content}static factory(t,n={},...c){const r=Object.entries(n??{}).reduce((a,[i,l])=>{let P=i;i.startsWith("on:")&&(console.log(i),P=i.replace(":",""),console.log(P));const M={[P]:l};return{...a,...M}},n);let s;if(typeof t=="string")s=X(t,r);else{for(const a in r)p.has(a)&&(r[a]=p.inject(a));s=t(r)}return s.append(...c.flatMap(f(this,w))),s}},w=new WeakMap,d(O,w,t=>typeof t=="string"?new Text(t):t),O);function q(e){globalThis.TSX=e}q(o);function G(e){let t=e;return[r=>t=r,()=>t]}class K extends Text{constructor(t){super(t.toLocaleString())}get value(){return isNaN(+this.nodeValue)?this.nodeValue:+this.nodeValue}update(t){this.nodeValue=t.toLocaleString()}}const Q=(e,t={},...n)=>{const c=Object.assign(document.createElement(e),t);return c.append(...n),c};function b(e){const t=Q("div");return t.role="region",t.ariaLive="polite",Object.assign(t,{render:c=>{t.replaceChildren(TSX.factory(e,c))}})}function U(e){return new K(e)}var h,g;class W{constructor(){d(this,h)}async get(t,{responseType:n,...c}={}){return fetch(t,{...c,method:"GET"}).then(r=>r[n??"json"]())}async post(t,{responseType:n,data:c,...r}){const s=JSON.stringify(c),a=y(this,h,g).call(this,r),i={...r,headers:a,body:s,method:"POST"};return fetch(t,i).then(l=>l[n]())}async put(t,{responseType:n,data:c,...r}){const s=JSON.stringify(c),a=y(this,h,g).call(this,r),i={...r,headers:a,body:s,method:"PUT"};return fetch(t,i).then(l=>l[n]())}async patch(t,{responseType:n,data:c,...r}){const s=JSON.stringify(c),a=y(this,h,g).call(this,r),i={...r,headers:a,body:s,method:"PATCH"};return fetch(t,i).then(l=>l[n]())}async delete(t,{responseType:n,data:c,...r}){const s=JSON.stringify(c),a=y(this,h,g).call(this,r),i={...r,headers:a,body:s,method:"DELETE"};return fetch(t,i).then(l=>l[n]())}}h=new WeakSet,g=function(t){const n=new Headers;n.append("Content-Type","application/json");for(const[c,r]of Object.entries(t.headers??{}))n.set(c,r);return n};class T{}function Y(e){return o.factory("datalist",{id:e.id},e.options.map(t=>o.factory("option",{value:t.text},t.value)))}function k(e){return e.active?o.factory("div",{className:"loader"}):o.factory(o.fragment,null)}function Z(){const t=b(c=>o.factory("h1",null,c.title)),n=b(k);return n.render({active:!0}),setTimeout(()=>{n.render({active:!1}),t.render({title:"Título"})},2e3),o.factory(o.fragment,null,n,t)}function N(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function C(e){return e.toLowerCase()}function I(e){return t=>Object.values(t).filter(n=>typeof n=="string").map(C).map(N).some(n=>{const c=C(N(e));return n.indexOf(c)>-1})}const D=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),A=e=>t=>n=>{t(n[e])};class _{constructor(t,n,c={}){this.text=t,this.href=n,this.props=c}}function tt({path:e,title:t}){return new _(t,[...e].join(""))}function et(){const e=U(""),t=n=>{e.update(n.value)};return o.factory(o.fragment,null,o.factory("h2",null,"Home"),o.factory("h3",null,"Seu nome é: ",e),o.factory("input",{name:"yourname",placeholder:"Qual seu nome?","on:input":A("target")(t)}))}class F{}class R{}class nt{constructor(t){this.http=t}getStates(){return this.http.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")}}class rt{constructor(t){this.http=t}getProducts(){return this.http.get("https://dummyjson.com/products")}}p.register({for:"base",use:"/tsxssr"},{for:T,use:W},{for:F,use:nt,add:[T]},{for:R,use:rt,add:[T]});function B(e){return p.inject(e)}function ot({products:e}){return o.factory("table",null,o.factory("tbody",null,e.map(t=>o.factory("tr",null,o.factory("td",null,t.id),o.factory("td",null,t.title),o.factory("td",null,D.format(t.price))))))}const x={limit:10,skip:0,total:0,products:[]};function ct(){const e=B(R),[t,n]=G(x),c=b(ot);e.getProducts().then(t).then(c.render);const r=s=>{const a=n().products.filter(I(s.value));c.render({...x,products:a})};return o.factory(o.fragment,null,o.factory("h2",null,"Produtos"),o.factory("input",{type:"search",placeholder:"Busque por um item","on:input":A("target")(r)}),c)}const st=e=>e.map(t=>({text:t.nome,value:`${t.id}`}));function at(){const e=B(F),t="stateList",n=b(Y);return n.render({id:"stateList",options:[]}),e.getStates().then(st).then(c=>n.render({options:c,id:"stateList"})),o.factory("form",null,o.factory("label",null,"Estado"),o.factory("input",{type:"search",list:t,name:"state"}),n)}function it(e){return o.factory("footer",null,o.factory("p",null,e.year," © ",e.company))}function ut(e){return o.factory("header",null,o.factory("a",{href:"/"},o.factory("h1",null,e.title)))}function lt(e,t){return e.find(n=>n.path===t)}function ft(e){const t=document.createElement("main");t.role="contentinfo";function n(r){return lt(e.routes,r)??e.routes.shift()}function c(r){const s=n(r);if(console.log(s),s){for(;t.firstChild;)t.removeChild(t.firstChild);typeof s.page=="function"?t.appendChild(s.page()):t.appendChild(s.page),document.title=s.title}}return navigation.onnavigate=r=>{r.canIntercept&&(r.hashChange||r.downloadRequest||r.intercept({async handler(){c(r.destination.url.replace(location.origin,""))}}))},c(location.pathname),o.factory(o.fragment,null,t)}function dt(e){return o.factory("nav",null,o.factory("ul",null,e.links.map(t=>o.factory("li",null,o.factory("a",{href:t.href,...t.props},t.text)))))}function ht(e){const t=new Date().getFullYear(),n=e.routes.map(tt);return o.factory(o.fragment,null,o.factory(ut,{title:"tsx & native web & patterns"}),o.factory(dt,{links:n}),o.factory(ft,{routes:e.routes}),o.factory(it,{company:"tsxssr",year:t}))}function pt(){const e=p.inject("base"),t=[{path:`${e}/`,title:"Página inicial",page:()=>o.factory(et,null)},{path:`${e}/states`,title:"States",page:()=>o.factory(at,null)},{path:`${e}/blog`,title:"Blog",page:()=>o.factory(Z,{http:!0})},{path:`${e}/produtos`,title:"Produtos",page:()=>o.factory(ct,null)}];return o.factory(ht,{routes:t})}appRoot.append(pt());
