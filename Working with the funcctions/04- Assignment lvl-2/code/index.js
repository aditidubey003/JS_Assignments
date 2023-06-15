// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

// 1 human year = 7 dog years 

function calculateDogAge (dogAge = 0, rate = 7){
return dogAge * rate;
}


calculateDogAge(2);
/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

// movies in a year = 12 months * 4 weeks = 48
const maxAge = 90;
function calculateMoviesToWatch ( age =  0, moviesNumber = 0){
return (maxAge - age) * 48 * moviesNumber ;
}

calculateMoviesToWatch(20, 1);

/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/


// Formula	
// (0°C × 9/5) + 32 = 32°F

function celsiusToFahrenheit (temperatureInCelsius = 0){
temperatureInFahrenheit = (temperatureInCelsius * 9/5) + 32;
return temperatureInFahrenheit ;

}

celsiusToFahrenheit(15);

/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/
// Formula

function fahrenheitToCelsius (temperatureInFahrenheit = 0){
  temperatureInCelsius = (temperatureInFahrenheit- 32) * 5 / 9;
  return temperatureInCelsius;
}

fahrenheitToCelsius(100);
/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/



// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string
 with possible values of `sum` or `product`
and return sum or product of 1,…,n.
 If user enters any other value than `sum` or `product` 
 alert `Not a valid Input`.
*/


sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/


/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/



/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/


/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/


