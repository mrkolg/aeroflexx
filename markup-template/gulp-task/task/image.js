module.exports = function() {

	//----------#BUILD FOLDER
	//image optimize build version project
	$.gulp.task('image:build', function() {
		return $.gulp.src($.config.pathVar.path.src.img)
			.pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
			.pipe($.gp.newer($.config.pathVar.path.build.img))
			.pipe($.gulp.dest($.config.pathVar.path.build.img))
	});

	//trash image optimize build version project
	$.gulp.task('image-trash:build', function() {
		return $.gulp.src($.config.pathVar.path.src.imgTrash)
			.pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
			.pipe($.gp.newer($.config.pathVar.path.build.imgTrash))
			.pipe($.gulp.dest($.config.pathVar.path.build.imgTrash))
	});

	//----------#PRODUCTION FOLDER
	//image optimize production version project
	$.gulp.task('image:buildProd', function() {
		return $.gulp.src($.config.pathVar.path.src.imgProd)
			.pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
			.pipe($.gp.imagemin([
						// $.gp.pngquant({quality: [0.9, 0.9]}),
						$.gp.imageminMozjpeg({progressive: true}),],
			//for more detailed information output
			{ verbose: true,}))
			.pipe($.gulp.dest($.config.pathVar.path.production.img))
	});

	//----------#PRODUCTION FOLDER
	//image trash no optimize - production version project
	$.gulp.task('image-trash:buildProd', function() {
		return $.gulp.src($.config.pathVar.path.src.imgProdTrash)
			.pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
			.pipe($.gulp.dest($.config.pathVar.path.production.imgTrash))
	});
};