<template>
  <div v-if="food">
    <router-link to="/">
      <div class="food-actions flex">
        <button class="mr-[15px]">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back-up" width="44"
            height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
          </svg>
          Go back
        </button>
        <router-link :to="{path: `/edit/${food._id}`}">
          <button class="mr-[15px]">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="44" height="44"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
              <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
            </svg>
            Edit
          </button>

        </router-link>
        <button @click="removeItem">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="44" height="44"
            viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
          Delete
        </button>
      </div>

    </router-link>
    <div class="food-cover w-full h-[300px]">
      <img
        src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F01%2Fmain%2Fdiner-style-scrambled-eggs.jpg%3Fitok%3DQ-A612IW"
        alt="">
    </div>
    <h2 class="uppercase text-2xl font-bold mb-[20px]">
      {{ food.title }}
    </h2>
    <div class="flex">
      <div class="food-desc  mr-[200px]">
        <h2 class="mb-[10px] uppercase text-xl font-bold">
          Description:
        </h2>
        <p>
          {{ food.description }}
        </p>
      </div>
      <div>
        <h2 class="mb-[10px] uppercase text-xl font-bold">
          Ingredients:
        </h2>
        <ul>
          <li v-for="(ig, i) in food.ingredients" :key="i">
            {{ig}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "c-food",
  props: ['id'],
  data() {
    return {
      food: null
    }
  },
  created() {
    this.fetchSingleFood()
  },
  methods: {
    async fetchSingleFood() {
      const food = await axios.get(`https://foodforthebestapi.herokuapp.com/api/recipes/${this.id}`)

      this.food = food.data.data
    },
    removeItem() {
      const userYes = confirm('You sure to remove item?')
      if (userYes) {
        axios.delete(`https://foodforthebestapi.herokuapp.com/api/recipes/${this.id}`)
      }
    }
  }
}
</script>
<style>
.food-cover {
  overflow: hidden;
  margin-bottom: 20px;
}

.food-cover img {
  width: 100%;
  object-fit: cover;

}
</style>