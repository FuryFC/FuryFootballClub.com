var LIVERELOAD_PORT = 8888;
var mountFolder = function (connect, dir) {
  return connect.static(require("path").resolve(dir));
};

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
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
          it: true
        },
        globals:{
            angular:true
        }
      }
    },
    watch: {
      opions: {
        files: "app/**/*.js",
        tasks: ["jshint"],
        livereload: true
      },
    },
    connect: {
      server: {
        options: {
          port: 8888,
          hostname: "localhost",
          base: "app/"
        }
      }
    },
    open: {
      server: {
        path: "http://localhost:<%= connect.server.options.port %>"
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
  //grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-open");


  grunt.registerTask("server", ["connect:server", "open", "watch"]);
  // Default task.
  grunt.registerTask("default", "jshint");//, "concat");

};