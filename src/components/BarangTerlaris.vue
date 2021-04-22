<template>
   <div id="BarangTerlaris">
        <div class="container">
            <div class="row mt-5">
                <div class="col">
                    <h1><span>Premium</span> Products for <br> <span>Every Need</span></h1>
                </div>
                <div class="col text-right">
                    <h1>Barang <span>Telaris</span> <i class="fas fa-arrow-right"></i></h1>
                </div>
            </div>  
            <div class="best-scrollbar" >
                <carousel  :nav="false" :dots="false" 
                
                :responsive="{ 
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:6,
                    nav:false}
                }"  
                
                class="row mt-3">
                        <div class="col"> 
                            <div class="card" style="width:100%;">
                            <div class="images text-center py-2" style="background:#EBEAE7;">
                                    <img style="width:100px; " class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                            </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title"><b>Nike Blazer</b></h5>
                                    <p class="card-text"><span>IDR</span> 180.000</p>
                                    <router-link to="/product-details"><div type="button" class="btn btn-outline-primary">Lihat Detail </div></router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style="width:100%;">
                            <div class="images text-center py-2" style="background:#EBEAE7;">
                                    <img style="width:100px;" class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                            </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title"><b>Nike Blazer</b></h5>
                                    <p class="card-text"><span>IDR</span> 180.000</p>
                                    <router-link to="/product-details"><div type="button" class="btn btn-outline-primary">Lihat Detail </div></router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style="width:100%;">
                            <div class="images text-center py-2" style="background:#EBEAE7;">
                                    <img style="width:100px;" class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                            </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title"><b>Nike Blazer</b></h5>
                                    <p class="card-text"><span>IDR</span> 180.000</p>
                                       <router-link to="/product-details"><div type="button" class="btn btn-outline-primary">Lihat Detail </div></router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style="width:100%;">
                            <div class="images text-center py-2" style="background:#EBEAE7;">
                                    <img style="width:100px;" class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                            </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title"><b>Nike Blazer</b></h5>
                                    <p class="card-text"><span>IDR</span> 180.000</p>
                                       <router-link to="/product-details"><div type="button" class="btn btn-outline-primary">Lihat Detail </div></router-link>
                                </div>
                            </div>
                        </div>
                         <div class="col">
                            <div class="card" style="width:100%;">
                            <div class="images text-center py-2" style="background:#EBEAE7;">
                                    <img style="width:100px;" class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                            </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title"><b>Nike Blazer</b></h5>
                                    <p class="card-text"><span>IDR</span> 180.000</p>
                                    <router-link to="/product-details"><div type="button" class="btn btn-outline-primary">Lihat Detail </div></router-link>
                                </div>
                            </div>
                        </div>
                         <div class="col">
                            <div class="card" style="width:100%;">
                            <div class="images text-center py-2" style="background:#EBEAE7;">
                                    <img style="width:100px;" class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                            </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title"><b>Nike Blazer</b></h5>
                                    <p class="card-text"><span>IDR</span> 180.000</p>
                                    <router-link to="/product-details"><div type="button" class="btn btn-outline-primary">Lihat Detail </div></router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style="width:100%;">
                            <div class="images text-center py-2" style="background:#EBEAE7;">
                                    <img style="width:100px;" class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                            </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title"><b>Nike Blazer</b></h5>
                                    <p class="card-text"><span>IDR</span> 180.000</p>
                                    <router-link to="/product-details"><div type="button" class="btn btn-outline-primary">Lihat Detail </div></router-link>
                                </div>
                            </div>
                        </div>
                </carousel>
            </div>
        </div>
   </div>
</template>

<script>
import carousel from 'vue-owl-carousel';


export default {
    name:'BarangTerlaris',
    components: {
        carousel
    }
}
</script>

<style scoped>
.owl-carousel .owl-item img {
    display: inline;
}
</style>