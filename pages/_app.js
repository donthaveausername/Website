import '../styles/globals.css';
import 'fomantic-ui-css/semantic.min.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
			</Head>
			<div className="body">
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;
