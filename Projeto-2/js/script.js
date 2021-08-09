function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

 // Get a reference to "myhref".
 var myhref = document.getElementById("myhref");
 // Get a reference to "myfield".
 var myfield = document.getElementById("myfield");
 // Attach an event listener to "myhref", which gets notifier when "myhref" is clicked.
 myhref.addEventListener("click", function() {
     // "myhref" is click. So, uncheck "myfield"
     myfield.checked = false;
 });

