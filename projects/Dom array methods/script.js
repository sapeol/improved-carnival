const main = document.getElementById('main');
const adduser = document.getElementById('adduser');
const double = document.getElementById('double');
const showriches = document.getElementById('showriches');
const sort = document.getElementById('sort');
const networth = document.getElementById('networth');

let data = [];

//fetch random user and add money
// adduser.addEventListener('onclick', getusers());
// getusers(); 
getusers();    

async function  getusers(){
    const res = await fetch("https://randomuser.me/api");
    const data = await res.json();
    // fetch("https://randomuser.me/api").then(res => res.json())
    // .then(data =>)
    const userdata = data.results[0];
    const newUser = {
        name: `${userdata.name.first} ${userdata.name.last}`,
        money: Math.floor(Math.random()*1000000)
    }
    console.log(newUser);
    
}

//adding the userdata to data array

function adddataarray(obj){
    data.push(obj);
    updatedom();
}

function updatedom(provideddata = data){
    main.innerHTML = `<h2><strong>person</strong> wealth</h2>`;
    provideddata.forEach((item)=>{
        const element = document.createElement("div");
        element.classList.add('person');
        element.innerHTML = `<strong> ${item.name} </strong> ${item.money}`;
        main.appendChild(element); 

    });
} 
console.log(data)