
function numbers() {
    const arr = [10, 21, 0, 32, 11, 9, 1, 2, 3, 4];

    const newArr = arr.sort((a,b)=>a - b);
    //console.log(newArr);

    const lowestVal = newArr[0];
    const highestVal = newArr[newArr.length-1];

    console.log(lowestVal);
    console.log(highestVal);

}

numbers();