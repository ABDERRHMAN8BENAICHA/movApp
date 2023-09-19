let  btn = document.getElementById("btn");
let  inp = document.getElementById("inp");
let  resolte = document.getElementById("resolte");
let continer = document.querySelector(".continer")


const APIKEY = "566b5618";

btn.addEventListener("click",()=> {
  getMOve();
})

function getMOve () {
  if (inp.value === "") {
    resolte.innerHTML = `
      <h3>Movie not found!</h3>
    `;
    continer.style.minHeight = "20%";
    resolte.style.padding ="20px";
  } else {
    const moveName= inp.value;
    let URL =`https://www.omdbapi.com/?t=${moveName}&apiKey=${APIKEY}`;
    fetch(URL).then(response => response.json()).then(json => {
      if (json.Response == "False") {
        continer.style.minHeight = "20%";
        resolte.style.padding = "20px";
        resolte.innerHTML = `<h3>Movie not found!!!</h3>`
      } else {
        resolte.innerHTML = `
        <div class="head">
            <div class="images">
                <img src="${json.Poster}" alt="">
            </div>
            <div class="info">
                <h2>${json.Title}</h2>
                <div id="stars">
                    <i class="fa-solid fa-star" style="color: #fdb743;"></i>
                    <span>${json.imdbRating}</span>
                </div>
                <div id="info-data"><span>${json.Rated}</span><span>${json.Year}</span><span>${json.Runtime}</span></div>
                <div id="catigory">
                    <span>${json.Genre.split(",")[0]}</span>
                    <span>${json.Genre.split(",")[1]}</span>
                    <span>${json.Genre.split(",")[2]}</span>
                </div>
            </div>
        </div>
        <div id="foter">
            <div id="plot">
                <h2>plot:</h2>
                <p>${json.Plot}</p>
            </div>
            <div id="cast">
                <h2>cast:</h2>
                <p>${json.Actors}</p>
            </div>
        </div>
        `;
      }
    })
  }
}
