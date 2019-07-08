import React, {Component} from 'react';
import './App.css';
import axios from 'axios'

class Login extends Component {
	//data
	state = {
		email: '',
		password: '',
		error: ''
	}

	//functions

changeEmail = (e) => {
	this.setState({email: e.target.value})
}

changePassword = (e) => {
	this.setState({password: e.target.value})
}

login =(e) => {
	e.preventDefault()
	axios.post('http://localhost:4000/api/login', this.state).then((res) => {
		
		if (!res.data.token) {
			this.setState({
				error: res.data
			})
		} else {
			this.setState({
				error: ''
			})
			localStorage.setItem('token', res.data.token)
			this.props.auth()
		}

		// let x = localStorage.getItem('token')
	}).catch((err)=> {
		console.log('err', err)
	})
}


	//render
	render() {
		return (
			<div className="row">
				<div className="col-sm-4 offset-4">
					<div className="card signup">
						<div className="card-body">
							<form onSubmit={(e)=> this.login(e)}>
								<div className="form-group">
									<input type="email" className="form-control" placeholder="email" value={this.state.email} onChange={(e) => this.changeEmail(e)}/>
								</div>
								<div className="form-group">
									<input type="password" className="form-control" placeholder="password" value={this.state.password} onChange={(e) => this.changePassword(e)}/>
								</div>
								<div className="error">{this.state.error}</div>
								<button type="submit" className="btn btn-primary">Login</button>
							</form>

						</div>
					</div>
				</div>
			</div>
		)
	}
}



export default Login;
