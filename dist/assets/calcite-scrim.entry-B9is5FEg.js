import{b as c,d as t,e as r}from"./index-BfC8i6jT.js";import{c as o,d as l}from"./locale-4ce3c6b2-fiHvNr9A.js";import{u as d,c as h,s as f,d as m}from"./t9n-249fa143-CE2fk3Zh.js";import{c as g}from"./observers-aea7721f-C3bX3_Ot.js";import{z as u}from"./dom-0dfcce02-D_EjFIg7.js";import"./key-6b945008-DuBxtzvS.js";import"./guid-c5ea645c-C-axntQX.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.1
 */const i={scrim:"scrim",content:"content"},a={s:72,l:480},b=":host{--calcite-scrim-background:var(--calcite-color-transparent-scrim);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}",p=b,v=class{constructor(e){c(this,e),this.resizeObserver=g("resize",()=>this.handleResize()),this.handleDefaultSlotChange=s=>{this.hasContent=u(s)},this.storeLoaderEl=s=>{this.loaderEl=s,this.handleResize()},this.loading=!1,this.messages=void 0,this.messageOverrides=void 0,this.loaderScale=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasContent=!1}onMessagesChange(){}effectiveLocaleChange(){d(this,this.effectiveLocale)}connectedCallback(){var e;o(this),h(this),(e=this.resizeObserver)==null||e.observe(this.el)}async componentWillLoad(){await f(this)}disconnectedCallback(){var e;l(this),m(this),(e=this.resizeObserver)==null||e.disconnect()}render(){const{hasContent:e,loading:s,messages:n}=this;return t("div",{key:"e31839948c0689b6daeac22f3b2471fb049c834b",class:i.scrim},s?t("calcite-loader",{label:n.loading,ref:this.storeLoaderEl,scale:this.loaderScale}):null,t("div",{key:"500b2dcbdcb6c3287ea613fd0f1357de7f3ff347",class:i.content,hidden:!e},t("slot",{key:"eea29ac4a454cf3cd51933a73911b70114ab6f77",onSlotchange:this.handleDefaultSlotChange})))}getScale(e){return e<a.s?"s":e>=a.l?"l":"m"}handleResize(){const{loaderEl:e,el:s}=this;e&&(this.loaderScale=this.getScale(Math.min(s.clientHeight,s.clientWidth)??0))}static get assetsDirs(){return["assets"]}get el(){return r(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};v.style=p;export{v as calcite_scrim};
