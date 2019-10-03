
const path = require('path');
const fs = require('fs');

module.exports = {
    load(file) {
        let varsFile = path.resolve(__dirname, `./${file}`);
        let vars = fs.existsSync(varsFile) ? require(varsFile) : {};
    
        let projectVarsFile = path.resolve('slate.config.js');
        let projectVars = fs.existsSync(projectVarsFile) ? require(projectVarsFile) : {};
        
        return Object.assign({},vars,projectVars);
    }
}