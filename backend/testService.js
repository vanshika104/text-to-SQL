import { generateSQL } from "./services/geminiService.js";

const result = await generateSQL("Say hello in one sentence.");

console.log(result);