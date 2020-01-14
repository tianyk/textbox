import './input-color.less';

import { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import '@simonwep/pickr/dist/themes/nano.min.css';
import Pickr from '@simonwep/pickr';
import PropTypes from 'prop-types';

import throttle from '@commons/throttle';
import FontColorImage from '@assets/images/文字颜色@2x.png';
import FontColorDisabledImage from '@assets/images/文字颜色_不可点@2x.png';
import FontColorCollapseImage from '@assets/images/三角形_收起@2x.png';
import FontColorDisabledCollapseImage from '@assets/images/三角形_不可点@2x.png';
const debug = require('@commons/debug')('textbox:input-color');


class InputColor extends Component {
	constructor(props) {
		super(props);

		this.pickColor = this.pickColor.bind(this);
		this.throttleOnChange = throttle(this.onChange, 200).bind(this);
	}

	componentDidMount() {
		const pickr = this.pickr = Pickr.create({
			el: '.coursebox-input-color .color-picker',
			useAsButton: true,
			// 初始默认值
			default: (this.props?.value || '#333'),

			container: ReactDOM.findDOMNode(this).querySelector('.color-picker-container'),
			theme: 'nano',
			// 位置 下-居中
			position: 'bottom-middle',
			// 是否一直显示 默认fasle，点击别的区域后会隐藏。初始就显示
			showAlways: true,
			// 重新定位
			autoReposition: true,
			appClass: 'pickr-fix-position',
			swatches: [
				(this.props?.value || '#333'),
				'rgba(244, 67, 54, 1)',
				'rgba(233, 30, 99, 0.95)',
				'rgba(156, 39, 176, 0.9)',
				'rgba(103, 58, 183, 0.85)',
				'rgba(63, 81, 181, 0.8)',
				'rgba(33, 150, 243, 0.75)',
				'rgba(3, 169, 244, 0.7)',
				'rgba(0, 188, 212, 0.7)',
				'rgba(0, 150, 136, 0.75)',
				'rgba(76, 175, 80, 0.8)',
				'rgba(139, 195, 74, 0.85)',
				'rgba(205, 220, 57, 0.9)',
				'rgba(255, 235, 59, 0.95)'
			],
			components: {
				// Main components
				preview: true,
				opacity: true,
				hue: true,

				// Input / output Options
				interaction: {
					hex: false,
					rgba: false,
					hsla: false,
					hsva: false,
					cmyk: false,
					input: true,
					clear: false,
					save: true
				}
			},
			strings: {
				save: 'Close'  // 实时变化，保存即关闭
			}
		});

		pickr
			.on('init', () => {
				// 由于 showAlways 为 true ，默认显示。初始化完成先将其隐藏
				pickr.hide();
				pickr.__isShow = false;
			})
			.on('show', () => {
				pickr.__isShow = true;
			})
			.on('hide', () => {
				debug('[hide]');
				pickr.__isShow = false;
			})
			.on('save', (color) => {
				debug('[save]');
				pickr.hide();
				this.throttleOnChange(color.toHEXA().toString(0));
			})
			.on('change', (color) => {
				debug('[change]');
				this.throttleOnChange(color.toHEXA().toString(0));
			});
	}

	componentWillUnmount() {
		this.pickr && this.pickr.destroyAndRemove();
	}

	// 隐藏显示选色卡
	pickColor() {
		debug('pickColor');
		if (this.pickr.__isShow) {
			this.pickr.hide();
		} else {
			this.pickr.show()
		}
	}

	onChange(val) {
		this.props?.onChange(val);
	}

	render() {
		const disabled = this.props.disabled;
		const className = classNames('coursebox-input-color', this.props.className, { disabled })

		return (
			<button className={className} onClick={!disabled && this.pickColor}>
				<div className="font-color-icon">
					<img src={disabled ? FontColorDisabledImage : FontColorImage}></img>
					<div className="font-color-bar" style={{ backgroundColor: this.props.value }}></div>
				</div>

				<div className="font-color-collapse">
					<img src={disabled ? FontColorDisabledCollapseImage : FontColorCollapseImage}></img>
				</div>
				<div className="color-picker"></div>
				<div className="color-picker-container" onClick={evt => evt.stopPropagation()}></div>
			</button>
		)
	}
}

InputColor.defaultProps = {
	disabled: false
};

InputColor.propTypes = {
	disabled: PropTypes.bool,
	value: PropTypes.string
}

export default InputColor;