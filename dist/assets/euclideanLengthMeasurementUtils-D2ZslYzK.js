import{a as o}from"./quantityUtils-B2xRWNSM.js";import{jL as U,f2 as b,ar as M,eS as k,jM as A,cU as R,fU as C,jN as $,fV as d,fs as G,ep as f}from"./index-BfC8i6jT.js";import{n as D}from"./projectVectorToVector-C51LtB8f.js";import{w as L,a as N}from"./spatialReferenceEllipsoidUtils-6vOoKuZD.js";function g(n){return U(n)?b(n)||M(n)||k(n)||A(n)?L:n:N(n)}var a;function O(n){return P(n,a.Horizontal)}function P(n,r){const{hasZ:e,spatialReference:t}=n,c=g(t);let u=0;const s=$(c);if(s==null)return null;const h=r===a.Direct?j:S;for(const z of n.paths){if(z.length<2)continue;const w=z.length-1;for(let p=0;p<w;++p){const y=z[p];i[0]=y[0],i[1]=y[1],i[2]=e?y[2]:0;const v=z[p+1];l[0]=v[0],l[1]=v[1],l[2]=e?v[2]:0;const V=h(i,l,t);if(V==null)return null;u+=V.value}}return o(u,s)}function Q(n,r){const{spatialReference:e}=n;return R(e,r.spatialReference)?(i[0]=n.x,i[1]=n.y,i[2]=n.hasZ?n.z:0,l[0]=r.x,l[1]=r.y,l[2]=r.hasZ?r.z:0,B(i,l,e)):null}function T(n,r){const{spatialReference:e}=n;return R(e,r.spatialReference)?(i[0]=n.x,i[1]=n.y,i[2]=n.hasZ?n.z:0,l[0]=r.x,l[1]=r.y,l[2]=r.hasZ?r.z:0,j(i,l,e)):null}function W(n,r){const{spatialReference:e}=n;return R(e,r.spatialReference)?(i[0]=n.x,i[1]=n.y,i[2]=n.hasZ?n.z:0,l[0]=r.x,l[1]=r.y,l[2]=r.hasZ?r.z:0,S(i,l,e)):null}function X(n,r){const{spatialReference:e}=n;return R(e,r.spatialReference)?(i[0]=n.x,i[1]=n.y,i[2]=n.hasZ?n.z:0,l[0]=r.x,l[1]=r.y,l[2]=r.hasZ?r.z:0,E(i,l,e)):null}function Y(n){return n!=null?q(n.hasZ?n.z:0,n.spatialReference):null}function q(n,r){const e=C(r);return e!=null?o(n??0,e):null}function B(n,r,e){const t=m(n,r,e);return t!=null?{direct:o(t.direct,t.unit),horizontal:o(t.horizontal,t.unit),vertical:o(t.vertical,t.unit)}:null}function j(n,r,e){const t=m(n,r,e,a.Direct);return t!=null?o(t.direct,t.unit):null}function S(n,r,e){const t=m(n,r,e,a.Horizontal);return t!=null?o(t.horizontal,t.unit):null}function E(n,r,e){const t=m(n,r,e,a.Vertical);return t!=null?o(t.verticalSigned,t.unit):null}function m(n,r,e,t){const c=g(e),u=$(c);if(u==null)return null;const s=r[2]-n[2];if(t===a.Vertical)return{verticalSigned:s,unit:u};if(!D(n,e,H,c)||!D(r,e,Z,c))return null;if(t===a.Direct)return{direct:d(Z,H),unit:u};if(G(x,n[0],n[1],r[2]),!D(x,e,x,c))return null;const h=d(x,Z);return t===a.Horizontal?{horizontal:h,unit:u}:{direct:d(Z,H),horizontal:h,vertical:Math.abs(s),unit:u}}(function(n){n[n.Direct=0]="Direct",n[n.Horizontal=1]="Horizontal",n[n.Vertical=2]="Vertical"})(a||(a={}));const i=f(),l=f(),H=f(),Z=f(),x=f();export{Y as R,j as Z,O as f,E as g,Q as h,S as j,g as l,T as m,q as v,X as y,W as z};
