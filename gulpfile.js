//Подключаем модули галпа
const gulp 						= require("gulp"),
			sass 						= require("gulp-sass"),
			rename 					= require("gulp-rename"),
			autoprefixer		= require("gulp-autoprefixer"),
			sourcemaps			= require("gulp-sourcemaps"),
			browserSync			= require("browser-sync").create(),
			imagemin				= require("gulp-imagemin"),
			pngquant				= require("imagemin-pngquant"),
			concat					= require("gulp-concat"),
			cache						= require("gulp-cache"),
			cleanCSS				= require("gulp-clean-css"),
			uglify					= require("gulp-uglify"),
			del							= require("del");

//Карта подключения файлов и папок
const jsFiles = [
	"./app/js_modules/lib.js",
	"./app/js_modules/main.js"
],
			buildingPaths = [
				"./app/**/*.html",
				"./app/**/*.css",
				"./app/**/*.js",
				"./app/**/*.php",
				"./app/**/*.eot",
				"./app/**/*.ttf",
				"./app/**/*.woff",
				"./app/**/*.woff2"
];

//Таск на стили CSS, преобразование SASS-CSS, rename, autoprefixer и cleanCSS
gulp.task("css_style", () => {
	return gulp.src("./app/sass/**/*.sass")
	.pipe(sourcemaps.init())
	.pipe(sass({
		errorLogToConsole: true,
		outputStyle: "compressed"
	}))
	.on("error", console.error.bind(console))
	.pipe(autoprefixer(["last 15 versions", "> 1%", "ie 8", "ie 7"], {cascade: false}))
	.pipe(cleanCSS({
		level: {
			2: {
				all: false,
				removeDuplicateRules: true,
				specialComments: 0
			}
		}
	}))
	.pipe(rename({suffix: ".min"}))
	.pipe(sourcemaps.write("./"))
	.pipe(gulp.dest("./app/css"))
	.pipe(browserSync.stream());
});

//Таск на обработку JS-скриптов
gulp.task("scripts", () => {
	return gulp.src(jsFiles)
	.pipe(concat("scripts.js"))
	.pipe(uglify({
		toplevel: true
	}))
	.pipe(rename({suffix: ".min"}))
	.pipe(gulp.dest("./app/js"))
	.pipe(browserSync.stream());
});

//Обработка изображений
gulp.task("imgCompress", () => {
	return gulp.src("./app/img/**/*")
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	})))
	.pipe(gulp.dest("./dist/img"));
});

//Очистка кэша и целевой папки проекта
gulp.task("cleanDist", () => {
	return del(["./dist/**/*"]);
});

gulp.task("clearCache", () => {
	return cache.clearAll();
});

//Watching
gulp.task("watch", () => {
	browserSync.init({
		server: {
			baseDir: "./app"
		},
		port: 3000,
		notify: false
	});
	gulp.watch("./app/sass/**/*.sass", gulp.parallel("css_style"));
	gulp.watch("./app/js_modules/**/*.js", gulp.parallel("scripts"));
	gulp.watch("./app/**/*.html").on("change", browserSync.reload);
});

//Building to destination folder
gulp.task("building", () => {
	return gulp.src(buildingPaths)
	.pipe(gulp.dest("./dist"));
});

//Основные пакетные таски
gulp.task("default", gulp.series("css_style", "scripts", "watch"));
gulp.task("build", gulp.series("cleanDist", "imgCompress", "building"));
