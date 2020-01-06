import './textbox.less';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MediumEditor from 'medium-editor';


const debug = require('../../commons/debug')('textbox:textbox');

const DEFAULT_OPTIONS = {
	toolbar: {
		buttons: ['bold', 'italic', 'underline', 'fontsize'],
	}
}

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
	}

	componentDidMount() {
		debug('componentDidMount');
		const dom = ReactDOM.findDOMNode(this);

		this.medium = new MediumEditor(dom, Object.assign(DEFAULT_OPTIONS, this.props.options));
		this.medium.subscribe('editableInput', () => {
			if (!this._isComposing) this.onContentChange(dom.innerHTML);
		});

		this.medium.on(dom, 'compositionend', this.handleComposition);
		this.medium.on(dom, 'compositionupdate', this.handleComposition);
		this.medium.on(dom, 'compositionend', this.handleComposition);

		this.props.onInit();
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
		const {
			options,
			text,
			tag,
			contentEditable,
			dangerouslySetInnerHTML,
			...props
		} = this.props;
		props.dangerouslySetInnerHTML = { __html: this.state.text };

		if (this.medium) {
			this.medium.saveSelection();
		}

		return React.createElement(tag, props);
	}
}

Textbox.defaultProps = {
	tag: 'div',
	options: {}
}

Textbox.propTypes = {
	onChange: PropTypes.func.isRequired,
	onSelection: PropTypes.fun,
	options: PropTypes.object,
	max: PropTypes.number,
	setp: PropTypes.number,
	options: PropTypes.object
}


export default Textbox;