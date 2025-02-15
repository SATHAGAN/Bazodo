<template>
  <div>
    <div class="slider">
      <div class="scroll">
        <img
          src="https://0464nbun00.ufs.sh/f/ulJ46yIdWMrJpTG0E0ngPV7kIeQFxEr8M39NGCHi1hz6jlKo"
          alt="Image 1"
        />
        <img
          src="https://0464nbun00.ufs.sh/f/ulJ46yIdWMrJAu36rnkBw5lv6KaSWbc7GdPHmj8CLf1VuxMN"
          alt="Image 2"
        />
        <img
          src="https://0464nbun00.ufs.sh/f/ulJ46yIdWMrJPJM2Y4wp5Usq7J3KhvSi2rob6gMZyzRtNLFI"
          alt="Image 3"
        />
      </div>
    </div>
    <button class="prev" @click="prevSlide">&#10094;</button>
    <button class="next" @click="nextSlide">&#10095;</button>
    <div class="coll">
      <collecTion />
    </div>
    <div class="shopcol">
      <div class="gridtry">
        <h1>
          Say <span class="gc">Goodbye</span> to
          <span class="rc">High Shipping</span>
          Costs!
        </h1>
        <p>
          Tired of hefty shipping costs? At Bazodo, we've got you covered. With
          our exclusive shipping discounts, you can shop worry-free and save big
          on every order
        </p>

        <a href=""> <button>Shop Collection</button></a>
        <a href="">Check Offers</a>
        <!-- <img
            src="https://0464nbun00.ufs.sh/f/ulJ46yIdWMrJG9Xb7LXh91OtTjc2bKhUBq5GnHVdxE6SzDPW"
            alt="Grow Bag"
          /> -->
      </div>

      <div class="gridtwo">
        <!-- <img
            src="https://0464nbun00.ufs.sh/f/ulJ46yIdWMrJG9Xb7LXh91OtTjc2bKhUBq5GnHVdxE6SzDPW"
            alt="Grow Bag"
          />
          <img
            src="https://0464nbun00.ufs.sh/f/ulJ46yIdWMrJG9Xb7LXh91OtTjc2bKhUBq5GnHVdxE6SzDPW"
            alt="Grow Bag"
          /><img
            src="https://0464nbun00.ufs.sh/f/ulJ46yIdWMrJG9Xb7LXh91OtTjc2bKhUBq5GnHVdxE6SzDPW"
            alt="Grow Bag"
          /><img
            src="https://0464nbun00.ufs.sh/f/ulJ46yIdWMrJG9Xb7LXh91OtTjc2bKhUBq5GnHVdxE6SzDPW"
            alt="Grow Bag"
          />-->
        <!-- <img
            src="https://0464nbun00.ufs.sh/f/ulJ46yIdWMrJG9Xb7LXh91OtTjc2bKhUBq5GnHVdxE6SzDPW"
            alt="Grow Bag"
          /> -->
      </div>
    </div>
    <div>
      <FreaturedProduct />
    </div>
    <div>
      <card-pro />
    </div>
    <div>
      <FreaturedProduct />
    </div>
    <div>
      <plat-form />
    </div>
    <div>
      <FreaturedProduct />
    </div>
    <div>
      <re-view />
    </div>
    <div>
      <about-end />
    </div>
  </div>
</template>

<script lang="ts">
import AboutEnd from "./AboutEnd.vue";
import ReView from "./ReView.vue";
import PlatForm from "./PlatForms.vue";
import CardPro from "./CardPro.vue";
import FreaturedProduct from "./FreaturedProduct.vue";
import CollecTion from "./CollecTion.vue";
export default {
  name: "App",
  components: {
    CollecTion,
    FreaturedProduct,
    CardPro,
    PlatForm,
    ReView,
    AboutEnd,
  },
  methods: {
    // prevSlide() {
    //   const scroll = document.querySelector('.scroll');
    //   scroll.style.transform = `translateX(-${(currentSlide - 1) * 100}%)`;
    // },
    // nextSlide() {
    //   const scroll = document.querySelector('.scroll');
    //   scroll.style.transform = `translateX(-${(currentSlide + 1) * 100}%)`;
    // },
    color: {
      Goodbye: "green",
    },
  },
};
</script>
<style src="@/assets/Styles/demo.css">

</style>