class HashMap {
	#bucketsList;

	#initialCapacity;

	#currentCapacity;

	#loadFactor;

	#threshold;

	#keysNr;

	constructor(initialCapacity = 16) {
		this.#initialCapacity = initialCapacity;
		this.#currentCapacity = this.#initialCapacity;
		this.#bucketsList = new Array(this.#currentCapacity)
			.fill(null)
			.map(() => []);
		this.#loadFactor = 0.75;
		this.#keysNr = 0;
		this.#threshold = this.#currentCapacity * this.#loadFactor;
	}

	// Returns the number of stored keys in the hash map.
	get length() {
		return this.#keysNr;
	}

	// Returns an array containing all the keys inside the hash map.
	get keys() {
		const keysArray = [];

		this.#bucketsList.forEach((bucket) => {
			if (bucket.length > 0) {
				bucket.forEach((pair) => {
					keysArray.push(pair[0]);
				});
			}
		});
		return keysArray;
	}

	// Returns an array containing all the values.
	get values() {
		const valuesArray = [];

		this.#bucketsList.forEach((bucket) => {
			if (bucket.length > 0) {
				bucket.forEach((pair) => {
					valuesArray.push(pair[1]);
				});
			}
		});
		return valuesArray;
	}

	// Returns an array that contains each key-value pair.
	get entries() {
		const entriesArray = [];

		this.#bucketsList.forEach((bucket) => {
			if (bucket.length > 0) {
				bucket.forEach((pair) => {
					entriesArray.push(pair);
				});
			}
		});
		return entriesArray;
	}

	// Hash function.
	#hash(key) {
		let hashCode = 0;
		const primeNumber = 31;

		for (let i = 0; i < key.length; i += 1) {
			hashCode = hashCode * primeNumber + key.charCodeAt(i);
			hashCode %= this.#currentCapacity;
		}

		return hashCode;
	}

	// Resize function for the buckets when the load factor is reached.
	#resize(newValue) {
		const oldBuckets = this.#bucketsList;

		this.#currentCapacity = newValue;
		this.#bucketsList = new Array(this.#currentCapacity)
			.fill(null)
			.map(() => []);
		this.#keysNr = 0;
		this.#threshold = this.#currentCapacity * this.#loadFactor;

		// Rehashing each existing key-value pair.
		oldBuckets.forEach((bucket) => {
			if (bucket) {
				bucket.forEach(([key, value]) => {
					this.set(key, value);
				});
			}
		});
	}

	// Insert a key-value pair into the hash map.
	set(key, value) {
		// Hash the key.
		const index = this.#hash(key);
		const bucket = this.#bucketsList[index];

		// If the index is empty, insert the key-value pair.
		if (!bucket) {
			bucket.push([key, value]);
			this.#keysNr += 1;
		} else {
			//  If the index is not empty, iterate through the bucket (collision handling).
			let inserted = false;

			for (let i = 0; i < bucket.length; i += 1) {
				// If the key exists, update the value.
				if (bucket[i][0] === key) {
					bucket[i][1] = value;
					inserted = true;
				}
			}
			// If the key does not exist, insert the key-value pair.
			if (inserted === false) {
				this.#keysNr += 1;
				bucket.push([key, value]);
			}
		}

		// Check if resizing is necessary after inserting.
		if (this.#keysNr > this.#threshold) {
			this.#resize(Math.floor(this.#currentCapacity * 2));
		}
	}

	// Returns the value that is assigned to this key.
	get(key) {
		// Hash the key
		const index = this.#hash(key);
		const bucket = this.#bucketsList[index];

		if (bucket) {
			// Iterate over the bucket to find the key.
			for (let i = 0; i < bucket.length; i += 1) {
				if (bucket[i][0] === key) {
					return bucket[i][1];
				}
			}
		}

		return null;
	}

	// Remove a key.
	remove(key) {
		const index = this.#hash(key);

		const bucket = this.#bucketsList[index];

		if (bucket) {
			for (let i = 0; i < bucket.length; i += 1) {
				if (bucket[i][0] === key) {
					// Remove the key-value pair from the bucket.
					bucket.splice(i, 1);
					this.#keysNr -= 1;

					// Check if resizing is necessary after removal.
					if (
						this.#currentCapacity > 16 &&
						this.#keysNr < this.#threshold / 4
					) {
						this.#resize(Math.floor(this.#currentCapacity / 2));
					}

					return true;
				}
			}
		}

		return false;
	}

	// Returns a boolean if the key is there or not.
	has(key) {
		const index = this.#hash(key);
		const bucket = this.#bucketsList[index];

		if (bucket) {
			for (let i = 0; i < bucket.length; i += 1) {
				if (bucket[i][0] === key) {
					return true;
				}
			}
		}

		return false;
	}

	// Removes all entries in the hash map.
	clear() {
		this.#currentCapacity = this.#initialCapacity;
		this.#bucketsList = new Array(this.#currentCapacity)
			.fill(null)
			.map(() => []);
		this.#keysNr = 0;
		this.#threshold = this.#currentCapacity * this.#loadFactor;
	}
}

export default HashMap;
