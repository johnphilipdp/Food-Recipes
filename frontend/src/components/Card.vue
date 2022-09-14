<template>
  <div class="card mr-[10px] p-[15px] w-full" v-if="food">
    <router-link :to="{path: `/${food._id}`}">
    <div class="img-container">
      <img
        :src="'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F01%2Fmain%2Fdiner-style-scrambled-eggs.jpg%3Fitok%3DQ-A612IW'"
        alt="">
    </div>
    
    <div class="body-text py-[20px]">
        <h1 class="font-bold text-2xl mb-[10px]">
          {{ food.title }}
        </h1>
        <p class="text-sm">
          {{ food.description }}
        </p>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ['food'],
  name: "c-card"
}
</script>
<style scoped>
.card {
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  background: white;
  border-radius: 5px;
  transition: all .3s ease;
  cursor: pointer;
}

.card .img-container {
  width: 100%;
  height: 350px;
  overflow: hidden;
}

.img-container img {
  object-fit: cover;
}


.card:hover {
  box-shadow: none;
}
</style>