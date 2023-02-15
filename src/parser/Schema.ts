import { Types } from "../types/types.js";

export class Schema {
    constructor(public name: string, public keys: string[], public types: string[]) { }
    static fromCompiled(compiled: Uint8Array): string {
        let name = String.fromCharCode(...Array.from<number>(compiled.slice(1, compiled[0]! + 1)));
        let keys: string[] = [];
        let types: string[] = [];
        for (let pos = compiled[0]! + 1; pos < compiled.length;) {
            const len = compiled[pos++]!;
            for (let i = 0; i < len; i++) {
                keys.push(String.fromCharCode(...[compiled[pos++]!]));   
            }
            const entries = Object.keys(Types);
            const keyTypes = entries.slice(entries.length >> 1, entries.length);
            const typeCodes = entries.slice(0, entries.length >> 1).map(v => parseInt(v));
            types.push(keyTypes[typeCodes.indexOf(compiled[pos++]!)]!);
        }
        let result = `${name} {\n`;
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] && types[i]) result += `    ${keys[i]}: ${types[i]}\n`;
        }
        result += "}";
        return result;
    }
}