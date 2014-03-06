'use strict';

module.exports = function(grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  
  // configurable paths
  var yeomanConfig = {
      app: 'app',
      dist: 'dist',
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
<<<<<<< HEAD
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
=======
      env: {
        options: {
          script: 'dist/app/server.js'
>>>>>>> origin/Development
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
        files: ["app/**/*.js", "app/css/*.css", "app/lib/**/*.js", "app/**/*.html", "app/**/*.jade"],
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
<<<<<<< HEAD
          { 'dist/Procfile': 'Procfile' },
          { 'dist/app/js/libs/angular/angular.min.js': 'app/bower_components/angular/angular.min.js' },
          { 'dist/app/js/libs/angular/angular.min.js': 'app/bower_components/angular/angular.min.js' },
          { 'dist/app/js/libs/jquery/jquery.min.js': 'app/bower_components/jquery/jquery.min.js' },
          { 'dist/app/js/libs/bootstrap/bootstrap.min.js': 'app/bower_components/bootstrap/dist/js/bootstrap.min.js' },
          { 'dist/app/content/css/bootstrap.min.css': 'app/bower_components/bootstrap/dist/css/bootstrap.min.css' },
          { expand: true, cwd: 'app/bower_components/bootstrap/dist/fonts/', src: ['**'], dest: 'dist/app/content/font/' },
          { expand: true, cwd: 'app/img', src: ['**'], dest: 'dist/app/content/img/' },
          { expand: true, cwd: 'app/fonts', src: ['**'], dest: 'dist/app/content/font/' },
=======
          //{ 'dist/Procfile': 'Procfile' },
          { 'dist/app/public/js/libs/angular/angular.min.js': 'app/bower_components/angular/angular.min.js' },
          { 'dist/app/public/js/libs/angular/angular.min.js': 'app/bower_components/angular/angular.min.js' },
          { 'dist/app/public/js/libs/jquery/jquery.min.js': 'app/bower_components/jquery/jquery.min.js' },
          { 'dist/app/public/js/libs/bootstrap/bootstrap.min.js': 'app/bower_components/bootstrap/dist/js/bootstrap.min.js' },
          { 'dist/app/public/content/css/bootstrap.min.css': 'app/bower_components/bootstrap/dist/css/bootstrap.min.css' },
          { expand: true, cwd: 'app/bower_components/bootstrap/dist/fonts/', src: ['**'], dest: 'dist/app/public/content/font/' },
          { expand: true, cwd: 'app/img', src: ['**'], dest: 'dist/app/public/content/img/' },
          { expand: true, cwd: 'app/fonts', src: ['**'], dest: 'dist/app/public/content/font/' },
>>>>>>> origin/Development
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
<<<<<<< HEAD
          'dist/app/js/furyApp.min.js': ['app/js/**/*.js']
=======
          'dist/app/public/js/furyApp.min.js': ['app/js/**/*.js']
>>>>>>> origin/Development
        }
      }
    },
    cssmin: {
      combine: {
        files: {
<<<<<<< HEAD
          'dist/app/content/css/fury.min.css': ['app/css/**/*.css']
=======
          'dist/app/public/content/css/fury.min.css': ['app/css/**/*.css']
>>>>>>> origin/Development
        }
      }
    },
    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      }
    }
  });

<<<<<<< HEAD
  

  // Test Tasks
  grunt.registerTask("test", ["karma"]);

  // Copy File Tasks
  grunt.registerTask("copyFiles:dev", ["copy:main", "copy:dev"]);
  grunt.registerTask("copyFiles:test", ["copy:main", "copy:test"]);
  grunt.registerTask("copyFiles:prod", ["copy:main", "copy:prod"]);

  // Build Tasks
  grunt.registerTask("pack:dev", ["jshint", "test", "clean", "copyFiles:dev", "uglify", "cssmin"]);
  grunt.registerTask("pack:test", ["jshint", "test", "clean", "copyFiles:test", "uglify", "cssmin"]);
  grunt.registerTask("pack:prod", ["jshint", "test", "clean", "copyFiles:prod", "uglify", "cssmin"]);

  // Local Deployment Tasks
  grunt.registerTask("server", ["express:dev", "open", "watch"]);
  grunt.registerTask("server:test", ["express:test", "open", "watch"]);
  grunt.registerTask("server:prod", ["express:prod", "open", "watch"]);

  grunt.registerTask("heroku", ["pack:test"]);

  // Default Task
  grunt.registerTask("default", "server:dev");
=======
  // Test Tasks
  grunt.registerTask("test", ["karma"]);

  // Copy File Tasks
  grunt.registerTask("copyFiles:dev", ["copy:main", "copy:dev"]);
  grunt.registerTask("copyFiles:test", ["copy:main", "copy:test"]);
  grunt.registerTask("copyFiles:prod", ["copy:main", "copy:prod"]);

  // Build Tasks
  grunt.registerTask("pack:dev", ["jshint", "test", "clean", "copyFiles:dev", "uglify", "cssmin"]);
  grunt.registerTask("pack:test", ["jshint", "test", "clean", "copyFiles:test", "uglify", "cssmin"]);
  grunt.registerTask("pack:prod", ["jshint", "test", "clean", "copyFiles:prod", "uglify", "cssmin"]);

  // Local Deployment Tasks
  grunt.registerTask("server", ["express", "open", "watch"]);

  grunt.registerTask("heroku", ["clean", "copyFiles:dev", "uglify", "cssmin"]);

  // Default Task
  grunt.registerTask("default", ["pack:test", "server"]);
>>>>>>> origin/Development
};