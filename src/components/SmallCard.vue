
<template>
  <div class="grid grid-cols-6 mb-4">
    <div class="col-span-2">
      <img class="rounded w-5/6 h-full object-cover" src="../assets/img/photo.jpg"/>
    </div>
    <div class="col-span-4">
      <div class="flex justify-between items-center">
        <p class="inline">Desember 14, 2020</p>
        <button class="text-white bg-green-500 px-4 py-1 rounded">Healthy Eating</button>
      </div>
      <div>
        <h6 class="my-3 text-xl font-semibold">Apa Itu Sugar Craving dan Cara Mengelolanya?</h6>
        <router-link to="/detail" class="font-bold text-gray-500">Selengkapnya</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
name: "SmallCard"
}

</script>

<style></style>