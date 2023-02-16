import "colors";
import { parseSchema } from "./parser/parser.js";
import { readFileSync } from "fs";
import { compileSchema } from "./compiler/compile.js";
import { Schema } from "./parser/Schema.js";
import { AssemblyScript } from "./generators/assemblyscript.js";
const version = "v0.1.0";
const args = process.argv.slice(2);
if (args.includes("-h") || !args.length) {
  console.log(`
╔═══════╗╔═════╗ ╔══════╗
╚══╗ ╔══╝║ ╔═╗ ║ ║ ╔════╝
   ║ ║   ║ ╚═╝ ╚╗║ ╚════╗
   ║ ║   ║ ╔══╗ ║╚════╗ ║
   ║ ║   ║ ╚══╝ ║╔════╝ ║
   ╚═╝   ╚══════╝╚══════╝`.blue);
  console.log("\nUsage: tbs [command] [flags]");
  console.log("\nCommands:");
  console.log(" - generate -i [in] -o [out] --[target]\n\tCreate output files for provided schemas compiled to specified language");
  console.log(" - compile -i [in] -o [out]\n\tCompile schemas into their binary form");
} else if (args.includes("-v")) {
  console.log(version);
} else if (args[0] == "generate") {
  if (args[1] != "-i") {
    console.error("No input provided. Cancelling.");
  } else if (args[3] != "-o") {
    console.error("No output provided. Cancelling.");
  } else if (!args.includes("--assemblyscript")) {
    console.error("No target language specified. Cancelling.");
  } else {
    const input = args[2]!;
    const output = args[4]!;
    const target = "assemblyscript"
    console.log(`Running...\n - Target: ${target}\n - Input: ${input}\n - Output: ${output}\n`);
    const file = readFileSync(input).toString();
    const parsed = parseSchema(file);
    console.log(`Generating schema ${parsed.name}`);
    for (let i = 0; i < parsed.keys.length; i++) {
      console.log(` - ${parsed.keys[i]} -> ${parsed.types[i]}`);
    }
    const generated = new AssemblyScript(parsed.keys, parsed.types);
    console.log("Done.");
  }
} else if (args[0] == "compile") {
  if (args[1] != "-i") {
    console.error("No input provided. Cancelling.");
  } else if (args[3] != "-o") {
    console.error("No output provided. Cancelling.");
  } else {
    const input = args[2]!;
    const output = args[4]!;
    console.log(`Running...\n - Input: ${input}\n - Output: ${output}\n`);
    const file = readFileSync(input).toString();
    const parsed = parseSchema(file);
    const compiled = compileSchema(parsed);
    console.log(`Compiling schema ${parsed.name}`);
    for (let i = 0; i < parsed.keys.length; i++) {
      console.log(` - ${parsed.keys[i]} -> ${parsed.types[i]}`);
    }
    console.log(compiled.join(" "));
    console.log("Done.");
    console.log(Schema.fromCompiled(compiled));
  }
}
