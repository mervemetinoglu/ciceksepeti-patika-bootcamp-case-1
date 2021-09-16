const containerDOM = document.querySelector(".container");
const gridDOM = document.querySelector(".grid");
const searchBar = document.querySelector("#search_input");

const postsAPI = "https://jsonplaceholder.typicode.com/posts";
const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
};

let posts = [];

const searchData = (data) => {
  searchBar.addEventListener("keyup", (e) => {
    let searchInput = e.target.value;
    searchInput = searchInput.toLowerCase();

    const filteredPosts = data.filter(
      (item) =>
        item.title.includes(searchInput) || item.body.includes(searchInput)
    );

    gridDOM.innerHTML = "";
    displayCards(filteredPosts);
  });
};

// Get mock data from api
const getData = (postsAPI, options) => {
  const data = fetch(postsAPI, options)
    .then((res) => res.json())
    .then((data) => {
      displayCards(data);
      searchData(data);
    })
    .catch((error) => console.log({ error }));
};

// Create and display grid layout in html
const displayCards = (data) => {
  // const dom = document.createElement("div");
  // dom.classList.add("grid");

  const htmlStringCard = data
    .filter((item, index) => index < 10)
    .map((item, index) => {
      let random = Math.floor(Math.random());

      return `
            <div class="grid__item">
                <div class="grid__item-img">
                    <img
                    src="
                    https://source.unsplash.com/random/300x200?sig=${
                      random + index
                    }"/>
                </div>
                <div class="grid__item-body">
                    <h2>${item.title}</h2>
                    <p>${item.body}</p>
                </div>
          </div>
    `;
    })
    .join("");

  gridDOM.innerHTML = htmlStringCard;
  containerDOM.appendChild(gridDOM);
};

getData(postsAPI, options);
