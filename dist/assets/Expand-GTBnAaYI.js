function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/calcite-button-CtsLJU0N.js","assets/button-Ds3IAz_z.js","assets/index-BfC8i6jT.js","assets/index-CKzvfSE0.css","assets/form-CZfgqAxW.js","assets/dom-Bb9h_pls.js","assets/interactive-DP0XaYPR.js","assets/label-NjdjENzu.js","assets/component-CVleUxfT.js","assets/loadable-QAoPxwWP.js","assets/locale-CiqLNmAk.js","assets/key-DuBxtzvS.js","assets/observers-BDfujgVA.js","assets/t9n-BUWevPjH.js","assets/icon-BWRRlyjd.js","assets/loader-DI4JVeCP.js","assets/calcite-icon-Cu5Qwr0G.js","assets/calcite-panel-BRPngiDd.js","assets/panel-BweYboDk.js","assets/action-menu-BPjrKXqF.js","assets/array-l3358aeC.js","assets/action-W5AlSpJC.js","assets/popover-DmSCpKUv.js","assets/floating-ui-Bi24_oLL.js","assets/debounce-BE9q2DI6.js","assets/focusTrapComponent-CMnNxtIs.js","assets/openCloseComponent-C9eX_zZX.js","assets/Heading-DAjBEeC2.js","assets/FloatingArrow-DSHVPzyR.js","assets/scrim-CG0P7lnL.js","assets/calcite-popover-DdaaA7xP.js","assets/calcite-sheet-uP_nD4a2.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{v as n,y as i,z as y,W as E,cZ as b,bX as u,k3 as T,gk as v,gl as f,gm as M,_ as h,bP as a,bR as g}from"./index-BfC8i6jT.js";import{e as _,t as $}from"./widget-C2XRwSea.js";let c=class extends E{constructor(e){super(e),this._viewpointHandle=null,this.group=null}initialize(){this.addHandles(b(()=>{var e;return(e=this.view)==null?void 0:e.ui},"expand",e=>{const{target:t}=e;t&&t!==this&&t.expanded&&t.group&&t.group===this.group&&this._collapse()}))}destroy(){this._viewpointHandle=null,this.view=null}set autoCollapse(e){this._set("autoCollapse",e),this._watchViewpoint()}set expanded(e){var l;const t=!!e;this._set("expanded",t);const o=(l=this.view)==null?void 0:l.ui;o&&o.emit("expand",{target:this}),this._viewpointHandleChange(t)}get state(){var e;return(e=this.view)!=null&&e.ready?"ready":"disabled"}set view(e){this._get("view")!==e&&(this._set("view",e),e&&u(()=>e.ready,()=>{this.view===e&&this._watchViewpoint()},{once:!0,initial:!0}))}_viewpointHandleChange(e){this._viewpointHandle&&(e?u(()=>{var t;return(t=this.view)==null?void 0:t.stationary},()=>{var t;return(t=this._viewpointHandle)==null?void 0:t.resume()},{once:!0,initial:!0}):this._viewpointHandle.pause())}_watchViewpoint(){const e="viewpoint";this.removeHandles(e),this._viewpointHandle=null;const{autoCollapse:t,view:o}=this;if(!o||!t)return;const l=T(()=>o.type==="3d"?o.camera:o.viewpoint,()=>this._collapse());this.addHandles(l,e),this._viewpointHandle=l}_collapse(){this.expanded=!1}};n([i({value:!1})],c.prototype,"autoCollapse",null),n([i({value:!1})],c.prototype,"expanded",null),n([i()],c.prototype,"group",void 0),n([i({readOnly:!0})],c.prototype,"state",null),n([i({value:null})],c.prototype,"view",null),c=n([y("esri.widgets.Expand.ExpandViewModel")],c);const x=c,r="esri-expand",p={base:r,toggle:`${r}__toggle`,popoverContent:`${r}__popover-content`,panel:`${r}__panel`,panelContent:`${r}__panel-content`,sheet:`${r}__sheet`,panelIconNumber:`${r}__panel-icon-number`,contentContainer:`${r}__content-container`,icon:"esri-collapse__icon",iconFlip:"esri-collapse__icon-flip",iconExpanded:`${r}__icon--expanded`,iconNumber:`${r}__icon-number`,content:`${r}__content`,contentExpanded:`${r}__content--expanded`},w="chevrons-left",m="chevrons-right";let s=class extends f{constructor(e,t){super(e,t),this.closeOnEsc=!0,this.collapseTooltip="",this.content="",this.expandTooltip="",this.iconNumber=0,this.messages=null,this.messagesCommon=null,this.mode="auto",this.placement=null,this.viewModel=new x,this.toggle=()=>{this.viewModel.expanded=!this.viewModel.expanded},this._handlePopoverClose=o=>{o.target===this._popoverEl&&(this.viewModel.expanded=o.target.open)},this._handleSheetClose=o=>{this.viewModel.expanded=o.target.open},this._handlePanelClose=o=>{this.viewModel.expanded=!o.target.closed},this._handleKeyDown=o=>{this.viewModel.expanded&&o.key==="Escape"&&!this._willCloseOnEsc(o)&&o.preventDefault()},this._storeToggleButtonEl=o=>{this._toggleButtonEl=o},this._storePopoverEl=o=>{this._popoverEl=o}}loadDependencies(){return M({button:()=>h(()=>import("./calcite-button-CtsLJU0N.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),icon:()=>h(()=>import("./calcite-icon-Cu5Qwr0G.js"),__vite__mapDeps([16,14,2,3,5,12])),panel:()=>h(()=>import("./calcite-panel-BRPngiDd.js"),__vite__mapDeps([17,18,2,3,5,6,9,12,19,20,11,21,10,8,13,14,15,22,23,24,25,26,27,28,29])),popover:()=>h(()=>import("./calcite-popover-DdaaA7xP.js"),__vite__mapDeps([30,22,2,3,23,5,24,25,26,27,10,11,12,13,9,28,8,21,6,14,15])),sheet:()=>h(()=>import("./calcite-sheet-uP_nD4a2.js"),__vite__mapDeps([31,2,3,5,25,9,12,26,15,10,11,29,13]))})}get expandTitle(){const{expanded:e,messagesCommon:t,collapseTooltip:o,expandTooltip:l}=this;return(e?o||(t==null?void 0:t.collapse):l||(t==null?void 0:t.expand))??""}get _displaySheet(){var e;switch(this.mode){case"drawer":return!0;case"auto":return((e=this.viewModel.view)==null?void 0:e.widthBreakpoint)==="xsmall";default:return!1}}get autoCollapse(){return this.viewModel.autoCollapse}set autoCollapse(e){this.viewModel.autoCollapse=e}get collapseIcon(){return m}set collapseIcon(e){this._overrideIfSome("collapseIcon",e)}get expanded(){return this.viewModel.expanded}set expanded(e){this.viewModel.expanded=e}get expandIcon(){return _(this.content)?this.content.icon:w}set expandIcon(e){this._overrideIfSome("expandIcon",e)}get group(){return this.viewModel.group}set group(e){this.viewModel.group=e}get icon(){return null}get label(){var e;return(_(this.content)?this.content.label:null)??((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}expand(){this.viewModel.expanded=!0}collapse(){this.viewModel.expanded=!1}render(){const{_displaySheet:e,_toggleButtonEl:t,viewModel:{expanded:o},label:l,placement:d}=this;return a("div",{class:this.classes(p.base,g.widget)},this._renderToggle(),e?a("calcite-sheet",{class:p.sheet,heightScale:"l",label:l,onkeydown:this._handleKeyDown,open:o,position:"block-end",onCalciteSheetClose:this._handleSheetClose},a("calcite-panel",{class:p.panel,closable:!0,closed:!o,heading:l,onkeydown:this._handleKeyDown,onCalcitePanelClose:this._handlePanelClose},a("div",{class:p.panelContent},this._renderContent()))):t?a("calcite-popover",{afterCreate:this._storePopoverEl,afterUpdate:this._storePopoverEl,label:l,onkeydown:this._handleKeyDown,open:o,overlayPositioning:"fixed",placement:d??this._getPlacement(),referenceElement:t,onCalcitePopoverClose:this._handlePopoverClose},a("div",{class:p.popoverContent},this._renderContent())):null)}_getPlacement(){const{container:e,view:t}=this,o=e&&t?t.ui.getPosition(e):null;if(!o||o==="manual")return"auto";const[l,d]=o.split("-");return`${d==="right"?"left":"right"}-${l==="bottom"?"end":"start"}`}_willCloseOnEsc(e){const{closeOnEsc:t}=this;return typeof t=="function"?t(e):t}_renderBadgeNumber(){const{expanded:e,iconNumber:t}=this;return t&&!e?a("span",{class:p.iconNumber,key:"expand__icon-number"},t):null}_renderToggleButton(){const{expanded:e,expandTitle:t,expandIcon:o,collapseIcon:l}=this,d=e?l:o,C=d===w||d===m;return a("calcite-button",{afterCreate:this._storeToggleButtonEl,afterUpdate:this._storeToggleButtonEl,class:g.widgetButton,kind:"neutral",label:t,onclick:this.toggle,scale:"s",title:t},d?a("calcite-icon",{class:this.classes(p.icon,C&&p.iconFlip),icon:d,scale:"s"}):null)}_renderToggle(){return a("div",{class:p.toggle},this._renderToggleButton(),this._renderBadgeNumber())}_renderContent(){const{content:e}=this;return typeof e=="string"?a("div",{class:p.contentContainer,innerHTML:e,key:"content__string"}):_(e)?a("div",{class:p.contentContainer,key:"content__widget"},e.render()):e instanceof HTMLElement?a("div",{afterCreate:this._attachToNode,bind:e,class:p.contentContainer,key:"content__html-element"}):$(e)?a("div",{afterCreate:this._attachToNode,bind:e.domNode,class:p.contentContainer,key:"content__node"}):null}_attachToNode(e){const t=this;e.appendChild(t)}};n([i({readOnly:!0})],s.prototype,"expandTitle",null),n([i()],s.prototype,"_toggleButtonEl",void 0),n([i()],s.prototype,"_displaySheet",null),n([i()],s.prototype,"autoCollapse",null),n([i()],s.prototype,"closeOnEsc",void 0),n([i()],s.prototype,"collapseIcon",null),n([i()],s.prototype,"collapseTooltip",void 0),n([i()],s.prototype,"content",void 0),n([i()],s.prototype,"expanded",null),n([i()],s.prototype,"expandIcon",null),n([i()],s.prototype,"expandTooltip",void 0),n([i()],s.prototype,"group",null),n([i()],s.prototype,"icon",null),n([i()],s.prototype,"iconNumber",void 0),n([i()],s.prototype,"label",null),n([i(),v("esri/widgets/Expand/t9n/Expand")],s.prototype,"messages",void 0),n([i(),v("esri/t9n/common")],s.prototype,"messagesCommon",void 0),n([i()],s.prototype,"mode",void 0),n([i()],s.prototype,"placement",void 0),n([i()],s.prototype,"view",null),n([i({type:x})],s.prototype,"viewModel",void 0),s=n([y("esri.widgets.Expand")],s);const k=s;export{k as default};
