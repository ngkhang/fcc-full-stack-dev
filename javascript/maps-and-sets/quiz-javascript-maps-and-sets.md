# JavaScript Maps and Sets Quiz

1. What is a Set in JavaScript?
    - [ ] A data structure that allows duplicate values.
    - [ ] A collection that does not allow deletion of its elements.
    - [x] A collection in which a value can only occur once.
    - [ ] A data structure that only stores strings and numbers.

2. Which of the following methods is available in Maps but not in Sets?
    - [ ] `values()`.
    - [ ] `has()`.
    - [ ] `clear()`.
    - [x] `set()`.

3. What method is used to add elements to a Set?
    - [x] `.add()`
    - [ ] `.append()`
    - [ ] `.insert()`
    - [ ] `.push()`

4. How do you check if a Set contains a certain value?
    - [ ] `.find()`
    - [x] `.has()`
    - [ ] `.contains()`
    - [ ] `.hasValue()`

5. Which of these is a great use case for Sets?
    - [ ] Managing key-value pairs in a database.
    - [ ] Creating ordered lists of items.
    - [ ] Storing hierarchical data structures in the browser local storage.
    - [x] Eliminating duplicates from an array.

6. What is a WeakSet in JavaScript?
    - [x] A Set-like collection that only stores objects.
    - [ ] A Set-like collection that allows duplicate values.
    - [ ] A Set-like collection that only allows primitive data types.
    - [ ] A Set-like collection that prevents values from being removed.

7. What is one difference between a Set and a WeakSet?
    - [ ] A Set does not allow duplicate values, but a WeakSet does.
    - [ ] A Set allows garbage collection, whereas a WeakSet does not.
    - [ ] A WeakSet can store any type of value, including numbers.
    - [x] A Set can hold any type of value, while a WeakSet only holds objects.

8. What is a Map in JavaScript?
    - [ ] A collection that only allows unique values.
    - [ ] A collection that can only use strings as keys.
    - [ ] A collection that does not allow deletion of its items.
    - [x] A collection of key-value pairs of any type.

9. What method is used to insert key-value pairs into a Map?
    - [ ] `.add()`
    - [x] `.set()`
    - [ ] `.insert()`
    - [ ] `.append()`

10. What will the following code output?

    ```js
    const myMap = new Map();
    myMap.set('a', 1);
    myMap.set('a', 2);
    console.log(myMap.get('a'));
    ```

    - [ ] `undefined`
    - [ ] `null`
    - [x] `2`
    - [ ] `1`

11. How does a Map differ from an Object in JavaScript?
    - [ ] Maps do not support iteration, while Objects do.
    - [x] Maps allow any type of key, but Objects only allow strings and symbols.
    - [ ] Objects allow any type as keys, while Maps only allow strings.
    - [ ] A Map only allows numbers as keys.

12. How can you remove a key-value pair from a Map?
    - [ ] `.remove()`
    - [x] `.delete()`
    - [ ] `.erase()`
    - [ ] `.deleteKey()`

13. What does the `size` property of a Map return?
    - [x] The number of key-value pairs in the Map.
    - [ ] The number of indexes in the Map.
    - [ ] The total memory used by the Map.
    - [ ] The number of unique values in the Map.

14. What is a WeakMap in JavaScript?
    - [ ] A Map-like collection that allows primitive values as keys.
    - [x] A Map-like collection with weak references to the keys.
    - [ ] A Map-like collection that automatically sorts its keys.
    - [ ] A Map-like collection that blocks the deletion of items.

15. What is one difference between a Map and a WeakMap?
    - [ ] A Map allows only primitive types as keys, whereas a WeakMap only allows objects.
    - [ ] A Map allows garbage collection, whereas a WeakMap does not.
    - [ ] A WeakMap allows duplicate keys, whereas a Map does not.
    - [x] A Map is iterable, whereas a WeakMap is not.

16. Which of the following methods does NOT exist on a WeakMap?
    - [ ] `.set()`
    - [ ] `.has()`
    - [x] `.size()`
    - [ ] `.delete()`

17. What will be the output of the following code?

    ```js
    const set = new Set([1, 2, 3]);
    set.delete(2);
    console.log(set.has(2));
    ```

    - [ ] `2`
    - [x] `false`
    - [ ] `true`
    - [ ] `undefined`

18. How can you iterate over the values in a Set?
    - [ ] By using the `.filter()` method.
    - [x] By using the `.forEach()` method.
    - [ ] By using the `.reduce()` method.
    - [ ] By using the `.map()` method.

19. Which two methods of Sets return a SetIterator that contains the values of a certain Set?
    - [ ] `has()` and `add()`.
    - [ ] `forEach()` and `values()`.
    - [x] `keys()` and `values()`.
    - [ ] `entries()` and `values()`.

20. What will be the output of the following code?

    ```js
    const map = new Map([["a", 1], ["b", 2]]);
    map.clear();
    console.log(map.size);
    ```

    - [ ] `undefined`
    - [x] `0`
    - [ ] `2`
    - [ ] `1`
