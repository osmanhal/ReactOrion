import{A as s}from"./index-BfC8i6jT.js";import{U as m,L as u,G as t,P as c}from"./enums-BlUEVwJR.js";class h{constructor(a,l,e,r){this.dataType=a,this.samplingMode=l,this.pixelFormat=e,this.internalFormat=r}}function L(o,a){const{textureFloatLinear:l,colorBufferFloat:e}=o.capabilities,r=e==null?void 0:e.textureFloat,n=e==null?void 0:e.textureHalfFloat,_=e==null?void 0:e.floatBlend,i=o.driverTest.floatBufferBlend.result;if(!r&&!n)throw new s("heatmap:missing-color-buffer-float","HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.");if(!(_&&i||n))throw new s("heatmap:missing-float-blend","HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float."+(i?"":" This device claims support for EXT_float_blend, but does not actually support it."));const b=r&&_&&i,R=n,f=l,p=!!(e!=null&&e.R32F),d=!!(e!=null&&e.R16F);if(b&&f)return f||a.warnOnce("Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced."),new h(m.FLOAT,f?u.LINEAR:u.NEAREST,p?t.RED:t.RGBA,p?c.R32F:t.RGBA);if(R)return new h(m.HALF_FLOAT,u.LINEAR,d?t.RED:t.RGBA,d?c.R16F:t.RGBA);throw new s("heatmap:missing-hardware-support","HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.")}export{L as n};
