// src/App.tsx
import { useState } from "react";
import { ChevronDown, Save, Upload, Copy, Download } from "lucide-react";

export default function App() {
  const [model, setModel] = useState("gpt-4o-mini"); // you can change model
  const [temperature, setTemperature] = useState(0.7);
  const [tokens, setTokens] = useState(512);
  const [prompt, setPrompt] = useState(
    'Translate the following English text to French:\n\n"Hello, how are you?"'
  );
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function runPrompt() {
    setLoading(true);
    setOutput("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, temperature, tokens, model }),
      });

      const data = await res.json();
      setOutput(data.text);
    } catch (err) {
      setOutput("⚠️ Error generating response");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-6 font-sans text-white">
      <div className="w-full max-w-3xl rounded-2xl shadow-2xl bg-gray-900/80 border border-gray-700 p-6 space-y-6">
        
        {/* Header */}
        <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          AI Playground
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Model */}
            <div>
              <label className="block text-sm mb-2">Model</label>
              <div className="flex items-center justify-between bg-gray-800 p-2 rounded-lg">
                <span>{model}</span>
                <ChevronDown size={18} />
              </div>
            </div>

            {/* Temperature */}
            <div>
              <label className="block text-sm mb-2">
                Temperature: {temperature.toFixed(2)}
              </label>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className="w-full accent-teal-400"
              />
            </div>

            {/* Tokens */}
            <div>
              <label className="block text-sm mb-2">Max tokens: {tokens}</label>
              <input
                type="range"
                min={10}
                max={2048}
                step={1}
                value={tokens}
                onChange={(e) => setTokens(parseInt(e.target.value))}
                className="w-full accent-blue-400"
              />
            </div>
          </div>

          {/* Prompt + Output */}
          <div className="md:col-span-2 space-y-6">
            {/* Prompt */}
            <div>
              <label className="block text-sm mb-2">Prompt</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={5}
                className="w-full p-3 rounded-xl bg-gray-800 text-gray-100 border border-gray-700 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              />
              <div className="flex gap-3 mt-3">
                <button
                  onClick={runPrompt}
                  disabled={loading}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 hover:opacity-90 transition font-semibold"
                >
                  {loading ? "Generating..." : "Run"}
                </button>
              </div>
            </div>

            {/* Output */}
            <div>
              <label className="block text-sm mb-2">Output</label>
              <div className="p-3 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-between">
                <span>{output || "⚡ Run the prompt to see results here"}</span>
                <div className="flex gap-3">
                  <button
                    onClick={() => navigator.clipboard.writeText(output)}
                    className="hover:text-teal-400 transition"
                  >
                    <Copy size={18} />
                  </button>
                  <button className="hover:text-blue-400 transition">
                    <Download size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
