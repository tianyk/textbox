import { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Textbox, Editor } from './components';

function App() {
	// 命名参考 ReactNative https://facebook.github.io/react-native/docs/text-style-props
	const [text, setText] = useState('<p>中国<font color="#ffeedd" size="5">A</font>bc</p>');

	const [editor, setEditor] = useState(null);
	const editorRef = useRef(null);

	function onContentChange(val) {
		setText(val);
	}

	function onInit() {
		setEditor(editorRef);
	}

	return (
		<div>
			<textarea value={text} onChange={(evt) => onContentChange(evt.target.value)}>
			</textarea>

			<div>
				<Editor editorRef={editor} />
			</div>

			<div>
				<Textbox ref={editorRef} className="textbox" style={{ border: '1px dashed #aaa', lineHeight: '1.4' }} text={text} onInit={onInit} onContentChange={onContentChange} />
			</div>

		</div>
	);
}


ReactDOM.render(
	<App />,
	document.getElementById('root')
);