const app = Vue.createApp({
  data() {
    return { 
      enteredValue : '',
      goals: []
    };
  },

  methods: {
    addGoal (){
      this.goals.push(this.enteredValue)
      this.enteredValue = ''
    },
    removeItem(index){
    this.goals.splice(index, 1)
   
    }
  },
});

app.mount('#user-goals');
