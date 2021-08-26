(function () {
  'use strict'
  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })
})()

const login_Form = document.getElementById("login-form");
login_Form.addEventListener('submit', e => {
  e.preventDefault();
  const login_email = login_Form["login_email"].value;
  const login_password = login_Form['login_password'].value;
  // console.log(login_email , login_password);
  login_Form.reset();
  auth.signInWithEmailAndPassword(login_email, login_password).then(() => {
    console.log("login");
    location = "./index.html"
  }).catch((err) => {
    const loginErr = document.getElementById("error_Message");
    loginErr.innerHTML = "Note :" + " " + err.message;
  })
})