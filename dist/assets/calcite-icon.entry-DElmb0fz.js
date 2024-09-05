import{b as m,d as h,H as g,i as v,e as x,k as I}from"./index-BfC8i6jT.js";import{g as y,t as z}from"./dom-0dfcce02-D_EjFIg7.js";import{c as C}from"./observers-aea7721f-C3bX3_Ot.js";import"./guid-c5ea645c-C-axntQX.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.1
 */const D={icon:"icon",flipRtl:"flip-rtl"},p={},d={},f={s:16,m:24,l:32};function b({icon:t,scale:e}){const n=f[e],i=N(t),s=i.charAt(i.length-1)==="F";return`${s?i.substring(0,i.length-1):i}${n}${s?"F":""}`}async function k(t){const e=b(t),n=u(e);if(n)return n;d[e]||(d[e]=fetch(I(`./assets/icon/${e}.json`)).then(s=>s.json()).catch(()=>(console.error(`"${e}" is not a valid calcite-ui-icon name`),"")));const i=await d[e];return p[e]=i,i}function w(t){return u(b(t))}function u(t){return p[t]}function N(t){const e=!isNaN(Number(t.charAt(0))),n=t.split("-");if(n.length>0){const s=/[a-z]/i;t=n.map((a,o)=>a.replace(s,function(l,c){return o===0&&c===0?l:l.toUpperCase()})).join("")}return e?`i${t}`:t}const P=":host{display:inline-flex;color:var(--calcite-icon-color, var(--calcite-ui-icon-color, currentColor))}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}",O=P,$=class{constructor(t){m(this,t),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.visible||this.waitUntilVisible(()=>{this.visible=!0,this.loadIconPathData()})}disconnectedCallback(){var t;(t=this.intersectionObserver)==null||t.disconnect(),this.intersectionObserver=null}render(){const{el:t,flipRtl:e,pathData:n,scale:i,textLabel:s}=this,a=y(t),o=f[i],r=!!s,l=[].concat(n||"");return h(g,{key:"41c9d3006a5887061fdb2144102447b2f490eb72","aria-hidden":z(!r),"aria-label":r?s:null,role:r?"img":null},h("svg",{key:"9fc84ba4eac40fc822babbfe276b2add5ee1c952","aria-hidden":"true",class:{[D.flipRtl]:a==="rtl"&&e,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${o} ${o}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},l.map(c=>typeof c=="string"?h("path",{d:c}):h("path",{d:c.d,opacity:"opacity"in c?c.opacity:1}))))}async loadIconPathData(){const{icon:t,scale:e,visible:n}=this;if(!v()||!t||!n)return;const i={icon:t,scale:e},s=w(i)||await k(i);t===this.icon&&(this.pathData=s)}waitUntilVisible(t){if(this.intersectionObserver=C("intersection",e=>{e.forEach(n=>{n.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())})},{rootMargin:"50px"}),!this.intersectionObserver){t();return}this.intersectionObserver.observe(this.el)}static get assetsDirs(){return["assets"]}get el(){return x(this)}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}};$.style=O;export{$ as calcite_icon};
