<template>
    <div id="ProductDetails">
        <HeaderStore />
        <div class="container mt-5">
          <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-light">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Product-Details</li>
              </ol>
          </nav>
        </div> 
        <div class="mt-5" >
            <DeskripsiProduk />
        </div>
        <div class="mt-5" >
            <BarangTerbaru />
        </div>
        <div class="mt-5">
            <FooterStore />
        </div>
    </div>
</template>

<script>
import HeaderStore from '../components/HeaderStore';
import BarangTerbaru from '../components/BarangTerbaru';
import FooterStore from '../components/FooterStore';
import DeskripsiProduk from '../components/DeskripsiProduk';

export default {
    name : 'ProductDetails',
    components : {
        HeaderStore,
        BarangTerbaru,
        FooterStore,
        DeskripsiProduk,
    }
}
</script>

<style lang="en">
    
</style>