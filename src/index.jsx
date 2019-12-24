import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Textbox, Editor } from './components';

// console.log(Textbox, Editor)

function App() {
	// 命名参考 ReactNative https://facebook.github.io/react-native/docs/text-style-props
	const [text, setText] = useState('中国Abc');
	const [textStyle, setTextStyle] = useState({
		fontSize: 34,
		color: "#33bb33",

		// 最好使用 b i 标签
		fontWeight: 'normal', /* 400 800 */
		// fontWeight: 'bold', /* 400 800 */
		// fontStyle: 'normal', /* italic */
		// fontStyle: 'italic',
		// textDecoration: 'none', /* underline line-through */
		// textDecoration: 'underline', /* underline line-through */
		// textDecoration: 'line-through', /* underline line-through */
	});

	function onContentChange(val) {
		setText(val);
	}

	function onTextStyleChange(newTextStyle) {
		console.log('\nonTextStyleChange: %o', newTextStyle);
		
		setTextStyle({
			...textStyle,
			...newTextStyle
		});
	}

	return (
		<div>
			<pre>
				{JSON.stringify(textStyle, null, 2)}

				<br />

				{text}
			</pre>

			<Textbox text={text} textStyle={textStyle} onContentChange={onContentChange} />
			<Editor textStyle={textStyle} onTextStyleChange={onTextStyleChange} />
		</div>
	);
}


ReactDOM.render(
	<App />,
	document.getElementById('root')
);