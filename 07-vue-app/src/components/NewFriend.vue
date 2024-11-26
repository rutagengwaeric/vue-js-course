<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="friend-name">Friend Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label for="friend-phone">Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label for="friend-email">Email</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <button type="submit">Add Friend</button>
  </form>
</template>


<script>
export default {

    data(){
        return {
            enteredName : '',
            enteredPhone : '',
            enteredEmail : '',
        };
    },
    emits : ['add-friend'],
    methods : {
        submitData(){
            this.$emit('add-friend',
            this.enteredName,
            this.enteredPhone,
            this.enteredEmail
            );
            this.enteredName = '';
            this.enteredPhone = '';
            this.enteredEmail = '';
        }
    }
};
</script>