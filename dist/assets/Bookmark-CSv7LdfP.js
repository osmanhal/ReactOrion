import{c6 as y,w as h,ge as g,J as m,gf as w,A as v,X as c,v as n,y as a,gd as d,aN as b,gg as x,z as f}from"./index-BfC8i6jT.js";import{u as p,s as N}from"./timeProperties-BLP-Lo-9.js";var l;let e=l=class extends y(h){constructor(t){super(t),this.name=null,this.thumbnail=new p,this.timeExtent=null}castThumbnail(t){return typeof t=="string"?new p({url:t}):g(p,t)}set viewpoint(t){const{targetGeometry:o,scale:s}=t;o!=null&&o.type==="point"&&s==null&&m.getLogger(this).warn("Bookmark.viewpoint should include 'scale' when its targetGeometry is a point.",t),this._set("viewpoint",t)}readViewpoint(t,o){const{extent:s,viewpoint:i}=o;return w.fromJSON(i||{targetGeometry:s})}writeViewpoint(t,o,s,i){if(!t)return;const{targetGeometry:r}=t;if(r==null||r.type==="extent")r!=null&&(o.extent=r.toJSON()),o[s]=t.toJSON();else{const u="Bookmark.viewpoint cannot be written to JSON when the viewpoint's targetGeometry is not an extent.";i!=null&&i.messages?i.messages.push(new v("property:unsupported",u)):m.getLogger(this).error(u)}}clone(){return new l(c({name:this.name,thumbnail:this.thumbnail,timeExtent:this.timeExtent,viewpoint:this.viewpoint}))}};n([a({type:String,nonNullable:!0,json:{write:{isRequired:!0}}})],e.prototype,"name",void 0),n([a({type:p,json:{write:{overridePolicy:t=>({enabled:!(!t||!t.url)})}}})],e.prototype,"thumbnail",void 0),n([d("thumbnail")],e.prototype,"castThumbnail",null),n([a(N)],e.prototype,"timeExtent",void 0),n([a({type:w,nonNullable:!0,json:{write:!0}})],e.prototype,"viewpoint",null),n([b("viewpoint",["extent","viewpoint"])],e.prototype,"readViewpoint",null),n([x("viewpoint")],e.prototype,"writeViewpoint",null),e=l=n([f("esri.webmap.Bookmark")],e);const G=e;export{G as f};
