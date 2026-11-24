import { copyFileSync as copy, mkdirSync as makeDirectory } from "node:fs";
import { join as pathFrom } from "node:path";

const botFolder = process.env.MAKEFUN_BOT_DIR || ".";
const outputFolder = process.env.MAKEFUN_OUTPUT_DIR || "/output";

makeDirectory(outputFolder, { recursive: true });
copy(pathFrom(botFolder, "VIDEO.json"), pathFrom(outputFolder, "VIDEO.json"));
