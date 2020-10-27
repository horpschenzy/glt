

<template>
    <div>
        <!-- Include Sidebar -->
        <sidebar/>

        <!-- BEGIN: Content-->
        <div class="app-content content">
            
            <!-- BEGIN: Header-->
            <div class="content-overlay"></div>
            <div class="header-navbar-shadow"></div>
            <!-- Include Navbar  -->
            <navbar/> 
            
            <div class="content-wrapper">

                <!-- {{-- Include Breadcrumb --}} -->
                <!-- <breadcrumb/> -->

                <div class="content-body">
                     <slot />

                </div>

                

            </div>

        </div>
        <!-- End: Content-->
        
    </div>

</template>

<script>
import Sidebar from '@/Shared/Sidebar' 
import Navbar from '@/Shared/Navbar' 
 


export default {
     components: {
         Navbar,
         Sidebar,
     },

    data (){
        return {
            compoName : 'Dashboard',
            form: { 
                name: '',
                business_email: '',
            }
        }
    },
    methods: {
       
    },
}
</script>
