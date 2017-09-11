//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: (str) => {
      str = str.split('').reverse().join('');
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: (Arr) => {
      let x = [];
      
      for (i=0; i < arr.length; i++){
        if(!x.includes(arr[i])) {
          x.push(arr[i])
        }
      }
      return x;
    
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: (str) => {
    str = str.split(' ') 
    const x = [];
    for (word of str) {
      for (i=0; i<word.length; i++){
        if(i === 0){
          x.push(word[i].toUpperCase())
        }
        else{
          x.push(word[i])
        }
      }
      x.push(" ")
    }
    return x.join('');
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: (str) => {
    var val = "aeiouAEIOU";
    var x = 0;
    
    for (i = 0; i < str.length; i++){
        if(str[i].match(/[aeiou]/ig)) {
          console.log(x)
          x++;
        }
    }
    return x
   },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: (num) => {
    let counter = 0;
    
    for (i=1; i < num; i++){
      if(num % i === 0) {
        counter++;
      }
    }
    if(counter > 1) {
      return false;
    }
    return true;
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World",
  log2: "Hello undefined"
};
