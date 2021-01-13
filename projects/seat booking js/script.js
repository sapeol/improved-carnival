const container = document.querySelector(".container");
const allseats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.querySelector("count");
const total = document.querySelector("total");
const movieSelect = document.getElementById('movie');
let ticketPrice = movieSelect.value;
popui();


function updateSeletedCount() {
const selectedseats= document.querySelectorAll('.row .selected');

  
    const seatsIndex = [...selectedseats].map((seat)=> [...allseats].indexOf(seat)); //copying values using spread operator
    console.log(seatsIndex);
    const seats = selectedseats.length;
    this.count.innerText = seats;
    
    let money = ticketPrice*parseInt(seats);
    this.total.innerText = money ;
    localStorage.setItem("seats", JSON.stringify(seats));
    localStorage.setItem("money", JSON.stringify(money));
    localStorage.setItem("selected seats", JSON.stringify(seatsIndex));
}

movieSelect.addEventListener('change', e=>{
console.log(e.target.value);
ticketPrice = e.target.value;
updateSeletedCount();
localStorage.setItem("movie", e.target.selectedIndex);
localStorage.setItem("price", e.target.value);
console.log(movieSelect.selectedIndex)
});

//repopulated the data from localstorage
function popui(){
    movieSelect.selectedIndex=JSON.parse(localStorage.getItem("movie"));
    const selectedseats = JSON.parse(localStorage.getItem("selected seats"));
    if (selectedseats !== null && selectedseats.length > 0){
        allseats.forEach((seat, index)=>{
            if(selectedseats.indexOf(index) > -1){
                seat.classList.add("selected");
            }
        });
    }
    this.total.innerText =JSON.parse(localStorage.getItem("money"));
    this.count.innerText = JSON.parse(localStorage.getItem("seats"));
}

//seats function
container.addEventListener('click',(e)=>{
 if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
     console.log(e.target)
     e.target.classList.toggle("selected");
    updateSeletedCount();
   
 }

});

