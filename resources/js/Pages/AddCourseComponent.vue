<template>
<div>
  <layout>
      <div class="pull-right">
            <inertiaLink href="/course" class="btn btn-primary" v-if="is('super-admin')">
                <i class="feather icon-home"></i> VIEW COURSES
            </inertiaLink>
        </div>
        <title-bar :name="compoName"></title-bar>
        <div class="row" id="slide-in">
            <div class="col-xl-6 col-md-6 col-sm-12">
                <div class="card">
                    <div class="card-content">
                        <div class="card-body">
                            <form class="form" method="POST" action="#" @submit.prevent="submit">
                                <div class="form-body">
                                    <div class="row">
                                         <div class="col-md-8 col-12">
                                            <div class="form-label-group">
                                                <label for="first-name-icon">Course Title</label>
                                                <div class="position-relative has-icon-left">
                                                    <input type="text" v-model="form.course_title"  placeholder="Course Title"  class="form-control form-control-primary">
                                                    <div class="form-control-position">
                                                        <i class="feather icon-smartphone"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <div class="form-label-group">
                                                <label for="first-name-icon">Course Code</label>
                                                <div class="position-relative has-icon-left">
                                                    <input type="text" v-model="form.course_code" placeholder="Course Code" required=""  class="form-control">
                                                    <div class="form-control-position">
                                                        <i class="feather icon-navigation"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 col-12">
                                            <fieldset class="form-group">
                                                <label for="basicInputFile">Course Image (width X height)</label>
                                                <div class="custom-file">
                                                    <input type="file" class="custom-file-input" id="inputGroupFile01"
                                                        accept="image/*"
                                                        data-default-file=""
                                                        data-height="200"
                                                        data-max-file-size="5M"
                                                        data-width="100"
                                                        data-allowed-file-extensions="jpg jpeg gif png rpg jfif"
                                                        @change="onImageChange"/>
                                                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 col-12">
                                            <div class="form-label-group">
                                                <label for="first-name-icon">Course Description</label>
                                                <textarea class="form-control" rows="10" v-model="form.course_description" placeholder="Course Description"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <button type="submit" class="btn btn-primary mr-1 mb-1 waves-effect waves-light">Submit</button>
                                            <button type="reset" class="btn btn-outline-warning mr-1 mb-1 waves-effect waves-light">Reset</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade text-left" id="addCourseModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel33" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel33">{{ addEdit }} Course </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form class="form form-vertical" method="POST" action="#" @submit.prevent="submit">
                        <div class="modal-body row m-1">
                            <div class="row">
                                <div class="form-group col-12">
                                    <label for="first-name-icon">Course Code</label>
                                    <div class="position-relative has-icon-left">
                                        <input type="text" v-model="form.course_code" placeholder="Course Code" required=""  class="form-control">
                                        <div class="form-control-position">
                                            <i class="feather icon-navigation"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group col-12">
                                    <label for="first-name-icon">Course Title</label>
                                    <div class="position-relative has-icon-left">
                                        <input type="text" v-model="form.course_title"  placeholder="Course Title"  class="form-control">
                                        <div class="form-control-position">
                                            <i class="feather icon-smartphone"></i>
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
        },
        data (){
            return {
                compoName : 'Upload Course',
                loader : false,
                addEdit : '',
                form: {
                    course_code: '',
                    course_img: '',
                    course_description: '',
                    course_title: '',
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

            onImageChange(e) {
                let files = e.target.files || e.dataTransfer.files;

                return this.createImage(files[0]);

            },
            createImage(file) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.form.course_img = e.target.result;
                };

                reader.readAsDataURL(file);
            },
            deleteCourse(id) {
                this.$swal({
                    title: 'Delete Course?',
                    text: 'You can\'t revert your action',
                    type: 'success',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Delete it!',
                    cancelButtonText: 'No, Cancel!',
                    showCloseButton: true,
                    showLoaderOnConfirm: true
                }).then((result) => {
                    if(result.value) {
                        axios.get("/course/delete/"+ id)
                        .then(response => {
                            toastr.success(response.data.success, 'Success');
                            this.$inertia.visit('course');

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
                axios.post("/course/add", this.form)
                .then(response => {
                toastr.success(response.data.success, 'Success');
                $('#addCourseModal').modal('hide');
                    this.$inertia.visit('course');
                    this.loader = false;
                }).catch(error => {
                    this.loader = false;
                    toastr.error(error.response.data.message, 'Error');

                });

            },

            currentRec(course){
                this.addEdit = 'Edit';
                this.form = course;
            },

            clearRec(){
                this.addEdit = 'Add';
                this.form = {};
            }
        },
        created() {

        },
    }
</script>


