<template>
<div>

<!-- 
!!!! LET OP BACKGROUND                    Y E L L O W                         WEG !!!!
-->
  <div class="container-fluid my-4 kleurtje hoogte padding0">
    <div class="d-flex justify-content-center relatief">
      <div id="ruitwId" class="ruitwClass">
        <div class="onzichtbaar">
        Deze text is blijkbaar nodig. Zorg maar dat hij wegvalt. De foto-breedte hangt ervanaf. Nou.. nog maar iets erbij dan.
        meer.. meer.. meer.. meer.. meer.. meer.. meer.. meer.. meer.. meer.. meer.. meer.. meer.. meer.. meer.. meer..
        </div>
      </div>
      <div id="pookjeId" class="pookjeClass absoluut top50" :style="cssProps">
        <input @input="poken()" type="range" id="range" min="1" max="6" step="1" v-model="sliderValue" />
      </div>

    </div>
  </div>

<!-- <div id="jumbotronId" class="container-fluid bg-1 text-center mx-auto d-block relatief0">

  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
    <img src="https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersSlow05.gif" alt="Example image" class="img-responsive" />
  </div> -->

  <!-- <div class="mx-auto d-block relatief0">
    <div id="ruitwId">
      <img class="img-responsive mx-auto d-block absoluut1" src="https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersSlow05.gif" alt="Wegisie">
    </div>
    <div id="pookjeId" :key="forceRender" class="achterSlider">
      <img class="absoluut2 pookjeimage" src="@/assets/pook5.png" :style="cssProps"> -->


      <!-- <img id="pookjeId" class="absoluut pookjeimage" :style="cssProps"> -->
    <!-- <div id="pookjeId" :key="forceRender" class="absoluut" :style="cssProps"> -->
    <!-- <div id="pookjeId" :key="forceRender" class="absoluut pookjeimage"> -->


      <!-- <input @input="poken()" type="range" id="range" min="1" max="6" step="1" v-model="sliderValue" />
    </div>
  </div> -->

</div>


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
    <div class="row"> -->
        <!-- <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          ervoor
        </div> -->
        <!-- <div id="pookjeId" :key="forceRender" class="achterSlider" :style="cssProps">
          <input @input="poken()" type="range" id="range" min="1" max="6" step="1" v-model="sliderValue" /></div> -->
        <!-- <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          erna
        </div> -->

    <!-- </div>
  </div> -->


    <!-- </div>
  </div> -->



  

  <!-- <div class="container">
    <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          ervoor
        </div>
        <div id="pookjeId" :key="forceRender" class="col-lg-6 col-md-6 col-sm-6 col-xs-6 achterSlider" :style="cssProps">
          <input @input="poken()" type="range" id="range" min="1" max="6" step="1" v-model="sliderValue" /></div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          erna
        </div>

    </div>
  </div> -->

<!-- </div> -->
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
        backgroundImage: `url(${require('@/assets/pook5.png')})`
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
        document.getElementById('pookjeId').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/pook1.png')";
        document.getElementById('ruitwId').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersStil.png')";
      } else if  (this.sliderValue == 2) {
        document.getElementById('pookjeId').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/pook2.png')";
        document.getElementById('ruitwId').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersSlow05.gif')";
      } else if  (this.sliderValue == 3) {
        document.getElementById('pookjeId').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/pook4.png')";
        document.getElementById('ruitwId').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/Ruitenwissers05.gif')";
      } else if  (this.sliderValue == 4) {
        document.getElementById('pookjeId').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/pook5.png')";
        document.getElementById('ruitwId').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersFast1_05.gif')";
      } else if  (this.sliderValue == 5) {
        document.getElementById('pookjeId').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/pook7.png')";
        document.getElementById('ruitwId').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersFast2_05.gif')";
      } else {
        document.getElementById('pookjeId').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/pook9.png')";
        document.getElementById('ruitwId').style.backgroundImage = "url('https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersFast3_05.gif')";
        // document.getElementById('jumbotronId').style.class="container-fluid bg-1 text-center";
        // document.getElementById('ruitwId').style.class="img-responsive under";
        // document.getElementById('jumbotronId').style.backgroundSize = "60%";
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
.onzichtbaar{
  color:#37372e;
  opacity: 0;
}
.ruitwClass{
  background-image: url("https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersSlow05.gif");
  background-color: yellow;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  /* height: 500px;
  width: 60%; */
  /* max-width: 100%; */
  /* display: inline-block; */
  /* width: 100%; */
  /* height: auto; */
  /* size: 50%; */
  /* width: fit-content; */
  min-height: 470px;
  /* min-width: 1000px; */
}
.pookjeClass{
  background-image: url("https://vuestoragestaticjolanda.blob.core.windows.net/gifs/pook4.png");
  /* background-color: green; */
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
}
.top50{
  /* bottom: 50px; */
  top: 570px;
}
.pookjecss{
  position: absolute;
  top: 0px;
  /* size: 10%; */
  /* height: 10px; */
  max-height: 100%;
  width: 200px;
  background-color: blueviolet;
}
.pookjecss2{
  position: absolute;
  top: 560px;
  /* bottom: -20px; */
  /* size: 10%; */
  /* height: 10px; */
  max-height: 100%;
  width: 150px;
  /* background-color: blueviolet; */
}
.kleurtje{
  background-color:#37372e;
}
.hoogte{
  height: 470px;
}.maxhoogte{
  max-height: 470px;
}
.maxhoogtePookje{
  /* height: 20px; */
  max-height: 100px;
}
.hoogtePookje{
  /* height: 20px; */
  height: 100px;
}
.padding0{
  padding: 0px;
  border-color: red;
}
.top0{
  top: 0px;
}
.margin0{
  margin: 0px;
}
.relatief0{
  position: relative;
}
.relatief0{
  position: relative;
  /* background-color:#a09ea1; */
  background-color:#37372e;
  opacity: 0.5;
  height: 470px;
  text-align: center;
}
.relatief1{
  position: relative;
}
.relatief2{
  position: relative;
  background-color: rgb(241, 135, 13);
  max-height: 100%;
  text-align: center;
}
.relatief3{
  position: relative;
  background-color: blue;
  max-height: 700%;
  text-align: center;
}
.absoluut{
  position: absolute;
  /* max-height: 100%; */
}
.absoluut1{
  position: absolute;
  /* background-color: lightgreen; */
  max-height: 100%;
  /* top: 0px; */
  left:200px;
  text-align: center;
}.absoluut2{
  position: absolute;
  background-color: lightgreen;
  max-height: 40%;
  bottom: -100px;
  text-align: center;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.img-responsive {
  /* display: block; */
  /* position: absolute; */
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  height: auto;
}
.achterSlider{
  /* background-image: url("../assets/VereTransp.png"); */
  background-color: rgb(253, 5, 191);
  background-size: 100px; 
}
.pookjeimage{
  background-color: blueviolet;
  /* background-image: url("../assets/pook5.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; */
  size: 20%;
  height: 100px;
  /* background-size: 100px;  */
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
  /* image-rendering: optimizeSpeed; */
}
.under
{
/* position:relative;
left:0px;
top:0px;
z-index:-1; */
  position: absolute;
  /* size: 10%; */
  /* max-height: 60%; */
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
  div.titletext {
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
  opacity: 0;
  /* background-image: src="..\assets\VereTransp.png"; */
}
#dingesId {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}
#pookjeId { 
  visibility:visible;
  /* background-color: blue; */
  background-image: url("../assets/pook5.png");
} 
/* #pookjeId:hover {
  background-color: yellow;
} */
.stylebutton {
  background-color: blue;
  /* background-image: url("../assets/VereTransp.png"); */
  background-image: url("https://www.agravisi.nl/uploads/test-pattern-152459-960-720.png");
}
</style>
