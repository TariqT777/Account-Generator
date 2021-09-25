// fetch("https://www.passwordrandom.com/query?command=password&format=json&count=10#")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

  
function randomAccount(){
  fetch("https://www.passwordrandom.com/query?command=password&format=json&count=10#")
    .then((response) => response.json())
    .then((data) => console.log(data));
    alert('button was clicked!!!');
}