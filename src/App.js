import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Sidebar from './sidebar'
import Content from './Content'



class App extends Component {
	//data
	state = {
		channel: ''
	}
	//functions
	getMessages = (id) => {
		console.log('id', id);
		console.log('state', this.state);
		this.setState({
			channel: id
		}, () => {
			
		})

	}



	//render
	render() {
		return (
			<div id="wrap">
				<Sidebar  getMessages={this.getMessages} />
			<Content channel={this.state.channel} />
			</div>
		)
	}
}



export default App;
