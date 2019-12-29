function isSyntheticEvent(evt) {
	return evt?.nativeEvent instanceof Event;
}


export {
	isSyntheticEvent
};

