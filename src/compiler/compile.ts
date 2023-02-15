import { Schema } from "../parser/Schema.js";
import { Types } from "../types/types.js";

export function compileSchema(schema: Schema): Uint8Array {
    const len = schema.name.length + schema.keys.join("").length + (schema.keys.length << 1) + 1;
    const buffer = new Uint8Array(len);
    buffer[0] = schema.name.length;
    let pos = 1;
    for (; pos < schema.name.length + 1; pos++) {
        buffer[pos] = schema.name.charCodeAt(pos - 1);
    }
    const entries = Object.keys(Types);
    const keyTypes = entries.slice(entries.length >> 1, entries.length);
    const typeCodes = entries.slice(0, entries.length >> 1).map(v => parseInt(v));
    for (let outer = 0; outer < schema.keys.length; outer++) {
        const key = schema.keys[outer]!;
        const type = schema.types[outer]!;
        buffer[pos++] = key.length;
        for (let i = 0; i < key.length; i++) {
            buffer[pos++] = key.charCodeAt(i);
        }
        pos += key.length - 1;
        buffer[pos++] = typeCodes[keyTypes.indexOf(type)]!;
    }
    return buffer;
}
