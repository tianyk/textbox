import { Component } from 'react';

class Textbox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// 隔离循环刷新
			text: props.text,
			contentEditable: 'plaintext-only'
		};

		this.onContentChange = this.onContentChange.bind(this);
	}

	onContentChange(evt) {
		this.props.onContentChange && this.props.onContentChange(evt.target.innerText || evt.target.textContent);
	}

	render() {
		return (
			<div className="rb-textbox" style={{ display: 'inline-block', border: '1px dashed #aaa' }} >
				<p ref="input-text" style={{ ...(this.props.textStyle || {}), margin: 0, minWidth: '1em', minHeight: '1em' }}
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
					onMouseUp={this.onContentChange} >{this.state.text || this.props.text || ''}</p>
			</div>
		)
	}
}

export default Textbox;