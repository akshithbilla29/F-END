function authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "akshith" && password === "billa") {
        // Redirect to the home page
        window.location.href = "page0.html";
      } else {
        alert("Invalid username or password. Please try again.");
      }
  }
  