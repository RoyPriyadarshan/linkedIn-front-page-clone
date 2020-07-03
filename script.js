function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropspan')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 

  /*This code makes navbar sticky*/

  // window.onscroll = function() {
  //   myFunction()
  // };
  // var navbar = document.getElementById("navbar");
  //   var sticky = navbar.offsetTop;
  
  // function myFunction() {
  //   if (window.pageYOffset >= sticky) {
  //     navbar.classList.add("sticky")
  //   } 
  //   else if(window.pageYOffset < sticky) {
  //     navbar.classList.remove("sticky");
  //   }
  // } 