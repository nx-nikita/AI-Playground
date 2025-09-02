// src/app/api/generate/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { prompt, temperature, tokens, model } = await request.json();
    const apiKey = process.env.OPENAI_API_KEY;

    // Demo fallback so you can immediately see output without a key
    if (!apiKey) {
      const mocked = prompt?.toLowerCase().includes("french")
        ? 'Bonjour, comment ça va ?  — (demo response; add OPENAI_API_KEY in .env.local for real responses)'
        : `Echo (demo): ${String(prompt).slice(0, 300)}`;
      return NextResponse.json({ text: mocked });
    }

    // Live call to OpenAI (Chat Completions)
    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model || "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        max_tokens: Math.min(Number(tokens) || 512, 4096),
        temperature: Number(temperature) || 0.7,
      }),
    });

    const json = await resp.json();
    const text = json?.choices?.[0]?.message?.content ?? "No output (empty)";
    return NextResponse.json({ text });
  } catch (e) {
    return NextResponse.json({ text: "Server error generating output." }, { status: 500 });
  }
}
