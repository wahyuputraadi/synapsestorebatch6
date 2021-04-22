<template>
   <div id="Banner">
     <!-- banner -->
      <div class="container">
          <div class="row">
              <div class="col">
                 <carousel :items="1" :margin="10" :nav="false" :autoplay="true">
                      <div class="bg-banner">
                        <div class="row">
                            <div class="col-lg-6 content">
                              <h1><span>Get</span> the <span>best product</span> <br> at <span>your home</span></h1>
                              <router-link to="/product-details">
                                <div type="button" class="btn btn-outline-light mt-3">Lihat Barang  <i class="fas fa-arrow-right"></i>
                                </div>
                              </router-link>
                            </div>
                            <div class="col-lg-6 d-none d-sm-block">
                              <img width="100%" height="auto" src="../assets/gambarbanner.png" alt="">
                            </div>
                        </div>
                      </div>
                      <div class="bg-banner">
                        <div class="row">
                            <div class="col-lg-6 content">
                              <h1><span>Get</span> the <span>best product</span> <br> at <span>your home</span></h1>
                            <router-link to="/list-product"><div type="button" class="btn btn-outline-light mt-3">Lihat Barang  <i class="fas fa-arrow-right"></i></div></router-link>
                            </div>
                            <div class="col-lg-6 d-none d-sm-block">
                              <img width="100%" height="auto" src="../assets/gambarbanner.png" alt="">
                            </div>
                        </div>
                      </div>
                      <div class="bg-banner">
                        <div class="row">
                            <div class="col-lg-6 content">
                              <h1><span>Get</span> the <span>best product</span> <br> at <span>your home</span></h1>
                            <router-link to="/list-product"><div type="button" class="btn btn-outline-light mt-3">Lihat Barang  <i class="fas fa-arrow-right"></i></div></router-link>
                            </div>
                            <div class="col-lg-6 d-none d-sm-block">
                              <img width="100%" height="auto" src="../assets/gambarbanner.png" alt="">
                            </div>
                        </div>
                      </div>
                 </carousel>
              </div>
          </div>
      </div>
      <!-- akhir banner -->
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel';

export default {
  name: 'Banner', 
  components :  {
    carousel
  }
}
</script>
