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
	}
};

function computedState(currentState = {}, node, currentWindow = window) {
	for (let [state, config] of Object.entries(BUTTONS)) {
		if (currentState[state]) continue;

		let isMatch = false;
		const tagNames = config.tagNames;
		if (tagNames && tagNames.length > 0) {
			isMatch = tagNames.indexOf(node.nodeName.toLowerCase()) !== -1;
		}

		if (!isMatch && config.style) {
			const styleVals = config.style.value.split('|');
			const computedStyle = currentWindow.getComputedStyle(node, null).getPropertyValue(config.style.prop);

			for (let styleVal of styleVals) {
				isMatch = (computedStyle.indexOf(styleVal) !== -1);
				if (isMatch) break;

				// text-decoration is not inherited by default
				// so if the computed style for text-decoration doesn't match
				// don't write to knownState so we can fallback to other checks
				// if (isMatch || this.style.prop !== 'text-decoration') {
				// 	this.knownState = isMatch;
				// }
			}
		}

		currentState[state] = isMatch;
	}

	return currentState;
}

export {
	computedState
};