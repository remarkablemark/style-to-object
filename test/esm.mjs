import assert from 'assert'
import StyleToObject from '../index.mjs'

describe('it works with ESM', () => {
	it('imports the functiion without errors', () => {
		assert.deepStrictEqual(StyleToObject('color: #C0FFEE; background: #BADA55;'), {
			color: '#C0FFEE', background: '#BADA55'
		})
	})
})
