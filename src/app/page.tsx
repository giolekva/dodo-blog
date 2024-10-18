import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Hello from dodo: App
        <ol>
          <li>
            Get started by editing code directly in the browser: <a href="TODO">TODO</a>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
      </main>
    </div>
  );
}
