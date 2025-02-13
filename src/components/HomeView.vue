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
        <h1>Say 
            <span class="gc">Goodbye</span> to
           <span class="rc">High Shipping</span>
             Costs!</h1>
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
        <FreaturedProduct/>
      </div>
      <div>
        <card-pro/>
      </div>
      <div>
        <FreaturedProduct/>
      </div>
      <div>
        <plat-form/>
      </div>
       <div>
        <FreaturedProduct/>
      </div>
      <div>
        <re-view/>
      </div>
    </div>
  
</template>


<script lang="ts">
import ReView from './ReView.vue'
import PlatForm from './PlatForms.vue'
import CardPro from './CardPro.vue'
import FreaturedProduct from "./FreaturedProduct.vue"
import CollecTion from "./CollecTion.vue";
export default {
  name: "App",
  components: {
    CollecTion,
    FreaturedProduct,
    CardPro,
    PlatForm,
    ReView
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
    color:{
        Goodbye:'green',
    }
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.slider {
  /* padding-top: 115px; */
  min-width: 50px;

  position: relative;
  margin: 20px;
  overflow: hidden;
}

.scroll {
  display: flex;
  width: 100%;
  animation: slide 18s infinite;
}

.scroll img {
  width: 100%;
  height: 100%;
}

@keyframes slide {
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(-100%);
  }
  75% {
    transform: translateX(-200);
  }
  100% {
    transform: translateX(0%);
  }
}
.prev,
.next {
  position: absolute;
  top: 30%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}
.coll {
  justify-items: center;
}
.shopcol {
  display:flex;
  padding: 30px;
  gap: 20px;
}
.gridtwo {
  grid-auto-columns: 200px;
  grid-template-areas: "a a";
  padding: 10px;
}
.gridtwo img {
  height: auto;
  margin: 0 auto;
}
.gridtry h1{
    text-align: initial;
    font-size: 60px;
}
.gridtry p{
    display: flex;
    text-align: start;
    font-size: 1.2rem;
    line-height: 1.75 rem;
    font-size: 30px;
}
.gridtry button{
    padding: 20px;
    margin: 30px;
    color: white ;
    background: green;
    border-radius: 5px;
    font-size: 20px;
}
.gridtry a{
    text-decoration-line: none;
    color: green;
    padding: 10px;
    margin: 30px;
    font-size: 20px;

}
.gridtry img{
    
    justify-items: flex-end;
    align-items: flex-end;
}
.gc{
    color: green;
}
.rc{
    color: red;
}
</style>
