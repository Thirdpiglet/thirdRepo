<template>
<div>


  <div class="jumbotron">
    <div class="container kleurtje1">
        <div class="kleurtje2"></div>
        <div class="kleurtje3"><img id="hoppa" class="img-fluid center-block absoluut3" src="https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersStil.png" alt="Wegisie"></div>
        <div class="kleurtje4"></div>
    </div> 
  </div>


  <!-- <div class="jumbotron">
    <div class="container relatief">
      <div class="row d-flex justify-content-center relatief">
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 relatief">
            <img id="hoppa" class="img-fluid absoluut" src="https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersStil.png" alt="Wegisie">
            <div id="mydiv" class="img-fluid absoluut2 achterSlider" :style="cssProps">
            <input @input="poken()" type="range" id="range" min="1" max="6" step="1" v-model="sliderValue" /></div>
        </div>
      </div> 
    </div> 
  </div> -->


<!-- 
!!!! LET OP DE OUTLINE WORDT VERGAGGELD VANAF HET BEDIENEN VAN DE HENDEL !!!!
-->
<!-- <div id="jumbotronId" class="container-fluid bg-1 text-center">
    <img id="hoppa" class="img-responsive under" src="https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersSlow05.gif" alt="Wegisie">
    <img class="over img-circle img-2" src="http://i.imgur.com/gcTJ6nx.jpg" alt="Dog" >
</div> -->


  <!-- <div class="container-full-bg">
    <div id="jumbotron2Id"  class="jumbotron">
      <p></p><p></p>  
      <div class="PTSans titletext">Software maken is onze hobby</div>
      <p></p><p></p>  
      <div class="PTSans bodytext">
        Wij zijn u graag van dienst voor goedkope software-oplossingen
        <p></p><p></p>
        Uw website of thuis-toepassing op maat gemaakt,
        <p></p>
        zonder dat er voor u enige kennis benodigd is
      </div>
    </div>
  </div> -->

  <!-- <div class="container-full-bg">
    <div id="jumbotronId2" class="jumboNOtron"> -->
      <!-- <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          ervoor
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"> -->
          <!-- <img src="@/assets/Ruitenwissers05.gif" alt="weg???" class="img-responsive center-block" /> -->


                      <!-- <p></p><p></p>  
                      <div class="PTSans titletext">Software maken is onze hobby</div>
                      <p></p><p></p>  
                      <div class="PTSans bodytext">
                        Wij zijn u graag van dienst voor goedkope software-oplossingen
                        <p></p><p></p>
                        Uw website of thuis-toepassing op maat gemaakt,
                        <p></p>
                        zonder dat er voor u enige kennis benodigd is
                      </div> -->
        <!-- </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          erna
        </div>
      </div> -->

  <!-- <div class="container">
    <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          ervoor
        </div>
        <div id="mydiv" :key="forceRender" class="achterSlider" :style="cssProps">
          <input @input="poken()" type="range" id="range" min="1" max="6" step="1" v-model="sliderValue" /></div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          erna
        </div>

    </div>
  </div> -->


    <!-- </div>
  </div> -->



  

  <!-- <div class="container">
    <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          ervoor
        </div>
        <div id="mydiv" :key="forceRender" class="col-lg-6 col-md-6 col-sm-6 col-xs-6 achterSlider" :style="cssProps">
          <input @input="poken()" type="range" id="range" min="1" max="6" step="1" v-model="sliderValue" /></div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          erna
        </div>

    </div>
  </div> -->

</div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
  },
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/pook5.png')})`,
      },
      sliderValue: 3,
      forceRender: 0,
    };
  },
  created: async function() {
    // document.getElementById("jumbotronId").style.animationDuration = "1s";
  },
  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
    poken() {
      if (this.sliderValue == 1) {
        document.getElementById('mydiv').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/pook1.png')";
        document.getElementById('jumbotronId').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersStil.png')";
      } else if  (this.sliderValue == 2) {
        document.getElementById('mydiv').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/pook2.png')";
        document.getElementById('jumbotronId').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersSlow05.gif')";
      } else if  (this.sliderValue == 3) {
        document.getElementById('mydiv').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/pook4.png')";
        document.getElementById('jumbotronId').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/Ruitenwissers05.gif')";
      } else if  (this.sliderValue == 4) {
        document.getElementById('mydiv').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/pook5.png')";
        document.getElementById('jumbotronId').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersFast1_05.gif')";
      } else if  (this.sliderValue == 5) {
        document.getElementById('mydiv').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/pook7.png')";
        document.getElementById('jumbotronId').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersFast2_05.gif')";
      } else {
        document.getElementById('mydiv').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/pook9.png')";
        document.getElementById('jumbotronId').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersFast3_05.gif')";
        document.getElementById('jumbotronId').style.class="container-fluid bg-1 text-center";
        document.getElementById('hoppa').style.class="img-responsive under";
        document.getElementById('jumbotronId').style.backgroundSize = "60%";
// position:relative;
// left:0px;
// top:0px;
// z-index:-1;

      }
    },
  }
}
</script>

<style>
/* * {
  margin: 0;
  padding: 0;
} */
/* .jumbotron{
  padding: 0px;
}
.container{
  padding: 0px;
} */
.relatief{
  position: relative;
  background-color: rgb(46, 214, 13);
  /* height: 450px; */
  height: 600px;
}
.absoluut{
  position: absolute;
  background-color: rgb(241, 135, 13);
  /* left: 600px; */
  top: 0px;
  /* bottom: 3px; */
  /* size: 20%; */
  /* width: 80%; */
  /* height: 310px; 
  width: 548px; */
  /* height: 430px;  */
  height: 80%; 
  /* width: 764px; */
  width: real;
  /* background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%; */
}
.absoluut2{
  position: absolute;
  background-color: rgb(241, 135, 13);
  /* left: 600px; */
  top: 220px;
  left: 260px;
  /* bottom: 3px; */
  /* size: 20%; */
  width: 30%;
  height: 200px; 
  /* background-size: cover; */
  background-repeat: no-repeat;
  /* background-position: 50% 50%; */
}
.absoluut3{
  position: absolute;
  size: 20%;
  max-height: 100%;
  /* width: 30%;
  height: 200px;  */
}
.img{
  background-repeat: no-repeat;
}
.kleurtje1{
  background-color: black;
}
.kleurtje2{
  background-color: red;
}
.kleurtje3{
  background-color:yellow;
}
.kleurtje4{
  background-color: green;
}
.jumboNOtron{
  background-color: black;
  /* background-image: url("../assets/Ruitenwissers05.gif"); */
  /* background-image: url("C:/Users/AnneStoffel/projects/vue-todo-ep3/src/assets/JolandaDorstBackgroundDark.png"); */
  /* background-size: cover; */
  background-size: contain;
  min-height: 568px;
  /* max-height: 768px; */
  /* height: 40%;
  width: 40%; */
  color: white;
  text-align: center;
  /* animation-duration: 4s; */
  /* animation-duration: 10ms; */
  image-rendering: optimizeSpeed;
}
.under
{
position:relative;
left:0px;
top:0px;
z-index:-1;
}
.over
{
position:sticky;
left: calc(50% - 125px);
top:-20px;
bottom:-20px;
z-index:-1;
width: 20%;
height: auto;
}
@media screen and (min-width: 601px) {
  .jumbotron {
    padding: 0;
  }
  div.titletext {
    font-size: 46px;
    font-weight:700;
    line-height: 64px;
    text-align: center;
  }
  div.bodytext {
    font-size: 20px;
    font-weight:400;
    line-height: 32px;
    text-align: center;
  }
}
@media screen and (max-width: 600px) {
  .jumbotron {
    padding: 0;
  }div.titletext {
    font-size: 40px;
    font-weight:700;
    line-height: 32px;
    text-align: center;
  }
    div.bodytext {
    font-size: 17px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
  }
}
.p {
   margin-top:5px;
   margin-bottom:5px
}
.top-left {
  position: absolute;
  top: 10%;
  left: 16px;
}
/* Container holding the image and the text */
/* .container {
  position: relative;
} */

.text-block {
  position: absolute;
  bottom: 20px;
  left: 10%;
  /* background-color: black;
  opacity: 0.8; */
  color: white;
  /* padding-left: 20px;
  padding-right: 20px; */
}

@import url('https://fonts.googleapis.com/css?family=PT+Sans');
.PTSans {
  font-family: 'PT Sans';
  /* font-size: 20px; */
}
.Kop {
  font-size: 46px;
  font-weight:700;
  margin-bottom: 0px;
  line-height: 1;
}
.SubKop {
  font-size: 20px;
  font-weight:400;
  /* margin-bottom: 0px;
  line-height: 1; */
}
@media screen and (min-width: 601px) {
  div.blogtitletext {
    font-size: 32px;
    font-weight:400;
    line-height: 64px;
    text-align: center;
  }
  div.blogbodytext {
    font-size: 20px;
    font-weight:400;
    line-height: 32px;
    text-align: left;
  }
}

@media screen and (max-width: 600px) {
  div.blogtitletext {
    font-size: 16px;
    font-weight:400;
    line-height: 32px;
    text-align: center;
  }
    div.blogbodytext {
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
  }
}
.f20w400 {
  font-size: 20px;
  font-weight:400;
  line-height: 32px;
  /* margin-bottom: 0.5rem; */
}
.f32w400c {
  font-size: 32px;
  font-weight:400;
  line-height: 32px;
  text-align: center;
  /* margin-bottom: 0.5rem; */
}
.andereMarginBottom {
  margin-bottom: 70px;
  text-align: center;
}
.marginTop10px {
  margin-top: 10px;
}

.donker-plaatje{
  background: rgba(0,0,0, .5);
}

#range {
  -webkit-appearance: slider-vertical;
  width: 200px;
  height: 100px;
  opacity: 0.0;
  /* background-image: src="..\assets\VereTransp.png"; */
}
.achterSlider{
  /* background-image: url("../assets/VereTransp.png"); */
  background-color: purple;
  background-size: 100px; 
}
#dingesId {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}
#mydiv { 
  visibility:visible;
  /* background-color: blue; */
  background-image: url("../assets/VereTransp.png");
} 
/* #mydiv:hover {
  background-color: yellow;
} */
.stylebutton {
  background-color: blue;
  /* background-image: url("../assets/VereTransp.png"); */
  background-image: url("https://www.agravisi.nl/uploads/test-pattern-152459-960-720.png");
}
</style>
