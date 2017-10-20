/*if (window.location.href.match('cart.html') !=null) {
    localStorage.getItem('myOrder', JSON.stringify(order));
    return false;
}



//Use something like this load on cart page, carries over localstorage, create a function
var quant = 0;
document.getElementById("add").addEventListener("click",addCart);
function addCart() {
  quant++;
  document.getElementById("quant").innerHTML = quant;
  localStorage.getItem('myOrder') 


//QUANTITY IN CART
//add local storage stuffs
//REMOVE

//CAROUSEL?


//LIMIT CHECKBOXES
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

var currentPrice = "$0.00";
var pageFlavor = document.getElementById('pageFlavor').dataset.flavor;
if (localStorage.getItem('myOrder')) {
  var order = JSON.parse(localStorage.getItem('myOrder'));
  document.getElementById("quant").innerHTML = "Saved Price: " + order.price + " Amount: " + order.amount + ' Flavors: ' + order.flavors;
} else {
  var order = new Object();
  document.getElementById("quant").innerHTML = "No Saved Order";
}

document.getElementById("add").addEventListener("click",addCart);
function addCart() {
  if (!document.getElementById('dropdown1').value===""){
    order.flavors = [pageFlavor];
    order.price = currentPrice;
    order.amount = document.getElementById('dropdown1').value;
    for (var i=0; i < flavor.length; i++){
      if (flavor[i].checked) {
        order.flavors.push(flavor[i].value);
      }
    }
    document.getElementById("quant").innerHTML = "Price: " + order.price + " Amount: " + order.amount + ' Flavors: ' + order.flavors;
    localStorage.setItem('myOrder', JSON.stringify(order)); //need a parameter here; for cart page
  }
}

//CHANGE THE HTML ON CART PAGE
//innerHTML = '<div class="product"><h1>' + someVariableForName + '</h1><p class="price">' + someVariableforPrice +'</p></div>'

//REMOVE 
//document.getElementById("delete-item").addEventListener("click", removeFromCart);
//function removeFromCart() {
//  item.quantity -= 1;
//  this.items.splice(this.items.indexOf(item), 1);
//}
*/

//DROPDOWN2 TRIGGER
document.getElementById("flavors").style.display = "none";

function showFlavors() {
  if (document.getElementById('flavors').style.display === "none") {
    document.getElementById('flavors').style.display = "block";
  document.getElementById('bun1').src='https://images.freshop.com/00024126012808/7cc1c32a2c77ca8958d0004bb0ad3322_medium.png';
  }
}

function hideFlavors() {
  if (document.getElementById('flavors').style.display === "block") {
    document.getElementById('flavors').style.display = "none";
  document.getElementById('bun1').src='https://images.freshop.com/00221151000002/22fbd9158fed2d9ab85034c1fa06edcb_medium.png';
  for (var i=0; i < flavor.length; i++){
  flavor[i].checked = false;
  }
  }
}


//PRICE CHANGE
document.getElementById('dropdown').onchange = function(){
  switch(document.getElementById('dropdown').value) {
    case 'individual':
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
    default:
      currentPrice = "$0.00";
      document.getElementById('price').innerHTML = "$0.00";
      hideFlavors();
      break;
  }
 }