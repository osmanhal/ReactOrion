import{v as t,y as r,ei as p,z as w,w as g,aN as f,gg as m,A as I,s as M,U as N,ke as $,nt as Q,q as X,J as Y,c5 as L,nk as _,g6 as tt,bF as q,x as et,aR as rt,bL as ot}from"./index-BfC8i6jT.js";import{w as h,D as P,o as it,q as st,a as F,b as nt,R as lt,M as C,l as at,U as pt,r as ut,c as dt,m as ct}from"./networkEnums-BI5QoQ7_.js";import{j as k}from"./Stop-BXXX8a5F.js";import{t as yt}from"./commonProperties-DHiB1uzW.js";let u=class extends g{constructor(i){super(i),this.dataType=null,this.name=null,this.parameterNames=null,this.restrictionUsageParameterName=null,this.timeNeutralAttributeName=null,this.trafficSupport=null,this.units=null,this.usageType=null}};t([r({type:String})],u.prototype,"dataType",void 0),t([p(h,{ignoreUnknown:!1})],u.prototype,"name",void 0),t([r({type:[String]})],u.prototype,"parameterNames",void 0),t([r({type:String})],u.prototype,"restrictionUsageParameterName",void 0),t([p(P,{ignoreUnknown:!1})],u.prototype,"timeNeutralAttributeName",void 0),t([r({type:String})],u.prototype,"trafficSupport",void 0),t([p(it)],u.prototype,"units",void 0),t([p(st)],u.prototype,"usageType",void 0),u=t([w("esri.rest.support.NetworkAttribute")],u);const mt=u;let v=class extends g{constructor(i){super(i),this.buildTime=null,this.name=null,this.networkAttributes=null,this.networkSources=null,this.state=null}};t([r({type:Number})],v.prototype,"buildTime",void 0),t([r({type:String})],v.prototype,"name",void 0),t([r({type:[mt]})],v.prototype,"networkAttributes",void 0),t([r()],v.prototype,"networkSources",void 0),t([r({type:String})],v.prototype,"state",void 0),v=t([w("esri.rest.support.NetworkDataset")],v);const vt=v;let a=class extends g{constructor(i){super(i),this.accumulateAttributeNames=null,this.attributeParameterValues=null,this.currentVersion=null,this.defaultTravelMode=null,this.directionsLanguage=null,this.directionsLengthUnits=null,this.directionsSupportedLanguages=null,this.directionsTimeAttribute=null,this.hasZ=null,this.impedance=null,this.networkDataset=null,this.supportedTravelModes=null}readAccumulateAttributes(i){return i==null?null:i.map(s=>h.fromJSON(s))}writeAccumulateAttributes(i,s,n){i!=null&&i.length&&(s[n]=i.map(l=>h.toJSON(l)))}get capabilities(){return{supportsNow:(this.currentVersion??10)>=10.81}}readDefaultTravelMode(i,s){var l,y;const n=((l=s.supportedTravelModes)==null?void 0:l.find(({id:c})=>c===s.defaultTravelMode))??((y=s.supportedTravelModes)==null?void 0:y.find(({itemId:c})=>c===s.defaultTravelMode));return n?k.fromJSON(n):null}};t([r()],a.prototype,"accumulateAttributeNames",void 0),t([f("accumulateAttributeNames")],a.prototype,"readAccumulateAttributes",null),t([m("accumulateAttributeNames")],a.prototype,"writeAccumulateAttributes",null),t([r()],a.prototype,"attributeParameterValues",void 0),t([r()],a.prototype,"capabilities",null),t([r()],a.prototype,"currentVersion",void 0),t([r()],a.prototype,"defaultTravelMode",void 0),t([f("defaultTravelMode",["defaultTravelMode","supportedTravelModes"])],a.prototype,"readDefaultTravelMode",null),t([r()],a.prototype,"directionsLanguage",void 0),t([p(F)],a.prototype,"directionsLengthUnits",void 0),t([r()],a.prototype,"directionsSupportedLanguages",void 0),t([p(P,{ignoreUnknown:!1})],a.prototype,"directionsTimeAttribute",void 0),t([r()],a.prototype,"hasZ",void 0),t([p(h,{ignoreUnknown:!1})],a.prototype,"impedance",void 0),t([r({type:vt})],a.prototype,"networkDataset",void 0),t([r({type:[k]})],a.prototype,"supportedTravelModes",void 0),a=t([w("esri.rest.support.NetworkServiceDescription")],a);const ht=a,wt=()=>Y.getLogger("esri.rest.networkService");function Jt(e,i,s,n){n[s]=[i.length,i.length+e.length],e.forEach(l=>{i.push(l.geometry)})}function Dt(e,i){for(let s=0;s<i.length;s++){const n=e[i[s]];if(n&&n.length)for(const l of n)l.z=void 0}wt().warnOnce(`The remote Network Analysis service is powered by a network dataset which is not Z-aware.
Z-coordinates of the input geometry are ignored.`)}function Et(e,i){for(let s=0;s<i.length;s++){const n=e[i[s]];if(n&&n.length){for(const l of n)if(l!=null&&l.hasZ)return!0}}return!1}async function xt(e,i,s){if(!e)throw new I("network-service:missing-url","Url to Network service is missing");const n=M({f:"json",token:i},s),{data:l}=await N(e,n),y=l.currentVersion>=10.4?gt(e,i,s):ft(e,s),{defaultTravelMode:c,supportedTravelModes:b}=await y;return l.defaultTravelMode=c,l.supportedTravelModes=b,ht.fromJSON(l)}async function ft(e,i){var E,x,V;const s=M({f:"json"},i),{data:n}=await N(e.replace(/\/rest\/.*$/i,"/info"),s);if(!(n!=null&&n.owningSystemUrl))return{supportedTravelModes:[],defaultTravelMode:null};const{owningSystemUrl:l}=n,y=$(l)+"/sharing/rest/portals/self",{data:c}=await N(y,s),b=Q("helperServices.routingUtilities.url",c);if(!b)return{supportedTravelModes:[],defaultTravelMode:null};const R=X(l),G=/\/solve$/i.test(R.path)?"Route":/\/solveclosestfacility$/i.test(R.path)?"ClosestFacility":"ServiceAreas",W=M({f:"json",serviceName:G},i),z=$(b)+"/GetTravelModes/execute",A=await N(z,W),J=[];let D=null;if((x=(E=A==null?void 0:A.data)==null?void 0:E.results)!=null&&x.length){const H=A.data.results;for(const T of H)if(T.paramName==="supportedTravelModes"){if((V=T.value)!=null&&V.features){for(const{attributes:Z}of T.value.features)if(Z){const K=JSON.parse(Z.TravelMode);J.push(K)}}}else T.paramName==="defaultTravelMode"&&(D=T.value)}return{supportedTravelModes:J,defaultTravelMode:D}}async function gt(e,i,s){try{const n=M({f:"json",token:i},s),l=$(e)+"/retrieveTravelModes",{data:{supportedTravelModes:y,defaultTravelMode:c}}=await N(l,n);return{supportedTravelModes:y,defaultTravelMode:c}}catch(n){throw new I("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:n})}}let d=class extends L(g){constructor(e){super(e),this.doNotLocateOnRestrictedElements=null,this.geometry=null,this.geometryType=null,this.name=null,this.spatialRelationship=null,this.type="layer",this.where=null}};t([r({type:Boolean,json:{write:!0}})],d.prototype,"doNotLocateOnRestrictedElements",void 0),t([r({types:_,json:{read:tt,write:!0}})],d.prototype,"geometry",void 0),t([p(nt)],d.prototype,"geometryType",void 0),t([r({type:String,json:{name:"layerName",write:!0}})],d.prototype,"name",void 0),t([p(lt,{name:"spatialRel"})],d.prototype,"spatialRelationship",void 0),t([r({type:String,json:{write:!0}})],d.prototype,"type",void 0),t([r({type:String,json:{write:!0}})],d.prototype,"where",void 0),d=t([w("esri.rest.support.DataLayer")],d);const Tt=d;var O;let B=O=class extends q{constructor(e){super(e),this.doNotLocateOnRestrictedElements=null}clone(){return new O({doNotLocateOnRestrictedElements:this.doNotLocateOnRestrictedElements,...this.cloneProperties()})}};t([r({type:Boolean,json:{write:!0}})],B.prototype,"doNotLocateOnRestrictedElements",void 0),B=O=t([w("esri.rest.support.NetworkFeatureSet")],B);const St=B;let S=class extends L(g){constructor(e){super(e),this.doNotLocateOnRestrictedElements=null,this.url=null}};t([r({type:Boolean,json:{write:!0}})],S.prototype,"doNotLocateOnRestrictedElements",void 0),t([r({type:String,json:{write:!0}})],S.prototype,"url",void 0),S=t([w("esri.rest.support.NetworkUrl")],S);const Nt=S;var U;let o=U=class extends L(g){constructor(e){super(e),this.accumulateAttributes=null,this.apiKey=null,this.attributeParameterValues=null,this.directionsLanguage=null,this.directionsLengthUnits=null,this.directionsOutputType=null,this.directionsStyleName=null,this.directionsTimeAttribute=null,this.findBestSequence=null,this.geometryPrecision=null,this.geometryPrecisionM=null,this.geometryPrecisionZ=null,this.ignoreInvalidLocations=null,this.impedanceAttribute=null,this.outputGeometryPrecision=null,this.outputGeometryPrecisionUnits=null,this.outputLines="true-shape",this.outSpatialReference=null,this.overrides=null,this.pointBarriers=null,this.polygonBarriers=null,this.polylineBarriers=null,this.preserveFirstStop=null,this.preserveLastStop=null,this.preserveObjectID=null,this.restrictionAttributes=null,this.restrictUTurns=null,this.returnBarriers=!1,this.returnDirections=!1,this.returnPolygonBarriers=!1,this.returnPolylineBarriers=!1,this.returnRoutes=!0,this.returnStops=!1,this.returnTraversedEdges=null,this.returnTraversedJunctions=null,this.returnTraversedTurns=null,this.returnZ=!0,this.startTime=null,this.startTimeIsUTC=!0,this.stops=null,this.timeWindowsAreUTC=null,this.travelMode=null,this.useHierarchy=null,this.useTimeWindows=null}static from(e){return et(U,e)}readAccumulateAttributes(e){return e==null?null:e.map(i=>h.fromJSON(i))}writeAccumulateAttributes(e,i,s){e!=null&&e.length&&(i[s]=e.map(n=>h.toJSON(n)))}writePointBarriers(e,i,s){j(e,i,s)}writePolygonBarrier(e,i,s){j(e,i,s)}writePolylineBarrier(e,i,s){j(e,i,s)}readRestrictionAttributes(e){return e==null?null:e.map(i=>C.fromJSON(i))}writeRestrictionAttributes(e,i,s){e!=null&&e.length&&(i[s]=e.map(n=>C.toJSON(n)))}readStartTime(e,i){const{startTime:s}=i;return s==null?null:s==="now"?"now":new Date(s)}writeStartTime(e,i){e!=null&&(i.startTime=e==="now"?"now":e.getTime())}readStops(e,i){return Mt(i.stops)}writeStops(e,i,s){j(e,i,s)}};t([r({type:[String],json:{name:"accumulateAttributeNames",write:!0}})],o.prototype,"accumulateAttributes",void 0),t([f("accumulateAttributes")],o.prototype,"readAccumulateAttributes",null),t([m("accumulateAttributes")],o.prototype,"writeAccumulateAttributes",null),t([r(yt)],o.prototype,"apiKey",void 0),t([r({json:{write:!0}})],o.prototype,"attributeParameterValues",void 0),t([r({type:String,json:{write:!0}})],o.prototype,"directionsLanguage",void 0),t([p(F)],o.prototype,"directionsLengthUnits",void 0),t([p(at)],o.prototype,"directionsOutputType",void 0),t([p(pt)],o.prototype,"directionsStyleName",void 0),t([p(P,{name:"directionsTimeAttributeName",ignoreUnknown:!1})],o.prototype,"directionsTimeAttribute",void 0),t([r({type:Boolean,json:{write:!0}})],o.prototype,"findBestSequence",void 0),t([r({type:Number,json:{write:!0}})],o.prototype,"geometryPrecision",void 0),t([r({type:Number,json:{write:!0}})],o.prototype,"geometryPrecisionM",void 0),t([r({type:Number,json:{write:!0}})],o.prototype,"geometryPrecisionZ",void 0),t([r({type:Boolean,json:{write:!0}})],o.prototype,"ignoreInvalidLocations",void 0),t([p(h,{name:"impedanceAttributeName",ignoreUnknown:!1})],o.prototype,"impedanceAttribute",void 0),t([r({type:Number,json:{write:!0}})],o.prototype,"outputGeometryPrecision",void 0),t([p(ut)],o.prototype,"outputGeometryPrecisionUnits",void 0),t([p(dt)],o.prototype,"outputLines",void 0),t([r({type:rt,json:{name:"outSR",write:!0}})],o.prototype,"outSpatialReference",void 0),t([r({json:{write:!0}})],o.prototype,"overrides",void 0),t([r({json:{name:"barriers",write:!0}})],o.prototype,"pointBarriers",void 0),t([m("pointBarriers")],o.prototype,"writePointBarriers",null),t([r({json:{write:!0}})],o.prototype,"polygonBarriers",void 0),t([m("polygonBarriers")],o.prototype,"writePolygonBarrier",null),t([r({json:{write:!0}})],o.prototype,"polylineBarriers",void 0),t([m("polylineBarriers")],o.prototype,"writePolylineBarrier",null),t([r({type:Boolean,json:{write:!0}})],o.prototype,"preserveFirstStop",void 0),t([r({type:Boolean,json:{write:!0}})],o.prototype,"preserveLastStop",void 0),t([r({type:Boolean,json:{write:!0}})],o.prototype,"preserveObjectID",void 0),t([r({type:[String],json:{name:"restrictionAttributeNames",write:!0}})],o.prototype,"restrictionAttributes",void 0),t([f("restrictionAttributes")],o.prototype,"readRestrictionAttributes",null),t([m("restrictionAttributes")],o.prototype,"writeRestrictionAttributes",null),t([p(ct)],o.prototype,"restrictUTurns",void 0),t([r({type:Boolean,json:{write:!0}})],o.prototype,"returnBarriers",void 0),t([r({type:Boolean,json:{write:!0}})],o.prototype,"returnDirections",void 0),t([r({type:Boolean,json:{write:!0}})],o.prototype,"returnPolygonBarriers",void 0),t([r({type:Boolean,json:{write:!0}})],o.prototype,"returnPolylineBarriers",void 0),t([r({type:Boolean,json:{write:!0}})],o.prototype,"returnRoutes",void 0),t([r({type:Boolean,json:{write:!0}})],o.prototype,"returnStops",void 0),t([r({type:Boolean,json:{write:!0}})],o.prototype,"returnTraversedEdges",void 0),t([r({type:Boolean,json:{write:!0}})],o.prototype,"returnTraversedJunctions",void 0),t([r({type:Boolean,json:{write:!0}})],o.prototype,"returnTraversedTurns",void 0),t([r({type:Boolean,json:{write:!0}})],o.prototype,"returnZ",void 0),t([r({json:{write:!0}})],o.prototype,"startTime",void 0),t([f("startTime")],o.prototype,"readStartTime",null),t([m("startTime")],o.prototype,"writeStartTime",null),t([r({type:Boolean,json:{write:!0}})],o.prototype,"startTimeIsUTC",void 0),t([r({json:{write:!0}})],o.prototype,"stops",void 0),t([f("stops")],o.prototype,"readStops",null),t([m("stops")],o.prototype,"writeStops",null),t([r({type:Boolean,json:{write:!0}})],o.prototype,"timeWindowsAreUTC",void 0),t([r({type:k,json:{write:!0}})],o.prototype,"travelMode",void 0),t([r({type:Boolean,json:{write:!0}})],o.prototype,"useHierarchy",void 0),t([r({type:Boolean,json:{write:!0}})],o.prototype,"useTimeWindows",void 0),o=U=t([w("esri.rest.support.RouteParameters")],o);const Vt=o;function bt(e){return e&&"type"in e}function At(e){return e&&"features"in e&&"doNotLocateOnRestrictedElements"in e}function jt(e){return e&&"url"in e}function Bt(e){return e&&"features"in e}function Mt(e){return bt(e)?Tt.fromJSON(e):jt(e)?Nt.fromJSON(e):At(e)?St.fromJSON(e):Bt(e)?q.fromJSON(e):null}function j(e,i,s){e!=null&&(i[s]=ot.isCollection(e)?{features:e.toArray().map(n=>n.toJSON())}:e.toJSON())}export{Vt as O,Et as c,xt as d,Dt as f,Jt as u};
