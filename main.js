const shoppingList = [ "Mela",
"Banana",
"Arancia",
"Fragola",
"Ciliegia",
"Uva",
"Pesca",
"Pera",
"Kiwi",
"Ananas",
];
const cart = document.getElementById("cart");
let i = 0
const checkbox = `<input type="checkbox" class= "checkbox" >`;
while (i < shoppingList.length) {
    const listItem = `<li class="list-group-item">${checkbox} ${shoppingList[i]}</li>`
    cart.innerHTML += listItem;
    /* if (i%2 == 0) {
        listItem.style.color = "red";
    } */
    console.log(shoppingList[i]);
    i++
}

  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach(function(checkbox)  {
    checkbox.addEventListener('click', function () {
      const listItem = this.parentNode; 

      if (this.checked) {
        listItem.classList.add('barred'); 
      } else {
        listItem.classList.remove('barred'); 
      }
    });
  });

