const cashMachine = (sum, limit) => {
	if (sum === 0) {
		throw new Error('Не введено никакое значение')
	}

	const result = {}

	const denominations = 	Object.keys(limit).map(Number).sort((a,b) => b - a)

	for (const denom of denominations) {
		let count = Math.floor(sum / denom)

		// Если больше, берем только доступные
		if (count > limit[denom]) {
			count = limit[denom]
		}

		if (!count) continue

		sum -= denom * count
		result[denom] = count
		limit[denom] = limit[denom] - count
	}

	if (sum > 0) {
		throw new Error('Сдачи не нашлось')
	}

	return result
}

const limit = {
	5000: 5,
	100: 9,
	1000: 6,
	500: 3,
	2000: 3,
	50: 1
}

console.log(cashMachine(15600, limit)) // {5000: 3, 500: 1 100: 1} + мутация limits
console.log(cashMachine(60, limit)) // {5000: 3, 500: 1 100: 1} + мутация limits