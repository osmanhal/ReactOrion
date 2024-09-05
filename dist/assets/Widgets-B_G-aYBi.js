import{v as t,y as n,z as h,w,X as x,B as E,hX as d,bn as v,lP as I,aN as m,gg as c,m9 as j,mO as N,bq as g}from"./index-BfC8i6jT.js";var T;let l=T=class extends w{constructor(e){super(e),this.enabled=!1,this.longNames=!1,this.minimized=!1,this.pinnedLevels=!1,this.site=null,this.facility=null,this.level=null}clone(){return new T(x({enabled:this.enabled,longNames:this.longNames,minimized:this.minimized,pinnedLevels:this.pinnedLevels,site:this.site,facility:this.facility,level:this.level}))}};t([n({type:Boolean,json:{read:{source:"enabled"},write:{target:"enabled"}}})],l.prototype,"enabled",void 0),t([n({type:Boolean,json:{read:{source:"longNames"},write:{target:"longNames"}}})],l.prototype,"longNames",void 0),t([n({type:Boolean,json:{read:{source:"minimized"},write:{target:"minimized"}}})],l.prototype,"minimized",void 0),t([n({type:Boolean,json:{read:{source:"pinnedLevels"},write:{target:"pinnedLevels"}}})],l.prototype,"pinnedLevels",void 0),t([n({type:String,json:{read:{source:"site"},write:{target:"site"}}})],l.prototype,"site",void 0),t([n({type:String,json:{read:{source:"facility"},write:{target:"facility"}}})],l.prototype,"facility",void 0),t([n({type:String,json:{read:{source:"level"},write:{target:"level"}}})],l.prototype,"level",void 0),l=T=t([h("esri.webdoc.widgets.FloorFilter")],l);const R=l;var S;const y=new E({slider:"slider",picker:"picker"});let u=S=class extends w{constructor(e){super(e),this.interactionMode=null,this.numStops=null,this.stopInterval=null}clone(){return new S({interactionMode:this.interactionMode,numStops:this.numStops,stopInterval:this.stopInterval})}};t([n({type:y.apiValues,nonNullable:!0,json:{type:y.jsonValues,default:null,read:{reader:y.read},write:{isRequired:!0,writer:y.write}}})],u.prototype,"interactionMode",void 0),t([n({type:d,json:{read:{source:"numberOfStops"},write:{target:"numberOfStops",overridePolicy(){const e=this.stopInterval!=null;return{enabled:!e,isRequired:!e}}}}})],u.prototype,"numStops",void 0),t([n({type:Number,json:{write:{overridePolicy(){return{isRequired:this.numStops==null}}}}})],u.prototype,"stopInterval",void 0),u=S=t([h("esri.webdoc.widgets.Range")],u);const $=u;var b;let i=b=class extends w{constructor(e){super(e),this.currentTimeExtent=null,this.fullTimeExtent=null,this.loop=!1,this.numStops=null,this.numThumbs=null,this.stopDelay=null,this.stopInterval=null,this.stops=null}readCurrentTimeExtent(e){if(!e)return;const o=e[0]!=null?new Date(e[0]):null,r=e[1]!=null?new Date(e[1]):null;return new v({start:o,end:r})}writeCurrentTimeExtent(e,o,r){e&&g(r,[e.start!=null?e.start.getTime():null,e.end!=null?e.end.getTime():null],o)}readFullTimeExtent(e,o){const r=o.properties;if(!r)return;const s=r.endTime!=null?new Date(r.endTime):null,p=r.startTime!=null?new Date(r.startTime):null;return new v({start:p,end:s})}writeFullTimeExtent(e,o){if(!e)return;const r=o.properties=o.properties||{},s=e.end,p=e.start;s&&(r.endTime=s!=null?s.getTime():null),p&&(r.startTime=p!=null?p.getTime():null)}readStopInterval(e,o,r){return e?j.fromJSON({value:e.interval,unit:e.units},r):null}writeStopInterval(e,o,r,s){if(!e)return;const p=e.toJSON(s);g("properties.timeStopInterval",{interval:p.value,units:p.unit},o)}readStops(e){return e!=null&&e.length?e.map(o=>new Date(o)):null}writeStops(e,o,r){e!=null&&e.length&&g(r,e.map(s=>s.getTime()),o)}clone(){return new b(x({currentTimeExtent:this.currentTimeExtent,fullTimeExtent:this.fullTimeExtent,loop:this.loop,numStops:this.numStops,numThumbs:this.numThumbs,stopDelay:this.stopDelay,stopInterval:this.stopInterval,stops:this.stops}))}};t([n({type:v,json:{type:[[d,I]],read:{source:"properties.currentTimeExtent"},write:{target:"properties.currentTimeExtent"}}})],i.prototype,"currentTimeExtent",void 0),t([m("currentTimeExtent")],i.prototype,"readCurrentTimeExtent",null),t([c("currentTimeExtent")],i.prototype,"writeCurrentTimeExtent",null),t([n({type:v,json:{read:{source:["properties.endTime","properties.startTime"]},write:{target:{"properties.endTime":{type:Number},"properties.startTime":{type:Number}}}}})],i.prototype,"fullTimeExtent",void 0),t([m("fullTimeExtent")],i.prototype,"readFullTimeExtent",null),t([c("fullTimeExtent")],i.prototype,"writeFullTimeExtent",null),t([n({type:Boolean,nonNullable:!0,json:{default:!1,read:{source:"properties.loop"},write:{target:"properties.loop"}}})],i.prototype,"loop",void 0),t([n({type:d,json:{read:{source:"properties.numberOfStops"},write:{target:"properties.numberOfStops",overridePolicy(){var s;const e=!!this.stopInterval,o=!!((s=this.stops)!=null&&s.length),r=!(e||o);return{enabled:r,isRequired:r}}}}})],i.prototype,"numStops",void 0),t([n({type:[1,2],nonNullable:!0,json:{type:d,read:{source:"properties.thumbCount"},write:{target:"properties.thumbCount",isRequired:!0}}})],i.prototype,"numThumbs",void 0),t([n({type:Number,nonNullable:!0,json:{read:{source:"properties.thumbMovingRate"},write:{target:"properties.thumbMovingRate",isRequired:!0}}})],i.prototype,"stopDelay",void 0),t([n({type:j,json:{read:{source:"properties.timeStopInterval"},write:{target:{"properties.timeStopInterval.interval":{type:Number},"properties.timeStopInterval.units":{type:N.jsonValues.filter(e=>e!=="esriTimeUnitsUnknown")}},overridePolicy(){var r;const e=this.numStops!=null,o=!!((r=this.stops)!=null&&r.length);return{enabled:!o,isRequired:!(e||o)}}}}})],i.prototype,"stopInterval",void 0),t([m("stopInterval")],i.prototype,"readStopInterval",null),t([c("stopInterval")],i.prototype,"writeStopInterval",null),t([n({type:[Date],json:{type:[d],read:{source:"properties.stops"},write:{target:"properties.stops",overridePolicy(){return{isRequired:this.numStops==null&&!this.stopInterval}}}}})],i.prototype,"stops",void 0),t([m("stops")],i.prototype,"readStops",null),t([c("stops")],i.prototype,"writeStops",null),i=b=t([h("esri.webdoc.widgets.TimeSlider")],i);const D=i;var f;let a=f=class extends w{constructor(e){super(e),this.range=null,this.timeSlider=null,this.floorFilter=null}clone(){return new f(x({range:this.range,timeSlider:this.timeSlider,floorFilter:this.floorFilter}))}};t([n({type:$,json:{write:!0}})],a.prototype,"range",void 0),t([n({type:D,json:{write:!0}})],a.prototype,"timeSlider",void 0),t([n({type:R,json:{write:!0}})],a.prototype,"floorFilter",void 0),a=f=t([h("esri.webdoc.Widgets")],a);const q=a;export{q as a,R as n,D as y};
