function resversearray(arr){
    let resverse = [ ];
    for(let i = arr.length - 1; i >= 0; i--){
        resverse.push(arr[i]);
    }
    return resverse;
}
let x = [1,2,3,4,5];
console.log(resversearray(x));
