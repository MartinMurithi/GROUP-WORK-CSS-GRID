

function palindromeStr(str) {
    let newStr = str.split("").reverse().join("");
    return str == newStr;
   
}

console.log(palindromeStr("Racheal"));

function palindromeNum(num) {
    const temp = num.toString().split("").reverse().join("");
    return temp == num;
}

console.log(palindromeNum(313));