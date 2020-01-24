
const path = require('path');
const transformImport = require('../util/transform-import');

module.exports = function () {
    return function(css) {
        //console.log("@dsbn/slate-css transformAtRules",css);
        var imports = [];
        css.walkAtRules(/^slate$/i, atRule => {
            var link = path.resolve(path.dirname(__dirname),"../../css/", atRule.params) + ".css";
            imports.push(transformImport(atRule, link));
        });
        var importsPromise = Promise.all(imports);
        return importsPromise;
    }
}