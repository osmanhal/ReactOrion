import{d_ as n,d$ as s,e2 as t,e7 as o}from"./index-BfC8i6jT.js";import{g as l}from"./dom-Bb9h_pls.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.1
 */const c=":host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:var(--calcite-z-index);inline-size:100%;overflow:hidden;background:var(--calcite-color-border-3)}.bar{z-index:var(--calcite-z-index);background-color:var(--calcite-color-brand)}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) / var(--calcite-internal-duration-factor) * 11 / var(--calcite-internal-duration-factor)) linear infinite}.indeterminate.calcite--rtl{animation-name:looping-progress-bar-ani-rtl}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(600%, 0, 0)}}@keyframes looping-progress-bar-ani-rtl{0%{transform:translate3d(100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(-600%, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}",d=c,m=n(class extends s{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.type="determinate",this.value=0,this.label=void 0,this.text=void 0,this.reversed=!1}render(){const r=this.type==="determinate"?{width:`${this.value*100}%`}:{},a=l(this.el);return t("div",{key:"e8fa0a71d84cf7af5c16fb1d68691488cb9f28b8","aria-label":this.label||this.text,"aria-valuemax":1,"aria-valuemin":0,"aria-valuenow":this.value,role:"progressbar"},t("div",{key:"d779cb380c3aedc8499ce91f6ec935ebc58c3b39",class:"track"},t("div",{key:"88b61799e4c0e15eb9c3493448cf2704fa481e6c",class:{bar:!0,indeterminate:this.type==="indeterminate",[o.rtl]:a==="rtl",reversed:this.reversed},style:r})),this.text?t("div",{class:"text"},this.text):null)}get el(){return this}static get style(){return d}},[1,"calcite-progress",{type:[513],value:[2],label:[1],text:[1],reversed:[516]}]);function f(){if(typeof customElements>"u")return;["calcite-progress"].forEach(e=>{switch(e){case"calcite-progress":customElements.get(e)||customElements.define(e,m);break}})}f();export{m as P,f as d};
