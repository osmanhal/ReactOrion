import{v as s,y as r,z as l,iy as d,az as h,gK as p,aM as v,iz as c}from"./index-BfC8i6jT.js";const y=n=>{let e=class extends n{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(){super.postscript(),d(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const t=new AbortController,i=t.signal;this.addHandles(h(()=>t.abort())),await p(()=>{var a;return(a=this.view.defaultsFromMap)==null?void 0:a.heightModelInfoReady},i),v(i);const o=c(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(o)throw o}};return s([r()],e.prototype,"view",void 0),s([r()],e.prototype,"slicePlaneEnabled",void 0),e=s([l("esri.views.3d.layers.LayerView3D")],e),e};export{y as l};
