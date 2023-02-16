import { Generator } from "./generator.js";

export class AssemblyScript extends Generator {
    public offset: number = 0;
    public offsetDyn: string = "";
    public outputText: string = "";
    public keys: string[] = [];
    public types: string[] = [];
    private serializeStmts: string[] = [];
    private deserializeStmts: string[] = [];
    constructor(keys: string[], types: string[]) {
        super();
        this.keys = keys;
        this.types = types;
        for (let i = 0; i < this.keys.length; i++) {
            const key = keys[i]!;
            const type = types[i]!;
            if (["i8", "u8", "i16", "u16", "i32", "u32", "f32", "i64", "u64", "f64"].includes(type)) {
                this.serializeStmts.push(`store<${type}>(changetype<usize>(result) + offset + <usize>${this.offset + this.offsetDyn}, data.${key});`);
                this.deserializeStmts.push(`result.${key} = load<${type}>(changetype<usize>(data) + offset + <usize>${this.offset + this.offsetDyn});`);
                if (type.endsWith("8")) this.offset++;
                else if (type.endsWith("16")) this.offset += 2;
                else if (type.endsWith("32")) this.offset += 4;
                else if (type.endsWith("64")) this.offset += 8;
            }
        }
        this.serializeStmts = this.serializeStmts.map(v => v.replaceAll(" + <usize>0", "").replaceAll(" + <usize>dynamic.", " + <usize>input."));
        this.deserializeStmts = this.deserializeStmts.map(v => v.replaceAll(" + <usize>0", "").replaceAll(" + <usize>dynamic.", " + <usize>out."));
        let serializeFunction = `@inline export function serialize<T>(data: T): ArrayBuffer {\n\tconst result = new ArrayBuffer(${this.offset});\n\t${this.serializeStmts.join("\n\t")}\n\treturn result;\n}`;
        let deserializeFunction = `@inline export function deserialize<T>(data: ArrayBuffer): T {\n\tconst result = new Vec3();\n\t${this.deserializeStmts.join("\n\t")}\n\treturn result;\n}`;
        console.log(this.serializeStmts);
        console.log(this.deserializeStmts);
        console.log(serializeFunction);
        console.log(deserializeFunction);
    }
}