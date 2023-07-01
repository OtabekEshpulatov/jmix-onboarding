function v(y,x){for(var n=0;n<x.length;n++){const c=x[n];if(typeof c!="string"&&!Array.isArray(c)){for(const m in c)if(m!=="default"&&!(m in y)){const d=Object.getOwnPropertyDescriptor(c,m);d&&Object.defineProperty(y,m,d.get?d:{enumerable:!0,get:()=>c[m]})}}}return Object.freeze(Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}))}var k={},b={get exports(){return k},set exports(y){k=y}};(function(y,x){ace.define("ace/mode/smithy_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(n,c,m){var d=n("../lib/oop"),g=n("./text_highlight_rules").TextHighlightRules,s=function(){this.$rules={start:[{include:"#comment"},{token:["meta.keyword.statement.smithy","variable.other.smithy","text","keyword.operator.smithy"],regex:/^(\$)(\s+.+)(\s*)(=)/},{token:["keyword.statement.smithy","text","entity.name.type.namespace.smithy"],regex:/^(namespace)(\s+)([A-Z-a-z0-9_\.#$-]+)/},{token:["keyword.statement.smithy","text","keyword.statement.smithy","text","entity.name.type.smithy"],regex:/^(use)(\s+)(shape|trait)(\s+)([A-Z-a-z0-9_\.#$-]+)\b/},{token:["keyword.statement.smithy","variable.other.smithy","text","keyword.operator.smithy"],regex:/^(metadata)(\s+.+)(\s*)(=)/},{token:["keyword.statement.smithy","text","entity.name.type.smithy"],regex:/^(apply|byte|short|integer|long|float|double|bigInteger|bigDecimal|boolean|blob|string|timestamp|service|resource|trait|list|map|set|structure|union|document)(\s+)([A-Z-a-z0-9_\.#$-]+)\b/},{token:["keyword.operator.smithy","text","entity.name.type.smithy","text","text","support.function.smithy","text","text","support.function.smithy"],regex:/^(operation)(\s+)([A-Z-a-z0-9_\.#$-]+)(\(.*\))(?:(\s*)(->)(\s*[A-Z-a-z0-9_\.#$-]+))?(?:(\s+)(errors))?/},{include:"#trait"},{token:["support.type.property-name.smithy","punctuation.separator.dictionary.pair.smithy"],regex:/([A-Z-a-z0-9_\.#$-]+)(:)/},{include:"#value"},{token:"keyword.other.smithy",regex:/\->/}],"#comment":[{include:"#doc_comment"},{include:"#line_comment"}],"#doc_comment":[{token:"comment.block.documentation.smithy",regex:/\/\/\/.*/}],"#line_comment":[{token:"comment.line.double-slash.smithy",regex:/\/\/.*/}],"#trait":[{token:["punctuation.definition.annotation.smithy","storage.type.annotation.smithy"],regex:/(@)([0-9a-zA-Z\.#-]+)/},{token:["punctuation.definition.annotation.smithy","punctuation.definition.object.end.smithy","meta.structure.smithy"],regex:/(@)([0-9a-zA-Z\.#-]+)(\()/,push:[{token:"punctuation.definition.object.end.smithy",regex:/\)/,next:"pop"},{include:"#value"},{include:"#object_inner"},{defaultToken:"meta.structure.smithy"}]}],"#value":[{include:"#constant"},{include:"#number"},{include:"#string"},{include:"#array"},{include:"#object"}],"#array":[{token:"punctuation.definition.array.begin.smithy",regex:/\[/,push:[{token:"punctuation.definition.array.end.smithy",regex:/\]/,next:"pop"},{include:"#comment"},{include:"#value"},{token:"punctuation.separator.array.smithy",regex:/,/},{token:"invalid.illegal.expected-array-separator.smithy",regex:/[^\s\]]/},{defaultToken:"meta.structure.array.smithy"}]}],"#constant":[{token:"constant.language.smithy",regex:/\b(?:true|false|null)\b/}],"#number":[{token:"constant.numeric.smithy",regex:/-?(?:0|[1-9]\d*)(?:(?:\.\d+)?(?:[eE][+-]?\d+)?)?/}],"#object":[{token:"punctuation.definition.dictionary.begin.smithy",regex:/\{/,push:[{token:"punctuation.definition.dictionary.end.smithy",regex:/\}/,next:"pop"},{include:"#trait"},{include:"#object_inner"},{defaultToken:"meta.structure.dictionary.smithy"}]}],"#object_inner":[{include:"#comment"},{include:"#string_key"},{token:"punctuation.separator.dictionary.key-value.smithy",regex:/:/,push:[{token:"punctuation.separator.dictionary.pair.smithy",regex:/,|(?=\})/,next:"pop"},{include:"#value"},{token:"invalid.illegal.expected-dictionary-separator.smithy",regex:/[^\s,]/},{defaultToken:"meta.structure.dictionary.value.smithy"}]},{token:"invalid.illegal.expected-dictionary-separator.smithy",regex:/[^\s\}]/}],"#string_key":[{include:"#identifier_key"},{include:"#dquote_key"},{include:"#squote_key"}],"#identifier_key":[{token:"support.type.property-name.smithy",regex:/[A-Z-a-z0-9_\.#$-]+/}],"#dquote_key":[{include:"#dquote"}],"#squote_key":[{include:"#squote"}],"#string":[{include:"#textblock"},{include:"#dquote"},{include:"#squote"},{include:"#identifier"}],"#textblock":[{token:"punctuation.definition.string.begin.smithy",regex:/"""/,push:[{token:"punctuation.definition.string.end.smithy",regex:/"""/,next:"pop"},{token:"constant.character.escape.smithy",regex:/\\./},{defaultToken:"string.quoted.double.smithy"}]}],"#dquote":[{token:"punctuation.definition.string.begin.smithy",regex:/"/,push:[{token:"punctuation.definition.string.end.smithy",regex:/"/,next:"pop"},{token:"constant.character.escape.smithy",regex:/\\./},{defaultToken:"string.quoted.double.smithy"}]}],"#squote":[{token:"punctuation.definition.string.begin.smithy",regex:/'/,push:[{token:"punctuation.definition.string.end.smithy",regex:/'/,next:"pop"},{token:"constant.character.escape.smithy",regex:/\\./},{defaultToken:"string.quoted.single.smithy"}]}],"#identifier":[{token:"storage.type.smithy",regex:/[A-Z-a-z_][A-Z-a-z0-9_\.#$-]*/}]},this.normalizeRules()};s.metaData={name:"Smithy",fileTypes:["smithy"],scopeName:"source.smithy",foldingStartMarker:"(\\{|\\[)\\s*",foldingStopMarker:"\\s*(\\}|\\])"},d.inherits(s,g),c.SmithyHighlightRules=s}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(n,c,m){var d=n("../range").Range,g=function(){};(function(){this.checkOutdent=function(s,l){return/^\s+$/.test(s)?/^\s*\}/.test(l):!1},this.autoOutdent=function(s,l){var e=s.getLine(l),i=e.match(/^(\s*\})/);if(!i)return 0;var t=i[1].length,r=s.findMatchingBracket({row:l,column:t});if(!r||r.row==l)return 0;var o=this.$getIndent(s.getLine(r.row));s.replace(new d(l,0,l,t-1),o)},this.$getIndent=function(s){return s.match(/^\s*/)[0]}}).call(g.prototype),c.MatchingBraceOutdent=g}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(n,c,m){var d=n("../../lib/oop"),g=n("../../range").Range,s=n("./fold_mode").FoldMode,l=c.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};d.inherits(l,s),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,i,t){var r=e.getLine(t);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var o=this._getFoldWidgetBase(e,i,t);return!o&&this.startRegionRe.test(r)?"start":o},this.getFoldWidgetRange=function(e,i,t,r){var o=e.getLine(t);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,t);var a=o.match(this.foldingStartMarker);if(a){var u=a.index;if(a[1])return this.openingBracketBlock(e,a[1],t,u);var h=e.getCommentFoldRange(t,u+a[0].length,1);return h&&!h.isMultiLine()&&(r?h=this.getSectionRange(e,t):i!="all"&&(h=null)),h}if(i!=="markbegin"){var a=o.match(this.foldingStopMarker);if(a){var u=a.index+a[0].length;return a[1]?this.closingBracketBlock(e,a[1],t,u):e.getCommentFoldRange(t,u,-1)}}},this.getSectionRange=function(e,i){var t=e.getLine(i),r=t.search(/\S/),o=i,u=t.length;i=i+1;for(var h=i,a=e.getLength();++i<a;){t=e.getLine(i);var f=t.search(/\S/);if(f!==-1){if(r>f)break;var p=this.getFoldWidgetRange(e,"all",i);if(p){if(p.start.row<=o)break;if(p.isMultiLine())i=p.end.row;else if(r==f)break}h=i}}return new g(o,u,h,e.getLine(h).length)},this.getCommentRegionBlock=function(e,i,t){for(var r=i.search(/\s*$/),o=e.getLength(),u=t,h=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;++t<o;){i=e.getLine(t);var f=h.exec(i);if(f&&(f[1]?a--:a++,!a))break}var p=t;if(p>u)return new g(u,r,p,i.length)}}.call(l.prototype)}),ace.define("ace/mode/smithy",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/smithy_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(n,c,m){var d=n("../lib/oop"),g=n("./text").Mode,s=n("./smithy_highlight_rules").SmithyHighlightRules,l=n("./matching_brace_outdent").MatchingBraceOutdent,e=n("./behaviour/cstyle").CstyleBehaviour,i=n("./folding/cstyle").FoldMode,t=function(){this.HighlightRules=s,this.$outdent=new l,this.$behaviour=new e,this.foldingRules=new i};d.inherits(t,g),function(){this.lineCommentStart="//",this.$quotes={'"':'"'},this.checkOutdent=function(r,o,u){return this.$outdent.checkOutdent(o,u)},this.autoOutdent=function(r,o,u){this.$outdent.autoOutdent(o,u)},this.$id="ace/mode/smithy"}.call(t.prototype),c.Mode=t}),function(){ace.require(["ace/mode/smithy"],function(n){y&&(y.exports=n)})}()})(b);const _=k,R=v({__proto__:null,default:_},[k]);export{R as m};
