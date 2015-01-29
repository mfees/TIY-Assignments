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

### [`_.`]()

* _params:_
  * 
  * 
    * 
      * 
      * 
    * 
    * 
  * 
* _returns:_
  * 
* _differences:_
  * 
  * 

---


### [`_.`]()

* _params:_
  * 
  * 
    * 
      * 
      * 
    * 
    * 
  * 
* _returns:_
  * 
* _differences:_
  * 
  * 

---


### [`_.`]()

* _params:_
  * 
  * 
    * 
      * 
      * 
    * 
    * 
  * 
* _returns:_
  * 
* _differences:_
  * 
  * 

---


### [`_.`]()

* _params:_
  * 
  * 
    * 
      * 
      * 
    * 
    * 
  * 
* _returns:_
  * 
* _differences:_
  * 
  * 

---


### [`_.`]()

* _params:_
  * 
  * 
    * 
      * 
      * 
    * 
    * 
  * 
* _returns:_
  * 
* _differences:_
  * 
  * 

---