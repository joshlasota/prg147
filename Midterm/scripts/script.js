const recipesData = [
    {
        id: 1,
        name: 'Pasta Carbonara',
        ingredients: ['pasta', 'bacon', 'eggs', 'parmesan cheese', 'black pepper'],
        instructions: 'Cook pasta. Fry bacon until crispy. Mix eggs, cheese, and pepper. Combine everything.'
    },
    {
        id: 2,
        name: 'Chicken Stir-Fry',
        ingredients: ['chicken breast', 'bell peppers', 'onions', 'soy sauce', 'garlic'],
        instructions: 'Slice chicken and veggies. Stir-fry in oil. Add soy sauce and garlic. Cook until tender.'
    },
    // More sample recipes...
];

// Variables
const ingredientInput = document.getElementById('ingredientInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');
const savedRecipesList = document.getElementById('savedRecipes');
const recipeForm = document.getElementById('recipeForm');
let savedRecipes = [];

// Event listeners
searchButton.addEventListener('click', searchRecipes);
savedRecipesList.addEventListener('click', handleSavedRecipesClick);
collectionsList.addEventListener('click', handleCollectionsClick);
recipeForm.addEventListener('submit', saveRecipe);

// Function to search recipes
function searchRecipes() {
    const ingredients = ingredientInput.value.trim().split(',').map(ingredient => ingredient.trim());
    const matchedRecipes = recipesData.filter(recipe =>
        ingredients.every(ingredient => recipe.ingredients.includes(ingredient))
    );

    displaySearchResults(matchedRecipes);
}

// Function to display search results
function displaySearchResults(recipes) {
    searchResults.innerHTML = '';

    if (recipes.length === 0) {
        searchResults.innerHTML = '<p>No recipes found.</p>';
        return;
    }

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <h3>${recipe.name}</h3>
            <p>Ingredients: ${recipe.ingredients.join(', ')}</p>
            <p>Instructions: ${recipe.instructions}</p>
            <button class="save-button" data-id="${recipe.id}">Save</button>
        `;
        searchResults.appendChild(recipeCard);
    });
}

// Function to save a new recipe
function saveRecipe(event) {
    event.preventDefault();

    const recipeName = document.getElementById('recipeName').value.trim();
    const recipeIngredients = document.getElementById('recipeIngredients').value.trim().split('\n').map(ingredient => ingredient.trim());
    const recipeInstructions = document.getElementById('recipeInstructions').value.trim();

    const newRecipe = {
        id: generateRecipeId(),
        name: recipeName,
        ingredients: recipeIngredients,
        instructions: recipeInstructions
    };

    savedRecipes.push(newRecipe);
    displaySavedRecipes();
    recipeForm.reset();
}

// Function to generate a unique ID for a recipe
function generateRecipeId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// Function to handle saved recipes click events
function handleSavedRecipesClick(event) {
    if (event.target.classList.contains('save-button')) {
        const recipeId = parseInt(event.target.dataset.id);
        const recipe = recipesData.find(recipe => recipe.id === recipeId);

        if (recipe && !savedRecipes.some(savedRecipe => savedRecipe.id === recipeId)) {
            savedRecipes.push(recipe);
            displaySavedRecipes();
        }
    }
}

// Function to display saved recipes
function displaySavedRecipes() {
    savedRecipesList.innerHTML = '';
    savedRecipes.forEach(recipe => {
        const li = document.createElement('li');
        li.textContent = recipe.name;
        savedRecipesList.appendChild(li);
    });
}
