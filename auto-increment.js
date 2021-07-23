const fs = require('fs');
const increment = require('version-incrementer').increment;

const v = JSON.parse(fs.readFileSync('./src/version.json').toString())
v.version = increment(v.version)
process.env.GITHUB_ACTIONS && fs.writeFileSync('./src/version.json', JSON.stringify(v, null, 2));
