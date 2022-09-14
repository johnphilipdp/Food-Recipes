<template>
  <div>
    
    <h1 class="mt-[20px] text-2xl font-bold">
      Add Food 
    </h1>

    <form @submit.prevent="addItem">
      <div class="form-item">
        <label>Add Title</label>
        <input v-model="food.title" type="text" placeholder="Add Title">
      </div>
      <div class="form-item">
        <label>Add Description</label>
        <input v-model="food.description" type="text" placeholder="Add Description">
      </div>
      <button type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="44"
          height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
          <circle cx="12" cy="14" r="2" />
          <polyline points="14 4 14 8 8 8 8 4" />
        </svg>
        Save
      </button>
    </form>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    props: ['id'],
    data() {
      return {
        food: {
          title: '',
          description: ''
        }
      }
    },
    methods: {
      async addItem() {
        await axios.post(`https://foodforthebestapi.herokuapp.com/api/recipes/`, this.food)
      }
    }
  }
</script>
<style>
form {
  padding: 20px;
}

.form-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
</style>