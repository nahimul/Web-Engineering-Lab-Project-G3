let login= document.querySelector("#loginbtn");

login.addEventListener("click",()=>{
    alert("Login Successfully!");
})


function loadPersonalInfo() {
    fetch('personal_info.html')
        .then(response => response.text());
  }