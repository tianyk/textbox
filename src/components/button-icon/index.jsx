import './button-icon.less';
import { Component } from 'react';

class ButtonIcon extends Component {
	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		// this.props
		console.log(!this.props.selected);
		this.props?.onClick(!this.props.selected);
	}

	render() {
		const className = [
			'coursebox-button-icon',
			this.props.selected ? 'selected' : ''
		].join(' ');

		return (
			<button className={className} onClick={this.onClick}>
				<img className="icon" src={this.props.icon}></img>
			</button>
		);
	}
}

export default ButtonIcon;