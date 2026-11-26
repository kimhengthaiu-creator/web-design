function drawrectangle(row, col){
  let x = '';
  let i = 0; j = 0;
  if(x>=0 && j<=0){
      for(let i = 0; i < row; i++){
        for(let j = 0;j < col; j++){
            x += '* ';
        }
        x += '\n';
      }
      return x;
    }
  }
console.log(drawrectangle(4, 3));