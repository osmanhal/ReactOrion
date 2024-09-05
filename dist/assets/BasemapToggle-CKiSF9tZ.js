function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/calcite-button-CtsLJU0N.js","assets/button-Ds3IAz_z.js","assets/index-BfC8i6jT.js","assets/index-CKzvfSE0.css","assets/form-CZfgqAxW.js","assets/dom-Bb9h_pls.js","assets/interactive-DP0XaYPR.js","assets/label-NjdjENzu.js","assets/component-CVleUxfT.js","assets/loadable-QAoPxwWP.js","assets/locale-CiqLNmAk.js","assets/key-DuBxtzvS.js","assets/observers-BDfujgVA.js","assets/t9n-BUWevPjH.js","assets/icon-BWRRlyjd.js","assets/loader-DI4JVeCP.js","assets/calcite-icon-Cu5Qwr0G.js","assets/calcite-scrim-DuiYffm1.js","assets/scrim-CG0P7lnL.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{v as t,y as i,gd as R,z as $,W as T,lU as v,ba as E,c8 as L,lV as P,iQ as M,gK as I,cU as B,dk as O,dn as V,dl as C,lW as k,gk as j,gl as A,gm as D,_ as h,bP as l,bR as f}from"./index-BfC8i6jT.js";let n=class extends T{constructor(e){super(e),this._basemapCache={},this._loadingProjectionEngine=!1,this.nextBasemap=v("hybrid",this._basemapCache),this.view=null}initialize(){E(()=>this.nextBasemap,e=>{e&&!e.loaded&&e.load().catch(()=>{})},L)}destroy(){this.view=null,P(this._basemapCache),this._basemapCache=null}get _nextBasemapSpatialReferenceTask(){return M(this.view,this.nextBasemap)}get _viewSpatialReferenceLocked(){const{view:e}=this;return!e||!("spatialReferenceLocked"in e)||e.spatialReferenceLocked}get activeBasemap(){var e,s;return v(((s=(e=this.view)==null?void 0:e.map)==null?void 0:s.basemap)??"topo-vector",this._basemapCache)}castNextBasemap(e){return v(e,this._basemapCache)}get state(){const{view:e}=this;if(!(e!=null&&e.ready)||this._nextBasemapSpatialReferenceTask.updating)return"disabled";const{spatialReference:s}=this._nextBasemapSpatialReferenceTask;return this._viewSpatialReferenceLocked&&s!=null&&!e.spatialReference.equals(s)?"incompatible-next-basemap":this._loadingProjectionEngine?"loading":"ready"}async toggle(){const{activeBasemap:e,nextBasemap:s,state:u,view:p}=this;if(!p||u==="disabled"||u==="incompatible-next-basemap")return;const m=this._viewSpatialReferenceLocked;if(!m){if(await I(()=>!this._nextBasemapSpatialReferenceTask.updating),s!==this.nextBasemap||e!==this.activeBasemap)return;const{spatialReference:d}=this._nextBasemapSpatialReferenceTask;if(d==null||B(p.spatialReference,d)||O()||V(p.spatialReference,d)||(this._loadingProjectionEngine=!0,await C(),this._loadingProjectionEngine=!1),s!==this.nextBasemap||e!==this.activeBasemap)return}p.map.basemap=s,m||this._nextBasemapSpatialReferenceTask.spatialReference==null||B(p.spatialReference,this._nextBasemapSpatialReferenceTask.spatialReference)||(p.spatialReference=this._nextBasemapSpatialReferenceTask.spatialReference),this.nextBasemap=e}static getThumbnailUrl(e){return k(e)}};t([i()],n.prototype,"_loadingProjectionEngine",void 0),t([i({readOnly:!0})],n.prototype,"_nextBasemapSpatialReferenceTask",null),t([i({readOnly:!0})],n.prototype,"_viewSpatialReferenceLocked",null),t([i({readOnly:!0})],n.prototype,"activeBasemap",null),t([i()],n.prototype,"nextBasemap",void 0),t([R("nextBasemap")],n.prototype,"castNextBasemap",null),t([i({readOnly:!0})],n.prototype,"state",null),t([i()],n.prototype,"view",void 0),t([i()],n.prototype,"toggle",null),n=t([$("esri.widgets.BasemapToggle.BasemapToggleViewModel")],n);const S=n,c="esri-basemap-toggle",g="esri-basemap-thumbnail",r={base:c,secondaryBasemapImage:`${c}__image--secondary`,container:`${g} ${c}__container`,image:`${g}__image ${c}__image`,imageLoading:`${c}__image--loading`,overlay:`${g}__overlay ${c}__image-overlay`,title:`${g}__title ${c}__title`,overlayScrim:`${g}__overlay-scrim`};function w(a){const e=k(a);return e?{backgroundImage:"url("+e+")"}:{backgroundImage:""}}const x={title:!1};let o=class extends A{constructor(a,e){super(a,e),this.messages=null,this.viewModel=new S,this.visibleElements={...x},this.toggle=()=>this.viewModel.toggle()}loadDependencies(){return D({button:()=>h(()=>import("./calcite-button-CtsLJU0N.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),icon:()=>h(()=>import("./calcite-icon-Cu5Qwr0G.js"),__vite__mapDeps([16,14,2,3,5,12])),scrim:()=>h(()=>import("./calcite-scrim-DuiYffm1.js"),__vite__mapDeps([17,18,2,3,10,5,11,12,13,15]))})}get activeBasemap(){return this.viewModel.activeBasemap}get icon(){return"layer-basemap"}set icon(a){this._overrideIfSome("icon",a)}get label(){var a;return((a=this.messages)==null?void 0:a.widgetLabel)??""}set label(a){this._overrideIfSome("label",a)}get nextBasemap(){return this.viewModel.nextBasemap}set nextBasemap(a){this.viewModel.nextBasemap=a}get view(){return this.viewModel.view}set view(a){this.viewModel.view=a}castVisibleElements(a){return{...x,...a}}render(){const a=this.viewModel,e=a.state==="disabled"?null:a.activeBasemap,s=a.state==="disabled"?null:a.nextBasemap,u=a.state==="loading",p=a.state==="incompatible-next-basemap",m=(s==null?void 0:s.title)??"",d=s&&s.loadStatus!=="loaded";let _;const b=this.visibleElements.title&&m,y=p;return(b||y)&&(_=l("div",{class:r.overlay,key:"overlay"},b?l("span",{class:r.title,title:m},m):null,y?l("calcite-scrim",{class:r.overlayScrim,title:this.messages.incompatibleSpatialReference},l("calcite-icon",{icon:"exclamation-mark-triangle"})):null)),l("div",{class:this.classes(r.base,f.widget)},l("calcite-button",{appearance:"transparent","data-basemap-id":s?s.id:"",disabled:p,kind:"neutral",label:this.label,onclick:()=>{this.toggle()},title:this.label},l("div",{class:this.classes(r.container,r.secondaryBasemapImage)},l("div",{class:r.image,styles:w(e)})),l("div",{class:r.container},l("div",{class:this.classes(r.image,d?r.imageLoading:null),styles:w(s)},d||u?l("calcite-scrim",null,l("span",{"aria-hidden":"true",class:f.loaderAnimation,role:"presentation"})):null),_)))}};t([i({readOnly:!0})],o.prototype,"activeBasemap",null),t([i()],o.prototype,"icon",null),t([i()],o.prototype,"label",null),t([i(),j("esri/widgets/BasemapToggle/t9n/BasemapToggle")],o.prototype,"messages",void 0),t([i()],o.prototype,"nextBasemap",null),t([i()],o.prototype,"view",null),t([i({type:S})],o.prototype,"viewModel",void 0),t([i()],o.prototype,"visibleElements",void 0),t([R("visibleElements")],o.prototype,"castVisibleElements",null),o=t([$("esri.widgets.BasemapToggle")],o);const z=o;export{z as default};
