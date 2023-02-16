
function negValues(...vals) {
    let newArr = vals.sort((a, b) => a - b);
    console.log(newArr);

}

negValues(-9, 3,12,-4, -32, 12 ,43, -2,-0, -12);