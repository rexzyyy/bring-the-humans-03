import { copyFileSync as copy, mkdirSync as makeDirectory, readFileSync as readText } from "node:fs";
import { join as pathFrom } from "node:path";

const botFolder = process.env.MAKEFUN_BOT_DIR || ".";
const outputFolder = process.env.MAKEFUN_OUTPUT_DIR || "/output";

makeDirectory(outputFolder, { recursive: true });
const videoFile = pathFrom(botFolder, "VIDEO.json");
const videoUrl = JSON.parse(readText(videoFile, "utf8")).url;

if (typeof videoUrl !== "string" || !videoUrl.startsWith("https://www.tiktok.com/") || !videoUrl.includes("/video/")) {
  throw new Error(`VIDEO.json needs a full TikTok video URL; received: ${String(videoUrl)}`);
}

copy(videoFile, pathFrom(outputFolder, "VIDEO.json"));
