<template>
  <layout id="slide-in">
    <title-bar :name="compoName"></title-bar>
    
  </layout>
</template>

<script>
import TitleBar from '@/Shared/TitleBar';
import Layout from '@/Shared/Layout'

export default {
    components: {
         Layout,
         TitleBar,
     },
    props: {

    },
    data (){
        return {
            compoName : 'Dashboard',
            loader : false,
        }
    },
    mounted () {
        this.$nextTick(function() {
            selectActiveMenu();
            $('.zero-configuration').DataTable( { "aaSorting": [] } );
        })
    },

}
</script>

