import './input-number.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isSyntheticEvent } from '@commons/utils';
import ImageUp from '@assets/images/三角形_展开@2x.png'
import ImageDown from '@assets/images/三角形_收起@2x.png';

const debug = require('../../commons/debug')('textbox:input-number');

class InputNumber extends Component {
	constructor(props) {
		super(props);
		debug('props: %j', props);

		this.inputRef = React.createRef();
		this.onChange = this.onChange.bind(this);
		this.onMouseDown = this.onMouseDown.bind(this);
	}

	onMouseDown(evt) {
		evt.preventDefault();
	}

	onChange(evt) {
		debug('[onChange]: %o', evt);
		let val = parseFloat(isSyntheticEvent(evt) ? evt.target.value : evt);

		// 校验
		if (val > parseFloat(this.props.max)) val = parseFloat(this.props.max);
		if (val < parseFloat(this.props.min)) val = parseFloat(this.props.min);

		this.props?.onChange(val);
	}

	incr(step = 1) {
		this.onChange(this.props.value + step);
	}

	render() {
		const className = this.props.className || '';

		return (
			<div className={`coursebox-input-number ${className}`} onMouseDown={this.onMouseDown} onClick={() => this.inputRef?.current.focus()}>
				{
					this.props.icon ? <img className="icon" src={this.props.icon}></img> : null
				}
				<input
					type="number"
					ref={this.inputRef}
					className="input-number"
					min={this.props.min}
					max={this.props.max}
					step={this.props.step}
					value={this.props.value}
					onMouseDown={this.onMouseDown}
					onChange={this.onChange}
				/>
				{
					this.props.unit ? <span className="unit">{this.props.unit}</span> : null
				}
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
	// 值
	value: PropTypes.number,
	// 图标
	icon: PropTypes.string,
	// 单位
	unit: PropTypes.string
}

export default InputNumber;