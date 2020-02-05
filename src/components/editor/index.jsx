import './editor.less';

import { Component } from 'react';
import classNames from 'classnames';
import camelCase from 'camelcase';
import InputSelect from '../input-select';
import ReactDOM from 'react-dom';
import InputColor from '../input-color';
import MediumEditor from 'medium-editor';
import FontStyleButtonGroup from '../font-style-button-group';
import FontLayoutButtonGroup from '../font-layout-button-group';
import ImageLineHeight from '@assets/images/行间距_正常@2x.png';
import ImageLineHeightDisabled from '@assets/images/行间距_不可点@2x.png';
import ImagePaddingLeftAndRight from '@assets/images/左右边距_正常@2x.png';
import ImagePaddingLeftAndRightDisabled from '@assets/images/左右边距_不可点@2x.png';
import ImagePaddingTopAndBottom from '@assets/images/上下边距_正常@2x.png';
import ImagePaddingTopAndBottomDisabled from '@assets/images/上下边距_不可点@2x.png';
import { computedState, getStyle } from '@commons/computed_state';
import throttle from '@commons/throttle';
import { isReactComponentInstance, isElement } from '@commons/utils';

const debug = require('@commons/debug')('textbox:editor');


class TextboxEditor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			textStyle: {},
			toolbarState: 'hide',
			editState: 'blur' // blur 未选中 focus 选中
		}
		this.onTextStyleChange = this.onTextStyleChange.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.hideToolbar = this.hideToolbar.bind(this);
		this.showToolbar = this.showToolbar.bind(this);
		this.throttleCheckState = throttle(this.checkState, 300).bind(this);
	}

	componentDidMount() {
		if (this.getTextboxDOM() && !this.attachedEvent) {
			// fix: 处理点击后才出现editor 问题
			if (this.getTextboxDOM().getAttribute('data-medium-focused')) {
				this.handleFocus();
			}
			return this.attachEventHandlers();
		}

		// 循环检测 current 是否初始化完成
		clearInterval(this.__CHECK_TEXTBOX_MOUNT_TIMER);
		this.__CHECK_TEXTBOX_MOUNT_TIMER = setInterval(() => {
			const dom = this.getTextboxDOM();
			if (dom) {
				clearInterval(this.__CHECK_TEXTBOX_MOUNT_TIMER);
				this.attachEventHandlers();
			}
		}, 100);
	}

	componentWillUnmount() {
		debug('componentWillUnmount');
		this.detachEventHandlers();
	}

	componentDidUpdate() {
		debug('componentDidUpdate');
		if (this.getTextbox() && !this.attachedEvent) this.attachEventHandlers();
	}

	attachEventHandlers() {
		if (!this.attachedEvent) {
			debug('attachEventHandlers');
			const textbox = this.getTextbox();
			this.attachedEvent = true;

			// MediumEditor custom events for when user beings and ends interaction with a contenteditable and its elements
			textbox.subscribe('blur', this.handleBlur);
			textbox.subscribe('focus', this.handleFocus);
			textbox.subscribe('positionToolbar', this.throttleCheckState);
			textbox.subscribe('editableInput', this.throttleCheckState);
			textbox.subscribe('hideToolbar', this.hideToolbar);
			textbox.subscribe('showToolbar', this.showToolbar);

			// Updating the state of the toolbar as things change 
			textbox.subscribe('editableKeyup', this.throttleCheckState);
		}
	}

	detachEventHandlers() {
		if (this.attachedEvent) {
			debug('detachEventHandlers');
			const textbox = this.getTextbox();
			this.attachedEvent = false;

			textbox.unsubscribe('blur', this.handleBlur);
			textbox.unsubscribe('focus', this.handleFocus);
			textbox.unsubscribe('positionToolbar', this.throttleCheckState);
			textbox.unsubscribe('editableInput', this.throttleCheckState);
			textbox.unsubscribe('hideToolbar', this.hideToolbar);
			textbox.unsubscribe('showToolbar', this.showToolbar);

			// Updating the state of the toolbar as things change
			textbox.unsubscribe('editableKeyup', this.throttleCheckState);
		}
	}

	handleFocus() {
		debug('handleFocus');

		this.setState({
			editState: 'focus'
		});
		this.throttleCheckState();
	}

	handleBlur() {
		debug('handleBlur');

		this.setState({
			editState: 'blur',
			textStyle: {},
		});
	}

	showToolbar() {
		this.setState({
			toolbarState: 'show'
		})
	}

	hideToolbar() {
		this.setState({
			toolbarState: 'hide'
		})
	}

	checkState() {
		debug('checkState');
		const globalStyle = this.getTextboxDOMStyle('line-height', 'padding-top', 'padding-left', 'text-align', 'font-style', 'font-weight', 'text-decoration', 'font-size', 'color');
		debug('globalStyle: %o', globalStyle);
		const selectionRange = MediumEditor.selection.getSelectionRange(this.getTextbox().options?.ownerDocument);
		debug('selectionRange', selectionRange);
		// 未选择
		if (!selectionRange || selectionRange.collapsed) {
			this.setState({
				textStyle: globalStyle
			});
			return;
		}

		// 选择元素是编辑器
		let parentNode = MediumEditor.selection.getSelectedParentElement(selectionRange);
		// Make sure the selection parent isn't outside of the contenteditable
		if (!this.getTextbox().elements.some(function (element) {
			return MediumEditor.util.isDescendant(element, parentNode, true);
		})) {
			this.setState({
				textStyle: globalStyle
			});
			return;
		}


		// 选择的是node
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
		debug('getTextboxDOM', this.props.textboxDOM, this.props.textboxDOMRef);
		const textboxDOM = this.props?.textboxDOM || this.props?.textboxDOMRef?.current;

		if (textboxDOM) {
			if (isReactComponentInstance(textboxDOM)) {
				return ReactDOM.findDOMNode(textboxDOM);
			} else if (isElement(textboxDOM)) {
				return textboxDOM;
			} else {
				throw new Error('`textboxDOM` 必须是一个 HTMLElement 或者 React Component 实例');
			}
		}
	}

	getTextboxDOMStyle(...properties) {
		debug('getTextboxDOMStyle');
		const dom = this.getTextboxDOM();
		if (!dom) return null;

		const style = {};
		if (properties.length > 0) {
			for (let property of properties) {
				const styleValue = getStyle(dom, property, this.getTextbox().options?.contentWindow);
				if (styleValue) style[camelCase(property)] = styleValue;
			}
		} else {
			const computedStyle = this.getTextbox().options?.contentWindow.getComputedStyle(dom, null);
			for (let i = 0; i < computedStyle.length; i++) {
				style[computedStyle[i]] = computedStyle.getPropertyValue(computedStyle[i]);
			}
		}

		return style;
	}

	triggerGlobalStyleChange(style) {
		const medium = this.getTextbox();
		if (!medium) return;
		const textboxDOM = this.getTextboxDOM();
		// const globalStyle = this.getTextboxDOMStyle('line-height', 'padding-top', 'padding-left', 'text-align', 'font-style', 'font-weight', 'text-decoration', 'font-size', 'color')
		medium.trigger('editableChangeStyle', style, textboxDOM);
	}

	getTextbox() {
		const dom = this.getTextboxDOM();
		return dom ? MediumEditor.getEditorFromElement(dom) : null;
	}

	onTextStyleChange(field, value) {
		debug('onTextStyleChange', field, value)
		if (this.state.editState === 'blur') return;

		const medium = this.getTextbox();
		if (!medium) return;
		const textboxDOM = this.getTextboxDOM();

		switch (field) {
			case 'fontWeight':
				if (this.state.toolbarState === 'show') {
					medium.execAction('bold');
				} else {
					medium.trigger('editableChangeStyle', { fontWeight: value }, textboxDOM);
				}
				break;

			case 'fontStyle':
				if (this.state.toolbarState === 'show') {
					medium.execAction('italic');
				} else {
					medium.trigger('editableChangeStyle', { fontStyle: value }, textboxDOM);
				}
				break;

			case 'textDecoration':
				if (this.state.toolbarState === 'show') {
					medium.execAction('underline');
				} else {
					medium.trigger('editableChangeStyle', { textDecoration: value }, textboxDOM);
				}
				break;

			case 'color':
				if (this.state.toolbarState === 'show') {
					// fix <font color></font>
					medium.options.ownerDocument.execCommand('styleWithCSS', false, true);
					medium.execAction('foreColor', { value });
					medium.options.ownerDocument.execCommand('styleWithCSS', false, false);
				} else {
					medium.trigger('editableChangeStyle', { color: value }, textboxDOM);
				}
				break;

			case 'fontSize':
				if (this.state.toolbarState === 'show') {
					medium.execAction('fontSize', { value: 7 });
					if (textboxDOM) {
						const nodes = textboxDOM.querySelectorAll('font[size="7"]');
						for (let node of nodes) {
							node.removeAttribute('size');
							node.style.fontSize = `${value}px`;
						}
					}
				} else {
					medium.trigger('editableChangeStyle', { fontSize: `${value}px` }, textboxDOM);
				}

				break;

			case 'textAlign':
				medium.trigger('editableChangeStyle', { textAlign: value }, textboxDOM);
				break;

			case 'lineHeight':
				medium.trigger('editableChangeStyle', { lineHeight: value }, textboxDOM);
				break;

			case 'paddingTop':
			case 'paddingBottom':
			case 'paddingLeft':
			case 'paddingRight':
				if (field === 'paddingTop' || field === 'paddingBottom') {
					medium.trigger('editableChangeStyle', { paddingTop: value, paddingBottom: value }, textboxDOM);
				} else if (field === 'paddingLeft' || field === 'paddingRight') {
					medium.trigger('editableChangeStyle', { paddingLeft: value, paddingRight: value }, textboxDOM);
				}
				break;
		}

		medium.trigger('editableInput', null, textboxDOM);
		this.throttleCheckState();
	}

	render() {
		const className = classNames('coursebox-editor', this.props.className);
		let { fontSize, paddingTop, paddingLeft, lineHeight } = this.state.textStyle;
		if (typeof fontSize === 'string' && fontSize.endsWith('px')) fontSize = parseFloat(fontSize);
		if (typeof paddingTop === 'string' && paddingTop.endsWith('px')) paddingTop = parseFloat(paddingTop);
		if (typeof paddingLeft === 'string' && paddingLeft.endsWith('px')) paddingLeft = parseFloat(paddingLeft);
		if (typeof lineHeight === 'string' && lineHeight.endsWith('px')) lineHeight = (parseFloat(lineHeight) / fontSize).toFixed(1);

		return (
			<div className={className}>
				<label htmlFor="font-size-style">文字</label>

				<div id="font-style">
					<InputColor
						disabled={this.state.editState !== 'focus'}
						className="__font-color"
						value={this.state.textStyle.color}
						onChange={(color) => this.onTextStyleChange('color', color)}
					></InputColor>

					<InputSelect
						disabled={this.state.editState !== 'focus'}
						className="__font-size"
						value={fontSize}
						options={[12, 13, 14, 16, 18, 20, 24, 28, 32, 36, 48, 72]}
						unit="px"
						onChange={(fontSize) => this.onTextStyleChange('fontSize', fontSize)}
					></InputSelect>

					<FontStyleButtonGroup
						disabled={this.state.editState !== 'focus'}
						className="__font-style"
						fontWeight={this.state.textStyle?.fontWeight}
						fontStyle={this.state.textStyle.fontStyle}
						textDecoration={this.state.textStyle.textDecoration}
						onFontStyleChange={(field, val) => this.onTextStyleChange(field, val)}
					></FontStyleButtonGroup>
				</div>

				<label htmlFor="font-layout-style">布局</label>
				<div id="font-layout-style">
					{/* 对齐方式 */}
					<span>{this.state.editState !== 'focus' || this.state.toolbarState === 'show'}</span>
					<FontLayoutButtonGroup
						disabled={this.state.editState !== 'focus' || this.state.toolbarState === 'show'}
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

					<InputSelect
						disabled={this.state.editState !== 'focus' || this.state.toolbarState === 'show'}
						className="__font-line-height"
						icon={ImageLineHeight}
						disabledIcon={ImageLineHeightDisabled}
						value={lineHeight}
						options={[1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.2, 2.4, 2.6, 2.8, 3.0]}
						unit="倍"
						onChange={(lineHeight) => this.onTextStyleChange('lineHeight', lineHeight)}
					></InputSelect>

					{/* 上下内边距 */}
					<InputSelect
						disabled={this.state.editState !== 'focus' || this.state.toolbarState === 'show'}
						className="__font-padding-top-bottom"
						icon={ImagePaddingTopAndBottom}
						disabledIcon={ImagePaddingTopAndBottomDisabled}
						value={paddingTop}
						options={[0, 5, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 26, 28, 30]}
						unit="px"
						onChange={(padding) => {
							this.onTextStyleChange('paddingTop', `${padding}px`);
							// this.onTextStyleChange('paddingBottom', `${padding}px`);
						}}
					></InputSelect>

					{/* 左右内边距 */}
					<InputSelect
						disabled={this.state.editState !== 'focus' || this.state.toolbarState === 'show'}
						className="__font-padding-left-right"
						icon={ImagePaddingLeftAndRight}
						disabledIcon={ImagePaddingLeftAndRightDisabled}
						value={paddingLeft}
						options={[0, 5, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 26, 28, 30]}
						unit="px"
						onChange={(padding) => {
							// this.onTextStyleChange('paddingLeft', `${padding}px`);
							this.onTextStyleChange('paddingRight', `${padding}px`);
						}}
					></InputSelect>

				</div>

				{/* <label htmlFor="font-opacity-style">不透明度</label>
				<div id="font-opacity-style">

				</div> */}
			</div>
		);
	}
}

export default TextboxEditor;