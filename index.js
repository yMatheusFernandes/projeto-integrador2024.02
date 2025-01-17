document.addEventListener("DOMContentLoaded", function () {
    const plants = document.querySelectorAll(".plant");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");
    const closeBtn = document.querySelector(".close-btn");

    plants.forEach(plant => {
        plant.addEventListener("click", function () {
            const title = this.getAttribute("data-title");
            const description = this.getAttribute("data-description");

            popupTitle.textContent = title;
            popupDescription.textContent = description;
            popup.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});

