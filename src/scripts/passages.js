// passages to be displayed
const passages = [
  {
    text: 'The dog <span id="word">ran</span> to the park.',
    correct: "ran",
    choices: ["ran", "jumped", "swam"],
  },
  {
    text: 'Peter Piper <span id="word">picked</span> a peck of pickled peppers.',
    correct: "picked",
    choices: ["picked", "climbed", "created"],
  },
];

// select the passage randomly (reload for new one)
const psgIdx = selectPassage();
console.log("Selected passage: " + psgIdx);

// get the html element for where the passage should display
const passage = document.getElementById("passage");

// display the passage
displayPassage(psgIdx);

function displayPassage(index) {
  passage.innerHTML = passages[index].text;
  const word = document.getElementById("word");
  word.innerHTML = `
    <select id=\"fillBlank\" name=\"options\">
     <option value=\"\" disabled selected hidden></option>
     <option value=\"one\">${passages[index].choices[0]}</option>
     <option value=\"two\">${passages[index].choices[1]}</option>
     <option value=\"three\">${passages[index].choices[2]}</option>
    </select>`;
}

function selectPassage() {
  return Math.floor(Math.random() * passages.length);
}
