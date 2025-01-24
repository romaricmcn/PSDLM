<template>
   <div id="app">
    <h1>TP: Le Numéro Gagnant</h1>
    <div>
      <button @click="addNumber(1)" >+1</button>
      <button @click="addNumber(5)" >+5</button>
    </div>
    <p>Le nombre : {{ mysteryNumber }}</p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mysteryNumber: 0,
      timer: null,
    };
  },
  computed: {
    message() {
      if (this.mysteryNumber < 7) {
        return "ESSAIE ENCORE!";
      } else if (this.mysteryNumber === 7) {
        return "Tu as trouvé le nombre mystère : 7 !";
      } else {
        return "Tu as dépassé le Nb Mystère";
      }
    },
  },
  methods: {
    addNumber(value) {
      this.mysteryNumber += value;
    },
  },
  watch: {
    mysteryNumber(newValue) {
      if (newValue > 30) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.mysteryNumber = 0;
        }, 3000);
      }
    },
  },
};
</script>

<style scoped lang="css">
</style>