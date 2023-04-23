//Program to Count the Number of Vowels in a String
let count =0;
function countVowel(str) {
  // find the count of vowels
  str.toLowerCase()
  
for(let i=0;i<str.length;i++){
    if(str[i]=="a" || str[i]=="e" || str[i]=="i"|| str[i]=="o" || str[i]=="u"){
        count++
}
}
  // return number of vowels
  return count;

}

console.log(countVowel("aeioughaet"))
