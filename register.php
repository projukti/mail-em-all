<!DOCTYPE html>
<html lang="en">
<?php include 'includes/head.php'; ?>
<body class="login">
<main>
    <div class="register-box">
        <form action="">
            <!--            <img src="/assets/img/logo.png" alt="">-->
            <div>Register an Account</div>
            <input class="width-half" type="text" placeholder="First Name"><input class="width-half" type="text"
                                                                                  placeholder="Last Name">
            <input type="text" placeholder="Username" data-validate="username">
            <input type="email" placeholder="Email">
            <input class="width-half" id="password" type="password" placeholder="Password"
                   data-validate="password"><input class="width-half"
                                                   id="repassword"
                                                   type="password"
                                                   placeholder="Retype Password" data-validate="repassword">
            <button>REGISTER</button>
        </form>
        <span class="width-full text-center"><a href="#">Already registered? Login Now!</a></span>
    </div>
</main>
<?php include 'includes/footer.php'; ?>
</body>
</html>