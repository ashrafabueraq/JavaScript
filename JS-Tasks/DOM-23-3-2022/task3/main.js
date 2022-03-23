
function chaingeFlag() {
    let x = document.getElementById("Changing").value;
    if (x == "Jordan") {
      document.getElementById("image").src="images/jordan.jpg"
    } else if (x == "Norway") {
      document.getElementById("image").src = "images/norway.png";
    } else {
      document.getElementById("image").src = "images/french.png";
    }
  }