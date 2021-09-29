    <template>
        <layout >
            <title-bar :name="compoName"></title-bar>
            <div class="row" id="slide-in">
                <div class="col-12 ">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body card-dashboard mb-2">
                                <div class="pull-right">
                                    <button class="btn btn-primary" data-toggle="modal"  @click="clearRec()" data-target="#addRoleModal">
                                        <i class="feather icon-home"></i> Add Role
                                    </button>

                                    <inertia-link href="/permissions" class="btn btn-secondary">
                                        <i class="feather icon-shield"></i><span class="menu-title" data-i18n="">Permissions</span>
                                    </inertia-link>
                                </div>
                                <h4 class="card-title"> Roles</h4>
                                <div class="table-responsive">
                                    <table class="table table-hover zero-configuration">
                                        <thead>
                                        <tr>
                                            <th>Role Id</th>
                                            <th>Role Name</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="(role, key) in roles" v-bind:key="role.id">
                                            <td>{{ key + 1 }} </td>
                                            <td>{{ role.name }}</td>
                                            <td>
                                                <button class="btn btn-success btn-rounded btn-sm" @click="getRolePermission(role);" data-toggle="modal"  data-target="#addRoleModal"><i class="feather icon-edit"></i></button>
                                                <button class="btn btn-info btn-rounded btn-sm" @click="deleteRole(role.id);"><i class="feather icon-delete"></i></button>
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

            <div class="modal fade text-left" id="addRoleModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel33" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered " role="document">
                    <div class="modal-content modal-dialog-scrollable">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel33">{{ addEdit }} Role </h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form class="form form-vertical" method="POST" action="#" @submit.prevent="submit">
                            <div class="modal-body row m-1">
                                <div class="row">
                                    <div class="form-group col-12" v-if="!form.id">
                                        <label>Role Name</label>
                                        <div class="position-relative has-icon-left">
                                            <input type="text" v-model="form.name" placeholder="Role Name" required=""  class="form-control">
                                            <div class="form-control-position">
                                                <i class="feather icon-home"></i>
                                            </div>
                                        </div>

                                    </div>

                                    <h3> <label for="">Permissions</label></h3>
                                    <div class="form-group col-12">
                                        <div class="position-relative has-icon-left">
                                            <fieldset>
                                                <div class="vs-checkbox-con vs-checkbox-primary" v-for="(permission) in permissions" :key='permission.id'>
                                                    <input  v-model="form.permission" type="checkbox" :checked="(form.permission.indexOf(permission.id) != -1) ? true : false" :value="permission.id">
                                                    <span class="vs-checkbox vs-checkbox-lg">
                                                        <span class="vs-checkbox--check">
                                                            <i class="vs-icon feather icon-check"></i>
                                                        </span>
                                                    </span>
                                                    <span class="text-md">{{ permission.name }}</span>
                                                </div>
                                            </fieldset>

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
                roles: Array,
                permissions: Array
            },
            data (){
                return {
                    compoName : 'Roles',
                    loader : false,
                    addEdit : '',
                    form: {
                        name: '',
                        id: '',
                        permission:[],
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
                getRolePermission(role){
                    this.addEdit = 'Edit';
                    this.form.name = role.name;
                    this.form.id = role.id;

                    axios.post("/getRolePermissions", this.form)
                    .then(response => {
                        this.form.permission = response.data.map(function (obj) {
                            return obj.permission_id;
                        });
                    }).catch(error => {
                        this.data.status = false;
                        toastr.error(error.response.data.message, 'Error');

                    });
                },
                deleteRole(id) {
                    this.$swal({
                        title: 'Delete Roles?',
                        text: 'You can\'t revert your action',
                        type: 'success',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, Delete it!',
                        cancelButtonText: 'No, Cancel!',
                        showCloseButton: true,
                        showLoaderOnConfirm: true
                    }).then((result) => {
                        if(result.value) {
                            axios.get("/role/delete/"+ id)
                                .then(response => {
                                    toastr.success(response.data.success, 'Success');
                                    this.$inertia.visit('roles');

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
                    if(this.form.id){
                        axios.post("/assign/permission", this.form)
                            .then(response => {
                                toastr.success(response.data.success, 'Success');
                                $('#addRoleModal').modal('hide');
                                this.form.name = '';
                                this.form.id = '';
                                this.form.permission = [];
                                this.$inertia.visit('roles');
                                this.loader = false;
                            }).catch(error => {
                            this.loader = false;
                            toastr.error(error.response.data.message, 'Error');
                        });
                    }else{
                        axios.post("/role/add", this.form)
                            .then(response => {
                                toastr.success(response.data.success, 'Success');
                                $('#addRoleModal').modal('hide');
                                this.$inertia.visit('roles');
                                this.loader = false;
                            }).catch(error => {
                            this.loader = false;
                            toastr.error(error.response.data.message, 'Error');
                        });
                    }

                },

                currentRec(role){
                    this.addEdit = 'Edit';
                    this.form = role;
                },

                clearRec(){
                    this.addEdit = 'Add';
                    this.form.name = '';
                    this.form.id = '';
                    this.form.permission = [];
                }
            },

        }
    </script>



