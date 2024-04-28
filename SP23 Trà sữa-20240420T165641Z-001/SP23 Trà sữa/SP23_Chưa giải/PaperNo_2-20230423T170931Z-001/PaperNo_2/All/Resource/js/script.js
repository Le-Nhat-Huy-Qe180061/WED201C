

function CalTotal() {
    let total = 0,
        menuListItem = document.querySelectorAll(".menu-list")[0],
        menuListCard = document.querySelectorAll(".menu-list")[1],
        totalPrice = document.getElementById("total-price"),
        checkedItems = menuListItem.querySelectorAll('input[type="checkbox"]:checked'),
        menuListFooter = menuListCard.querySelector('.menu-list_footer'),
        menuListCardContent = menuListCard.querySelector(".menu-list_content");



    menuListCardContent.innerHTML = "";

    checkedItems.forEach((item) => {
        const itemName = item.parentElement.querySelector("label").innerText;
        total += Number(item.value);
        menuListCardContent.innerHTML += `
            <div class="menu-list__item-name"> 
            <div>
            <label> ${itemName} </label>
            </div> 
            </div>`
    })

    totalPrice.innerText = `${total}`;
    if(total > 0)
    {
        menuListFooter.style.display = "block";
    }
    else
    {
        menuListFooter.style.display = "none";
    }
}