// display modal box
let modalContentDOM = document.querySelector('.overlay-box');
let overlayDOM = document.querySelector('.overlay-box-modal')
localStorage.setItem('hotelStorage',JSON.stringify(hotels));
let getItemStorage = localStorage.getItem('hotelStorage');
let reservationContent = document.querySelector('.reservation-content .container');
let reservation_display = document.createElement('div');
reservation_display.setAttribute('class', 'reservation-display');

let getItemStorageObj = JSON.parse(getItemStorage);


function showDetailsModal(id){
    
    let selectedItem = getItemStorageObj.find((item) => item.id == id);

    modalContentDOM.style.display = "block";
   
    overlayDOM.innerHTML = `
       
        <img src="${selectedItem.img}" alt="image" class="img-modal">
        <div class="col-lg-8 col-xs-12">
        <div class="details-side">
            <h3 class="title-name">${selectedItem.title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, neque?</p>
            <label>Type of Hotel</label>
            <select id="select-hotel" onchange="change_select_hotel()">
                <option value="---">---</option>
                <option value="1 Star">1 Star</option>
                <option value="2 Star">2 Star</option>
                <option value="3 Star">3 Star</option>
            </select>
            <label>Number of Person</label>
            <input type="number" id="num-people" onchange="change_select_numberPer()">
            <label>Type of Room:</label>
            <select id="select-room" onchange="change_select_room()">
                <option value="---">---</option>
                <option value="room">Room</option>
                <option value="suite">Suite</option>
            </select>

            <label>Start date</label>
            <input type="date" onchange="start_date()" id="start-date">
            <label>End date</label>
            <input type="date" onchange="end_date()" id="end-date">
        </div>
        </div>
        <div class="col-lg-4 col-xs-12">
        
            <div class="button-side">
                <span class="reserve-modal" onclick="putHotelsInRes(event)">Booking Now</span>
                <span class="close-modal" onclick= "closeBtnFun()">
                    Close
                </span>
            </div>
            
        </div>
    
    `;

    
    
}


// close modal

function closeBtnFun(){

    modalContentDOM.style.display = "none";
}

// details
function change_select_hotel(){

    let selHotel = document.getElementById("select-hotel").value;

    return selHotel;


 }
function change_select_numberPer(){
    let selPeople = document.getElementById("num-people").value;
    return selPeople;

}
function change_select_room(){
    let selRoom = document.getElementById("select-room").value;
    return selRoom;

}

function start_date(){
    let startDateDOM = document.getElementById("start-date").value;
    return startDateDOM;


}

function end_date(){
    let endDateDOM = document.getElementById("end-date").value;
    return endDateDOM;

}


function putHotelsInRes(event){
   let tarEve = event.target;
   let parEve = tarEve.parentElement;

   let image =  parEve.parentElement.parentElement.firstElementChild.src;
   let title = document.querySelector('.title-name').textContent;
 

   var sel_one = document.getElementById('select-hotel').value;
   var sel_two = document.getElementById('num-people').value;
   var sel_three = document.getElementById('select-room').value;
   var sel_four = document.getElementById('start-date').value;
   var sel_five = document.getElementById('end-date').value;

   
   function num_per(){
       var counter = 1;
       var numberPer = [];
       counter = counter * sel_two;

       numberPer.push(counter)
       
       counter = Math.max(...numberPer);
       return counter;

   }
  
   

 

    if(document.getElementById("select-hotel").value == " " || document.getElementById("end-date").value == "" || document.getElementById("num-people").value == " " || document.getElementById("start-date").value == "" || document.getElementById("select-room").value == " " || document.getElementById("end-date").value == ""){
        alert("please fill fields")
    }else{
    let noReservationsDOM = document.querySelector('.no-reservations');
    noReservationsDOM.style.display = "none"; 
    reservationContent.appendChild(reservation_display);
    reservation_display.innerHTML = `


   
            <img src="${image}" alt="" class="img-res">
            <h3 class="name-hotel paddingTC-5">Title</h3>
            <label>${title}</label>
            <p class="type-hotel paddingTC-5">${change_select_hotel()}</p>
            <label>Number of Person</label>
            <p class="num-people paddingTC-5">${change_select_numberPer()}</p>
            <label>Type of Room:</label>
            <p class="type-room paddingTC-5">${change_select_room()}</p>
            <label>Start date</label>
            <p class="start-date paddingTC-5">${start_date()}</p>
            <label>End date</label>
            <p class="end-date paddingTC-5">${end_date()}</p>
            <label>Total</label>
            <p id="price" class="paddingTC-5"></p>

        
   

    `;

    sel_one = 5;
    sel_two = num_per();
    sel_three = 10;
    
    if(document.getElementById('select-hotel').value == "---" || document.getElementById('select-room').value == "---"){
            alert("You Must Select One Value | Hotel Type & Hotel Room");
            
            
        }else{
            var average = parseInt(sel_one) + parseInt(sel_two) + parseInt(sel_three);
    
    
            (function titlePrice(){
                if(title == "Norway" || title == "London"){
                    average = average + 100
                }else if(title == "Paris" || title == "Sweden"){
                    average = average + 150
    
                }else if(title == "Egypt" || title == "Germany"){
                    average = average + 70
    
                }
                return average
            })();
    
            document.getElementById("price").innerHTML = average + "$";
            alert("finish");
            
        }
    
    }

    modalContentDOM.style.display = "none";
  

}

   