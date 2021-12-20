import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home () {
    return (
        <div>
            <Head>
                <title>Animations hub title</title>
            </Head>

            <div className={styles.body}>
                <h1>Preview the animations created by <span style={{ textDecoration: "underline" }}>anselme</span></h1>
            </div>
        </div>
    );
}
