import{b as o,l,d as i,H as n,e as r}from"./index-BfC8i6jT.js";import{k as c,d as h,t as p}from"./dom-0dfcce02-D_EjFIg7.js";import{c as m,u as b,d as u,I as f}from"./interactive-7dc921d0-C6HJbVA3.js";import{a as g,s as I,b as S}from"./loadable-907717a5-DAXV1ZHU.js";import"./guid-c5ea645c-C-axntQX.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.1
 */const y=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-card-group-gap:var(--calcite-size-md);display:block}.container{display:flex;flex-wrap:wrap;gap:var(--calcite-card-group-gap)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}",C=y,k=class{constructor(e){o(this,e),this.calciteCardGroupSelect=l(this,"calciteCardGroupSelect",6),this.items=[],this.udpateItemsOnSelectionModeChange=()=>{this.updateSlottedItems(this.slotRefEl),this.updateSelectedItems()},this.updateItemsOnSlotChange=t=>{this.updateSlottedItems(t.target),this.updateSelectedItems()},this.updateSlottedItems=t=>{this.items=t.assignedElements({flatten:!0}).filter(s=>s==null?void 0:s.matches("calcite-card"))},this.updateSelectedItems=()=>{this.items.forEach(t=>{t.selectionMode=this.selectionMode}),this.setSelectedItems(!1)},this.setSelectedItems=(t,s)=>{s&&this.items.forEach(a=>{const d=s===a;switch(this.selectionMode){case"multiple":d&&(a.selected=!a.selected);break;case"single":a.selected=d?!a.selected:!1;break;case"single-persist":a.selected=!!d;break}}),this.selectedItems=this.items.filter(a=>a.selected),t&&this.selectionMode!=="none"&&!this.disabled&&this.calciteCardGroupSelect.emit()},this.disabled=!1,this.label=void 0,this.selectionMode="none",this.selectedItems=[]}onSelectionModeChange(){this.udpateItemsOnSelectionModeChange()}connectedCallback(){m(this)}componentDidRender(){b(this)}componentDidLoad(){g(this)}disconnectedCallback(){u(this)}async componentWillLoad(){I(this)}calciteInternalCardKeyEventListener(e){if(e.composedPath().includes(this.el)){const t=this.items.filter(s=>!s.disabled);switch(e.detail.key){case"ArrowRight":c(t,e.target,"next");break;case"ArrowLeft":c(t,e.target,"previous");break;case"Home":c(t,e.target,"first");break;case"End":c(t,e.target,"last");break}}}calciteCardSelectListener(e){e.composedPath().includes(this.el)&&!e.target.selectable&&this.setSelectedItems(!0,e.target)}async setFocus(){await S(this),this.disabled||h(this.items[0])}render(){const e=this.selectionMode==="none"||this.selectionMode==="multiple"?"group":"radiogroup";return i(n,{key:"f7d72ac0d0c8b0cec9b1c5c048ed2a8ee304d9e2"},i(f,{key:"b477bbced684168f1e68c1fe0d8511a689653995",disabled:this.disabled},i("div",{key:"ce0aa841b96ad23886e109203a14ac2b0e54b948","aria-disabled":p(this.disabled),"aria-label":this.label,class:"container",role:e},i("slot",{key:"338c12be0a5a675daf911aad6049aff6319d3064",onSlotchange:this.updateItemsOnSlotChange,ref:t=>this.slotRefEl=t}))))}get el(){return r(this)}static get watchers(){return{selectionMode:["onSelectionModeChange"]}}};k.style=C;export{k as calcite_card_group};
