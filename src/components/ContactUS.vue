<template>
  <div class="Conhead">
    <div class="gett">
      <h5 style="color: green">Contact us</h5>
      <h5>Get in touch</h5>
      <p>Our friendly team would love to hear from you.</p>
    </div>
    <div class="congrid">
        <div class="grtr">
      <div class="gridin">
        <h3>Email</h3>
        <p>Our friendly team is here to help.</p>
        <p style="color: green">admin@bazodo.com</p>
      </div>
      <div class="gridin">
        <h3>Office</h3>
        <p>Come say hello at our office.</p>
        <p style="color: green">Bazodo Enterprises, Near Sankagiri Toll Gate Olakkachinnanur,<br> Salem - Kochi Hwy, Vaikundam, Tamil Nadu 637103</p>
      </div>
      <div class="gridin">
        <h3>Phone
</h3>
        <p>Mon-Fri from 9am to 6pm</p>
        <p style="color: green">+919597386235</p>
      </div>
      
    </div>
    <div class="ifr">
        <h3></h3>
        <p></p>
        <p style="color: green"></p>
       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15638.191807357092!2d77.91748699987492!3d11.51249100020727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba95e485567f6e1%3A0x88a2af4f6f24205d!2sBazodo%20Enterprises!5e0!3m2!1sen!2sin!4v1739544640812!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
    <div>
        <about-end/>
    </div>
  </div>
</template>
<script lang="ts">
import AboutEnd from './AboutEnd.vue'
export default {
    name:"App",
    components:{
        AboutEnd

    }

    
}
</script>
<style>
.congrid{
    display: flex;
    font-size: 20px;
    text-align: start;
    width: auto;
    padding: 40px;
    gap:20px;
}
.congrid h3{
    font-size: 30px;
}
.congrid p{
    font-size: 30px;
    text-align: start;
    
}
.gridin{
    /* flex-direction: column; */
   /* grid-template-areas:'a a'; */
    text-align: start;
    overflow:auto;
}
.gridin p{
 text-align: start;
}

.Conhead{
    margin: 40px;

}
.gett h5 {
    font-size: 30px;
}
.gett p{
    color: gray;
    text-align:left;
}
.ifr{
    display: flex;
    width: auto;
    height:auto;
}

</style>