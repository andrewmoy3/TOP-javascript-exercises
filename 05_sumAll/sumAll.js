const sumAll = function(n,m) {
    if(n<0 || m<0)return "ERROR";
    if(typeof(n)!="number" || typeof(m)!="number")return "ERROR";
    let max = n>m?n:m;
    let min = n==max?m:n;
    let sum = 0;
    for(let i=min;i<=max;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
