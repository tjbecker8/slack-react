import React, {Component} from 'react';
import './sidebar.css';

class Channel extends Component {
	//data
	state = {
		channel: this.props.channel
	}

	//functions

	//render
	render() {
		return (
			<li onClick={()=> this.props.selectChannel(this.state.channel._id)} className={ this.state.channel.active ? 'active' : '' }># {this.state.channel.channelName}</li>
		)
	}
}



export default Channel;
