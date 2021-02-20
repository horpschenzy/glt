<template>
<layout id="slide-in">
    <div class="pull-right">
        <inertiaLink href="/event" class="btn btn-primary" v-if="is('super-admin')">
            <i class="feather icon-home"></i> Back
        </inertiaLink>
    </div>
    <title-bar :name="compoName"></title-bar>
    <div class="row" id="slide-in">

        <div class="col-xl-12 col-md-12 col-sm-12">
            <div class="">
                <div class="card-content collapse show">
                    <div class="card-header">
                        <h3>{{ event.event_name }}</h3>
                    </div>
                    <div class="card-body">
                        <div class="users-list-filter">
                            <form>
                                <div class="row">
                                    <div class="col-12 col-sm-6 col-lg-5">
                                        <fieldset class="form-group position-relative">
                                            <input type="text" class="form-control" id="iconLabelRight" v-model="search" placeholder="Search Attendee">
                                            <div class="form-control-position">
                                                <i class="feather icon-search"></i>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6 col-md-6 col-sm-12">
           <div class="card">
                <div class="card-content">
                    <img class="card-img-top img-fluid" :src="'/'+event.event_image" alt="Card image cap">
                </div>
            </div>
        </div>
         <div class="col-xl-6 col-md-6 col-sm-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body card-dashboard mb-2">
                        <h4 class="card-title">Check In</h4>
                        <div class="table-responsive mt-2">
                            <table class="table zero-configuration">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Code</th>
                                        <th>Email Address</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr role="row" v-for="checkin in checkins" :key="checkin.access_code" class="odd">
                                        <td class="product-category">{{checkin.name}}</td>
                                        <td class="product-category">{{checkin.access_code}}</td>
                                        <td class="product-name">{{checkin.email}}</td>
                                        <td class="product-name" v-if="checkin.status == 'pending'">
                                            <a @click="moveUserIn(checkin.id)" class="btn btn-sm btn-success text-white" v-if="is('super-admin')">
                                                <i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i> Check In
                                            </a>
                                        </td>
                                        <td class="product-name" v-else>
                                            <a  class="btn btn-sm btn-success text-white" v-if="is('super-admin')">
                                                <i class="feather icon-check"></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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

export default {
    components: {
         Layout,
         TitleBar,
     },
    props: {
        checkins: Array,
        event: Object,
    },
    data (){
        return {
            compoName : 'Check In',
            loader : false,
            search : '',
             form: {
                check_in_id:''
            }

        }
    },
    watch: {
        search: {
            handler: _.debounce(function () {
                this.searchCheckIns()
            }, 100)
        }
    },
    methods: {
        moveUserIn(check_in_id){
            this.$swal({
                title: 'Check In User?',
                text: 'You can\'t revert your action',
                type: 'success',
                showCancelButton: true,
                confirmButtonText: 'Yes, Check In!',
                cancelButtonText: 'No, Cancel!',
                showCloseButton: true,
                showLoaderOnConfirm: true
            }).then((result) => {
                if(result.value) {
                    this.loader = true;
                    this.form.check_in_id = check_in_id;
                    axios.post("/moveUserIn", this.form)
                    .then(response => {
                        toastr.success(response.data.success, 'Success');
                        this.$inertia.visit('/check-in/event/'+this.event.event_code);
                        this.loader = false;
                    }).catch(error => {
                        this.loader = false;
                        toastr.error(error.response.data.message, 'Error');

                    });
                } else {
                    this.$swal('Cancelled', 'Your file is still intact', 'info')
                }
            })
        },
        searchCheckIns(){
            this.form.search = this.search;
            axios.post("/searchCheckIns/"+this.event.id, this.form)
            .then(response => {
                this.checkins = response.data.success;
            }).catch(error => {
            });
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

