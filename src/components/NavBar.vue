<template>
  <div class="Navbar">
    <div class="Header">
      <ul>
        <li>+91 81809818302</li>
        <li>support</li>
        <li>bazado@gmail.com</li>
      </ul>
    </div>
    <div class="nav-content">
      <div class="navimg">
        <img
          src="https://0464nbun00.ufs.sh/f/ulJ46yIdWMrJgWbc1oCnFc18wAJu5YZ9bBOPUhvVGtejQd0s"
          alt="Logo"
        />
      </div>
      <div class="Rbar">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Product">Products</RouterLink>
        <RouterLink to="/ContactUS">Contact Us</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
      <div class="icon">
        <a href="">1</a>
        <a href="">2</a>
        <a href="">3</a>
      </div>
    </div>
    <router-view />
  </div>
</template>
<style>
.Navbar {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

.Header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: black;
  background-color: green;
  padding: 10px 20px;
}

.Header ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.Header li {
  padding-right: 20px;
  font-family: "Times New Roman", Times, serif;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:antiquewhite;
  padding: 10px 20px;
}

.navimg img {
  height: 50px; 
}

.Rbar {
  display: flex;
  align-items: center;
  gap: 20px; 
  font-size: 30px;
}

.Rbar a {
  color: black;
  text-decoration: none;
}

.icon {
  display: flex;
  align-items: center;
  gap: 10px; 
}

.icon a {
  color: black;
  text-decoration: none;
}
</style>