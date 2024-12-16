<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadData">Load Submitted Experiences</base-button>
      </div>

      <p v-if="isLoading">Loading...</p>
      <p v-else-if="error && !isLoading">{{ error }}</p>
      <p v-else-if="!isLoading && results && results.length === 0 && !error">No submitted experiences yet!</p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue'

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading  : false,
      error : null
    }
  },
  methods: {
    loadData(){
      this.isLoading = true;
      fetch("https://vue-test-e2e74-default-rtdb.firebaseio.com/")
      .then((response)=>{
         if (response.ok) {
            return response.json()
         }
      }).then((data) => {
        this.isLoading = false;
        console.log(data);
         const results = [];
          for (const id in data) {
              results.push({
                id : id,
                name : data[id].name,
                rating :data[id].rating
              })
              this.results = results;
          }
      }).catch((error)=>{
        this.isLoading = false;
        console.log(error);
        this.error = 'Failed to fetch data - please try again later';

      })

    }

  },
  mounted () {
    this.loadData();
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
