let userLoginLocalStorage = localStorage.getItem('name');
let emailLoginLocalStorage = localStorage.getItem('email');
let passwordLoginLocalStorage = localStorage.getItem('password');
let emailLoginDOM = document.getElementById('emailLogin');
let passwordLoginDOM = document.getElementById('passwordLogin');
let loginBtnDOM = document.getElementById('loginBtn');



loginBtnDOM.addEventListener('click',checkLogin);

function checkLogin(e){

    e.preventDefault();
    
    if(emailLoginLocalStorage && emailLoginLocalStorage == emailLoginDOM.value && passwordLoginLocalStorage && passwordLoginLocalStorage == passwordLoginDOM.value){

      

        setTimeout(function(){
            window.location = 'index.html';
        }, 1000)
     

    }else{
        alert('email or password has written wrong')
    }
    
}



