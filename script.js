

// function getWordCounter(str){
//     let splited = str.trim().split(/\s+/);
//     if(splited==''){
//         return 0;
//     }
//     return splited.length;
// }

// function counter(str){
//     let alphabets =0;
//     let characters = 0;
//     let numbers =0;
//     for(let i = 0; i<str.length;i++){
//         if(str[i] != ' ' && str[i] != '\n'){
//             characters++;
//         }
//         if((str[i]>'a'&& str[i]<'z') || (str[i]>'A' && str[i]<'Z')){
//             alphabets++;
//         }
//         if(str[i]>'0'&& str<'9'){
//             numbers++;
//         }
//     }
//     document.getElementById("chars").value = characters;
//     document.getElementById("numbers").value = numbers;
//     document.getElementById("alphabets").value = alphabets;
// }

// function wordCounter(){
//     let inputtxt = document.getElementById("inputbox");
//     words = document.getElementById("words");
//     words = getWordCounter(inputtxt.value);
//      counter(inputtxt.value);

// }

function getWordCount(str) {
    // Remove leading/trailing whitespace and split on one or more whitespace characters
    const words = str.trim().split(/\s+/);
  
    // Handle empty strings or strings with only whitespace characters
    if (!words.length) {
      return 0;
    }
  
    return words.length;
  }
  
  function countCharacters(str) {
    let characters = 0;
    let alphabets = 0;
    let numbers = 0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      // Check for non-whitespace and non-newline characters
      if (char !== ' ' && char !== '\n') {
        characters++;
  
        // Count alphabets
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
          alphabets++;
        }
  
        // Count numbers (corrected logic)
        if (/\d/.test(char)) { // Use regular expression for digit matching
          numbers++;
        }
      }
    }
  
    return { characters, alphabets, numbers };
  }
 
function handleInput() {
    const inputText = document.getElementById("inputbox").value;
  
    const wordCount = getWordCount(inputText);
  
    const charCounts = countCharacters(inputText);
  
    // Update results without displaying them yet
    document.getElementById("words").value = wordCount;
    document.getElementById("chars").value = charCounts.characters;
    document.getElementById("alphabets").value = charCounts.alphabets;
    document.getElementById("numbers").value = charCounts.numbers;
  }
  
  function toggleResults() {
    const outputBox = document.querySelector(".outputBox");
    outputBox.classList.toggle("hidden"); // Toggle hidden class
  }
  
  // Call handleInput() when the input box is changed
  document.getElementById("inputbox").addEventListener("change", handleInput);
  
  // Add click event listener for show results button
  document.getElementById("showResults").addEventListener("click", toggleResults);