const recipesReducer = (prevRecipes = [], action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            return [...prevRecipes, action.recipe]
        case 'EDIT_RECIPE':
            return [...prevRecipes].map((recipe, i) => {
                if(i=== action.index) {
                    return action.updatedRecipe;
                } else {
                    return recipe;
                }
            })
        case 'REMOVE_RECIPE':
            return [...prevRecipes].filter((recipe, i) => {
                return i !== action.index;
                // returns all items of the array where array item index does not match index provided
            })
        default:
            return prevRecipes
    }
}

//action creators
export const addRecipe = (recipe) => {
    // returns an action object with a type (ADD_RECIPE) and a payload (recipe)
    return {
        type: "ADD_RECIPE",
        recipe
    }
} 

export const editRecipe = (updatedRecipe, index) => {
    return {
        type: "EDIT_RECIPE",
        updatedRecipe,
        index
    }
} 

export const removeRecipe = (index) => {
    return {
        type: "REMOVE_RECIPE",
        index
    }
}

export default recipesReducer;


