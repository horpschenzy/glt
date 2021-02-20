<template>
    <layout>
        <div class="pull-right" v-if="stats.page == 'non'">
            <inertiaLink href="/members" class="btn btn-primary" v-if="is('admin | head-of-follow-up-ministry ')">
                <i class="feather icon-home"></i> Registered Members.
            </inertiaLink>
        </div>
        <div class="pull-right" v-else>
            <inertiaLink href="/registered-non-members" class="btn btn-primary" v-if="is('admin | head-of-follow-up-ministry ')">
                <i class="feather icon-home"></i> Registered Non-Members.
            </inertiaLink>
        </div>
        <title-bar :name="compoName"></title-bar>
            <div class="row" v-if="is('follow-up')">
                <div class="col-lg-3 col-sm-6">
                    <div class="card mb-1">
                        <div class="card-header d-flex align-items-start pb-2">
                            <div>
                                <h3 class="text-bold-600">{{ (stats.new) ? stats.new : 0}}</h3>
                                <p class="mb-0">New Guest</p>
                            </div>
                            <div class="avatar bg-rgba-primary p-50">
                                <div class="avatar-content">
                                    <i class="feather icon-users text-primary font-medium-5"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="card mb-1">
                        <div class="card-header d-flex align-items-start pb-2">
                            <div>
                                <h3 class="text-bold-600">{{ (stats.visits) }}</h3>
                                <p class="mb-0">Total Visits</p>
                            </div>
                            <div class="avatar bg-rgba-primary p-50">
                                <div class="avatar-content">
                                    <i class="feather icon-package text-primary font-medium-5"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="card mb-1">
                        <div class="card-header d-flex align-items-start pb-2">
                            <div>
                                <h3 class="text-bold-600">{{ (stats.texts)}}</h3>
                                <p class="mb-0">Total Texts</p>
                            </div>
                            <div class="avatar bg-rgba-primary p-50">
                                <div class="avatar-content">
                                    <i class="feather icon-bell text-primary font-medium-5"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="card mb-1">
                        <div class="card-header d-flex align-items-start pb-2">
                            <div>
                                <h3 class="text-bold-600">{{ (stats.emails)}}</h3>
                                <p class="mb-0">Emails</p>
                            </div>
                            <div class="avatar bg-rgba-primary p-50">
                                <div class="avatar-content">
                                    <i class="feather icon-calendar text-primary font-medium-5"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="card mb-1">
                        <div class="card-header d-flex align-items-start pb-2">
                            <div>
                                <h3 class="text-bold-600">{{ (stats.calls) }}</h3>
                                <p class="mb-0">Calls</p>
                            </div>
                            <div class="avatar bg-rgba-primary p-50">
                                <div class="avatar-content">
                                    <i class="feather icon-cloud text-primary font-medium-5"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div class="row">

            <div class="col-12 ">
                <div class="card">
                    <div class="card-content">
                        <div class="card-body card-dashboard mb-2">
                            <div class="pull-right">
                                <inertiaLink v-if="is('admin | super-admin')" href="/members/add" class="btn btn-primary">
                                    <i class="feather icon-user"></i> Add Members
                                </inertiaLink>
                                <inertiaLink v-if="is('follow-up | head-of-ministry | ahom')" href="/members/guest/add" class="btn btn-primary">
                                    <i class="feather icon-user"></i> Add Guest
                                </inertiaLink>
                            </div>
                            <h4 class="card-title" >Members</h4>
                            <div class="table-responsive">
                                <table class="table table-hover zero-configuration">
                                    <thead>
                                        <tr>
                                            <tr>
                                                <th>Name</th>
                                                <!-- <th>Image</th> -->
                                                <th>Email</th>
                                                <th >Phone number</th>
                                                <th v-if="is('admin | head-of-ministry | ahom | super-admin')">Extension</th>
                                                <th v-if="is('admin | head-of-ministry | ahom | super-admin')">Role</th>
                                                <th v-if="is('admin | head-of-ministry | ahom | super-admin')">Ministry</th>
                                                <th v-if="is('admin | head-of-ministry | ahom | super-admin')">Unit</th>
                                                <th v-if="is('admin | head-of-ministry | ahom | super-admin')">Progress</th>
                                                <th v-if="is('admin | head-of-ministry | ahom | super-admin')">Action</th>

                                            </tr>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(member, key) in members" :key="key">

                                            <td> {{ member.last_name }} {{ member.first_name }} {{ member.other_names }}</td>
                                            <!-- <td class="product-img">
                                                <div class="avatar mr-1 avatar-xl">
                                                    <img :src="member.image" alt="Img placeholder">
                                                </div>
                                            </td> -->
                                            <td class="product-name">{{ member.email_address }}</td>
                                            <td class="product-category">{{ member.phone_number }}</td>
                                            <td v-if="is('admin | head-of-ministry | ahom | super-admin')" class="product-category">{{ (member.extension) ? member.extension.ext_name:'' }}</td>
                                            <td v-if="is('admin | head-of-ministry | ahom | super-admin')" class="product-category">{{ (member.role_id)? formatString(member.role.name): '' }}</td>
                                            <td v-if="is('admin | head-of-ministry | ahom | super-admin')" class="product-category">{{ (member.ministry)? member.ministry.min_name: '' }}</td>
                                            <td v-if="is('admin | head-of-ministry | ahom | super-admin')" class="product-category">{{ (member.unit)? member.unit.unit_name: '' }}</td>
                                            <td v-if="is('admin | head-of-ministry | ahom | super-admin')">
                                                <div class="progress progress-bar-success">
                                                    <div class="progress-bar" role="progressbar" :aria-valuenow="(member.progress/4 * 100)" :aria-valuemin="(member.progress/4 * 100)" aria-valuemax="100" :style="'width:'+ member.progress/4 * 100 + '%'"></div>
                                                </div>
                                            </td>

                                            <td>
                                                <div class="dropdown">
                                                        <button class="btn-icon btn btn-primary btn-round btn-sm" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="feather icon-more-vertical"></i></button>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <template v-if="is('admin | head-of-ministry | ahom | super-admin')">
                                                                <p class="badge badge-success dropdown-item" v-if="(member.assigned)">ASSIGNED</p>
                                                                <button v-else class="dropdown-item" data-toggle="modal"  @click="currentRec(member)"  data-target="#addFollowModal">
                                                                    Assign
                                                                </button>
                                                            </template>
                                                            <button class="dropdown-item"  v-if="is('admin | head-of-follow-up-ministry ')"  @click="moveMember(member.user != null ? member.user : undefined);">
                                                                Move To FBS
                                                            </button>
                                                            <inertia-link v-if="is('admin | head-of-ministry | ahom | super-admin | follow-up')" :href="'/feedback/' + member.id" class="dropdown-item">View Feedback</inertia-link>
                                                            <inertia-link v-if="is('admin | head-of-ministry | ahom | super-admin')" :href="'/member/update/'+member.id" class="dropdown-item" >Edit Member</inertia-link>
                                                            <button v-if="is('admin | head-of-ministry | ahom | super-admin')" class="dropdown-item" @click="deleteMember(member.id);">Delete Member</button>
                                                        </div>
                                                    </div>
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

        <div class="modal fade text-left" id="addFollowModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel33" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel33">Follow Up </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form class="form form-vertical" method="POST" action="#" @submit.prevent="submit">
                        <div class="modal-body row m-1">

                                <div class="form-group col-12">
                                    <label for="first-name-icon">Assign Follow Up </label>
                                    <div class="position-relative has-icon-left">
                                        <select class="form-control" v-model="form.user_id">
                                            <option value="" selected>Select User</option>
                                            <option v-for="(user, key) in users" :key="key" :value="user.id">{{ user.name }}</option>
                                        </select>
                                        <div class="form-control-position">
                                            <i class="feather icon-home"></i>
                                        </div>
                                    </div>
                                </div>
                                <input type="hidden" v-model="form.id"  id="">
                            </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary mr-1  waves-effect waves-light"> <i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i>Save</button>
                        </div>
                    </form>
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
        members: Array,
        users: Array,
        stats: Array
    },
    data (){
        return {
            compoName : (this.stats.page == 'non') ? 'Non-Members' : 'Members',
            loader : false,
            form: {
                user_id: '',
                id: '',
            },
        }
    },
    mounted () {
        this.$nextTick(function() {
            selectActiveMenu();
            $('.zero-configuration').DataTable( { "aaSorting": [] } );
        })
    },

    methods: {
        formatString(val){
            var first = val.replace("-", " ");
            var second =  first.replace("-", " ");
            return second.toUpperCase()

        },
        submit() {
            this.loader = true;
            axios.post("/follow-up", this.form)
                .then(response => {
                    toastr.success(response.data.success, 'Success');
                    $('#addFollowModal').modal('hide');
                    this.$inertia.visit('members');
                    this.loader = false;
                }).catch(error => {
                this.loader = false;
                toastr.error(error.response.data.message, 'Error');

            });

        },
        deleteMember(id) {
            this.$swal({
                title: 'Delete Member?',
                text: 'You can\'t revert your action',
                type: 'success',
                showCancelButton: true,
                confirmButtonText: 'Yes, Delete it!',
                cancelButtonText: 'No, Cancel!',
                showCloseButton: true,
                showLoaderOnConfirm: true
            }).then((result) => {
                if(result.value) {
                    axios.get("/member/delete/"+ id)
                    .then(response => {
                        toastr.success(response.data.success, 'Success');
                        this.$inertia.visit('members');

                    }).catch(error => {
                        toastr.error(error.response.data.message, 'Error');
                    });
                } else {
                    this.$swal('Cancelled', 'Your file is still intact', 'info')
                }
            })
        },
        moveMember(user) {
            if (user == undefined) {
                toastr.error('Selected Member needs to be a user!!! Kindly update the member role.', 'Error');
            }
            else{
                this.$swal({
                    title: 'Move Member?',
                    text: 'You can\'t revert your action',
                    type: 'success',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Move it!',
                    cancelButtonText: 'No, Cancel!',
                    showCloseButton: true,
                    showLoaderOnConfirm: true
                }).then((result) => {
                    if(result.value) {
                        axios.get("/member/move/"+ user.id)
                        .then(response => {
                            toastr.success(response.data.success, 'Success');
                            this.$inertia.visit('members');
                        }).catch(error => {
                            toastr.error(error.response.data.message, 'Error');
                        });
                    } else {
                        this.$swal('Cancelled', 'Your file is still intact', 'info')
                    }
                })

            }
        },

        currentRec(member){
            this.addEdit = 'Edit';
            this.form.id = member.id;
            this.form.user_id = member.user.id;

        },
    },



}
</script>


