<template>
  <div id="app">
    <h1>TP Event Binding</h1>
    <div>
      <label for="input1">Input 1 :</label>
      <input
        id="input1"
        type="text"
        @keyup="updateLiveInput"
        placeholder="Tapez ici..."
      />
      <p>Live Input: {{ liveInput }}</p>
    </div>
    <div>
      <label for="input2">Input 2 :</label>
      <input
        id="input2"
        type="text"
        @keyup="updateEscInput"
        placeholder="Tapez ici et appuyez sur ESC..."
      />
      <p>Esc Input: {{ escInput }}</p>
    </div>
    <div>
      <button @click="triggerAlert">Alerte</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      liveInput: "",
      escInput: "",
    };
  },
  methods: {
    updateLiveInput(event) {
      this.liveInput = event.target.value;
    },
    updateEscInput(event) {
      if (event.key === "Escape") {
        this.escInput = event.target.value;
      }
    },
    triggerAlert() {
      alert("ALERTE GENERALE");
    },
  },
};
</script>


</script>

<style scoped lang="css">
</style>