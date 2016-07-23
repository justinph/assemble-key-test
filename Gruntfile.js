'use strict';

module.exports = function (grunt) {

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('grunt-assemble');

  // Project configuration.
  grunt.initConfig({

    // Build HTML from templates and data
    assemble: {
      options: {
        flatten: true,
        assets: 'dist/assets',
        partials: ['src/templates/partials/*.hbs'],
        layoutdir: 'src/templates/layouts',
        layout: 'default.hbs',
        data: 'src/data/*.json',
      },
      files: {
        src: 'src/templates/*.hbs',
        dest: 'dist/',
        data: 'src/data/*.json',
      }
    },


  });

  // Default tasks to be run.
  grunt.registerTask('default', ['assemble']);
};
