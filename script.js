import { HashMap } from "./classes/HashMap.js";

let hashmap = new HashMap();

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
console.log("Lenght: " + hashmap.length());