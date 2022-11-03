<template>
  <div class="all">
    <Typer :str="str"/>
    <img src="../../../public/images/yinle.png" @click="playMusic" :class="{disshow:disshow==false}">
  </div>
</template>

<script>
export default {
    data(){
      return{
        str:["Hello, Welcome to Xiaole's Space.","下面我会给你一些引导","记住，千万要按引导办事！！！不然小心铄姐出来抓你！！！","那接下来我们开始吧~","首先可以点一下下面的图标哦~","点完了吗？？？","嘿嘿，好听吧~","点完图标之后再看看上面的导航栏吧","铄姐的音乐那块可以换音乐，不想听这首歌的话可以随时去那里换哦","过去一年里有宝藏","铄姐的信里有惊喜","记得要最后再看'铄姐的信哦'","不如就先去看看'过去一年吧'~~~","记得看的过程中也可以去换一首歌听听哦"],
        disshow:true
      }
    },
    methods:{
      playMusic(){
        this.$bus.$emit('playmusic',require('../../../public/music/quanju.mp3'))
        this.disshow=false
      }
    }
}
</script>

<style scoped>
*{
  margin:0;
  padding:0;
}
.all{
  margin:0;
  background: url(@/../public/images/welcome.jpg) no-repeat;
  height:100vh;
  width:100vw;
  background-size:contain;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
}
img{
  width:60px;
  height:60px;
}
.disshow{
  width:0px;
  animation: unshow 1s infinite;
  animation-iteration-count:1;
}
@keyframes unshow {
  from {
    width:60px
  }
  to{
    width:0px;
  }
}
</style>