import{d_ as a,d$ as r,e6 as s,e2 as c}from"./index-BfC8i6jT.js";import{c as l}from"./observers-BDfujgVA.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.1
 */const n={accordion:"accordion",transparent:"accordion--transparent"},d=":host{position:relative;display:block;max-inline-size:100%;line-height:1.5rem}.accordion{border-width:1px;border-block-end-width:0px;border-style:solid;border-color:var(--calcite-accordion-border-color, var(--calcite-color-border-2));background-color:var(--calcite-accordion-background-color, var(--calcite-color-foreground-1))}.accordion--transparent{--calcite-accordion-border-color:transparent;border-color:var(--calcite-color-transparent);background-color:var(--calcite-color-transparent)}:host([scale=s]){--calcite-internal-accordion-item-spacing-unit:0.25rem;--calcite-internal-accordion-icon-margin:0.5rem;--calcite-internal-accordion-item-padding:var(--calcite-internal-accordion-item-spacing-unit) 0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-internal-accordion-item-spacing-unit:0.5rem;--calcite-internal-accordion-icon-margin:0.75rem;--calcite-internal-accordion-item-padding:var(--calcite-internal-accordion-item-spacing-unit) 0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-internal-accordion-item-spacing-unit:0.75rem;--calcite-internal-accordion-icon-margin:1rem;--calcite-internal-accordion-item-padding:var(--calcite-internal-accordion-item-spacing-unit) 1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([hidden]){display:none}[hidden]{display:none}",h=d,t=a(class extends r{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalAccordionChange=s(this,"calciteInternalAccordionChange",6),this.mutationObserver=l("mutation",()=>this.updateAccordionItems()),this.appearance="solid",this.iconPosition="end",this.iconType="chevron",this.scale="m",this.selectionMode="multiple"}handlePropsChange(){this.updateAccordionItems()}connectedCallback(){var e;(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0}),this.updateAccordionItems()}disconnectedCallback(){var e;(e=this.mutationObserver)==null||e.disconnect()}render(){const e=this.appearance==="transparent";return c("div",{key:"1399ab312fad432bde78fdedd0435848b53109ef",class:{[n.transparent]:e,[n.accordion]:!e}},c("slot",{key:"3ab7863d23eabb6c5ce499de42dab74df885ccdd"}))}updateActiveItemOnChange(e){this.calciteInternalAccordionChange.emit({requestedAccordionItem:e.detail.requestedAccordionItem}),e.stopPropagation()}updateAccordionItems(){this.el.querySelectorAll("calcite-accordion-item").forEach(e=>{e.iconPosition=this.iconPosition,e.iconType=this.iconType,e.scale=this.scale}),document.dispatchEvent(new CustomEvent("calciteInternalAccordionItemsSync"))}get el(){return this}static get watchers(){return{iconPosition:["handlePropsChange"],iconType:["handlePropsChange"],scale:["handlePropsChange"],selectionMode:["handlePropsChange"]}}static get style(){return h}},[1,"calcite-accordion",{appearance:[513],iconPosition:[513,"icon-position"],iconType:[513,"icon-type"],scale:[513],selectionMode:[513,"selection-mode"]},[[0,"calciteInternalAccordionItemSelect","updateActiveItemOnChange"]],{iconPosition:["handlePropsChange"],iconType:["handlePropsChange"],scale:["handlePropsChange"],selectionMode:["handlePropsChange"]}]);function o(){if(typeof customElements>"u")return;["calcite-accordion"].forEach(e=>{switch(e){case"calcite-accordion":customElements.get(e)||customElements.define(e,t);break}})}o();const g=t,b=o;export{g as CalciteAccordion,b as defineCustomElement};
