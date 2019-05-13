document.addEventListener("DOMContentLoaded", function(event) { 
      document.getElementsByClassName('container')[0].style.marginTop = document.getElementsByClassName('navbar-expand-md')[0].offsetHeight+'px';
  });


  function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }