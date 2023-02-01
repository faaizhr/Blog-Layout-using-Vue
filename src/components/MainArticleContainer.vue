<template>
  <div class="cotainer mx-auto sm:px-36 px-2 py-2 bg-gray-200">
    <div class="grid grid-cols-2 gap-6">
      <div class="">
        <h1>Halo</h1>
        <MainCard/>
      </div>
      <div class="bg-yellow-100"><p>halo</p></div>
    </div>
  </div>
</template>

<script>

import MainCard from './MainCard.vue';

export default {
name: "MainArticleContainer"
}
</script>

<style></style>