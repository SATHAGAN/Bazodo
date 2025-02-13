<template>
    <div>
    <h1 class="g"><span>Featured</span>products</h1>
    <div class=gridPro>
        <a href="">
            <div class="gridproimg">
            <img src="https://i5aitcb4co.ufs.sh/f/PPrfaRymf7GWoX5P3hipa3k6Oh01rwDnRUbFWXJcLtqAgjum" alt="">
            </div > <h1>mint- 10 packet</h1>
            <p> 25 &#8377;</p>
            </a>

             <a href="">
                <div class="gridproimg">
                  <img src="https://i5aitcb4co.ufs.sh/f/PPrfaRymf7GW1HhbkzLY6rGJK8Q1v4eoVnpqyjU7RsSxHhtc" alt="">
                 </div><h1>carrot seeds packet -bazodo</h1>
                 <p> 25 &#8377;</p>
            </a>
            <a href="">
            <div class="gridproimg">
             <img src="https://i5aitcb4co.ufs.sh/f/PPrfaRymf7GW1HhbkzLY6rGJK8Q1v4eoVnpqyjU7RsSxHhtc" alt="">
            </div><h1>carrot seeds packet -bazodo</h1>
            <p> 25 &#8377;</p></a>
             <a href="">
            <div class="gridproimg">
            <img src="https://i5aitcb4co.ufs.sh/f/PPrfaRymf7GWoX5P3hipa3k6Oh01rwDnRUbFWXJcLtqAgjum" alt="">
            </div > <h1>mint- 10 packet</h1>
            <p> 25 &#8377;</p>
            </a>

             <a href="">
                <div class="gridproimg">
                  <img src="https://i5aitcb4co.ufs.sh/f/PPrfaRymf7GW1HhbkzLY6rGJK8Q1v4eoVnpqyjU7RsSxHhtc" alt="">
                 </div><h1>carrot seeds packet -bazodo</h1>
                 <p> 25 &#8377;</p>
            </a>
            <a href="">
            <div class="gridproimg">
             <img src="https://i5aitcb4co.ufs.sh/f/PPrfaRymf7GW1HhbkzLY6rGJK8Q1v4eoVnpqyjU7RsSxHhtc" alt="">
            </div><h1>carrot seeds packet -bazodo</h1>
            <p> 25 &#8377;</p></a>

    </div>
    </div>
</template>
<script lang="ts">

export default {
    mounted() {
        const element = document.getElementById('gcl');
        if (element) {
            element.style.color = 'green';
        }
     }
}
</script>
<style>
.g{
    text-align: center;
    font-size: 50px; 
    padding-bottom: 30px;
      
}
.g span {
    color: green;
    padding-right: 10px;
}
.gridPro{
    display: grid;
    margin: 30px;
    margin: 20px;
    border-block-color: black;
    grid-template-areas: "a a a";
    gap: 30px;
    justify-items: center;
}

.gridproimg{

    grid-auto-columns: 200px;
    grid-template-areas: "a a a";
    gap:20px;
}
.gridproimg img{
    width: 200px;
    height:200px;
    text-decoration-line: none;
    gap:20px;
}
.gridPro h1{
    color: black;
    text-decoration-style:none ;
    text-decoration-line: none;
    font-size: 30px;

}
.gridPro p{
    text-align: left;
    font-size: 30px;
    text-decoration-line: none;
    color: black;
}
.gridPro a{
    text-decoration-line: none;
}

</style>