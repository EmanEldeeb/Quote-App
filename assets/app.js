const quotesBtn = document.querySelector(".btn");
const quoteContent = document.getElementById("quotecontent");
const author = document.getElementById("author");

const quotes = [
  "Be yourself; everyone else is already taken.",
  "You only live once, but if you do it right, once is enough.",
  "In three words I can sum up everything I've learned about life: it goes on.",
  "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring",
  "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle",
  "I have not failed. I've just found 10,000 ways that won't work.",
  "A woman is like a tea bag; you never know how strong it is until it's in hot water.",
];
const quotesAuthor = [
  "Oscar Wilde",
  "Mae West",
  "Robert Frost",
  "Marilyn Monroe",
  "Albert Einstein",
  "Thomas A. Edison",
  "Eleanor Roosevelt",
];
let previousIndex = -1;
function indexGenrator() {
  let quoteIndex;
  do {
    quoteIndex = Math.floor(Math.random() * quotes.length);
  } while (quoteIndex === previousIndex);
  previousIndex = quoteIndex;
  return quoteIndex;
}

window.onload = function () {
  const index = indexGenrator();
  console.log(index);
  quoteContent.innerHTML = quotes[index];
  author.innerHTML = quotesAuthor[index];
};

quotesBtn.addEventListener("click", () => {
  const index = indexGenrator();
  console.log(index);
  quoteContent.innerHTML = quotes[index];
  author.innerHTML = quotesAuthor[index];
});
