<template>
    <div>
        <layout>
            <title-bar :name="compoName"></title-bar>
            <div class="row" id="slide-in">
                <div class="col-12 ">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body card-dashboard mb-2">
                                <div class="pull-right">
                                    <button class="btn btn-primary" data-toggle="modal"  @click="clearRec()" data-target="#addUsersModal">
                                        <i class="feather icon-home"></i> Add Users
                                    </button>
                                </div>
                                <h4 class="card-title">Users</h4>
                                <div class="table-responsive mt-2">
                                    <table class="table table-hover zero-configuration">
                                        <thead>
                                        <tr>
                                            <th>User ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone Number</th>
                                            <th>Username</th>
                                            <th>Extension</th>
                                            <th>Role</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="(user, key) in users" v-bind:key="user.id">
                                            <td>{{ key + 1 }} </td>
                                            <td>{{ user.name }}</td>
                                            <td>{{ user.email }}</td>
                                            <td>{{ user.phone }}</td>
                                            <td>{{ user.username }}</td>
                                            <td>{{(user.extension)? user.extension.ext_name: ''}}</td>
                                            <td>{{ (user.roles[0])? formatString(user.roles[0].name): '' }}</td>
                                            <td>
                                                <button class="btn btn-success btn-rounded btn-sm" @click="currentRec(user);" data-toggle="modal"  data-target="#addUsersModal"><i class="feather icon-edit"></i></button>
                                                <button class="btn btn-info btn-rounded btn-sm" @click="deleteUser(user.id);"><i class="feather icon-delete"></i></button>
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

            <div class="modal fade text-left" id="addUsersModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel33" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel33">{{ addEdit }} Users </h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form class="form form-vertical" method="POST" action="#" @submit.prevent="submit">
                            <div class="modal-body row m-1">
                                <div class="row">
                                    <div class="form-group col-6">
                                        <label for="first-name-icon">Name</label>
                                        <div class="position-relative has-icon-left">
                                            <input type="text" v-model="form.name" placeholder="Name" required=""  class="form-control">
                                            <div class="form-control-position">
                                                <i class="feather icon-home"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-6">
                                        <label for="first-name-icon">Password</label>
                                        <div class="position-relative has-icon-left">
                                            <input type="password" v-model="form.password" placeholder="Enter Password"  class="form-control">
                                            <div class="form-control-position">
                                                <i class="feather icon-lock"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group col-6">
                                        <label for="first-name-icon">Username</label>
                                        <div class="position-relative has-icon-left">
                                            <input type="text" v-model="form.username" placeholder="Username" required=""  class="form-control">
                                            <div class="form-control-position">
                                                <i class="feather icon-home"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group col-6">
                                        <label for="first-name-icon"> Phone Number</label>
                                        <div class="position-relative has-icon-left">
                                            <input type="text" v-model="form.phone"  placeholder="Phone Number"  class="form-control">
                                            <div class="form-control-position">
                                                <i class="feather icon-smartphone"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group col-6">
                                        <label for="email-id-icon"> Email</label>
                                        <div class="position-relative has-icon-left">
                                            <input type="email" id="email" v-model="form.email" placeholder="Enter Email Address"  class="form-control">
                                            <div class="form-control-position">
                                                <i class="feather icon-mail"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group col-6">
                                        <label for="contact-info-icon"> Extension</label>
                                        <div class="position-relative has-icon-left">
                                            <select class="form-control" v-model="form.extension_id">
                                                <option value="">Select Extension</option>
                                                <option v-for="(extension, key) in extensions" :key="key" :value="extension.id">{{ extension.ext_name }}</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group col-6">
                                        <label for="contact-info-icon">Roles </label>
                                        <div class="position-relative has-icon-left">
                                            <select class="form-control" v-model="form.role_id">
                                                <option value="">Select Roles</option>
                                                <option v-for="(role, key) in roles" :key="key" :value="role.id">{{formatString(role.name) }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group col-6">
                                        <label for="contact-info-icon">Status </label>
                                        <div class="position-relative has-icon-left">
                                            <select class="form-control" v-model="form.status">
                                                <option value="">Select Status</option>
                                                <option value="Active">Active</option>
                                                <option value="Deactivated">Deactivated</option>
                                                <option value="Suspended">Suspended</option>
                                            </select>
                                        </div>
                                    </div>
                                    <input type="hidden" v-model="form.id" id="">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary mr-1  waves-effect waves-light"> <i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </layout>
    </div>
</template>

<script>
import Layout from '@/Shared/Layout'
import TitleBar from '@/Shared/TitleBar'

export default {
    components: {
        Layout,
        'title-bar' : TitleBar,
    },
    props: {
        extensions: Array,
        users: Array,
        roles:Array,
    },
    data (){
        return {
            compoName : 'Users',
            loader : false,
            addEdit : '',
            form: {
                email: '',
                phone: '',
                name: '',
                password:'',
                username: '',
                extension_id: '',
                id: '',
                status: '',
                role_id: ''
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
        deleteUser(id) {
            this.$swal({
                title: 'Delete User?',
                text: 'You can\'t revert your action',
                type: 'success',
                showCancelButton: true,
                confirmButtonText: 'Yes, Delete it!',
                cancelButtonText: 'No, Cancel!',
                showCloseButton: true,
                showLoaderOnConfirm: true
            }).then((result) => {
                if(result.value) {
                    axios.get("/user/delete/"+ id)
                        .then(response => {
                            toastr.success(response.data.success, 'Success');
                            this.$inertia.visit('users');
                        }).catch(error => {
                        toastr.error(error.response.data.message, 'Error');
                    });
                } else {
                    this.$swal('Cancelled', 'Your file is still intact', 'info')
                }
            })
        },

        submit() {
            axios.post("/user/add", this.form)
                .then(response => {
                    toastr.success(response.data.success, 'Success');
                    $('#addUsersModal').modal('hide');
                    this.$inertia.visit('users');
                }).catch(error => {
                this.loader = false;
                toastr.error(error.response.data.message, 'Error');

            });

        },

        currentRec(user){
            this.addEdit = 'Edit';
            this.form = user;
        },

        clearRec(){
            this.addEdit = 'Add';
            this.form = {};
        }
    },

}
</script>

