function R(v,x){for(var o=0;o<x.length;o++){const s=x[o];if(typeof s!="string"&&!Array.isArray(s)){for(const m in s)if(m!=="default"&&!(m in v)){const h=Object.getOwnPropertyDescriptor(s,m);h&&Object.defineProperty(v,m,h.get?h:{enumerable:!0,get:()=>s[m]})}}}return Object.freeze(Object.defineProperty(v,Symbol.toStringTag,{value:"Module"}))}var k={},_={get exports(){return k},set exports(v){k=v}};(function(v,x){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(o,s,m){var h=o("../lib/oop"),d=o("./text_highlight_rules").TextHighlightRules,l=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},l.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};h.inherits(l,d),l.getTagRule=function(g){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},l.getStartRule=function(g){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:g}},l.getEndRule=function(g){return{token:"comment.doc",regex:"\\*\\/",next:g}},s.DocCommentHighlightRules=l}),ace.define("ace/mode/golang_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(o,s,m){var h=o("../lib/oop"),d=o("./doc_comment_highlight_rules").DocCommentHighlightRules,l=o("./text_highlight_rules").TextHighlightRules,g=function(){var e="else|break|case|return|goto|if|const|select|continue|struct|default|switch|for|range|func|import|package|chan|defer|fallthrough|go|interface|map|range|select|type|var",n="string|uint8|uint16|uint32|uint64|int8|int16|int32|int64|float32|float64|complex64|complex128|byte|rune|uint|int|uintptr|bool|error",t="new|close|cap|copy|panic|panicln|print|println|len|make|delete|real|recover|imag|append",r="nil|true|false|iota",i=this.createKeywordMapper({keyword:e,"constant.language":r,"support.function":t,"support.type":n},""),u=`\\\\(?:[0-7]{3}|x\\h{2}|u{4}|U\\h{6}|[abfnrtv'"\\\\])`.replace(/\\h/g,"[a-fA-F\\d]");this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},d.getStartRule("doc-start"),{token:"comment.start",regex:"\\/\\*",next:"comment"},{token:"string",regex:/"(?:[^"\\]|\\.)*?"/},{token:"string",regex:"`",next:"bqstring"},{token:"constant.numeric",regex:"'(?:[^\\'\uD800-\uDBFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|"+u.replace('"',"")+")'"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:["keyword","text","entity.name.function"],regex:"(func)(\\s+)([a-zA-Z_$][a-zA-Z0-9_$]*)\\b"},{token:function(a){return a[a.length-1]=="("?[{type:i(a.slice(0,-1))||"support.function",value:a.slice(0,-1)},{type:"paren.lparen",value:a.slice(-1)}]:i(a)||"identifier"},regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b\\(?"},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^="},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],bqstring:[{token:"string",regex:"`",next:"start"},{defaultToken:"string"}]},this.embedRules(d,"doc-",[d.getEndRule("start")])};h.inherits(g,l),s.GolangHighlightRules=g}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(o,s,m){var h=o("../range").Range,d=function(){};(function(){this.checkOutdent=function(l,g){return/^\s+$/.test(l)?/^\s*\}/.test(g):!1},this.autoOutdent=function(l,g){var e=l.getLine(g),n=e.match(/^(\s*\})/);if(!n)return 0;var t=n[1].length,r=l.findMatchingBracket({row:g,column:t});if(!r||r.row==g)return 0;var i=this.$getIndent(l.getLine(r.row));l.replace(new h(g,0,g,t-1),i)},this.$getIndent=function(l){return l.match(/^\s*/)[0]}}).call(d.prototype),s.MatchingBraceOutdent=d}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(o,s,m){var h=o("../../lib/oop"),d=o("../../range").Range,l=o("./fold_mode").FoldMode,g=s.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};h.inherits(g,l),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,n,t){var r=e.getLine(t);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var i=this._getFoldWidgetBase(e,n,t);return!i&&this.startRegionRe.test(r)?"start":i},this.getFoldWidgetRange=function(e,n,t,r){var i=e.getLine(t);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,t);var c=i.match(this.foldingStartMarker);if(c){var u=c.index;if(c[1])return this.openingBracketBlock(e,c[1],t,u);var a=e.getCommentFoldRange(t,u+c[0].length,1);return a&&!a.isMultiLine()&&(r?a=this.getSectionRange(e,t):n!="all"&&(a=null)),a}if(n!=="markbegin"){var c=i.match(this.foldingStopMarker);if(c){var u=c.index+c[0].length;return c[1]?this.closingBracketBlock(e,c[1],t,u):e.getCommentFoldRange(t,u,-1)}}},this.getSectionRange=function(e,n){var t=e.getLine(n),r=t.search(/\S/),i=n,u=t.length;n=n+1;for(var a=n,c=e.getLength();++n<c;){t=e.getLine(n);var f=t.search(/\S/);if(f!==-1){if(r>f)break;var p=this.getFoldWidgetRange(e,"all",n);if(p){if(p.start.row<=i)break;if(p.isMultiLine())n=p.end.row;else if(r==f)break}a=n}}return new d(i,u,a,e.getLine(a).length)},this.getCommentRegionBlock=function(e,n,t){for(var r=n.search(/\s*$/),i=e.getLength(),u=t,a=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,c=1;++t<i;){n=e.getLine(t);var f=a.exec(n);if(f&&(f[1]?c--:c++,!c))break}var p=t;if(p>u)return new d(u,r,p,n.length)}}.call(g.prototype)}),ace.define("ace/mode/golang",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/golang_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(o,s,m){var h=o("../lib/oop"),d=o("./text").Mode,l=o("./golang_highlight_rules").GolangHighlightRules,g=o("./matching_brace_outdent").MatchingBraceOutdent,e=o("./behaviour/cstyle").CstyleBehaviour,n=o("./folding/cstyle").FoldMode,t=function(){this.HighlightRules=l,this.$outdent=new g,this.foldingRules=new n,this.$behaviour=new e};h.inherits(t,d),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(r,i,u){var a=this.$getIndent(i),c=this.getTokenizer().getLineTokens(i,r),f=c.tokens;if(c.state,f.length&&f[f.length-1].type=="comment")return a;if(r=="start"){var p=i.match(/^.*[\{\(\[]\s*$/);p&&(a+=u)}return a},this.checkOutdent=function(r,i,u){return this.$outdent.checkOutdent(i,u)},this.autoOutdent=function(r,i,u){this.$outdent.autoOutdent(i,u)},this.$id="ace/mode/golang"}.call(t.prototype),s.Mode=t}),function(){ace.require(["ace/mode/golang"],function(o){v&&(v.exports=o)})}()})(_);const b=k,y=R({__proto__:null,default:b},[k]);export{y as m};
