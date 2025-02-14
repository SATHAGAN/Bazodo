<template>
  <div class="headcard">
    <div class="headcard">
      <h1 class="ccard"> Find Us on the<span>Favorite platform</span></h1>
    </div>
    <div class="hcard">
      <div class="Card">
        <h1> Google</h1>
        <button>Vist our Store</button>
      </div>
      <div class="Card">
        <h1>Amazon</h1>
       <button>Vist our Store</button>
      </div>
      <div class="Card">
        <h1>Meesho</h1>
        <button>Vist our Store</button>
      </div>
    </div>
  </div>
</template>
<style>
.headcard h1,
p {
  text-align: center;
  font-size: 30px;
  padding: 10px;
  
}
.headcard span {
  color: green;
  padding-left: 10px;
}

.hcard {
 
  
  display: grid;
  padding: 50px;
  margin: 1em auto;
  /* grid-auto-rows:repeat(auto-fill),minmax(230px,1fr); */
  grid-template-areas: 'a a  a';
  gap:20px;
 justify-content: center;
  


}
.Card {
  box-shadow: 0 4px 8px 0;
  border-radius: 5px; 
  
  transition: 0.3s;
  border: 1px solid #999;
  display: grid;
  border-radius:3px;
  grid-template-rows:auto;
  margin: 20px;
  
  

}
.Card p{
    text-align: start;
    font-size: 25px;
}
.Card h1{
    text-align: center;
    padding: 50px;

    
}
.Card button{

    background: green;
    color: white;
    border-radius: 30px;
    padding: 10px;

    
}
</style>
