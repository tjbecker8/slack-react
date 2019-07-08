import React, {Component} from 'react';
import './content.css';
import Message from './Message'
import NewMessage from './NewMessage'

import axios from 'axios'
class Content extends Component {
	//data
	state = {
		messages: [],
		channel: ''
	}
	//functions

	componentWillMount() {

		axios.get('http://localhost:4000/api/messages').then((res)=> {
			// console.log(res.data);
			this.setState({
				messages: res.data
			})
		}).catch((err)=> {
			console.log('err', err);
		})
	}




componentWillReceiveProps(props) {

	this.setState({
		channel: props.channel
	})
	axios.get(`http://localhost:4000/api/messages?channel=${props.channel}`).then((res)=> {

		this.setState({
			messages: res.data
		})
	}).catch((err)=> {
		console.log('err', err);
	})
}



	createMessage = (e, text) => {
		e.preventDefault()
			let message = {
				body: text,
				channel: this.state.channel,
			}
			axios.post('http://localhost:4000/api/messages', message, {headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}}
		).then((res)=> {
				let messages = this.state.messages
				messages.push(res.data)
				this.setState({messages})
			}).catch((err)=> {
				console.log('err', err);
			})
}


	//render
	render() {
		return (
			<div id="content">
				<div id="messages">
					{
						this.state.messages.map((m)=> {
							return <Message message={m} key={m._id} />
						})
					}

				</div>
				<NewMessage  createMessage={this.createMessage} />
			</div>

		)
	}
}



export default Content;
