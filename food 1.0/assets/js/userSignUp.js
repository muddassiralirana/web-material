(function () {
  'use strict'
  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })
})()

const signUp_Form = document.getElementById("signup-form");
// const sign_Btn = document.getElementById("sign_Btn");
// sign_Btn.addEventListener("click" , goTOLOGIN)
signUp_Form.addEventListener('submit', e => {
  e.preventDefault();
  const name = signUp_Form["login__first_Name"].value;
  const email = signUp_Form["login__username"].value;
  const password = signUp_Form["login__password"].value;
  // console.log(name , email , password);
  signUp_Form.reset()
  auth.createUserWithEmailAndPassword(email, password)
    .then(cred => {
      console.log("hello")
      return db.collection('hackaton_Resturant').doc(cred.user.uid).set({
        Name: name,
        Email: email,
        Password: password,
      })
        .then(() => {
          console.log("hello1")
          location = "./login.html";
        }).catch((err) => {
          console.log("hello2")
          const signUP_Err2 = document.getElementById("SignUP_Error2");
          signUP_Err2.innerText = "Note : " + " " + err.message;
        })
    }).catch((err) => {
      console.log("hello3")
      const signUP_Err1 = document.getElementById("SignUP_Error1");
      signUP_Err1.innerText = "Note :" + " " + err.message;
    })
})




