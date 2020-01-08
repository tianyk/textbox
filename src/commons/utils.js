function isSyntheticEvent(evt) {
	return evt.nativeEvent instanceof Event;
}

//Returns true if it is a DOM node
function isNode(node) {
	return (
		typeof Node === 'object' ? node instanceof Node :
			node && typeof node === 'object' && typeof node.nodeType === 'number' && typeof node.nodeName === 'string'
	);
}

//Returns true if it is a DOM element    
function isElement(element) {
	return (
		typeof HTMLElement === 'object' ? element instanceof HTMLElement : //DOM2
			element && typeof element === 'object' && element !== null && element.nodeType === 1 && typeof element.nodeName === 'string'
	);
}

function isClassComponent(component) {
	return typeof component === 'function' && !!component.prototype.isReactComponent;
}

function isFunctionComponent(component) {
	return typeof component === 'function' && String(component).includes('return React.createElement');
}

function isReactComponent(component) {
	return isClassComponent(component) || isFunctionComponent(component);
}

function isReactComponentInstance(componentInstance) {
	return isReactComponent(componentInstance.constructor);
}

export {
	isNode,
	isElement,
	isSyntheticEvent,
	isReactComponentInstance
};

