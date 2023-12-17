import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

console.log(__dirname);