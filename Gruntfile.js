module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-typescript');

  grunt.initConfig({
    typescript: {
      base: {
        src: ['server-ts/**/*.ts'],
        dest: 'server/',
        options: {
          target: 'es5',
          removeComments: true
        }
      }
    }
  });

  grunt.registerTask('build', ['typescript']);
};
