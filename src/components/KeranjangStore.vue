<template>
  <div id="KeranjangStore">
      <div class="container">
          <div class="row">
              <div class="col-lg-7">
                    <div class="row text-center">
                        <div class="col-lg-4">
                            <h4>Gambar</h4>
                        </div>
                        <div class="col-lg-4">
                            <h4>Nama Barang</h4>
                        </div>
                        <div class="col-lg-4">
                            <h4>Action</h4>
                        </div>
                    </div>
                    <div class="bg-keranjang">
                        <div class="row mt-4 py-3">
                            <div class="col-lg-4 text-center">
                                <img  width="100px" src="../assets/accessoris.png" alt="">
                            </div>
                            <div class="col-lg-4">
                                <h4><b>Adidas Jogger Nite 3M</b></h4>
                                <h5><b>IDR</b> 1.999.900</h5>
                            </div>
                            <div class="col-lg-4 text-center">
                                <img width="40px" src="../assets/delete.png" alt="">
                            </div>
                        </div>
                    </div>
              </div>
              <div class="col-lg-5">
               <div class="row">
                   <div class="col">
                         <div class="form-group">
                            <label for="exampleFormControlTextarea1">Alamat</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                        </div>
                   </div>
               </div>
               <div class="bg-transaksi">
                    <div class="row">
                        <div class="col-lg-12">
                            <h6>ID TRANSAKSI <span>#SH12000</span></h6>
                            <hr>
                            <h6>Sub Total <span>IDR 1.999.800</span></h6>
                            <hr>
                            <h6>Kurir 
                                <span>
                                    <div class="pilih-kurir">
                                        <select>
                                            <option value="jne">JNE</option>
                                            <option value="jne">JNT</option>
                                            <option value="jne">SICEPAT</option>
                                            <option value="jne">TIKI</option>
                                        </select>
                                    </div>
                                </span>
                            </h6>
                            <hr>
                            <h6>Ongkos Kirim <span>IDR 160.000</span></h6>
                            <hr>
                            <h6>Bank Transfer 
                                <span>
                                    <div class="pilih-kurir">
                                        <select>
                                            <option value="bni">BNI</option>
                                            <option value="bri">BRI</option>
                                            <option value="bca">BCA</option>
                                            <option value="mandiri">MANDIRI</option>
                                        </select>
                                    </div>
                                </span>
                            </h6>
                            <hr>
                            <h6>No. Rekening <span>0102 1029 3841</span></h6>
                            <hr>
                            <h5><b>Total Belanja <span>IDR 2.159.800</span></b></h5>
                        </div>
                    </div>
               </div>
               <div class="row mt-3">
                        <div class="col">
                            <router-link to="/success"><div class="btn btn-primary form-control">Pesan Sekarang</div></router-link>
                        </div>
                    </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name :'KeranjangStore'
}
</script>

<style>

</style>