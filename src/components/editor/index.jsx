import { Component } from 'react';
import '../../styles/editor.less';
import '@simonwep/pickr/dist/themes/nano.min.css';

import InputNumber from '../input-number';

import Pickr from '@simonwep/pickr';
import FontColorImage from '../../../assets/images/文字颜色@2x.png';
import FontColorCollapseImage from '../../../assets/images/三角形_收起@2x.png';

class TextboxEditor extends Component {
	constructor(props) {
		super(props);

		this.onTextStyleChange = this.onTextStyleChange.bind(this);
	}

	componentDidMount() {
		const pickr = this.pickr = Pickr.create({
			el: '.font-color .color-picker',
			useAsButton: true,
			// 初始默认值
			default: (this.props?.textStyle?.color || '#333'),

			theme: 'nano',
			swatches: [
				(this.props?.textStyle?.color || '#333'),
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
			.on('save', (color) => {
				pickr.hide();
				this.onTextStyleChange('color')(color.toHEXA().toString(0), null);
			})
			.on('change', (color) => {
				this.onTextStyleChange('color')(color.toHEXA().toString(0), null);
			});
	}

	componentWillUnmount() {
		this.pickr && this.pickr.destroyAndRemove();
	}

	onTextStyleChange(field) {
		return (value) => {
			console.log(`[${field}] %o`, value);
			if (field === 'fontSize') value = parseInt(value);

			this.props.onTextStyleChange && this.props.onTextStyleChange({
				[field]: value
			});
		}
	}

	pickColor() {
		this.pickr.show();
	}

	render() {
		return (
			<div className="rb-textbox-editor" style={{ maxWidth: '300px', border: '1px solid #aaa' }}>
				<label htmlFor="font-size-style">文字</label>
				<div id="font-size-style">
					<button className="font-color" onClick={this.pickColor.bind(this)}>
						<div className="font-color-icon">
							<img src={FontColorImage}></img>
							<div className="font-color-bar" style={{ backgroundColor: this.props.textStyle.color }}></div>
						</div>
						<div className="font-color-collapse">
							<img src={FontColorCollapseImage}></img>
						</div>
						<div className="color-picker"></div>
					</button>

					<InputNumber value={this.props.textStyle.fontSize} onChange={this.onTextStyleChange('fontSize')}></InputNumber>

					<button onClick={this.onTextStyleChange('fontWeight').bind(this, 'bold')}>粗体</button>
					<button onClick={this.onTextStyleChange('fontStyle').bind(this, 'italic')}>斜体</button>
					<button onClick={this.onTextStyleChange('textDecoration').bind(this, 'underline')}>下划线</button>
				</div>

				<label htmlFor="font-layout-style">布局</label>
				<div id="font-layout-style">
				</div>

				<label htmlFor="font-opacity-style">不透明度</label>
				<div id="font-opacity-style">

				</div>
			</div>
		);
	}
}

export default TextboxEditor;