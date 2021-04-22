<template>
    <div id="DeskripsiProduk">
       <div class="container">
           <div class="row">
               <div class="col-lg-4">
                    <!-- <div class="row"> -->
                        <img width="100%" src="../assets/headset.png" alt="">
                    <!-- </div> -->
                    <div class="row mt-3">
                       <div class="col-lg-4 col-4">
                           <img class="cover" src="../assets/cover1.png" alt="">
                       </div>
                       <div class="col-lg-4 col-4">
                           <img class="cover" src="../assets/cover2.png" alt="">
                       </div>
                        <div class="col-lg-4 col-4">
                           <img class="cover" src="../assets/cover3.png" alt="">
                       </div>
                    </div>
               </div>
               <div class="col-lg-6">
                    <h1><b>Adidas Jogger Nite 3M</b></h1>
                    <br>
                    <h3><b>IDR</b> 1.999.800</h3>
                    <div class="row">
                       <div class="col">
                          <i class="fas fa-minus-circle"></i>
                            <span class="mx-4" style="font-size:50px;">1</span>
                          <i class="fas fa-plus-circle"></i>
                       </div>
                    </div>
                    <div class="bg-deskripsi mt-3">
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, error officia. Rem aperiam laborum voluptatum vel, pariatur modi hic provident eum iure natus quos non a sequi, id accusantium! Autem.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, error officia. Rem aperiam laborum voluptatum vel, pariatur modi hic provident eum iure natus quos non a sequi, id accusantium! Autem.
                        </h6>
                    </div>
                    <div class="row mt-4">
                        <div class="col-lg-6">
                            <router-link to="/keranjang"><div class="btn btn-outline-primary form-control">Tambahkan Ke Keranjang <i class="fas fa-cart-plus"></i></div></router-link>
                        </div>
                        <div class="col-lg-6">
                              <div class="btn btn-primary form-control">Beli Sekarang <i class="fas fa-arrow-right ml-3"></i></div>
                        </div>
                    </div>
               </div>
           </div>
       </div>
    </div>
</template>

<script>

export default {
    name: 'DeskripsiProduk',
    components: {

    }
}
</script>

<style>

</style>

