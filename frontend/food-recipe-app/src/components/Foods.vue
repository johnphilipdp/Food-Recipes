<template>
  <div class="flex mt-[10px] food-lists">
    <template v-for="(food,i) in foods" :key="i"> 
        <Card :food="food" />
    </template>
  </div>
</template>
<script>
import axios from 'axios'
import Card from './Card.vue'
export default {
  name: "C-foods",
  components: { Card },
  data() {
    return {
      foods: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const res = await axios.get('https://foodforthebestapi.herokuapp.com/api/recipes/')
        this.foods = res.data.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped>
.outer-card {
  width: calc(100% / 4 - 20px);
}

.food-lists {
  align-items: stretch;
}
</style>