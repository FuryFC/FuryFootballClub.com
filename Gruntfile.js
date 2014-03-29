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
    express: {
      options: {
        port: process.env.PORT || 9000
      },
      env: {
        options: {
          script: 'dist/app/server.js'
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
        files: ["app/**/*.js", "app/css/**/*.css", "app/css/**/*.less", "app/lib/**/*.js", "app/**/*.html", "app/**/*.jade"],
        tasks: ["pack:test"],
        livereload: true
      },
    },
    open: {
      server: {
        path: "http://localhost:<%= express.options.port %>"
      }
    },
    clean: [yeomanConfig.dist],
    copy: {
      main: {
        files: [
          { 'dist/app/public/js/libs/angular/angular.min.js': 'app/bower_components/angular/angular.js' },
          { 'dist/app/public/js/libs/angular/angular-route.min.js': 'app/bower_components/angular-route/angular-route.min.js' },
          { 'dist/app/public/js/libs/jquery/jquery.min.js': 'app/bower_components/jquery/jquery.min.js' },
          { 'dist/app/public/js/libs/bootstrap/bootstrap.min.js': 'app/bower_components/bootstrap/dist/js/bootstrap.min.js' },
          { expand: true, cwd: 'app/bower_components/bootstrap/dist/fonts/', src: ['**'], dest: 'dist/app/public/content/font/' },
          { expand: true, cwd: 'app/img', src: ['**'], dest: 'dist/app/public/content/img/' },
          { expand: true, cwd: 'app/fonts', src: ['**'], dest: 'dist/app/public/content/font/' },
          { expand: true, cwd: 'app/routes', src: ['**'], dest: 'dist/app/routes/' },
          { expand: true, cwd: 'app/views', src: ['**'], dest: 'dist/app/views/' }
        ]
      },
      dev: {
        files: {
          'dist/app/server.js': 'app/server.dev.js'
        }
      },
      test: {
        files: {
          'dist/app/server.js': 'app/server.test.js'
        }
      },
      prod: {
        files: {
          'dist/app/server.js': 'app/server.prod.js'
        }
      }
    },
    uglify: {
      minify: {
        options: {
          preserveComments: false
        },
        files: {
          'dist/app/public/js/furyApp.min.js': ['app/js/**/*.js']
        }
      }
    },
    less: {
      options: {
        ieCompat: true,
        paths:  ['app/css/']
      },
      dev: {
        cleancss: true,
        files: { 'dist/app/public/content/css/fury.min.css': 'app/css/site.less'},
      },
      prod: {
        cleancss: true,
        files: { 'dist/app/public/content/css/fury.min.css': 'app/css/site.less'},
        yuicompress: true
      }
    },
    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      }
    }
  });

  // Test Tasks
  grunt.registerTask("test", ["karma"]);

  // Copy File Tasks
  grunt.registerTask("copyFiles:dev", ["copy:main", "copy:dev"]);
  grunt.registerTask("copyFiles:test", ["copy:main", "copy:test"]);
  grunt.registerTask("copyFiles:prod", ["copy:main", "copy:prod"]);

  // Build Tasks
  grunt.registerTask("pack:dev", ["jshint", "test", "clean", "copyFiles:dev", "uglify", "less:dev"]);
  grunt.registerTask("pack:test", ["jshint", "test", "clean", "copyFiles:test", "uglify", "less:prod"]);
  grunt.registerTask("pack:prod", ["jshint", "test", "clean", "copyFiles:prod", "uglify", "less:prod"]);

  // Local Deployment Tasks
  grunt.registerTask("server", ["express", "open", "watch"]);

  grunt.registerTask("heroku", ["clean", "copyFiles:dev", "uglify", "less:prod"]);

  // Default Task
  grunt.registerTask("default", ["pack:test", "server"]);
};
