import{c5 as b,ca as h,v as e,y as i,bI as B,de as v,lq as I,z as m,w as c,aN as d,bw as U,gg as J,bH as W}from"./index-BfC8i6jT.js";import{f as S,S as j,g as u,p as O,k as g,T as f,N as V,w as M}from"./networkEnums-BI5QoQ7_.js";import{r as T,i as P,e as D,s as N,j as q,n as x}from"./Stop-BXXX8a5F.js";var C;let l=C=class extends b(c){constructor(t){super(t),this.directionLineType=null,this.directionPointId=null,this.distance=null,this.duration=null,this.fromLevel=null,this.geometry=null,this.objectId=null,this.popupTemplate=null,this.symbol=null,this.toLevel=null,this.type="direction-line"}static fromGraphic(t){return new C({directionLineType:S.fromJSON(t.attributes.DirectionLineType),directionPointId:t.attributes.DirectionPointID,distance:t.attributes.Meters,duration:t.attributes.Minutes,fromLevel:t.attributes.FromLevel??null,geometry:t.geometry,objectId:t.attributes.ObjectID??t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,symbol:t.symbol,toLevel:t.attributes.ToLevel??null})}toGraphic(){const t={ObjectID:this.objectId,DirectionLineType:this.directionLineType!=null?S.toJSON(this.directionLineType):null,DirectionPointID:this.directionPointId,Meters:this.distance,Minutes:this.duration};return this.fromLevel!=null&&(t.FromLevel=this.fromLevel),this.toLevel!=null&&(t.ToLevel=this.toLevel),new h({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}};l.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"DirectionLineType",alias:"Line Type",type:"esriFieldTypeInteger"},{name:"DirectionPointID",alias:"Direction Point ID",type:"esriFieldTypeInteger"},{name:"FromLevel",alias:"From Level",type:"esriFieldTypeInteger"},{name:"Meters",alias:"Meters",type:"esriFieldTypeDouble"},{name:"Minutes",alias:"Minutes",type:"esriFieldTypeDouble"},{name:"ToLevel",alias:"To Level",type:"esriFieldTypeInteger"}],e([i({type:S.apiValues,json:{read:{source:"attributes.DirectionLineType",reader:S.read}}})],l.prototype,"directionLineType",void 0),e([i({json:{read:{source:"attributes.DirectionPointID"}}})],l.prototype,"directionPointId",void 0),e([i({json:{read:{source:"attributes.Meters"}}})],l.prototype,"distance",void 0),e([i({json:{read:{source:"attributes.Minutes"}}})],l.prototype,"duration",void 0),e([i({json:{read:{source:"attributes.FromLevel"}}})],l.prototype,"fromLevel",void 0),e([i({type:B})],l.prototype,"geometry",void 0),e([i({json:{read:{source:"attributes.ObjectID"}}})],l.prototype,"objectId",void 0),e([i({type:v})],l.prototype,"popupTemplate",void 0),e([i({types:I})],l.prototype,"symbol",void 0),e([i({json:{read:{source:"attributes.ToLevel"}}})],l.prototype,"toLevel",void 0),e([i({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),l=C=e([m("esri.rest.support.DirectionLine")],l);const H=l;var F;let a=F=class extends b(c){constructor(t){super(t),this.alternateName=null,this.arrivalTime=null,this.arrivalTimeOffset=null,this.azimuth=null,this.branchName=null,this.directionPointType=null,this.displayText=null,this.exitName=null,this.geometry=null,this.intersectingName=null,this.level=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.sequence=null,this.shortVoiceInstruction=null,this.stopId=null,this.symbol=null,this.towardName=null,this.type="direction-point",this.voiceInstruction=null}readArrivalTime(t,r){return r.attributes.ArrivalTime!=null?new Date(r.attributes.ArrivalTime):null}static fromGraphic(t){return new F({alternateName:t.attributes.AlternateName??null,arrivalTime:t.attributes.ArrivalTime!=null?new Date(t.attributes.ArrivalTime):null,arrivalTimeOffset:t.attributes.ArrivalUTCOffset??null,azimuth:t.attributes.Azimuth??null,branchName:t.attributes.BranchName??null,directionPointType:j.fromJSON(t.attributes.DirectionPointType),displayText:t.attributes.DisplayText??null,exitName:t.attributes.ExitName??null,geometry:t.geometry,intersectingName:t.attributes.IntersectingName??null,level:t.attributes.Level??null,name:t.attributes.Name??null,objectId:t.attributes.ObjectID??t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,sequence:t.attributes.Sequence,shortVoiceInstruction:t.attributes.ShortVoiceInstruction??null,stopId:t.attributes.StopID??null,symbol:t.symbol,towardName:t.attributes.TowardName??null,voiceInstruction:t.attributes.VoiceInstruction??null})}toGraphic(){const t={ObjectID:this.objectId,DirectionPointType:this.directionPointType!=null?j.toJSON(this.directionPointType):null,Sequence:this.sequence,StopID:this.stopId};return this.alternateName!=null&&(t.AlternateName=this.alternateName),this.arrivalTime!=null&&(t.ArrivalTime=this.arrivalTime.getTime()),this.arrivalTimeOffset!=null&&(t.ArrivalUTCOffset=this.arrivalTimeOffset),this.azimuth!=null&&(t.Azimuth=this.azimuth),this.branchName!=null&&(t.BranchName=this.branchName),this.displayText!=null&&(t.DisplayText=this.displayText),this.exitName!=null&&(t.ExitName=this.exitName),this.intersectingName!=null&&(t.IntersectingName=this.intersectingName),this.level!=null&&(t.Level=this.level),this.name!=null&&(t.Name=this.name),this.shortVoiceInstruction!=null&&(t.ShortVoiceInstruction=this.shortVoiceInstruction),this.towardName!=null&&(t.TowardName=this.towardName),this.voiceInstruction!=null&&(t.VoiceInstruction=this.voiceInstruction),new h({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}};a.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"AlternateName",alias:"Alternative Name",type:"esriFieldTypeString"},{name:"ArrivalTime",alias:"Arrival Time",type:"esriFieldTypeDate"},{name:"ArrivalUTCOffset",alias:"Arrival Time Offset",type:"esriFieldTypeInteger"},{name:"Azimuth",alias:"Azimuth",type:"esriFieldTypeDouble"},{name:"BranchName",alias:"Branch Name",type:"esriFieldTypeString"},{name:"DirectionPointType",alias:"Directions Point Type",type:"esriFieldTypeInteger"},{name:"DisplayText",alias:"Display Text",type:"esriFieldTypeString"},{name:"ExitName",alias:"Exit Name",type:"esriFieldTypeString"},{name:"IntersectingName",alias:"Intersecting Name",type:"esriFieldTypeString"},{name:"Level",alias:"Level",type:"esriFieldTypeInteger"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"Sequence",alias:"Sequence",type:"esriFieldTypeInteger"},{name:"ShortVoiceInstruction",alias:"Short Voice Instruction",type:"esriFieldTypeString"},{name:"StopID",alias:"Stop ID",type:"esriFieldTypeInteger"},{name:"TowardName",alias:"Toward Name",type:"esriFieldTypeString"},{name:"VoiceInstruction",alias:"Voice Instruction",type:"esriFieldTypeString"}],e([i({json:{read:{source:"attributes.AlternateName"}}})],a.prototype,"alternateName",void 0),e([i()],a.prototype,"arrivalTime",void 0),e([d("arrivalTime",["attributes.ArrivalTime"])],a.prototype,"readArrivalTime",null),e([i({json:{read:{source:"attributes.ArrivalUTCOffset"}}})],a.prototype,"arrivalTimeOffset",void 0),e([i({json:{read:{source:"attributes.Azimuth"}}})],a.prototype,"azimuth",void 0),e([i({json:{read:{source:"attributes.BranchName"}}})],a.prototype,"branchName",void 0),e([i({type:j.apiValues,json:{read:{source:"attributes.DirectionPointType",reader:j.read}}})],a.prototype,"directionPointType",void 0),e([i({json:{read:{source:"attributes.DisplayText"}}})],a.prototype,"displayText",void 0),e([i({json:{read:{source:"attributes.ExitName"}}})],a.prototype,"exitName",void 0),e([i({type:U})],a.prototype,"geometry",void 0),e([i({json:{read:{source:"attributes.IntersectingName"}}})],a.prototype,"intersectingName",void 0),e([i()],a.prototype,"level",void 0),e([i({json:{read:{source:"attributes.Name"}}})],a.prototype,"name",void 0),e([i({json:{read:{source:"attributes.ObjectID"}}})],a.prototype,"objectId",void 0),e([i({type:v})],a.prototype,"popupTemplate",void 0),e([i({json:{read:{source:"attributes.Sequence"}}})],a.prototype,"sequence",void 0),e([i({json:{read:{source:"attributes.ShortVoiceInstruction"}}})],a.prototype,"shortVoiceInstruction",void 0),e([i({json:{read:{source:"attributes.StopID"}}})],a.prototype,"stopId",void 0),e([i({types:I})],a.prototype,"symbol",void 0),e([i({json:{read:{source:"attributes.TowardName"}}})],a.prototype,"towardName",void 0),e([i({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),e([i({json:{read:{source:"attributes.VoiceInstruction"}}})],a.prototype,"voiceInstruction",void 0),a=F=e([m("esri.rest.support.DirectionPoint")],a);const K=a;var A;let o=A=class extends b(c){constructor(t){super(t),this.addedCost=null,this.barrierType=null,this.costs=null,this.curbApproach=null,this.fullEdge=null,this.geometry=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.sideOfEdge=null,this.sourceId=null,this.sourceOid=null,this.status=null,this.symbol=null,this.type="point-barrier"}readCosts(t,r){return T(r.attributes,"Attr_")}writeCosts(t,r){P(t,r,"Attr_")}static fromGraphic(t){return new A({addedCost:t.attributes.AddedCost??null,barrierType:t.attributes.BarrierType!=null?u.fromJSON(t.attributes.BarrierType):null,costs:t.attributes.Costs!=null?D(JSON.parse(t.attributes.Costs)):null,curbApproach:t.attributes.CurbApproach!=null?O.fromJSON(t.attributes.CurbApproach):null,fullEdge:t.attributes.FullEdge!=null?g.fromJSON(t.attributes.FullEdge):null,geometry:t.geometry,name:t.attributes.Name??null,objectId:t.attributes.ObjectID??t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,status:t.attributes.Status!=null?f.fromJSON(t.attributes.Status):null,symbol:t.symbol})}toGraphic(){const t={ObjectID:this.objectId,AddedCost:this.addedCost,BarrierType:this.barrierType!=null?u.toJSON(this.barrierType):null,Costs:this.costs!=null?JSON.stringify(N(this.costs)):null,CurbApproach:this.curbApproach!=null?O.toJSON(this.curbApproach):null,FullEdge:this.fullEdge!=null?g.toJSON(this.fullEdge):null,Name:this.name,Status:this.status!=null?f.toJSON(this.status):null};return new h({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}};o.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"AddedCost",alias:"Added Cost",type:"esriFieldTypeDouble"},{name:"BarrierType",alias:"Barrier Type",type:"esriFieldTypeInteger"},{name:"Costs",alias:"Costs",type:"esriFieldTypeString"},{name:"CurbApproach",alias:"Curb Approach",type:"esriFieldTypeInteger"},{name:"FullEdge",alias:"Full Edge",type:"esriFieldTypeInteger"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"Status",alias:"Status",type:"esriFieldTypeInteger"}],e([i()],o.prototype,"addedCost",void 0),e([i({type:u.apiValues,json:{name:"attributes.BarrierType",read:{reader:u.read},write:{writer:u.write}}})],o.prototype,"barrierType",void 0),e([i()],o.prototype,"costs",void 0),e([d("costs",["attributes"])],o.prototype,"readCosts",null),e([J("costs")],o.prototype,"writeCosts",null),e([i({constructOnly:!0,type:O.apiValues,json:{read:{source:"attributes.CurbApproach",reader:O.read}}})],o.prototype,"curbApproach",void 0),e([i({type:g.apiValues,json:{name:"attributes.FullEdge",read:{reader:g.read},write:{writer:g.write}}})],o.prototype,"fullEdge",void 0),e([i({type:U,json:{write:!0}})],o.prototype,"geometry",void 0),e([i({json:{name:"attributes.Name"}})],o.prototype,"name",void 0),e([i({json:{name:"attributes.ObjectID"}})],o.prototype,"objectId",void 0),e([i({type:v})],o.prototype,"popupTemplate",void 0),e([i({type:V.apiValues,json:{read:{source:"attributes.SideOfEdge",reader:V.read}}})],o.prototype,"sideOfEdge",void 0),e([i({json:{read:{source:"attributes.SourceID"}}})],o.prototype,"sourceId",void 0),e([i({json:{read:{source:"attributes.SourceOID"}}})],o.prototype,"sourceOid",void 0),e([i({type:f.apiValues,json:{read:{source:"attributes.Status",reader:f.read}}})],o.prototype,"status",void 0),e([i({types:I})],o.prototype,"symbol",void 0),e([i({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),o=A=e([m("esri.rest.support.PointBarrier")],o);const Q=o;var w;let n=w=class extends b(c){constructor(t){super(t),this.barrierType=null,this.costs=null,this.geometry=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.scaleFactor=null,this.symbol=null,this.type="polygon-barrier"}readCosts(t,r){return T(r.attributes,"Attr_")}writeCosts(t,r){P(t,r,"Attr_")}static fromGraphic(t){return new w({barrierType:t.attributes.BarrierType!=null?u.fromJSON(t.attributes.BarrierType):null,costs:t.attributes.Costs!=null?D(JSON.parse(t.attributes.Costs)):null,geometry:t.geometry,name:t.attributes.Name??null,objectId:t.attributes.ObjectID??t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,scaleFactor:t.attributes.ScaleFactor??null,symbol:t.symbol})}toGraphic(){const t={ObjectID:this.objectId,BarrierType:this.barrierType!=null?u.toJSON(this.barrierType):null,Costs:this.costs!=null?JSON.stringify(N(this.costs)):null,Name:this.name??null,ScaleFactor:this.scaleFactor??null};return new h({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}};n.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"BarrierType",alias:"Barrier Type",type:"esriFieldTypeInteger"},{name:"Costs",alias:"Costs",type:"esriFieldTypeString"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"ScaleFactor",alias:"Scale Factor",type:"esriFieldTypeDouble"}],e([i({type:u.apiValues,json:{name:"attributes.BarrierType",read:{reader:u.read},write:{writer:u.write}}})],n.prototype,"barrierType",void 0),e([i()],n.prototype,"costs",void 0),e([d("costs",["attributes"])],n.prototype,"readCosts",null),e([J("costs")],n.prototype,"writeCosts",null),e([i({type:W,json:{write:!0}})],n.prototype,"geometry",void 0),e([i({json:{name:"attributes.Name"}})],n.prototype,"name",void 0),e([i({json:{name:"attributes.ObjectID"}})],n.prototype,"objectId",void 0),e([i({type:v})],n.prototype,"popupTemplate",void 0),e([i()],n.prototype,"scaleFactor",void 0),e([i({types:I})],n.prototype,"symbol",void 0),e([i({readOnly:!0,json:{read:!1}})],n.prototype,"type",void 0),n=w=e([m("esri.rest.support.PolygonBarrier")],n);const X=n;var L;let p=L=class extends b(c){constructor(t){super(t),this.barrierType=null,this.costs=null,this.geometry=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.scaleFactor=null,this.symbol=null,this.type="polyline-barrier"}readCosts(t,r){return T(r.attributes,"Attr_")}static fromGraphic(t){return new L({barrierType:t.attributes.BarrierType!=null?u.fromJSON(t.attributes.BarrierType):null,costs:t.attributes.Costs!=null?D(JSON.parse(t.attributes.Costs)):null,geometry:t.geometry,name:t.attributes.Name??null,objectId:t.attributes.ObjectID??t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,scaleFactor:t.attributes.ScaleFactor??null,symbol:t.symbol})}toGraphic(){const t={ObjectID:this.objectId,BarrierType:this.barrierType!=null?u.toJSON(this.barrierType):null,Costs:this.costs!=null?JSON.stringify(N(this.costs)):null,Name:this.name,ScaleFactor:this.scaleFactor};return new h({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}};p.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"BarrierType",alias:"Barrier Type",type:"esriFieldTypeInteger"},{name:"Costs",alias:"Costs",type:"esriFieldTypeString"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"ScaleFactor",alias:"Scale Factor",type:"esriFieldTypeDouble"}],e([i({type:u.apiValues,json:{read:{source:"attributes.BarrierType",reader:u.read}}})],p.prototype,"barrierType",void 0),e([i()],p.prototype,"costs",void 0),e([d("costs",["attributes"])],p.prototype,"readCosts",null),e([i({type:B,json:{write:!0}})],p.prototype,"geometry",void 0),e([i({json:{name:"attributes.Name"}})],p.prototype,"name",void 0),e([i({json:{name:"attributes.ObjectID"}})],p.prototype,"objectId",void 0),e([i({type:v})],p.prototype,"popupTemplate",void 0),e([i()],p.prototype,"scaleFactor",void 0),e([i({types:I})],p.prototype,"symbol",void 0),e([i({readOnly:!0,json:{read:!1}})],p.prototype,"type",void 0),p=L=e([m("esri.rest.support.PolylineBarrier")],p);const Y=p;let y=class extends c{constructor(t){super(t),this.accumulateAttributes=null,this.directionsLanguage=null,this.findBestSequence=null,this.preserveFirstStop=null,this.preserveLastStop=null,this.startTimeIsUTC=null,this.timeWindowsAreUTC=null,this.travelMode=null}readAccumulateAttributes(t){return t==null?null:t.map(r=>M.fromJSON(r))}writeAccumulateAttributes(t,r,$){t!=null&&t.length&&(r[$]=t.map(_=>M.toJSON(_)))}};e([i({type:[String],json:{name:"accumulateAttributeNames",write:!0}})],y.prototype,"accumulateAttributes",void 0),e([d("accumulateAttributes")],y.prototype,"readAccumulateAttributes",null),e([J("accumulateAttributes")],y.prototype,"writeAccumulateAttributes",null),e([i({type:String,json:{write:!0}})],y.prototype,"directionsLanguage",void 0),e([i({type:Boolean,json:{write:!0}})],y.prototype,"findBestSequence",void 0),e([i({type:Boolean,json:{write:!0}})],y.prototype,"preserveFirstStop",void 0),e([i({type:Boolean,json:{write:!0}})],y.prototype,"preserveLastStop",void 0),e([i({type:Boolean,json:{write:!0}})],y.prototype,"startTimeIsUTC",void 0),e([i({type:Boolean,json:{write:!0}})],y.prototype,"timeWindowsAreUTC",void 0),e([i({type:q,json:{write:!0}})],y.prototype,"travelMode",void 0),y=e([m("esri.rest.support.RouteSettings")],y);const G=y;var E;let s=E=class extends b(c){constructor(t){super(t),this.analysisSettings=null,this.endTime=null,this.endTimeOffset=null,this.firstStopId=null,this.geometry=null,this.lastStopId=null,this.messages=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.startTime=null,this.startTimeOffset=null,this.stopCount=null,this.symbol=null,this.totalCosts=null,this.totalDistance=null,this.totalDuration=null,this.totalLateDuration=null,this.totalViolations=null,this.totalWait=null,this.totalWaitDuration=null,this.type="route-info",this.version="1.0.0"}readEndTime(t,r){return r.attributes.EndTimeUTC!=null?new Date(r.attributes.EndTimeUTC):null}readEndTimeOffset(t,r){return x(r.attributes.EndTime,r.attributes.EndTimeUTC)}readStartTime(t,r){return r.attributes.StartTimeUTC!=null?new Date(r.attributes.StartTimeUTC):null}readStartTimeOffset(t,r){return x(r.attributes.StartTime,r.attributes.StartTimeUTC)}readTotalCosts(t,r){return T(r.attributes,"Total_")}readTotalViolations(t,r){return T(r.attributes,"TotalViolation_")}readTotalWait(t,r){return T(r.attributes,"TotalWait_")}static fromGraphic(t){return new E({analysisSettings:t.attributes.AnalysisSettings!=null?G.fromJSON(JSON.parse(t.attributes.AnalysisSettings)):null,endTime:t.attributes.EndTime!=null?new Date(t.attributes.EndTime):null,endTimeOffset:t.attributes.EndUTCOffset??null,geometry:t.geometry,messages:t.attributes.Messages!=null?JSON.parse(t.attributes.Messages):null,name:t.attributes.RouteName,objectId:t.attributes.ObjectID??t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,startTime:t.attributes.StartTime!=null?new Date(t.attributes.StartTime):null,startTimeOffset:t.attributes.StartUTCOffset??null,symbol:t.symbol,totalCosts:t.attributes.TotalCosts!=null?D(JSON.parse(t.attributes.TotalCosts)):null,totalDistance:t.attributes.TotalMeters??null,totalDuration:t.attributes.TotalMinutes??null,totalLateDuration:t.attributes.TotalLateMinutes??null,totalWaitDuration:t.attributes.TotalWaitMinutes??null,version:t.attributes.Version})}toGraphic(){const t={ObjectID:this.objectId,AnalysisSettings:this.analysisSettings!=null?JSON.stringify(this.analysisSettings.toJSON()):null,EndTime:this.endTime!=null?this.endTime.getTime():null,EndUTCOffset:this.endTimeOffset,Messages:this.messages!=null?JSON.stringify(this.messages):null,RouteName:this.name,StartTime:this.startTime!=null?this.startTime.getTime():null,StartUTCOffset:this.startTimeOffset,TotalCosts:this.totalCosts!=null?JSON.stringify(N(this.totalCosts)):null,TotalLateMinutes:this.totalLateDuration,TotalMeters:this.totalDistance,TotalMinutes:this.totalDuration,TotalWaitMinutes:this.totalWaitDuration,Version:this.version};return new h({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}};s.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"AnalysisSettings",alias:"Analysis Settings",type:"esriFieldTypeString"},{name:"EndTime",alias:"End Time",type:"esriFieldTypeDate"},{name:"EndUTCOffset",alias:"End Time Offset",type:"esriFieldTypeInteger"},{name:"Messages",alias:"Messages",type:"esriFieldTypeString"},{name:"RouteName",alias:"Route Name",type:"esriFieldTypeString"},{name:"StartTime",alias:"Start Time",type:"esriFieldTypeDate"},{name:"StartUTCOffset",alias:"Start Time Offset",type:"esriFieldTypeInteger"},{name:"TotalCosts",alias:"Total Costs",type:"esriFieldTypeString"},{name:"TotalLateMinutes",alias:"Total Late Minutes",type:"esriFieldTypeDouble"},{name:"TotalMeters",alias:"Total Meters",type:"esriFieldTypeDouble"},{name:"TotalMinutes",alias:"Total Minutes",type:"esriFieldTypeDouble"},{name:"TotalWaitMinutes",alias:"Total Wait Minutes",type:"esriFieldTypeDouble"},{name:"Version",alias:"Version",type:"esriFieldTypeString"}],e([i()],s.prototype,"analysisSettings",void 0),e([i()],s.prototype,"endTime",void 0),e([d("endTime",["attributes.EndTimeUTC"])],s.prototype,"readEndTime",null),e([i()],s.prototype,"endTimeOffset",void 0),e([d("endTimeOffset",["attributes.EndTime","attributes.EndTimeUTC"])],s.prototype,"readEndTimeOffset",null),e([i({json:{read:{source:"attributes.FirstStopID"}}})],s.prototype,"firstStopId",void 0),e([i({type:B})],s.prototype,"geometry",void 0),e([i({json:{read:{source:"attributes.LastStopID"}}})],s.prototype,"lastStopId",void 0),e([i()],s.prototype,"messages",void 0),e([i({json:{read:{source:"attributes.Name"}}})],s.prototype,"name",void 0),e([i({json:{read:{source:"attributes.ObjectID"}}})],s.prototype,"objectId",void 0),e([i({type:v})],s.prototype,"popupTemplate",void 0),e([i()],s.prototype,"startTime",void 0),e([d("startTime",["attributes.StartTimeUTC"])],s.prototype,"readStartTime",null),e([i()],s.prototype,"startTimeOffset",void 0),e([d("startTimeOffset",["attributes.StartTime","attributes.StartTimeUTC"])],s.prototype,"readStartTimeOffset",null),e([i({json:{read:{source:"attributes.StopCount"}}})],s.prototype,"stopCount",void 0),e([i({types:I})],s.prototype,"symbol",void 0),e([i()],s.prototype,"totalCosts",void 0),e([d("totalCosts",["attributes"])],s.prototype,"readTotalCosts",null),e([i()],s.prototype,"totalDistance",void 0),e([i()],s.prototype,"totalDuration",void 0),e([i()],s.prototype,"totalLateDuration",void 0),e([i()],s.prototype,"totalViolations",void 0),e([d("totalViolations",["attributes"])],s.prototype,"readTotalViolations",null),e([i()],s.prototype,"totalWait",void 0),e([d("totalWait",["attributes"])],s.prototype,"readTotalWait",null),e([i()],s.prototype,"totalWaitDuration",void 0),e([i({readOnly:!0,json:{read:!1}})],s.prototype,"type",void 0),e([i()],s.prototype,"version",void 0),s=E=e([m("esri.rest.support.RouteInfo")],s);const Z=s;export{Q as C,Z as S,X as T,G as a,H as c,Y as j,K as y};
