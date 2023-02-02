<template>
  <div class="border-b border-gray-300 pb-5 md:border-0">
    <div>
      <img class="rounded" src="../assets/img/photo.jpg"/>
    </div>
    <div>
      <div class="flex justify-between mt-4">
        <p class="inline">Desember 14, 2020</p>
        <button class="text-white bg-green-500 px-4 py-1 rounded text-sm">Healthy Eating</button>
      </div>
      <div class="mt-2">
        <h6 class="my-3 text-xl font-semibold">Apa Itu Sugar Craving dan Cara Mengelolanya?</h6>
        <router-link to="/detail" class="font-bold text-gray-500">
          Selengkapnya
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="ml-1"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>



export default {
name: "MainCard"
}

</script>

<style></style>