function f(e,s){for(var t=0;t<s.length;t++){const r=s[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const c=Object.getOwnPropertyDescriptor(r,o);c&&Object.defineProperty(e,o,c.get?c:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n={},i={get exports(){return n},set exports(e){n=e}};(function(e,s){(function(){ace.require(["ace/snippets/json"],function(t){e&&(e.exports=t)})})()})(i);const a=n,p=f({__proto__:null,default:a},[n]);export{p as j};
