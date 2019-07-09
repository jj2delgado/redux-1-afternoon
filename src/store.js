import { createStore} from 'redux'

const initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_RECIPE = 'UPDATERECIPE'
export const UPDATE_CATEGORY = 'UPDATECATEGORY'
export const UPDATE_AUTHOR_FIRST = 'UPDATE_AUTHOR_FIRST'
export const UPDATE_AUTHOR_LAST = 'UPDATE_AUTHOR_LAST'
export const UPDATE_INGREDIENT_LIST = 'UPDATE_INGREDIENT_LIST'
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION'
export const ADD_RECIPE = 'ADD_RECIPE'


function reducer (state = initialState, action){
    const {type, payload} = action

    switch (type){
        case UPDATE_RECIPE: return{
            ...state, name: payload
        }
        case UPDATE_CATEGORY: return{
            ...state, category: payload
        }
        case UPDATE_AUTHOR_FIRST: return{
            ...state, authorFirst: payload
        }
        case UPDATE_AUTHOR_LAST: return {
            ...state, authorLast: payload
        }
        case UPDATE_INGREDIENT_LIST:
            const newIngredients = [...state.ingredients, payload]
            return {
                ...state, ingredients: newIngredients
        }
        case ADD_INSTRUCTION: 
        const newINstructions = [...state.instructions, payload]
        return{...state,instructions: newINstructions}
        case ADD_RECIPE: 
        const {
            name, category, authorFirst, authorLast, ingredients, instructions
        } = state
        const recipe = {
            name, category, authorFirst, authorLast, ingredients, instructions}
            const newRecipes = [...state.recipes, recipe]
            return {...state, recipes: newRecipes}
        
        default: return state
    }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())