import './button-icon.less';
import { Component } from 'react';
import PropTypes from 'prop-types';

const debug = require('@commons/debug')('textbox:button-icon');

class ButtonIcon extends Component {
	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.props?.onSelected(!this.props.selected);
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

ButtonIcon.defaultProps = {
	selected: false
}

ButtonIcon.propTypes = {
	selected: PropTypes.bool.isRequired,
	onSelected: PropTypes.func.isRequired
}

export default ButtonIcon;