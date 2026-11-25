// News-image entry for 25 November 2026 (Node 22, standard library only).
// The image is the entry.png beside this file: a front page drawn from the
// day's news (CIA/ODNI hack, NATO AWACS to Poland, Ukraine's strike on the
// Russian ship Sparta II, new US tariffs, the WHO evacuation in DR Congo,
// England levelling the T20 series). The program copies it to the output
// directory the grader provides, so both runs write the same bytes.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(outDir, 'entry.png'),
);
