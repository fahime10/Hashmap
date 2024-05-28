export class HashSet {
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
    
        return hashCode;
    }
    

    add(key) {
        let index = this.hash(key);

        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }

        if (!this.keyMap[index].includes(key)) {
            this.keyMap[index].push(key);
            this.size++;
        }
    }

    has(key) {
        let index = this.hash(key);

        if (this.keyMap[index]) {
            return this.keyMap[index].includes(key);
        }
        return false;
    }

    remove(key) {
        let index = this.hash(key);

        if (this.keyMap[index]) {
            let keyIndex = this.keyMap[index].indexOf(key);

            if (keyIndex !== -1) {
                this.keyMap[index].splice(keyIndex, 1);
                this.size--;
                return true;
            }
        }
        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.keyMap = new Array(this.keyMap.length);
        this.size = 0;
    }

    entries() {
        const entries = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    entries.push(`['${this.keyMap[i][j]}']`);
                }
            }
        }

        return "[" + entries.join(', ') + "]";
    }
}