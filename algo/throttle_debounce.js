const throttle = (callback, delay) => {
	let isActive = false;

	return () => {
		if (isActive) return

		callback()
		isActive = true

		setTimeout(() => {
			isActive = false
		}, delay)
	}
}
//
// const throttledFn = throttle(() => console.log('aaa', Date.now()), 2000);
//
// setInterval(() => {
// 	throttledFn()
// }, 500)


const debounce = (callback, delay) => {
	let timer = null

	return (...args) => {
		if (timer) {
			clearTimeout(timer)
		}

		timer = setTimeout(() => {
			callback(...args)
		}, delay)
	}
}

// const debouncedFn = debounce((message) => console.log(message), 2000);
//
// setTimeout(() => debouncedFn('Second call'), 1000); // Таймер сброшен
// setTimeout(() => debouncedFn('Third call'), 3000); // Вызывается только "Third call" через 2000 мс после последнего вызова
