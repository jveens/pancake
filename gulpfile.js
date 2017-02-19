var gulp = require('gulp'),
	autoprefix = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

gulp.task('default', ['browserSync', 'sass', 'watch']);

gulp.task('sass', function(){
	gulp.src('./sass/*.scss')
		.pipe(sass({
			"sourcemap=none": true,
			errLogToConsole: true
		}))
		.pipe(autoprefix('last 2 version'))
		.pipe(gulp.dest('./css/'))
		.pipe(reload({ stream: true }))
});

gulp.task('browserSync', function(){
	browserSync({
		notify: true,
	});
});

gulp.task('watch', function(){
	gulp.watch('**/*.scss', ['sass']);
	gulp.watch('**/*.php', reload);
});
