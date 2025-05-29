// CARD ANIMATION
const cards = document.querySelectorAll(".card-animation");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show"); // RESET AS OUT OF SIGHT
      }
    });
  },
  {
    threshold: 0.2, // % NEEDED TO TRIGGER ANIMATION
  }
);

cards.forEach((card) => observer.observe(card));

// HEADER ROTATING CUBE

const apiKey = "5HhHvNYzcFIxoS1aQj4OuHcBljxsB2qX"; // 5HhHvNYzcFIxoS1aQj4OuHcBljxsB2qX  or  FuhrDPVzLFh29QtKi5XdpyGArQxzHdvH
const tag = "cute";

function loadGif(faceId) {
  
  fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}&rating=g`)
    .then((response) => response.json())
    .then((data) => {
      const gifUrl = data.data.images.downsized_large.url;
      document.getElementById(faceId).src = gifUrl;
    });
}

loadGif("img-front");
loadGif("img-back");
loadGif("img-right");
loadGif("img-left");
loadGif("img-top");
loadGif("img-bottom");


// GIFS IN PHONE

let gifs_data;
let changing_index = 0
let aggregate_height = 0
let velocity = 5 // pixels per second
let phone_width = 228
let phone_height = 412

// It's like a redstone clock
function LoadContent() {
  
for (let i=0; i<50; i++) {
      $('#api-content2').append(`<img class="phone-gifs" src='${gifs_data.data[i].images.original.url}' />`)
    }
  
  setTimeout(function() {
      $('.phone-gifs').each(function(index, item) {
        $(item).css('translate', '0% -7000px')
      })

  }, 50)
}

window.onload = (event) => {
  $('#api-content2').empty()
  $('#spawn2').remove()
  fetch('data.JSON')
    .then((response) => (response.json()))
    .then((data) => (gifs_data = data, LoadContent()))
}

