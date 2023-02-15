import { Generator } from "./generator.js";

export class AssemblyScript extends Generator {
    public offset: number = 0;
    public offsetDyn: string = "";
    public outputText: string = "";
    public keys: string[] = [];
    public types: string[] = [];
}