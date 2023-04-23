//Program to Find the Factorial of a Number

// Create a function....
function factorial(n){
    let answer=1;
    if (n == 0 || n == 1){
      return answer;
    }
    else if(n > 1){
      for(let i=1;i<=n;i++){
        answer = answer * i;
      }
      return answer;
    }
    else{
      return "number has to be positive."
    }  
  }
  let n =1;
  answer = factorial(n)
  console.log("Factorial of " + n + " : " + answer);