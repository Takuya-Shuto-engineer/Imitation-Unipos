import React from 'react';
import Post from './Post';
import "./Main.css";

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			from: 'takuya shuto',
			to: 'sato',
			content: '誰かがピンチになるとさりげなくサポートに入ってくれてありがとう！ #縁の下の力持ち',
			point: 39,
			postExamples: [
				{
					from: "takuya shuto",
					to: "okaken",
					content: "プロジェクトの進行管理など，丁寧にご指導いただきありがとうございます！",
					point: 39
				},
				{
					from: "takuya shuto",
					to: "araiyu",
					content: "Scalaの基礎からDDDに基づくサーバ設計まで，丁寧にご指導いただきありがとうございます！",
					point: 39
				},
				{
					from: "takuya shuto",
					to: "maeko kawaguchi",
					content: "インターンシップの準備やホテルの手配，ありがとうございました！",
					point: 39
				}
			]
		}
	}

	handleToChange(event) {
		const inputValue = event.target.value;
		this.setState({
			to: inputValue,
		});
	}

	handleContentChange(event) {
		const inputValue = event.target.value;
		this.setState({
			content: inputValue,
		});
	}

	handlePointChange(event) {
		const inputValue = event.target.value;
		this.setState({
			point: inputValue,
		});
	}

	handleSubmit() {
		const inputContent = this.state.content;
		const inputFrom = this.state.from;
		const inputTo = this.state.to;
		const inputPoint = this.state.point;
		let posts = this.state.postExamples;
		posts.push({
			from: inputFrom,
			to: inputTo,
			content: inputContent,
			point: inputPoint
		});

		this.setState({postExamples: posts});
	}

	render() {
		return (
			<div className="main-wrapper">
				<div className="main">
					<div className="submission-wrapper">
						<h1>感謝の投稿をしよう</h1>
						<p>To</p>
						<input 
							className="input-filed"
							value={this.state.to}
							onChange={(event) => {this.handleToChange(event)}}
						/>
						<p>Content</p>
						<textarea 
							className="input-text"
							value={this.state.content}
							onChange={(event) => {this.handleContentChange(event)}}
						/>
						<p>Point</p>
						<input 
							className="input-filed"
							value={this.state.point}
							onChange={(event) => {this.handlePointChange(event)}}
						/>
						<br/>
						<input 
							type="submit"
							value="投稿"
							onClick={() => {this.handleSubmit()}}
						/>
					</div>
					<div className="timeline-wrapper">
						<h1>タイムライン</h1>
						{ this.state.postExamples.map((post) => {
							return (
									<Post 
										from = {post.from}
										to = {post.to}
										content = {post.content}
										point = {post.point}
									/>
							);
						})}
					</div>
				</div>
			</div>
		);
		}
}

export default Main;