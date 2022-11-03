<template>
<div class="root">
   <div class="container">
    <div class="one hhh" v-for="(item,index) in photoArr" :key="index">
        <div class="time">
           <span>Date</span>
            <div>{{item.time}}</div> 
        </div>
        <div class="bread" v-for="b in item.bread" :key="b.id">{{b.detail}}</div>
        <img :src="item.img" @click="goDetail(index)">
        <div :class="{mask: showmask == true, unshowMask: showmask == false}">
        <span @click="closeDetail" :class="{showX:showmask==true}">X</span>
        <div :class="{showImgStyle:showmask==true}" v-for="xx in item.maskPhotos" :key="xx.id" v-show="(currentIndex==index)">
        <h3>{{xx.letters}}</h3>
        <img v-for="p in xx.photoUrl" :key="p.id" :src="p.url" :class="{maskImg:showmask==true}">  
        </div>
        </div>
    </div>
  </div> 
  
</div>
  
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            showmask:false,
            currentIndex:-1
        }
    },
    methods:{
        goDetail(index){
            this.showmask=true;

            this.currentIndex=index
        },
        closeDetail(){
            this.showmask=false;
        }
    },
    computed:{
        ...mapState({
            photoArr:(state)=>{
                return state.photos.photoArr
            }
        })
    }
}
</script>

<style scoped>
.root{
    display: flex;
    justify-content: center;
    background-color:#fefae7;
    padding-top:80px;
    height:10000px;
}
.container{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* 需要指定高度 */
    height: 1600px;
    width:65rem;
    
}
.hhh{
    width:33.3%;
    margin:5px;
    border-radius: 2%;
    background-color: white;
}
.one>img{
    width:94%;
    /* height:200px; */
    border-radius: 6px;
    margin-left:3%;
    margin-top:5%;
    margin-bottom:3%;
    transition:transform 0.25s ease-in-out 0.25s;
}
.one>img:hover{
    transform:scale(1.02); 
}
.bread{
    display: inline-block;
    border-radius:3px;
    margin-top:3%;
    margin-left:3%;
    background-color:#c8d8be;
    position:relative;
    padding:0 2px;
    color:white;
}
.time{
    margin-left:3%;
    margin-top:4%;
    color:#919598;
}
.mask{
    z-index:5;
    width:75rem;
    border-radius: 8px;
    background-color: #fff;
    position:absolute;
    padding-top:20px;
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
.maskImg{
    border-radius: 6px;
    margin-right:5px;
    width:80%;
}
.showImgStyle{
    margin:3%;
    width:70%;
}
h3{
    margin-left:20px;
    color:#f1a22e;
}
</style>