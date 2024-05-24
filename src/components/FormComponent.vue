<template>
  <form action="" method="post">
    <div class="">
    <label for="">Name</label>
    <input type="text" name="name" v-model="name" placeholder="Name" required>
    </div>
    <div class="">
    <label for="">Gender</label>
    <input type="radio" name="gender" value="Male" v-model="gender">
    <label for="">Male</label>
    <input type="radio" name="gender" value="Female" v-model="gender">
    <label for="">Female</label>
    </div>
    <div class="">
    <label for="">Skill</label>
    <input type="checkbox" name="skill" value="React" v-model="skill">
    <label for="">React</label>
    <input type="checkbox" name="skill" value="Vue" v-model="skill">
    <label for="">Vue</label>
    </div>
    <div class="">
        <label for="">Occupation</label>
        <select name="occupation" v-model="occupation">
            <option value="student">Student</option>
            <option value="trader">Trader</option>
            <option value="unemployed">unemployed</option>
            <option value="other">Other</option>
        </select>
    </div>
    <button type="submit" @click="signup">Submit</button>
  </form>
</template>

<script setup>
    import {computed, onMounted, ref } from 'vue'
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength, email } from "@vuelidate/validators";
    // const name = ref('')
    const gender = ref('')
    const skill = ref([])
    const occupation = ref('')
    const users = ref([])
    const form = ref( {
        name: "",
        email: "",
        password: "",
      })
      const name = ref('')
      const userEmail = ref('')
      const password0 = ref('')
      const rules = computed(()=> ({
        // form:{
           name: { required, min: minLength(5), max: maxLength(11) },
        email: { required, email },
        password: { required, min: minLength(6), max: maxLength(20) },
        // }
      }))
      const v$ = useVuelidate(rules, {name, userEmail, password})
     const signup = (e)=>{
        e.preventDefault()
        const user = {name: name.value, gender:gender.value, skill:skill.value, occupation:occupation.value}
        console.log(user);
        users.value.push(user)
        localStorage.setItem('vueUsers', JSON.stringify(users.value))
     }
     onMounted(()=>{
        console.log('Men Mounted');
        users.value=localStorage['vueUsers']?JSON.parse(localStorage['vueUsers']):[]

     })
</script>

<style>

</style>