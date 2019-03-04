let name = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let error = document.querySelector(".error");
let success = document.querySelector(".success");
let form = document.querySelector(".items");



export default function submit(e) {
  e.preventDefault();

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://70v84a3rwi.execute-api.eu-west-1.amazonaws.com/prod/email/send", true);

  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
    }
  };
  var data = {
    name: name.value,
    email: email.value,
    content: message.value
  };

  console.log(data);

  if (name.value && email.value && message.value) {
    success.style.display = "block";
    form.innerHTML = "Votre message à bien été envoyé.<br>En attendant, n'hésitez pas à me rejoindre sur les réseaux sociaux!!";
    setTimeout(function() {
        document.querySelector(".all").style.display = "none";
        xhr.send(JSON.stringify(data));
    }, 5000); 

  } else {
      error.style.display = "block";
      error.innerHTML = "Please Fill  All Details";
  }
}