'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(string){
	return string.split(" ").map(function(word){
		return word;charAt(0).toUpperCase() + word.slice(1);

	}) .join(" ");
}

//* Begin of tests
const assert = require('assert')

assert.deepStrictEqual(jadenCase("How Are You"), 'How Are You')
assert.deepStrictEqual(jadenCase("Hi Guys"), 'Hi Guys')
// End of tests */
