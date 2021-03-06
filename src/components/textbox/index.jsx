import './textbox.less';
import classNames from 'classnames';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MediumEditor from 'medium-editor';

const debug = require('../../commons/debug')('textbox:textbox');

const CourseBoxEditor = MediumEditor.Extension.extend({
	name: 'coursebox-editor',

	getInteractionElements: function () {
		return Array.from(this.base.options.ownerDocument.querySelectorAll('.coursebox-editor'));
	}
});

const DEFAULT_OPTIONS = {
	toolbar: {
		// buttons: ['bold', 'italic', 'underline', 'justifyLeft', 'justifyCenter', 'justifyRight'],
		buttons: ['bold', 'italic', 'underline'],
	},
	extensions: {
		'coursebox-editor': new CourseBoxEditor()
	}
}

class Textbox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: props.text
		};

		// 输入框的引用
		this.editorRef = React.createRef();
		this.handleComposition = this.handleComposition.bind(this);
		this.onContentChange = this.onContentChange.bind(this);
	}

	componentDidMount() {
		debug('componentDidMount');
		const dom = this.geDOM();

		this.medium = new MediumEditor(dom, Object.assign(DEFAULT_OPTIONS, this.props.options));
		// 默认禁止编辑
		this.disableEditing();
		this.medium.subscribe('editableInput', () => {
			if (!this._isComposing) this.onContentChange(dom.innerHTML);
		});
		this.medium.on(dom, 'compositionend', this.handleComposition);
		this.medium.on(dom, 'compositionupdate', this.handleComposition);
		this.medium.on(dom, 'compositionend', this.handleComposition);

		// 双击、单击
		this.medium.on(dom, 'dblclick', () => {
			debug('dblclick');
			this.enableEditing();
			dom.focus();
		});
		this.medium.subscribe('blur', () => {
			debug('blur');
			this.disableEditing();
		});

		this.medium.subscribe('editableChangeStyle', (style) => {
			debug('editableChangeStyle', style);
			this.props.onStyleChange && this.props.onStyleChange({
				...this.props.style,
				...style
			});
		});
	}

	componentWillUnmount() {
		debug('componentWillUnmount');
		this.medium.destroy();
	}

	componentDidUpdate() {
		debug('componentDidUpdate');

		// if (this.props.text !== this.state.text) {
		// 	this.setState({ text: this.props.text }, () => {
		// 		this.medium.restoreSelection();
		// 	});
		// }

		this.medium.restoreSelection();
	}

	geDOM() {
		return ReactDOM.findDOMNode(this);
	}

	disableEditing() {
		debug('disableEditing');
		const dom = this.geDOM();
		dom.setAttribute('contenteditable', false);
	}

	enableEditing() {
		debug('enableEditing');
		const dom = this.geDOM();
		dom.setAttribute('contenteditable', true);
	}

	handleComposition(evt) {
		const dom = ReactDOM.findDOMNode(this);

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
			this.medium.trigger('editableInput', evt, dom);
		} else {
			// in composition
			this._isComposing = true;
		}
	}

	onContentChange(text) {
		this.props.onContentChange && this.props.onContentChange(text);
	}

	render() {
		const className = classNames(
			'coursebox-textbox',
			this.props.className
		);

		const {
			options,
			text,
			tag,
			contentEditable,
			dangerouslySetInnerHTML,
			...props
		} = this.props;
		props.className = className;
		props.dangerouslySetInnerHTML = { __html: this.state.text };

		if (this.medium) {
			this.medium.saveSelection();
		}
		return React.createElement(tag, props);
	}
}

Textbox.defaultProps = {
	tag: 'div',
	style: {
		color: '#000000',
		fontSize: '14px',
		fontStyle: 'normal',
		fontWeight: 'normal',
		textDecoration: 'none',
		lineHeight: '1.2'
	},
	options: {}
}

Textbox.propTypes = {
	onChange: PropTypes.func.isRequired,
	options: PropTypes.object
}


export default Textbox;