// --------TASK 01: Array Manipulation Activity----------


// Step 1: use slice to find elements in an array
function sliceElements(givenArray) {
  //TODO: return last 3 elements of givenArray
  if (givenArray.length < 3) {
    return "This array doesn't have 3 elements";
  } else {
    // * give .slice() a negative number and it starts at the end of an array
    // * how many to slice is optional
    // * if no end point is given, it zaps the entire rest that comes after the starting point you give it
    return givenArray.slice(-3);
  }
}


// Step 2: use splice to find elements in an array
function spliceElements(givenArray, element1, element2) {
  //TODO: remove the last element of givenArray and add element1 and element2 at that position
  if (givenArray.length === 0) {
    return "The array needs to have at least 1 element"
  } else {
    // * built-in functionality of .splice()
    // * array.splice(start, deleteCount, item1, item2, ...)
    // * start: begin at what index
    // * deleteCount: how many to delete
    // * anything after deleteCount is whatever you want to add to the array
    givenArray.splice(-1, 1, element1, element2);
    return givenArray;
  }
}

// Step 3: use splice to find elements in an array
// * ayyyy, that says use splice - but they mean spilt
function splitElements(givenString) {
  //TODO: convert givenString into an array of words
  if (givenString.length < 2) {
    return "We need 2 words to split"
  } else {
    // * split the string into individual words at each "space"
    return givenString.split(" ");
  }
}

//Uncomment these line to see results for step 1
console.log(sliceElements([1, 2, "MIT Certificate", 4, 5])); // should return ["MIT Certificate", 4, 5]
console.log(sliceElements([1, 2, [3, 4], "JavaScript"])); // should return [2, [3, 4], "JavaScript"]

//Uncomment these line to see results for Step 2
var arr = [1, 2, "MIT Certificate", 4, 5];
console.log(spliceElements(arr, "JavaScript", 101)); // should return [1, 2, "MIT Certificate", 4, "JavaScript", 101]

//Uncomment these line to see results for Step 3
var str = "MIT Certificate loves JavaScript";
console.log(splitElements(str)); // should return ["MIT", "Certificate", "loves", "JavaScript"]

//don't change this line
module.exports = { sliceElements, spliceElements, splitElements };

// --------Challenges--------
// They gave us a "hint" to use Math.max() to calculate what the last 3 elements of an array is
// They're teaching us .slice()
// So why not teach us that .slice() and .splice() have their own built-in way to do this?
// Why do the "hints" make it more difficult for the student? 🙃
// Lil typo in the directions for Step 3





// --------TASK 02: Working with Fat Arrows in ES6----------
function addFive(num) {
  return num + 5;
}
// TODO: Convert addFive() to arrow function
// * arrow notation
const addFive = num => num + 5;


function divideBy(x, y) {
  return x / y;
}
// TODO: Convert divideBy() to arrow function
// * arrow notation
const divideBy = (x, y) => x / y;


function logToConsole() {
  let msg = "MIT Coding Certificate";
  console.log(msg);
}
// TODO: Convert logToConsole() to arrow function
const logToConsole = () => {
  let msg = "MIT Coding Certificate";
  console.log(msg);
}

// --------Challenges--------
// omFG, the test suites marked me FAILED for using const instead of let
// const is common and recommended bc we're typically not gonna change what a function does
// also i find arrow notation convoluted
// i don't like how it looks and prefer Regular/Declared Functions
// but to each their own!
// FIX THE FUGGIN TEST SUITES!





// ----