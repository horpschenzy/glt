<template>
    <layout >
        <title-bar :name="compoName"></title-bar>
        <div class="row" id="slide-in">
            <div class="col-12 ">
                <div class="card">
                    <div class="card-content">
                        <div class="card-body card-dashboard mb-2">
                            <div class="pull-right">
                                <button class="btn btn-primary" data-toggle="modal"  @click="clearRec()" data-target="#addPermissionModal">
                                    <i class="feather icon-home"></i> Add Permission
                                </button>

                                <inertia-link href="/roles" class="btn btn-secondary">
                                    <i class="feather icon-shield"></i><span class="menu-title" data-i18n="">Roles</span>
                                </inertia-link>
                            </div>
                            <h4 class="card-title"> Permission</h4>
                            <div class="table-responsive mt-2">
                                <table class="table table-hover zero-configuration">
                                    <thead>
                                        <tr>
                                            <th>Permission ID</th>
                                            <th>Permission Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(permission, key) in permissions" v-bind:key="permission.id">
                                            <td>{{ key + 1 }} </td>
                                            <td>{{ permission.name }}</td>
                                            <td>
                                                <button class="btn btn-success btn-rounded btn-sm" @click="currentRec(permission);" data-toggle="modal"  data-target="#addPermissionModal"><i class="feather icon-edit"></i></button>
                                                <button class="btn btn-info btn-rounded btn-sm" @click="deletePermission(permission.id);"><i class="feather icon-delete"></i></button>
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

        <div class="modal fade text-left" id="addPermissionModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel33" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel33">{{ addEdit }} Permission </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form class="form form-vertical" method="POST" action="#" @submit.prevent="submit">
                        <div class="modal-body row m-1">
                            <div class="row">
                                <div class="form-group col-12">
                                    <label for="first-name-icon">Permission Name</label>
                                    <div class="position-relative has-icon-left">
                                        <input type="text" v-model="form.name" placeholder="Permission Name" required=""  class="form-control">
                                        <div class="form-control-position">
                                            <i class="feather icon-home"></i>
                                        </div>
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
        permissions: Array,
    },
    data (){
        return {
            compoName : 'Permission',
            loader : false,
            addEdit : '',
            form: {
                name: '',
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
        deletePermission(id) {
            this.$swal({
                title: 'Delete Permission?',
                text: 'You can\'t revert your action',
                type: 'success',
                showCancelButton: true,
                confirmButtonText: 'Yes, Delete it!',
                cancelButtonText: 'No, Cancel!',
                showCloseButton: true,
                showLoaderOnConfirm: true
            }).then((result) => {
                if(result.value) {
                    axios.get("/permission/delete/"+ id)
                        .then(response => {
                            toastr.success(response.data.success, 'Success');
                            this.$inertia.visit('permissions');

                        }).catch(error => {
                        toastr.error(error.response.data.message, 'Error');
                    });
                } else {
                    this.$swal('Cancelled', 'Your file is still intact', 'info')
                }
            })
        },
        submit() {
            this.loader = true;
            axios.post("permission/add", this.form)
                .then(response => {
                    toastr.success(response.data.success, 'Success');
                    $('#addPermissionModal').modal('hide');
                    this.$inertia.visit('permissions');
                    this.loader = false;
                }).catch(error => {
                this.loader = false;
                toastr.error(error.response.data.message, 'Error');

            });

        },

        currentRec(permission){
            this.addEdit = 'Edit';
            this.form = permission;
        },

        clearRec(){
            this.addEdit = 'Add';
            this.form = {};
        }
    },

}
</script>

