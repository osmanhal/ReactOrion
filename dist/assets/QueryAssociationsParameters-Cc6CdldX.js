import{v as r,y as s,z as n,w as a,x as m}from"./index-BfC8i6jT.js";import{p as y,i as o}from"./UtilityNetwork--bZaYIGn.js";var i;let t=i=class extends a{static from(e){return m(i,e)}constructor(e){super(e),this.returnDeletes=!1,this.elements=[],this.types=[],this.gdbVersion=null,this.moment=null}};r([s({type:Boolean,json:{write:!0}})],t.prototype,"returnDeletes",void 0),r([s({type:[y],json:{write:!0}})],t.prototype,"elements",void 0),r([s({type:[o.apiValues],json:{type:o.jsonValues,read:o.read,write:o.write}})],t.prototype,"types",void 0),r([s({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),r([s({type:Date,json:{type:Number,write:{writer:(e,p)=>{p.moment=e==null?void 0:e.getTime()}}}})],t.prototype,"moment",void 0),t=i=r([n("esri.rest.networks.support.QueryAssociationsParameters")],t);const d=t;export{d as default};
