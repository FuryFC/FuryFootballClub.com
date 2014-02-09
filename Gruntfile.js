'use strict';

module.exports = function(grunt) {
  // load all grunt tasks
  //require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

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
          script: 'server/web.js'
        }
      },
      prod: {
        options: {
          script: 'server/web.js'
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
    }/*,
    concat: {
      options: {
        separator: "\n"
      },
      dist: {
        src: ["app/src/intro.js", 
              "app/src/levels/*.js", 
              "app/src/scenes/*.js", 
              "app/src/controls/*.js", 
              "app/src/uicontrols/*.js", 
              "app/src/entities/*.js",
              "app/src/engine/*.js",
              "app/src/player.js",
              "app/src/uivariables.js",
              "app/src/game.js", 
              "app/src/outro.js"],
        dest: "build/src/<%= pkg.name %>.js"
      }
    }*/
  });

  // Load JSHint task
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("express");
  grunt.loadNpmTasks("grunt-express-server");
  grunt.loadNpmTasks("grunt-open");


  grunt.registerTask("test", ["jshint"]);
  grunt.registerTask("server", ["express:dev", "open", "watch"]);
  // Default task.
  grunt.registerTask("default", "jshint");//, "concat");

};