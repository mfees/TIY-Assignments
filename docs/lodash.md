### [`_.every`](http://lodash.com/docs#every)

* _params:_
  * `Array`|`Object`|`String` `collection` to iterate over
  * `Function`|`Object`|`String` `predicate` considered for each iteration
    * a callback `Function`
      * is invoked with: `value`, `index`|`key`, `collection`
      * should return `Boolean` whether iteration passes `predicate`
    * an `Object` is compared like [`_.matches`](http://lodash.com/docs#matches)
    * a `String` is compared like [`_.property`](http://lodash.com/docs#property)
  * `thisArg` binding for `predicate`
* _returns:_
  * `Boolean` whether `predicate` passes for every `value` in `collection`
* _differences:_
  * not just for `Array`; can be run with `Object` and `String` as `collection`
  * `predicate` can be `Object` or `String`...?

---

### [`_.reject(collection, [predicate=_.identity], [thisArg])`](https://lodash.com/docs#reject)
The opposite of _.filter; this method returns the elements of collection that predicate does not return truthy for

* _params:_
  * (Array|Object|string) collection to iterate over
  *  (Function|Object|string) predicate
    * callback function
        * an `Object` is compared like [`_.matches`](http://lodash.com/docs#matches)
        * a `String` is compared like [`_.property`](http://lodash.com/docs#property)
* _returns:_
  * (Array): Returns the new filtered array.
  
---

### [`_.where(collection, source)`](https://lodash.com/docs#where)
Performs a deep comparison between each element in collection and the source object, returning an array of all elements that have equivalent property values.

* _params:_
  * (Array|Object|string) collection to search
  * (Object) object of property values to match
* _returns:_
  * (Array): Returns the new filtered array.
  
---


### [`_.forEach(collection, [iteratee=_.identity], [thisArg])`](https://lodash.com/docs#forEach)
Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg and invoked with three arguments; (value, index|key, collection). Iterator functions may exit iteration early by explicitly returning false. 

* _params:_
  * (Array|Object|string) collection to iterate over
  * (Function) [iteratee=_.identity]
    * Invoked with three arguments:
      * (value, index|key, collection)
  * Functions may exit iteration early by explicitly returning fals
* _returns:_
  * (Array|Object|string): Returns collection.
  
---

### [`_.some(collection, [predicate=_.identity], [thisArg])`](https://lodash.com/docs#some)
Checks if predicate returns truthy for any element of collection. The function returns as soon as it finds a passing value and does not iterate over the entire collection.

* _params:_
  * (Array|Object|string) collection to iterate over
  * (Function|Object|string) function invoked per iteration
    * an `Object` is compared like [`_.matches`](http://lodash.com/docs#matches)
* _returns:_
  * (boolean): Returns true if any element passes the predicate check, else false.
  
---


### [`_.filter(collection, [predicate=_.identity], [thisArg])`](https://lodash.com/docs#filter)
Iterates over elements of collection, returning an array of all elements predicate returns truthy for.

* _params:_
  * (Array|Object|string) collection to iterate over
  * (Function|Object|string) predicate considered for each iteration
    * a callback function
      * is invoked with (value, index|key, collection)
      * returns true for elements that have the properties of the given object, else false.
  * thisArg binding of predicate
* _returns:_
  * (Array): Returns the new filtered array.

---


### [`_.map(collection, [iteratee=_.identity], [thisArg])`](https://lodash.com/docs#map)
Creates an array of values by running each element in collection through iteratee

* _params:_
  * (Array|Object|string) collection to iterate over
  * (Function|Object|string) function invoked per iteration
    * callback function
      * is invoked with (value, index|key, collection)
      * returns true for elements that have the properties of the given object, else false
  * thisArg binding of iteratee
* _returns:_
  * (Array): Returns the new mapped array.

---


### [`_.reduce(collection, [iteratee=_.identity], [accumulator], [thisArg])`](https://lodash.com/docs#reduce)
Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous.

* _params:_
  *  (Array|Object|string) collection to iterate over
    * callback
      * invoked with (accumulator, value, index|key, collection).
    * [iteratee=_.identity] (Function): The function invoked per iteration.
    * [accumulator] (*): The initial value.
    * [thisArg] (*): The this binding of iteratee.
* _returns:_
  * (*): Returns the accumulated value.

---


### [`_.reduceRight(collection, [iteratee=_.identity], [accumulator], [thisArg])`](https://lodash.com/docs#reduceRight)
This method is like _.reduce except that it iterates over elements of collection from right to left.

* _params:_
  * (Array|Object|string) collection to iterate over
    * [iteratee=_.identity] (Function): The function invoked per iteration.
    * [accumulator] (*): The initial value.
    * [thisArg] (*): The this binding of iteratee.
* _returns:_
  * (*): Returns the accumulated value. 

---