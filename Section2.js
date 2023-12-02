function Start() {
    var iconDowns = document.querySelectorAll(".fa-chevron-down");

    iconDowns.forEach(function (icon) {
        icon.addEventListener('click', function () {          
            var container = icon.closest('.main');
            var content = container.querySelector(".content-" + icon.parentElement.classList[0]);
            content.classList.toggle("active");
        });
    });
}

Start();

