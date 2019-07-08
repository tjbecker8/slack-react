import React, {Component} from 'react';
import './content.css';
class NewMessage extends Component {
	//data
	state = {
		text: ''
	}
	//functions
	// createMessage = (e) => {
	// 	e.preventDefault()
	// 	console.log(this.state.text)
	// }

	changeText = (e) => {
		this.setState({
			text: e.target.value
		})
	}

	clearMessage = () => {
		this.setState({
			text: ''
		})
	}
	//render
	render() {
		return (
			<div id="new-messages">
				<form onSubmit= {(e) => {
						this.props.createMessage(e, this.state.text);
						this.clearMessage()}
					}>
					<div className="input-group mb-3">
						<input type="text" className="form-control" placeholder="New Message" value={this.state.text} onChange={(e) => this.changeText(e)} />
						<div className="input-group-append">
							<button className="btn btn-success" type="submit" >Send</button>
						</div>
					</div>
				</form>
			</div>


		)
	}
}



export default NewMessage;
