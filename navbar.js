const searchBar = document.getElementById("searchBar");
const getThatCookie = document.getElementById("getThatCookie");
console.log(getThatCookie)
function showSearch() {
  searchBar.classList.toggle("show");
}
let yes = true;

if (getThatCookie == null) {
  
} else {
  (function (){
  getThatCookie.addEventListener("keypress", function (x) {
    console.log(x)
    if (x.key == "Enter") {
      console.log("hii")
      localStorage.setItem("TO_GIFS//val_from_nav_search", this.value);
      window.location.href = "gifs.html";
    }
  })
})();
}


console.log("ran")

document.querySelector('.nav-heart').addEventListener('click', function() {
  console.log('wokring')
  if (document.querySelector('.mini-window')) {
    document.body.removeChild(document.querySelector('.mini-window'))
    return
  }
  let new_div = document.createElement('div')
  new_div.classList.add('mini-window')
  let up_section = document.createElement('div')
  up_section.classList.add('at-up')
  let down_section = document.createElement('button')
  down_section.classList.add('at-down')
  down_section.innerText = 'DELETE?'
  
  down_section.addEventListener('click', function(){
    if (up_section.style.cursor == 'crosshair') {
      up_section.style.cursor = 'pointer'
      yes = true
    } else {
      up_section.style.cursor = 'crosshair'
      yes = false
      
    }
    
  });
  up_section.addEventListener('click', function ExpansionMode(x) {
    console.log(this.children)
    if (!yes) {return}
    localStorage.setItem("TO_GIFS//val_from_new_window", JSON.stringify(array[x.target.classList.value.match(new RegExp(/\d+/g))[0]]));
    window.location.href = "gifs.html";
  });
  up_section.addEventListener('click', function DeletionMode(x) {
    console.log(this.children)
      if (yes) {return}
        if(x.target.tagName === 'IMG') {     
          let index = Number(x.target.classList.value.match(new RegExp(/\d+/g))[0])
          x.target.remove()
                    
          array = array.toSpliced(index,1)
          
          Object.values(document.querySelector('.at-up').children).slice(index).forEach((item) => {
            
            let prevClass = item.classList.value.match(new RegExp(/ss\d+/g))[0]
            item.classList.remove(prevClass)
            item.classList.add(`ss${index}`)
            index ++
            
          }) 
          console.log("hi")
          localStorage.setItem("TO_FAVS//val_from_nav_gifs", JSON.stringify(array));
          
        }
      });
  let array = [];
    Object.keys(localStorage).forEach((item) => {
      if (item.includes("TO_FAVS")) {
        const setArray = () => {
          let itemsArray;

          if (localStorage.getItem(item) == null) {

            itemsArray = [];
          } else {
            itemsArray = JSON.parse(localStorage.getItem(item));
          }
          return itemsArray;
        };

        array = setArray();

      }
    });
    $.each(array, (index, gif) => {
      console.log(index, gif)
      let new_img = document.createElement('img')
      new_img.src = gif.images.original.url
      new_img.classList.add('gifs-in-at-up', `ss${index}`)
      
      console.log(new_img)
      
      up_section.append(new_img)
    })
    

  
  
  new_div.append(up_section)
  new_div.append(down_section)
  console.log(new_div)
  new_div.style.top = `${document.querySelector('.nav-heart').getBoundingClientRect().top + 60}px`
  new_div.style.left = `calc(${document.querySelector('.nav-heart').getBoundingClientRect().left - (75) + (document.querySelector('.nav-heart').clientHeight/2)}px - .5%)`
  document.body.append(new_div)
  

})
