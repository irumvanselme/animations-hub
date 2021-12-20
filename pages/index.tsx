import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Animations hub title</title>
			</Head>

			<h1>This is the main file</h1>
		</div>
	);
}
