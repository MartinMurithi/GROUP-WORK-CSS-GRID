
function reverse() {
    const arr = ["Run", "Walk"];
    //console.log(arr.length-1);
    //console.log(arr.reverse());

    for (let i = arr.length-1; i >= 0; i--){
        console.log(arr[i]);
    }

}

reverse();

function reverseNames(...arr) {

    let newArr = arr.reverse();
    console.log(newArr);
    
}

reverseNames("Martin", "Racheal");