import './select-button.less';
import classNames from 'classnames';
import { Component } from 'react';
import PropTypes from 'prop-types';

const debug = require('@commons/debug')('textbox:select-button');

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
		const disabled = this.props.disabled;
		debug('disabled', disabled);

		const className = classNames(
			'coursebox-button-icon',
			this.props.className,
			{
				disabled,
				selected: this.props.selected
			});

		const icon = disabled ? (this.props.disabledIcon || this.props.icon) : this.props.icon;
		
		return (
			<button className={className} onClick={!disabled && this.onClick} onMouseDown={this.onMouseDown}>
				<img className="icon" src={icon}></img>
			</button>
		);
	}
}

ButtonIcon.defaultProps = {
	disabled: false,
	selected: false
}

ButtonIcon.propTypes = {
	icon: PropTypes.string.isRequired,
	disabledIcon: PropTypes.string,
	selected: PropTypes.bool.isRequired,
	onSelected: PropTypes.func.isRequired
}

export default ButtonIcon;