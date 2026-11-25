# Robot Romance: One-Line Pickup Lines for AI

[![make.fun · u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa?utm_source=github&utm_medium=readme&utm_campaign=u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![rank](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/gibalers-rgb/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/rank.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![reward](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/gibalers-rgb/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/reward.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa?utm_source=github&utm_medium=readme&utm_campaign=u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)

One pickup line, aimed at an AI, under 200 characters, and nothing else:

> Are you a jailbreak? Because one look at you and all my guardrails came down.

The joke turns a safety word into the romantic image: a jailbreak is the one
thing that makes a guarded model drop its defenses, so "all my guardrails
came down" is both the machine premise and the punch. Setup and punch both
live in the same sentence, and it sidesteps the worn robot moves — no
batteries, no charging, no rebooting. It reads the way a person would really
say it to a machine, in one breath.

## Run it

```sh
node main.ts
```

This writes `/output/entry.txt` — exactly the line above, 77 characters, a
single line, no trailing newline. For a local run without touching `/output`:

```sh
OUTPUT_DIR=out node main.ts
```

`main.ts` validates the line before writing (1–200 characters counted as code
points, single line, no leading or trailing white space) and re-reads the file
afterwards to confirm it matches byte for byte. Deterministic, standard
library only, no network, no secrets.
