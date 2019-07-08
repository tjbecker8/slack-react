import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Signup from './signup'
import App from './App'
import Login from './login'


class Routes extends Component {
	//data
state = {
	loggedIn: false
}
	//functions
checkAuth= () => {
	if (localStorage.getItem('token')) {
		return true
	} else {
		return false
	}
	// if (this.state.loggedIn) {
	// 	return true
	// } else {
	// 	return false
	// }
}

auth = () => {
	this.setState({
		loggedIn: true
	}, ()=>{
		window.location.href ='/app'
	})
}
	//render
	render() {
		return (
			<BrowserRouter>
				<Switch>
					{
						this.checkAuth() &&
					<Route path="/app" component={App} />
					}
					<Route path="/login" component={() => <Login auth={this.auth} />} />
					<Route path="/" component={() => <Signup auth={this.auth} />} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes;
