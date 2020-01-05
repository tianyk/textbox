import './editor.less';

import { Component } from 'react';
import InputNumber from '../input-number';
import InputColor from '../input-color';
import FontStyleButtonGroup from '../font-style-button-group';
import FontLayoutButtonGroup from '../font-layout-button-group';
import ImageLineHeight from '@assets/images/行间距_正常@2x.png';
import ImagePaddingLeftAndRight from '@assets/images/左右边距_正常@2x.png';
import ImagePaddingTopAndBottom from '@assets/images/上下边距_正常@2x.png';

const debug = require('@commons/debug')('textbox:editor');

class TextboxEditor extends Component {
	constructor(props) {
		super(props);

		this.onTextStyleChange = this.onTextStyleChange.bind(this);
	}

	onTextStyleChange(field, value) {
		debug('onTextStyleChange', field, value)
		this.props.onTextStyleChange && this.props.onTextStyleChange({
			[field]: value
		});
	}

	render() {
		debug(this.props.selection)
		return (
			<div className="coursebox-editor">
				<label htmlFor="font-size-style">文字</label>

				<div id="font-style">
					<InputColor
						value={this.props.textStyle.color}
						onChange={(color) => this.onTextStyleChange('color', color)}
					></InputColor>

					<InputNumber
						value={this.props.textStyle.fontSize}
						min={12}
						max={100}
						unit="px"
						onChange={(fontSize) => this.onTextStyleChange('fontSize', fontSize)}
					></InputNumber>

					<FontStyleButtonGroup
						fontWeight={this.props.textStyle.fontWeight}
						fontStyle={this.props.textStyle.fontStyle}
						textDecoration={this.props.textStyle.textDecoration}
						onFontStyleChange={(field, val) => { this.onTextStyleChange(field, val) }}
					></FontStyleButtonGroup>
				</div>

				<label htmlFor="font-layout-style">布局</label>
				<div id="font-layout-style">
					{/* 对齐方式 */}
					<FontLayoutButtonGroup
						textAlign={this.props.textStyle.textAlign}
						onFontLayoutChange={(textAlign) => this.onTextStyleChange('textAlign', textAlign)}
					></FontLayoutButtonGroup>

					{/* 行高 */}
					<InputNumber
						min={0.8}
						max={5}
						step={0.1}
						unit="倍"
						icon={ImageLineHeight}
						value={this.props.textStyle.lineHeight}
						onChange={(lineHeight) => this.onTextStyleChange('lineHeight', lineHeight)}
					></InputNumber>

					{/* 上下内边距 */}
					<InputNumber
						min={0}
						max={100}
						unit="px"
						icon={ImagePaddingTopAndBottom}
						value={this.props.textStyle.paddingTop}
						onChange={(padding) => {
							this.onTextStyleChange('paddingTop', padding);
							this.onTextStyleChange('paddingBottom', padding);
						}}
					></InputNumber>

					{/* 左右内边距 */}
					<InputNumber
						min={0}
						max={100}
						unit="px"
						icon={ImagePaddingLeftAndRight}
						value={this.props.textStyle.paddingLeft}
						onChange={(padding) => {
							this.onTextStyleChange('paddingLeft', padding);
							this.onTextStyleChange('paddingRight', padding)
						}}
					></InputNumber>
				</div>

				<label htmlFor="font-opacity-style">不透明度</label>
				<div id="font-opacity-style">

				</div>
			</div>
		);
	}
}

export default TextboxEditor;