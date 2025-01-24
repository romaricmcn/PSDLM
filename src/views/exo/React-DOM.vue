<template>
  <div>
    <input v-model="value" />
    <button v-on:click="dimValue(10)"></button><p>nombre => {{ valuer }}</p><button v-on:click="augValue(13)"></button>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

let valuer = 10 ;

function augValue(a){
  valuer += a ;
};
function dimValue(b){
  valuer -= b ;
};