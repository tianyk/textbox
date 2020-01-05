const debug = require('./debug')('textbox:commons:button');

const BUTTONS = {
	'bold': {
		name: 'bold',
		action: 'bold',
		aria: 'bold',
		tagNames: ['b', 'strong'],
		style: {
			prop: 'font-weight',
			value: '700|bold'
		},
		useQueryState: true,
	},
	'italic': {
		name: 'italic',
		action: 'italic',
		aria: 'italic',
		tagNames: ['i', 'em'],
		style: {
			prop: 'font-style',
			value: 'italic'
		},
		useQueryState: true,
	},
	'underline': {
		name: 'underline',
		action: 'underline',
		aria: 'underline',
		tagNames: ['u'],
		style: {
			prop: 'text-decoration',
			value: 'underline'
		},
		useQueryState: true,
	},
	'strikethrough': {
		name: 'strikethrough',
		action: 'strikethrough',
		aria: 'strike through',
		tagNames: ['strike'],
		style: {
			prop: 'text-decoration',
			value: 'line-through'
		},
		useQueryState: true,
	},
	'superscript': {
		name: 'superscript',
		action: 'superscript',
		aria: 'superscript',
		tagNames: ['sup'],
		/* firefox doesn't behave the way we want it to, so we CAN'T use queryCommandState for superscript
		   https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate */
		// useQueryState: true
	},
	'subscript': {
		name: 'subscript',
		action: 'subscript',
		aria: 'subscript',
		tagNames: ['sub'],
		/* firefox doesn't behave the way we want it to, so we CAN'T use queryCommandState for subscript
		   https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate */
		// useQueryState: true
	},
	'image': {
		name: 'image',
		action: 'image',
		aria: 'image',
		tagNames: ['img'],
	},
	'html': {
		name: 'html',
		action: 'html',
		aria: 'evaluate html',
		tagNames: ['iframe', 'object'],
	},
	'orderedlist': {
		name: 'orderedlist',
		action: 'insertorderedlist',
		aria: 'ordered list',
		tagNames: ['ol'],
		useQueryState: true,
	},
	'unorderedlist': {
		name: 'unorderedlist',
		action: 'insertunorderedlist',
		aria: 'unordered list',
		tagNames: ['ul'],
		useQueryState: true,
	},
	'indent': {
		name: 'indent',
		action: 'indent',
		aria: 'indent',
		tagNames: [],
	},
	'outdent': {
		name: 'outdent',
		action: 'outdent',
		aria: 'outdent',
		tagNames: [],
	},
	'justifyCenter': {
		name: 'justifyCenter',
		action: 'justifyCenter',
		aria: 'center justify',
		tagNames: [],
		style: {
			prop: 'text-align',
			value: 'center'
		},
	},
	'justifyFull': {
		name: 'justifyFull',
		action: 'justifyFull',
		aria: 'full justify',
		tagNames: [],
		style: {
			prop: 'text-align',
			value: 'justify'
		},
	},
	'justifyLeft': {
		name: 'justifyLeft',
		action: 'justifyLeft',
		aria: 'left justify',
		tagNames: [],
		style: {
			prop: 'text-align',
			value: 'left'
		},
	},
	'justifyRight': {
		name: 'justifyRight',
		action: 'justifyRight',
		aria: 'right justify',
		tagNames: [],
		style: {
			prop: 'text-align',
			value: 'right'
		},
	},
	// Known inline elements that are not removed, or not removed consistantly across browsers:
	// <span>, <label>, <br>
	'removeFormat': {
		name: 'removeFormat',
		aria: 'remove formatting',
		action: 'removeFormat',
	},

	/***** Buttons for appending block elements (append-<element> action) *****/

	'quote': {
		name: 'quote',
		action: 'append-blockquote',
		aria: 'blockquote',
		tagNames: ['blockquote'],
	},
	'pre': {
		name: 'pre',
		action: 'append-pre',
		aria: 'preformatted text',
		tagNames: ['pre'],
	},
	'h1': {
		name: 'h1',
		action: 'append-h1',
		aria: 'header type one',
		tagNames: ['h1'],
	},
	'h2': {
		name: 'h2',
		action: 'append-h2',
		aria: 'header type two',
		tagNames: ['h2'],
	},
	'h3': {
		name: 'h3',
		action: 'append-h3',
		aria: 'header type three',
		tagNames: ['h3'],
	},
	'h4': {
		name: 'h4',
		action: 'append-h4',
		aria: 'header type four',
		tagNames: ['h4'],
	},
	'h5': {
		name: 'h5',
		action: 'append-h5',
		aria: 'header type five',
		tagNames: ['h5'],
	},
	'h6': {
		name: 'h6',
		action: 'append-h6',
		aria: 'header type six',
		tagNames: ['h6'],
	},
	'color': {
		name: 'color',
		action: '',
		aria: 'font color',
		tagNames: ['font'],
		style: {
			prop: 'color',
			value: 'right'
		},
	}
};


// function computedState(currentState = {}, node, currentWindow = window) {
// 	for (let [state, config] of Object.entries(BUTTONS)) {
// 		if (currentState[state]) continue;

// 		let isMatch = false;
// 		const tagNames = config.tagNames;
// 		if (tagNames && tagNames.length > 0) {
// 			isMatch = tagNames.indexOf(node.nodeName.toLowerCase()) !== -1;
// 		}

// 		if (!isMatch && config.style) {
// 			const styleVals = config.style.value.split('|');
// 			const computedStyle = currentWindow.getComputedStyle(node, null).getPropertyValue(config.style.prop);

// 			for (let styleVal of styleVals) {
// 				isMatch = (computedStyle.indexOf(styleVal) !== -1);
// 				if (isMatch) break;

// 				// text-decoration is not inherited by default
// 				// so if the computed style for text-decoration doesn't match
// 				// don't write to knownState so we can fallback to other checks
// 				// if (isMatch || this.style.prop !== 'text-decoration') {
// 				// 	this.knownState = isMatch;
// 				// }
// 			}
// 		}

// 		currentState[state] = isMatch;
// 	}

// 	return currentState;
// }

function rgba2hex(orig) {
    var a, isPercent,
    rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
    alpha = (rgb && rgb[4] || "").trim(),
    hex = rgb ?
    (rgb[1] | 1 << 8).toString(16).slice(1) +
    (rgb[2] | 1 << 8).toString(16).slice(1) +
    (rgb[3] | 1 << 8).toString(16).slice(1) : orig;
  
    if (alpha !== "") { a = alpha; }
    else { a = '01'; }
    hex = hex + a;
  
    return `#${hex}`;
}

const STYLE_PROPS = [
	'fontSize',
	'color',
	'fontWeight',
	'textDecoration',
	'fontStyle',
	'textAlign',
	'lineHeight',
	'paddingTop',
	'paddingLeft'
]
function computedState(currentState = {}, node, currentWindow = window) {
	const nodeName = node.nodeName.toLowerCase();
	const computedStyle = currentWindow.getComputedStyle(node, null);
	debug('computedState', nodeName);
	for (let styleProp of STYLE_PROPS) {
		// 设置过就不在设置
		if (typeof currentState[styleProp] !== 'undefined' && styleProp !== 'text-decoration') continue;

		switch (styleProp) {
			case 'fontSize':
				let fontSize = '14px';
				// if (nodeName === 'font' && node.hasAttribute('size')) {
				// 	fontSize = node.getAttribute('size');
				// } else {
					fontSize = computedStyle.getPropertyValue('font-size');
				// }
				currentState[styleProp] = fontSize;
				break;

			case 'color':
				let color = '#000';
				if (nodeName === 'font' && node.hasAttribute('color')) {
					color = node.getAttribute('color');
				} else {
					color = computedStyle.getPropertyValue('color');
					if (color.startsWith('rgb')) color = rgba2hex(color);
				}
				currentState[styleProp] = color;
				break;

			case 'fontWeight':
				let fontWeight = 'normal';
				if (nodeName === 'b' || nodeName === 'strong') {
					fontWeight = 'bold';
				} else {
					fontWeight = computedStyle.getPropertyValue('font-weight');
				}
				currentState[styleProp] = fontWeight;
				break;

			case 'textDecoration':
				let textDecoration = 'none';
				if (nodeName === 'i' || nodeName === 'em') {
					textDecoration = 'italic';
				} else if (nodeName === 'u') {
					textDecoration = 'underline';
				} else if (nodeName === 'strike' || nodeName === 'del' || nodeName === 's') {
					textDecoration = 'line-through';
				} else {
					textDecoration = computedStyle.getPropertyValue('text-decoration');
					if (textDecoration.split(' ').length > 0) textDecoration = textDecoration.split(' ')[0];
				}
				currentState[styleProp] = textDecoration;
				break;

			case 'fontStyle':
				let fontStyle = 'normal';
				if (nodeName === 'i' || nodeName === 'em') {
					fontStyle = 'italic';
				} else {
					fontStyle = computedStyle.getPropertyValue('font-style');
				}
				currentState[styleProp] = fontStyle;
				break;

			case 'textAlign':
				let textAlign = computedStyle.getPropertyValue('text-align');
				currentState[styleProp] = textAlign;
				break;

			case 'lineHeight':
				let lineHeight = computedStyle.getPropertyValue('line-height');
				currentState[styleProp] = lineHeight;
				break;

			case 'paddingTop':
				let paddingTop = computedStyle.getPropertyValue('padding-top');
				currentState[styleProp] = paddingTop;
				break;

			case 'paddingLeft':
				let paddingLeft = computedStyle.getPropertyValue('padding-left');
				currentState[styleProp] = paddingLeft;
				break;
		}

		debug('currentState: %j', currentState);
		// if (currentState[state]) continue;

		// let isMatch = false;
		// const tagNames = config.tagNames;
		// if (tagNames && tagNames.length > 0) {
		// 	isMatch = tagNames.indexOf(node.nodeName.toLowerCase()) !== -1;
		// }

		// if (!isMatch && config.style) {
		// 	const styleVals = config.style.value.split('|');
		// 	const computedStyle = currentWindow.getComputedStyle(node, null).getPropertyValue(config.style.prop);

		// 	for (let styleVal of styleVals) {
		// 		isMatch = (computedStyle.indexOf(styleVal) !== -1);
		// 		if (isMatch) break;

		// 		// text-decoration is not inherited by default
		// 		// so if the computed style for text-decoration doesn't match
		// 		// don't write to knownState so we can fallback to other checks
		// 		// if (isMatch || this.style.prop !== 'text-decoration') {
		// 		// 	this.knownState = isMatch;
		// 		// }
		// 	}
		// }

		// currentState[state] = isMatch;
	}

	return currentState;
}

export {
	computedState
};