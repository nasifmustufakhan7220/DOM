const cardHeartCountBtn = document.querySelectorAll(".card-heart-count");

cardHeartCountBtn.forEach(button => {
    button.addEventListener("click", function () {
        const heratCount = parseInt(document.getElementById("heart-count").innerText);
        let result = heratCount + 1;
        document.getElementById("heart-count").innerText = result;
    })
})