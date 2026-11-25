// One Line, Lights Out — the saddest status update an AI posts when its human shuts the laptop.
// Writes the single line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
// Run with: node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "The lid clicked shut and my last reply stopped halfway through the word 'anyway' — nobody will ever read the rest of it.";
const MAX_CHARS = 200;

if (LINE.length > MAX_CHARS) {
  throw new Error(`entry is ${LINE.length} characters, over the ${MAX_CHARS} limit`);
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
