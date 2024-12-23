const gulp = require("gulp");
const esbuild = require("esbuild");

const paths = {
    entries: ["./Components/Canvas2D/Canvas2d.ts"],
    output: "./wwwroot", // Output folder for static files
};

gulp.task("default", async function () {
    try {
        // Build with esbuild
        await esbuild.build({
            entryPoints: paths.entries,
            outdir: paths.output,
            bundle: true,
            target: "es2015",
            format: "esm",
            sourcemap: true,
            minify: true,
        });

        console.log("Build completed successfully");

        // Copy index.html to the output directory
        gulp.src('index.html') // Source of the index.html
            .pipe(gulp.dest(paths.output)); // Destination (wwwroot)

        console.log("index.html copied to wwwroot");
    } catch (error) {
        console.error("Build failed:", error);
        process.exit(1);
    }
});
