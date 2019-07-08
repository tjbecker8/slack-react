import React, {Component} from 'react';
import './sidebar.css';
import moment from 'moment'

class Message extends Component {
	//data
	state = {
		message: this.props.message
	}
	//functions
	componentWillMount() {
		let message = this.state.message
		message.date = moment(message.date).format('D MMM YYYY - h:mma')
		this.setState({message})
	}
	//render
	render() {
		return (
			<div className="message">
				<span className="author">{this.props.message.author.name}</span>
				<span className="date">{this.props.message.date}</span>
				<div className="body">
								{this.props.message.body}
				</div>
			</div>
		)
	}
}



export default Message;
