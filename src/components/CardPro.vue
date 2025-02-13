<template>
  <div class="maincard">
    <div class="mcard">
      <h1 class="ccard"><span>Why</span> Choose us?</h1>
      <p>Discover the advantages of shopping with us</p>
    </div>
    <div class="hcard">
      <div class="Card">
        <h1 style="color: green">Exceptional Quality</h1>
        <p>
          We ensure high quality materials to ensure customer satisfaction and
          product durabilit
        </p>
      </div>
      <div class="Card">
        <h1 style="color: blue">Fast Delivery</h1>
        <p>
          Get your orders delivered quickly and efficiently with our express
          shipping options.
        </p>
      </div>
      <div class="Card">
        <h1 style="color: orange">24/7 Support</h1>
        <p>
          Our dedicated support team is always available to assist you with any
          questions or concerns.
        </p>
      </div>
      <div class="Card">
        <h1 style="color: violet">Secure Transactions</h1>
        <p>
          Shop with confidence knowing that all your transactions are protected
          and secure.
        </p>
      </div>
    </div>
  </div>
</template>
<style>
.mcard h1,
p {
  text-align: center;
  font-size: 30px;
}
.mcard span {
  color: green;
}

.hcard {
 
  
  display: grid;
  padding: 50px;
  margin: 1em auto;
  /* grid-auto-rows:repeat(auto-fill),minmax(230px,1fr); */
  grid-template-areas: 'a a a a';
  gap:20px;

}
.Card {
  box-shadow: 0 4px 8px 0;
  border-radius: 5px; 
  padding: 20px;
  transition: 0.3s;
  border: 1px solid #999;
  display: grid;
  border-radius:3px;
  grid-template-rows:auto;

}
.Card p{
    text-align: start;
    font-size: 25px;
}
.Card h1{
    text-align: center;
}
</style>
