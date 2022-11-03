<template>
  <div>
    <h1>
      <span v-for="(letter,index) in words" :key="index">{{letter}}</span>
      <span :class="{ typercursor: showcur === true }">|</span>
    </h1>
  </div>
</template>

<script>
export default {
    name:"Typer",
    props:['str'],
    data(){
        return{
        words:[],               //字母数组push，pop的载体
        letters:[],             //str分解后的字母数组
        showcur:false,
        typerStr:'',
        order:0
        }
    },
  mounted(){
    this.begin()
  },
  methods:{
    begin(){
        this.typerStr=this.str[this.order]
        this.letters=this.typerStr.split('');
        for(var i=0;i<this.letters.length;i++){
          setTimeout(this.write(i),i*200)
        } 
    },
    back(){
      let L=this.letters.length;
      for(let i=0;i<L;i++){
        setTimeout(this.wipe(i),i*100)
      }
    },
    write(i){
      return ()=>{
        let L=this.letters.length;
        this.words.push(this.letters[i]);
        let that=this;
        if(i==L-1){
          this.showcur=true;
          setTimeout(function(){
            that.showcur=false;
            that.back();
          },1000)
        }
      }
    },
      wipe(i){
      return ()=>{
          this.words.pop(this.letters[i]);
          /*如果删除完毕，在300ms后开始输入*/
          if(this.words.length==0){
            if(this.order<this.str.length-1){
              this.order++;
              console.log(this.order,"cccc")
            }else{
              this.order=0;
              console.log(this.order,"ffff")
            }
             let that=this;
             setTimeout(function(){
               that.begin();
             },500);
          }
      }
    },
  }
}
</script>

<style scoped>
h1{
   color:whitesmoke;
  font-size:50px;
  margin-top:200px;
}
.typercursor{
  opacity: 0;
  animation: show 1s linear;
  animation-iteration-count:1;
}
@keyframes show {
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>