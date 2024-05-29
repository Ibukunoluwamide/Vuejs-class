<template>
  <h1>Recipe</h1>
   <RecipeCard v-for="(recipes, index) in recipes" :key="index" :recipedetails="recipes"/>
</template>

<script setup>
import { onMounted } from 'vue'
import useRecipeStore from '@/store/recipeStore'
import { storeToRefs } from 'pinia'
import RecipeCard from './RecipeCard.vue'
 const store = useRecipeStore()
 const {recipes } = storeToRefs(store)
 onMounted(()=>{
  store.getAllRecipe()
  // console.log(recipes.value);
 })
</script>

<style>

</style>