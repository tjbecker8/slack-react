import React, {Component} from 'react';
import './sidebar.css';
import Channel from './Channel'
import axios from 'axios'
class Sidebar extends Component {
	//data
	state = {
		workspace: 'Tortuga Coders',
		channels: []
	}
	//functions
	componentDidMount() {
		axios.get(`http://localhost:4000/api/channel`).then((res)=> {
				res.data[0].active = true
				this.setState({
					channels: res.data
				})
		this.selectChannel(res.data[0]._id)
		}).catch((err)=> {
			console.log('err', err);
		})
	}

	selectChannel = (id) => {
		let channels = this.state.channels
		channels.map((c)=> c.active = false) //add the active property to each element
		// channels.map((c) => delete c.active) //delete a property
		// channels.forEach((c) => delete c.active) //this works too to remove active property
		let channel = channels.find((c) => c._id === id)
		channel.active = true
		this.setState({channels})
		// console.log(this.state.channels);

		this.props.getMessages(id)
	}


	//render
	render() {
		return (

			<div id="sidebar">
				<h2>{this.state.workspace}</h2>
				<h3>Channels</h3>
				<ul className="list-unstyled">
					{
						this.state.channels.map((c) => {
							return <Channel channel={c} key={c._id} selectChannel={this.selectChannel} />
						})
					}
				</ul>
			</div>


		)
	}
}



export default Sidebar;
