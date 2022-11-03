<template>
<div class="root">
    <div class="top">
        <div class="left">
           <router-link to="/center">
           <img src="../../../public/images/shanzhu.png" alt="">
           </router-link> 
        </div>
        <div class="right">
            <router-link to="/center" class="link">首页</router-link>
            <router-link to="/photos" class="link">过去一年</router-link>
            <router-link to="/music" class="link">铄姐的音乐</router-link>
            <router-link to="/letter" class="link">铄姐的信</router-link>
        </div>
    </div>
    <h1>{{str}}</h1>
    <div class="wrapper">
        <div v-for="(item,index) in musicArr" :key="index">
            <div class="nei">
                <img src="../../../public/images/yinle_1.png" @click="countAdd(item.id,item.url)">
                <span>{{item.detail}}</span>
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    data(){
        return {
            musicArr:[{
                id:1,
                detail:'铄姐很想让我唱但我还没唱的歌',
                url:require('../../../public/music/1namejiaoao.mp3')
                    
            },
            {
                id:2,
                detail:'听点高兴的',
                url:require('../../../public/music/2hongshanguo.mp3')
            },
            {
                id:3,
                detail:'你相信吗 也许在另一个平行时空 有一个跟你长得很像很像的人 正在热烈得爱着那个你爱不到的人',
                url:require('../../../public/music/3xiangjianni.mp3')
            },
            {
                id:4,
                detail:'永远爱你是我说过~',
                url:require('../../../public/music/4womenlia.mp3')
            },
            {
                id:5,
                detail:'不知道啥歌，在铄姐网易云歌单看见的日本歌',
                url:require('../../../public/music/5ribenge.mp3')
            },
            {
                id:6,
                detail:'铄姐最喜欢的风格之一',
                url:require('../../../public/music/6fengyucaihong.mp3')
            },
            {
                id:7,
                detail:'铄姐墙裂推荐',
                url:require('../../../public/music/7yiqiyihui.mp3')
            },
            {
                id:8,
                detail:'世界上有很多很多很多很多很多的人~',
                url:require('../../../public/music/8nameduoren.mp3')
            }],
            count:[0,0,0,0,0,0,0,0],
            isTimerPlaying:false,
            audio:'',
            str:'点图标可以听到音乐哦~'
        }
    },
    created(){
        // console.log(this.audio,"111")
        
    },
    methods:{
      countAdd(id,url){
         if(this.count[id-1]<10){
            this.count[id-1]++
        switch(this.count[id-1])
        {
            case 1:
                this.str='让你点你就点？'
                break;
            case 2:
                this.str='你再点一个试试？'
                break;
            case 3:
            this.str='呦呵~再点一下'
                break;
            case 4:
            this.str='可以~'
                break;
            case 5:
            this.str='再坚持一下！！！'
                break;
            case 6:
            this.str='就快听到了！'
                break;
            case 7:
            this.str='@嘿嘿，逗你玩，还要接着点@'
                break;
            case 8:
            this.str='这次是真的快听到了哦~~'
                break;
            case 9:
            this.str='马上了马上了！！！'
                break;       
        }
       
        }
        if(this.count[id-1]>=10){
            this.str='再点点别的试试~'
            this.$bus.$emit('playmusic',url)
            this.count[id-1]=0
        }
    } ,
    }
    
}
</script>

<style scoped>
.root{
    padding-top:10px;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: beige;
}
.top{
    position:fixed;
    top:0;
    left:0;
    background-color: beige;
    width:100%;
    height:70px;
    display:flex;
    justify-content: space-around;
    align-items: center;
}
.wrapper{
    width:80%;
    display:grid;
    grid-template-columns: 1fr 1fr;
}
.wrapper>div{
    background-color:white;
    border-radius: 8px;
    height:120px;
    margin:5px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
}
.nei{
    /* width:80%; */
    /* height:85%; */
    display: flex;
    align-items: center;
    margin-left:2vw;
    
}
.nei>img{
    width:6vw;
    height:5vw;
}
.nei span{
    font-size: 20px;
    color:#8d9094;
}
h1{
    color:#74e6cb;
}
.right{
    margin-top:20px;
}
.link{
    text-decoration: none;
    color:#f1a22e;
    margin:0 20px;
    font-size:18px;
}
.left img{
    margin-top:20px;
    width:3vw;
    height:3vw;
}
</style>