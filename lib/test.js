import { readFileSync } from "fs";
import { parseSchema } from "./parser/parser.js";
const file = readFileSync("../schemas/Vec3.tbs").toString();
const schema = parseSchema(file);
console.log(schema);
