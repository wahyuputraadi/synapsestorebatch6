<template>
  <div id="ListProduct">
    <header-store></header-store>
     <div class="container mt-5">
          <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-light">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">List-Product</li>
              </ol>
          </nav>
      </div>   
      <div class="mt-5">
      <div class="container">
        <div class="row  mt-5">
                <div class="col">
                    <h1><b>Premium</b> Products for <br> <span>Every Need</span></h1>
                </div>
                <div class="col text-right">
                    <h1>List <span>Product</span></h1>
                </div>
            </div>    

      </div>  
      <ProductList />
    </div>
     <div class="mt-5">
        <FooterStore />
    </div>
  </div>
</template>

<script>
import HeaderStore from '@/components/HeaderStore.vue'
import ProductList from '@/components/ProductList.vue'
import FooterStore from '@/components/FooterStore.vue'



export default {
  name: 'ListProduct',
  components :  {
    HeaderStore,
    ProductList,
    FooterStore
    }
}
</script>
