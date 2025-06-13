const recipes = [
    {
        name: "Spaghetti Bolognese",
        ingredients: [
            "200g spaghetti",
            "100g ground beef",
            "1 onion, chopped",
            "2 cloves garlic",
            "400g canned tomatoes",
            "Salt, pepper, basil"
        ],
        instructions: "Cook spaghetti. Brown beef with onion and garlic. Add tomatoes, season. Simmer 15 mins. Serve over spaghetti."
    },
    {
        name: "Chicken Curry",
        ingredients: [
            "2 chicken breasts",
            "1 onion",
            "2 cloves garlic",
            "1 tbsp curry powder",
            "200ml coconut milk",
            "Salt, pepper"
        ],
        instructions: "Fry onion and garlic. Add chicken and brown. Add curry powder and coconut milk. Simmer until cooked through."
    },
    {
        name: "Pancakes",
        ingredients: [
            "1 cup flour",
            "1 egg",
            "1 cup milk",
            "1 tbsp sugar",
            "Pinch of salt",
            "Butter for frying"
        ],
        instructions: "Mix ingredients. Fry in butter until golden. Serve with toppings of your choice."
    }
];

const recipeList = document.getElementById("recipeList");
const recipeDetails = document.getElementById("recipeDetails");

recipes.forEach((recipe, index) => {
    const li = document.createElement("li");
    li.textContent = recipe.name;
    li.addEventListener("click", () => displayRecipe(index));
    recipeList.appendChild(li);
});

function displayRecipe(index) {
    const recipe = recipes[index];
    recipeDetails.innerHTML = `
        <h2>${recipe.name}</h2>
        <h3>Ingredients:</h3>
        <ul>
            ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
        <h3>Instructions:</h3>
        <p>${recipe.instructions}</p>
    `;
}
