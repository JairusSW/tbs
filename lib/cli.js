import "colors";
const version = "v0.1.0";
const args = process.argv.slice(2);
if (args.includes("-v")) {
    console.log(version);
}
else if (!args.length) {
    console.log(`
╔═══════╗╔═════╗ ╔══════╗
╚══╗ ╔══╝║ ╔═╗ ║ ║ ╔════╝
   ║ ║   ║ ╚═╝ ╚╗║ ╚════╗
   ║ ║   ║ ╔══╗ ║╚════╗ ║
   ║ ║   ║ ╚══╝ ║╔════╝ ║
   ╚═╝   ╚══════╝╚══════╝`.blue);
    console.log("\nUsage: tbs [command] [flags]");
    console.log("\nCommands:");
    console.log(" - generate -i [in] -o [out] --target [language]\n\tCreate output files for provided schemas compiled to specified language");
}
