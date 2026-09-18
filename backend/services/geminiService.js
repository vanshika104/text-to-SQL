import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

export const generateSQL = async (prompt) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-3.6-flash",
            contents: prompt
        });

        return response.text;
    } catch (error) {
        console.error("Gemini error:", error);
        throw error;
    }
};