<template>
  <div style="text-align:center;color: #333;">
    <h4>大转盘</h4>
    <div id="round" class="round">
    </div>
    <button @click="resetDeg()">旋转</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        key: 'value'
      }
    },
    mounted() {
      console.log(this);
      
      setTimeout(() => {
        this.resetDeg()
      }, 2000);
    },
    getRandomDeg() {
      return Math.random()*360
    },
    resetDeg() {
      let deg = document.getElementById('round').style.transform.match(/(\d+)/g)
      deg= parseInt(deg)
      // console.log(deg[0]%360);
      doRoate(deg + getRandomDeg()||0 + 360*5)
    },
    doRoate(deg) {
      document.getElementById('round').style.transform = 'rotate('+deg+'deg)'
    },
  }
</script>

<style scoped>
.round {
    background-image: url(../public/round.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 300px;width: 300px;
    margin: 50px auto;
    /* animation: round ease 10s; */
    transition: all 10s ease;
  }

  @keyframes round {
    /* 10% {transform: rotate(100deg)}
    30% {transform: rotate(1080deg)}
    60% {transform: rotate(1800deg)}
    80% {transform: rotate(2880deg)}
    90% {transform: rotate(3000deg)} */
    100% {transform: rotate(3100deg)}
  }
</style>