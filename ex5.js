function coutword(arr){
    let x = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == " "){
            x++;
        }
    }
    return x+1;
}
console.log(coutword("HELLO WORLD"));