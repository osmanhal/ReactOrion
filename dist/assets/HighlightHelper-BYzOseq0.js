import{v as o,y as r,z as l,W as a}from"./index-BfC8i6jT.js";import{r as g}from"./layerUtils-BS1Di3Pm.js";import{n as m}from"./layerViewUtils-D2JqIDZ8.js";import{N as s}from"./featureUtils-fuV9QSvg.js";let t=class extends a{constructor(e){super(e),this.view=null}add(e){const i=!e||Array.isArray(e)?e:[e];i!=null&&i.length&&i.forEach(h=>this._highlight(h))}remove(e){const i=!e||Array.isArray(e)?e:[e];i!=null&&i.length&&i.forEach(h=>this._removeHighlight(h))}removeAll(){this.removeAllHandles()}_highlight(e){const i=g(this.view,e.layer);m(i)&&this.addHandles(i.highlight(e),s(e))}_removeHighlight(e){e&&this.removeHandles(s(e))}};o([r()],t.prototype,"view",void 0),t=o([l("esri.views.draw.support.HighlightHelper")],t);const c=t;export{c as h};
