<template>
  <li>
    <h2>{{ friend.name }} {{  friend.favorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavourite">Toggle Favorite</button> &nbsp;
    <button @click="toggleDetails"> {{ detailsAreVisible ? 'Hide Details' : 'Show Details' }} </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
    <button @click="$emit('delete-friend', friend.id)">Delete</button>
  </li>
</template>

<script>
export default {

  props: {
    friend: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  emits : ['toggle-favorite', 'delete-friend'],

  methods : {
    toggleDetails(){
        this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite(){
      this.$emit('toggle-favorite', this.friend.id);
    },
  }, 
 
};
</script>