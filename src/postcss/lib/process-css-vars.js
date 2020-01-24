
const transformValueAST = require('../util/transform-value-ast');
const isRuleIgnored = require('../util/is-rule-ignored');
const { parse } = require('postcss-values-parser');

module.exports = function (config) {
    
	//console.log("@dsbn/slate-css processCssVars",config);
    
	const cssProperties = {};
	for (const key in config) {
		cssProperties[key] = parse(String(config[key])).nodes;	
    }
    
    return function(css) {
        css.walkDecls(decl => {
            if (isTransformableDecl(decl) && !isRuleIgnored(decl)) {
                const originalValue = decl.value;
                const valueAST = parse(originalValue);
                const value = String(transformValueAST(valueAST, cssProperties));
                // conditionally transform values that have changed
                if (value !== originalValue) {
                    decl.value = value;
                    if (hasTrailingComment(decl)) {
                        decl.raws.value.value = decl.value.replace(trailingCommentRegExp, '$1');
                        decl.raws.value.raw = decl.raws.value.value + decl.raws.value.raw.replace(trailingCommentRegExp, '$2');
                    }
                }
            }
        });
    }
}

// whether the declaration should be potentially transformed
const isTransformableDecl = decl => !customPropertyRegExp.test(decl.prop) && customPropertiesRegExp.test(decl.value);
// whether the declaration has a trailing comment
const hasTrailingComment = decl => 'value' in Object(Object(decl.raws).value) && 'raw' in decl.raws.value && trailingCommentRegExp.test(decl.raws.value.raw);
const trailingCommentRegExp = /^([\W\w]+)(\s*\/\*[\W\w]+?\*\/)$/;

// match custom properties
const customPropertyRegExp = /^--[A-z][\w-]*$/;
const customPropertiesRegExp = /(^|[^\w-])var\([\W\w]+\)/;