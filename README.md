# Hash Table

Custom [`hash tables`](https://en.wikipedia.org/wiki/Hash_table) data structures using `classes`.

I created two `hash tables`. One is a [`hash map`](https://en.wikipedia.org/wiki/Associative_array) and the second one is a [`hash set`](<https://en.wikipedia.org/wiki/Set_(abstract_data_type)>).

#### Features:

The `hash map` instance has the following methods:

- `length`: returns the number of stored keys in the hash map.
- `keys`: returns an array containing all the keys;
- `values`: returns an array containing all the values;
- `entries`: returns an array that contains each key-value pair;
- `set(key, value)`: insert a key-value pair into the hash map;
- `get(key)`: returns the value that is assigned to this key;
- `remove(key)`: remove a key;
- `has(key)`: returns a boolean if the key is there or not;
- `clear()`: removes all entries in the hash map;

---

The `hash set` instance has the following methods:

- `length`: returns the number of stored keys in the hash set.
- `keys`: returns an array containing all the keys;
- `add(key)`: insert a key into the hash set;
- `delete(key)`: remove a key;
- `has(key)`: returns a boolean if the key is there or not;
- `clear()`: removes all entries in the hash set;

---

In order to prevent the collision as much as possible, I made the number of buckets to double when the load factor is exceeded. Also, the number of buckets will decrease when there are too few items.

I didn't use linked lists for each bucket, I used arrays.

---

### Demo:

1. `git clone git@github.com:Oliver-Ard/cs-hash-table.git`
2. `cd cs-hash-table`
3. Open the project with your code editor;
4. In the editor console: `npm install`, after that `npm start`
5. Check the output in the editor console.

---

### Big O Notation:

> A hash map is very efficient in its insertion, retrieval and removal operations. This is because we use array indexes to do these operations. A hash map has an average case complexity of `O(1)` for the following methods:
>
> - Insertion
> - Retrieval
> - Removal
>
> Assuming we have a good hash map written. The worst case of those operations would be `O(n)` and that happens when we have all our data hashes to the same exact bucket. The complexity itself surfaces because of the linked list, and `O(n)` is because we are traversing the linked list to insert yet again another node into the same bucket, which happens specifically because of collisions.
>
> The growth of our hash map has the complexity of `O(n)` at all times.

from **[HashMap Data Structure](https://www.theodinproject.com/lessons/javascript-hashmap-data-structure#computation-complexity)**

---

#### What I have practiced in this project?

- create a custom `hash map`;
- create a custom `hash set`.

**[This](https://www.theodinproject.com/lessons/javascript-hashmap)** project is from **[The Odin Project](https://www.theodinproject.com/)**, [JavaScript Course](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript).
