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
		const colors = [
			(this.props?.value || '#333'),
			"#f44336ff",
			"#e91e63f2",
			"#9c27b0e5",
			"#673ab7d8",
			"#3f51b5cc",
			"#2196f3bf",
			"#03a9f4b2",
			"#00bcd4b2",
			"#009688bf",
			"#4caf50cc",
			"#8bc34ad8",
			"#cddc39e5",
			"#ffeb3bf2"
		];

		try {
			let recentlyUsedColors = JSON.parse(window.localStorage.getItem('__PICKR_COLORS__') || '[]');
			for (let color of colors) {
				const pos = recentlyUsedColors.indexOf(color);
				if (-1 !== pos) recentlyUsedColors.splice(pos, 1);
			}
			if (recentlyUsedColors.length > 0) {
				colors.splice(colors.length - recentlyUsedColors.length, recentlyUsedColors.length, ...recentlyUsedColors);
			}
		} catch (ignored) { }

		console.log(colors);

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
			swatches: colors,
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

				color = color.toHEXA().toString(0);
				// 保存最近使用的颜色 
				try {
					let colors = JSON.parse(window.localStorage.getItem('__PICKR_COLORS__') || '[]');
					if (!colors.includes(color)) {
						if (colors.length >= 7) colors = colors.slice(colors.length - 7);
						colors.push(color);
						window.localStorage.setItem('__PICKR_COLORS__', JSON.stringify(colors));
					}
				} catch (ignored) { }

				this.throttleOnChange(color);
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
	// 是否禁用
	disabled: PropTypes.bool,
	// 值更新回调函数
	onChange: PropTypes.func.isRequired,
	// 初始颜色值
	value: PropTypes.string
}

export default InputColor;