(function () {
  'use strict'
  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })
})()
var resObj;
var dishObj;
var dishArr = [];
const date = new Date();
let idCounter = date.getTime()

function addDish() {
  // e.preventDefault();
  var title = document.getElementById("Tittle").value;
  var price = document.getElementById("Price").value;
  var delivery = document.getElementById("Delivery").value;
  dishObj = {
    title: title,
    Price: price,
    delivery: delivery
  }
  dishArr.push(dishObj)
  // console.log(dishArr)
  let id = idCounter += 1;
  auth.onAuthStateChanged(user => {
    if (user) {
      db.collection(user.uid).doc('Res' + id).set({
        id: '_' + id,
        dishArr
      }).then(() => {
        console.log("dish Added")

      }).catch(err => {
        console.log(err.message);
      })
    }
  })
}






// -----------------------------------------


