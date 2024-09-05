import{eu as q,lD as Y,ep as E,i4 as Q,fA as tt,ja as et,fx as nt,oS as z,et as I,ar as at,jt as A,fU as it,dc as ot,f0 as C,az as lt,v as l,y as s,z as b,W as st,gh as rt,oT as ut}from"./index-BfC8i6jT.js";import{o as V,i as v,f as ct,h as G,s as $,a as H,U as L,d as pt,l as ft}from"./quantityUtils-B2xRWNSM.js";import{_ as ht,w as P}from"./coordinateFormatter-CwkZHkKf.js";import{a as N}from"./meshVertexSpaceUtils-CcfLNHym.js";import{f as mt}from"./keybindings-yv7BPnkG.js";import{G as dt,M as gt,B as h,H as vt,L as yt,J as kt,A as xt,K as j}from"./Tooltip-DDWLW0ZR.js";import{U as bt,A as B,J as T,K as X,B as g}from"./SnappingManager-D5q8LYBJ.js";import{U as $t}from"./quantityFormatUtils-D98c6G2o.js";import{r as It}from"./geodesicLengthMeasurementUtils-Dk04A7GV.js";import{U as Z,j as At,g as wt}from"./euclideanAreaMeasurementUtils-DvT3DYeX.js";import{o as Vt}from"./geodesicAreaMeasurementUtils-ROeBvnrj.js";function Wt(e,n){const t=N(n.vertexSpace),{scale:a,orientation:i}=e,{transform:u}=n,r=Ut(u);t&&r!=null?(i.actual=V(r,"degrees","arithmetic"),i.visible=!0):(i.actual=null,i.visible=!1),t?(a.actual=v(K(u)),a.visible=!0):(a.actual=null,a.visible=!1)}function qt(e,n,t){var M,_,F,R,S,D,O;if(!n||!N(n.vertexSpace))return;const a=n.transform??(n.transform=new Q),{rotationAngle:i,rotationAxis:u}=a,r=bt(e.orientation.actual),c=J(u);if(r!=null&&c!=null&&r!==i){(M=t==null?void 0:t.onRotateStart)==null||M.call(t,i);const f=r*c;a.rotationAngle=f,(_=t==null?void 0:t.onRotate)==null||_.call(t,f),(F=t==null?void 0:t.onRotateStop)==null||F.call(t,f)}const m=(R=e.scale.actual)==null?void 0:R.value,d=K(a);if(m!=null&&m!==d){const{scale:f}=a;let p;if((S=t==null?void 0:t.onScaleStart)==null||S.call(t,f[0],f[1],f[2]),d===0)p=tt(et);else{const W=m/d;p=nt(E(),f,W)}a.scale=p,(D=t==null?void 0:t.onScale)==null||D.call(t,p[0],p[1],p[2]),(O=t==null?void 0:t.onScaleStop)==null||O.call(t,p[0],p[1],p[2])}}function Qt(e,n){const{x:t,y:a,z:i}=n,{x:u,y:r,z:c}=Lt(e,n.spatialReference);return{dx:u==null||I(u,t)?0:u-t,dy:r==null||I(r,a)?0:r-a,dz:c==null||i==null||I(c,i)?0:c-i}}function Lt(e,n){var u,r,c;let t,a,i;if(e.geographic){t=B(e.longitude.actual),a=B(e.latitude.actual),at(n)&&(t!=null&&a!=null?[t,a]=A(t,a,w):t!=null?t=A(t,0,w)[0]:a!=null&&(a=A(0,a,w)[1]));const m=e.elevation.actual,d=it(n);i=d!=null&&m!=null?ct(m,d):void 0}else t=(u=e.x.actual)==null?void 0:u.value,a=(r=e.y.actual)==null?void 0:r.value,i=(c=e.elevation.actual)==null?void 0:c.value;return{x:t,y:a,z:i}}const w=[0,0];function Ut(e){if(!e)return 0;const n=J(e.rotationAxis);return n!=null?n*e.rotationAngle:null}function J(e){return z(e,Y)?1:z(e,Mt)?-1:null}const Mt=q(E(),Y);function K(e){return e?Math.max(...e.scale):1}function te(e,n){return!(e.type!=="key-down"||e.key!==mt.enterInputMode||!n||!_t(n.info))&&(n.enterInputMode(),e.stopPropagation(),!0)}function _t(e){const n=e==null?void 0:e.sketchOptions;if(!n)return!1;const{inputEnabled:t,visibleElements:a}=n.tooltips;return t&&e.editableFields.some(({name:i})=>i==="x"||i==="y"?a.coordinates:a[i])===!0}function ee(e){let n=null;return ot([e.on("paste",async t=>{n==null||n.abort(),n=C(async()=>{ht()||await P(),Ft(t,e.info)})}),C(()=>P()),lt(()=>n==null?void 0:n.abort())])}function Ft(e,n){var a;if(!n||!("geographic"in n))return;const t=(a=e.clipboardData)==null?void 0:a.getData("text");if(t)if(n.geographic){const i=dt(t);i&&(n.longitude.applyValue(i.longitude),n.latitude.applyValue(i.latitude),e.stopPropagation(),e.preventDefault())}else{const i=gt(t);i&&(n.x.applyValue(i.x),n.y.applyValue(i.y),e.stopPropagation(),e.preventDefault())}}let o=class extends st{constructor(e){super(e),this.actual=null,this.lockable=!0,this.id=rt(),this.inputValue=null,this.readOnly=!1,this.suffix=null,this.visible=!0,this.invalid=!1,this.unlockOnVertexPlacement=!0}get committed(){return this.lockable?this._get("committed"):null}set committed(e){this.lockable&&this._set("committed",e)}get dirty(){return this.inputValue!=null}get locked(){return this.lockable&&this.committed!=null}onInput(e){this.inputValue=e}onCommit(e,n,t){this.lockable?this._onCommitLockable(e,t):this._onCommitNonLockable(t),this.invalid&&e==="commit-and-exit"||t.onCommit(n,e)}_onCommitLockable(e,n){const{inputValue:t,locked:a}=this;a&&y(t)?this.unlock():(e==="commit-and-exit"&&!a||t!=null)&&this._parseInputAndLock(n)}_onCommitNonLockable(e){const{inputValue:n}=this;y(n)?this.setActual(null):n!=null&&this._parseInputAndSetActual(e)}applyValue(e){this.lockable?this.lock(e):this.setActual(e)}clearInputValue(){this.inputValue=null,this.invalid=!1}setActual(e){this.actual=e,this.clearInputValue()}lock(e){this.lockable&&(this.committed=e??this.actual,this.clearInputValue())}unlock(){this.lockable&&(this.committed=null,this.clearInputValue())}toggleLock(e){this.lockable&&(this.locked?this.unlock():this._parseInputAndLock(e))}getSuffix(e){const{suffix:n}=this;return typeof n=="function"?n(e):n}getFormattedValue(e){const{actual:n,committed:t,format:a}=this;return t!=null?a(t,e):n!=null?a(n,e):null}getRawDisplayValue(e){const{actual:n,committed:t,inputValue:a}=this;return a??(this.lockable&&t!=null?this.formatForInputMode(t,e):n!=null?this.formatForInputMode(n,e):null)}_parseInputAndSetActual(e){const{inputValue:n}=this;if(n==null||y(n))return this.setActual(null);const t=this.parse(n,e);t!=null?this.setActual(t):this.invalid=!0}_parseInputAndLock(e){const{inputValue:n,actual:t}=this;if(y(n))return this.unlock();if(n==null)return this.lock(t);const a=this.parse(n,e);a!=null?this.lock(a):this.invalid=!0}};function y(e){return e!=null&&e.trim()===""}l([s()],o.prototype,"actual",void 0),l([s()],o.prototype,"committed",null),l([s()],o.prototype,"dirty",null),l([s()],o.prototype,"format",void 0),l([s()],o.prototype,"formatForInputMode",void 0),l([s()],o.prototype,"lockable",void 0),l([s()],o.prototype,"locked",null),l([s()],o.prototype,"id",void 0),l([s()],o.prototype,"inputValue",void 0),l([s()],o.prototype,"name",void 0),l([s()],o.prototype,"parse",void 0),l([s()],o.prototype,"readOnly",void 0),l([s()],o.prototype,"suffix",void 0),l([s()],o.prototype,"title",void 0),l([s()],o.prototype,"visible",void 0),l([s()],o.prototype,"invalid",void 0),l([s()],o.prototype,"unlockOnVertexPlacement",void 0),o=l([b("esri.views.interactive.tooltip.fields.TooltipField")],o);let k=class extends o{constructor(e){super(e),this.showAsZ=!1}normalizeCtorArgs(e){const n=t=>t.inputUnitInfos.verticalLength.unit;return{name:"elevation",actual:G,parse:h((t,a)=>H(t,n(a))),format:(t,a)=>a.formatters.verticalLength(t),formatForInputMode:(t,a)=>a.formatters.scalar($(t,n(a))),suffix:t=>t.inputUnitInfos.verticalLength.abbreviation,title:t=>t.messages.sketch[this.showAsZ?"z":"elevation"],unlockOnVertexPlacement:!1,...e}}};l([s()],k.prototype,"showAsZ",void 0),k=l([b("esri.views.interactive.tooltip.fields.TooltipFieldElevation")],k);let x=class extends o{constructor(e){super(e),this.precision=1}normalizeCtorArgs(e){const n=t=>t.inputUnitInfos.orientation.unit;return{name:"orientation",actual:null,parse:h((t,a)=>V(t,n(a),"geographic")),format:t=>{const a=T(t);return $t(a,"geographic",this.precision)},formatForInputMode:(t,a)=>{const i=T(t);return a.formatters.scalar(i)},suffix:t=>t.inputUnitInfos.orientation.abbreviation,title:t=>t.messages.sketch.orientation,...e}}};l([s()],x.prototype,"precision",void 0),x=l([b("esri.views.interactive.tooltip.fields.TooltipFieldOrientation")],x);function ne(e){const n=a=>a.inputUnitInfos.direction.unit,t=a=>a.sketchOptions.values.effectiveDirectionMode;return new o({name:"direction",actual:L,parse:h((a,i)=>V(a,n(i),"geographic")),format:(a,i)=>{const u=t(i),r=X(a,u);switch(u){case g.Absolute:return i.formatters.direction(r);case g.Relative:return i.formatters.directionRelative(r);case g.RelativeBilateral:return i.formatters.directionRelativeBilateral(r)}},formatForInputMode:(a,i)=>{const u=X(a,t(i));return i.formatters.scalar($(u,n(i)))},suffix:a=>a.inputUnitInfos.direction.abbreviation,title:a=>{const i=t(a),{absolute:u,relative:r}=a.messages.sketch.direction;switch(i){case g.Absolute:return u;case g.Relative:case g.RelativeBilateral:return r}},...e})}function Rt(e){const n=t=>t.inputUnitInfos.length.unit;return new o({name:"distance",actual:G,parse:h((t,a)=>H(Math.max(t,0),n(a))),format:(t,a)=>a.formatters.length(t),formatForInputMode:(t,a)=>a.formatters.scalar($(t,n(a))),suffix:t=>t.inputUnitInfos.length.abbreviation,title:t=>t.messages.sketch.distance,...e})}function ae(){return Rt({format:(e,n)=>n.formatters.totalLength(e),title:e=>e.messages.sketch.totalLength,readOnly:!0})}function St(e){return new k(e)}function ie(e){return new x(e)}function oe(e){return U("scale",{name:"scale",actual:null,parse:h(n=>v(Math.abs(n))),...e})}function le(e){const n=t=>t.inputUnitInfos.area.unit;return new o({name:"area",actual:pt,parse:h((t,a)=>ft(t,n(a))),format:(t,a)=>a.formatters.area(t),formatForInputMode:(t,a)=>a.formatters.scalar($(t,n(a))),suffix:t=>t.inputUnitInfos.area.abbreviation,title:t=>t.messages.sketch.area,readOnly:!0,...e})}function Dt(e){return new o({name:"x",actual:L,parse:vt,format:(n,t)=>t.formatters.longitudeDecimalDegrees(n),formatForInputMode:n=>yt(n),suffix:n=>n.inputUnitInfos.longitudeLatitude.abbreviation,title:n=>n.messages.sketch.longitude,...e})}function Ot(e){return new o({name:"y",actual:L,parse:kt,format:(n,t)=>t.formatters.latitudeDecimalDegrees(n),formatForInputMode:n=>xt(n),suffix:n=>n.inputUnitInfos.longitudeLatitude.abbreviation,title:n=>n.messages.sketch.latitude,...e})}function zt(e){return U("x",{name:"x",...e})}function Ct(e){return U("y",{name:"y",...e})}function U(e,n){return new o({actual:v(0),parse:h(t=>v(t)),format:(t,a)=>a.formatters.scalar(t),formatForInputMode:(t,a)=>a.formatters.scalar(t),title:t=>t.messages.sketch[e],...n})}const se=e=>{let n=class extends e{constructor(){super(...arguments),this.longitude=Dt(),this.latitude=Ot(),this.x=zt(),this.y=Ct(),this.elevation=St(),this.geographic=!1}get effectiveX(){return this.geographic?this.longitude:this.x}get effectiveY(){return this.geographic?this.latitude:this.y}get key(){return{longitude:this.longitude.actual,latitude:this.latitude.actual,x:this.x.actual,y:this.y.actual,elevation:this.elevation.actual,geographic:this.geographic}}setLocationFromPoint(t,a=t==null?void 0:t.spatialReference){if(this.geographic=!!a&&It(a),t==null)return this._setActualLonLat(null,null),void this._setActualXY(null,null);if(this.geographic){const i=ut(t,Pt);this._setActualLonLat(j(i==null?void 0:i[0]),j(i==null?void 0:i[1]))}else this._setActualXY(v(t.x),v(t.y))}_setActualLonLat(t,a){this.longitude.actual=t,this.latitude.actual=a}_setActualXY(t,a){this.x.actual=t,this.y.actual=a}};return l([s()],n.prototype,"geographic",void 0),l([s()],n.prototype,"effectiveX",null),l([s()],n.prototype,"effectiveY",null),l([s()],n.prototype,"key",null),n=l([b("esri.views.interactive.tooltip.infos.TooltipInfoWithCoordinates")],n),n},Pt=[0,0];function jt(e,n,t=Z()){if(n==="on-the-ground"){const a=Vt(e);return a??At(e,t)}return wt(e,t)}function re(e,n=Z()){return jt(e,"on-the-ground",n)}export{Ft as B,oe as F,te as G,Rt as I,le as M,Wt as R,ee as T,ae as U,Qt as V,ne as b,se as h,qt as k,re as u,ie as x};
