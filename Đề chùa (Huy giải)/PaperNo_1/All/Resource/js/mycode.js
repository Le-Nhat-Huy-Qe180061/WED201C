
function getPrice(id) {
    switch (id) {
        case "1":
            return 100;
            break;
        case "2":
            return 150;
            break;
        case "3":
            return 90;
            break;
        case "4":
            return 120;
            break;
        case "5":
            return 110;
            break;
    }
}



let tour = document.getElementById("tour"),
    price = document.getElementById("price"),
    totalAmout = document.getElementById("total-amout"),
    amout = document.getElementById("amout");

let numberOfPeople = document.getElementById("numberOfPeople");

price.textContent = `${getPrice(tour.value)}$/Person`;


tour.addEventListener("change", () => {
    price.textContent = `${getPrice(tour.value)}$/Person`;
})

function caltotal() {
    totalAmout.style.display = "flex";
    amout.innerHTML = getPrice(tour.value) * numberOfPeople.value + "$";
}