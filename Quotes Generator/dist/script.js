const description = document.getElementById("quote_description");
const author = document.getElementById("quote_written_by");
const newQuoteButton = document.getElementById("new_quote");

function getapi() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      description.innerHTML = `"${data.content}"`;
      author.innerHTML = data.author;
      // console.log(data.content); // The quote text
      // console.log(data.author); // The author of the quote
    })
    .catch((error) => console.error("An error occurred:", error));
}

newQuoteButton.addEventListener("click", function(){
  getapi()
});
