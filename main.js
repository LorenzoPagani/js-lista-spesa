const shoppingList = ["pane", "latte", "affettati", "parmigiano",];
const cart = document.getElementById("cart");
let i = 0
while (i < shoppingList.length) {
    cart.innerHTML += `<li> ${shoppingList[i]}</li>`
    console.log(shoppingList[i]);

    i++
}