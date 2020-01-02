/**
 * 获取 selection 
 * 
 * 会忽略掉开始等于结束的。默认情况下双击两下 rangeCount 会为 1
 *
 * @param {*} [ownerDocument=document]
 * @returns
 */
function getSelection(ownerDocument = document) {
	const selection = ownerDocument.getSelection();
	if (selection.rangeCount > 0 && !selection.isCollapsed) {
		return selection;
	} else {
		return null;
	}
}


/**
 * 获取 range 
 *
 * @param {*} [ownerDocument=document]
 * @returns
 */
function getSelectionRange(ownerDocument = document) {
	const selection = getSelection(ownerDocument);

	if (selection) {
		return selection.getRangeAt(0);
	} else {
		return null;
	}
}

function nextNode(node) {
	if (node.hasChildNodes()) {
		return node.firstChild;
	} else {
		while (node && !node.nextSibling) {
			node = node.parentNode;
		}
		if (!node) {
			return null;
		}
		return node.nextSibling;
	}
}

function getSelectedNodesFromRange(range) {
	var node = range.startContainer;
	var endNode = range.endContainer;

	// Special case for a range that is contained within a single node
	if (node === endNode) {
		return [node];
	}

	// Iterate nodes until we hit the end container
	var rangeNodes = [];
	while (node && node != endNode) {
		rangeNodes.push(node = nextNode(node));
	}

	// Add partially selected nodes at the start of the range
	node = range.startContainer;
	while (node && node != range.commonAncestorContainer) {
		rangeNodes.unshift(node);
		node = node.parentNode;
	}

	return rangeNodes;
}

function rangeSelectsIsSingleNode(range) {
	const startNode = range.startContainer;
	return startNode === range.endContainer &&
		startNode.hasChildNodes() &&
		range.endOffset === range.startOffset + 1;
}

// https://developer.mozilla.org/zh-CN/docs/Web/API/Node
function getSelectedParentElement(range) {
	if (!range) {
		return null;
	}

	// Selection encompasses a single element
	if (rangeSelectsIsSingleNode(range) && range.startContainer.childNodes[range.startOffset].nodeType !== 3) {
		return range.startContainer.childNodes[range.startOffset];
	}

	// Selection range starts inside a text node, so get its parent
	if (range.startContainer.nodeType === 3) {
		return range.startContainer.parentNode;
	}

	// Selection starts inside an element
	return range.startContainer;
}

export {
	getSelection,
	rangeSelectsIsSingleNode,
	getSelectionRange,
	getSelectedNodesFromRange,
	getSelectedParentElement
}