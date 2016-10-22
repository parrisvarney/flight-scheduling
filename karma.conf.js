// Karma configuration
// Generated on Sun Oct 09 2016 12:06:32 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'web/bower_components/angular/angular.js',
      'web/bower_components/angular-mocks/angular-mocks.js',
      'web/bower_components/ui-router/release/angular-ui-router.js',
      'web/bower_components/angular-material/angular-material.js',
      'web/bower_components/angular-animate/angular-animate.js',
      'web/bower_components/angular-aria/angular-aria.js',
      'web/src/admin/fleet/*.js',
      'web/src/admin/home/*.js',
      'web/src/admin/pilots/*.js',
      'web/src/admin/instructors/*.js',
      'web/src/admin/module.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


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
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
