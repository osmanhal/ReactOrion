import{b as o,l as n,d as c,e as r}from"./index-BfC8i6jT.js";import{c as d,u as h,d as p,I as m}from"./interactive-7dc921d0-C6HJbVA3.js";import{c as u}from"./observers-aea7721f-C3bX3_Ot.js";import{k as l}from"./dom-0dfcce02-D_EjFIg7.js";import"./guid-c5ea645c-C-axntQX.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.1
 */const b={container:"container"},g=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{box-sizing:border-box;display:inline-block}:host ::slotted(calcite-tile){margin-block-end:var(--calcite-spacing-px);margin-inline-end:var(--calcite-spacing-px)}.container{display:grid;grid-auto-rows:minmax(auto, 1fr)}:host([scale=s]) .container{grid-template-columns:repeat(auto-fit, minmax(100px, 1fr))}:host([scale=m]) .container{grid-template-columns:repeat(auto-fit, minmax(140px, 1fr))}:host([scale=l]) .container{grid-template-columns:repeat(auto-fit, minmax(160px, 1fr))}:host([layout=vertical]) .container{display:flex;flex-direction:column}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}",f=g,y=class{constructor(e){o(this,e),this.calciteTileGroupSelect=n(this,"calciteTileGroupSelect",6),this.items=[],this.getSlottedTiles=()=>{var s;return(s=this.slotEl)==null?void 0:s.assignedElements({flatten:!0}).filter(t=>t==null?void 0:t.matches("calcite-tile"))},this.mutationObserver=u("mutation",()=>this.updateTiles()),this.selectItem=s=>{var t;s&&((t=this.items)==null||t.forEach(i=>{const a=s===i;switch(this.selectionMode){case"multiple":a&&(i.selected=!i.selected);break;case"single":i.selected=a&&!i.selected;break;case"single-persist":i.selected=!!a;break}}),this.updateSelectedItems(),this.calciteTileGroupSelect.emit())},this.setSlotEl=s=>{this.slotEl=s},this.updateSelectedItems=()=>{var t,i;const s=(t=this.items)==null?void 0:t.filter(a=>a.selected);(this.selectionMode==="single"||this.selectionMode==="single-persist")&&(s==null?void 0:s.length)>1?(this.selectedItems=[s.pop()],(i=this.items)==null||i.forEach(a=>{this.selectedItems.indexOf(a)===-1&&(a.selected=!1)})):this.selectedItems=s??[]},this.updateTiles=()=>{var s;this.items=this.getSlottedTiles(),(s=this.items)==null||s.forEach(t=>{t.alignment=this.alignment,t.interactive=!0,t.layout=this.layout,t.scale=this.scale,t.selectionAppearance=this.selectionAppearance,t.selectionMode=this.selectionMode}),this.updateSelectedItems()},this.alignment="start",this.disabled=!1,this.label=void 0,this.layout="horizontal",this.scale="m",this.selectedItems=[],this.selectionAppearance="icon",this.selectionMode="none"}scaleWatcher(){this.updateTiles()}handleSelectionModeOrAppearanceChange(){this.updateTiles()}connectedCallback(){var e;d(this),(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0}),this.updateTiles()}componentDidRender(){h(this)}disconnectedCallback(){var e;p(this),(e=this.mutationObserver)==null||e.disconnect()}calciteInternalTileKeyEventListener(e){var s;if(e.composedPath().includes(this.el)){e.preventDefault(),e.stopPropagation();const t=(s=this.items)==null?void 0:s.filter(i=>!i.disabled);switch(e.detail.key){case"ArrowDown":case"ArrowRight":l(t,e.detail.target,"next");break;case"ArrowUp":case"ArrowLeft":l(t,e.detail.target,"previous");break;case"Home":l(t,e.detail.target,"first");break;case"End":l(t,e.detail.target,"last");break}}}calciteTileSelectHandler(e){e.composedPath().includes(this.el)&&this.selectItem(e.target)}render(){const e=this.selectionMode==="none"||this.selectionMode==="multiple"?"group":"radiogroup";return c(m,{key:"85de45a7ce2b724d46e4e7a6456e94da0b34ddb9",disabled:this.disabled},c("div",{key:"97b55eb827e1bd60b999eb42483119ff32a364a1","aria-label":this.label,class:b.container,role:e},c("slot",{key:"ae45a8ec397c2a71c8e363eb4a37106b79807d6e",onSlotchange:this.updateTiles,ref:this.setSlotEl})))}get el(){return r(this)}static get watchers(){return{scale:["scaleWatcher"],selectionMode:["handleSelectionModeOrAppearanceChange"],selectionAppearance:["handleSelectionModeOrAppearanceChange"]}}};y.style=f;export{y as calcite_tile_group};
