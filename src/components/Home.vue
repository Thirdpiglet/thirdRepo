<template>
<div>
  <herfst/>
</div>
</template>

<script>
// import VueLoadImage from 'vue-load-image'
import herfst from './Herfst'
export default {
  name: 'Home',
  components: {
    // 'vue-load-image': VueLoadImage
    herfst
  },
  data() {
    return {
    };
  },
  created: async function() {
  },
  mounted: async function() {
  },
  methods: {
  }
}
</script>

<style>
#myImg{
  max-height: 477px;
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
.pookjeClass{
  background-image: url("https://vuestoragestatictof.blob.core.windows.net/pics/pook4.png");
  /* background-color: green; */
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
.relatief{
  position: relative;
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
.kleurtje{
  background-color:#37372e;
}
#animation {
  background-image: url("../assets/imgNotFound.png");
  background-repeat: no-repeat;
  height: 300px;
  width: 533px;
  transform-origin:top;
  /* Stomme truc om irritant randje we te krijgen >>> */
  padding: 150px;
  /* <<< Stomme truc om irritant randje we te krijgen */
}
.buttonX{
  top: 0px;
  left: -20px;
  height: 40px;
  width: 80px;
  padding: 0px;
  background-color: grey;
  position: absolute;
  z-index: +1;
}
@media screen and (min-width: 1001px) {
  #animation {
    transform: scale(1.59,1.59);
  }
  .hoogte{
    height: 478px;
    min-height: 400px;
    max-height: 478px;
  }
  .buttonX{
    background-color: red;
  }
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
@media screen and (min-width: 701px) and (max-width: 1000px) {
  #animation {
    transform: scale(1.1,1.1);
  }
  .buttonX{
    background-color: green;
  }
  .hoogte{
    height: 331px;
    min-height: 100px;
    max-height: 331px;
  }
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
@media screen and (min-width: 401px) and (max-width: 700px) {
  #animation {
    transform: scale(0.7,0.7);
  }
  .buttonX{
    background-color: lightblue;
  }
  .hoogte{
    height: 210px;
    min-height: 100px;
    max-height: 210px;
  }
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
@media screen and (max-width: 400px) {
  .kleurtje{
    background-color:green;
  }
  #animation {
    transform: scale(0.3,0.3);
    width: 400px;
  }
  .buttonX{
    background-color: yellow;
  }
  .hoogte{
    height: 111px;
    min-height: 50px;
    max-height: 111px;
  }
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
