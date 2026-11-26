function coutstring(arr, char){
    let x = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == char){
            x++;
        }
    }
    return x;
}
console.log(coutstring("Hello","l"));