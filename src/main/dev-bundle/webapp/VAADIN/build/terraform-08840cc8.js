function s(e,f){for(var r=0;r<f.length;r++){const t=f[r];if(typeof t!="string"&&!Array.isArray(t)){for(const o in t)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(t,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>t[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n={},c={get exports(){return n},set exports(e){n=e}};(function(e,f){(function(){ace.require(["ace/snippets/terraform"],function(r){e&&(e.exports=r)})})()})(c);const i=n,p=s({__proto__:null,default:i},[n]);export{p as t};
