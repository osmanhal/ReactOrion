import{dw as f,U as l}from"./index-BfC8i6jT.js";async function d(e,n,s){var i,c;if(!((i=f)==null?void 0:i.findCredential(e.restUrl)))return null;if(e.loadStatus==="loaded"&&n===""&&((c=e.user)!=null&&c.sourceJSON)&&s===!1)return e.user.sourceJSON;const r={responseType:"json",query:{f:"json"}};if(s&&(r.query.returnUserLicenseTypeExtensions=!0),n===""){const t=await l(e.restUrl+"/community/self",r);if(t.data){const o=t.data;if(o!=null&&o.username)return o}return null}const a=await l(e.restUrl+"/community/users/"+n,r);if(a.data){const t=a.data;return t.error?null:t}return null}async function m(e,n,s){var r;const u=await d(e,n,!0);return((r=u==null?void 0:u.userLicenseTypeExtensions)==null?void 0:r.includes(s))??!1}export{d as n,m as t};
