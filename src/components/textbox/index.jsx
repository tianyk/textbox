import './textbox.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
		this.textboxRef = React.createRef();
		this.onContentChange = this.onContentChange.bind(this);
		this.onSelectionChange = this.onSelectionChange.bind(this);
	}

	componentDidMount() {
		debug('addEventListener selectionchange');
		document.addEventListener('selectionchange', this.onSelectionChange);
	}

	componentWillUnmount() {
		debug('removeEventListener selectionchange')
		document.removeEventListener('selectionchange', this.onSelectionChange);
	}


	onContentChange(evt) {
		this.props.onContentChange && this.props.onContentChange(evt.target.innerHTML);
	}

	onSelectionChange(evt) {
		debug('text', document.getSelection().toString());
		debug('anchorNode', document.getSelection().anchorNode);
		debug('anchorOffset', document.getSelection().anchorOffset);
		debug('focusNode', document.getSelection().focusNode);
		debug('focusOffset', document.getSelection().focusOffset);
		debug('rangeCount', document.getSelection().rangeCount);
	}

	render() {
		const defaultStyle = {
			marign: 0,
			minWidth: '1em',
			minHeight: '1em',
			width: 400,
			height: 400
		};

		return (
			<div className="coursebox-textbox">
				{/* caret-color: red; */}
				<p className="textbox"
					ref={this.textboxRef}
					style={{ ...(this.props.textStyle || {}), ...defaultStyle }}
					contentEditable={this.state.contentEditable}
					suppressContentEditableWarning={true}
					spellCheck={false}
					autoComplete="off"
					autoCorrect="off"
					autoCapitalize="off"
					onBlur={this.onContentChange}
					onKeyUp={this.onContentChange}
					onPaste={this.onContentChange}
					onCopy={this.onContentChange}
					onCut={this.onContentChange}
					onMouseUp={this.onContentChange}
					// dangerouslySetInnerHTML={{ __html: this.state.text }}
				>
					{this.state.text || this.props.text || ''}
				</p>
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
	min: PropTypes.number,
	max: PropTypes.number,
	setp: PropTypes.number,
	value: PropTypes.number
}


export default Textbox;