import{r as s,c as e,g as i}from"./index-BfC8i6jT.js";import{W as a}from"./index-d2df902e-D01h2zDg.js";import{u as r}from"./chunk-PVEVZB4O-2c3b8893-CJtkO-Cs.js";import{u as n}from"./index-c99fc80c-RHgdcwLk.js";import{m as o}from"./useWidget-9b153437-CGxQkulZ.js";import"./component-utils-de9339fe-Dlc67iIs.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.7
 */const h="arcgis-measurement{}",g=h,c=o(a),m=class{constructor(t){s(this,t),this.arcgisReady=e(this,"arcgisReady",7),this.arcgisPropertyChange=e(this,"arcgisPropertyChange",7),this.manager=n(this),this.widget=c(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=r()("activeTool","state"),this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.activeTool=this.widget.activeTool,this.activeWidget=this.widget.activeWidget,this.areaUnit=this.widget.areaUnit,this.icon=this.widget.icon,this.label=this.widget.label,this.linearUnit=this.widget.linearUnit,this.position="bottom-left",this.state=this.viewModel.state}async clear(){var t;(t=this.widget)==null||t.clear()}async destroy(){await this.manager.destroy()}async startMeasurement(){var t;(t=this.widget)==null||t.startMeasurement()}get el(){return i(this)}};m.style=g;export{m as arcgis_measurement};
