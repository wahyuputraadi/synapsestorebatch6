<template>
  <div id="Keranjang">
    <header-store></header-store>
    <div class="container mt-5">
          <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-light">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Keranjang</li>
              </ol>
          </nav>
    </div>   
    <div class="mt-5">
      <KeranjangStore />
    </div>
    <div style="margin-top:80px;">
      <BarangTerbaru />
    </div>
     <div class="mt-5">
      <FooterStore />
    </div>
  </div>
</template>

<script>
import HeaderStore from '@/components/HeaderStore.vue'
import KeranjangStore from '@/components/KeranjangStore.vue'
import BarangTerbaru from '@/components/BarangTerbaru.vue'
import FooterStore from '@/components/FooterStore.vue'


export default {
  name: 'Keranjang',
  components :  {
    HeaderStore,
    KeranjangStore,
    BarangTerbaru,
    FooterStore
    }
}
</script>
