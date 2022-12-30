// console.log(document);
// const btnPlus=document.getElementsByClassName("plus")
// console.log(btnPlus);
// const checkBoxs=document.getElementsByTagName("input")
// console.log(checkBoxs);
// const wassel=document.getElementById("total")
// console.log(wassel);
// const like=document.querySelectorAll(".like")
// console.log(like);
// const like=document.querySelector(".like");
// console.log(like);
const btnPlus = document.getElementsByClassName("plus");
const checkboxs = document.querySelectorAll(".check");
var btnminus = document.getElementsByClassName("minus");
var deleteButton = document.getElementsByClassName("delete");
var likebtn = document.getElementsByClassName("like");
// console.log(btnPlus);
for (i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", increment);
  checkboxs[i].addEventListener("click", total);
  btnminus[i].addEventListener("click", decriment);
  likebtn[i].addEventListener("click", like);
  deleteButton[i].addEventListener("click", remove);
  

}
//this is a function for increment
function increment(event) {
  // console.log(event);
  const btn = event.target;
  // console.log(btn);
  const divElt = btn.parentElement;
  // console.log(divElt);
  var quntetiyTag = divElt.querySelector("p");
  // console.log(quntetiyTag);
  var quentityValue = Number(quntetiyTag.innerHTML);
  // console.log(typeof(quentityValue));
  quentityValue++;
  // console.log(quentityValue);
  quntetiyTag.innerHTML = quentityValue;
  const unitePriceValue=Number(divElt.parentElement.parentElement.querySelector(".unitPrice").innerHTML)
//   console.log(unitePriceValue);
var priceTag=divElt.parentElement.parentElement.querySelector(".price")
var priceValue=Number(priceTag.innerHTML)
priceValue=quentityValue*unitePriceValue
priceTag.innerHTML=priceValue
console.log(priceValue);
}
const btnMinus = document.getElementsByClassName("minus");

// console.log(btnMinus);
for (i = 0; i < btnMinus.length; i++) {
  btnMinus[i].addEventListener("click", decrement);
}
//this is a function for decrement
function decrement(event) {
  // console.log(event);
  const btn = event.target;
  // console.log(btn);
  const divElt = btn.parentElement;
  // console.log(divElt);
  var quntetiyTag = divElt.querySelector("p");
  // console.log(quntetiyTag);
  var quentityValue = Number(quntetiyTag.innerHTML);
  // console.log(typeof(quentityValue));
  if (quentityValue>0){
    quentityValue--;
  }
  // console.log(quentityValue);
  quntetiyTag.innerHTML = quentityValue; 
  const unitePriceValue=Number(divElt.parentElement.parentElement.querySelector(".unitPrice").innerHTML)
//   console.log(unitePriceValue);
var priceTag=divElt.parentElement.parentElement.querySelector(".price")
var priceValue=Number(priceTag.innerHTML)
priceValue=quentityValue*unitePriceValue
priceTag.innerHTML=priceValue
console.log(priceValue);
//disable button si 0

}
// activate the delete button
function deleteItem(event){
const DeleteBtn= document.getElementsByClassName("fas fa-trash-alt");
}

function total(e) {
  const checkBox = e.target;
  const trElt = checkBox.parentElement.parentElement;
  const priceValue = Number(trElt.querySelector(".price").innerHTML);
  var totalTag = document.getElementById("total");
  var totalValue = Number(totalTag.innerHTML);
  const btnPlus=checkBox.parentElement.parentElement.querySelector(".plus");
  const btnMinus=checkBox.parentElement.parentElement.querySelector(".minus");

if (checkBox.checked===true) {
    totalValue+=priceValue;
    btnPlus.setAttribute("disabled", true)
    btnMinus.setAttribute("disabled", true)
}
else{
    totalValue-=priceValue;
    btnPlus.removeAttribute("disabled")
    btnMinus.removeAttribute("disabled")


}

totalTag.innerHTML=totalValue;



}

function decriment(e) {
  const btn = e.target;
  const divElt =btn.parentElement;
  var quentityTag = divElt.querySelector("p");
  var quentityValue = Number(quentityTag.innerHTML);
  quentityValue--;
  quentityTag.innerHTML = quentityValue;
  const trElt = divElt.parentElement.parentElement;
  const unitePriceValue = Number(trElt.querySelector(".unitPrice").innerHTML);
  var priceTag = trElt.querySelector(".price");
  var priceValue = Number(priceTag.innerHTML);
  priceValue = unitePriceValue * quentityValue;
  priceTag.innerHTML = priceValue;
  if (priceValue < 0) {
    priceTag.innerHTML = 0;
    quentityTag.innerHTML =0;
  }
}
function remove(e) {
  const del= e.target;
  console.log(del);
  const trElt=del.parentElement.parentElement.parentElement.parentElement
  console.log(trElt)
  trElt.remove()
}
function like(e) {
  const btn = e.target;
  if(btn.style.color=="red"){
    btn.style.color = "grey"
  }
  else{btn.style.color="red"}
}