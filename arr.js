const readline = require("readline-sync");
const scores = [
    ["A", 81, 84],
    [55, 54, 62],
    [89, 71, 90],
  ];
const findTotal = arr => {
    let sum = 0;
 
    for (const item of arr){
        for (const num of item){
            if (Number(num)){
                sum += num;
            }
        }
    }
    return sum;
}
 
const findAverage = arr => {
    let sum = 0,
        count = 0;
 
    for (const item of arr){
        for (const num of item){
            if (Number(num)){
                sum += num;
                count++;
            }
        }
    }
    return sum / count;
}
 
 
const findMax = arr => {
    let max = 0;
 
    for (const item of arr){
        for (const num of item){
            if (num > max){
                max = num;
            }
        }
    }
    return max;
}
 
const findMin = arr => {
    let min = findMax(scores);
    for (const item of arr){
        for (const num of item){
            if (num < min){
                min = num;
            }
        }
    }
    return min;
}
const plants = [["Begonia", "Daisy", "Lily", "Peony", "Rose", "Sunflower", "Lavender"], 
[1,6,3,4,5,null,2]];
 
const orderFlowers = arr => {
    let currentElement = 0;
 
    while (currentElement != null){
      console.log(arr[0][currentElement])
      currentElement = arr[1][currentElement];
    }
}
 
 
const board = [
    ["", "", ""], // Row 1
    ["", "", ""], // Row 2
    ["", "", ""]  // Row 3
];
 
const game = arr => {
    let player1 = "X";
    let player2 = "O";
    while (true){
        let row = 0;
        let column = 0;
        let choice1 = readline.question("Player 1: ")
        row = choice1.substring(0, 1);
        column = choice1.slice(1);
        if (!arr[row][column]){
            arr[row][column] = player1;
        }
        console.log(arr);
        if(hasWon(arr,player1)){
            console.log('player1 wins');
            break;
        }
       
        let choice2 = readline.question("Player 2: ")
        row = choice2.substring(0, 1);
        column = choice2.slice(1);
        if (!arr[row][column]){
            arr[row][column] = player2;
        }
        console.log(arr);
        if(hasWon(arr,player2)){
            console.log('player2 wins');
            break;
        }
    }
}

const hasWon = (arr,player) =>{
    let isSame = false;
    let count = 0;
    for(const row of arr){
        for (const element of row){
            if(element === player){
                isSame = true;
                count+=1;
            }else{
                isSame = false;
            }
            if(count === 3){
                return true;
            }
        }
    }
    return false;
}

game(board);