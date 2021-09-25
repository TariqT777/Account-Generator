// fetch("https://www.passwordrandom.com/query?command=password&format=json&count=10#")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

  
function randomAccount(){
  fetch("https://www.passwordrandom.com/query?command=password&format=json&count=1#")
    .then((response) => response.json())
    .then((data) => renderPassword(data));
    //alert('button was clicked!!!');
}

function renderPassword(data) {
  const Password = document.getElementById("Password");
  Password.innerHTML = data.Password;
  
}