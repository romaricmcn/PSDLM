<template>
  <div>
    <input v-model="value" />
    <p>{{nomUser}}</p>
    <input type="text" value={{nomUser}}>
    <p>{{ageUser}} ans</p>
    <p>age + 10 :</p>
    <p>Noméro fétiche {{ favNumUser }}</p>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const nomUser = ref("DJ.Vega");
const ageUser = ref(42);
const favNumUser = ref(Math.sailing(Math.random()*100));

function agePlus10(){
  return ageUser + 10;
};

</script>

<style scoped lang="css">
</style>