---
title: "Home"
date: 2026-02-28
draft: false
---

<!-- 3D Hero Section -->
<div class="hero-3d hero-bg">
  <div class="hero-content-3d">
    <h1>Face Dent Production Company</h1>
    <p>Premium Products Made in Afghanistan</p>
    <a href="/products/" class="btn-3d">Explore Products</a>
  </div>
</div>

<!-- Products Section -->
<h2 style="text-align:center; margin-top: 60px;">Our Products</h2>

<div class="product-grid-3d">
  <div class="product-card-3d">
    <img src="/images/products/toothpaste-1.png" alt="Toothpaste">
    <h3>Toothpaste</h3>
  </div>
  <div class="product-card-3d">
    <img src="/images/products/face-cream-1.png" alt="Face Cream">
    <h3>Face Cream</h3>
  </div>
  <div class="product-card-3d">
    <img src="/images/products/hand-cream-1.png" alt="Hand Cream">
    <h3>Hand Cream</h3>
  </div>
  <div class="product-card-3d">
    <img src="/images/products/mouth-wash-1.png" alt="Mouth Wash">
    <h3>Mouth Wash</h3>
  </div>
  <div class="product-card-3d">
    <img src="/images/products/face-wash-1.png" alt="Face Wash">
    <h3>Face Wash</h3>
  </div>
  <div class="product-card-3d">
    <img src="/images/products/toothbrush-1.png" alt="Toothbrush">
    <h3>Toothbrush</h3>
  </div>

<div class="product-card-3d">
    <img src="/images/products/tooth-floss-1.png" alt="Tooth Floss">
    <h3>Tooth Floss</h3>
  </div>

</div>

<!-- Add CSS for 3D effect -->
<style>
.product-grid-3d {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 40px auto;
  max-width: 1200px;
}

.product-card-3d {
  perspective: 1000px;
  transition: transform 0.2s;
}

.product-card-3d img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card-3d:hover img {
  transform: rotateY(15deg) rotateX(10deg) scale(1.05);
  box-shadow: 0 20px 35px rgba(0,0,0,0.3);
}

.product-card-3d h3 {
  text-align: center;
  margin-top: 10px;
}
</style>