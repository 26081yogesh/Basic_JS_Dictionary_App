const searchedWord = document.querySelector("#words");
const btn = document.querySelector(".btn");
const actualWord = document.querySelector(".actual-word");
const meaning = document.querySelector(".meaning");
const soundBtn = document.querySelector("#sound");

btn.addEventListener("click", () => {
  const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord.value}`;
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data[0]);
      if (data[0]) {
        actualWord.innerHTML = data[0].word;
        meaning.innerHTML = data[0].meanings[0].definitions[0].definition;
      } else {
        actualWord.innerHTML = "Sorry!";
        meaning.innerHTML = data.message;
      }
    })
    .catch((error) => {
      meaning.innerHTML = "Sorry word not available!";
    });
});

soundBtn.addEventListener("click", () => {
  const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord.value}`;
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let audio = new Audio(data[0].phonetics[0].audio);
      audio.play();
    })
    .catch((error) => {
      console.log("ERROR: ", error);
    });
});
