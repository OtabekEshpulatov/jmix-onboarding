function i(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const f=Object.getOwnPropertyDescriptor(r,o);f&&Object.defineProperty(e,o,f.get?f:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var s={},c={get exports(){return s},set exports(e){s=e}};(function(e,n){(function(){ace.require(["ace/snippets/swift"],function(t){e&&(e.exports=t)})})()})(c);const a=s,p=i({__proto__:null,default:a},[s]);export{p as s};