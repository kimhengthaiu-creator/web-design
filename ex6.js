function vote(arr){
    if(arr.length == 0){
        return "Empty";
    }
    let countA = 0;
    let countB = 0;
    let countC = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 'A'){
            countA++;
        } else if(arr[i] == 'B'){
            countB++;
        } else if(arr[i] == 'C'){
            countC++;
        }
    }
    if(countA > countB && countA > countC){
        return "A is the winner";
    } else if(countB > countA && countB > countC){
        return "B is the winner";
    } else if(countC > countA && countC > countB){
        return "C is the wiiner";
    } else if(countA == countB){
        return "A and B are both winner";
    } else if(countA == countC){
        return "A and C are both wwinner";
    } else if(countB == countC){
        return "B and C  are both winner";
    }
}
let n = ['A', 'B', 'A', 'C', 'A']
console.log(vote(n));