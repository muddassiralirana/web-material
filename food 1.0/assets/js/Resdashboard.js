(function () {
  'use strict'
  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })
})()

console.log(auth)
function showDish() {
  auth.onAuthStateChanged(user => {
    if (user) {
      db.collection(user.uid).doc('Res' + id).set({
        id: 'Res' + id,
        dishArr
      }).then((data)=>{
        console.log("Data :" + data)
      }).catch(err=>{
        console.log(err.message)
      })
    }
  })
}
showDish()
// auth.onAuthStateChanged(user => {
//   if (user) {
//     db.collection(user.uid).doc('Res' + id).set({
//       id: 'Res' + id,
//       dishArr
//     }).then(() => {
//       console.log("dish Added")

//     }).catch(err => {
//       console.log(err.message);
//     })

// )