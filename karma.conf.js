module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      'src/app/app.js',
      'src/**/*.js',
    ],

    // web server port
    port: 9001,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS'],

    autoWatch: false,
    singleRun: true
  });
};
