import { mkdirSync, writeFileSync } from "node:fs";

// The entry: written to /output/entry.txt.
const ENTRY = "Thundersnow";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
