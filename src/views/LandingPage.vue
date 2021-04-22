<template>
  <div id="landing-page">
    <header-store></header-store>
    <div class="mt-3">
       <banner />
    </div>
    <div class="mt-5">
      <CategoryStore />
    </div>
     <div class="mt-5">
      <BarangTerlaris />
    </div>
     <div class="mt-5">
      <BarangTerbaru />
    </div>
     <div class="mt-5">
      <FooterStore />
    </div>
  </div>
</template>

<script>
import HeaderStore from '@/components/HeaderStore.vue'
import Banner from '@/components/Banner.vue'
import CategoryStore from '@/components/CategoryStore.vue'
import BarangTerlaris from '@/components/BarangTerlaris.vue'
import BarangTerbaru from '@/components/BarangTerbaru.vue'
import FooterStore from '@/components/FooterStore.vue'




export default {
  name: 'landingPage',
  components :  {
    HeaderStore,
    Banner,
    CategoryStore,
    BarangTerlaris,
    BarangTerbaru,
    FooterStore
    }
}
</script>
