import{b as h,l as b,d as c,e as m}from"./index-BfC8i6jT.js";import{c as f,d as u,u as g,I as p}from"./interactive-7dc921d0-C6HJbVA3.js";import{c as v}from"./observers-aea7721f-C3bX3_Ot.js";import{d as y,c as O}from"./sortableComponent-927f5f15-C92mCYMo.js";import{d as S}from"./dom-0dfcce02-D_EjFIg7.js";import"./guid-c5ea645c-C-axntQX.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.1
 */const d={sortItem:"sort-item",container:"container",containerHorizontal:"container--horizontal",containerVertical:"container--vertical"},C=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{display:flex;flex:1 1 auto}.container--vertical{flex-direction:column}.container--horizontal{flex-direction:row}:host([hidden]){display:none}[hidden]{display:none}",I=C,x=class{constructor(e){h(this,e),this.calciteListOrderChange=b(this,"calciteListOrderChange",6),this.items=[],this.mutationObserver=v("mutation",()=>{this.setUpSorting()}),this.dragEnabled=!0,this.canPull=void 0,this.canPut=void 0,this.dragSelector=void 0,this.group=void 0,this.handleSelector="calcite-handle",this.layout="vertical",this.disabled=!1,this.loading=!1}connectedCallback(){this.setUpSorting(),this.beginObserving(),f(this)}disconnectedCallback(){u(this),y(this),this.endObserving()}componentDidRender(){g(this)}calciteHandleNudgeNextHandler(e){this.handleNudgeEvent(e)}onGlobalDragStart(){this.endObserving()}onGlobalDragEnd(){this.beginObserving()}onDragEnd(){}onDragStart(){}onDragSort(){this.items=Array.from(this.el.children),this.calciteListOrderChange.emit()}handleNudgeEvent(e){const{direction:r}=e.detail,t=e.composedPath().find(a=>a.matches(this.handleSelector)),i=this.items.find(a=>a.contains(t)||e.composedPath().includes(a)),l=this.items.length-1,n=this.items.indexOf(i);let o=!1,s;r==="up"?n===0?o=!0:s=n-1:n===l?s=0:n===l-1?o=!0:s=n+2,this.endObserving(),o?i.parentElement.appendChild(i):i.parentElement.insertBefore(i,this.items[s]),this.items=Array.from(this.el.children),this.beginObserving(),requestAnimationFrame(()=>S(t)),"selected"in t&&(t.selected=!0)}setUpSorting(){this.items=Array.from(this.el.children),O(this)}beginObserving(){var e;(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0,subtree:!0})}endObserving(){var e;(e=this.mutationObserver)==null||e.disconnect()}render(){const{disabled:e,layout:r}=this,t=r==="horizontal"||!1;return c(p,{key:"d88bb6eff8ac0c12fe058290a15b644f52b15efe",disabled:e},c("div",{key:"0ac98b39280cbe2f61103d5c2120a9822ccee243",class:{[d.container]:!0,[d.containerVertical]:!t,[d.containerHorizontal]:t}},c("slot",{key:"9b2cc37a435d630ed79ad33ad95ff578ed701999"})))}get el(){return m(this)}};x.style=I;export{x as calcite_sortable_list};
