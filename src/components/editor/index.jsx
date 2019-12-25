import './index.less';

import { Component } from 'react';
import InputNumber from '../input-number';
import InputColor from '../input-color';
import FontStyleButtonGroup from '../font-style-button-group';


class TextboxEditor extends Component {
	constructor(props) {
		super(props);

		this.onTextStyleChange = this.onTextStyleChange.bind(this);
	}

	onTextStyleChange(field, value) {
		this.props.onTextStyleChange && this.props.onTextStyleChange({
			[field]: value
		});
	}

	render() {
		return (
			<div className="coursebox-textbox" style={{ maxWidth: '800px', border: '1px solid #aaa' }}>
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
						onClick={(field, val) => { this.onTextStyleChange(field, val) }}
					></FontStyleButtonGroup>
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