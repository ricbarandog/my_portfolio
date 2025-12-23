import { GoogleGenAI, Modality } from "@google/genai";

// Initialize Gemini Client
// NOTE: We assume process.env.API_KEY is available as per instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a short, punchy introduction script for Ricardo.
 */
export const generateIntroScript = async (): Promise<string> => {
  try {
    const prompt = `
      You are Ricardo Barandog Jr., an IT professional and Virtual Assistant.
      Write a short, energetic, and professional spoken introduction for your portfolio website.
      Mention your expertise in Logistics, Visualization, and being a Tech-Savvy VA.
      Keep it under 40 words. Make it sound welcoming.
      Do not include any "scene directions" or markdown, just the spoken text.
    `;

    // Updated model to gemini-3-flash-preview for basic text tasks
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Hello! I'm Ricardo, your tech-savvy Virtual Assistant ready to streamline your business.";
  } catch (error) {
    console.error("Error generating script:", error);
    return "Hi, I'm Ricardo Barandog Jr. Welcome to my portfolio! I help businesses solve real-world challenges with technology.";
  }
};

/**
 * Converts text to speech using Gemini's TTS capabilities.
 * Returns an AudioBuffer.
 */
export const generateIntroAudio = async (text: string, audioContext: AudioContext): Promise<AudioBuffer | null> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Fenrir' }, // Deep male voice
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    
    if (!base64Audio) {
      throw new Error("No audio data returned");
    }

    // Decode Base64
    const binaryString = atob(base64Audio);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    // Decode PCM Data (16-bit PCM, 24kHz, Mono)
    // Gemini TTS returns raw PCM data without headers, so audioContext.decodeAudioData will fail.
    // We must manually convert PCM bytes to AudioBuffer.
    const sampleRate = 24000;
    const numChannels = 1;
    
    const dataInt16 = new Int16Array(bytes.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = audioContext.createBuffer(numChannels, frameCount, sampleRate);

    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
      }
    }
    
    return buffer;

  } catch (error) {
    console.error("Error generating audio:", error);
    return null;
  }
};