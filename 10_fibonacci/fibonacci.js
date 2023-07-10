const fibonacci = function(n) {
    if(n<0) return 'OOPS';

    let previous = current = 1;
    let temp = 0;
    for(let i = 2; i < n; i++){
        temp = current;
        current += previous;
        previous = temp;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
