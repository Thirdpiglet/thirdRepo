<template>

<div>
  <!-- <div class="container-fluid my-4 kleurtje hoogte padding0 d-flex justify-content-center relatief"> -->
  <div class="container-full-bg kleurtje hoogte padding0 d-flex justify-content-center relatief">
    <div id="winterlandschap" class="winterl absoluut"></div> 
    <div class="absoluut">
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
      snelheid: 120,
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
    var frameHeight = 364;
    var frames = 15;
    var frame = 0;
    var divtof = document.getElementById("animation");
    this.StartStop = setInterval(function () {
				if (frame == 15 ) {
					clearInterval();
				} else {
					var frameOffset = (++frame % frames) * -frameHeight;
					divtof.style.backgroundPosition = "0px " + frameOffset + "px";  
				}
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

<style scoped>
#animation {
    background-image: url("../assets/WallGroot10t.png");
    background-repeat: no-repeat;
    height: 300px;
    width: 533px;
}
.winterl {
    background-image: url("../assets/winterlandschap.gif");
    background-repeat: no-repeat;
    height: 300px;
    width: 533px;
}
.pookjeClass4{
  background-image: url("https://vuestoragestatictof.blob.core.windows.net/pics/pook4.png");
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
}
.top570{
  top: 570px;
}
.kleurtje{
  background-color:#37372e;
}
.hoogte{
  min-height: 478px;
  max-height: 100px;
}
.padding0{
  padding: 0px;
  border-color: red;
}
.relatief{
  position: relative;
}
.absoluut{
  position: absolute;
  /* max-height: 100%; */
}
#range {
  -webkit-appearance: slider-vertical;
  width: 200px;
  height: 100px;
  opacity: 0;
}
#pookjeId { 
  visibility:visible;
  background-image: url("../assets/pook5.png");
} 
</style>
