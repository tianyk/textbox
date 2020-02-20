/**
 * 节流函数
 *
 * 主要特征:
 * 1. 频繁执行是固定间隔调用
 *
 **/
function throttle(func, threshold) {
	let start = Date.now(), timer;

	return function (...args) {
		const ctx = this, curr = Date.now();

		clearTimeout(timer);
		if (curr - start >= threshold) {
			func.apply(ctx, args);
			start = curr;
		} else {
			const timeout = start + threshold - curr;
			timer = setTimeout(() => {
				func.apply(ctx, args);
				start = curr;
			}, timeout);
		}
	};
}

export default throttle;