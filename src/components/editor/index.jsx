import './editor.less';

import { Component } from 'react';
import InputNumber from '../input-number';
import InputColor from '../input-color';
import FontStyleButtonGroup from '../font-style-button-group';
import FontLayoutButtonGroup from '../font-layout-button-group';
import ImageLineHeight from '@assets/images/行间距_正常@2x.png';
import ImagePaddingLeftAndRight from '@assets/images/左右边距_正常@2x.png';
import ImagePaddingTopAndBottom from '@assets/images/上下边距_正常@2x.png';
import { computedState } from '@commons/buttons';
const debug = require('@commons/debug')('textbox:editor');

class TextboxEditor extends Component {
	constructor(props) {
		super(props);

		this.onTextStyleChange = this.onTextStyleChange.bind(this);
		this.state = {
			textStyle: {}
		}
	}


	componentDidMount() {
		debug('componentDidMount');
		if (this.getEditor() && !this.attachedEvent) this.attachEventHandlers();
	}

	componentWillUnmount() {
		debug('componentWillUnmount');
	}

	componentDidUpdate() {
		debug('componentDidUpdate');
		if (this.getEditor() && !this.attachedEvent) this.attachEventHandlers();
	}


	attachEventHandlers() {
		if (!this.attachedEvent) {
			debug('attachEventHandlers');
			this.attachedEvent = true;

			// MediumEditor custom events for when user beings and ends interaction with a contenteditable and its elements
			this.getEditor().subscribe('blur', this.handleBlur.bind(this));
			this.getEditor().subscribe('focus', this.handleFocus.bind(this));
			this.getEditor().subscribe('positionToolbar', this.checkSelection.bind(this))

			// Updating the state of the toolbar as things change
			this.getEditor().subscribe('editableClick', this.handleEditableClick.bind(this));
			this.getEditor().subscribe('editableKeyup', this.handleEditableKeyup.bind(this));
		}
	}

	handleFocus() {
		this.checkSelection();
	}

	handleEditableClick() {
		this.checkSelection();
	}

	handleEditableKeyup() {
		this.checkSelection();
	}

	handleFocus() {
		this.checkSelection();
	}

	handleBlur() {
		debug('hideToolbar');
	}

	checkSelection() {
		debug('checkSelection');
		const selectionRange = MediumEditor.selection.getSelectionRange(this.getEditor().options?.ownerDocument);
		if (!selectionRange) return;

		let parentNode = MediumEditor.selection.getSelectedParentElement(selectionRange);
		// Make sure the selection parent isn't outside of the contenteditable
		if (!this.getEditor().elements.some(function (element) {
			return MediumEditor.util.isDescendant(element, parentNode, true);
		})) {
			return;
		}

		const textStyle = {};
		// Climb up the DOM and do manual checks for whether a certain extension is currently enabled for this node
		while (parentNode) {
			computedState(textStyle, parentNode, this.getEditor().options?.contentWindow);

			// we can abort the search upwards if we leave the contentEditable element
			if (MediumEditor.util.isMediumEditorElement(parentNode)) {
				break;
			}
			parentNode = parentNode.parentNode;
		}

		debug('textStyle %o', textStyle);

		this.setState({
			textStyle
		});
	}

	getEditor() {
		debug('------------------',this.props?.editorRef);

		return this.props?.editorRef?.current?.medium;
	}

	onTextStyleChange(field, value) {
		debug('onTextStyleChange', field, value)
		// this.props.onTextStyleChange && this.props.onTextStyleChange({
		// 	[field]: value
		// });

		const medium = this.getEditor();
		if (medium) {
			switch (field) {
				case 'fontWeight':
					medium.execAction('bold');
					break;
				case 'fontStyle':
					medium.execAction('italic');
					break;
				case 'textDecoration':
					medium.execAction('underline');
					break;
				case 'color':
					medium.execAction('foreColor', { value });
					break;
			}
		}
	}

	// function changeFont() {
	// 	document.execCommand("fontSize", false, "7");
	// 	var fontElements = document.getElementsByTagName("font");
	// 	for (var i = 0, len = fontElements.length; i < len; ++i) {
	// 		if (fontElements[i].size == "7") {
	// 			fontElements[i].removeAttribute("size");
	// 			fontElements[i].style.fontSize = "30px";
	// 		}
	// 	}
	// }

	render() {
		let fontSize = this.state.textStyle.fontSize;
		if (typeof fontSize === 'string' && fontSize.endsWith('px')) fontSize = parseFloat(fontSize);

		return (
			<div className="coursebox-editor">
				<label htmlFor="font-size-style">文字</label>

				<div id="font-style">
					<InputColor
						value={this.state.textStyle.color}
						onChange={(color) => this.onTextStyleChange('color', color)}
					></InputColor>

					<InputNumber
						value={fontSize}
						min={12}
						max={100}
						unit="px"
						onChange={(fontSize) => this.onTextStyleChange('fontSize', fontSize)}
					></InputNumber>

					<FontStyleButtonGroup
						fontWeight={this.state.textStyle?.fontWeight}
						fontStyle={this.state.textStyle.fontStyle}
						textDecoration={this.state.textStyle.textDecoration}
						onFontStyleChange={(field, val) => { this.onTextStyleChange(field, val) }}
					></FontStyleButtonGroup>
				</div>

				<label htmlFor="font-layout-style">布局</label>
				<div id="font-layout-style">
					{/* 对齐方式 */}
					<FontLayoutButtonGroup
						textAlign={this.state.textStyle.textAlign}
						onFontLayoutChange={(textAlign) => this.onTextStyleChange('textAlign', textAlign)}
					></FontLayoutButtonGroup>

					{/* 行高 */}
					<InputNumber
						min={0.8}
						max={5}
						step={0.1}
						unit="倍"
						icon={ImageLineHeight}
						value={this.state.textStyle.lineHeight}
						onChange={(lineHeight) => this.onTextStyleChange('lineHeight', lineHeight)}
					></InputNumber>

					{/* 上下内边距 */}
					<InputNumber
						min={0}
						max={100}
						unit="px"
						icon={ImagePaddingTopAndBottom}
						value={this.state.textStyle.paddingTop}
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
						value={this.state.textStyle.paddingLeft}
						onChange={(padding) => {
							this.onTextStyleChange('paddingLeft', padding);
							this.onTextStyleChange('paddingRight', padding)
						}}
					></InputNumber>
				</div>

				{/* <label htmlFor="font-opacity-style">不透明度</label>
				<div id="font-opacity-style">

				</div> */}
			</div>
		);
	}
}

export default TextboxEditor;