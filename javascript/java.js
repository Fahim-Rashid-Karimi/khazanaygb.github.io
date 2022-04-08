var drop=0;
function dropdown() {
    drop=drop+1;
    console.log(drop);
    let val= drop%2;
    if (val==1) {
        document.getElementById("dropeddown").style.display="revert";  
    }
    if (val==0) {
        document.getElementById("dropeddown").style.display="none";  
    }
}


var sm_nav=0;
function showsmnav() {
  sm_nav=sm_nav+1;
  let val= sm_nav%2;
  if (val==1) {
      document.getElementById("sm-nav-menu").style.display="revert";  
  }
  if (val==0) {
      document.getElementById("sm-nav-menu").style.display="none";  
  }
}

function lgdropdown(){
  drop=drop+1;
    console.log(drop);
    let val= drop%2;
    if (val==1) {
        document.getElementById("lg-dropdown").style.display="revert";  
    }
    if (val==0) {
        document.getElementById("lg-dropdown").style.display="none";  
    }
}

// item default quantity
document.getElementById("quantity").value="0";

// image changes js in item 
var srcmain = document.getElementById("main-image").src;
function showfirst(){
  var imgsrc = document.getElementById("first-image").src;
  document.getElementById("main-image").src= imgsrc;
}
function closefirst(){
  document.getElementById("main-image").src= srcmain;
}

function showsecond(){
  var imgsrc = document.getElementById("second-image").src;
  document.getElementById("main-image").src= imgsrc;
}
function closesecond(){
  document.getElementById("main-image").src= srcmain;
}


// message minimize maximie function
function openmessage(){
  document.getElementById("massage-box").style.top="40vh";
  document.getElementById("massage-box").style.width="300px";
  document.getElementById("message").style.display="revert";
  document.getElementById("messagehead").style.borderRadius="11px 11px 0px 0px";
}
function closemessage(){
  document.getElementById("massage-box").style.top="85vh";
  document.getElementById("massage-box").style.width="max-content";
  document.getElementById("message").style.display="none";
  document.getElementById("messagehead").style.borderRadius="11px";
}

// slider javascript form ws3scholl
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
  }

  $('.lrslider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

//   auto palya crosel
  $('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 971,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


//   fliter slider

$('.filtering').slick({
    slidesToShow: 5,
    slidesToScroll: 1
  });
  
  var filtered = false;
  
  $('.js-filter').on('click', function(){
    if (filtered === false) {
      $('.filtering').slick('slickFilter',':even');
      $(this).text('Unfilter Slides');
      filtered = true;
    } else {
      $('.filtering').slick('slickUnfilter');
      $(this).text('Filter Slides');
      filtered = false;
    }
  });