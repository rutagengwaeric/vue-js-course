<template>
  <div>
    <the-header></the-header>

    <button @click="selectedComponents('active-goal')">Active Goals</button> &nbsp;
    <button @click="selectedComponents('manage-goals')">Manage Goals</button>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>

  </div>
</template>

<script>
import CourseGoals from './components/CourseGoals.vue'
import TheHeader from './components/TheHeader.vue'
import ManageGoals from './components/ManageGoals.vue'
import ActiveGoal from './components/ActiveGoal.vue'

export default {
  components: {
    TheHeader,
    CourseGoals,
    ManageGoals,
    ActiveGoal,
  },

  data() {
    return {
      selectedComponent: 'active-goal',

      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    }
  },

  methods: {
    selectedComponents(cmp) {
      this.selectedComponent = cmp
    },
  },
}
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
