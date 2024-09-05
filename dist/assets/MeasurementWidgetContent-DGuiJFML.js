function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/calcite-button-CtsLJU0N.js","assets/button-Ds3IAz_z.js","assets/index-BfC8i6jT.js","assets/index-CKzvfSE0.css","assets/form-CZfgqAxW.js","assets/dom-Bb9h_pls.js","assets/interactive-DP0XaYPR.js","assets/label-NjdjENzu.js","assets/component-CVleUxfT.js","assets/loadable-QAoPxwWP.js","assets/locale-CiqLNmAk.js","assets/key-DuBxtzvS.js","assets/observers-BDfujgVA.js","assets/t9n-BUWevPjH.js","assets/icon-BWRRlyjd.js","assets/loader-DI4JVeCP.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{v as s,y as i,z as d,W as p,ba as m,d3 as h,bX as c,J as v,gl as _,gm as g,_ as y,bP as r}from"./index-BfC8i6jT.js";import{n as w}from"./UnitSelect-VjCIVazS.js";let u=class extends p{constructor(e){super(e),this.tool=null,this._loggedUnsupportedErrorOnce=!1,(e==null?void 0:e.visible)!=null&&(this.visible=e.visible)}initialize(){this.addHandles(m(()=>({ready:this.view!=null&&this.view.ready,supported:this.supported}),({ready:e,supported:t})=>{!e||t||this._loggedUnsupportedErrorOnce||(this.logError(this.unsupportedErrorMessage),this._loggedUnsupportedErrorOnce=!0)},h))}destroy(){this.removeTool(),this.view=null}get active(){return this.tool!=null&&this.tool.active}get disabled(){return this.view==null||!this.view.ready||!this.supported}get supported(){return this.view==null||this.view.type===this.supportedViewType}get view(){return this._get("view")}set view(e){if(e===this.view)return;this.removeTool(),this._set("view",e);const t="tools";this.removeHandles(t),e!=null&&this.addHandles(e.tools.on("after-remove",a=>{a.item===this.tool&&this._set("tool",null)}),t)}set visible(e){this._set("visible",e),this.tool!=null&&(this.tool.visible=e)}createTool(e={interactive:!1}){if(this.removeTool(),this.view==null||!this.view.ready||!this.supported)return;const t=this.constructTool();t.created?(this._set("tool",t),this.view.tools.add(t)):e.interactive?(this._set("tool",t),this.view.addAndActivateTool(t),c(()=>t.created,()=>{t.active&&this.view!=null&&(this.view.activeTool=null)},{initial:!0,once:!0})):t.destroy()}removeTool(){var a;const e=this.tool;if(e==null)return;const t=(a=this.view)==null?void 0:a.tools;t!=null?t.remove(e):e.destroy(),this._set("tool",null)}logError(...e){v.getLogger(this).error(...e)}};s([i({constructOnly:!0})],u.prototype,"tool",void 0),s([i()],u.prototype,"active",null),s([i()],u.prototype,"disabled",null),s([i()],u.prototype,"supported",null),s([i({value:null})],u.prototype,"view",null),s([i({type:Boolean,value:!0})],u.prototype,"visible",null),u=s([d("esri.widgets.support.InteractiveToolViewModel")],u);const o="esri-measurement-widget-content",l={base:o,actions:`${o}__actions`,error:`${o}__error`,hint:`${o}__hint`,hintText:`${o}__hint-text`,panelError:`${o}__panel--error`,settings:`${o}__settings`,measurement:`${o}__measurement`,measurementItem:`${o}__measurement-item`,measurementItemDisabled:`${o}__measurement-item--disabled`,measurementItemTitle:`${o}__measurement-item__title`,measurementItemValue:`${o}__measurement-item__value`};let n=class extends _{constructor(e,t){super(e,t)}loadDependencies(){return g({button:()=>y(()=>import("./calcite-button-CtsLJU0N.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))})}render(){return r("div",{class:l.base},this._renderContent())}_renderContent(){const{supported:e,active:t,state:a}=this;switch(a){case"disabled":case"ready":return e?t?this._renderHint():this._renderActions():this._renderUnsupportedMessage();case"measuring":case"measured":return[this._renderSettings(),this._renderMeasurement(),this._renderActions()]}}_renderUnsupportedMessage(){return r("section",{class:l.error,key:"unsupported"},r("p",null,this.messages.unsupported))}_renderHint(){const{messages:e}=this;return r("section",{class:l.hint,key:"hint"},r("p",{class:l.hintText},e.hint))}_renderSettings(){return r("div",{class:l.settings,key:"settings"},r(w,{options:this.unitOptions,selectLabel:this.messages.unit,value:this.unit,onChange:this.onUnitChange}))}_renderMeasurement(){return r("section",{class:l.measurement,key:"measurement"},this.measurementItems.map(e=>this._renderMeasurementItem(e)))}_renderMeasurementItem({key:e,title:t,value:a}){return r("div",{class:this.classes(l.measurementItem,a==null&&l.measurementItemDisabled),key:e},r("span",{class:l.measurementItemTitle},t),r("span",{"aria-live":"polite",class:l.measurementItemValue},a??this.messages.notApplicable))}_renderActions(){const{messages:e}=this;return r("div",{class:l.actions},r("calcite-button",{class:this.newMeasurementButtonClass,disabled:this.state==="disabled",onclick:this.onNewMeasurementClick},e.newMeasurement))}};s([i()],n.prototype,"active",void 0),s([i()],n.prototype,"measurementItems",void 0),s([i()],n.prototype,"messages",void 0),s([i()],n.prototype,"newMeasurementButtonClass",void 0),s([i()],n.prototype,"onNewMeasurementClick",void 0),s([i()],n.prototype,"onUnitChange",void 0),s([i()],n.prototype,"state",void 0),s([i()],n.prototype,"supported",void 0),s([i()],n.prototype,"unit",void 0),s([i()],n.prototype,"unitOptions",void 0),n=s([d("esri.widgets.support.MeasurementWidgetContent")],n);export{u as p,n as u};
