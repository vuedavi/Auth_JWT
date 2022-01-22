<template>
  <div class="container">
      {{content}}
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Feed',
    data(){
        return{
            content: ''
        }
    },
    mounted(){  
        axios.get('https://reqres.in/api/login').then(res=>{
            this.content = res.data
        })
    }
}
</script>

<style>

</style>