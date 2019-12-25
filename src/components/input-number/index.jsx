import './index.less';

import { Component } from 'react';
import PropTypes from 'prop-types';

import { isSyntheticEvent } from '@commons/utils';
import ImageUp from '@assets/images/三角形_展开@2x.png'
import ImageDown from '@assets/images/三角形_收起@2x.png';

const debug = require('../../commons/debug')('textbox:input-number');

class InputNumber extends Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	}

	onChange(evt) {
		debug('[onChange]: %o', evt);
		let val = parseFloat(isSyntheticEvent(evt) ? evt.target.value : evt);
		if (val > parseFloat(this.props.max)) val = parseFloat(this.props.max);
		if (val < parseFloat(this.props.min)) val = parseFloat(this.props.min);

		this.props?.onChange(val);
	}

	incr(step = 1) {
		this.onChange(this.props.value + step);
	}

	render() {
		return (
			<div className="coursebox-input-number">
				<input className="input-number" type="number" min={this.props.min} max={this.props.max} step={this.props.step} value={this.props.value} onChange={this.onChange} />
				<div className="number-up-down">
					<img className="block number-up" role="button" src={ImageUp} onClick={() => { this.incr(this.props.step) }}></img>
					<img className="block number-down" role="button" src={ImageDown} onClick={() => { this.incr(-this.props.step) }}></img>
				</div>
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