import { getManifest } from "../src/assets";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const BASE_PATH = process.cwd();
const DIRECTORIES = ["lib", "fx"];

console.log("Generating production manifest...");
const manifest = getManifest(BASE_PATH, DIRECTORIES);

const outputPath = join(BASE_PATH, "manifest.json");
writeFileSync(outputPath, JSON.stringify(manifest, null, 2));

console.log(`✅ Manifest generated with ${manifest.length} assets at ${outputPath}`);
