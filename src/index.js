import HashMap from "./modules/HashMap.js";
import HashSet from "./modules/HashSet.js";

function printHashMap() {
	const hashMap = new HashMap();

	hashMap.set("John", "DarkRed");
	hashMap.set("Sadie", "HotPink");
	hashMap.set("Kate", "OrangeRed");
	hashMap.set("Bob", "Plum");
	hashMap.set("Linda", "RebeccaPurple");
	hashMap.set("Mary", "Tomato");
	hashMap.set("Elise", "Yellow Green");
	hashMap.set("Bill", "PapayaWhip");
	hashMap.set("Lonny", "Khaki");
	hashMap.set("Martha", "Magenta");
	hashMap.set("Dante", "DarkSeaGreen");
	hashMap.set("Amber", "Aqua");
	hashMap.set("Steve", "Maroon");
	hashMap.set("Celina", "BlanchedAlmond");
	hashMap.set("Dough", "SandyBrown");

	console.log(
		"This is a hash map that contains keys with names and values with their favorite color."
	);
	console.log("--------------------------------");
	console.log(`We have ${hashMap.length} keys in the hash map!`);
	console.log("--------------------------------");
	console.log("Keys:");
	console.log(hashMap.keys);
	console.log("--------------------------------");
	console.log("Values:");
	console.log(hashMap.values);
	console.log("--------------------------------");
	console.log("Let's remove Lonny and Bill!");
	console.log("--------------------------------");
	hashMap.remove("Lonny");
	hashMap.remove("Bill");
	console.log(`We have ${hashMap.length} keys in the hash map!`);
	console.log("--------------------------------");
	console.log("Keys:");
	console.log(hashMap.keys);
	console.log("--------------------------------");
	console.log("Values:");
	console.log(hashMap.values);
	console.log("--------------------------------");
	console.log(`What is the favorite color of Kate? ${hashMap.get("Kate")}`);
	console.log("--------------------------------");
	console.log(`Elise is in the hash map? ${hashMap.has("Elise")}`);
	console.log("--------------------------------");
	console.log(`What about Carlos? ${hashMap.has("Carlos")}`);
	console.log("--------------------------------");
	console.log("Let's check all the entries with their key and their value:");
	console.log(hashMap.entries);
	console.log("--------------------------------");
	console.log("Let's clear the hash map!");
	hashMap.clear();
	console.log("--------------------------------");
	console.log(`The hash map now has ${hashMap.length} keys!`);
	console.log("--------------------------------");
}
printHashMap();

function printHashSet() {
	const hashSet = new HashSet();

	hashSet.add("Bolivia");
	hashSet.add("San Marino");
	hashSet.add("Jamaica");
	hashSet.add("Cuba");
	hashSet.add("Bahrain");
	hashSet.add("Germany");
	hashSet.add("Maldives");
	hashSet.add("Solomon Islands");
	hashSet.add("Dominican Republic");
	hashSet.add("Argentina");
	hashSet.add("Georgia");
	hashSet.add("Brunei");
	hashSet.add("Luxembourg");
	hashSet.add("Kazakhstan");
	hashSet.add("Croatia");

	console.log("This is a hash set that contains keys with countries.");
	console.log("--------------------------------");
	console.log(`We have ${hashSet.length} keys in the hash set!`);
	console.log("--------------------------------");
	console.log("Keys:");
	console.log(hashSet.keys);
	console.log("--------------------------------");
	console.log("Let's remove Germany and Jamaica!");
	console.log("--------------------------------");
	hashSet.delete("Germany");
	hashSet.delete("Jamaica");
	console.log(`We have ${hashSet.length} keys in the hash set!`);
	console.log("--------------------------------");
	console.log("Keys:");
	console.log(hashSet.keys);
	console.log("--------------------------------");
	console.log(`Cuba is in the hash set? ${hashSet.has("Cuba")}`);
	console.log("--------------------------------");
	console.log(`What about Belgium? ${hashSet.has("Belgium")}`);
	console.log("--------------------------------");
	console.log("Let's clear the hash set!");
	hashSet.clear();
	console.log("--------------------------------");
	console.log(`The hash set now has ${hashSet.length} keys!`);
}
printHashSet();
