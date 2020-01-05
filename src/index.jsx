import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Textbox, Editor } from './components';

// console.log(Textbox, Editor)

function App() {
	// 命名参考 ReactNative https://facebook.github.io/react-native/docs/text-style-props
	const [buttonState, setButtonState] = useState({});
	const [text, setText] = useState('<p>中国Abc</p>');
	const [textStyle, setTextStyle] = useState({
		fontSize: 34,
		color: "#33bb33",

		// 最好使用 b i 标签
		fontWeight: 'normal', /* 400 800 */
		lineHeight: 1.4,
		// fontWeight: 'bold', /* 400 800 */
		// fontStyle: 'normal', /* italic */
		// fontStyle: 'italic',
		// textDecoration: 'none', /* underline line-through */
		// textDecoration: 'underline', /* underline line-through */
		// textDecoration: 'line-through', /* underline line-through */
	});


	window.setText = setText;

	function onContentChange(val) {
		setText(val);
	}

	function onTextStyleChange(newTextStyle) {
		console.log('\nonTextStyleChange: %o', newTextStyle);

		setTextStyle(prevTextStyle => Object.assign({
			...prevTextStyle,
			...newTextStyle
		}));
	}

	function onStateChange(newState) {
		setButtonState(prevState => Object.assign({
			...prevState,
			...newState
		}));
	}

	return (
		<div>
			<pre className="code">
				{JSON.stringify(textStyle, null, 2)}
			</pre>

			<textarea value={text} onChange={(evt) => onContentChange(evt.target.value)}>
			</textarea>

			<div style={{ display: 'inline-block' }}>
				<Textbox text={text} onStateChange={onStateChange} onContentChange={onContentChange} />
			</div>

			<div style={{ display: 'inline-block' }}>
				<Editor textStyle={textStyle} onTextStyleChange={onTextStyleChange} />
			</div>

		</div>
	);
}


ReactDOM.render(
	<App />,
	document.getElementById('root')
);