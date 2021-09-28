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
  const name = await fetch("https://randomuser.me/api/");
  const account = await name.json();
  const userName = await account.results[0].login.username
  renderUsername(userName);
}


function userNameCategory() {
  document.getElementById('printUsername').style.display = "inline";
}
function passwordCategory() {
  document.getElementById('printPassword').style.display = "inline";
}

function renderUsername(userData){
  const userNamePrinted = document.getElementById("userNamePrinted");
  userNamePrinted.innerHTML = userData;
}

function renderPassword(data) {
  const Password = document.getElementById("Password");
  Password.innerHTML = data.char;
  
}