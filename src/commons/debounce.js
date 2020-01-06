/**
 * 防抖函数
 * 
 * 主要特征: 
 * 1. 延迟执行
 * 2. 如果等待时间内再次调用，等待的函数将取消执行
 * 
 * 如果一直重复调用并且间隔小于`delay`那么函数将永远不会执行
 * 
 * @param [function] func - 
 * @param [number] delay - 延迟执行时间
 **/
function debounce(func, delay) {
	let timer;
	return function (...args) {
		clearTimeout(timer);
		const ctx = this;
		timer = setTimeout(() => {
			func.apply(ctx, args);
		}, delay);
	}
}

export default debounce;