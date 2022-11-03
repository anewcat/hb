<template>
<div>
    <div class="top"
    :class="{ cur: display == true }"
    >
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
</div>
    
</template>

<script>
export default {
    data(){
        return {
            scrollTop:0,
            display:false
        }
    },
    methods:{
       scrolll(){
        let scrollTopl=document.body.scrollTop||document.documentElement.scrollTop;
        if(scrollTopl-this.scrollTop>0){
            this.display=true//不显示
        }else if(scrollTopl-this.scrollTop<0){
            this.display=false//显示
        }
        this.scrollTop=scrollTopl
       }
    },
    mounted(){
        window.addEventListener('scroll',this.scrolll)
    },
}
</script>

<style scoped>
html{
    height:2000px;
}
.top{
    position:fixed;
    top:0;
    left:0;
    background-color: beige;
    opacity: 0.8;
    width:100%;
    height:70px;
    animation: showmove 0.5s infinite;
    animation-iteration-count:1;
    z-index:99;
    display:flex;
    justify-content: space-around;
    align-items: center;
}
@keyframes showmove {
    from{
        height:0px;
    }
    to{
        height:70px;
    }
}
.cur{
    height:0px;
    display:none;
    animation: nonemove 0.5s infinite;
    animation-iteration-count:1;
}
@keyframes nonemove {
    from{
        height:70px;
    }
    to{
        height:0px;
    }
}
.link{
    text-decoration: none;
    color:#f1a22e;
    margin:0 20px;
    font-size:18px;
}
.left img{
    width:3vw;
    height:3vw;
}
</style>