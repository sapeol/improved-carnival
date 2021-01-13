const form = document.querySelector("form");
const submit = document.querySelector("button");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const conformpassword = document.getElementById("conformpassword");

// const error = document;
// const  = document.getElementsByClassName("form-control");
function showError(input){
    const formcontrol = input.parentElement;
    formcontrol.className="form-control error"
    const msg = document.querySelector("small");
    msg.innerText = `${input.id}`;
}

function showSuccess(input, message){
    const formcontrol = input.parentElement;
    formcontrol.className="form-control success"
}

let araay = [username, email, password, conformpassword ];
form.addEventListener('submit', function(e){
    e.preventDefault();
    araay.forEach(function(item) {
        if(item.value === ""){
            showError(item);
        }else{
            showSuccess(item);
        };
    });
});
console.log(username);