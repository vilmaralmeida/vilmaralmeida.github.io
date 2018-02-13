module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'assets/js/scripts.min.js': 'assets/js/scripts.js'
        }
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'assets/css/styles.min.css': 'assets/css/styles.css'
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    shell: {
      organize_strutucture: {
        options: {
          stderr: false
        },
        command: [
          "find src/css/ -type f -iname '*.css' -exec mv {} assets/vendor/css/ ';'",
          "find src/js/ -type f -iname '*.js' -exec mv {} assets/vendor/js/ ';'",
          "find src/fonts/ -type f '(' -iname '*.eot' -o -iname '*.svg' -o -iname '*.ttf' -o -iname '*.woff' -o -iname '*.woff2' ')' -exec mv {} assets/vendor/fonts/ ';'",
          'rm -rf src/'
        ].join(';')
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'shell']);
};