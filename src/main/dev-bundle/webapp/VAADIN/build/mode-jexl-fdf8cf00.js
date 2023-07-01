function R(d,v){for(var r=0;r<v.length;r++){const l=v[r];if(typeof l!="string"&&!Array.isArray(l)){for(const h in l)if(h!=="default"&&!(h in d)){const c=Object.getOwnPropertyDescriptor(l,h);c&&Object.defineProperty(d,h,c.get?c:{enumerable:!0,get:()=>l[h]})}}}return Object.freeze(Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}))}var k={},b={get exports(){return k},set exports(d){k=d}};(function(d,v){ace.define("ace/mode/jexl_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,l,h){var c=r("../lib/oop"),f=r("./text_highlight_rules").TextHighlightRules,p=function(){var x="return|var|function|and|or|not|if|for|while|do|continue|break",e="null",t="empty|size|new",n=this.createKeywordMapper({keyword:x,"constant.language":e,"support.function":t},"identifier"),i="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}||.)";this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},{token:"comment",regex:"##.*$"},{token:"comment",regex:"\\/\\*",next:"comment"},{token:["comment","text"],regex:"(#pragma)(\\s.*$)"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"string",regex:"`",push:[{token:"constant.language.escape",regex:i},{token:"string",regex:"`",next:"pop"},{token:"lparen",regex:"\\${",push:[{token:"rparen",regex:"}",next:"pop"},{include:"start"}]},{defaultToken:"string"}]},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F][0-9a-fA-F_]*|[bB][01][01_]*)[LlSsDdFfYy]?\b/},{token:"constant.numeric",regex:/[+-]?\d[\d_]*(?:(?:\.[\d_]*)?(?:[eE][+-]?[\d_]+)?)?[LlSsDdFfYy]?\b/},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:"string.regexp",regex:"~/",push:[{token:"constant.language.escape",regex:"\\\\/"},{token:"string.regexp",regex:"$|/",next:"pop"},{defaultToken:"string.regexp"}]},{token:n,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"&&|\\|\\||!|&|\\||\\^|~|\\?|:|\\?\\?|==|!=|<|<=|>|>=|=~|!~|=\\^|=\\$|!\\$|\\+|\\-|\\*|%|\\/|="},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"},{token:"punctuation",regex:"[,.]"},{token:"storage.type.annotation",regex:"@[a-zA-Z_$][a-zA-Z0-9_$]*\\b"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]},this.normalizeRules()};c.inherits(p,f),l.JexlHighlightRules=p}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(r,l,h){var c=r("../../lib/oop"),f=r("../../range").Range,p=r("./fold_mode").FoldMode,x=l.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};c.inherits(x,p),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var i=e.getLine(n);if(this.singleLineBlockCommentRe.test(i)&&!this.startRegionRe.test(i)&&!this.tripleStarBlockCommentRe.test(i))return"";var a=this._getFoldWidgetBase(e,t,n);return!a&&this.startRegionRe.test(i)?"start":a},this.getFoldWidgetRange=function(e,t,n,i){var a=e.getLine(n);if(this.startRegionRe.test(a))return this.getCommentRegionBlock(e,a,n);var o=a.match(this.foldingStartMarker);if(o){var s=o.index;if(o[1])return this.openingBracketBlock(e,o[1],n,s);var g=e.getCommentFoldRange(n,s+o[0].length,1);return g&&!g.isMultiLine()&&(i?g=this.getSectionRange(e,n):t!="all"&&(g=null)),g}if(t!=="markbegin"){var o=a.match(this.foldingStopMarker);if(o){var s=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],n,s):e.getCommentFoldRange(n,s,-1)}}},this.getSectionRange=function(e,t){var n=e.getLine(t),i=n.search(/\S/),a=t,s=n.length;t=t+1;for(var g=t,o=e.getLength();++t<o;){n=e.getLine(t);var m=n.search(/\S/);if(m!==-1){if(i>m)break;var u=this.getFoldWidgetRange(e,"all",t);if(u){if(u.start.row<=a)break;if(u.isMultiLine())t=u.end.row;else if(i==m)break}g=t}}return new f(a,s,g,e.getLine(g).length)},this.getCommentRegionBlock=function(e,t,n){for(var i=t.search(/\s*$/),a=e.getLength(),s=n,g=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,o=1;++n<a;){t=e.getLine(n);var m=g.exec(t);if(m&&(m[1]?o--:o++,!o))break}var u=n;if(u>s)return new f(s,i,u,t.length)}}.call(x.prototype)}),ace.define("ace/mode/jexl",["require","exports","module","ace/lib/oop","ace/mode/jexl_highlight_rules","ace/mode/text","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(r,l,h){var c=r("../lib/oop"),f=r("./jexl_highlight_rules").JexlHighlightRules,p=r("./text").Mode,x=r("./behaviour/cstyle").CstyleBehaviour,e=r("./folding/cstyle").FoldMode,t=function(){this.HighlightRules=f,this.$behaviour=new x,this.foldingRules=new e};c.inherits(t,p),function(){this.lineCommentStart=["//","##"],this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/jexl"}.call(t.prototype),l.Mode=t}),function(){ace.require(["ace/mode/jexl"],function(r){d&&(d.exports=r)})}()})(b);const _=k,y=R({__proto__:null,default:_},[k]);export{y as m};
