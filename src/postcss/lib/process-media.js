const mediaASTFromString = require('../util/media-ast-from-string');
const transformMediaList = require('../util/transform-media-list');

module.exports = function (config) {
    
	//console.log("@dsbn/slate-css processMedia",config);
    
	const cssMedias = {};
	for (const key in config) {
		cssMedias[key] = mediaASTFromString(config[key]);
    }
    
    return function(css) {
        css.walkAtRules(mediaAtRuleRegExp, atrule => {
            if (customPseudoRegExp.test(atrule.params)) {
                const mediaAST = mediaASTFromString(atrule.params);
                const params = String(transformMediaList(mediaAST, cssMedias));	
                atrule.params = params;
            }
        });
    }
}

// match the custom selector name
const customMediaNameRegExp = /^custom-media$/i;
// match the custom selector params
const customMediaParamsRegExp = /^(--[A-z][\w-]*)\s+([\W\w]+)\s*$/;
// whether the atrule is a custom selector
const isCustomMedia = node => node.type === 'atrule' && customMediaNameRegExp.test(node.name) && customMediaParamsRegExp.test(node.params);

const mediaAtRuleRegExp = /^media$/i;
const customPseudoRegExp = /\(--[A-z][\w-]*\)/;