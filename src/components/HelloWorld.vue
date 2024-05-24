<script setup>
import { ref, computed } from "vue";
const name = "Olamide";
const num = ref(3);
const check = ref(true);
const checkDay = ref("Wednesday");
const students = [
  { id: 1, name: "John", paid: true },
  { id: 2, name: "Jane", paid: false },
  { id: 3, name: "Peter", paid: true },
  { id: 4, name: "Olamide", paid: true },
];
const togglePaid = (id)=>{
  console.log(id);
  let std = students.find((student,index)=>student.id==id)
  console.log(std);
  std.paid = !std.paid
  console.log(std);
}

const paidStudents = computed(()=>{
  return students.filter(student => student.paid)
})

</script>

<template>
  <h4>Hello World, Welcome to VUE 3</h4>
  <button @click="num++">Increase</button>
  <p>{{ num }}</p>
  <div v-for="(student, index) in students" :key="index">
    <p :class="student.paid?'bg-green-500':'bg-red-500'" @click="togglePaid(student.id)">{{ student.name }}</p>
  </div>

  <p v-if="checkDay=='Wednesday'" class="text-blue-500">Today is Wednesday</p>
  <p v-else>Today is Thursday</p>
  <p v-show="check">Show VUE</p>
  <div v-for="(student, index) in paidStudents" :key="index">
    <p>{{ student.name }}</p>
  </div>

  
   


</template>

<style scoped>
</style>
