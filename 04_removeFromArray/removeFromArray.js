const removeFromArray = function(arr, val) {
    for (let j=1;j<arguments.length;j++){
        let i = 0;
        while(i<arr.length){
            if(arr[i] === arguments[j]){
                arr.splice(i,1);
            }else{i++}
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
