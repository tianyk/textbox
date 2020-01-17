import camelCase from 'camelcase';
const debug = require('./debug')('textbox:commons:computed_state');

function rgba2hex(orig) {
	let a = '',
		rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
		alpha = (rgb && rgb[4] || "").trim(),
		hex = rgb ?
			(rgb[1] | 1 << 8).toString(16).slice(1) +
			(rgb[2] | 1 << 8).toString(16).slice(1) +
			(rgb[3] | 1 << 8).toString(16).slice(1) : orig;

	if (alpha !== '') {
		a = parseInt(255 * parseFloat(alpha)).toString(16);
	}
	hex = hex + a;

	return `#${hex}`;
}


function getStyle(node, styleProp, currentWindow = window) {
	const nodeName = node.nodeName.toLowerCase();
	const computedStyle = currentWindow.getComputedStyle(node, null);

	let styleValue;
	switch (styleProp) {
		case 'font-size':
			styleValue = computedStyle.getPropertyValue('font-size');
			break;

		case 'color':
			if (nodeName === 'font' && node.hasAttribute('color')) {
				styleValue = node.getAttribute('color');
			} else {
				styleValue = computedStyle.getPropertyValue('color');
			}
			if (styleValue.startsWith('rgb')) { styleValue = rgba2hex(styleValue); }
			break;

		case 'font-weight':
			if (nodeName === 'b' || nodeName === 'strong') {
				styleValue = 'bold';
			} else {
				styleValue = computedStyle.getPropertyValue('font-weight');
			}
			break;

		case 'text-decoration':
			let textDecoration = 'none';
			if (nodeName === 'u') {
				textDecoration = 'underline';
			} else if (nodeName === 'strike' || nodeName === 'del' || nodeName === 's') {
				textDecoration = 'line-through';
			} else {
				// getPropertyValue text-decoration 不会继承 获取的不是实时样式
				textDecoration = computedStyle.getPropertyValue('text-decoration');
				if (textDecoration.split(' ').length > 0) textDecoration = textDecoration.split(' ')[0];
			}

			if (textDecoration !== 'none') styleValue = textDecoration;
			break;

		case 'font-style':
			let fontStyle = 'normal';
			if (nodeName === 'i' || nodeName === 'em') {
				fontStyle = 'italic';
			} else {
				fontStyle = computedStyle.getPropertyValue('font-style');
			}
			styleValue = fontStyle;
			break;

		case 'text-align':
			styleValue = computedStyle.getPropertyValue('text-align');
			break;

		case 'line-height':
			let _fontSize = computedStyle.getPropertyValue('font-size');
			let _lineHeight = computedStyle.getPropertyValue('line-height');
			styleValue = (parseFloat(_lineHeight) / parseFloat(_fontSize)).toFixed(1);
			break;

		case 'padding-top':
			styleValue = computedStyle.getPropertyValue('padding-top');
			break;

		case 'padding-left':
			styleValue = computedStyle.getPropertyValue('padding-left');
			break;

		default:
			styleValue = computedStyle.getPropertyValue(styleProp);
	}

	debug(nodeName, styleProp, styleValue)
	return styleValue;
}

const STYLE_PROPS = [
	'font-size',
	'color',
	'font-weight',
	'text-decoration',
	'font-style',
];

function computedState(currentState = {}, node, currentWindow = window) {
	for (let styleProp of STYLE_PROPS) {
		// 设置过就不在设置
		if (typeof currentState[camelCase(styleProp)] !== 'undefined') continue;

		currentState[camelCase(styleProp)] = getStyle(node, styleProp, currentWindow);
	}

	debug('currentState: %j', currentState);
	return currentState;
}

export {
	getStyle,
	computedState
};