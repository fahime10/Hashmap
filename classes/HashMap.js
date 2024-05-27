export class HashMap {
    constructor(size = 40) {
        this.keyMap = new Array(size);
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;
    
        const primeNumber = 31;
    
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            hashCode = (primeNumber * hashCode + value) % this.keyMap.length;
        }
    
        console.log(hashCode);
        return hashCode;
    }
    
    set(key, value) {
        let index = this.hash(key);

        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
        console.log(this.keyMap[index]);
    }
}