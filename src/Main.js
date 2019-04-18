import React, {Component} from 'react';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}

	componentDidMount() {
		debugger;
	}

	render() {
		return (
			<div className="App-main">
				<div className="App-main-left">
					<div className="App-main-left-post-container">
						<p>Posts</p>
					</div>
				</div>

				<div className="App-main-right">
					<div className="App-main-right-preview-container">
						<p>Preview</p>
					</div>
				</div>
				
			</div>
		)
	}
}

export default Main;