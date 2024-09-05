import{b as d,l as r,d as n,e as h}from"./index-BfC8i6jT.js";import{s as p,k as l,t as m}from"./dom-0dfcce02-D_EjFIg7.js";import{c as f,d as u,u as b,I as g}from"./interactive-7dc921d0-C6HJbVA3.js";import{a as I,s as C,c as y}from"./loadable-907717a5-DAXV1ZHU.js";import"./guid-c5ea645c-C-axntQX.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.1
 */const S=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.container{display:flex;inline-size:100%;flex-wrap:wrap;gap:0.5rem}::slotted(calcite-chip){flex:none}:host([scale=s]) .container{gap:0.25rem}:host([scale=l]) .container{gap:0.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}",k=S,E=class{constructor(e){d(this,e),this.calciteChipGroupSelect=r(this,"calciteChipGroupSelect",6),this.items=[],this.updateItems=t=>{var a,i,o;const s=(a=this.slotRefEl)==null?void 0:a.assignedElements({flatten:!0}).filter(c=>c==null?void 0:c.matches("calcite-chip"));this.items=t?p(t):s,!(((i=this.items)==null?void 0:i.length)<1)&&((o=this.items)==null||o.forEach(c=>{c.interactive=!0,c.scale=this.scale,c.selectionMode=this.selectionMode,c.parentChipGroup=this.el}),this.setSelectedItems(!1))},this.updateSelectedItems=()=>{var t;this.selectedItems=(t=this.items)==null?void 0:t.filter(s=>s.selected)},this.setSelectedItems=(t,s)=>{var a;s&&((a=this.items)==null||a.forEach(i=>{const o=s===i;switch(this.selectionMode){case"multiple":o&&(i.selected=!i.selected);break;case"single":i.selected=o?!i.selected:!1;break;case"single-persist":i.selected=!!o;break}})),this.updateSelectedItems(),t&&this.calciteChipGroupSelect.emit()},this.disabled=!1,this.label=void 0,this.scale="m",this.selectionMode="none",this.selectedItems=[]}onSelectionModeChange(){this.updateItems()}connectedCallback(){f(this)}componentDidRender(){u(this),b(this)}componentDidLoad(){I(this)}async componentWillLoad(){C(this)}calciteInternalChipKeyEventListener(e){var t;if(e.composedPath().includes(this.el)){const s=(t=this.items)==null?void 0:t.filter(a=>!a.disabled);switch(e.detail.key){case"ArrowRight":l(s,e.detail.target,"next");break;case"ArrowLeft":l(s,e.detail.target,"previous");break;case"Home":l(s,e.detail.target,"first");break;case"End":l(s,e.detail.target,"last");break}}e.stopPropagation()}calciteChipCloseListener(e){var s,a,i,o;const t=e.target;(s=this.items)!=null&&s.includes(t)&&(((a=this.items)==null?void 0:a.indexOf(t))>0?l(this.items,t,"previous"):((i=this.items)==null?void 0:i.indexOf(t))===0?l(this.items,t,"next"):l(this.items,t,"first")),this.items=(o=this.items)==null?void 0:o.filter(c=>c!==t),e.stopPropagation()}calciteChipSelectListener(e){e.composedPath().includes(this.el)&&this.setSelectedItems(!0,e.target),e.stopPropagation()}calciteInternalChipSelectListener(e){e.composedPath().includes(this.el)&&this.setSelectedItems(!1,e.target),e.stopPropagation()}calciteInternalSyncSelectedChips(e){e.composedPath().includes(this.el)&&(this.updateSelectedItems(),this.selectionMode==="single"&&this.selectedItems.length>1&&this.setSelectedItems(!1,e.target)),e.stopPropagation()}async setFocus(){var e;if(await y(this),!this.disabled)return(e=this.selectedItems[0]||this.items[0])==null?void 0:e.setFocus()}render(){const e=this.selectionMode==="none"||this.selectionMode==="multiple"?"group":"radiogroup",{disabled:t}=this;return n(g,{key:"341dd9e8f25d4d358ea6e33740d8b851a5fa0e9d",disabled:t},n("div",{key:"66c9eaa00b7ca0c602f94a017f5b6ef6afc3bd93","aria-disabled":m(t),"aria-label":this.label,class:"container",role:e},n("slot",{key:"d62c336c6cdca0bbd5c6673975ae4a25bc8ef9df",onSlotchange:this.updateItems,ref:s=>this.slotRefEl=s})))}get el(){return h(this)}static get watchers(){return{selectionMode:["onSelectionModeChange"]}}};E.style=k;export{E as calcite_chip_group};
