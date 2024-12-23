const gulp = require("gulp");
const esbuild = require("esbuild"); // Use the regular esbuild for Node.js

const paths = {
    entries: ["./Components/Canvas2D/Canvas2d.ts"], // Adjust path as needed
    output: "./wwwroot/scripts",
};

gulp.task("default", async function () {
    // Initialize esbuild without wasm (no need for worker in Node.js)
    try {
        await esbuild.build({
            entryPoints: paths.entries, // Entry point for esbuild
            outdir: paths.output, // Output directory
            bundle: true,
            target: "es2015",
            format: "esm",
            sourcemap: true,
            minify: true,
        });
        console.log("Build completed successfully");
    } catch (error) {
        console.error("Build failed:", error);
        process.exit(1); // Ensure the task fails in case of an error
    }
});
