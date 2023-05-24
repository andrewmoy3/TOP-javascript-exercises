const palindromes = function (string) {
    var arr = string.split('');
    arr = arr.filter(item => !/[\p{P}\p{Z}]/u.test(item));
    arr = arr.map(item => item.toLowerCase())
    const len = arr.length - 1
    for(let i=0;i<len/2;i++){
        if(arr[i] != arr[len-i]){
            return false;
        }
    }
    return true 
};

// Do not edit below this line
module.exports = palindromes;
