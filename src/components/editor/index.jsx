import './editor.less';

import { Component } from 'react';
import InputNumber from '../input-number';
import InputColor from '../input-color';
import FontStyleButtonGroup from '../font-style-button-group';
import FontLayoutButtonGroup from '../font-layout-button-group';


class TextboxEditor extends Component {
	constructor(props) {
		super(props);

		this.onTextStyleChange = this.onTextStyleChange.bind(this);
		this.onFontLayoutChange = this.onFontLayoutChange.bind(this);
	}

	onTextStyleChange(field, value) {
		this.props.onTextStyleChange && this.props.onTextStyleChange({
			[field]: value
		});
	}

	onFontLayoutChange(textAlign) {
		this.onTextStyleChange('textAlign', textAlign);
	}

	render() {
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
					<FontLayoutButtonGroup textAlign={this.props.textStyle.textAlign} onFontLayoutChange={this.onFontLayoutChange}></FontLayoutButtonGroup>
				</div>

				<label htmlFor="font-opacity-style">不透明度</label>
				<div id="font-opacity-style">

				</div>
			</div>
		);
	}
}

export default TextboxEditor;