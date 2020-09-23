<template>
  <div class="home">
    <div v-for="(item,key) of list" :key='key'>
      <img v-lazy="require('../assets/image/'+ item.img)" :key='key' alt="显示不出来" >
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Home",
  data () {
    return {
      list:[],
    }
  },
  mounted () {
    axios.get('/api/data.json').then((res)=>{
      // console.log(res.data.banner);
      this.list=res.data.banner;
    });
  }
};
</script>
<style>
img{
  display: block;
  width: 30%;
  margin: 0 auto;
}
</style>
