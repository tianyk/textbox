import './editor.less';

import { Component } from 'react';
// import InputNumber from '../input-number';
import InputSelect from '../input-select';
import ReactDOM from 'react-dom';
import InputColor from '../input-color';
import MediumEditor from 'medium-editor';
import FontStyleButtonGroup from '../font-style-button-group';
import FontLayoutButtonGroup from '../font-layout-button-group';
// import ImageLineHeight from '@assets/images/行间距_正常@2x.png';
// import ImagePaddingLeftAndRight from '@assets/images/左右边距_正常@2x.png';
// import ImagePaddingTopAndBottom from '@assets/images/上下边距_正常@2x.png';
import { computedState } from '@commons/computed_state';
import throttle from '@commons/throttle';
import { isReactComponentInstance, isElement} from '@commons/utils';

const debug = require('@commons/debug')('textbox:editor');

function removeStyle(element, ...styleNames) {
	for (let styleName of styleNames) {
		element.style[styleName] = null;
	}

	const children = element.children;
	if (children.length === 0) return;

	for (let child of children) {
		removeStyle(child, ...styleNames);
	}
}


class TextboxEditor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			textStyle: {}
		}

		this.onTextStyleChange = this.onTextStyleChange.bind(this);
		this.throttleCheckState = throttle(this.checkState, 250).bind(this);
	}

	componentDidMount() {
		debug('componentDidMount');
		if (this.getTextbox() && !this.attachedEvent) this.attachEventHandlers();
	}

	componentWillUnmount() {
		debug('componentWillUnmount');
		this.detachEventHandlers();
	}

	componentDidUpdate() {
		debug('componentDidUpdate');
		if (this.getTextbox() && !this.attachedEvent) this.attachEventHandlers();
	}


	detachEventHandlers() {
		if (this.attachedEvent) {
			debug('detachEventHandlers');
			this.attachedEvent = true;

			// this.getTextbox().subscribe('blur', this.handleBlur.bind(this)); // 禁用、重置
			this.getTextbox().unsubscribe('focus', this.throttleCheckState);
			this.getTextbox().unsubscribe('positionToolbar', this.throttleCheckState);
			this.getTextbox().unsubscribe('editableInput', this.throttleCheckState);

			// Updating the state of the toolbar as things change
			this.getTextbox().unsubscribe('editableClick', this.throttleCheckState);
			this.getTextbox().unsubscribe('editableKeyup', this.throttleCheckState);
		}
	}

	attachEventHandlers() {
		if (!this.attachedEvent) {
			debug('attachEventHandlers');
			this.attachedEvent = true;
			// this.throttleCheckState();

			// MediumEditor custom events for when user beings and ends interaction with a contenteditable and its elements
			// this.getTextbox().subscribe('blur', this.handleBlur.bind(this)); // 禁用、重置
			this.getTextbox().subscribe('focus', this.throttleCheckState);
			this.getTextbox().subscribe('positionToolbar', this.throttleCheckState);
			this.getTextbox().subscribe('editableInput', this.throttleCheckState);

			// Updating the state of the toolbar as things change
			this.getTextbox().subscribe('editableClick', this.throttleCheckState);
			this.getTextbox().subscribe('editableKeyup', this.throttleCheckState);
		}
	}

	checkState() {
		debug('checkState');
		const selectionRange = MediumEditor.selection.getSelectionRange(this.getTextbox().options?.ownerDocument);
		if (!selectionRange) return;

		let parentNode = MediumEditor.selection.getSelectedParentElement(selectionRange);
		// Make sure the selection parent isn't outside of the contenteditable
		if (!this.getTextbox().elements.some(function (element) {
			return MediumEditor.util.isDescendant(element, parentNode, true);
		})) {
			return;
		}

		const textStyle = {};
		// Climb up the DOM and do manual checks for whether a certain extension is currently enabled for this node
		while (parentNode) {
			computedState(textStyle, parentNode, this.getTextbox().options?.contentWindow);

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

	getTextboxDOM() {
		debug('getTextboxDOM', this.props.textboxDOM);
		if (this.props.textboxDOM) {
			const textboxDOM = this.props.textboxDOM;
			if (isReactComponentInstance(textboxDOM)) {
				return ReactDOM.findDOMNode(textboxDOM);
			} else if (isElement(textboxDOM)) {
				return textboxDOM;
			} else {
				throw new Error('`textboxDOM` 必须是一个 HTMLElement 或者 React Component 实例');
			}
		}
	}

	getTextbox() {
		const dom = this.getTextboxDOM();
		return dom ? MediumEditor.getEditorFromElement(dom) : null;
	}

	onTextStyleChange(field, value) {
		debug('onTextStyleChange', field, value)
		const medium = this.getTextbox();
		if (!medium) return;

		const textboxDOM = this.getTextboxDOM();
		const selection = medium.options.ownerDocument.getSelection();
		const selectionRange = MediumEditor.selection.getSelectionRange(medium.options.ownerDocument);
		let parentNode = MediumEditor.selection.getSelectedParentElement(selectionRange);

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
					// fix <font color></font>
					medium.options.ownerDocument.execCommand('styleWithCSS', false, true);
					medium.execAction('foreColor', { value });
					medium.options.ownerDocument.execCommand('styleWithCSS', false, false);
					break;

				case 'fontSize':
					medium.execAction('fontSize', { value: 7 });
					if (textboxDOM) {
						const nodes = textboxDOM.querySelectorAll('font[size="7"]');
						for (let node of nodes) {
							node.removeAttribute('size');
							node.style.fontSize = `${value}px`;
						}
						medium.trigger('editableInput', null, textboxDOM);
					}
					break;

				case 'textAlign':
					if (value === 'center') {
						medium.execAction('justifyCenter');
					} else if (value === 'left') {
						medium.execAction('justifyLeft');
					} else if (value === 'right') {
						medium.execAction('justifyRight');
					} else if (value === 'justify') {
						medium.execAction('justifyFull');
					}
					this.checkState();
					medium.trigger('editableInput', null, textboxDOM);
					break;

				case 'lineHeight':
					// 没有选中时
					if (selection.isCollapsed) {
						while (parentNode) {
							if (parentNode.parentNode === textboxDOM) break;
							parentNode = parentNode.parentNode;
						}
					}
					if (!parentNode) break;
					removeStyle(parentNode, 'lineHeight');
					parentNode.style.lineHeight = value;
					medium.trigger('editableInput', null, textboxDOM);
					break;
				case 'paddingTop':
				case 'paddingBottom':
				case 'paddingLeft':
				case 'paddingRight':
					while (parentNode) {
						if (parentNode.parentNode === textboxDOM) break;
						parentNode = parentNode.parentNode;
					}
					if (!parentNode) break;
					removeStyle(parentNode, field);

					parentNode.style[field] = value;
					medium.trigger('editableInput', null, textboxDOM);
					break;
			}
		}
	}

	render() {
		let { fontSize, paddingTop, paddingLeft, lineHeight } = this.state.textStyle;
		if (typeof fontSize === 'string' && fontSize.endsWith('px')) fontSize = parseFloat(fontSize);
		if (typeof paddingTop === 'string' && paddingTop.endsWith('px')) paddingTop = parseFloat(paddingTop);
		if (typeof paddingLeft === 'string' && paddingLeft.endsWith('px')) paddingLeft = parseFloat(paddingLeft);
		if (typeof lineHeight === 'string' && lineHeight.endsWith('px')) lineHeight = (parseFloat(lineHeight) / fontSize).toFixed(1);

		return (
			<div className="coursebox-editor">
				<label htmlFor="font-size-style">文字</label>

				<div id="font-style">
					<InputColor
						className="__font-color"
						value={this.state.textStyle.color}
						onChange={(color) => this.onTextStyleChange('color', color)}
					></InputColor>

					<InputSelect
						className="__font-size"
						value={fontSize}
						options={[12, 13, 14, 16, 18, 20, 28, 36, 48, 72]}
						unit="px"
						onChange={(fontSize) => this.onTextStyleChange('fontSize', fontSize)}
					></InputSelect>

					<FontStyleButtonGroup
						className="__font-style"
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
						className="__font-layout"
						textAlign={this.state.textStyle.textAlign}
						onFontLayoutChange={(textAlign) => this.onTextStyleChange('textAlign', textAlign)}
					></FontLayoutButtonGroup>

					{/* 行高 */}
					{/* <InputNumber
						min={0.8}
						max={5}
						step={0.1}
						unit="倍"
						icon={ImageLineHeight}
						value={lineHeight}
						onChange={(lineHeight) => this.onTextStyleChange('lineHeight', lineHeight)}
					></InputNumber> */}

					{/* <InputSelect
						className="__font-line-height"
						icon={ImageLineHeight}
						value={lineHeight}
						options={[1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.2, 2.4, 2.6, 2.8, 3.0]}
						unit="倍"
						onChange={(lineHeight) => this.onTextStyleChange('lineHeight', lineHeight)}
					></InputSelect> */}

					{/* 上下内边距 */}
					{/* <InputSelect
						className="__font-padding-top-bottom"
						icon={ImagePaddingTopAndBottom}
						value={paddingTop}
						options={[5, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 26, 28, 30]}
						unit="px"
						onChange={(padding) => {
							this.onTextStyleChange('paddingTop', `${padding}px`);
							this.onTextStyleChange('paddingBottom', `${padding}px`);
						}}
					></InputSelect> */}

					{/* 左右内边距 */}
					{/* <InputSelect
						className="__font-padding-left-right"
						icon={ImagePaddingLeftAndRight}
						value={paddingLeft}
						options={[5, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 26, 28, 30]}
						unit="px"
						onChange={(padding) => {
							this.onTextStyleChange('paddingLeft', `${padding}px`);
							this.onTextStyleChange('paddingRight', `${padding}px`);
						}}
					></InputSelect> */}

				</div>

				{/* <label htmlFor="font-opacity-style">不透明度</label>
				<div id="font-opacity-style">

				</div> */}
			</div>
		);
	}
}

export default TextboxEditor;