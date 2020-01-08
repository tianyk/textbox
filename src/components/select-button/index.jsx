import './select-button.less';
import { Component } from 'react';
import PropTypes from 'prop-types';

const debug = require('@commons/debug')('textbox:button-icon');

class ButtonIcon extends Component {
	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
		this.onMouseDown = this.onMouseDown.bind(this);
	}

	onMouseDown(evt) {
		evt.preventDefault();
	}
	
	onClick() {
		this.props?.onSelected(!this.props.selected);
	}

	render() {
		const className = this.props.className;

		return (
			<button className={`coursebox-button-icon ${className} ${this.props.selected ? 'selected' : ''}`} onClick={this.onClick} onMouseDown={this.onMouseDown}>
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