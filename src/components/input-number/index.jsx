import './style/index.less'
import { Component } from 'react';
import PropTypes from 'prop-types';
const debug = require('../../commons/debug')('textbox:input-number');

class InputNumber extends Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	}

	onChange(evt) {
		debug('[onChange]: %o', evt);
		this.props?.onChange(evt.target.value);
	}

	incr(step = 1) {
		this.props?.onChange(this.props.value + step);
	}

	render() {
		return (
			<div className="coursebox-input-number">
				<input className="input-number" type="number" min={this.props.min} max={this.props.max} step={this.props.step} value={this.props.value} onChange={this.onChange} />
				up
				down
			</div>
		);
	}
}

InputNumber.defaultProps = {
	min: -Infinity,
	max: Infinity,
	step: 1
}

InputNumber.propTypes = {
	onChange: PropTypes.func.isRequired,
	min: PropTypes.number,
	max: PropTypes.number,
	setp: PropTypes.number,
	value: PropTypes.number
}

export default InputNumber;