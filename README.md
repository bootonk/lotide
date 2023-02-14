# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install bootonk/lotide`

**Require it:**

`const _ = require('bootonk/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actualArr, expectedArr)`: report results of `eqArrays`
* `assertEqual(actual, expected)`: compare two primitive values and reporting if they match or not
* `assertObjectsEqual(actualObj, expectedObj)`: report results of `eqObjects`
* `countLetters(str)`: iterate over a string, create a count of each letter and contain results within an object
* `countOnly(allItems, itemsToCount)`: iterate through an array, check for any element(s) that match the `itemsToCount` parameter and return count results within an object
* `eqArrays(actualArr, expectedArr)`: compare two arrays and return if they match or not
* `eqObjects(objectOne, objectTwo)`: compare two objects and return if they match or not
* `findKey(obj, callback)`: iterate through an object with a callback that sets a requirement to crosscheck for each value, return the corresponding key
* `findKeyByValue(checkObject, checkValue)`: iterate through an object with a known value to report the key of that value
* `flatten(arr)`: iterate over an array and combine any nested arrays within to one single level array
* `head(arr)`: return only the first element of an array
* `letterPositions(sentence)`: iterate over a string and create keys within a new object for each letter, log the index of each instance of a letter within an array
* `map(array, callback)`: iterate over an array, using the callback to alter each element of the array 
* `middle(arr)`: return the mid point of an array, if the array has an even number of elements return the two in the middle, if the array has an uneven number of elements, return the exact middle index
* `tail(arr)`: return every element from an array except the first
* `takeUntil(array, callback)`: iterate over an array, returning values only until the callback condition has been met
* `without(sourceArr, itemsToRemoveArr)`: iterate over an array, comparing elements to the `itemsToRemoveArr`, return a new array with only the elements that are not included in the remove array 