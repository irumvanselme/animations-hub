import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Animations hub title</title>
			</Head>

			<main className={styles.main}>this is the main file</main>
			<footer className={styles.footer}>here with my footer</footer>
		</div>
	);
}
