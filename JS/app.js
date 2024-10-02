// scroll header 

function scrollHeader (){

    const nav = document.getElementById("header")
    
    if(scrollHeader >= 50){
        nav.classList.add("active-header");
    }else {
        nav.classList.remove("active-header")
    }
}

window.addEventListener('scroll', scrollHeader);


// show menu bx active 

const showMenu = (toogleId, navId) =>{

    const toogle = document.getElementById(toogleId);
    const nav = document.getElementById(navId);

    //validação com if 
    if(toogle && nav){
        toogle.addEventListener('click', () =>{
            //nos add show menu aqui atraves da class
            
            nav.classList.toggle('active-menu-mobile');
            toogle.classList.toggle('active-bx');
            
        })
    }
}

showMenu('bx', 'menu-mobile');


// dropdown Menu 

const dropdownMenu1 = document.getElementById('dropdown-item-1');
const dropdownMenu2 = document.getElementById('dropdown-item-2');
const dropdownMenu3 = document.getElementById('dropdown-item-3');
const dropdownMenu4 = document.getElementById('dropdown-item-4');
const dropdownMenu5 = document.getElementById('dropdown-item-5');




// Menu-Items


const menuItem1 = document.getElementById('menu-item-1');
const menuItem2 = document.getElementById('menu-item-2');
const menuItem3 = document.getElementById('menu-item-3');
const menuItem4 = document.getElementById('menu-item-4');
const menuItem5 = document.getElementById('menu-item-5');




// drop nos menus

function showDropdown1(e){

    e.preventDefault();
    dropdownMenu1.classList.toggle("active-dropdown-menu");
    dropdownMenu2.classList.remove("active-dropdown-menu");
    dropdownMenu3.classList.remove("active-dropdown-menu");
    dropdownMenu4.classList.remove("active-dropdown-menu");
    dropdownMenu5.classList.remove("active-dropdown-menu");

}



function showDropdown2(e){

    e.preventDefault();
    dropdownMenu1.classList.remove("active-dropdown-menu");
    dropdownMenu2.classList.toggle("active-dropdown-menu");
    dropdownMenu3.classList.remove("active-dropdown-menu");
    dropdownMenu4.classList.remove("active-dropdown-menu");
    dropdownMenu5.classList.remove("active-dropdown-menu");

}


function showDropdown3(e){

    e.preventDefault();
    dropdownMenu1.classList.remove("active-dropdown-menu");
    dropdownMenu2.classList.remove("active-dropdown-menu");
    dropdownMenu3.classList.toggle("active-dropdown-menu");
    dropdownMenu4.classList.remove("active-dropdown-menu");
    dropdownMenu5.classList.remove("active-dropdown-menu");

}

function showDropdown4(e){

    e.preventDefault();
    dropdownMenu1.classList.remove("active-dropdown-menu");
    dropdownMenu2.classList.remove("active-dropdown-menu");
    dropdownMenu3.classList.remove("active-dropdown-menu");
    dropdownMenu4.classList.toggle("active-dropdown-menu");
    dropdownMenu5.classList.remove("active-dropdown-menu");

}

function showDropdown5(e){

    e.preventDefault();
    dropdownMenu1.classList.remove("active-dropdown-menu");
    dropdownMenu2.classList.remove("active-dropdown-menu");
    dropdownMenu3.classList.remove("active-dropdown-menu");
    dropdownMenu4.classList.remove("active-dropdown-menu");
    dropdownMenu5.classList.toggle("active-dropdown-menu");

}



// eventos no Menus 


menuItem1.addEventListener('click', showDropdown1);
menuItem2.addEventListener('click', showDropdown2);
menuItem3.addEventListener('click', showDropdown3);
menuItem4.addEventListener('click', showDropdown4);
menuItem5.addEventListener('click', showDropdown5);

//remove 

dropdownMenu1.addEventListener('mouseleave', removeDropdown);
dropdownMenu2.addEventListener('mouseleave', removeDropdown);
dropdownMenu3.addEventListener('mouseleave', removeDropdown);
dropdownMenu4.addEventListener('mouseleave', removeDropdown);
dropdownMenu5.addEventListener('mouseleave', removeDropdown);


function removeDropdown(){
    dropdownMenu1.classList.remove('active-dropdown-menu');
    dropdownMenu2.classList.remove('active-dropdown-menu');
    dropdownMenu3.classList.remove('active-dropdown-menu');
    dropdownMenu4.classList.remove('active-dropdown-menu');
    dropdownMenu5.classList.remove('active-dropdown-menu');
    
}




//dorp down menu mobile 




const dropMobileI = document.getElementById('dropdown-item-mobile-1');
const dropMobileII = document.getElementById('dropdown-item-mobile-2');
const dropMobileIII = document.getElementById('dropdown-item-mobile-3');
const dropMobileIV = document.getElementById('dropdown-item-mobile-4');
const dropMobileV = document.getElementById('dropdown-item-mobile-5');


//menu-mobile-itens
const menuMobile1 = document.getElementById('menu-item-mobile-1');
const menuMobile2 = document.getElementById('menu-item-mobile-2');
const menuMobile3 = document.getElementById('menu-item-mobile-3');
const menuMobile4 = document.getElementById('menu-item-mobile-4');
const menuMobile5 = document.getElementById('menu-item-mobile-5');




function dropMobile1 (e){
    e.preventDefault();

    dropMobileI.classList.toggle('active-dropdown-menu-mobile');
    dropMobileII.classList.remove('active-dropdown-menu-mobile');
    dropMobileIII.classList.remove('active-dropdown-menu-mobile');
    dropMobileIV.classList.remove('active-dropdown-menu-mobile');
    dropMobileV.classList.remove('active-dropdown-menu-mobile');
    
}


function dropMobile2 (e){
    e.preventDefault();

    dropMobileI.classList.remove('active-dropdown-menu-mobile');
    dropMobileII.classList.toggle('active-dropdown-menu-mobile');
    dropMobileIII.classList.remove('active-dropdown-menu-mobile');
    dropMobileIV.classList.remove('active-dropdown-menu-mobile');
    dropMobileV.classList.remove('active-dropdown-menu-mobile');
    
}

function dropMobile3 (e){
    e.preventDefault();

    dropMobileI.classList.remove('active-dropdown-menu-mobile');
    dropMobileII.classList.remove('active-dropdown-menu-mobile');
    dropMobileIII.classList.toggle('active-dropdown-menu-mobile');
    dropMobileIV.classList.remove('active-dropdown-menu-mobile');
    dropMobileV.classList.remove('active-dropdown-menu-mobile');
    
}

function dropMobile4 (e){
    e.preventDefault();

    dropMobileI.classList.remove('active-dropdown-menu-mobile');
    dropMobileII.classList.remove('active-dropdown-menu-mobile');
    dropMobileIII.classList.remove('active-dropdown-menu-mobile');
    dropMobileIV.classList.toggle('active-dropdown-menu-mobile');
    dropMobileV.classList.remove('active-dropdown-menu-mobile');
    
}

function dropMobile5 (e){
    e.preventDefault();

    dropMobileI.classList.remove('active-dropdown-menu-mobile');
    dropMobileII.classList.remove('active-dropdown-menu-mobile');
    dropMobileIII.classList.remove('active-dropdown-menu-mobile');
    dropMobileIV.classList.remove('active-dropdown-menu-mobile');
    dropMobileV.classList.toggle('active-dropdown-menu-mobile');
    
}




menuMobile1.addEventListener('click', dropMobile1);
menuMobile2.addEventListener('click', dropMobile2);
menuMobile3.addEventListener('click', dropMobile3);
menuMobile4.addEventListener('click', dropMobile4);
menuMobile5.addEventListener('click', dropMobile5);





//swiper

/*
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
*/

/*


  const swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    keyboard: true,
  })

*/

  // auto slide 

/*
  let slideIndex = 0;

  showSlides();



  function showSlides() {
    let slides = document.getElementsByClassName("slidesV");

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";

    }

    slideIndex++;

    if(slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 5000); // muda de imagem a cada 4 segundo
  }

  */
  






const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let intervalTime = 5000; // 5 segundos
let slideInterval;

// Função para avançar automaticamente os slides
function startAutoplay() {
  slideInterval = setInterval(() => {
    showSlide(currentIndex + 1);
  }, intervalTime);
}

// Função para parar o autoplay (útil ao clicar nas setas)
function stopAutoplay() {
  clearInterval(slideInterval);
}

document.querySelector('.next').addEventListener('click', () => {
  stopAutoplay(); // Para o autoplay ao clicar na seta
  showSlide(currentIndex + 1);
  startAutoplay(); // Reinicia o autoplay
});

document.querySelector('.prev').addEventListener('click', () => {
  stopAutoplay(); // Para o autoplay ao clicar na seta
  showSlide(currentIndex - 1);
  startAutoplay(); // Reinicia o autoplay
});

function showSlide(index) {
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  const newTransformValue = -currentIndex * 100;
  document.querySelector('.slides').style.transform = `translateX(${newTransformValue}%)`;

  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentIndex].classList.add('active');
}

// Iniciar o slider no primeiro slide
showSlide(currentIndex);

// Iniciar o autoplay
startAutoplay();