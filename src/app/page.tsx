"use client";

import { useState } from "react";
import styles from "./playground.module.css";

export default function Playground() {

  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(256);

  const handleRun = () => {
    setOutput(`Generated text for: ${prompt}\n(temperature: ${temperature}, max tokens: ${maxTokens})`);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>AI Playground</h1>
        <p className={styles.sub}>Experience smarter results with advanced AI technology</p>
      </header>
      <div className={styles.surface}>
        <aside className={styles.sidebar}>
          <label className={styles.label}>Model</label>
          <select className={styles.select}>
            <option>gpt-4</option>
            <option>gpt-3.5</option>
          </select>

          <div className={styles.sliderBlock}>
            <div className={styles.labelRow}>
              <span>Temperature</span>
              <span>{temperature.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={temperature}
              onChange={(e) => setTemperature(Number(e.target.value))}
              className={styles.range}
            />
          </div>

          <div className={styles.sliderBlock}>
            <div className={styles.labelRow}>
              <span>Max Tokens</span>
              <span>{maxTokens}</span>
            </div>
            <input
              type="range"
              min={10}
              max={2000}
              step={10}
              value={maxTokens}
              onChange={(e) => setMaxTokens(Number(e.target.value))}
              className={styles.range}
            />
          </div>
        </aside>

        <main className={styles.main}>
          <div>
            <label className={styles.fieldLabel}>Prompt</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className={styles.textarea}
            />
            <div className={styles.controls}>
              <button className={`${styles.btn} ${styles.primary}`} onClick={handleRun}>
                Run
              </button>
              <button
                className={`${styles.btn} ${styles.secondary}`}
                onClick={() => setPrompt("")}
              >
                Clear
              </button>
            </div>
          </div>

          <div className={styles.outputWrap}>
            <div className={styles.fieldRow}>
              <span className={styles.fieldLabel}>Output</span>
            </div>
            <textarea readOnly value={output} className={styles.outputArea} />
          </div>
        </main>
      </div>
    </div>
  );
}
