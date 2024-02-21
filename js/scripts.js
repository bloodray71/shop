

  /*Menu */
  const butn = document.querySelector(".dropbtn")
  butn.addEventListener("click", function(){
    const subMenu =document.querySelector(".drop-menu")
    console.log(butn);
    butn.classList.toggle('sub-menu-open')
    subMenu.classList.toggle('active-menu')
  })
  /*End menu */

/* 9 */
document.querySelectorAll('.show-btn-div').forEach(e =>{
  e.addEventListener('click',e =>{
    const menu=e.currentTarget.dataset.path
    document.querySelectorAll('.show-btn-div').forEach(e =>{
      if(!document.querySelector(`[data-target=${menu}]`).classList.contains("text-show-btn-open")){
           intervalId=setTimeout(() =>{ 
            document .querySelector(`[data-target=${menu}]`).classList.add('text-show-btn-open')
      },0)
      }
      if(document.querySelector(`[data-target=${menu}]`).classList.contains("text-show-btn-open")){
           intervalId=setTimeout(() =>{ 
            document .querySelector(`[data-target=${menu}]`).classList.remove('text-show-btn-open')
      },0)
      }
    })
  })
})
/*End question btn */



/* quick selection*/
document.querySelectorAll('.category-big').forEach(e =>{
  e.addEventListener('click',e =>{
    const menu=e.currentTarget.dataset.path
    document.querySelectorAll('.category-big').forEach(e =>{
      if(!document.querySelector(`[data-target=${menu}]`).classList.contains("sub-category-conteiner-active")){
           intervalId=setTimeout(() =>{ 
            document .querySelector(`[data-target=${menu}]`).classList.add('sub-category-conteiner-active')
      },0)
      }
      if(document.querySelector(`[data-target=${menu}]`).classList.contains("sub-category-conteiner-active")){
           intervalId=setTimeout(() =>{ 
            document .querySelector(`[data-target=${menu}]`).classList.remove('sub-category-conteiner-active')
      },0)
      }
    })
  })
})
const buttons = document.querySelectorAll('.sub-category')
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('sub-category-active')
    })
  })
  const buttons1 = document.querySelectorAll('.category-big')
  buttons1.forEach(button1 => {
    button1.addEventListener('click', () => {
      button1.classList.toggle('sub-category-active')
    })
  })
/*End quick selection */
/*Menu */

/*End menu */
/*filtr button */
document.querySelectorAll('.filter-button').forEach(e =>{
  e.addEventListener('click',e =>{
    const menu=e.currentTarget.dataset.path
    document.querySelectorAll('.filter-button').forEach(e =>{
      if(!document.querySelector(`[data-target=${menu}]`).classList.contains("text-show-btn-open")){
           intervalId=setTimeout(() =>{ 
            document .querySelector(`[data-target=${menu}]`).classList.add('text-show-btn-open')
      },0)
      }
      if(document.querySelector(`[data-target=${menu}]`).classList.contains("text-show-btn-open")){
           intervalId=setTimeout(() =>{ 
            document .querySelector(`[data-target=${menu}]`).classList.remove('text-show-btn-open')
      },0)
      }
    })
  })
})
/*End filtr button */

const hamb = document.querySelector("#hamb");
        const popup = document.querySelector("#popup");
        const body = document.body;

        const menu = document.querySelector("#menu").cloneNode(1);

        hamb.addEventListener("click", hambHandler);

        function hambHandler(e) {
            e.preventDefault();
            popup.classList.toggle("open");
            hamb.classList.toggle("active");
            body.classList.toggle("noscroll");
            renderPopup();
        }

        function renderPopup() {
            popup.appendChild(menu);
        }
