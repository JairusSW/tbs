import { Schema } from "./Schema.js";

// TODO: Implement type checking
export function parseSchema(text: string): Schema {
    let pos = 0;
    let lastPos = 0;
    let name = "";
    for (; pos < text.length; pos++) {
        if (text[pos] == "{") {
            name = text.slice(lastPos, pos).trim();
            lastPos = ++pos;
            break;
        }
    }
    if (!name) throw new Error("Schema was formatted incorrectly");
    const keys: string[] = [];
    const types: string[] = [];
    let findingKey: boolean = true;
    for (; pos < text.length; pos++) {
        if (findingKey && text[pos] == ":") {
            keys.push(text.slice(lastPos, pos).trim());
            lastPos = ++pos;
            findingKey = !findingKey;
        } else if (!findingKey && text[pos] == "\n") {
            types.push(text.slice(lastPos, pos).trim());
            lastPos = pos;
            findingKey = !findingKey;
        }
    }
    return new Schema(name, keys, types);
}