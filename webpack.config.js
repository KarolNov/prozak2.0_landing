var path = require("path");
module.exports = {
    watch: true,
    entry: {
        bundle: ["./src/scripts/index.js"]
    },
    output: {
        path: path.resolve(__dirname, "build/js"),
        publicPath: "build/js",
        filename: "bundle.js"
    }
};