import{n as r}from"./index-BfC8i6jT.js";import{w as n}from"./dom-0dfcce02-D_EjFIg7.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.1
 */const s=r;function i(e){return"opened"in e?e.opened:e.open}function f(e){s(()=>{e.transitionEl&&n(e.transitionEl,e.openTransitionProp,()=>{i(e)?e.onBeforeOpen():e.onBeforeClose()},()=>{i(e)?e.onOpen():e.onClose()})})}export{f as o};
