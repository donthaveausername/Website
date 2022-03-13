import React, { Component } from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.container}>
				<Head>
					<title>Commands</title>
				</Head>
				<main className={styles.main}>
					<h1 className={styles.title}>Commands</h1>
					<p>Commands are WIP</p>
				</main>
			</div>
		);
	}
}

export default App;