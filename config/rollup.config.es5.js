import defaults from './rollup-defaults';

var pkg = require('../package.json');

var config = {
    entry: 'build/es5/main.js',
    targets: [
        {
            dest: `dist/${pkg._rollup.moduleId}.js`,
            format: 'umd'
        },
        {
            dest: `dist/${pkg._rollup.moduleId}.jsnext.js`,
            format: 'es'
        },
    ]
};

export default Object.assign({}, defaults, config);
