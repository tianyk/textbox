import './textbox.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MediumEditor from 'medium-editor';
import { getSelectionRange, getSelectedNodes, rangeSelectsIsSingleNode } from '@commons/selection';
const debug = require('../../commons/debug')('textbox:textbox');


class Textbox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// 隔离循环刷新
			text: props.text,
			contentEditable: true /*'plaintext-only'*/
		};

		// 输入框的引用
		this.editorRef = React.createRef();
		this.handleComposition = this.handleComposition.bind(this);
		this.onContentChange = this.onContentChange.bind(this);
		this.onSelectionChange = this.onSelectionChange.bind(this);
	}

	componentDidMount() {
		debug('componentDidMount');

		this.medium = new MediumEditor(this.editorRef.current, this.props.options);
		this.medium.subscribe('editableInput', evt => {
			if (!this._isComposing) this.onContentChange(this.editorRef.current.innerHTML);
		});

		this.medium.on(this.editorRef.current, 'compositionend', this.handleComposition);
		this.medium.on(this.editorRef.current, 'compositionupdate', this.handleComposition);
		this.medium.on(this.editorRef.current, 'compositionend', this.handleComposition);

		this.attachEventHandlers();
	}

	componentWillUnmount() {
		debug('componentWillUnmount');
		this.medium.destroy();
	}

	componentDidUpdate() {
		debug('componentDidUpdate');

		if (this.props.text !== this.state.text) {
			this.setState({ text: this.props.text }, () => {
				this.medium.restoreSelection();
			});
		}

		this.medium.restoreSelection();
	}


	attachEventHandlers() {
		// MediumEditor custom events for when user beings and ends interaction with a contenteditable and its elements
		this.medium.subscribe('blur', this.handleBlur.bind(this));
		this.medium.subscribe('focus', this.handleFocus.bind(this));

		// Updating the state of the toolbar as things change
		this.medium.subscribe('editableClick', this.handleEditableClick.bind(this));
		this.medium.subscribe('editableKeyup', this.handleEditableKeyup.bind(this));

		// Handle mouseup on document for updating the selection in the toolbar
		this.medium.on(this.medium.options.ownerDocument.documentElement, 'mouseup', this.handleDocumentMouseup.bind(this));
	}


	handleFocus() {
		this.checkSelection();
	}

	handleDocumentMouseup(event) {
		// Do not trigger checkSelection when mouseup fires over the toolbar
		// if (event &&
		// 	event.target &&
		// 	MediumEditor.util.isDescendant(this.getToolbarElement(), event.target)) {
		// 	return false;
		// }
		this.checkSelection();
	}

	handleEditableClick() {
		// Delay the call to checkSelection to handle bug where selection is empty
		// immediately after clicking inside a pre-existing selection
		setTimeout(() => {
			this.checkSelection();
		}, 0);
	}

	isAlreadyApplied(node) {
		var isMatch = false,
			tagNames = this.getTagNames(),
			styleVals,
			computedStyle;

		if (this.knownState === false || this.knownState === true) {
			return this.knownState;
		}

		if (tagNames && tagNames.length > 0) {
			isMatch = tagNames.indexOf(node.nodeName.toLowerCase()) !== -1;
		}

		if (!isMatch && this.style) {
			styleVals = this.style.value.split('|');
			computedStyle = this.window.getComputedStyle(node, null).getPropertyValue(this.style.prop);
			styleVals.forEach(function (val) {
				if (!this.knownState) {
					isMatch = (computedStyle.indexOf(val) !== -1);
					// text-decoration is not inherited by default
					// so if the computed style for text-decoration doesn't match
					// don't write to knownState so we can fallback to other checks
					if (isMatch || this.style.prop !== 'text-decoration') {
						this.knownState = isMatch;
					}
				}
			}, this);
		}

		return isMatch;
	}

	checkSelection() {
		debug('checkSelection');

		const range = getSelectionRange(this.medium.options.ownerDocument);
		if (range) debug('rangeSelectsIsSingleNode', rangeSelectsIsSingleNode(range));

		if (range) {
			getSelection
			debug(getSelectedNodes(this.medium.options.ownerDocument));
		} else {
			debug(document.activeElement);
		}

		// if (this.medium.preventSelectionUpdates) {
		// 	return;
		// }

		// // If no editable has focus OR selection is inside contenteditable = false
		// // hide toolbar
		// if (!this.medium.getFocusedElement() ||
		// 	MediumEditor.selection.selectionInContentEditableFalse(this.medium.options.contentWindow)) {
		// 	return debug('hideToolbar');
		// }

		// // If there's no selection element, selection element doesn't belong to this editor
		// // or toolbar is disabled for this selection element
		// // hide toolbar
		// var selectionElement = MediumEditor.selection.getSelectionElement(this.medium.options.contentWindow);
		// if (!selectionElement ||
		// 	this.medium.elements.indexOf(selectionElement) === -1 ||
		// 	selectionElement.getAttribute('data-disable-toolbar')) {
		// 	return debug('hideToolbar');
		// }

		// // Now we know there's a focused editable with a selection

		// // If the updateOnEmptySelection option is true, show the toolbar
		// if (this.medium.updateOnEmptySelection && this.medium.static) {
		// 	return debug('showAndUpdateToolbar');
		// }

		// // If we don't have a 'valid' selection -> hide toolbar
		// if (!MediumEditor.selection.selectionContainsContent(this.medium.options.ownerDocument) ||
		// 	(this.medium.allowMultiParagraphSelection === false && this.medium.multipleBlockElementsSelected())) {
		// 		return debug('hideToolbar');
		// }

		// debug('showAndUpdateToolbar');
	}

	handleEditableKeyup() {
		this.checkSelection();
	}

	handleFocus() {
		this.checkSelection();
	}

	handleBlur() {
		debug('hideToolbar')
	}

	handleComposition(evt) {
		if (evt.type === 'compositionend') {
			// composition is end
			this._isComposing = false;

			// fixed for Chrome v53+ and detect all Chrome
			// https://chromium.googlesource.com/chromium/src/
			// +/afce9d93e76f2ff81baaa088a4ea25f67d1a76b3%5E%21/
			// if ((evt.target instanceof HTMLInputElement || evt.target.isContentEditable) && !this._isComposing && isChrome) {
			// 	// fire onChange
			// 	// props.onChange(e)
			// 	this.medium.trigger('editableInput', evt, this.editorRef.current);
			// }

			// chrome safari 渲染 compositionend 在input 事件后触发
			this.medium.trigger('editableInput', evt, this.editorRef.current);
		} else {
			// in composition
			this._isComposing = true;
		}
	}

	onContentChange(text) {
		this.props.onContentChange && this.props.onContentChange(text);
	}

	onSelectionChange(evt) {
	}

	render() {
		const defaultStyle = {
			marign: 0,
			minWidth: '1em',
			minHeight: '1em',
			width: 400,
			height: 400
		};

		if (this.medium) {
			this.medium.saveSelection();
		}

		return (
			<div className="coursebox-textbox">
				{this.state.text}
				<div
					className="textbox"
					ref={this.editorRef}
					style={{ ...(this.props.textStyle || {}), ...defaultStyle }}
					dangerouslySetInnerHTML={{ __html: this.state.text }}>
				</div>
			</div>
		)
	}
}

Textbox.defaultProps = {
	min: -Infinity,
	max: Infinity,
	step: 1
}

Textbox.propTypes = {
	onChange: PropTypes.func.isRequired,
	onSelection: PropTypes.fun,
	options: PropTypes.object,
	max: PropTypes.number,
	setp: PropTypes.number,
	value: PropTypes.number
}


export default Textbox;