let number = document.getElementById('numberBox').value
let numberBox = document.getElementById('numberBox')
const decreaseBtn = document.getElementById('decrease-btn')
const increaseBtn = document.getElementById('increase-btn')
const resetBtn = document.getElementById('reset-btn')

const increase = () => {
  number++
  numberBox.setAttribute('value', number)
}
const decrease = () => {
  if (number > 0) {
    number--
    numberBox.setAttribute('value', number)
  }else{
    number=0
    numberBox.setAttribute('value', number)
    let alertMessage = document.querySelector('.alert-decrease')
    alertMessage.style.visibility="visible"
    setTimeout(() => {
    alertMessage.style.visibility="hidden"
  }, 500);
  }


}
const reset = () => {
  let alertMessage = document.querySelector('.alert-reset')
  alertMessage.style.visibility="visible"
  setTimeout(() => {
    alertMessage.style.visibility="hidden "
  }, 500);
  number = 0
  numberBox.setAttribute('value', number)

}