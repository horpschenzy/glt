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
                                <button class="btn btn-primary" data-toggle="modal"  @click="clearRec()" data-target="#addStudentModal">
                                    <i class="feather icon-user"></i> Add Student
                                </button>
                            </div>
                            <h4 class="card-title">Students</h4>
                            <div class="table-responsive mt-2">
                                <table class="table table-hover zero-configuration">
                                    <thead>
                                        <tr> 
                                            <th>S/N</th>
                                            <th>Student Id</th>
                                            <th>Student Name</th>
                                            <th>Student Email</th>
                                            <th>Student Phone Number</th>
                                            <th>Status</th>
                                            <th>Date Added</th>
                                            <th v-if="is('super-admin')">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(student, key) in students" v-bind:key="student.id">
                                            <td>{{ key + 1 }} </td>
                                            <td>{{ student.student_id }}</td>
                                            <td>{{ student.user.name }}</td>
                                            <td>{{ student.user.email }}</td>
                                            <td>{{ student.user.phone }}</td>
                                            <td>{{ student.status}}</td>
                                            <td>{{ student.created_at }}</td>
                                            <td v-if="is('super-admin')">
                                                <button class="btn btn-success btn-rounded btn-sm" @click="currentRec(student.id)" data-target="#assignTeacherModal" data-toggle="modal" v-if="student.teachers.length > 0">Re-Assign Teacher</button>
                                                <button class="btn btn-success btn-rounded btn-sm" @click="currentRec(student.id)" data-target="#assignTeacherModal" data-toggle="modal" v-else>Assign Teacher</button>
                                            </td>
                                            <td v-if="is('super-admin')">
                                                <button class="btn btn-info btn-rounded btn-sm" @click="deleteStudent(student.user.id);"><i class="feather icon-delete"></i></button>
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

        <div class="modal fade text-left" id="assignTeacherModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel33">Assign Teacher </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form class="form form-vertical" method="POST" action="#" @submit.prevent="assign">
                        <div class="modal-body m-1">
                            <div class="row">
                                <div class="form-group col-12">
                                    <label for="first-name-icon">Teachers</label>
                                    <select class="form-control" v-model="form.teacher_id" required>
                                        <option value="">Select Teacher</option>
                                        <option v-for="teacher in allTeachers" :key="teacher.id" :value="teacher.id">{{ teacher.user.name }}</option>
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
                            <button type="submit" class="btn btn-primary mr-1  waves-effect waves-light"> <i class="fa fa-circle-o-notch fa-spin mr-3" v-if="loader"></i>Assign</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="modal fade text-left" id="addStudentModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel33" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel33">{{ addEdit }} Student </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form class="form form-vertical" method="POST" action="#" @submit.prevent="submit">
                        <div class="modal-body m-1">
                            <div class="row">
                                <div class="form-group col-12">
                                    <label for="first-name-icon">Students</label>
                                    <select class="form-control" v-model="student_id" required>
                                        <option value="">Select Student</option>
                                        <option v-for="student in allStudents" :key="student.user.id" :value="student.user.id">{{ student.user.name }}</option>
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
            allStudents: Array,
            allTeachers: Array,
            students: Array,
        },
        data (){
            return {
                compoName : 'FBS Student',
                loader : false,
                addEdit : '',
                student_id: '',
                form: {
                    teacher_id : '',
                    student_id : '',
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
            deleteStudent(id) {
                this.$swal({
                    title: 'Delete Student?',
                    text: 'You can\'t revert your action',
                    type: 'success',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Delete it!',
                    cancelButtonText: 'No, Cancel!',
                    showCloseButton: true,
                    showLoaderOnConfirm: true
                }).then((result) => {
                    if(result.value) {
                        axios.get("/student/delete/"+ id)
                        .then(response => {
                            toastr.success(response.data.success, 'Success');
                            this.$inertia.visit('students');
                        }).catch(error => {
                            toastr.error(error.response.data.error, 'Error');
                        });
                    } else {
                        this.$swal('Cancelled', 'Your file is still intact', 'info')
                    }
                })
            },

            assign() {
                this.loader = true;
                axios.post("/assign/teacher", this.form)
                .then(response => {
                toastr.success(response.data.success, 'Success');
                    $('#assignTeacherModal').modal('hide');
                    this.$inertia.visit('students');
                    this.loader = false;
                }).catch(error => {
                    this.loader = false;
                    toastr.error(error.response.data.message, 'Error');

                });

            },
            
            submit() {
                this.loader = true;
                axios.get("/member/move/"+this.student_id)
                .then(response => {
                toastr.success(response.data.success, 'Success');
                $('#addStudentModal').modal('hide');
                    this.$inertia.visit('students');
                    this.loader = false;
                }).catch(error => {
                    this.loader = false;
                    toastr.error(error.response.data.message, 'Error');

                });

            },

            clearRec(){
                this.addEdit = 'Add';
                this.form = {};
            },
            
            currentRec(student_id){
                this.form.student_id = student_id;
            }
        },
    }
</script>


