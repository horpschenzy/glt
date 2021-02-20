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
                                <button class="btn btn-primary" data-toggle="modal"  @click="clearRec()" data-target="#addTeacherModal">
                                    <i class="feather icon-user"></i> Add Teacher
                                </button>
                            </div>
                            <h4 class="card-title">Teachers</h4>
                            <div class="table-responsive mt-2">
                                <table class="table table-hover zero-configuration">
                                    <thead>
                                        <tr>
                                            <th>S/N</th>
                                            <th>Teacher Name</th>
                                            <th>Teacher Email</th>
                                            <th>Teacher Phone Number</th>
                                            <th>Date Added</th>
                                            <th v-if="is('super-admin|admin')">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(teacher, key) in teachers" v-bind:key="teacher.id">
                                            <td>{{ key + 1 }} </td>
                                            <td>{{ teacher.user.name }}</td>
                                            <td>{{ teacher.user.email }}</td>
                                            <td>{{ teacher.user.phone }}</td>
                                            <td>{{ teacher.created_at }}</td>
                                            <td v-if="is('super-admin|admin')">
                                                <button class="btn btn-info btn-rounded btn-sm" @click="deleteTeacher(teacher.user.id);"><i class="feather icon-delete"></i></button>
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

        <div class="modal fade text-left" id="addTeacherModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel33" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel33">{{ addEdit }} Teacher </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form class="form form-vertical" method="POST" action="#" @submit.prevent="submit">
                        <div class="modal-body m-1">
                            <div class="row">
                                <div class="form-group col-12">
                                    <label for="first-name-icon">Teachers</label>
                                    <select class="form-control" v-model="teacher_id" required>
                                        <option value="">Select Teacher</option>
                                        <option v-for="teacher in allTeachers" :key="teacher.user.id" :value="teacher.user.id">{{ teacher.user.name }}</option>
                                    </select>
                                    <div class="position-relative has-icon-left">
                                        <div class="form-control-position">
                                            <i class="feather icon-user"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary mr-1  waves-effect waves-light"> <i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i>Add</button>
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
            allTeachers: Array,
            teachers: Array,
        },
        data (){
            return {
                compoName : 'FBS Teacher',
                loader : false,
                addEdit : '',
                teacher_id: ''
            }
        },
        mounted () {
            this.$nextTick(function() {
                selectActiveMenu();
                $('.zero-configuration').DataTable( { "aaSorting": [] } );
            })
        },

        methods: {

            deleteTeacher(id) {
                this.$swal({
                    title: 'Delete Teacher?',
                    text: 'You can\'t revert your action',
                    type: 'success',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Delete it!',
                    cancelButtonText: 'No, Cancel!',
                    showCloseButton: true,
                    showLoaderOnConfirm: true
                }).then((result) => {
                    if(result.value) {
                        axios.get("/teacher/delete/"+ id)
                        .then(response => {
                            toastr.success(response.data.success, 'Success');
                            this.$inertia.visit('teachers');
                        }).catch(error => {
                            toastr.error(error.response.data.error, 'Error');
                        });
                    } else {
                        this.$swal('Cancelled', 'Your file is still intact', 'info')
                    }
                })
            },

            submit() {
                this.loader = true;
                axios.get("/add/teacher/"+this.teacher_id)
                .then(response => {
                toastr.success(response.data.success, 'Success');
                $('#addTeacherModal').modal('hide');
                    this.$inertia.visit('teachers');
                    this.loader = false;
                }).catch(error => {
                    this.loader = false;
                    toastr.error(error.response.data.message, 'Error');

                });

            },

            clearRec(){
                this.addEdit = 'Add';
                this.form = {};
            }
        },
    }
</script>


