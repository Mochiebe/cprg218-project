var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const Random = document.getElementById("random");

Random.addEventListener("click", logRandomRecipe);

async function logRandomRecipe(event) {
    try {
    const response = await
    fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const RandomRecipe = await response.json();
    displayRecipe(RandomRecipe.meals[0]);
    } catch (error) {
        console.error('Error fetching recipe', error);
    }
}

function displayRecipe(recipe) {
    recipeContainer.innerHTML = `
        <h3 class="meal">${recipe.strMeal}</h3>
        <h3 class="instr">Ingredients</h3>
        <ul class="ingredient">
            <li>${recipe.strIngredient1}</li>
            <li>${recipe.strIngredient2}</li>
            <li>${recipe.strIngredient3}</li>
            <li>${recipe.strIngredient4}</li>
            <li>${recipe.strIngredient5}</li>
            <li>${recipe.strIngredient6}</li>
            <li>${recipe.strIngredient7}</li>
            <li>${recipe.strIngredient8}</li>
            <li>${recipe.strIngredient9}</li>
            <li>${recipe.strIngredient10}</li>
        </ul>
        <h3 class="instr">Instructions</h3>
        <p class="instr">${recipe.strInstructions}</p>
        `;
}

const date = new Date();
let fullYear = date.getFullYear();
document.getElementById("date").innerHTML = fullYear;