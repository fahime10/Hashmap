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
    
        return hashCode;
    }
    
    set(key, value) {
        let index = this.hash(key);

        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
        this.size++;
    }

    get(key) {
        let index = this.hash(key);

        if (this.keyMap[index]) {
            return this.keyMap[index][0][1];
        } else {
            return null;
        }
    }

    has(key) {
        let index = this.hash(key);

        if (this.keyMap[index]) {
            return true;
        } else {
            return false;
        }
    }

    remove(key) {
        let index = this.hash(key);

        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    this.keyMap[index].splice(i, 1);
                    this.size--;
                    return true;
                }
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

    keys() {
        const keys = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keys.push(this.keyMap[i][j][0]);
                }
            }
        }

        return "[ " + keys + " ]";
    }
}