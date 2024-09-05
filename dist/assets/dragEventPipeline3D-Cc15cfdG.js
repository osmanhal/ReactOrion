import{ga as m,gN as E,bw as S,ep as i,fy as y,fB as H,gO as g,gP as T,ft as C,eC as $,fv as M,fx as P,fw as b}from"./index-BfC8i6jT.js";import{t as R,S as I,E as h,F,j as G,e as U}from"./plane-ByuX_NXR.js";import{m as A,h as k}from"./sphere-BgvJtIjV.js";import{p as q}from"./elevationInfoUtils-Dkzy2V0O.js";import{g as w}from"./ray-8l9wECN6.js";import{T as B,e as _,i as j}from"./ElevationProvider-BU9L4pxM.js";import{w as O}from"./verticalOffsetUtils-Bdqba6xa.js";import{w as z}from"./InteractiveToolBase-Q2z5Ov3P.js";function J(n,r){return v(n,()=>r)}function on(n){return v(n,r=>r.plane)}function v(n,r){const t=i(),l=i();let o=!1;return e=>{const a=r(e);if(e.action==="start"){const c=m(e.screenStart,E(R.get())),u=w(n.state.camera,c,x);u!=null&&(o=I(a,u,t))}if(!o)return null;const s=m(e.screenEnd,E(R.get())),d=w(n.state.camera,s,x);return d==null?null:I(a,d,l)?{...e,renderStart:t,renderEnd:l,plane:a,ray:d}:null}}function K(n,r,t=0,l=null,o=null){let e=null;return a=>{if(a.action==="start"&&(e=n.sceneIntersectionHelper.intersectElevationFromScreen(g(a.screenStart.x,a.screenStart.y),r,t,o),e!=null&&l!=null&&!T(e,e,l))||e==null)return null;const s=n.sceneIntersectionHelper.intersectElevationFromScreen(g(a.screenEnd.x,a.screenEnd.y),r,t,o);return s!=null&&(l==null||T(s,s,l))?{...a,mapStart:e,mapEnd:s}:null}}function L(n,r,t,l=null,o=null){return K(n,t,q(r,n,t),l,o)}function sn(n,r,t,l){const o=t.toMap(n.screenStart);return o!=null?L(r,o,t.elevationInfo,l):null}function Q(n,r){const t=N,l=D,o=h();n.renderCoordsHelper.worldUpAtPosition(r,t);const e=C(F(o),t,$(l,r,n.state.camera.eye));return C(e,e,t),G(r,e,o)}function an(n,r,t){let l=null;const o=new z;return o.next(J(n,Q(n,r))).next(V(n,r)).next(W(n,t)).next(e=>{e.mapEnd.x=e.mapStart.x,e.mapEnd.y=e.mapStart.y,l=e}),e=>(l=null,o.execute(e),l)}function V(n,r){const t=i(),l=y(r);n.renderCoordsHelper.worldUpAtPosition(r,t);const o=i(),e=i(),a=s=>($(s,s,r),U(t,s,s),n.viewingMode==="global"&&y(s)*Math.sign(M(t,s))<.001-l&&$(s,P(s,t,.001),r),b(s,s,r),s);return s=>(s.renderStart=a(H(o,s.renderStart)),s.renderEnd=a(H(e,s.renderEnd)),s)}function un(n,r){const t=l=>{const o=m(l,E(R.get())),e=w(n.state.camera,o,x);return e==null?null:k(r,e,N,D)[1]};return l=>{const o=t(l.screenStart);if(o==null)return null;const e=t(l.screenEnd);return e==null?null:{...l,renderStart:o,renderEnd:e}}}function W(n,r){const t=n.renderCoordsHelper;return l=>{const o=t.fromRenderCoords(l.renderStart,new S({spatialReference:r})),e=t.fromRenderCoords(l.renderEnd,new S({spatialReference:r}));return o!=null&&e!=null?{...l,mapStart:o,mapEnd:e}:null}}var f;function cn(n){let r=null;return t=>{switch(t.action){case"start":r=n.disableDisplay();break;case"end":case"cancel":r!=null&&(r.remove(),r=null)}return t}}function dn(n,r=null){const t=B(n.state.viewingMode);t.options.selectionMode=!0,t.options.store=_.MIN,t.options.hud=!1;const l=g(),o={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},e=i(),a=r??n.spatialReference,s=c=>{n.map.ground&&n.map.ground.opacity<1?o.exclude.add(O):o.exclude.delete(O),n.sceneIntersectionHelper.intersectIntersectorScreen(m(c,l),t,o);const u=t.results.min;let p;if(u.getIntersectionPoint(e))p=u.intersector===j.TERRAIN?f.GROUND:f.OTHER;else{if(!t.results.ground.getIntersectionPoint(e))return null;p=f.GROUND}return{location:n.renderCoordsHelper.fromRenderCoords(e,new S({spatialReference:a})),surfaceType:p}};let d;return c=>{if(c.action==="start"){const p=s(c.screenStart);d=p!=null?p.location:null}if(d==null)return null;const u=s(c.screenEnd);return(u==null?void 0:u.location)!=null?{...c,mapStart:d,mapEnd:u.location,surfaceType:u.surfaceType}:null}}(function(n){n[n.GROUND=0]="GROUND",n[n.OTHER=1]="OTHER"})(f||(f={}));const N=i(),D=i(),x=A();export{W as A,on as C,L as D,f as F,an as G,sn as M,J as O,un as k,cn as q,dn as z};
