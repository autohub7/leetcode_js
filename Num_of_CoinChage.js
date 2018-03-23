class numberOfChanges {
    constructor(coins) {
        this.coins = coins; 
    }

    // Brute Force 
    nWaysBF(n) {
        return this.nWayHelper(n, 0);
    }
    nWayHelper(n,i) {
        if(n==0) return 1; 
        if(n<0 || i>=this.coins.length) return 0; 
        return this.nWayHelper(n-this.coins[i], i)+this.nWayHelper(n, i+1)
    }

    // A failure example since two recurseive calls for hash collide each other 
    nWaysMemo(n) {
        var hash = {}; 
        return this.nWayMHelper(n, 0, hash);
    }
    nWayMHelper(n,i, hash) {
        if(n in hash) return hash[n]
        if(n==0) return 1; 
        if(n<0 || i>=this.coins.length) return 0; 
        var res = this.nWayMHelper(n-this.coins[i], i, hash)+this.nWayMHelper(n, i+1, hash); 
        return hash[n] = res; 
    }

    // Seperate hash with a unique name 
    nWaysMemo2(n) {
        var hash = new Map(); 
        return this.nWayMHelper2(n, 0, hash);
    }
    nWayMHelper2(n,i, hash) {
        if(hash.get(res+'with'+i)) return hash.get(res+'with'+i)
        if(n==0) return 1; 
        if(n<0 || i>=this.coins.length) return 0; 
        var res = this.nWayMHelper2(n-this.coins[i], i, hash)+this.nWayMHelper2(n, i+1, hash); 
        hash.set(res+'with'+i, res);
        return hash.get(res+'with'+i)
    }

    // From Careercup (Gayle)
    nWaysSol(n) {
        var hash = {};
        var map = new Map(); 
        var i = 0; 
        var temp = 'hash'+0; 
        map.set(temp, 0); 
        console.log(map)
        return this.makeChange(n, 0, hash); 
    }
    makeChange(money, index, hash) {
        if(money == 0) return 1; 
        if(index>=this.coins.length) {
            return 0; 
        }
        if(hash[money]) return hash[money]
        var amountWithCoin = 0; 
        var ways = 0; 
        while(amountWithCoin <= money) {
            var remaining = money - amountWithCoin; 
            ways += this.makeChange(remaining, index+1, hash); 
            amountWithCoin += this.coins[index]; 
        }
        hash[money] = ways; 
        return ways; 
    }
}