var total = document.getElementById("total");
console.log(total);

/// Pluss Buttons ///
let plusBtns = document.getElementsByClassName("plus");
for (let btn of plusBtns){
btn.addEventListener("click", function(){
//getting the name attribute
let itemName = btn.getAttribute("name")
//getting the price of the item
let qty = document.getElementById(itemName + "_qty");

if(qty.innerHTML >0){
//decrement the qty
qty.innerHTML--;

//changing the total value 
total.innerHTML = parseInt(total.innerHTML) - parseInt(price);
}else{alert("Quantity cannot be negative"}}
}