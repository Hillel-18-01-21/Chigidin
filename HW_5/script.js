let countOfNumbers;
do{
    countOfNumbers = +prompt("How many numbers do u want to enter?");
}while(isNaN(countOfNumbers));

if(countOfNumbers<3){
    do{
        countOfNumbers = +prompt("U need to enter three or more numbers");
    }
    while(countOfNumbers < 3 || isNaN(countOfNumbers));
}

let arr = [];

for(let i = 1;i <= countOfNumbers;i++){
    let num = +prompt("Enter the number");
    arr.push(num);    
}

let sorted = 0;
function sorting(arr){
    while(sorted === 0){
        sorted = 1;
        for(let i = 0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                sorted = 0;
            }
        }
        
    } return arr;
}

console.log(sorting(arr));