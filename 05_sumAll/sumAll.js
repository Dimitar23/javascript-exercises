const sumAll = function(n, m) {
    let sum = 0;

    if(n > m){
        let temp = n;
        n = m;
        m = temp;
    }

    if(typeof(n) != 'number' || typeof(m) != 'number' || n < 0 || m < 0) return "ERROR";

    for(let i = n; i <= m; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
