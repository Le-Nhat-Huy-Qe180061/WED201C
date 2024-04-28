const tourName = document.getElementById("tour");
const numberPerson = document.getElementById("number");
const showBill = document.querySelector(".book-tour__footer");
const priceOfTour = document.getElementById("priceOfTour");

let price = 100;
let number = 0;

tourName.addEventListener("change", () => {
  price = tourName.options[tourName.selectedIndex].value;
  priceOfTour.innerText = `${price}$/Person`;
});

numberPerson.addEventListener("change", () => {
  number = parseInt(numberPerson.value);
});

function CalTotal() {
  let totalPrice = price * number;
  console.log(totalPrice);
  showBill.innerHTML = `<span id="bill">Total amount: ${totalPrice}$<span/>`;
}
