var gulp = require('gulp'),
responsive = require('gulp-responsive');

gulp.task('responsive', function () {
  return gulp.src('./app/assets/images/*.{png,jpg}')
    .pipe(responsive({
      '*.jpg': [{
        width: 610,
        rename: { suffix: '-610px' },
      }, {
        width: 990,
        rename: { suffix: '-990px' },
      }, {
        width: 1500,
        rename: { suffix: '-1500px' },
      }],
    }, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 70,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Zlib compression level of PNG output format
      compressionLevel: 6,
      // Strip all metadata
      withMetadata: false,
    }))
    .pipe(gulp.dest('./app/assets/images/'));
});