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
  <div>
    <Navbar/>
    <Path/>
    <div class="container mx-auto my-20">
      <div>
        <div class="grid grid-cols-5">
          <div class="border-r border-black ">
            <h6>Ditulis oleh:</h6>
            <p>Jeliana Seliatuw</p>
          </div>
          <div class="ml-10 col-span-2">
            <h6>Ditinjau oleh:</h6>
            <p>Siska Darmayanti, S.Si, M.Farm</p>
          </div>
        </div>
        <div class="mt-10">
          <p class="inline">Terakhir Update, January 31, 2023 09:16 am</p>
          <button class="text-white bg-green-500 px-4 py-1 rounded ml-4">Healthy Eating</button>
        </div>
        <div>
          <h1 class="mt-10 font-bold text-4xl leading-normal">Apa Itu Sugar Craving dan Cara Mengelolanya?</h1>
          <img class="rounded-xl mt-5" src="../assets/img/photo.jpg"/>
        </div>
      </div>
      <div class="">
        <p class="mt-5">Salah satu alasan mengapa penting untuk mengenal apa itu sugar craving adalah, fakta bahwa kondisi ini dapat memicu meningkatnya risiko obesitas dan masalah kesehatan lainnya. 
        <br/><br/>
        Sebuah kajian yang dimuat dalam jurnal ​Obesity Facts menyebutkan bahwa mengonsumsi yang manis-manis dapat berkontribusi pada peningkatan berat badan. Ini dapat terjadi pada anak-anak maupun orang dewasa. 
        <br/><br/>
        Menurut data dari ​Statista di tahun 2021, konsumsi gula di Indonesia adalah 27,5 kg per kapita. Jumlah ini disebutkan akan terus naik. Sementara itu, data dari ​Riset Kesehatan Dasar (Riskesdas) 2018 juga menunjukkan ada peningkatan kasus obesitas dari 14,8% (2013), menjadi 21,8% (2018). 
        </p>
        <h6 class="text-lg font-bold my-4">Apa Itu Sugar Craving?</h6>
        <p>
          Ringkasnya, sugar craving dapat diartikan sebagai kondisi di mana kamu merasa ​ngidam atau ingin makan/minum yang manis-manis. Adapun dorongan untuk mengonsumsi makanan dan minuman manis ini bisa muncul kapan saja. 
          <br/><br/>
          Kondisi ini juga tidak hanya terjadi karena kamu sedang lapar. Ngidam manis bahkan bisa muncul beberapa saat setelah kamu baru saja selesai makan besar.  
          <br/><br/>
          Dorongan untuk mengonsumsi sesuatu yang manis jika muncul sesekali masih bisa dianggap wajar. Namun, apabila kamu mengalami kondisi ini cukup sering, maka kamu perlu tahu apa penyebab serta cara terbaik untuk mengelolanya. 
        </p>
      </div>
    </div>
    <div class="mx-auto px-2 sm:px-12 md:px-24 xl:px-72 bg-black py-20 rounded-b-3xl">
      <h1 class="text-3xl font-bold inline text-white">Artikel Lainnya</h1>
      <div class="container grid grid-cols-3 gap-5 mt-20">
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
