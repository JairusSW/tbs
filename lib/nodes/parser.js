import { Schema } from "./Schema";
export function parseSchema(text) {
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
    if (!name)
        throw new Error("Could not find name");
    const keys = [];
    const types = [];
    let findingKey = true;
    for (; pos < text.length; pos++) {
        //console.log(text[pos])
        if (findingKey && text[pos] == ":") {
            keys.push(text.slice(lastPos, pos).trim());
            lastPos = ++pos;
            findingKey = !findingKey;
        }
        else if (!findingKey && text[pos] == "\n") {
            types.push(text.slice(lastPos, pos));
            lastPos = pos;
            findingKey = !findingKey;
        }
    }
    return new Schema(name, keys, types);
}
