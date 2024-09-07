const reverseString = function(word) {
    let wordArray = word.split("");
    let wordReverse = wordArray.reverse();
    let result = wordReverse.join("");

    return result;
};

// Do not edit below this line
module.exports = reverseString;
