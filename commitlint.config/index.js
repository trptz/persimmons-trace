// commitlint.config/index.js
const { readdirSync, statSync } = require("fs")

const packagesDir = "./packages"
const dir2path = (dir) => `${packagesDir}/${dir}`
const isDir = (path) => statSync(path).isDirectory()
const path2dir = (path) => path.replace(`${packagesDir}/`, "")
const dirs = readdirSync(packagesDir).map(dir2path).filter(isDir).map(path2dir)

exports.dirs = ["root", ...dirs]
