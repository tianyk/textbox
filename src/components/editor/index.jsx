import './index.less';

import { Component } from 'react';
import InputNumber from '../input-number';
import InputColor from '../input-color';

class TextboxEditor extends Component {
	constructor(props) {
		super(props);

		this.onTextStyleChange = this.onTextStyleChange.bind(this);
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

	render() {
		return (
			<div className="coursebox-textbox" style={{ maxWidth: '300px', border: '1px solid #aaa' }}>
				<label htmlFor="font-size-style">文字</label>
				<div id="font-size-style">
					<InputColor value={this.props.textStyle.color} onChange={this.onTextStyleChange('color')}></InputColor>
					<InputNumber value={this.props.textStyle.fontSize} min={12} max={100} onChange={this.onTextStyleChange('fontSize')}></InputNumber>

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