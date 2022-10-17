// JQUERY SECTION - 3 TO 47

// SHOW/HIDE KOALA
$(document).ready(function () {
  $("#show").click(function () {
    $(".koala").show();
  });
  $("#hide").click(function () {
    $(".koala").hide();
  });


  // CHAIN EFFECTS FOR KOALA
  function styleChanges() {
    $(".showKoala").css("background-color", "white").css("color", "#c32dbece").animate({
      width: "100%"
    }).animate({
      fontSize: "28px"
    }).animate({
      borderWidth: 30
    });
  }
  styleChanges();


  // DROPDOWN MENU
  jQuery('.dropdown button#menu1').on('click', function () {
    var count = 0;

    if (jQuery('ul.menu').hasClass("active")) {
      jQuery('ul.menu').hide();
      jQuery('ul.menu').removeClass('active');
      count = 1
    }
    if (count != 1) {
      jQuery('ul.menu').addClass('active');
      jQuery('ul.menu').show();
    }
  });


  // ROOSTER ANIMATION
  $("button").click(function () {
    $("img").animate({
      left: 1000
    }, 40000);
  });

  // ----------------------------------------------------------------




  // CODE TO ADD EACH PURCHASE TO THE CART TOTAL 
  let shop = document.getElementById("shop");
  let totalEl = document.querySelector(".cartAmount")
  let basket = []
  let productObject = {}

  function getCardData() {
    if (localStorage.cartItems) {
      let basket = JSON.parse(localStorage.getItem("cartItems"));

      let cartTotal = 0

      // CALCULATION FOR THE SUM OF ALL THE 'PRICES' IN THE CART 
      basket.forEach(item => {
        cartTotal += item.price
      })
      // RELATES TO ADDING VAT, STORING ONGOING 'CARTTOTAL' IN LOCAL STORAGE AND 
      // CREATING AN ALERT FOR EACH CART ADDITION
      cartTotal = cartTotal + (cartTotal * 0.20)
      totalEl.textContent = `£` + cartTotal
      localStorage.setItem("cartTotal", cartTotal)
      // alert("Your cart total is " + cartTotal)
      console.log(cartTotal)
    }
  }
  getCardData()



  // CODE TO CREATE THE ANIMAL CARDS ON THE CATALOGUE PAGE

  let generateShop = () => {};

  shopItemsData.forEach(function (item) {

    // CARD
    let card = document.createElement("div")
    card.className = "card"
    shop.appendChild(card)

    // IMAGE
    let imageEl = document.createElement("img")
    imageEl.className = "card-img-top"
    imageEl.src = item.img
    imageEl.alt = item.name
    imageEl.style.width = "295"
    card.appendChild(imageEl)

    // CARD BODY
    let body = document.createElement("div")
    body.className = "card-body"
    card.appendChild(body)

    // CARD TITLE
    let title = document.createElement("h5")
    title.className = "card-title"
    title.textContent = `£${item.price}`
    body.appendChild(title)

    // ADD TO CART BUTTON
    let addToCart = document.createElement("a")
    addToCart.className = "btn btn-primary"
    addToCart.textContent = "Add to Cart"

    // CODE TO ADD THE ITEM NAME AND PRICE TO LOCAL STORAGE
    addToCart.addEventListener('click', function () {
      productObject.name = item.name
      productObject.price = item.price

      basket.push(productObject)
      localStorage.setItem("cartItems", JSON.stringify(basket))
      productObject = {}

      getCardData()
    })
    body.appendChild(addToCart)
  })
  generateShop();

});