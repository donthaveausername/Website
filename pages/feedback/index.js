import Head from 'next/head';
import React, { Component } from 'react';
import { Header, Container, Input, Form, TextArea, Button } from 'semantic-ui-react';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			class: '',
			output: '',
			disabled: false,
			feedback: '',
		};
		this.webhookUrl = 'https://discord.com/api/webhooks/953113737366224986/zIPtyJSEk1VxQ1bNLEL5O_lRoCOilLoNyK-WmSFcyovxYl_fBhD814glVwq2f_RKDl9n';
		this.sendFeedback = this.sendFeedback.bind(this);
	}

	sendFeedback() {
		const name = this.state.name;
		const className = this.state.class;
		const feedback = this.state.feedback;

		if (name === '' || className === '' || feedback === '') {
			this.setState({ output: 'Please fill out all fields.' });
			return;
		}

		axios.post(this.webhookUrl, {
			username: name,
			content: this.state.feedback,
		}).catch(err => {
			this.setState({ output: err.message });
		});

		this.setState({ disabled: true });
	}

	render() {
		return (
			<Container>
				<Head>
					<title>Feedback</title>
				</Head>
				<Header as='h1' textAlign='center'>Feedback</Header>
				<p>Give feedback on the bot and tell us what you think about it or what features you want!</p>
				<Form>
					<Input type='text' placeholder='Name' onChange={(e) => this.setState({ name: e.target.value })} fluid />
					<Input type='text' placeholder='Class (so that we can track you down)' onChange={(e) => this.setState({ class: e.target.value })} fluid />
					<TextArea placeholder='Tell us more!' style={{
						minHeight: '200px',
						resize: 'none',
					}} onChange={(e) => this.setState({ feedback: e.target.value })} />
				</Form>
				<Button positive fluid state={this.state.disabled} onClick={() => this.sendFeedback()}>Send your feedback</Button>
				<p>{this.state.output}</p>
			</Container>
		);
	}
}

export default App;
