function c(e,a){for(var t=0;t<a.length;t++){const r=a[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const s=Object.getOwnPropertyDescriptor(r,o);s&&Object.defineProperty(e,o,s.get?s:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n={},f={get exports(){return n},set exports(e){n=e}};(function(e,a){(function(){ace.require(["ace/snippets/latte"],function(t){e&&(e.exports=t)})})()})(f);const i=n,p=c({__proto__:null,default:i},[n]);export{p as l};
