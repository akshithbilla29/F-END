function searchNames() {
    
    let input = document.getElementById("search").value.toLowerCase();
    
    
    let names = document.getElementById("names").getElementsByTagName("li");
    
    
    for (let i = 0; i < names.length; i++) {
    
      let name = names[i].textContent.toLowerCase();
      

      if (name.indexOf(input) > -1) {

        names[i].style.display = "";
      } else {
      names[i].style.display = "none";
      }
    }
  }