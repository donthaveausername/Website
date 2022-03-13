import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.container}>
				<Head>
					<title>HCI Sci Discord Bot</title>
					<meta name="description" content="Generated by create next app" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main className={styles.main}>
					<h1 className={styles.title}>The HCI Discord Science Bot</h1>

					<p className={styles.description}>
						Join this <a className={styles.link} href='https://discord.gg/RtrGUaTVcS'>server</a> to use the bot!
					</p>

					<div className={styles.grid}>
						<a href='./commands' className={styles.card}>
							<h2>Commands</h2>
							<p>View the all the bot commands here!</p>
						</a>
						<a href='./description' className={styles.card}>
							<h2>Read More</h2>
							<p>Read the description of the bot and etc.</p>
						</a>
						<a href='./contributing' className={styles.card}>
							<h2>Contributing Guide</h2>
							<p>Contribute to this site, the bot, database server or the Teacher{String.fromCharCode(39)}s Portal!</p>
						</a>
						<a href='https://link.to/teacher/portal' className={styles.card}>
							<h2>Teacher{String.fromCharCode(39)}s Portal (Link to be added)</h2>
							<p>Login to the Teacher{String.fromCharCode(39)}s Portal (Teachers only{/* , if you are a student do not even think of it */})</p>
						</a>
					</div>
				</main>

				<footer className={styles.footer}>
					<a
						href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
          Powered by {'Next.js'} {/* IDK why I put the in brackets but ok */}
					</a>
				</footer>
			</div>
		);
	}
}

export default App;
