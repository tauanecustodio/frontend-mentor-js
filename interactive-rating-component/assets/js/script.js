document.addEventListener('DOMContentLoaded', function() {
    const ratings = document.querySelectorAll('.rating-number');
    let valueRating;

    ratings.forEach((rating) => {
        rating.addEventListener('click', function() {
            valueRating = parseInt(this.textContent); 
            
            ratings.forEach((r) => r.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    document.getElementById('submit-rating').addEventListener('click', () => {
        if (isNaN(valueRating)) {
            document.getElementById("rating-container").classList.add("not-selected");
        } else {
            document.getElementById("rating-state").style.display = "none";
            document.getElementById("thank-state").style.display = "flex";
            document.getElementById("selected-rating").textContent = valueRating;
        };
    });
});
