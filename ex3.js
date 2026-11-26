function average(arr){
    let x = 0;
    let y = 0;
   for(let i = 0; i < arr.length; i++){
        x += arr[i];
        y = x / arr.length;
   }
    return y ;
}
let x = [85, 90, 78, 92];
console.log(average(x));