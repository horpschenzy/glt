<template>
    <layout>
        <title-bar :name="compoName"></title-bar>
        
        <div  id="slide-in" class="row"  >
            <div class="col-lg-4 col-md-6 col-sm-12" v-for="(extension, key) in extensions" :key="key">
                <div class="card border-info text-center bg-transparent">
                    <div class="card-content">
                        <img v-if="extension.ext_image" :src="'/'+extension.ext_image" :alt="extension.name" height="100" width="100" style="padding: 20px;" class="float-left mt-3 pl-2">
                        <img v-else :src="'/images/logo/gltlogo.png'" :alt="Headquarter" height="100" width="100" style="padding: 20px;" class="float-left mt-3 pl-2">
                        <div class="card-body">
                            <h4 class="card-title mt-3">{{extension.ext_name}}</h4>
                            <p class="card-text mb-25">{{extension.ext_location}}</p>
                            <button @click="viewDashboard(extension.id)" class="btn btn-info mt-1 waves-effect waves-light">View dashboard</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card border-info text-center bg-transparent">
                    <div class="card-content">
                        <img :src="'jj'" :alt="'GLTCIS'" height="100" width="100" style="padding: 20px;" class="float-left mt-3 pl-2">
                        <div class="card-body">
                            <h4 class="card-title mt-3">GLT-CIS</h4>
                            <p class="card-text mb-25">Head-quarter</p>
                            <button @click="viewDashboard('glt')" class="btn btn-info mt-1 waves-effect waves-light">View All</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </layout>
</template>

<script>
import TitleBar from '@/Shared/TitleBar';
import Layout from '@/Shared/Layout'
import axios from 'axios';

export default {
    components: {
        Layout,
        TitleBar,
    },
    props: {
        extensions:Array,
    },
    data (){
        return {
            compoName : 'Dashboard Home',
            loader : false,
        }
    },
    mounted () {
        this.$nextTick(function() {
            selectActiveMenu();
            $('.zero-configuration').DataTable( { "aaSorting": [] } );
        })
    },

    methods:{
         viewDashboard(id){
            axios.get('/changeExtension/'+ id)
            .then(response => {
                this.$inertia.visit('/dashboard');
            }).catch(error => {
                this.loader = false;
                toastr.error(error.response.data.message, 'Error');
            });
            
        }
    },

}
</script>

