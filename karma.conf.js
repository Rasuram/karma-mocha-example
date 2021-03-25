module.exports = function (config) {
    config.set({

// base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

// frameworks to use
// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

// list of files / patterns to load in the browser
        files: [
            'test/*.js',
            'js/*.js'
        ],

// list of files to exclude
        exclude: [],

// preprocess matching files before serving them to the browser
// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'js/*.js': ['coverage']
        },

// test results reporter to use
// possible values: 'dots', 'progress'
// available reporters: https://npmjs.org/browse/keyword/karma-reporter

        reporters: ['progress', 'junit', 'coverage'],

// the default configuration
        junitReporter: {
            outputDir: 'output', // results will be saved as $outputDir/$browserName.xml
            outputFile: 'test.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
            suite: 'com.result', // suite will become the package name attribute in xml testsuite element
            useBrowserName: false, // add browser name to report and classes names
            nameFormatter: function (browser, result) {
                return result.description;
            }, // function (browser, result) to customize the name attribute in xml testcase element
            classNameFormatter: function (browser, result) {
                console.log(result)
                return "";
            }, // function (browser, result) to customize the classname attribute in xml testcase element
            properties: {} // key value pair of properties to add to the section of the report
        },

// web server port
        port: 9876,

// enable / disable colors in the output (reporters and logs)
        colors: true,

// level of logging
// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

// enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

// start these browsers
// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],
        coverageReporter: {
            type: 'text-summary',
            dir: 'coverage/',
            includeAllSources: true
        },
        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-html-reporter',
            'karma-junit-reporter',
            'karma-coverage'
        ],

// Continuous Integration mode
// if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

// Concurrency level
// how many browser should be started simultaneous
        concurrency: Infinity
    })
}
