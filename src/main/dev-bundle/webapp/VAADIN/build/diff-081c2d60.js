function o(t,p){for(var r=0;r<p.length;r++){const e=p[r];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in t)){const s=Object.getOwnPropertyDescriptor(e,n);s&&Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i={},f={get exports(){return i},set exports(t){i=t}};(function(t,p){ace.define("ace/snippets/diff.snippets",["require","exports","module"],function(r,e,n){n.exports='# DEP-3 (http://dep.debian.net/deps/dep3/) style patch header\nsnippet header DEP-3 style header\n	Description: ${1}\n	Origin: ${2:vendor|upstream|other}, ${3:url of the original patch}\n	Bug: ${4:url in upstream bugtracker}\n	Forwarded: ${5:no|not-needed|url}\n	Author: ${6:`g:snips_author`}\n	Reviewed-by: ${7:name and email}\n	Last-Update: ${8:`strftime("%Y-%m-%d")`}\n	Applied-Upstream: ${9:upstream version|url|commit}\n\n'}),ace.define("ace/snippets/diff",["require","exports","module","ace/snippets/diff.snippets"],function(r,e,n){e.snippetText=r("./diff.snippets"),e.scope="diff"}),function(){ace.require(["ace/snippets/diff"],function(r){t&&(t.exports=r)})}()})(f);const a=i,d=o({__proto__:null,default:a},[i]);export{d};