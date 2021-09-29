

<template>
    <div>
        
        <!-- BEGIN: Content-->
        <div class="app-content content">

            <div class="content-body">

                <!-- {{-- Include Startkit Content --}} -->
                <slot />

            </div>

        </div>

        <!-- End: Content-->
        
    </div>

</template>

<script>
export default {
     components: {
     
     },

    data (){
        return {
            form: { 
                name: '',
                business_email: '',
            }
        }
    },
    methods: {
        submit() {
        axios.post("/business/add", this.form)
            .then(response => {
           
                toastr.success(response.data.success, 'Success');
                
                this.form.name = '';
                this.form.business_email = '';
                
                $('#addBusinessModal').modal('hide');
                this.$inertia.visit('activate');

            }).catch(error => {
                toastr.error(error.response.data.message, 'Error');
                    
            });
                
        }
            
    },
}
</script>
