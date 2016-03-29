$(document).ready(function(){

var nav_items = document.getElementsByClassName("signin-nav-items");
  for(var i = 0; i < nav_items.length; i++){
    nav_items[i].addEventListener("click", function(){
      this.toggleClass("signin-selected");
    });
  }

});
