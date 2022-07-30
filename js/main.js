let hotelsContainerDOM = document.querySelector(".hotels .row");
let emailExistLocalStorage = localStorage.getItem('email');
let passwordExistLocalStorage = localStorage.getItem('password');


// display hotels
function drawHotels(){
   
    let hotelsDOM = hotels.map(function(item){
        return `
            <div class="col-lg-4 col-md-6 col-xs-12">
                <div class="hotel">
                    <img src="${item.img}" alt="image" class="img-hotel">
                    <h3 class="name-hotel">${item.title}</h3>
                    <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, neque?</p>
                    <span id="details" onclick = "showDetailsModal(${item.id})">Details</span>
                </div>
            </div>
        `;

        
    }).join('\n'); // .join('\n') to remove commas items from array
    hotelsContainerDOM.innerHTML = hotelsDOM;
};
if(emailExistLocalStorage && passwordExistLocalStorage){
    drawHotels();
}else{
    let welcomeDOM = document.createElement('h3');
    welcomeDOM.setAttribute('class','welcome-heading')
    welcomeDOM.textContent = "Welcome To Hotel Booking, Please Sign Up Firstly";
    hotelsContainerDOM.appendChild(welcomeDOM);
}




