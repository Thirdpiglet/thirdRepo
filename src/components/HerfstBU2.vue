<template>

<!-- <div>
  <div class="container-full-bg kleurtje hoogte padding0 d-flex justify-content-center relatief">
    <div id="winterlandschap" class="winterl absoluut"></div> 
    <div class="absoluut">
      <div :key="reRenderKey" id="animation"></div>
    </div>
    <div id="pookjeId" class="pookjeClass4 absoluut top570">  
      <input @input="poken()" @mouseup="startAnimation()" type="range" id="range" min="1" max="9" step="1" v-model="sliderValue" />
    </div>  
  </div>
</div> -->

  <div class="container-full-bg kleurtje hoogte padding0 d-flex justify-content-center relatief">
    <!-- <div class="relatief"> -->
      <!-- <div class="relatief"> -->
        <!-- <img id="myImg" class="img-fluid" src="https://vuestoragestatictof.blob.core.windows.net/pics/Ruitenwissers05.gif"> -->
        <!-- <img id="myImg" class="img-fluid" src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/05/Image-Files-Blog-Vector.jpg"> -->
        <!-- <vue-load-image>
          <img :key="reRenderKey" id="myImg" class="img-fluid" slot="image" src="https://vuestoragestatictof.blob.core.windows.net/pics/Ruitenwissers05.gif"/>
          <img slot="preloader" src="https://flevix.com/wp-content/uploads/2020/01/Preloader.gif"/>
          <div slot="error">error message</div>
        </vue-load-image> -->
          <!-- <div> -->
        <img :key="reRenderKey" id="animation" class="img-fluid"/>
          <!-- </div> -->
      <!-- </div> -->
      <div id="pookjeId" class="pookjeClass4 absoluut top570">  
        <input @input="poken()" @mouseup="flapRuitenwisser()" type="range" id="range" min="1" max="9" step="1" v-model="sliderValue" />
      </div>  
      
      <!-- </div> -->
    </div>
    <!-- <div id="pookjeId" class="pookjeClass absoluut top570" :style="cssProps">
      <input @input="poken()" type="range" id="range" min="1" max="4" step="1" v-model="sliderValue" />
    </div>  
  </div> -->
  <!-- <div class="container-full-bg kleurtje">
    <div class="container mx-auto d-block">
      <div class="row">
        <div class="text-center">
          <div>
            <img :key="reRenderKey" id="animation" class="img-fluid"/>
          </div>
        </div>
        <div id="pookjeId" class="pookjeClass4 absoluut top570">  
          <input @input="poken()" @mouseup="flapRuitenwisser()" type="range" id="range" min="1" max="9" step="1" v-model="sliderValue" />
        </div>  
      </div>
    </div>
  </div> -->

</template>

<script>
export default {
  name: 'Herfst',
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/pook4.png')})`
      },
      sliderValue: 3,
      forceRender: 0,
      snelheid: 100,
      loopjumper: 0,
      reRenderKey: 0,
      StartStop: null,
      frameHeight: 300,
      frames: 15,
      frame: 0,
      divtof: document.getElementById("animation"),
      klaar: false,
      intervalId: 0,
      nogBezig: false,
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
    snel: function() {
      this.snelheid = this.snelheid - 50
    },
    langzaam: function() {
      this.snelheid = this.snelheid + 50
    },
    stop: function() {
      this.loopjumper = 1000;
    },
    // dezeFunctieMoetWeg: async function() {
    //   console.log('... maar hij heeft gewacht: ' + this.nogBezig);
    // },
    flapRuitenwisser: async function() {
      if(this.nogBezig == false){
        // let kanOokWeg = await this.dezeFunctieMoetWeg();
        var i;
        for (i = 0; i < 999; i++) {
          let kanWeg = await this.flapEENkeer();
          // console.log('kanWeg: ' + kanWeg);
          i = i + this.loopjumper;
        }
        this.loopjumper = 0;
      }
    },
    flapEENkeer: async function() {
      return new Promise((resolve, reject) => {
      let i = 22
      var frameHeight = 300;
      var frames = 22;
      var frame = 0;
      var divtof = document.getElementById("animation");
        this.intervalId = setInterval(() => {
        this.nogBezig = true;
        var frameOffset = (++frame % frames) * -frameHeight;
        divtof.style.backgroundPosition = "0px " + frameOffset + "px";
        if (--i < 1) {
          clearInterval(this.intervalId)
          this.nogBezig = false;
          resolve(frame)
          }
        }, this.snelheid)
      })
    },
    poken() {
      let zzzz = "https://vuestoragestatictof.blob.core.windows.net/pics/pook".concat(this.sliderValue + ".png");
      document.getElementById('pookjeId').style.backgroundImage = "url("+zzzz+")";
      this.snelheid = (10 - this.sliderValue) * 30;
      // if(this.nogBezig == false && this.sliderValue == 1) {
      if(this.sliderValue == 1) {
        this.stop();
      }
    },
  }
}
</script>

<style scoped>
#animation {
    background-image: url("../assets/film04.png");
    background-repeat: no-repeat;
    transform: scale(1.595,1.595);
    transform-origin:top;
    border-color: blueviolet;
    padding: 0px;
    margin: 0px;
    /* border-width: 0px; */
}
.ditte {
  max-height: 478px;
  width: 74%;  
}
#pookjeId { 
  visibility:visible;
  background-image: url("../assets/pook5.png");
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
.absoluut{
  position: absolute;
  /* max-height: 100%; */
}
</style>
