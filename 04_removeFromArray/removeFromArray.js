const removeFromArray = function(array, ...itemsToRemove) {
    for(item of itemsToRemove){
        const index = array.indexOf(item);

        if(index > -1){
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
