import axios from "axios"
import {defineStore} from "pinia"
const useRecipeStore = defineStore("recipeStore", {
    state: () => {
       return { 
        recipes: []
    }},
    getters:{
     
    },
    actions:{
       getAllRecipe(){
        axios.get('https://dummyjson.com/recipes')
        .then((result) => {
            console.log(result.data.recipes);
            this.recipes = result.data.recipes
        })
       }
    },
    persist: true,
})

export default useRecipeStore