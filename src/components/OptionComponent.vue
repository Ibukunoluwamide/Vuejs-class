<template>
  <form action="" method="post" @submit.prevent="signUp">
    <div class="">
      <label for="">Name</label>
      <input
        type="text"
        name="name"
        v-model="v$.form.name.$model"
        placeholder="Name"
        required
      />
      <div v-for="error in v$.form.name.$errors" :key="error">
        <span>{{error.$message}}</span>
      </div>
      <label for="">Email</label>
      <input
        type="text"
        name="email"
        v-model="v$.form.email.$model"
        placeholder="Email"
        required
      />
      <div v-for="error in v$.form.email.$errors" :key="error">
        <span>{{error.$message}}</span>
      </div>
      <label for="">Password</label>
      <input
        type="password"
        name="password"
        v-model="v$.form.password.$model"
        placeholder="Password"
        required
      />
      <div v-for="error in v$.form.password.errors" :key="error">
        <span>{{error.$message}}</span>
      </div>
    </div>
    <button type="submit">Sign Up</button>
  </form>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength, email } from "@vuelidate/validators";
export default {
  setup() {
    useVuelidate();
    return {v$: useVuelidate() };
  },
  data() {
    return {
      name: "Olamide",
      school: "SQI",
      // User Inputs
      form: {
        name: "",
        email: "",
        password: "",
      },
      //Validation rules
    };
  },
  validations() {
    return {
      form: {
        name: { required, min: minLength(5), max: maxLength(11) },
        email: { required, email },
        password: { required, min: minLength(6), max: maxLength(20) },
      },
    };
  },
  methods: {
    sayHello() {
      console.log("Hello World " + this.name + this.myName);
    },
    signUp(){
        console.log(this.form);
    }
  },

};
</script>

<style>
</style>