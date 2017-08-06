import sourcemaps from 'rollup-plugin-sourcemaps';

var banner = require('./banner');
var pkg = require('../package.json');

export default {
    banner: banner,
    moduleName: pkg.rollup.moduleName,
    amd: {
        id: pkg.rollup.moduleId
    },
    plugins: [
        sourcemaps()
    ],
};
