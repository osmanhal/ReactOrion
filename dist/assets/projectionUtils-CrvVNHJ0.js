import{eL as i}from"./index-BfC8i6jT.js";import{b as a}from"./ElevationProvider-BU9L4pxM.js";function c(r,t,o,n=!1){const e=i(r,t);return e==null?null:(e.hasZ&&!n||o==null||(e.z=a(o,e)??0),e)}function p(r,t,o){o.warnOnce(`Failed to project analysis geometry (id: '${r.id}'), projection from spatial reference (wkid: '${t.wkid}') to view spatial reference is not supported. Projection may be possible after calling projection.load().`)}export{c as r,p as t};
