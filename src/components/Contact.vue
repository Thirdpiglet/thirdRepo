<template>

<div>
  <!-- <div class="container-fluid my-4 kleurtje hoogte padding0 d-flex justify-content-center relatief"> -->
  <div class="container-full-bg kleurtje hoogte padding0 d-flex justify-content-center relatief">
    <div class="relatief">
      <!-- <div id="ruitwId7" class="ruitwClass animation absoluut topIets">
        <div class="onzichtbaar">
        Deze text is blijkbaar nodig. Zorg maar dat hij wegvalt. De foto-breedte hangt ervanaf. Nou.. nog maar iets erbij dan.
        meer.. meer.. meer.. meer.. meer.. meer.. meer.. meer.. meer.. meer.. meer.. meer.. meer.. meer.. meer.. meer..
        </div>
      </div> -->
      <div :key="reRenderKey" id="animation"></div>
    </div>
    <div id="pookjeId" class="pookjeClass4 absoluut top570">  
      <input @input="poken()" @mouseup="startAnimation()" type="range" id="range" min="1" max="9" step="1" v-model="sliderValue" />
    </div>  
    <div><button @click="myStopFunction()">Stop</button></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/pook4.png')})`
      },
      sliderValue: 3,
      forceRender: 0,
      snelheid: 150,
      reRenderKey: 0,
      StartStop: null,
    };
  },
  created() {
  },
  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
    startAnimation: function() {
    // this.reRenderKey += 1;
    var frameHeight = 300;
    var frames = 22;
    var frame = 0;
    var divtof = document.getElementById("animation");
    this.StartStop = setInterval(function () {
        var frameOffset = (++frame % frames) * -frameHeight;
        divtof.style.backgroundPosition = "0px " + frameOffset + "px";
    }, this.snelheid);
    // clearInterval(function (){});
    },
    myStopFunction: function() {
      alert('Hij stopt alleen maar met een alert(?)');
      clearInterval(this.StartStop);
      // this.reRenderKey = this.reRenderKey + 1;
    },
    sneller: function() {
      // document.body.style.setProperty("--board-bg-color", "#"+Color);
      //  background-image: var(--slide-2);
      this.snelheid = this.snelheid -40;
      this.reRenderKey += 1;
      // this.startAnimation();
    },
    poken() {
      let zzzz = "https://vuestoragestatictof.blob.core.windows.net/pics/pook".concat(this.sliderValue + ".png");
      document.getElementById('pookjeId').style.backgroundImage = "url("+zzzz+")";
      this.snelheid = (10 - this.sliderValue) * 30;
      this.reRenderKey = this.reRenderKey + 1;
      if(this.sliderValue == 1) {
        this.myStopFunction();
      }
      // this.startAnimation();
    },
  }
}
</script>

<style>
:root {
  --main-bg-color: coral;  
  --main-bg-image: url('https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg');  
  --main-bg-size: "500px" "500px";
  --main-bg-height: "500px";
  --slide-1: url('C:/Users/AnneStoffel/projects/vue-todo-ep3/src/assets/pook1.png');
  --slide-2: url('C:/Users/AnneStoffel/projects/vue-todo-ep3/src/assets/pook2.png') ;
  --slide-3: url('C:/Users/AnneStoffel/projects/vue-todo-ep3/src/assets/pook3.png') ;
  --slide-4: url('C:/Users/AnneStoffel/projects/vue-todo-ep3/src/assets/pook4.png') ;
  --slide-5: url('C:/Users/AnneStoffel/projects/vue-todo-ep3/src/assets/pook5.png') ;
}
#div1 {
  background-image: var(--main-bg-image);
  padding: 5px;  
}
#animation {
    background-image: url("../assets/film02.png");

/* WERKT :-) !!!!: */
    /* background-image: var(--slide-2); */
    
    background-repeat: no-repeat;
    height: 300px;
    width: 533px;
}
.jumbotron{
  background-size: cover;
  background-size: 100%;
  background-repeat: no-repeat;
  /* min-height: 470px; */
  min-height: 478px;
  color: white;
  text-align: center;
}
.onzichtbaar{
  color:#37372e;
  opacity: 0;
}
.ruitwClass{
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 478px;
  visibility: visible;
}
.ruitwClass1{
  background-image: url("https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersStil.png");
  visibility: hidden;
}
.ruitwClass2{
  background-image: url("https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersSlow05.gif");
  visibility: hidden;
}
.ruitwClass3{
  background-image: url("https://vuestoragestaticjolanda.blob.core.windows.net/gifs/Ruitenwissers05.gif");
  visibility: hidden;
}
.ruitwClass4{
  background-image: url("https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersFast1_05.gif");
  visibility: visible;
}
.ruitwClass5{
  background-image: url("https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersFast2_05.gif");
  visibility: hidden;
}
.ruitwClass6{
  background-image: url("https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersFast2_05.gif");
  visibility: hidden;
}
.ruitwClass7{
  background-image: url("https://vuestoragestaticjolanda.blob.core.windows.net/gifs/RuitenwissersFast3_05.gif");
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 470px;
  visibility: hidden;
}
.pookjeClass1{
  background-image: url("../assets/pook1.png");
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
}
#pookjeId2{
  background-image: url("../assets/pook2.png");
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
}
.pookjeClass1{
  background-image: url("https://vuestoragestatictof.blob.core.windows.net/pics/pook1.png");
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
}
.pookjeClass2{
  background-image: url("https://vuestoragestatictof.blob.core.windows.net/pics/pook2.png");
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
}
.pookjeClass3{
  background-image: url("https://vuestoragestatictof.blob.core.windows.net/pics/pook3.png");
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
  background-color: greenyellow;
  visibility: visible;
}
.pookjeClass4{
  background-image: url("https://vuestoragestatictof.blob.core.windows.net/pics/pook4.png");
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
}
.pookjeClass5{
  background-image: url("https://vuestoragestatictof.blob.core.windows.net/pics/pook5.png");
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
  background-color: blueviolet;
  visibility: visible;
}
.pookjeClass7{
  background-image: url("https://vuestoragestatictof.blob.core.windows.net/pics/pook7.png");
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
}
.pookjeClass9{
  background-image: url("https://vuestoragestatictof.blob.core.windows.net/pics/pook9.png");
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
}
.topIets{
  top: 116px;
}
.top570{
  top: 570px;
}
.pookjecss{
  position: absolute;
  top: 0px;
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
  /* height: 470px; */
  /* height: 478px; */
  min-height: 478px;
/* }.maxhoogte{
  max-height: 470px;
}
.maxhoogtePookje{
  /* height: 20px; */
  max-height: 100px;
} */
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
