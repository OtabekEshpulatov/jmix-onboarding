function y(o,p){for(var n=0;n<p.length;n++){const r=p[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in o)){const c=Object.getOwnPropertyDescriptor(r,s);c&&Object.defineProperty(o,s,c.get?c:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var d={},m={get exports(){return d},set exports(o){d=o}};(function(o,p){ace.define("ace/ext/spellcheck",["require","exports","module","ace/lib/event","ace/editor","ace/config"],function(n,r,s){var c=n("../lib/event");r.contextMenuHandler=function(f){var e=f.target,i=e.textInput.getElement();if(e.selection.isEmpty()){var g=e.getCursorPosition(),x=e.session.getWordRange(g.row,g.column),u=e.session.getTextRange(x);if(e.session.tokenRe.lastIndex=0,!!e.session.tokenRe.test(u)){var v="",l=u+" "+v;i.value=l,i.setSelectionRange(u.length,u.length+1),i.setSelectionRange(0,0),i.setSelectionRange(0,u.length);var h=!1;c.addListener(i,"keydown",function t(){c.removeListener(i,"keydown",t),h=!0}),e.textInput.setInputHandler(function(t){if(t==l)return"";if(t.lastIndexOf(l,0)===0)return t.slice(l.length);if(t.substr(i.selectionEnd)==l)return t.slice(0,-l.length);if(t.slice(-2)==v){var a=t.slice(0,-2);if(a.slice(-1)==" ")return h?a.substring(0,i.selectionEnd):(a=a.slice(0,-1),e.session.replace(x,a),"")}return t})}}};var k=n("../editor").Editor;n("../config").defineOptions(k.prototype,"editor",{spellcheck:{set:function(f){var e=this.textInput.getElement();e.spellcheck=!!f,f?this.on("nativecontextmenu",r.contextMenuHandler):this.removeListener("nativecontextmenu",r.contextMenuHandler)},value:!0}})}),function(){ace.require(["ace/ext/spellcheck"],function(n){o&&(o.exports=n)})}()})(m);const b=d,E=y({__proto__:null,default:b},[d]);export{E as e};
