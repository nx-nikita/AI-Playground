import styles from "./playground.module.css";

export default function Playground() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>AI Playground</h1>
        <p>Welcome! Your playground UI is ready 🎉</p>
      </div>
    </main>
  );
}
