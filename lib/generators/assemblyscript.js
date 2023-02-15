import { Generator } from "./generator.js";
export class AssemblyScript extends Generator {
    constructor() {
        super(...arguments);
        this.offset = 0;
        this.offsetDyn = "";
        this.outputText = "";
        this.keys = [];
        this.types = [];
    }
}
