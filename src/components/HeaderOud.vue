<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
        <img style="vertical-align:middle" src="..\assets\ThirdPigletVere.jpg" class="thirdPiglet-image hidden-xs">
        <img style="vertical-align:middle" src="..\assets\ThirdPigletVere.jpg" class="thirdPiglet-image2  hidden-xl hidden-lg hidden-md hidden-sm">
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
        <div>
          <a style="text-decoration:none" class="PTSans f35w700" href="#">
              Software Services
          </a>
        </div>
        <div>
          <p class="PTSans f15w400">For your websites and more</p>
        </div>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
        <ul class="col em-header-menu-container navbar-right hidden-xs">
          <li class="nav nav-pills navbar-right PTSans  f20w700">
            <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
            <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
            <router-link to="/blog" tag="li" active-class="active"><a>Blog</a></router-link>
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="glyphicon glyphicon-bell" style="padding-right: 5px"></span>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                <VerifyResponse/>
              </a>
            </div>
          </li> 
        </ul>
          <div class="navbar-nav hidden-xl hidden-lg hidden-md hidden-sm">
            <nav class="navbar navbar-default">
              <div class="container-fluid navbar-nav hidden-xl hidden-lg hidden-md hidden-sm">
                <div class="navbar-header" style="float:right">
                  <button class="button" @click="setVisible"><p><span class="glyphicon glyphicon-menu-hamburger"></span></p></button>
                </div>
                <div v-if="isVisible">
                  <ul>
                    <li>
                      <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
                      <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
                      <router-link to="/blog" tag="li" active-class="active"><a>Blog</a></router-link>
                  </li>
                  </ul>
                  <form class="navbar-form navbar-right" role="search">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Search">
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                  </form>
                </div>
              </div><!-- /.container-fluid -->
            </nav>  
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
// import BlogReaction from './blog/BlogReaction';
import VerifyResponse from './blog/VerifyResponse';
export default {
  name: 'Header',
  components: {
    // BlogReaction,
    VerifyResponse,
  },
  data() {
  return {
    isVisible: false,
    reRenderKey: 0,
    };
  },
  methods: {
    setVisible: function() {
      this.isVisible = !(this.isVisible != false)
    },
  },
};
</script>
<style scoped>
.f35w700 {
  font-size: 35px;
  font-weight:700;
  color: black;
  padding: 0%;
}
.f15w400 {
  font-size: 15px;
  font-weight:400;
  /* color: aqua; */
}
.f20w700 {
  font-size: 20px;
  font-weight:700;
}
span:hover {
  color: #1279be; 
}
.thirdPiglet-image {
  width: 100%;
  height: 80%;
}
.thirdPiglet-image2{
  width: 20%;
  height: 100%;
}
.andereMargin {
  margin: 5px;
  padding: 10px;
}

@import'~bootstrap/dist/css/bootstrap.min.css'
</style>
