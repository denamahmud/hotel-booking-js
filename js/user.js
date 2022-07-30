let userLocalStorage = localStorage.getItem('one');
let emailLoginLocalStorage = localStorage.getItem('two');
let passwordLoginLocalStorage = localStorage.getItem('three');
let registrationDOM = document.getElementById("registration");
let userInHeaderDOM = document.getElementById("user-in-header");
let logoutDOM = document.querySelector(".logout");
let userContainerDOM = document.querySelector('.user-container');

function getUserName(){
       
    if(emailLoginLocalStorage && passwordLoginLocalStorage){
        registrationDOM.remove();
        let userHeading = document.createElement('h3');
        userInHeaderDOM.appendChild(userHeading);
        userContainerDOM.style.display = "flex";
        logoutDOM.style.display = "block"

        userHeading.innerHTML = userLocalStorage;
    }   
    
}
getUserName()

logoutDOM.addEventListener('click', function(){
   
 
    userContainerDOM.remove();
    localStorage.clear();
    setTimeout( () => {
                        
        window.location = "index.html";
    }, 500);
    
    
});