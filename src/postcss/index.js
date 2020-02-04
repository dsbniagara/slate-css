const postcss = require('postcss');
const config = require('./config');

const transformAtRules = require('./lib/transform-at-rules');
const processCssVars = require('./lib/process-css-vars');
const processMedia = require('./lib/process-media');

const plugin = postcss.plugin('@dsbn/slate-css', function(options) {
	var conf = config.load('slate.config.js');
	var plugins = [
		transformAtRules(conf)
	];	
	if( !options || options.replaceCSSVars !== false ) {
		plugins.push( processCssVars(conf) );
	}
	if( !options || options.replaceMediaQueries !== false ) {
		plugins.push( processMedia(conf) );
	}
	return postcss(plugins);
})

module.exports = plugin;