<script setup>
import HelloWorld from './components/HelloWorld.vue'
import FormComponent from './components/FormComponent.vue'
import OptionComponent from './components/OptionComponent.vue'
import { RouterLink } from 'vue-router'
const user = {
  id: 123,
  name: 'Olamide'
}
</script>

<template>
  
  <header>
    <!-- <RouterLink :to="{name: 'home'}" >Home</RouterLink>
    <RouterLink :to="{name: 'company-info'}" >Info</RouterLink>
    <RouterLink to="/about" >About</RouterLink>
    <RouterLink :to="`/user/${user.name}`" >User</RouterLink> -->
    <RouterView/>

    <div class="w ">
      <!-- <HelloWorld /> -->
      <!-- <FormComponent/> -->
      <!-- <OptionComponent/> -->
    </div>
  </header>

  <main>
  </main>
</template>

<style scoped>

</style>
