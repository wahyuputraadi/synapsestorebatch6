<template>
   <div id="CategoryStore">
      <div class="container">
        <div class="row">
            <div class="col judul">
                <h1>Kategori <span>Pilihan</span></h1>
            </div>
        </div>
       <div class="bg-category pt-4 mt-4">
            <div class="row text-center">
            <div class="col-lg-2">
                <router-link to=/list-product>
                    <img  src="../assets/ic_tas.png" alt="">
                    <br>
                    <h6>Tas</h6>
                </router-link>   
            </div>
            <div class="col-lg-2">
                <router-link to=/list-product>
                <img  src="../assets/ic_aksesoris.png" alt="">
                <br>
                <h6>Tas</h6>
                </router-link>
            </div>
            <div class="col-lg-2">
                <router-link to=/list-product>
                <img  src="../assets/ic_elektronik.png" alt="">
                <br>
                <h6>Tas</h6>
                </router-link>
            </div>
            <div class="col-lg-2">
                <router-link to=/list-product>
                <img  src="../assets/ic_tas.png" alt="">
                <br>
                <h6>Tas</h6>
                </router-link>
            </div>
            <div class="col-lg-2">
                <router-link to=/list-product>
                <img  src="../assets/ic_elektronik.png" alt="">
                <br>
                <h6>Tas</h6>
                </router-link>
            </div>
            <div class="col-lg-2">
                <router-link to=/list-product>
                <img  src="../assets/ic_aksesoris.png" alt="">
                <br>
                <h6>Tas</h6>
                </router-link>
            </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>


export default {
    name:'CategoryStore'
}
</script>

<style scoped>

</style>