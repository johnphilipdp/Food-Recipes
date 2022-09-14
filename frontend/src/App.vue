<template>
  <div class="m-[10px] h-screen bg-slate-50">
    <Navbar />
    <router-view :key='$route.fullPath'></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
  
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@import url('https://fonts.googleapis.com/css2?family=Hind:wght@300&family=Montserrat:wght@300&display=swap');


h1,
h2,
h3,
h4,
h5,
label,
button {
  font-family: 'Montserrat', sans-serif;
}

p,
span,
li,
ul,
a,
input {
  font-family: 'Hind', sans-serif;

}
</style>
