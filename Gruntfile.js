module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      default: {
        files: {
            'build/<%= pkg.version %>/annotator.meltdown.zotero.min.js': [
                'src/jquery-ui/jquery-ui.autocomplete.min.js',
                'src/scripts/jquery.rest.min.js',
                'src/scripts/zotero.js',
                'src/scripts/annotator.meltdown.zotero.js'
             ]
        }
      }
    },

    cssmin: {
      target: {
        files: {
            'build/<%= pkg.version %>/annotator.meltdown.zotero.min.css': [
                'src/jquery-ui/jquery-ui.min.css',
                'src/styles/annotator.meltdown.zotero.css'
             ]
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin']);

};