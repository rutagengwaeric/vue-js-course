<template>
  <ul class="container">
      <li v-for="goal in goals" :key="goal">
       <slot :item="goal"></slot>
      </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      goals: ['Finishing My Goals', 'Simple People'],
    }
  },
}
</script>

<style>
ul {

  padding: 0;
}

li {
  margin-bottom: 10px;
}
.container {
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

</style>



