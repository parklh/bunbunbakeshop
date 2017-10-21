//QUANTITY IN CART
//add local storage stuffs
//REMOVE

//CAROUSEL?


//LIMIT CHECKBOXES
var flavor = document.getElementsByName('flavors');
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

document.getElementById("add").addEventListener("click",addCart);
function addCart() {
  if (!document.getElementById('dropdown').value===""){
    var currentOrder = new Object();
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

function updateCart() {
  if (order.length > 0) {
    for (var i=0; i < order.length; i++) {
      var orderHtml = document.createElement('div');
      orderHtml.innerHTML = '<h3>' + order[i].amount + '</h3><p>' + order[i].flavors + '</p><p>' + order[i].price + '</p>'
      document.getElementById('yourOrder').appendChild(orderHtml);
    }
  }
}

function updateCartAmount() {
  document.getElementById("cart").innerHTML = order.length;
}

if (localStorage.getItem('myOrder')) {
  var order = JSON.parse(localStorage.getItem('myOrder'));
  updateCartAmount();
} else {
  var order = [];
}

//REMOVE 
//document.getElementById("delete-item").addEventListener("click", removeFromCart);
//function removeFromCart() {
//  item.quantity -= 1;
//  this.items.splice(this.items.indexOf(item), 1);
//}

document.getElementById("flavors").style.display = "none";

function showFlavors() {
  if (document.getElementById('flavors').style.display === "none") {
    document.getElementById('flavors').style.display = "block";
    document.getElementById("moreDescription").style.display = "block";
    document.getElementById('main').src='images/product2.jpg';
  }
}

function hideFlavors() {
  if (document.getElementById('flavors').style.display === "block") {
    document.getElementById('flavors').style.display = "none";
    document.getElementById('moreDescription').style.display = "none";
    document.getElementById('main').src='images/product2.jpg';
  for (var i=0; i < flavor.length; i++){
  flavor[i].checked = false;
  }
  }
}


//PRICE CHANGE
document.getElementById('dropdown').onchange = function(){
  switch(document.getElementById('dropdown').value) {
    case 'single':
      currentPrice = "$3.49";
      document.getElementById('price').innerHTML = "$3.49";
      hideFlavors();
      break;
    case '6pack':
      currentPrice = "$20.94";
      document.getElementById('price').innerHTML = "$20.94";
      showFlavors();
      break;
    case '6single':
      currentPrice = "$20.49";
      document.getElementById('price').innerHTML = "$20.49";
      hideFlavors();
      break;
    case '12pack':
      currentPrice = "$41.88";
      document.getElementById('price').innerHTML = "$41.88";
      showFlavors();
      break;
    case '12single':
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