let usernameDOM = document.getElementById("username");
let emailDOM = document.getElementById("email");
let passwordDOM = document.getElementById("password");



let signUpBtnDOM = document.getElementById("signUpBtn");



signUpBtnDOM.onclick = checkSignUp;

function checkSignUp(e){
 
    e.preventDefault();

    if(usernameDOM.value === '' && emailDOM.value === '' && passwordDOM.value === ''){
        
        alert("Please, fill all fields");
    }else{
        localStorage.setItem('name',usernameDOM.value);
        localStorage.setItem('email',emailDOM.value);
        localStorage.setItem('password',passwordDOM.value);
        
        goToLoginPage();
    }


}
function goToLoginPage(){

  
    setTimeout(function(){
        window.location = 'login.html';
    },1000)

}






