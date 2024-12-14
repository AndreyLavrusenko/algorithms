const deepEqual = (a, b) => {
	if (typeof a !== typeof b) return false;

	if (typeof a !== "object" || a === null || b === null) {
		return a === b
	}

	if (Object.keys(a).length !== Object.keys(b).length) return false

	for (const key of Object.keys(a)) {
		if (!deepEqual(a[key], b[key])) return false
	}

	return true
}

const source = {a: 1, b: {f: 4, c: 1, g: {l: 4}}}
const test1 = {a: 1, b: {c: 1, f: 5, g: {l: 5}}}
const source2 = {a: 1, b: {c: 1}}
const test2 = {a: 1, b: {c: 2}}
console.log(deepEqual(source1, test1))