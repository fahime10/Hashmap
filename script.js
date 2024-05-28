import { HashMap } from "./classes/HashMap.js";
import { HashSet } from "./classes/HashSet.js";

let hashmap = new HashMap();
let hashset = new HashSet();

hashmap.set("key1", "marco");
console.log("key1: " + hashmap.get("key1"));
console.log("key2: " + hashmap.get("key2"));
console.log("Has key2: " + hashmap.has("key2"));
console.log("Has key1: " + hashmap.has("key1"));
console.log("Remove key1: " + hashmap.remove("key1"));
console.log("Remove key2: " + hashmap.remove("key2"));
console.log("Remove key1: " + hashmap.remove("key1"));

hashmap.set("key1", "marco");
hashmap.set("key2", "pierluigi");
hashmap.set("key3", "giovanni");
console.log("Length: " + hashmap.length());
console.log("Keys: " + hashmap.keys());
console.log("Values: " + hashmap.values());
console.log("Key Values: " + hashmap.entries());

hashmap.clear();
console.log("Length: " + hashmap.length());
console.log("--------------------------------");

hashset.add("key1");
hashset.add("key2");
console.log("key1: " + hashset.has("key1"));
console.log("key2: " + hashset.has("key2"));
console.log("key3: " + hashset.has("key3"));
console.log("Length: " + hashset.length());

console.log("Remove key1: " + hashset.remove("key1"));
console.log("Remove key2: " + hashset.remove("key2"));
console.log("Remove key3: " + hashset.remove("key3"));
console.log("Remove key2: " + hashset.remove("key2"));

hashset.add("key1");
hashset.add("key2");
console.log("Length: " + hashset.length());
hashset.clear();
console.log("Length: " + hashset.length());

hashset.add("key1");
hashset.add("key2");
console.log("Keys: " + hashset.entries());


