'use strict';

var str1 = "anitalavalatina";
var str2 = "anitalaalatina";
var str3 = "anitalavalotina";
var str4 = "ssxss";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));

function isPalindrome(str) {
  for(var i=0, j=str.length-1; i<Math.floor(str.length/2); i++) {
    if(str[i] != str[j--])
      return false
  }
  return true;
}
