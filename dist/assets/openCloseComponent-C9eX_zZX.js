import{e9 as r}from"./index-BfC8i6jT.js";import{w as s}from"./dom-Bb9h_pls.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.1
 */const n=r;function i(e){return"opened"in e?e.opened:e.open}function f(e){n(()=>{e.transitionEl&&s(e.transitionEl,e.openTransitionProp,()=>{i(e)?e.onBeforeOpen():e.onBeforeClose()},()=>{i(e)?e.onOpen():e.onClose()})})}export{f as o};
