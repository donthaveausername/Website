import { Html, Head, Main, NextScript } from 'next/document';
import { Menu, Header, Image, Segment } from 'semantic-ui-react';


export default function Document() {
	return (
		<Html lang='en'>
			<Head>
			</Head>
			<body className='body'>
				<Segment inverted>
					<Menu inverted pointing secondary>
						<Menu.Item>
							<Image src='/Website/data-science.png' avatar />
							<span>HCI Science Discord Bot</span>
						</Menu.Item>
					</Menu>
				</Segment>
				<Main className='main-h' />
				<NextScript />
			</body>
		</Html>
	);
}