var myIndex = 0;
carousel();

function carousel() {
  var i;
  var y = document.getElementsByClassName("mySlides");
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > y.length) {myIndex = 1}    
  y[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2500);    
}