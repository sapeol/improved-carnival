const main = document.getElementById('main');
const adduser = document.getElementById('adduser');
const double = document.getElementById('double');
const showriches = document.getElementById('showriches');
const sort = document.getElementById('sort');
const networth = document.getElementById('networth');
let data = [];
//fetch random user and add money
// adduser.addEventListener('onclick', getusers();
// getusers(); 
getusers();
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
    adddataarray(newUser);    
}

//adding the userdata to data array

function adddataarray(newUser){
    data.push(newUser);
    updatedom();
}

function updatedom(provideddata = data){
    main.innerHTML = `<h2><strong>person</strong> wealth</h2>`;
    provideddata.forEach((item)=>{
        const element = document.createElement("div");
        element.classList.add('person');
        const number = formatmoney(item.money);
        element.innerHTML = `<strong> ${item.name} </strong> $${number}`;
        main.appendChild(element);   
    });
} 

//function that formats string number to curreny

function formatmoney(number){
    return (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
}
function doublemoney(){
    data = data.map((user)=>{
        return{...user, money : user.money * 2};
    });
    updatedom();
}
function getriches(){
    data = data.filter(user=>user.money > 1000000);
    updatedom();
}
function sorted(){
    data.sort((a,b) => b.money - a.money);
    updatedom();    
}

// totals the networth
function total(){
   const totalmonke = data.reduce((acc, user) => (acc =+ user.money), 0);
   console.log(totalmonke);
}


//event listeners
adduser.addEventListener('click', getusers);
double.addEventListener('click', doublemoney);
showriches.addEventListener('click',getriches);
sort.addEventListener('click', sorted);
networth.addEventListener('click', total);
