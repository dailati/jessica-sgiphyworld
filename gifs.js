// PATRICK'S CODE BELOW

/*              ____
        /   ___/# # \ 
3      O•   ___     /
        \      ````
*/

// API DISPLAY UI 3 (WE ARE CURRENTLY USING THIS) -[
const divisions = 4;
const lined_items = 10;
// ]

if (Date.now()-1747143873299 < 0) {
  localStorage.clear()
}

const gifs_per_section = 50



const download_svg = '<svg class="download_svg"  fill="white" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg" height="24" class="group-hover:scale-150 transition-transform m-auto [--stop-color-1:--giphy-white] [--stop-color-2:--giphy-white] group-hover:[--stop-color-1:--giphy-blue] group-hover:[--stop-color-2:--giphy-indigo]"><defs><linearGradient x1="0%" y1="10%" x2="0%" y2="90%" id="download-icon"><stop id="gradient-stop-1" offset="0%" stop-color="var(--stop-color-1)"></stop><stop id="gradient-stop-2" offset="100%" stop-color="var(--stop-color-2)"></stop></linearGradient></defs><path fill="url(#download-icon)" fill-rule="evenodd" clip-rule="evenodd" d="M17.5677 20H0.432318C0.311788 20 0.209673 19.9593 0.125971 19.8779C0.0422694 19.7965 0.000419076 19.6973 0.000419076 19.5801V17.0801C0.000419076 16.9694 0.0422694 16.8734 0.125971 16.792C0.209673 16.7106 0.311788 16.6699 0.432318 16.6699H17.5677C17.6882 16.6699 17.7903 16.7106 17.874 16.792C17.9577 16.8734 17.9996 16.9694 17.9996 17.0801V19.5801C17.9996 19.6973 17.9577 19.7965 17.874 19.8779C17.7903 19.9593 17.6882 20 17.5677 20ZM17.879 6.55273L9.31137 14.8828C9.19753 14.9609 9.09375 15 9 15C8.90625 15 8.80247 14.9609 8.68863 14.8828L0.120949 6.55273C0.00711451 6.44206 -0.026366 6.28581 0.020507 6.08398C0.0941647 5.91471 0.231434 5.83008 0.432318 5.83008H5.14304V0.419922C5.14304 0.302734 5.18489 0.203451 5.26859 0.12207C5.35229 0.0406896 5.45441 0 5.57494 0H12.4251C12.5456 0 12.6477 0.0406896 12.7314 0.12207C12.8151 0.203451 12.857 0.302734 12.857 0.419922V5.83008H17.5677C17.7686 5.83008 17.9058 5.91471 17.9795 6.08398C18.0264 6.28581 17.9929 6.44206 17.879 6.55273Z"></path></svg>'
const copy_link_svg = '<svg class="copy_link" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-7 group-hover:scale-150 transition-transform m-auto [--stop-color-1:--giphy-white] [--stop-color-2:--giphy-white] group-hover:[--stop-color-1:--giphy-green] group-hover:[--stop-color-2:--giphy-blue]"><defs><linearGradient x1="0%" y1="10%" x2="0%" y2="90%" id="link-icon"><stop id="gradient-stop-1" offset="0%" stop-color="var(--stop-color-1)"></stop><stop id="gradient-stop-2" offset="100%" stop-color="var(--stop-color-2)"></stop></linearGradient></defs><path fill="url(#link-icon)" d="M20.397 11.2546L17.5764 14.0751C17.674 13.0113 17.5374 11.9768 17.1665 10.9813L18.6402 9.47835C19.7724 8.33646 19.7724 6.49189 18.6402 5.35977C17.5081 4.22764 15.6635 4.22764 14.5217 5.35977L11.3986 8.45358C10.2664 9.61498 10.2664 11.44 11.3986 12.6014C11.9158 13.0797 11.9158 13.8702 11.3986 14.3582C10.9203 14.8462 10.1298 14.8462 9.64182 14.3582C7.54349 12.2306 7.54349 8.80493 9.64182 6.69684L12.7454 3.60303C14.873 1.46566 18.2986 1.46566 20.397 3.60303C22.5343 5.70135 22.5343 9.127 20.397 11.2546ZM14.3655 17.2958L11.2424 20.4189C9.13432 22.527 5.70867 22.527 3.58107 20.4189C1.47298 18.2913 1.47298 14.8657 3.58107 12.7576L6.43089 9.91753C6.33329 10.9813 6.46993 12.0451 6.8408 13.0406L5.36709 14.5143C4.23496 15.6562 4.23496 17.5008 5.36709 18.6329C6.49921 19.765 8.34378 19.765 9.48567 18.6329L12.5795 15.5391C13.7409 14.407 13.7409 12.5526 12.5795 11.4205C12.0915 10.9325 12.0915 10.1225 12.5795 9.6345C13.0675 9.14652 13.8775 9.14652 14.3655 9.6345C16.4638 11.7621 16.4638 15.1878 14.3655 17.2958Z"></path></svg>'
const follow_svg = '<svg class="follow_svg"  viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="group-hover:scale-150 transition-transform m-auto [--stop-color-1:--giphy-white] [--stop-color-2:--giphy-white] group-hover:[--stop-color-1:--giphy-red] group-hover:[--stop-color-2:--giphy-pink]"><defs><linearGradient x1="0%" y1="10%" x2="0%" y2="90%" id="BYoRqTmcgzHcL9TCy1-favorite"><stop id="gradient-stop-1" offset="0%" stop-color="var(--stop-color-1)"></stop><stop id="gradient-stop-2" offset="100%" stop-color="var(--stop-color-2)"></stop></linearGradient></defs><path fill="url(#BYoRqTmcgzHcL9TCy1-favorite)" fill-rule="evenodd" clip-rule="evenodd" d="M18.9307 11.9353L11.3231 19.8661C11.2015 19.9554 11.0906 20 10.9904 20C10.8545 20 10.7436 19.9554 10.6578 19.8661L3.05013 11.9353C2.1631 11.0132 1.46386 10.0707 0.952383 9.10764C0.440911 8.14463 0.136893 7.22997 0.0403214 6.36364C-0.0562504 5.4973 0.0206483 4.6756 0.271019 3.8985C0.521391 3.1214 0.939862 2.43168 1.52645 1.82934C2.28471 1.04108 3.17352 0.507532 4.19289 0.228668C5.21225 -0.0501953 6.23161 -0.0501953 7.25098 0.228668C8.27034 0.507532 9.15915 1.04108 9.91741 1.82934C10.3395 2.26808 10.6971 2.76259 10.9904 3.31288C11.2837 2.76259 11.6414 2.26808 12.0634 1.82934C12.8217 1.03365 13.7105 0.494518 14.7299 0.211936C15.7493 -0.0706455 16.7704 -0.0706455 17.7933 0.211936C18.8163 0.494518 19.7105 1.03365 20.4759 1.82934C21.2556 2.6399 21.7385 3.5843 21.9244 4.66258C22.1104 5.74085 21.9531 6.91578 21.4523 8.1874C20.9516 9.45901 20.1111 10.7083 18.9307 11.9353Z"></path></svg>'
const exit_out_svg = '<svg id="managed-icon__close-thin" fill="var(--icon-color-primary, #ffffff)" viewBox="0 0 16 16" style="pointer-events: none;"><path d="M9.527 8l6.164-6.188a1.066 1.066 0 0 0 0-1.5 1.053 1.053 0 0 0-1.495 0L8 6.531 1.805.311a1.053 1.053 0 0 0-1.495 0 1.064 1.064 0 0 0 0 1.5L6.473 8 .31 14.188a1.064 1.064 0 0 0 0 1.501 1.052 1.052 0 0 0 1.495 0L8 9.47l6.195 6.22a1.052 1.052 0 0 0 1.495 0 1.066 1.066 0 0 0 0-1.5L9.527 8z" style=""></path></svg>'
const it_do_go_down = '<svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394  l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393  C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/></svg>'

let gifs_data;
let segments = 3
let gap_value = 10
let some_data;

let gifs_per_segment = Math.round(gifs_per_section/segments)


// Sets the number of columns based on window width
window.onload = (x) => {
    if (document.documentElement.clientWidth > 1200) {
        segments = 4

    } else if (document.documentElement.clientWidth > 992) {
        segments = 3

    } else if (document.documentElement.clientWidth > 576)  {
        segments = 2

    }
    gifs_per_segment = Math.round(gifs_per_section/segments)

}

// Changes the number of columns based on window width
window.addEventListener('resize', function (x, y) {
    if (document.documentElement.clientWidth > 1200) {
        $('#api-content3').empty()
        segments = 4
        LoadContent2()
      
    } else if (document.documentElement.clientWidth > 992) {
        $('#api-content3').empty()
        segments = 3
        LoadContent2()

    } else if (document.documentElement.clientWidth > 576)  {
        $('#api-content3').empty()
        segments = 2
        LoadContent2()

    }
    gifs_per_segment = Math.round(gifs_per_section/segments)

})

// Resposible for loading the images in api-content3
function LoadContent2() {
  
  // $('#it-do-go-down').on('click', function() {
  //   window.scrollTo(0, 0, 'smooth')
  // })
  $('.spinimage').on('click', function() {
    window.scrollTo(0, 0, 'smooth')

  })
  
    $('#api-content3').css('gap', `${gap_value}px`)
    for (let a = 0; a < segments; a++) {
        $('#api-content3').append(`<div style="gap: ${gap_value}px" class="api-segments"></div>`)
    }    

    for (let i = 0; i < gifs_per_section; i++) {
        $($('#api-content3').children()[i%segments]).append(`<img id='i-${i}' class='media-elements' src='${gifs_data.data[i].images.original.url}' />`)
    }
  
    // new screen gets created when the user clicks on a gif
    function execute(event) {
      
              console.log(gifs_data)
      $('body').addClass('no-scroll')
      
        let choosen_gif;
        let index;
        let gif_sub_data;
      
        if (!event.target) {
          gif_sub_data = event
        } else {
           choosen_gif = event.target
           index = $(choosen_gif).attr('id').split('-')[1]
           gif_sub_data = gifs_data.data[index]
        }

        let gif_url = gif_sub_data.images.original.url
        
        let avatar_url;
        let profile_url;
        let username;
        let display_name;
        let description;
      
        // div placeholders are created (gif_details, overlay)
        let gif_details;
      
        // if the gif's data doesn't contain certain information
        if (gif_sub_data.user) {
          // no description
             avatar_url = gif_sub_data.user.avatar_url || 'https://cdn.glitch.global/5bc91e3e-6ff2-41a1-8693-14aa8f6fdb42/240_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg?v=1746441391502'
             profile_url = gif_sub_data.user.profile_url || ''
             username = gif_sub_data.user.username || ''
             display_name = gif_sub_data.user.display_name || ''
             description = gif_sub_data.user.description || 'Description is not available'

            gif_details = `<div class='gif-details'>
                                <div class='sub-profile-details'>
                                    <img class='avatar-link' class='creator-profile' src='${avatar_url}' />
                                    <div>
                                        <h2 class='display-name'>${display_name}</h2>
                                        <a class='username' target="_blank" href='${profile_url}' ><div>@${username}</div></a>
                                    </div>
                                </div>
                                <div class='gif-description'>${description}</div>
                            </div>`
            
        } else {
          // no user
             avatar_url = 'https://cdn.glitch.global/5bc91e3e-6ff2-41a1-8693-14aa8f6fdb42/240_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg?v=1746441391502'
             profile_url = ''
             username = ''
             display_name = ''
             description = 'Description is not available'

            gif_details = `<div class='gif-details'>
                                <div class='sub-profile-details'>
                                    <img class='avatar-link' class='creator-profile' src='${avatar_url}' />
                                    <div>
                                        <h2 class='display-name'>${display_name}</h2>
                                        <a class='username' target="_blank" href='${profile_url}' ><div>@${username}</div></a>
                                    </div>
                                </div>
                                <div class='gif-description'>${description}</div>
                            </div>`
        }
      
        // Checks client's viewwidth to decide how the selected gif will be displayed
        let overlay;
        if(document.documentElement.clientWidth < 1) {
          // version 1
          // overlay =   `<div style='top: calc(${window.scrollY}px);' class="api-overlay">
          //                 <div style='top: 60px' class='exit-out'>${exit_out_svg}</div>
          //                 <div class='gif-container'>
          //                   <div class="overlay-left-section">
          //                       ${gif_details || ''}
          //                       <div class='interactive-icons'>
          //                           ${follow_svg}
          //                           ${copy_link_svg}
          //                           <a href="${gif_url}" target="_blank">${download_svg}</a>
          //                       </div>
          //                   </div>
          //                 </div>
          //             </div>`
          // overlay =   `<div style='top: calc(${window.scrollY}px);' class="api-overlay">
          //                 <div style='top: 60px' class='exit-out'>${exit_out_svg}</div>
          //                 <div class='gif-container'></div>
          //                 <div class='extra-stuff'>
          //                   <div class='protruding-section'></div>
          //                   <div class='hidden-section'>
          //                     ${gif_details || ''}
          //                     <div class='interactive-icons'>
          //                         ${follow_svg}
          //                         ${copy_link_svg}
          //                         <a href="${gif_url}" target="_blank">${download_svg}</a>
          //                     </div>
          //                   </div>
          //                 </div>
          //             </div>`
          overlay =   `<div style='top: calc(${window.scrollY}px);' class="api-overlay">
                          <div class='gif-container'>
                            <div class="overlay-left-section">
                                ${gif_details || ''}
                                <div class='interactive-icons'>
                                    ${follow_svg}
                                    ${copy_link_svg}
                                    <a href="${gif_url}" target="_blank">${download_svg}</a>
                                </div>
                            </div>
                          </div>
                      </div>`
  
          $('.absolute-holder').append(overlay)
          $('.gif-container')   .append(`<div class='gif-img-holder' style='background-image: url(${gif_url})'></div>`)

        } else {
          // version 2
          
          // overlay = `  <div class="api-overlay" style='top: calc(${window.scrollY}px); align-items: flex-end; background-color: rgba(0,0,0,0)'>
          //               <div class='gif-container' style='transform: translate(0%, 50%); opacity: 0;'></div> 
          //             </div>`;
          overlay = `  <div class="api-overlay" style='top: calc(${window.scrollY}px); align-items: flex-end; background-color: rgba(0,0,0,0)'>

                        <div class='all-the-stuff' style='translate: 0% 50%; opacity: 0;'>
                          <div class='gif-container'></div> 
                          <div class='extra-stuff'>
                            ${gif_details || ''}
                            <div class='interactive-icons'>
                              ${follow_svg}
                              ${copy_link_svg}
                              <a href="${gif_url}" target="_blank">${download_svg}</a>
                            </div>
                          </div>
                        </div>
                        
                      </div>`;
          
          $('.absolute-holder').append(overlay);
          // $($('.side-section')[0]).clone().addClass('overlay2-left-section').css('height', 'calc(100% - 60px)').css('transform', 'translate(-100%)').prependTo('.api-overlay');
          // $($('.side-section')[0]).clone().addClass('overlay2-right-section').css('height', 'calc(100% - 60px)').css('transform', 'translate(100%)').appendTo('.api-overlay');
          $($('.side-section')[0]).clone().addClass('overlay2-left-section').css('height', 'calc(100% - 60px)').css('translate', '-100%').prependTo('.api-overlay');
          $($('.side-section')[0]).clone().addClass('overlay2-right-section').css('height', 'calc(100% - 60px)').css('translate', '100%').appendTo('.api-overlay');
          // my apologies dw ily ╭( ๐_๐)╮
          
          $('.interactive-icons').css('position', 'absolute').css('right', '0px')
          
          $('.overlay2-left-section')
                                            .css('left', '0px')
                                            .css('position', 'absolute')
                                            .css('top', '60px')
                                            .promise()
                                            .done(function() {
                                            });

                                    
          
          $('.overlay2-right-section').css('left', 'calc(calc(calc(100vw - var(--api-width)) / 2) + var(--api-width))')
                                      .css('top', '60px')
                                      .css('position', 'absolute')
                                      .promise()
                                      .done(function() {
                                      });

          $('.gif-container')   .append(`<div class='gif-img-holder' style='background-image: url(${gif_url})'></div>`)
                              .css('cursor', 'pointer')
                              .css('width', '100%')
                              .css('height', '70%')
                              .addClass('hover-delete-opt')
                              // .append(`<div style='transition: all .4s; opacity: 0; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 17.5%;' class='exit-out'>${exit_out_svg}</div>`)
                              .append(`<div style='transition: all .4s; opacity: 0; top: 50%; left: 50%; translate: -50% -50%; width: 17.5%;' class='exit-out'>${exit_out_svg}</div>`)
                              .css('position', 'relative')
                              .promise()
                              .done(function() {
                                let dsadsa = Date.now()
                                setTimeout(() => {
                                  console.log(Date.now() - dsadsa, 'app')
                                  // $('.overlay2-left-section').css('transform', 'translate(0%)')
                                  // $('.overlay2-right-section').css('transform', 'translate(0%)')
                                  // $('.gif-container').css('transform', 'translate(0%, 0%)')
                                  $('.overlay2-left-section').css('translate', '0%')
                                  $('.overlay2-right-section').css('translate', '0%')
                                  $('.all-the-stuff').css('translate', '0% 0%')
                                  $('.all-the-stuff').css('opacity', '1')
                                }, 50)
                              });
          
          
          $('.gif-img-holder').css('width', '100%').css('max-height', '100%');
          
          
          
        }
      
      // Adds gifs to local storage (cookies)
      let array = [];
      $('.follow_svg').on('click', function() {
        
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
        console.log(array, gif_sub_data.toString())
        array.push({text: $(".gif-search-bar").val(),images:{original:{url:gif_url}}, user:{avatar_url:avatar_url, profile_url:profile_url, username:username, display_name:display_name, description:description}})
        console.log(array)
        localStorage.setItem("TO_FAVS//val_from_nav_gifs", JSON.stringify(array));

      })


        // deletes all created elements summouned upon a click on a gif
      
        // version 1
        $('.api-overlay').click(function(x) {
                              if (x.target == this || x.target == $('.exit-out')[0]) {
                                $('body').removeClass('no-scroll')

                                
                                  $('.api-overlay').remove()

                                
                                
                              }

                          })
      
        // version 2
        $('.hover-delete-opt')
          .on('mouseover', function() {
          $('.exit-out').css('opacity', '1');
          $('.gif-img-holder').css('opacity', '.6')
          
        })
          .on('mouseout', function() {
          $('.exit-out').css('opacity', '0')
          $('.gif-img-holder').css('opacity', '1')

        })
          .on('click', function() {
          $('.all-the-stuff').css('transform', 'translate(0, 50%)').css('opacity', '0')
          $('.overlay2-left-section').css('transform', 'translate(-100%)')
          $('.overlay2-right-section').css('transform', 'translate(100%)')
          setTimeout(function() {
            $('.api-overlay').remove()
          },250)
          $('body').removeClass('no-scroll')
        })

        // js for the interactive buttons
        $('.copy_link').click(function () {
            navigator.clipboard.writeText(gif_url)
        })
      
        let orig_desc_height = $('.gif-description').css('max-height')
        $('.gif-description').click(function(){
            if ($(this).css('max-height') != 'none') {
                $(this).css('max-height', 'none') 
            } else {
                $(this).css('max-height', orig_desc_height)
            }
        })
        
      
      
        if ($('.overlay2-left-section')) {
          

          }


    }
  
    $('.media-elements').click(function (event, sub_data) { 
      execute(event)
    })
    if (some_data) {
      execute(some_data)
      some_data = null;
    }
  
}




// This block of code is whenever the user inputs text in the searchbar
async function ReloadImages(text) {
  let url_search = `https://api.giphy.com/v1/gifs/search?api_key=i81xvgs2ZjGZNV5u3LyVjxm85Ufww4Bh&q=${text}&limit=50&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  $("#api-content3").empty();
  console.log(url_search)

  fetch(url_search)
    .then((response) => (response.json()))
    .then((data) => (gifs_data = data, LoadContent2()))

}

//Retrives Necessary Cookies
let cookie_parameters = ['']
window.addEventListener("load", function () {
  Object.keys(localStorage).forEach((item) => {
    if (item.includes("TO_GIFS")) {
      if (item.includes('new_window')) {
        let value = localStorage.getItem(item);
        some_data = JSON.parse(value)
        $(".gif-search-bar").val(some_data.text)
        ReloadImages(some_data.text)
        localStorage.removeItem(item);
        $('.gif-background').css('height', '15vh')


        
      }
      if (item.includes('nav_search')) {
      let value = localStorage.getItem(item);
      $(".gif-search-bar").val(value);
      ReloadImages(value);
      localStorage.removeItem(item);
      $('.gif-background').css('height', '15vh')
        
      }

    }
  });
});

// This code contain events that make the UI interactive
window.addEventListener("load", function () {
  $(".gif-search-bar").on("keyup", function (e) {
    if (e.key === "Enter" || e.keyCode === 13) {
      $('.gif-background').css('height', '15vh')
      // $('.gif-search-div').css('top', '15vh')
      ReloadImages(this.value);
    }
  });

  $(".gif-search-img").click(function () {
    $('.gif-background').css('height', '15vh')
    ReloadImages($(".gif-search-bar").val());
  });
});


  
