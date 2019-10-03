const isBlockIgnored = require('./is-block-ignored');

module.exports = function isRuleIgnored(rule) {
	var previous = rule.prev();

	return Boolean(isBlockIgnored(rule) ||
		previous &&
		previous.type === 'comment' &&
		/(!\s*)?postcss-custom-properties:\s*ignore\s+next\b/i.test(previous.text));
}