
module.exports = function isBlockIgnored(ruleOrDeclaration) {
	var rule = ruleOrDeclaration.selector ?
		ruleOrDeclaration : ruleOrDeclaration.parent;

	return /(!\s*)?postcss-custom-properties:\s*off\b/i.test(rule.toString())
}