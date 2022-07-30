// header 
let headerDOM = document.querySelector('.header');


headerDOM.innerHTML = `

<div class="container">
    <div class="col-lg-6 col-xs-12">
        <div class="logo">
            <a href="index.html">Logo</a>
        </div>
        
    </div>
                
    <div class="col-lg-6 col-xs-12">
        <div class="registration">

            <div id="registration">
                <button data-toggle="modal" data-target="#signUpModal" class="sign-up">Sign Up</button>
                <button data-toggle="modal" data-target="#logInModal" class="log-in"><a href="login.html">LogIn&nbsp<i class="fas fa-sign-in-alt"></i></a></button>
            </div>
            
            <!-- Start Modal Sign Up -->
            <div class="modal fade" id="signUpModal" aria-hidden="true" aria-labelledby="exampleModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>Sign Up</h3>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <input type="text" placeholder="Type Your Name" id="username">
                            <input type="email" placeholder="Type Your Email" id="email">
                            <input type="password" placeholder="Type Your Password" id="password">
                            
                        </form>

                    </div>
                        <div class="modal-footer">
                            <button id="signUpBtn">Sign Up</button>
                            <button data-dismiss="modal"><i class="fas fa-times"></i></button>

                        </div>
                    </div>
                    
                </div>
            </div>

            <!-- End Modal -->
        
            <div class="user-container">
                <div id="user-in-header">

                </div>
                <div class="logout">
                    <span><i class="fas fa-sign-out-alt"></i></span>
                </div>
            </div>

        </div>

            
            

    </div>
</div>

`