<template>
  <div class="imgcol">
    <div class="textcolor">
      <h1>Explore</h1>
      <h1 style="color: green">Our Collection</h1>
    </div>
    <div class="imgbox">
      <div class="grid-item">
        <img
          src="https://0464nbun00.ufs.sh/f/ulJ46yIdWMrJG9Xb7LXh91OtTjc2bKhUBq5GnHVdxE6SzDPW"
          alt="Grow Bag"
        />
        <h3>hello</h3>
      </div>
      <div class="grid-item">
        <img
          src="https://0464nbun00.ufs.sh/f/ulJ46yIdWMrJ3N1w65D7braRYWlIn2tAc6epHmOhxGFUvz1E"
          alt="Organic Bio Fertilizer"
        />
        <h3>heloo</h3>
      </div>
      <div class="grid-item">
        <img
          src="https://0464nbun00.ufs.sh/f/ulJ46yIdWMrJe2A6GJ8jSiN2BDa7koXO9fzQL6duT4RbqWJm"
          alt="Seed"
        />
        <h3>helooo</h3>
      </div>
      <div class="grid-item">
        <img
          src="https://0464nbun00.ufs.sh/f/ulJ46yIdWMrJLg3iDkM1gIRNkUKtBqis4orl6C5SMG8enyPp"
          alt="Garden Accessories"
        />
        <h3>hello</h3>
      </div>
      <div class="grid-item">
        <img
          src="https://0464nbun00.ufs.sh/f/ulJ46yIdWMrJuo2ebnIdWMrJKNbIeolZkG9Va4h3mQFg6xSA"
          alt="Plastics Pots"
        />
        <h3>hekoooooo</h3>
      </div>
    </div>
  </div>
</template>
<style>
.textcolor  {
  display: inline;
  font-size: 30px;
  text-align: center;
  justify-items: center;
 

}
.textcolor h1{
    display: inline;
    padding-right: px;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
}
.imgcol {
  padding-inline: 30px;
  margin: 30px;
}
.imgbox {
  display: grid;
  padding: 30px;

  border-color: black;
  grid-auto-columns: 200px;
  grid-template-areas: "a a a";
  gap:20px
  
}

.grid-item{
    border: 1px solid none;
    padding: 10px;
    text-align: center;
}
.grid-item img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  border: 1px solid black;
}

.grid-item h3 {
  margin: 10px 0 0;
}
</style>
