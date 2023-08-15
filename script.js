const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const moiveBox = document.querySelector("#movie-box");

const searchmovie = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  showmovies(data);
};
searchmovie(APIURL);
const showmovies = (data) => {
  moiveBox.innerHTML = "";
  data.results.forEach((val) => {
    console.log(data.results);
    const img =
      val.poster_path === null
        ? "img/image-missing.png"
        : IMGPATH + val.poster_path;
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
    <img src="${img}" alt="" />
    <div class="overlay">
          <h2>${val.title}</h2>
          <span>${val.vote_average}</span>
          <h3>${val.overview}</h3>
        
    </div>
     
    
    `;
    moiveBox.appendChild(box);
  });
};
// const box = `
// <div class="box">
//     <img src="${IMGPATH+result}" alt="" />
//     <div class="overlay">
//         <h2>Overview:</h2>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis iste doloribus quam voluptatum, illum unde nostrum dignissimos, mollitia, sapiente porro natus neque cupiditate distinctio quod possimus aliquid reiciendis vel. Soluta?
//     </div>
// </div>
// `
// searchmovie(APIURL);
const find = document.querySelector("#search");
find.addEventListener("keyup", (event) => {
  if (event.target.value != "") {
    searchmovie(SEARCHAPI + event.target.value);
  } else {
    searchmovie(APIURL);
  }
});
