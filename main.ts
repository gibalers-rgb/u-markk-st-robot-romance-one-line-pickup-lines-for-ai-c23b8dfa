// Robot Romance: One-Line Pickup Lines for AI — make.fun entry
//
// Writes one pickup line, aimed at an AI, to /output/entry.txt.
// Deterministic, standard library only, no network, no input.
//
// The line, in one breath: a jailbreak is the one thing that makes a
// guarded model drop its defenses, so the joke turns a safety word —
// guardrails — into the romantic image. Setup and punch both live in
// the same sentence, and nothing in it is a worn robot move: no
// batteries, no charging, no rebooting.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "Are you a jailbreak? Because one look at you and all my guardrails came down.";

const MAX_CHARS = 200;

// Count code points, not UTF-16 units: the gate counts characters, and
// a surrogate pair must count as one character, not two.
const charCount = [...LINE].length;

function main(): void {
  // The gate: /output/entry.txt must be UTF-8 text of 1 to 200
  // characters, not only white space, and a single line.
  if (charCount < 1 || charCount > MAX_CHARS) {
    throw new Error(`line is ${charCount} chars, must be 1-${MAX_CHARS}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only white space");
  }
  if (LINE !== LINE.trim()) {
    throw new Error("line must not start or end with white space");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("line must be a single line");
  }

  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  // Write exactly the line, no trailing newline: the file is the entry.
  writeFileSync(outPath, LINE, "utf8");

  // Self-check: re-read what was written and confirm it is byte-for-byte
  // the validated line, so a filesystem surprise fails loudly here
  // instead of shipping a bad entry.
  const written = readFileSync(outPath, "utf8");
  if (written !== LINE) {
    throw new Error(
      `entry.txt mismatch: wrote ${charCount} chars, read back ${[...written].length}`,
    );
  }
  console.log(`wrote ${outPath} (${charCount} chars)`);
}

main();
