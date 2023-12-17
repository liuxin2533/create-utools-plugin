import path from "path";
import jsonfile from 'jsonfile'
import fs from 'fs-extra'

const __dirname = path.dirname(new URL(import.meta.url).pathname);

console.log(__dirname);

const filePath = path.join(__dirname, '../template-vue3/plugin2.json')
console.log(filePath);

if (fs.existsSync(filePath)) {
    const json = jsonfile.readFileSync(filePath)
    json.main = 'plugin2'
    jsonfile.writeFileSync(filePath, json, { spaces: 2 })
}
