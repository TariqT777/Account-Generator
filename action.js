// fetch("https://www.passwordrandom.com/query?command=password&format=json&count=10#")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

  
function randomAccount(){
  fetch("https://www.passwordrandom.com/query?command=password&format=json&count=1#")
    .then((response) => response.json())
    .then((data) => renderPassword(data));
    //alert('button was clicked!!!');
}

async function randomUsername(){
  const name = fetch("https://randomuser.me/api/");
  const account = name.json();
  console.log(account);
  //.then((response) => response.json())
  //.then((data) => userData = data)
  //.then(() => console.log(userData));
 
}


function userNameCategory() {
  document.getElementById('printUsername').style.display = "inline";
}
function passwordCategory() {
  document.getElementById('printPassword').style.display = "inline";
}

function renderUsername(userData){
  const userNamePrinted = document.getElementById("usernamePrinted");
  userNamePrinted.innerHTML = userData;
}

function renderPassword(data) {
  const Password = document.getElementById("Password");
  Password.innerHTML = data.char;
  
}