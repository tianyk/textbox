import './input-select.less';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SelectCollapseImage from '@assets/images/三角形_收起@2x.png';
import SelectDisabledCollapseImage from '@assets/images/三角形_不可点@2x.png';

const debug = require('../../commons/debug')('textbox:input-select');

class InputSelect extends Component {
	constructor(props) {
		super(props);
		debug('props: %j', props);

		this.inputRef = React.createRef();
		this.onChange = this.onChange.bind(this);
		this.onMouseDown = this.onMouseDown.bind(this);
		this.showOptions = this.showOptions.bind(this);
		this.hideOptions = this.hideOptions.bind(this);

		this.state = {
			showOptions: false
		}
	}

	componentDidMount() {
		document.addEventListener('mouseup', this.hideOptions)
	}

	componentWillUnmount() {
		document.removeEventListener('mouseup', this.hideOptions);
	}

	hideOptions(evt) {
		const dom = ReactDOM.findDOMNode(this);
		const target = evt.target;
		if (dom === target) return;

		let parent = target.parentNode;
		while (parent) {
			if (parent === dom) return;
			parent = parent.parentNode;
		}

		this.setState({
			showOptions: false
		})
	};

	onMouseDown(evt) {
		evt.preventDefault();
	}

	onChange(evt) {
		debug('[onChange]: %o', evt);
		const target = evt.target;
		const key = target.getAttribute('data-key');
		const value = target.getAttribute('data-value');

		this.props?.onChange(key, value);
	}

	showOptions() {
		this.setState((prevState) => ({ showOptions: !prevState.showOptions }));
	}

	render() {
		const disabled = this.props.disabled;
		const selectValue = this.props.value;

		const className = classNames(
			'coursebox-input-select ',
			this.props.className,
			{
				disabled
			}
		);

		// 下拉列表
		const options = this.props.options.map(option => {
			let selected = false;
			if (option.key && option.value) {
				if (selectValue) selected = ((selectValue).toString() === (option.key).toString());
				return <li className={selected ? 'selected' : ''} data-key={option.key} data-value={option.value} onClick={this.onChange}>{option.value}</li>
			} else {
				option = option.toString();
				if (selectValue) selected = ((selectValue).toString() === option);
				return <li className={selected ? 'selected' : ''} data-key={option} data-value={option} onClick={this.onChange}>{option}</li>
			}
		});

		// icon 
		// 如果禁用状态切有 disableIcon 使用 icon
		const icon = disabled ? (this.props.disabledIcon || this.props.icon) : this.props.icon;

		return (
			<div className={className} onClick={!disabled && this.showOptions} onMouseDown={this.onMouseDown}>
				{
					icon ? <img className="icon" src={icon}></img> : null
				}
				<span className="select-value">{selectValue}</span>
				{
					this.props.unit ? <span className="unit">{this.props.unit}</span> : null
				}
				<div className="select-collapse">
					<img src={disabled ? SelectDisabledCollapseImage : SelectCollapseImage}></img>
				</div>
				{
					this.state.showOptions
						?
						<div className="options">
							<ul>
								{options}
							</ul>
						</div>
						: null
				}

			</div>
		);
	}
}

InputSelect.defaultProps = {
	disabled: false
}

InputSelect.propTypes = {
	disabled: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
	// 值
	value: PropTypes.number,
	// 图标
	icon: PropTypes.string,
	disabledIcon: PropTypes.string,
	// 单位
	unit: PropTypes.string
}

export default InputSelect;