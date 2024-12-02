<template>
  <div>
    <h1>Manage Goals</h1>
    <input type="text" ref="goal" />
    <button @click="SetGoal">Set Goal</button>
    <error-alert v-if="!inputIsValid">
      <h2>Input is invalid!</h2>
      <p>Please enter at least a few characters...</p>
      <button @click="inputIsValid = true">OKay</button>
    </error-alert>
  </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
  components: { ErrorAlert },
  component: {
     ErrorAlert,
  },
  data() {
    return {
      inputIsValid: true,
    }
  },
  methods: {
    SetGoal() {
      if (this.$refs.goal.value === '') {
        this.inputIsValid = false
        return
      }
    },
  },
}
</script>
