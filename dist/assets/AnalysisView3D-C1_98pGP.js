import{cW as s,az as o,v as t,y as i,z as a}from"./index-BfC8i6jT.js";const u=n=>{let e=class extends s(n){constructor(){super(...arguments),this.parent=null,this._userInteractive=!1,this._interactiveViewModelCount=0}get interactive(){return this._interactiveViewModelCount>0||this._userInteractive}set interactive(r){this._userInteractive=r}get updating(){return!1}get visible(){return this.parent==null||this.parent.visible&&!this.parent.suspended}set visible(r){this._overrideIfSome("visible",r)}forceInteractiveForViewModel(){return this._interactiveViewModelCount++,o(()=>this._interactiveViewModelCount--)}};return t([i({constructOnly:!0})],e.prototype,"parent",void 0),t([i({constructOnly:!0})],e.prototype,"view",void 0),t([i({type:Boolean})],e.prototype,"interactive",null),t([i()],e.prototype,"_userInteractive",void 0),t([i({readOnly:!0})],e.prototype,"updating",null),t([i()],e.prototype,"visible",null),t([i()],e.prototype,"_interactiveViewModelCount",void 0),e=t([a("esri.views.3d.analysis.AnalysisView3D")],e),e};export{u as s};
