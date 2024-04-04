class HashSet {
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

	// Returns the number of stored keys in the hash set.
	get length() {
		return this.#keysNr;
	}

	// Returns an array containing all the keys inside the hash set.
	get keys() {
		const keysArray = [];

		this.#bucketsList.forEach((bucket) => {
			if (bucket.length > 0) {
				bucket.forEach((key) => {
					keysArray.push(key);
				});
			}
		});
		return keysArray;
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

		// Rehashing each existing key.
		oldBuckets.forEach((bucket) => {
			if (bucket) {
				bucket.forEach((key) => {
					this.add(key);
				});
			}
		});
	}

	// Insert a key into the hash set.
	add(key) {
		// Hash the key.
		const index = this.#hash(key);
		const bucket = this.#bucketsList[index];

		// If the index is empty, insert the key.
		if (!bucket) {
			bucket.push(key);
			this.#keysNr += 1;
		} else {
			let inserted = false;

			// Prevent duplication if the key already exists.
			for (let i = 0; i < bucket.length; i += 1) {
				if (bucket[i] === key) {
					inserted = true;
					return;
				}
			}
			// If the key does not exist, insert the key.
			if (inserted === false) {
				bucket.push(key);
				this.#keysNr += 1;
			}
		}

		// Check if resizing is necessary after inserting.
		if (this.#keysNr > this.#threshold) {
			this.#resize(Math.floor(this.#currentCapacity * 2));
		}
	}

	// Remove a key.
	delete(key) {
		const index = this.#hash(key);
		const bucket = this.#bucketsList[index];

		if (bucket) {
			for (let i = 0; i < bucket.length; i += 1) {
				if (bucket[i] === key) {
					// Remove the key from the bucket.
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
				if (bucket[i] === key) {
					return true;
				}
			}
		}

		return false;
	}

	// Removes all entries in the hash set.
	clear() {
		this.#currentCapacity = this.#initialCapacity;
		this.#bucketsList = new Array(this.#currentCapacity)
			.fill(null)
			.map(() => []);
		this.#keysNr = 0;
		this.#threshold = this.#currentCapacity * this.#loadFactor;
	}
}

export default HashSet;
