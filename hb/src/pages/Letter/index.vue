<template>
  <div class="lll">
    <img src="../../../public/images/liwu.png" @click="letterShow">
    <h1>你知道该点哪里的对吧~</h1>
    <div :class="{mask: ls == true, unshowMask: ls == false}">
      <span @click="closeDetail" :class="{showX:ls==true}">X</span>
      
      <p>&nbsp;&nbsp;&nbsp;&nbsp;看到这里相信你应该有点感动?不感动也没事</p>
      
      <p>&nbsp;&nbsp;&nbsp;&nbsp;不知不觉已经和铄姐认识好多好多个年，也不知道这到底是铄姐多少岁的生日，只是觉得和她在一起的时光总是很快乐</p>
      
      <p>&nbsp;&nbsp;&nbsp;&nbsp;你我相识于一个美好的年纪，未来也将一起走过很多很多个四季</p>
      
      <p>&nbsp;&nbsp;&nbsp;&nbsp;马上我可能就要去实习了，明年你也要考研，也许未来我们真的不在同一个城市，但是没关系，我相信时间和距离对我们来说都算不上是障碍，你也没必要把我的城市规划到你的未来里，去自己想去的地方，考自己想考的研究生</p>
      
      <p>&nbsp;&nbsp;&nbsp;&nbsp;大学四年除了写报告也没写过什么有营养的文字，本来就差的文采变得更差了，现在也有点编不出来了</p>
      
      <p>&nbsp;&nbsp;&nbsp;&nbsp;总之，在这里祝我铄姐，长皱纹不长岁数，福如东海寿比南山</p>
      
      <p>&nbsp;&nbsp;&nbsp;&nbsp;希望她在以后的日子里可以一直快乐，并且越来越好看，吃嘛嘛香身体倍棒，可以不用被封校，可以经常出去玩</p>
      
      <p>&nbsp;&nbsp;&nbsp;&nbsp;最后想说的是，最近事情比较多，导致这个blog做的很仓促，很多需求都被临时裁掉了，图片加载可能很慢，体验感也不是很好，但是没关系，接下来我会不断完善，希望这份来自程序员的浪漫能带给你几分钟快乐的时光</p>
      <br><br>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;谨以此站献给我的好朋友：铄姐</p>
      
      <p>&nbsp;&nbsp;&nbsp;&nbsp;铄姐的好朋友JJ写于2022年11月2日</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      ls:false
    }
  },
  methods:{
    letterShow(){
      this.ls=true
    },
    closeDetail(){
      this.ls=false
    }
  },
  mounted(){
    setTimeout(()=>{
      this.$bus.$emit('playmusic',require('../../../public/music/hb.mp3'))
    },5000)
  }
}
</script>

<style scoped>
.lll{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:#fefae7;
  height:100vh;
}
img{
  height:200px;
  height:300px;
  margin-top:100px;
}
h1{
  color:#f1a26b;
  font-size:50px;
  margin-top:100px;
}
.mask{
    z-index:5;
    width:90rem;
    height:500px;
    border-radius: 8px;
    background-color: #fff;
    position:absolute;
    padding-top:100px;
    left:50%;
    top:80px;
    transform: translateX(-50%);
}
.unshowMask{
    display:none;
}
.showX{
    position:absolute;
    right:5px;
    top:5px;
}
p{
  font-size:16px;
  color:#4b5563;
  margin:10px;
}
</style>