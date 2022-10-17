let discountInput = document.querySelector(".discountCode")
let btn = document.querySelector(".discountBtn")
let cartAmount = document.querySelector("#cartAmount")


// CART TABLE USING BOOTSTAP 
let text = "";
let purchases = window.localStorage.getItem("cartItems");
const product = JSON.parse(purchases);
let tableBody = document.getElementById("table-body");
product.forEach(function (item) {
  tableBody.innerHTML += `
  <tr>
    <td></td>
    <td id="product">${item.name}</td>
    <td id="price">£${item.price}</td>
    <td></td>
  </tr>
  `
});



// DELIVERY OPTIONS
let deliveryDropdown = document.getElementById("deliveryDropdown");

function setDeliveryCost() {}

// CORRESPONDS TO THE DIFFERENT DELIVERY/COLLECTION OPTIONS,
// WHILE STORING AND UPDATING CARTTOTAL
deliveryDropdown.addEventListener("change", function () {
  let selectedOption = deliveryDropdown.value
  let cartTotal = Number(localStorage.getItem("cartTotal"))

  if (selectedOption == "collection") {
    cartTotal += 0
    // console.log(cartTotal)
    deliveryDropdown.disabled = true
  } else if (selectedOption == "delivery") {
    cartTotal += 5
    // console.log(cartTotal)
    deliveryDropdown.disabled = true

    console.log(cartTotal);

    cartAmount.textContent = "£" + cartTotal.toFixed(2)

  } else {
    alert("Choose delivery option")
  }
  localStorage.setItem("cartTotal", cartTotal)
})

setDeliveryCost()



// DISCOUNT CODE
btn.addEventListener("click", function () {
  console.log(discountInput.value);
  if (discountInput.value == "10OFF") {
    let currentTotal = localStorage.getItem("cartTotal")
    newTotal = currentTotal - (currentTotal / 100) * 10
    // newTotal = newTotal.toFixed(2)

    localStorage.setItem("cartTotal", newTotal)

    // TotalAmount.innerHTML = newTotal
    discountInput.value = ""

    // DISCOUNT CODE  = 10OFF

    // cartAmount.innerHTML = `£${newTotal}`;
    cartAmount.textContent = "£" + newTotal.toFixed(2)

    btn.disabled = true
    console.log(newTotal);
  }
})


//referenced by https://www.w3schools.com/js/js_popup.asp
// CONFIRM ORDER FUNCTION
function myFunction() {
  let txt;
  let emptyArr = [];
  for (let i = 0, j = 1; i < j; i++) {
    emptyArr.push(Math.round(Math.random() * 100000))
  }
  if (confirm("Would you like to confirm your order?")) {
    txt = "Thank you for your order. Your order number is AaA" + emptyArr;
  } else {
    txt = "You've changed your mind!";
  }
  document.getElementById("orderNumber").innerHTML = txt;
  console.log(emptyArr)

}