console.log("Running...");
//create variables and select elements
const wiki_link = "https://en.wikipedia.org/wiki";
const randomEndpoint = "/Special:Random";

// select  elements
//Search term
//Search
//Output

const searchTerm = document.querySelector(".searchTerm");
const search = document.querySelector(".search");
const random = document.querySelector(".random");
const output = document.querySelector(".output");
const logo = document.querySelector(".logo");
logo.src = "../img/w1.jpg";

///function definitons
function wikiSearch() {
  console.log("clicked");
  const api_url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${
    searchTerm.value
  }&format=json&callback=?`;

  $.ajax({
    url: api_url,
    dataType: "json",
    success: data => {
      console.log(data);
      // data [1] Search Titles
      // data [2] is for description
      // data [3] is for links
      for (let i = 0; i < data.length; i++) {
        output.innerHTML += `<div class="card" <li> <a href = "${
          data[3][i]
        }">  ${data[1][i]}</a>  </li>
           <p> ${data[2][i]} </p>
           </div>
        `;
      }
    },
    error: error => {
      console.log(error);
    }
  });
}

//call functions and event listeners
search.addEventListener("click", wikiSearch);
random.addEventListener("click", function() {
  window.open(`${wiki_link}${randomEndpoint}`);
});
