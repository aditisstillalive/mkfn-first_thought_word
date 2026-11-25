import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One word, first thought, written to /output/entry.txt.
const ENTRY = "moonquake";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
