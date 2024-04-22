
console.log("I love you");

let btn= document.querySelector("button");

function loadPersonalInfo() {
    fetch('personal_info.html')
        .then(response => response.text());
  }