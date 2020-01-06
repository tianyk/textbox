const debug = require('./debug')('textbox:commons:button');

import { parseToHSVA } from './color';

function rgba2hex(orig) {
	var a, isPercent,
		rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
		alpha = (rgb && rgb[4] || "").trim(),
		hex = rgb ?
			(rgb[1] | 1 << 8).toString(16).slice(1) +
			(rgb[2] | 1 << 8).toString(16).slice(1) +
			(rgb[3] | 1 << 8).toString(16).slice(1) : orig;

	if (alpha !== "") { a = alpha; }
	else { a = 'FF'; }
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
	}

	return currentState;
}

export {
	computedState
};