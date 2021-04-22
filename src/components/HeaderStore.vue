<template>
  <div id="HeaderStore">
     <!-- navbar -->
      <nav class="navbar navbar-expand-lg navbar-light shadow fixed-top">
            <div class="container">
              <router-link class="navbar-brand" to="/"><img src="../assets/logo.png"></router-link> 
              <button 
              class="navbar-toggler" 
              type="button" 
              data-toggle="collapse" 
              data-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="col-lg-6  search-bar">     
                  <input class="form-control" type="search" placeholder="Belanjo Apo Hai ini looorr ..... " aria-label="Search"> 
                </div>
                <div class="col-lg-1">
                  <img width="28px" height="auto" src="../assets/favorit.png" alt="">
                </div>
                <div class="col-lg-1">
                  <img width="28px" height="auto" src="../assets/keranjang.png" alt="">
                </div>
                <div class="col-lg-2">
                  <router-link to="" class="btn btn-outline-success form-control" >Register</router-link>
                </div>

                <!-- login -->
                <div class="col-lg-2">
                  <router-link to="" class="btn btn-primary form-control" data-toggle="modal" data-target="#exampleModal" >Login</router-link>
                </div>
                <!-- akhir login -->
            </div>
        </div>
      </nav>
     <!-- akhir navbar -->
     <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"><img style="margin-left:70%;" class="logo-modal" src="../assets/logo.png" alt=""></h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                  </div>
                  <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" class="btn btn-primary form-control">Masuk</button>
                </form>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderStore',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .btn-primary {
   background: linear-gradient(to right, rgb(54, 54, 92), rgb(154, 154, 208) );
 }
</style>
