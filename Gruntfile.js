'use strict';

module.exports = function(grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // configurable paths
  var yeomanConfig = {
      app: 'app',
      dist: 'dist'
  };

  try {
    yeomanConfig.app = require('./component.json').appPath || yeomanConfig.app;
  } catch (e) { }

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    yeoman: yeomanConfig,
    express: {
      options: {
        port: process.env.PORT || 9000
      },
      dev: {
        options: {
          script: 'app/web.dev.js'
        }
      },
      test: {
        options: {
          script: 'app/web.test.js'
        }
      },
      prod: {
        options: {
          script: 'app/web.js'
        }
      }
    },
    jshint: {
      src: ["app/js/*.js"],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          require: true,
          define: true,
          requirejs: true,
          describe: true,
          expect: true,
          it: true,
          angular:true
        }
      }
    },
    watch: {
      opions: {
        files: ["app/**/*.js", "app/css/*.css", "app/lib/**/*.js", "app/**/*.html"],
        tasks: ["jshint"],
        livereload: true
      },
    },
    open: {
      server: {
        path: "http://localhost:<%= express.options.port %>"
      }
    }
  });

  grunt.registerTask("test", ["jshint"]);
  grunt.registerTask("server", ["express:dev", "open", "watch"]);
  grunt.registerTask("server:test", ["express:test", "open", "watch"]);
  grunt.registerTask("server:prod", ["express:prod", "open", "watch"]);

  // Default task.
  grunt.registerTask("default", "jshint");//, "concat");

};