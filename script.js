/*What You're Aiming For
At this checkpoint, you are asked to write an algorithm that read a sentence, which ends with a point, 
character by character, and to determine:

Instructions
The length of the sentence (the number of characters).
The number of words in the sentence (assuming that the words are separated by a single space).
The number of vowels in the sentence.
You have to keep in mind that: 
Each character will be treated separately.
The last character is the point.
Use three variables as counters.*/

//Initializing the counters
let vowels = 0;
let words = 0;
let length = 0;

//Initializing a flag to check if the word count has start
let wordStarted = false;

//Inputing the sentence
let sentence = prompt("Enter a sentence that has a period at the end");

//Looping through the characters one by one
for (let i = 0; i < sentence.length; i++) {
  let char = sentence[i];
}
length++; //incrementation

// Checking if the sentence includes vowels
if ("aeiouAEIOU".includes(char)) {
  vowels++;
}
// Checking for spaces and word counting
if (char === "") {
  if (wordStarted) {
    words++;
    wordStarted = false;
  } else if (char === ".") {
    if (wordStarted) {
      words++;
      break; 
    }
    //End of sentence
  } else {
    wordStarted = true;
  }
}

//Logging the results to the console
console.log(`length of the sentence: ${length}`);
console.log(`Number of words: {words}`);
console.log(`Number of vowels: {vowels}`);

