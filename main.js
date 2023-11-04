const shoppingList = [
  'Mela',
  'Banana',
  'Arancia',
  'Fragola',
  'Ciliegia',
  'Uva',
  'Pesca',
  'Pera',
  'Kiwi',
  'Ananas'
]
const cart = document.getElementById('cart')
let i = 0

while (i < shoppingList.length) {
  const checkbox = `<input type="checkbox" class= "checkbox" id= "${shoppingList[i]}" >`
  const listItem = `<li class="list-group-item">${checkbox} <label for="${shoppingList[i]}">${shoppingList[i]}</label></li>`
  cart.innerHTML += listItem
  i++
}

const checkboxes = document.querySelectorAll('.checkbox')
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('click', function () {
    const label = document.querySelector(`label[for="${this.id}"]`)

    if (this.checked) {
      label.classList.add('barred')
    } else {
      label.classList.remove('barred')
    }
  })
})
