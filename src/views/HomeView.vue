<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import Navbar from '../components/Navbar.vue'
import Path from '../components/Path.vue';
import MainArticleContainer from '../components/MainArticleContainer.vue'
import MainCard from '../components/MainCard.vue';
import SmallCard from '../components/SmallCard.vue'
import SecondaryCard from '../components/SecondaryCard.vue'
import Footer from '../components/Footer.vue'

</script>

<template>
  <div class="backgroundColor">
    <Navbar/>
    <Path/>
    <div class="mx-auto px-2 sm:px-12 md:px-24 xl:px-72 mb-20">
      <div class="flex justify-between items-center">
        <h1 class="py-5 text-3xl font-bold inline">Bacaan Untukmu</h1>
        <input type="text" placeholder="CARI..." class="rounded-xl px-4 py-2 border border-green-900 bg-transparent"/>
      </div>
      <div class="grid grid-cols-2 gap-6">
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
    <div class="mx-auto px-2 sm:px-12 md:px-24 xl:px-72 bg-black py-20 rounded-b-3xl">
      <div class="flex justify-between">
        <h1 class="text-3xl font-bold inline text-white">Artikel Lainnya</h1>
        <Select class="rounded px-5 py-1">
          <option>All Category</option>
          <option></option>
          <option></option>
        </Select>
      </div>
      <div class="container grid grid-cols-3 gap-5 mt-20">
        <SecondaryCard/>
        <SecondaryCard/>
        <SecondaryCard/>
        <SecondaryCard/>
        <SecondaryCard/>
        <SecondaryCard/>
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
</style>
