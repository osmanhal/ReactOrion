import{v as u,y as h,z as k,W as R,jr as f,f8 as x,ho as P,aR as W,bI as I,m8 as O,ap as U,bw as C,cb as w,hn as F,gk as j,gl as z,ba as D,bP as d,bR as B,aj as G}from"./index-BfC8i6jT.js";import{e as N}from"./defaultUnit-BEK94Aud.js";import{w as V,v as H}from"./geodesicUtils-BOUsTR0r.js";import"./getDefaultUnitForView-Dts4f_W1.js";const o="esri-scale-bar",r={base:o,labelContainer:`${o}__label-container`,rulerLabelContainer:`${o}__label-container--ruler`,lineLabelContainer:`${o}__label-container--line`,topLabelContainer:`${o}__label-container--top`,bottomLabelContainer:`${o}__label-container--bottom`,label:`${o}__label`,line:`${o}__line`,topLine:`${o}__line--top`,bottomLine:`${o}__line--bottom`,ruler:`${o}__ruler`,rulerBlock:`${o}__ruler-block`,barContainer:`${o}__bar-container`,rulerBarContainer:`${o}__bar-container--ruler`,lineBarContainer:`${o}__bar-container--line`};function X(e){return e>.5?{min:.5,max:1}:e>.2?{min:.2,max:.5}:{min:.1,max:.2}}function Y(e,t){switch(t){case"metric":return e>1e3?{distance:w(e,"meters","kilometers"),unit:"kilometer"}:e>1?{distance:e,unit:"meter"}:e>.01?{distance:w(e,"meters","centimeters"),unit:"centimeter"}:{distance:w(e,"meters","millimeters"),unit:"millimeter"};case"imperial":return e>1609.344?{distance:w(e,"meters","miles"),unit:"mile"}:e>.3048?{distance:w(e,"meters","feet"),unit:"foot"}:{distance:w(e,"meters","inches"),unit:"inch"}}}function q(e){var s;const{isWebMercator:t,wkt:i,wkt2:n}=e;return t||(((s=n||i)==null?void 0:s.includes("WGS_1984_Web_Mercator"))??!1)}function M({state:{paddedViewState:e},spatialReference:t,width:i}){return t.isWrappable&&e.worldScreenWidth<i}function S(e,t){const{x:i,y:n}=e?F(t,!0):t;return[i,n]}let _=class extends R{constructor(t){super(t),this.scaleComputedFrom=f(),this.view=null}get state(){var t,i;return(t=this.view)!=null&&t.ready&&((i=this.view)==null?void 0:i.type)==="2d"?"ready":"disabled"}getScaleBarProperties(t,i){if(this.state==="disabled"||isNaN(t)||!i||!this.view)return null;const n=this._getDistanceInMeters();return n==null?null:this._getScaleBarProps(t,n,i)}_getDistanceInMeters(){const{state:t,spatialReference:i}=this.view;if(!x(i))return null;const{isGeographic:n}=i,s=q(i);if(!n&&!s)return t.extent.width*(P(i)??1);const[l,c]=this._getScaleMeasuringPoints(),m=s||n&&!V(i)?W.WGS84:i,b=new I({paths:[[S(s,l),S(s,c)]],spatialReference:m}),a=O(b,10);let v;try{[v]=H([a],"meters")}catch{return null}return v}_getScaleMeasuringPoints(){const t=this.view,{width:i,height:n,position:s,spatialReference:l}=t;if(M(t)){const a=U(l),{valid:v}=a;return[new C(v[0],0,l),new C(v[1],0,l)]}let c=this.scaleComputedFrom.y-s[1];c>n?c=n:c<0&&(c=0);const m=f(0,c),b=f(i,c);return[t.toMap(m),t.toMap(b)]}_getScaleBarProps(t,i,n){const s=this.view,l=t*i/(M(s)?s.state.paddedViewState.worldScreenWidth:s.width);if(l<.001)return null;const c=Y(l,n),{distance:m,unit:b}=c;let a=m,v=0;for(;a>=1;)a/=10,v++;const{min:g,max:y}=X(a),$=y/a>=a/g?g:y;return{length:t*($/a),value:10**v*$,unit:b}}};u([h()],_.prototype,"scaleComputedFrom",void 0),u([h({readOnly:!0})],_.prototype,"state",null),u([h()],_.prototype,"view",void 0),_=u([k("esri.widgets.ScaleBar.ScaleBarViewModel")],_);const A=_;function L(e,t){return G(e,{style:"unit",unit:t,unitDisplay:"short"})}let p=class extends z{constructor(e,t){super(e,t),this.messages=null,this.style="line",this.viewModel=new A}initialize(){this.addHandles(D(()=>{const{view:e}=this;return[e==null?void 0:e.stationary,e==null?void 0:e.center,e==null?void 0:e.scale,e==null?void 0:e.zoom]},([e])=>{e&&this.scheduleRender()}))}get icon(){return"actual-size"}set icon(e){this._overrideIfSome("icon",e)}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get unit(){return this._defaultUnit}set unit(e){this._overrideIfSome("unit",e)}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}render(){const e=this.viewModel.state==="disabled",t={[B.disabled]:e};let i,n;if(!e){const{unit:s,style:l}=this,c=s==="metric"||s==="dual",m=100,b=s==="dual"?"line":l;if(s==="imperial"||s==="dual"){const a=this.viewModel.getScaleBarProperties(m,"imperial");a&&(n=b==="ruler"?this._renderRuler(a):this._renderLine(a,"bottom"))}if(c){const a=this.viewModel.getScaleBarProperties(m,"metric");a&&(i=b==="ruler"?this._renderRuler(a):this._renderLine(a,"top"))}}return d("div",{afterCreate:this._handleRootCreateOrUpdate,afterUpdate:this._handleRootCreateOrUpdate,bind:this,class:this.classes(r.base,B.widget,t)},i,n)}_renderRuler(e){const{length:t,unit:i,value:n}=e,s=Math.round(t),l=L(n,i);return d("div",{class:this.classes(r.barContainer,r.rulerBarContainer),key:r.rulerBarContainer},d("div",{class:r.ruler,styles:{width:`${s}px`}},d("div",{class:r.rulerBlock}),d("div",{class:r.rulerBlock}),d("div",{class:r.rulerBlock}),d("div",{class:r.rulerBlock})),d("div",{class:this.classes(r.labelContainer,r.rulerLabelContainer)},d("div",{class:r.label},"0"),d("div",{class:r.label},l)))}_renderLine(e,t){const{length:i,unit:n,value:s}=e,l=Math.round(i),c=L(s,n),m={[r.topLabelContainer]:t==="top",[r.bottomLabelContainer]:t==="bottom"},b=d("div",{class:this.classes(r.labelContainer,r.lineLabelContainer,m),key:r.labelContainer},d("div",{class:r.label},c)),a={[r.topLine]:t==="top",[r.bottomLine]:t==="bottom"},v=d("div",{class:this.classes(r.line,a),key:r.line,styles:{width:`${l}px`}});return d("div",{class:this.classes(r.barContainer,r.lineBarContainer),key:r.lineBarContainer},[v,b])}_handleRootCreateOrUpdate(e){if(!this.viewModel)return;const{scaleComputedFrom:t}=this.viewModel,i=e.getBoundingClientRect(),n=i.left+window.pageXOffset,s=i.top+window.pageYOffset,l=f(n,s);(l.x!==t.x||l.y!==t.y)&&(this.viewModel.scaleComputedFrom=l)}};u([h(N)],p.prototype,"_defaultUnit",void 0),u([h()],p.prototype,"icon",null),u([h()],p.prototype,"label",null),u([h(),j("esri/widgets/ScaleBar/t9n/ScaleBar")],p.prototype,"messages",void 0),u([h({type:["ruler","line"]})],p.prototype,"style",void 0),u([h({type:["metric","imperial","dual"]})],p.prototype,"unit",null),u([h()],p.prototype,"view",null),u([h()],p.prototype,"viewModel",void 0),p=u([k("esri.widgets.ScaleBar")],p);const Z=p;export{Z as default};
