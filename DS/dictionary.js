const Dictionary = class {
	constructor() {
		this.items = {}; 
	}
	set(key, value) {
		this.items[key] = value;
	}
	has(key) {
		return key in this.items; 
	}
	delete(key) {
		if (this.has(key)) {
			delete this.items[key]; 
			return true; 
		}
		return false; 
	}
	get(key) {
		return this.has(key)? this.items[key] : undefined; 
	}
}

module.exports = Dictionary