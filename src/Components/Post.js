import React from 'react';
import "./Post.css";

class Post extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className = "post-wrapper">
				<div className = "post-header">
					<h2> {this.props.from} → {this.props.to} </h2>
				</div>
				<div className = "post-content">
					<p>{this.props.content}</p>
				</div>
				<div className = "post-point">
					<p>+{this.props.point} points!</p>
				</div>
			</div>
		);
	}
}

export default Post;