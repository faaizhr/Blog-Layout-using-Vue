<script>

import Navbar from '../components/Navbar.vue'
import MainCard from '../components/MainCard.vue';
import SmallCard from '../components/SmallCard.vue'
import SecondaryCard from '../components/SecondaryCard.vue'
import Footer from '../components/Footer.vue'

import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    MainCard,
    SecondaryCard,
    SmallCard,
    Footer
  },
  data() {
    return {
      pokemon: [],
      dropDown: false
    };
  },
  methods: {
    setPokes(data) {
      this.pokemon = data;
    },
    handleDropdown() {
      if (this.dropDown == false) {
        this.dropDown = true;
      } else if (this.dropDown == true) {
        this.dropDown = false
      }
    }
  },
  mounted() {
    axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((response) => {
      this.setPokes(response.data);
      console.log(response.data)
    })
      .catch((error) => console.log(error))
  },
};

</script>



<template>
  <div class="backgroundColor">
    <Navbar/>
    <div class="px-6 sm:px-8 md:px-8 xl:px-72">
      <div class="py-1 text-sm">
       <p><router-link to="/">Beranda </router-link>> <b>Artikel</b></p>
      </div>
      <div class="mb-20">
        <div class="my-10 grid grid-cols-1 md:grid-cols-2 mb-10 items-center">
          <h1 class="text-3xl font-bold text-center md:text-left mb-5 md:mb-0">Bacaan Untukmu</h1>
          <input type="text" placeholder="CARI..." class="rounded-xl px-4 max-w-none md:max-w-xs h-10 border border-green-900 bg-transparent md:ml-auto"/>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="">
            <MainCard/>
          </div>
          <div class="">
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
          </div>
        </div>
        
      </div>
    </div>
    <div class="mx-auto px-6 sm:px-8 md:px-8 xl:px-72 bg-black py-20 rounded-b-3xl">
      
      <div class="my-10 grid grid-cols-1 md:grid-cols-2 mb-10 items-center h-10 z-10">
        <h1 class="text-3xl text-center md:text-left mb-5 md:mb-0 font-bold inline text-white">Artikel Lainnya</h1>
        <div>
          <div @click="handleDropdown" class="rounded px-5 py-2 w-4/6 mx-auto md:mx-0 md:ml-auto text-white border border-white cursor-pointer  bg-black flex justify-between items-center">
            <p>Category</p>
            <font-awesome-icon class="whiteColorIcon" icon="fa-chevron-down" />
          </div>
        </div>
        <div></div>
        <div 
          class="border border-white text-white w-4/6 mx-auto static m-0 md:ml-auto md:mr-0 z-50"
          :style="{ display: dropDown ? 'block' : 'none' }">
          <ul> 
            <li class="px-5 py-2 cursor-pointer bg-black hover:bg-gray-700">Active Lifestyle</li>
            <li class="px-5 py-2 cursor-pointer bg-black hover:bg-gray-700">Cardiovascular</li>
            <li class="px-5 py-2 cursor-pointer bg-black hover:bg-gray-700">Diabetes</li>
            <li class="px-5 py-2 cursor-pointer bg-black hover:bg-gray-700">Diet Program</li>
            <li class="px-5 py-2 cursor-pointer bg-black hover:bg-gray-700">Healthy Eating</li>
          </ul>
        </div>
      </div>
      <div class="container grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 z-0">
        <SecondaryCard/>
        <SecondaryCard/>
        <SecondaryCard/>
        <SecondaryCard/>
        <SecondaryCard/>
        <SecondaryCard/>
      </div>
      <div class="flex justify-center mt-10">
        <button class="bg-white px-5 py-1 rounded-lg ">Load More</button>
      </div>
    </div>
    <Footer/>
  </div>
</template>










<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  * {
    font-family: "Poppins", sans-serif;
  }

  .backgroundColor {
    background-image: linear-gradient(to right, #fbf38f, #fff09a, #ffeea6, #ffecb2, #ffeabe, #ffe7c1, #ffe4c4, #ffe1c8, #ffdbc5, #ffd5c2, #ffd0c0, #fecabf);
  }

  .whiteColorIcon {
    color: white;
    fill: white;
  }
</style>
