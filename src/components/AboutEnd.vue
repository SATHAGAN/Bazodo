<template>
   <footer class="abfoot">
        <div class="footcon">
            <div class="footsec">
                <h3>ABOUT BAZODO</h3>
                <p>We manufacture HDPE Rectangle Plant Bags, Rectangular Roof Top Green Grow Bags, Vermi Beds, Azolla beds, Selling Bio Organic Fertilizers and Pesticides, Drain cell, Seedling trays, Plastic Pots, and Entire Terrace and Gardening Materials.</p>
            </div>
            <div class="footsec">
                <h3>INFORMATION</h3>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Deliverable Locations</a></li>
                    <li><a href="#">Gift Cards & Promo Codes</a></li>
                    <li><a href="#">Frequently Asked Questions</a></li>
                    <li><a href="#">Guest Order Tracking</a></li>
                </ul>
            </div>
            <div class="footsec">
                <h3>POLICIES</h3>
                <ul>
                    <li><a href="#">Shipping Policy</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Return and Refund Policy</a></li>
                    <li><a href="#">Delivery Guidelines</a></li>
                </ul>
            </div>
        </div>
        <div class="footbot">
            <p>© 2024 BAZODO™. All Rights Reserved.</p>
            <div class="footicons">
                <a href="#"><img src="" alt="Facebook"></a>
                <a href="#"><img src="" alt="Instagram"></a>
                <a href="#"><img src="" alt="YouTube"></a>
            </div>
        </div>
    </footer>
</template>
<style>
.abfoot {
    background-color: #f8f8f8;
    padding: 20px 0;
}

.footcon {
    display: flex;
    justify-content: space-around;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
    
}

.footsec{
    flex: 1;
    padding: 0 15px;
    
}

.footsec h3 {
    font-size: 23px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: start;
}

.footsec p {
    font-size: 20px;
    color: #555;
    text-align: start;
    padding: 0px;
}

.footsec ul {
    list-style: none;
    padding: 0;
}

.foosec ul li {
    margin-bottom: 5px;
}

.footsec ul li a {
    text-decoration: none;
    color: #555;
    font-size: 20px;
}

.footsec ul li a:hover {
    text-decoration: underline;
}

.footbot {
    display: flex;
    text-align: center;
    padding: 10px;
    border-top: 1px solid #ddd;
    margin-top: 20px;
    justify-content: space-between;
}

.footbot p {
    text-align: start;
   padding-left: 60px;
    font-size: 14px;
    color: #555;
}
.footbot a{
    text-align: center;
}

.footicons {
    margin-top: 10px;
    text-align: end;
    padding-right: 70px;
}

.footicons a img {
    width: 20px;
    margin: 0 5px;
 
}
</style>
