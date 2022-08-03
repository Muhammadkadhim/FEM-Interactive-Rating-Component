let submitBtn = document.getElementById("submitBtn");
let rates = document.querySelectorAll("[data-rate]");
let selectedRate;
let ratingCard = document.getElementById("ratingCard");
let successCard = document.getElementById("successCard");

// getting the selected rate
rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        selectedRate = rate.innerText;

        // removing .selected class on other numbers
        rates.forEach((rate) => {
            rate.classList.remove("selected");
        });

        // adding .selected class to the selected number
        rate.classList.add("selected");
    });
});

// sending the selected rate to the (thank you) card

submitBtn.addEventListener("click", () => {
    if (selectedRate) {
        let selectedRateContainer = document.getElementById(
            "selectedRateContainer"
        );
        selectedRateContainer.innerText = selectedRate;

        ratingCard.classList.add("hide");
        successCard.classList.add("show");
    }
});
