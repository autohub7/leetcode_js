var LESS_THAN_20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
var TENS = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
var THOUSANDS = ["", "Thousand", "Million", "Billion"];

function numberToWords(num) {
    if (num == 0) return "Zero";

    var i = 0;
    words = "";
    
    while (num > 0) {
        if (num % 1000 != 0)
    	    words = helper(num % 1000) +THOUSANDS[i] + " " + words;
    	num = parseInt(num/1000);
    	i++;
    }

    return words
}

function helper(num) {
    if (num == 0)
        return "";
    else if (num < 20)
        return LESS_THAN_20[num] + " ";
    else if (num < 100)
        return TENS[parseInt(num / 10)] + " " + helper(num % 10);
    else
        return LESS_THAN_20[parseInt(num / 100)] + " Hundred " + helper(num % 100);
}

//console.log(numberToWords(123))