<template>
  <div class="player">
    <audio :src="musicUrl" autoplay="autoplay" loop="true"></audio>
    <!-- <button>dianwo</button> -->
  </div>
</template>

<script>
export default {
    data(){
        return{
            musicUrl:'',
            audio:''
        }
    },
    mounted(){
    this.$bus.$on('playmusic',myUrl=>{
            this.musicUrl=myUrl;
        })
    },
    beforeDestroy() {
        this.$bus.off("playmusic")
    },
}
</script>

<style>

</style>