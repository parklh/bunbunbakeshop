//REMOVE

//CAROUSEL?

//Limits amount of checkboxes user can click
var flavor = document.getElementsByName('flavor');
var limit = 0;
  for (var i=0; i < flavor.length; i++){
    flavor[i].addEventListener('change', checkFlavor);
  }


function checkFlavor() {
  if (this.checked) {
    if (limit < 2) {
      limit++
    } else {
      this.checked = false;
    }
  } else {
  limit--;
  }
}

//Updates number next to cart icon
function updateCartAmount() {
  document.getElementById("cart").innerHTML = order.length;
}

//Establishes array that populates cart
if (localStorage.getItem('myOrder')) {
  var order = JSON.parse(localStorage.getItem('myOrder'));
  updateCartAmount();
} else {
  var order = [];
}

//Creates new order properties and pushes to Order array
function addCart() {
  if (document.getElementById('dropdown').value !== ""){
    var currentOrder = new Object();
    var pageFlavor = document.getElementById('pageFlavor').dataset.flavor;
    currentOrder.flavors = [pageFlavor];
    currentOrder.price = currentPrice;
    currentOrder.amount = document.getElementById('dropdown').value;
    for (var i=0; i < flavor.length; i++){
      if (flavor[i].checked) {
        currentOrder.flavors.push(flavor[i].value);
      }
    }
    order.push(currentOrder);
    updateCartAmount();
    localStorage.setItem('myOrder', JSON.stringify(order));
  }
}

//Creates new div on cart page to display orders
function updateCart() {
  //order[i].flavors.join(' and ');
  if (order.length > 0) {
    for (var i=0; i < order.length; i++) {
      var orderHtml = document.createElement("div");
      orderHtml.innerHTML = '<button id="close" onclick="removeFromCart()"></button><div class="inBasket"><h3>' + order[i].amount + '</h3><p span class="flavorChoice">' + order[i].flavors + '</p><p span class="orderPrice">' + order[i].price + '</p></div><div class="border long"></div>'
      document.getElementById('yourOrder').appendChild(orderHtml);
    }
  }
}

//Changes button and text on cart page
function checkout() {
  //where am i fucking up here? :c (check cart.html)
  if (order.length < 0) {
    document.getElementById('checkoutNow').innerHTML = "Hungry for buns? Your cart sure is.";
    document.getElementById('checkoutButton').innerHTML = 'shop now';
  }
}

//Removes order
function removeFromCart() {
  //I understand i need to search through the array to find this instances location,
  //I have no idea what that looks like...
  //I looked at your suggestion, conceptually I get it, just can't apply
  this.order.splice(order.indexOf(order),1)
  updateCartAmount();
}

//Supports dropdownChange() function, exposes divs
function showFlavors() {
  if (document.getElementById('flavors').style.display === "none") {
    document.getElementById('flavors').style.display = "block";
    document.getElementById("moreDescription").style.display = "block";
    document.getElementById('main').src='images/product1.jpg';
  }
}

//Supports dropdownChange() function, hides divs
function hideFlavors() {
  if (document.getElementById('flavors').style.display === "block") {
    document.getElementById('flavors').style.display = "none";
    document.getElementById('moreDescription').style.display = "none";
    document.getElementById('main').src='images/product1.jpg';
  for (var i=0; i < flavor.length; i++){
  flavor[i].checked = false;
    }
  }
}

//Allows certain amount of data/options to appear to user when make specific selections
function dropdownChange() {
  switch(document.getElementById('dropdown').value) {
    case 'Single':
      currentPrice = "$3.49";
      document.getElementById('price').innerHTML = "$3.49";
      hideFlavors();
      break;
    case '6-pack':
      currentPrice = "$20.94";
      document.getElementById('price').innerHTML = "$20.94";
      showFlavors();
      break;
    case '6-pack, Single':
      currentPrice = "$20.49";
      document.getElementById('price').innerHTML = "$20.49";
      hideFlavors();
      break;
    case '12-pack':
      currentPrice = "$41.88";
      document.getElementById('price').innerHTML = "$41.88";
      showFlavors();
      break;
    case '12-pack, Single':
      currentPrice = "$41.88";
      document.getElementById('price').innerHTML = "$41.88";
      hideFlavors();
      break;     
    default:
      currentPrice = "$0.00";
      document.getElementById('price').innerHTML = "$0.00";
      hideFlavors();
      break;
 }
} 