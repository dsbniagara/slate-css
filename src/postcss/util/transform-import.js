var fs      = require('fs-promise');
var path    = require('path');
var postcss = require('postcss');

// LazyResult here instead if just processor re: https://github.com/postcss/postcss/issues/1171
var processor = postcss();
const LazyResult = require('postcss/lib/lazy-result');

module.exports = function transformImport(atRule, link) {
    // Get a promise resolving once the contents of the link have been read
    var filePromise = fs.readFile(link, {
        encoding: 'utf8'
    });

    var fileProcessPromise = filePromise.then(function (contents) {
        // var processPromise = processor.process(contents, { from: link });
        // LazyResult here instead if processor.process re: https://github.com/postcss/postcss/issues/1171
        var processPromise = new LazyResult(processor, contents, { from: link });
        return processPromise;
    });

    var fileProcessTransformPromise = fileProcessPromise.then(function (ast) {
        // Get a promise resolved once the import has been transformed and has replaced its at-rule
        var transformPromise = transform(ast.root).then(function () {
            // Replace the at-rule with the ast
            atRule.replaceWith(ast.root);
        });

        return transformPromise;
    });

    var transform = function (css) {
        var imports = [];
        css.walkAtRules('import', function (atRule) {
            var dir = path.dirname(atRule.source.input.file);
            var link = atRule.params.replace(/'/g, "");
            link = path.resolve(dir, link);
            var importPromise = transformImport(atRule, link);
            imports.push(importPromise);
        });
        var importsPromise = Promise.all(imports);
        return importsPromise;
    };

    return fileProcessTransformPromise;
};