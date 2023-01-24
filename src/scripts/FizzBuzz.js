for(var number = 1; number <=100; number++) {
  if(number % 15 === 0 ){
    console.log("FizzBuzz");
  } else if(number % 3 === 0 || number.toString().includes("3")) {
  console.log("Fizz");
  } else if(number % 5 === 0 || number.toString().includes("5")) {
  console.log("Buzz");
  } else {
  console.log(number);
  }
}



    
