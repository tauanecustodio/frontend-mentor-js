const stars = document.querySelectorAll('input[type="radio"]');
let starValue;

// atribuir valor selecionado a uma váriavel
stars.forEach((star) => {
    star.addEventListener('click', function(e) {
        starValue = this.value;
    })
})

// funções
function starNullAnimation() {
    document.getElementById("rating-container").classList.add("not-selected");
    setTimeout(() => {
        document.getElementById("rating-container").classList.remove("not-selected");
    }, "3500");
}

function submitStars(starValue) {
    document.getElementById("rating-state").style.display = "none";             
    document.getElementById("thank-state").style.display = "flex";
    document.getElementById("selected-rating").textContent = starValue;
}

// evento do button submit
document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    // verificar se a variavel está vazia ou não e exercutar a função
    if (!starValue) {
        starNullAnimation();
    } else {
        submitStars(starValue);
    }
})