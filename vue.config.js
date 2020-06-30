module.exports = {
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    },
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.externals({
                'vue-fragment': {
                    commonjs: "vue-fragment",//如果我们的库运行在Node.js环境中，import _ from 'lodash'等价于const _ = require('lodash')
                    commonjs2: "vue-fragment",//同上
                    amd: "vue-fragment",//如果我们的库使用require.js等加载,等价于 define(["lodash"], factory);
                    root: "Fragment" // 这个为lodash暴露的变量
                }
            });
        }
    }
};
